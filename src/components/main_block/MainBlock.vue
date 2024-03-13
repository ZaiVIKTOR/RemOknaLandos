<template>
  <section id="main-block" class="main-block">
    <div class="container">
        <p class="bage"
            data-aos="fade-down"
            data-aos-duration="700"
        >
            РЕМ-ОКНА
        </p>
        <h1
            data-aos="fade-down"
            data-aos-duration="1000"
        >
            «РЕМ-ОКНА» - оконные решения<br> от профессионалов
        </h1>
    </div>
  </section>
</template>

<script>
export default {
    name: 'main-block'
}
</script>

<style scoped lang="scss">
    .main-block {
        padding-top: 645px;
        background-image: url('./img/bg.jpg');
        background-repeat: no-repeat;
        background-position: center -1%;
        background-size: cover;
        padding-bottom: 100px;
        position: relative;
        &::before {
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color:rgba(0, 0, 0, .2);
        }
        &::after {
            content: '';
            display: block;
            width: 100%;
            height: 450px;
            position: absolute;
            bottom: 0;
            left: 0;
            background: linear-gradient(360deg, rgba(18,18,18,.5) 0%, rgba(18,18,18,0) 100%);
        }

        .container {
            position: relative;
            z-index: 1;;
        }

        h1 {
            color: #fff;
            font-size: 56px;
            font-weight: 600;
            line-height: 1.4;
        }

        .bage {
            padding: 15px 40px;
            font-size: 16px;
            border-radius: 30px;
            background-color: #8686865c;
            backdrop-filter: blur(4px);
            color: #fff;
            font-weight: 700;
            width: fit-content;
            margin-bottom: 20px;
        }
    }

    .light .main-block {
        &::before {
            background-color: transparent;
        }

        &::after {
            display: none;
            background: linear-gradient(360deg, rgba(255, 255, 255, 0.235) 0%, rgba(255, 255, 255, 0) 100%);
        }
    }

    @media(max-width: 950px) {
        .main-block {
            padding-top: 400px;
            padding-bottom: 40px;

            h1 {
                font-size: 45px;
            }

            .bage {
                font-size: 14px;
            }
        }
    }

    @media(max-width: 800px) {
        .main-block {
            padding-top: 300px;
        }
    }

    @media(max-width: 670px) {
        .main-block {
            h1 {
                font-size: 35px;
            }
        }
    }

    @media(max-width: 550px) {
        .main-block {
            padding-top: 300px;

            h1 {
                font-size: 30px;
            }
        }
    }

    @media(max-width: 420px) {
        .main-block {
            padding-top: 260px;

            h1 {
                font-size: 25px;
            }
        }
    }
</style>