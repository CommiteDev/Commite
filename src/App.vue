<script setup>

</script>

<template>
  <section class="smart-scroll">
      <div class="container-fluid">
          <nav class="navbar navbar-expand-md navbar-dark">
              
              <a class="navbar-brand heading-white" href="/">
                <img width="250" src="https://cdn.discordapp.com/attachments/944688878013517824/1019673506612527184/c4.png">
              </a>
              <button class="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse"
                      data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                      aria-label="Toggle navigation">
                  <span data-feather="grid"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarCollapse">
                  <ul class="navbar-nav ml-auto">
                      <li class="nav-item">
                          <a class="nav-link page-scroll" href="#">Features</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link page-scroll" href="#">FAQ</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link page-scroll d-flex flex-row align-items-center text-primary" href="https://github.com/CommiteDev/Commite">
                              <em data-feather="layout" width="18" height="18" class="mr-2"></em>
                              Github
                          </a>
                      </li>
                  </ul>
              </div>
          </nav>
      </div>
  </section>

  <!--hero header-->
  <section class="py-7 py-md-0 bg-hero" id="home">
      <div class="container">
          <div class="row vh-md-100">
              <div class="col-md-8 col-sm-10 col-12 mx-auto my-auto text-center">
                  <h1 class="heading-black text-capitalize">Commite Dev Social Media for Developers</h1>
                  <p class="lead py-3">A completely open source platform where programmers can share interactively with each other.</p>
                  <button class="btn btn-primary d-inline-flex flex-row align-items-center">
                      Get started now
                      <em class="ml-2" data-feather="arrow-right"></em>
                  </button>
              </div>
          </div>
      </div>
  </section>

  <!--footer-->
  <footer class="py-6">
      <div class="container">
          <div class="row">
              <div class="col-sm-5 mr-auto">
                  <h5>About Commite</h5>
                  <p class="text-muted">Commite is an open source project that was created as a hobby for a small group of friends and an idea to apply the technologies they learned.</p>
                  <ul class="list-inline social social-sm">
                      <li class="list-inline-item">
                          <a href="https://github.com/CommiteDev/Commite"><i class="fa fa-github"></i></a>
                      </li>
                      <li class="list-inline-item">
                          <a href="https://twitter.com/CommiteDev"><i class="fa fa-twitter"></i></a>
                      </li>
                  </ul>
              </div>
              <div class="col-sm-2">
                  <h5>Legal</h5>
                  <ul class="list-unstyled">
                      <li><a href="#">Privacy</a></li>
                      <li><a href="#">Terms</a></li>
                  </ul>
              </div>
              <div class="col-sm-2">
                  <h5>Help</h5>
                  <ul class="list-unstyled">
                      <li><a href="#">Support</a></li>
                  </ul>
              </div>
          </div>
          <div class="row mt-5">
              <div class="col-12 text-muted text-center small-xl">
                  &copy; 2022 Commite - All Rights Reserved
              </div>
          </div>
      </div>
  </footer>
</template>

<style scoped>

</style>
