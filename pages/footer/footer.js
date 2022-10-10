import React from 'react'

const footer = () => {
  return (
    <div>
         {/* <!-- ======== navbar Start ======== --> */}
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="index.html"><img class="logo img-fluid" src="./Images/logo header.png" alt=""/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="about-us.html">ABOUT US</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="affiliate.html">Affiliate</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="advertiser.html">Advertiser</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="newsfeed.html">NEWS FEED</a>
            </li>
            <li class=" nav-item sing-in sing-inUP me-md-3 ms-md-4">
              <a class="" href="">SING IN</a>
            </li>
            <div class="dropdown">
              <button class="dropbtn"> SING UP <i class="fas fa-caret-down"></i></button>
              <div class="dropdown-content">
                <a href="advertiser.html">Advertiser</a>
                <a href="affiliate.html">Affiliate</a>
                <a href="smartlink.html">Smart Link</a>
              </div>
            </div>

          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default footer