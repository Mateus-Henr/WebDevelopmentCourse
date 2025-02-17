import Principal "mo:base/Principal";
import Text "mo:base/Text";
import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Iter "mo:base/Iter";

actor Token
{
    private stable let owner: Principal = Principal.fromText("ug3rx-t72d2-dc4av-iie65-ocbzx-emf3u-hr52y-h7vus-xmw7z-7gmsb-5qe");
    private stable let totalSupply: Nat = 1000000000;
    private stable let symbol: Text = "DMATT";

    // Tuple - Passing data around to keep things "stable".
    private stable var balanceEntries: [(Principal, Nat)] = [];

    private var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);

    if (balances.size() < 1)
    {
        balances.put(owner, totalSupply);
    };

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
    };

    public query func getSymbol() : async Text
    {
        return symbol;
    };
 
    // By using the keyword "shared" we can track who called the function.
    public shared(msg) func payOut() : async Text
    {
        Debug.print(debug_show(msg));

        if (balances.get(msg.caller) == null)
        {
            let amount = 10000;

            let result = await transfer(msg.caller, amount);

            return result;
        };

        return "Already Claimed";
    };

    // This is the only method that has access to transfers.
    public shared(msg) func transfer(to: Principal, amount: Nat) : async Text
    {
        let fromBalance = await balanceOf(msg.caller);

        if (fromBalance > amount)
        {
            let newFromBalance: Nat = fromBalance - amount;

            balances.put(msg.caller, newFromBalance);


            let toBalance = await balanceOf(to);
            let newToBalance: Nat = toBalance + amount;

            balances.put(to, newToBalance);

            return "Success";   
        };

        return "Insufficient Funds";
    };

    // System methods.
    system func preupgrade()
    {
        balanceEntries := Iter.toArray(balances.entries());
    };

    system func postupgrade()
    {
        balances := HashMap.fromIter<Principal, Nat>(balanceEntries.vals(), 1, Principal.equal, Principal.hash);
        
        if (balances.size() < 1)
        {
            balances.put(owner, totalSupply);
        };
    };
};