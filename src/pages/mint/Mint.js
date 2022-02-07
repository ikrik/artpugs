import React from "react";
import Layout from "../../Layout/Layout";
import './Mint.css'

const Mint = () => {
  const [selectedValue, setSelectedValue] = React.useState(undefined)

  const handleAddrTypeChange = (e) => {
    setSelectedValue(e.target.value);
  }
  return (
    <Layout>
      <div className="mint">
        <div className="container-fluid">
          <div class="minting-wrapper">
            <h3>Minting</h3>
            <h5>To adopt your own artpug click on the “Pay via NFT-MAKER.IO” button below and make sure to select the number of NFTs you want from the dropdown menu!</h5>
            <h6>DO NOT USE AN EXCHANGE WALLET, USE NAMI, DAEDALUS, YOROI, ETC.</h6>
            <select value={selectedValue} onChange={handleAddrTypeChange} name="portion" className="selector">
              <option value="undefined">Select</option>
              {[...Array(10).keys()].map((key) => <option key={key} value={key}>{key}</option> )}
            </select>
            <button className="pay">Pay via <span>NFT-MARKET.IO</span></button>
          </div>
          <div className="gif-wrapper">
            <div className="gif"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Mint;