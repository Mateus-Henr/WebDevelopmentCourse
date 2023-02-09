import Principal "mo:base/Principal";
import Text "mo:base/Text";
import HashMap "mo:base/HashMap";

// "Principal" is a way of identidying an id or a canister.

// Command to get the current user ID
// dfx identity get-principal

// We assign tokens to an ID to tell the code that the token belongs to that user.

actor Token
{
    stable let owner: Principal = Principal.fromText("ug3rx-t72d2-dc4av-iie65-ocbzx-emf3u-hr52y-h7vus-xmw7z-7gmsb-5qe");
    stable var totalSupply: Nat = 1000000000;
    stable let symbol: Text = "DMATT";

    // HashMap - Parameters (initialSize, checkKeyEquality, keyHash)
    var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);

    balances.put(owner, totalSupply);

    public query func balanceOf(who: Principal) : async Nat
    {
        // This get method has a datatype of "?Int" that is basically a typesafe null.
        // It's either an Int or null.
        let balance: Nat = switch (balances.get(who))
        {
            case null 0;
            case (?result) result;
        };

        return balance;
    }
}