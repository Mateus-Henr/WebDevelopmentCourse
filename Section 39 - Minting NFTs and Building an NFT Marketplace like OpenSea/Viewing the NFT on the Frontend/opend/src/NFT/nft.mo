import Debug "mo:base/Debug";
import Nat8 "mo:base/Nat8";
import Principal "mo:base/Principal";
import Text "mo:base/Text";

// Each NFT will have its unique Principal ID.
actor class NFT(name: Text, owner: Principal, content: [Nat8])
{
    private let itemName = name;
    private let nftOwner = owner;
    let imageBytes = content;

    public query func getName() : async Text
    {
        return itemName;
    };

    public query func getOwner() : async Principal
    {
        return nftOwner;
    };

    public query func getAsset() : async [Nat8]
    {
        return imageBytes;
    };
};

// In the README.md file you can find how to deploy an actor class.