import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Principal } from "@dfinity/principal";

// This versions differs from OpenSea because it will store all the NFT data in the
// blockchain, whereas OpenSea uses a smart contract that stores the NFT data in third-party
// websites.

const CURRENT_USER_ID = Principal.fromText("2vxsx-fae");
export default CURRENT_USER_ID;

const init = async () =>
{
  ReactDOM.render(<App />, document.getElementById("root"));
};

init();
