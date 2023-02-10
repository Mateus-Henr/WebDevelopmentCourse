import React, { useState } from "react";
import { token } from "../../../declarations/token/index";

function Faucet() 
{
  const [isDisabled, setIsDisabled] = useState(false);
  const [buttonText, setButtonText] = useState("Gimme Gimme");

  async function handleClick(event)
  {
    setIsDisabled(true);

    // An anonymous user will have an ID when using the frontend.
    const statusMessage = await token.payOut();

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
      <label>Get your free DMatt tokens here! Claim 10,000 DANG coins to your account.</label>
      <p className="trade-buttons">
        <button id="btn-payout" disabled={isDisabled} onClick={handleClick}>
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
