import React from 'react';
import './Footer.css'
import logo from '../../images/logo.png'
import reddit from '../../images/reddit.png'
import discord from '../../images/discord.png'
import insta from '../../images/instagram.png'
import twitter from '../../images/twitter.png'

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className='text-center pt-5'>
          <img src={logo} alt="" />
        </div>
        <p className='text-center mt-4 text-white'>
          Copyright © 2021 - ArtPugs<br/>
          Terms and conditions<br/>
          0uF3114DD5c5b50a574793556563D15A630ED3678f4</p>
        <div className='m-5'></div>
        <div className='footer-icon text-center'>
          <a href="/"><img src={reddit} alt="" /></a>
          <a href="/"><img src={twitter} alt="" /></a>
          <a href="/"><img src={discord} alt="" /></a>
          <a href="/"><img src={insta} alt="" /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;