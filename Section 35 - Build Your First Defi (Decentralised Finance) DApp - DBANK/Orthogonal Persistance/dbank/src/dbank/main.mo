import Debug "mo:base/Debug";
import Nat "mo:base/Nat";

// Orthogonal Persistence
// In a canister in a ICP we don't have to restart the state
// everytime the app code runs.

actor DBank
{
  // This "stable" keyword turns the variable into a persistented
  // varaible. It won't restart upon app's restart.
  stable var currentValue: Nat = 300;

  // The operator below is a replace operator, so whenever
  // the code runs the value will be changed.
  // currentValue := 100;

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

  public query func checkBalance(): async Nat
  {
    return currentValue;
  };

};