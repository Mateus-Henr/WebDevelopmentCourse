import ReactDOM from 'react-dom'
import React from 'react'
import App from "./components/App";
import { AuthClient } from "@dfinity/auth-client"

const init = async () => 
{ 
  // There are several adavantages of using this login method, being some of them: 
  // It caches login information automatically.  
  // It has a simple authentication method.
  const authClient = await AuthClient.create();

  if (authClient.isAuthenticated)
  {
    handleAuthenticated(authClient);
    
    return;
  }

  await authClient.login({
    identityProvider: "https://identity.ic0.app/#authorize",
    onSuccess: () =>
    {
      handleAuthenticated(authClient);
    }
  });
}

async function handleAuthenticated(authClient)
{
  ReactDOM.render(<App />, document.getElementById("root"));
}

init();


