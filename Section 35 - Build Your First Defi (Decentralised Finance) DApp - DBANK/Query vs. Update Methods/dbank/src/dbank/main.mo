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

  // Querying values. Functions that return something have to 
  // return asynchronously.
  // Synchronous - Only a single "thread".
  // Asynchronous - Multiple "threads".
  public query func checkBalance(): async Nat
  {
    return currentValue;
  };

};

// Methods take longer to execute because they write to
// the blockchain everytime a value is uupdated. Expensive op.

// Query - Query the current state without changing it.
// Update - Change the state and persist it.