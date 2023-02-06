import Debug "mo:base/Debug";

// A canister is similar to a container in that both are deployed as a 
// software unit that contains compiled code and dependencies for an application or service.
// Actor is a class, which is basically our canister.
actor DBank
{
  var currentValue = 300;

  // This is how to replace the current value to a new one.
  currentValue := 100;

  // Constant.
  let id = 23343455453453465;

  // Invalid
  // id := 21324; 

  Debug.print(debug_show(currentValue));
  Debug.print(debug_show(id));
}