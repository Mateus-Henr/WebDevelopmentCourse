import Text "mo:base/Text";
import Principal "mo:base/Principal";
import Cycles "mo:base/ExperimentalCycles";
import NFTActorClass "../NFT/nft";
import Debug "mo:base/Debug";

actor OpenD
{
    public shared(msg) func mint(imgData : [Nat8], name: Text) : async Principal
    {
        let owner: Principal = msg.caller;

        Debug.print(debug_show(Cycles.balance()));
        // This is a way to allocate cycles to an actor class which will be deployed
        // programatically.
        Cycles.add(100_500_000_000);
        Debug.print(debug_show(Cycles.balance()));
        let newNFT = await NFTActorClass.NFT(name, owner, imgData);

        return await newNFT.getCanisterId();
    };
};
