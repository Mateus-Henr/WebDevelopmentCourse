import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { nft } from "../../../declarations/nft";
import Item from "./Item";
import Minter from "./Minter";

function App()
{
  const NFTID = "rkp4c-7iaaa-aaaaa-aaaca-cai";

  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
