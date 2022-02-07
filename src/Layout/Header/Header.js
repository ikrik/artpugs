import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery'
import './Header.css';
import logo from '../../images/logo.png'
import headerimg from '../../images/header-img.png'
import reddit from '../../images/header/reddit.png'
import discord from '../../images/header/discord.png'
import insta from '../../images/header/instagram.png'
import twitter from '../../images/header/twitter.png'


const Header = ({ enableChildren }) => {

  React.useEffect(() => {
    $(function() {
      $(window).on("scroll", function() {
        $(".navbar").toggleClass("scrolled", $(document).scrollTop() > 50);
      })
    });

    $(document).ready(function () {
      $('.third-button').on('click', function () {
        $('.animated-icon3').toggleClass('open');
        $('.navbar').toggleClass('background');
      });
    });
  }, [])

  return (
    <div className='container-fluid'>
      {enableChildren ?  (<div className='row Header-main'>
        <div className='col-5 Hchild-1'>
          <div>
            <h1>ART<br/>PUGS</h1>
            <p>Welcome to our nft pugworld!</p>
          </div>
        </div>
        <div className='col-7 Hchild-2'>
          <img src={headerimg} alt="" className='w-100 h-100' />
        </div>
      </div>) : null}
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src={logo} alt="" /></Link>
          <button className="navbar-toggler third-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <div className="animated-icon3"><span></span><span></span><span></span></div>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ml-5">
                <Link className="nav-link text-white" to="/#RoadMap">ROADMAP</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/#Story">STORY</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/collection">COLLECTION</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/mint">MINT</Link>
              </li>
            </ul>
            <div className='h-icon-main'>
              <span className="navbar-text h-icon">
                <a href="/"><img src={reddit} alt="" /></a>
                <a href="/"><img src={twitter} alt="" /></a>
                <a href="/"><img src={discord} alt="" /></a>
                <a href="/"><img src={insta} alt="" /></a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;