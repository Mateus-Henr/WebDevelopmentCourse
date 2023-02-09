import React, { useState } from "react";
import { Principal } from "@dfinity/principal" // Motoko functions in the frontend.
import { token } from "../../../declarations/token/index";

function Balance()
{
  const [inputValue, setInputValue] = useState("");
  const [balanceResult, setBalanceResult] = useState("");
  const [symbol, setSymbol] = useState("");
  const [isHidden, setIsHiddent] = useState(true);

  async function handleClick()
  {
    const balance = await token.balanceOf(Principal.fromText(inputValue));
  
    setBalanceResult(balance.toLocaleString() + " " + symbol);
    setSymbol(await token.getSymbol());
    setIsHiddent(false);
  }


  return (
    <div className="window white">
      <label>Check account token balance:</label>
      <p>
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </p>
      <p className="trade-buttons">
        <button
          id="btn-request-balance"
          onClick={handleClick}
        >
          Check Balance
        </button>
      </p>
      <p hidden={isHidden}>This account has a balance of {balanceResult} {symbol}.</p>
    </div>
  );
}

export default Balance;
