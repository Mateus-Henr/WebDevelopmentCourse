import React, { useEffect, useState } from "react";
import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from "../../../declarations/nft";
import Button from "./Button";
import { opend } from "../../../declarations/opend";
import CURRENT_USER_ID from "../index";
import PriceLabel from "./PriceLabel";

// IDEL - Interface Descriptive Language
function Item(props)
{
  const [name, setName] = useState();
  const [owner, setOwner] = useState();
  const [image, setImage] = useState();
  const [button, setButton] = useState();
  const [priceInput, setPriceInput] = useState();
  const [loaderHidden, setLoaderHidden] = useState(true);
  const [blur, setBlur] = useState();
  const [sellStatus, setSellStatus] = useState();
  const [priceLabel, setPriceLabel] = useState();

  const id = props.id;

  const localHost = "http://localhost:8080/";
  const agent = new HttpAgent({ host: localHost }); // Used to fetch data.
  agent.fetchRootKey(); // Remove this when deploying it live.
  let NFTActor;

  async function loadNFT()
  {
    NFTActor = await Actor.createActor(idlFactory, {
      agent,
      canisterId: id
    });

    const name = await NFTActor.getName();
    setName(name);

    const owner = await NFTActor.getOwner();
    setOwner(owner.toString());

    const imageData = await NFTActor.getAsset();
    setImage(URL.createObjectURL(new Blob([new Uint8Array(imageData).buffer], { type: "image/png" })));

    if (props.role === "collection")
    {
      const nftIsListed = await opend.isListed(props.id);

      if (nftIsListed)
      {
        setOwner("OpenD");
        setBlur({ filter: "blur(4px)" });
        setSellStatus("Listed");
      }

      setButton(<Button handleClick={handleSell} text="Sell" />);
    }
    else if (props.role === "discover")
    {
      const originalOwner = await opend.getOriginalOwner(props.id);

      if (originalOwner.toText() !== CURRENT_USER_ID.toText())
      {
        setButton(<Button handleClick={handleBuy} text="Buy" />);
      }

      const price = await opend.getListedNFTPrice(props.id);

      setPriceLabel(<PriceLabel sellPrice={price.toString()} />);
    }
  }

  useEffect(() => 
  {
    loadNFT();
  }, []);


  let price;

  function handleSell()
  {
    setPriceInput(<input
      placeholder="Price in DMATT"
      type="number"
      className="price-input"
      value={price}
      onChange={e => price = e.target.value}
    />);

    setButton(<Button handleClick={sellItem} text="Confirm" />);
  }

  function handleBuy()
  {

  }

  async function sellItem()
  {
    setBlur({ filter: "blur(4px)" });
    setLoaderHidden(false);

    const listingResult = await opend.listItem(props.id, Number(price));

    if (listingResult === "Success")
    {
      const transferResult = await NFTActor.transferOwnership(await opend.getOpenDCanisterID());

      if (transferResult === "Success")
      {
        setLoaderHidden(true);
        setButton();
        setPriceInput();
        setOwner("OpenD");
      }
    }
  }

  return (
    <div className="disGrid-item">
      <div className="disPaper-root disCard-root makeStyles-root-17 disPaper-elevation1 disPaper-rounded">
        <img
          className="disCardMedia-root makeStyles-image-19 disCardMedia-media disCardMedia-img"
          src={image}
          style={blur}
        />
        <div hidden={loaderHidden} className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="disCardContent-root">
          {priceLabel}
          <h2 className="disTypography-root makeStyles-bodyText-24 disTypography-h5 disTypography-gutterBottom">
            {name}<span className="purple-text"> {sellStatus}</span>
          </h2>
          <p className="disTypography-root makeStyles-bodyText-24 disTypography-body2 disTypography-colorTextSecondary">
            Owner: {owner}
          </p>
          {priceInput}
          {button}
        </div>
      </div>
    </div>
  );
}

export default Item;
