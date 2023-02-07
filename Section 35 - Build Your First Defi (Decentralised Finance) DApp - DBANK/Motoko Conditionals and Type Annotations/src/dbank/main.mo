import Debug "mo:base/Debug";
import Nat "mo:base/Nat";

actor DBank
{
  var currentValue = 300;

  currentValue := 100;

  public func topUp(amount: Nat)
  {
    currentValue += amount;

    Debug.print(debug_show(currentValue));
  };

  public func withdraw(amount: Nat)
  {
    let tempValue: Int = currentValue - amount;

    if (tempValue >= 0)
    {
      currentValue -= amount;
      Debug.print(debug_show(currentValue));
    }
    else
    {
      Debug.print("Insufficient balance.");
    };
  };
};

// Accessing the UI
// dfx canister id __Candid_UI
// http://localhost:8080/?canisterId={UI_ID}
// dfx canister id dbank