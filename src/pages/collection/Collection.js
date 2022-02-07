import React from "react";
import { Link } from "react-router-dom";
import Layout from '../../Layout/Layout';

// import React, { useEffect } from 'react';
// import './Header.css';
// import logo from '../../images/logo.png'
// import headerimg from '../../images/header-img.png'
// import reddit from '../../images/header/reddit.png'
// import discord from '../../images/header/discord.png'
// import insta from '../../images/header/instagram.png'
// import twitter from '../../images/header/twitter.png'
// import $ from 'jquery'



// function Collection () {
//   useEffect(() => {
//       $(function() {
//           $(window).on("scroll", function() {
//               $(".navbar").toggleClass("scrolled", $(document).scrollTop() > 50);
//           })
//       });

//       $(document).ready(function () {
//           $('.third-button').on('click', function () {
//             $('.animated-icon3').toggleClass('open');
//             $('.navbar').toggleClass('background');
//           });
//         });
//   }, [])
//   return (
//       <div className='container-fluid'>
//           <div className='row Header-main'>
//               <div className='col-5 Hchild-1'>
//                   <div>
//                       <h1>ART<br/>PUGS</h1>
//                       <p>Welcome to our nft pugworld!</p>
//                   </div>
//               </div>
//               <div className='col-7 Hchild-2'>
//                   <img src={headerimg} alt="" className='w-100 h-100' />
//               </div>
//           </div>
//           <nav class="navbar navbar-expand-lg navbar-light fixed-top">
//               <div class="container-fluid">
//                   <a class="navbar-brand" href="/"><img src={logo} alt="" /></a>
//                   <button class="navbar-toggler third-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
//                       <div class="animated-icon3"><span></span><span></span><span></span></div>
//                   </button>
//                   <div class="collapse navbar-collapse" id="navbarText">
//                   <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                       <li class="nav-item ml-5">
//                       <Link class="nav-link text-white" to="/#Roadmap">ROADMAP</Link>
//                       </li>
//                       <li class="nav-item">
//                       <a class="nav-link text-white" href="#" onclick="window.location.href='/#Story'; return false;" >STORY</a>
//                       </li>
//                       <li class="nav-item">
//                       <a class="nav-link text-white" href="/collection">COLLECTION</a>
//                       </li>
//                       <li class="nav-item">
//                       <a class="nav-link text-white" href="/mint">MINT</a>
//                       </li>
//                   </ul>
//                   <div className='h-icon-main'>
//                   <span class="navbar-text h-icon">
//                       <a href="/"><img src={reddit} alt="" /></a>
//                       <a href="/"><img src={twitter} alt="" /></a>
//                       <a href="/"><img src={discord} alt="" /></a>
//                       <a href="/"><img src={insta} alt="" /></a>
//                   </span>
//                   </div>

//                   </div>
//               </div>
//           </nav>
//       </div>
//   );
// };

// export default Collection;



function Collection() {
  return (
    <Layout>
      <div className="collection">
        <div className="container">
          <Link to="/collection/this-is-a-post-title">
            <div className="row align-items-center my-5">
              <div className="col-lg-7">
                <img
                  className="img-fluid rounded mb-4 mb-lg-0"
                  src="http://placehold.it/900x400"
                  alt=""
                />
              </div>
              <div className="col-lg-5">
                <h1 className="font-weight-light">This is a post title</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Collection;