import Debug "mo:base/Debug";

actor DBank
{
  var currentValue = 300;

  currentValue := 100;

  // A function is private if it doesn't have the "public" keyword.
  public func topUp(amount: Nat)
  {
    currentValue += amount;

    Debug.print(debug_show(currentValue));
  };

  public func withdraw(amount: Nat)
  {
    currentValue -= amount;

    Debug.print(debug_show(currentValue));
  }

  // topUp();
}

// Calling through terminal
// dfx canister call dbank topUp

// Accessing the UI
// dfx canister id __Candid_UI
// http://localhost:8080/?canisterId={UI_ID}
// dfx canister id dbank