import Text "mo:base/Text";
import Principal "mo:base/Principal";
import Cycles "mo:base/ExperimentalCycles";
import NFTActorClass "../NFT/nft";
import Debug "mo:base/Debug";
import HashMap "mo:base/HashMap";
import List "mo:base/List";
import Iter "mo:base/Iter";
import Bool "mo:base/Bool";
import Nat "mo:base/Nat";

actor OpenD {
    // New datatype
    private type Listing = {
        itemOwner : Principal;
        itemPrice : Nat;
    };

    private var mapOfNFTs = HashMap.HashMap<Principal, NFTActorClass.NFT>(1, Principal.equal, Principal.hash);
    private var mapOfOwners = HashMap.HashMap<Principal, List.List<Principal>>(1, Principal.equal, Principal.hash);
    private var mapOfListings = HashMap.HashMap<Principal, Listing>(1, Principal.equal, Principal.hash);

    public shared (msg) func mint(imgData : [Nat8], name : Text) : async Principal {
        let owner : Principal = msg.caller;

        // Cycles.add(200_000);

        let newNFT = await NFTActorClass.NFT(name, owner, imgData);
        let newNFTPrincipal = await newNFT.getCanisterId();

        mapOfNFTs.put(newNFTPrincipal, newNFT);
        addToOwnershipMap(owner, newNFTPrincipal);

        return newNFTPrincipal;
    };

    private func addToOwnershipMap(owner : Principal, nftId : Principal) {
        var ownedNFTs : List.List<Principal> = switch (mapOfOwners.get(owner)) {
            case null List.nil<Principal>();
            case (?result) result;
        };

        ownedNFTs := List.push(nftId, ownedNFTs);
        mapOfOwners.put(owner, ownedNFTs);
    };

    public query func getOwnedNFTs(user : Principal) : async [Principal] {
        var ownedNFTs : List.List<Principal> = switch (mapOfOwners.get(user)) {
            case null List.nil<Principal>();
            case (?result) result;
        };

        return List.toArray(ownedNFTs);
    };

    public query func getListedNFTs() : async [Principal] {
        return Iter.toArray(mapOfListings.keys());
    };

    public shared (msg) func listItem(id : Principal, price : Nat) : async Text {
        var item : NFTActorClass.NFT = switch (mapOfNFTs.get(id)) {
            case null return "NFT does not exist.";
            case (?result) result;
        };

        let owner : Principal = await item.getOwner();

        // Checks if who called this method is the owner of the NFT.
        if (Principal.equal(owner, msg.caller)) {
            let newListing : Listing = {
                itemOwner = owner;
                itemPrice = price;
            };

            mapOfListings.put(id, newListing);

            return "Success";
        };

        return "You don't own the NFT.";
    };

    public query func getOpenDCanisterID() : async Principal {
        return Principal.fromActor(OpenD);
    };

    public query func isListed(id : Principal) : async Bool {
        if (mapOfListings.get(id) == null) {
            return false;
        };

        return true;
    };

    public query func getOriginalOwner(id : Principal) : async Principal {
        let listing : Listing = switch (mapOfListings.get(id)) {
            case null return Principal.fromText("");
            case (?result) result;
        };

        return listing.itemOwner;
    };

    public query func getListedNFTPrice(id : Principal) : async Nat {
        let listing : Listing = switch (mapOfListings.get(id)) {
            case null return 0;
            case (?result) result;
        };

        return listing.itemPrice;
    };

    public shared (msg) func completePurchase(id : Principal, ownerId : Principal, newOwnerId : Principal) : async Text {
        let purchasedNFT : NFTActorClass.NFT = switch (mapOfNFTs.get(id)) {
            case null return "NFT does not exist";
            case (?result) result;
        };

        let transferResult = await purchasedNFT.transferOwnership(newOwnerId);

        if (transferResult == "Success") {
            mapOfListings.delete(id);

            var ownedNFTs : List.List<Principal> = switch (mapOfOwners.get(ownerId)) {
                case null List.nil<Principal>();
                case (?result) result;
            };

            ownedNFTs := List.filter(ownedNFTs, func(listItemId : Principal) : Bool { return listItemId != id });

            addToOwnershipMap(newOwnerId, id);

            return "Success";
        };

        return transferResult;
    };
};
