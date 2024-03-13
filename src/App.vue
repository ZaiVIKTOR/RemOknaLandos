<template>
  <router-view/>
</template>

<style lang="scss">
  *  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background-color: #121212;
    scroll-behavior: smooth;
    min-width: 340px;

    &.light {
      background-color: #fff;
    }
  }

  #app {
    font-family: 'Lato', sans-serif;
    background-color: #121212;
  }

  .light #app {
    background-color: #b8ea9782;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .container {
    max-width: 1350px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .title-section {
        font-size: 40px;
        color: #fff;
        text-align: center;
        max-width: 800px;
        font-weight: 700;
        margin: 0 auto;
        margin-bottom: 60px;
    }

    .light .title-section {
      color: #212121;
    }
@media(max-width: 800px) {
  .title-section {
    font-size: 30px;
  }
}

@media(max-width: 420px) {
  .title-section {
    font-size: 26px;
  }
}


  // Шрифты
  /* latin-ext */
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 100;
    font-display: swap;
    src: url('./fonts/Lato/Lato-ThinItalic.ttf');
  }

  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 300;
    font-display: swap;
    src: url('./fonts/Lato/Lato-LightItalic.ttf');
  }

  @font-face {
    font-family: 'Lato';
    font-weight: 400;
    font-display: swap;
    src: url('./fonts/Lato/Lato-Regular.ttf');
  }

  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url('./fonts/Lato/Lato-BoldItalic.ttf');
  }

  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 900;
    font-display: swap;
    src: url('./fonts/Lato/Lato-BlackItalic.ttf');
  }


  @font-face {
    font-family: 'Lato';
    font-weight: 100;
    font-display: swap;
    src: url('./fonts/Lato/Lato-Thin.ttf');
  }

  @font-face {
    font-family: 'Lato';
    font-weight: 300;
    font-display: swap;
    src: url('./fonts/Lato/Lato-Light.ttf');
  }

  @font-face {
    font-family: 'Lato';
    font-weight: 700;
    font-display: swap;
    src: url('./fonts/Lato/Lato-Bold.ttf');
  }

  @font-face {
    font-family: 'Lato';
    font-weight: 900;
    font-display: swap;
    src: url('./fonts/Lato/Lato-Bold.ttf');
  }

  .loader {
        font-size: 4px;
        aspect-ratio: 1/1;
        height: 6px;
        border-radius: 50%;
        position: relative;
        text-indent: -9999em;
        animation: mulShdSpin 1.1s infinite ease;
        transform: translateZ(0);
        display: block;
    }
@keyframes mulShdSpin {
  0%,
  100% {
    box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.5), -1.8em -1.8em 0 0em rgba(255,255,255, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.5);
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.5), 1.8em -1.8em 0 0em rgba(255,255,255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.5), 2.5em 0em 0 0em rgba(255,255,255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);
  }
  50% {
    box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.5), 1.75em 1.75em 0 0em rgba(255,255,255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.5), 0em 2.5em 0 0em rgba(255,255,255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);
  }
  75% {
    box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.5), -1.8em 1.8em 0 0em rgba(255,255,255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.5), -2.6em 0em 0 0em rgba(255,255,255, 0.7), -1.8em -1.8em 0 0em #ffffff;
  }
}

  
</style>
