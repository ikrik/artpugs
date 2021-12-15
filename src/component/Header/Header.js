import React, { useEffect } from 'react';
import './Header.css';
import logo from '../../images/logo.png'
import reddit from '../../images/header/reddit.png'
import discord from '../../images/header/discord.png'
import insta from '../../images/header/instagram.png'
import twitter from '../../images/header/twitter.png'
import $ from 'jquery'
function Header () {
    useEffect(() => {
        $(function() {
            $(window).on("scroll", function() {
                $("body").toggleClass("scrolled", $(document).scrollTop() > 50);
            })
        });
        $(document).ready(function () {
            $('.third-button').on('click', function () {
          
              $('.animated-icon3').toggleClass('open');
            });
          });
    }, [])
    return (
        <div className='container-fluid'>
            <div className='row Header-main'>
                <div className='col-5 Hchild-1'>
                    <div>
                        <h1>Feug <br/> iat</h1>
                        <p>Pulvinar sit id lacus, maecenas!</p>
                    </div>
                </div>
                <div className='col-7 Hchild-2'></div>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/"><img src={logo} alt="" /></a>
                    <button class="navbar-toggler third-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span class="navbar-toggler-icon"></span> */}
                    <div class="animated-icon3"><span></span><span></span><span></span></div>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item ml-5">
                        <a class="nav-link text-white" href="/Faucibus">Faucibus</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link text-white" href="/Nisl">Nisl</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link text-white" href="/Ultrices">Ultrices</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link text-white" href="/Nulla">Nulla</a>
                        </li>
                    </ul>
                    <div className='h-icon-main'>
                    <span class="navbar-text h-icon">
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