import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'
import reddit from '../../images/header/reddit.png'
import discord from '../../images/header/discord.png'
import insta from '../../images/header/instagram.png'
import twitter from '../../images/header/twitter.png'
function Header () {
    return (
        <div>
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
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
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
                        <span class="navbar-text h-icon">
                            <a href="/"><img src={reddit} alt="" /></a>
                            <a href="/"><img src={twitter} alt="" /></a>
                            <a href="/"><img src={discord} alt="" /></a>
                            <a href="/"><img src={insta} alt="" /></a>
                        </span>
                        </div>
                    </div>
                </nav>
            </div>
           
        </div>
    );
};

export default Header;