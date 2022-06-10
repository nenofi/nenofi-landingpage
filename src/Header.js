import React, { useEffect, useState, useRef } from "react";
import './styles/Header.css';
import twitterLogo from './assets/twitter-logo.svg';
import { ethers } from "ethers";
import {  IoLogoTwitter, IoLogoDiscord, IoLogoGithub } from 'react-icons/io5'

const TWITTER_HANDLE = 'nenofinance';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
const GITHUB_HANDLE = 'nenofi';
const GITHUB_LINK = `https://github.com/${GITHUB_HANDLE}`;

const Header = () => {
  /*
  * Added a conditional render! We don't want to show Connect to Wallet if we're already connected :).
  */
  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">NenoFi</p>
          <p className="sub-text">
            Protocol for the masses.
          </p>
          {/* <button>to app</button> */}
          <br></br>          <br></br>

          <p> 
          {/* <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} /> */}
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          ><IoLogoTwitter/></a> &nbsp;&nbsp;
          {/* <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          ><IoLogoDiscord/></a> &nbsp;&nbsp; */}
          <a
            className="footer-text"
            href={GITHUB_LINK}
            target="_blank"
            rel="noreferrer"
          ><IoLogoGithub/></a>
          </p>
          {/* <div>
          {currentAccount === "" ? (
            renderNotConnectedContainer()
          ) : (
            <div>
            <input ref ={inputRef} className="input"/>
            <button onClick={askContractToMintNft} className="cta-button mint-button">
                Mint
            </button>
            </div>
          )}
        </div> */}
          {/* <input />
          <button onClick={null} >
              Mint NFT
          </button> */}

                  {/* <input ref={inputRef}/>
        <button className="button" onClick={wave}>
          Submit
        </button> */}
      </div>
      </div>
    </div>
  );
};

export default Header;
