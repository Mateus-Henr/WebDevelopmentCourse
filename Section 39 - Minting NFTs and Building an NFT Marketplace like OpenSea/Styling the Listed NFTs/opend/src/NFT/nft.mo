import Debug "mo:base/Debug";
import Nat8 "mo:base/Nat8";
import Principal "mo:base/Principal";
import Text "mo:base/Text";

// Each NFT will have its unique Principal ID.
actor class NFT(name : Text, owner : Principal, content : [Nat8]) = this {
    private let itemName = name;
    private var nftOwner = owner;
    private let imageBytes = content;

    public query func getName() : async Text {
        return itemName;
    };

    public query func getOwner() : async Principal {
        return nftOwner;
    };

    public query func getAsset() : async [Nat8] {
        return imageBytes;
    };

    public query func getCanisterId() : async Principal {
        return Principal.fromActor(this);
    };

    public shared (msg) func transferOwnership(newOwner : Principal) : async Text {
        if (Principal.equal(msg.caller, nftOwner)) {
            nftOwner := newOwner;

            return "Success";
        };

        return "Error: Not initiated by NFT Owner.";
    };
};

// In the README.md file you can find how to deploy an actor class.
