<template>
  <div>
    <section class="jumbotron-container d-flex flex-row justify-content-between">
      <div class="container-left d-flex flex-column justify-content-center p-5">
        <h1 class="heading accent">
          Inspiring Architecural Design Solutions for your home
        </h1>
        <p class="jumbotron-subtext">
          OSB-Architects work to create inspiring spaces through
          functional and uplifting design with the overall aim of
          making that perfect "happy home" for you to enjoy
        </p>
        <p class="jumbotron-tag">
          Helping you create your <span class="highlight-1">Happy</span><span class="highlight-2"> Home</span>
        </p>
      </div>
      <div class="container-right d-flex justify-content-center flex-column">
        <div class="container-image shadow-3">
          <img src="../images/lounge.jpg">
        </div>
      </div>
    </section>

    <section class="summary-container d-flex flex-row">
      <div class="container-left">
        <div class="container-image shadow-3">
          <img src="../images/house.jpg">
        </div>
      </div>

      <div class="container-right d-flex justify-content-between flex-column">
        <p class="summary-content">
          OSB-Architects offer residential design services throughout the East Midlands region,
          including minor property alterations, residential remodelling projects, house extensions,
          loft and garage conversions, and new build homes. We specialise in thoughtful architectural
          design projects personalised to your requirements and focussed on improving your wellbeing.
          OSB-Architects can guide and advice you through any property design alteration work, including
          feasibility ideas, planning applications and building regulations applications. Please browse
          our website for further information or get in touch via our contact page.
        </p>

        <div class="summary-tag">
          <span class="highlight-1">15</span><span class="highlight-2"> years experience</span>
        </div>
      </div>
    </section>

    <section class="projects">
      <h1 class="heading accent">
        Recent Projects
      </h1>
      <div
        class="card"
        style="width: 18rem;"
      >
        <img
          class="card-img-top"
          src="../images/house.jpg"
          alt="house"
        >
        <div class="card-body">
          <h5 class="card-title">
            Small extension with a big impact
          </h5>
          <p class="card-text">
            A sensitive design approach in Mapperly Park Conservation Area
          </p>
          <a
            href="#"
            class="btn btn-primary"
          >Take a look</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
    @import './Home.scss';
</style>
