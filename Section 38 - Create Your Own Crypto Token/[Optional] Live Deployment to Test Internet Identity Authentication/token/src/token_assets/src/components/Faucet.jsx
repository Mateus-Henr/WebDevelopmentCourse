import React, { useState } from "react";
import { token, canisterId, createActor } from "../../../declarations/token";
import { AuthClient } from "@dfinity/auth-client"

function Faucet(props) 
{
  const [isDisabled, setIsDisabled] = useState(false);
  const [buttonText, setButtonText] = useState("Gimme Gimme");

  async function handleClick(event)
  {
    setIsDisabled(true);

    const authClient = await AuthClient.create();
    const identity = await authClient.getIdentity();

    const authenticatedCanister = createActor(canisterId, {
      agentOptions: {
        identity,
      },
    });

    // An anonymous user will have an ID when using the frontend.
    const statusMessage = await authenticatedCanister.payOut();

    setButtonText(statusMessage);
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free DMatt tokens here! Claim 10,000 DANG coins to {props.userPrincipal}</label>
      <p className="trade-buttons">
        <button id="btn-payout" disabled={isDisabled} onClick={handleClick}>
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
