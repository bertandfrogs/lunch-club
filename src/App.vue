<template>
  <div id="app">
    <div id="nav">
        <a href="/"><img class="logoNav" src="./assets/lunchClubTransparent.png"></a>
        <a class="textNav" href="/about" >ABOUT</a>
        <a class="textNav" href="/Carson">CARSON</a>
        <a class="textNav" href="/Charlie">CHARLIE</a>
        <a class="textNav" href="/Cooper">COOPER</a>
        <a class="textNav" href="/Noah">NOAH</a>
        <a class="textNav" href="/Schlatt">SCHLATT</a>
        <a class="textNav" href="/Ted">TED</a>
        <a class="textNav" href="/Travis">TRAVIS</a>
    </div>
    <router-view/>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css?family=Work+Sans:900&display=swap');
  #app {
    margin: 0;
    padding: 0;
    font-family: 'Work Sans', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #nav {
    font-size: 20px;
    padding: 20px 0;
    font-weight: 900;
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  #nav a {
    padding: 5px;
    margin: 5px;
    font-family: 'Work Sans', sans-serif;
    font-weight: 900;
    color: black;
    text-decoration: none;
  }

  .textNav {
    border-bottom: 2px transparent solid;
    transition: border-bottom 200ms linear;
  }

  .textNav:hover {
    border-bottom: 2px black solid;
  }

  .logoNav {
    width: 130px;
    display: flex;
    align-items: center;
  }

  footer {
    position: fixed;
    left: 0;
    bottom: 0;
    font-size: 12px;
    width: 100%;
    padding: 5px 0;
    background-color: black;
    text-align: center;
    color: white;
  }

  footer span{
    margin-right: 20px;
  }

  footer a{
    text-decoration: underline;
    color: #fff;
  }

  @media screen and (max-width: 700px) {
    .textNav {
      text-decoration: underline !important;
    }
    .textNav:hover {
      border-bottom: 2px transparent solid;
    }
  }
</style>
