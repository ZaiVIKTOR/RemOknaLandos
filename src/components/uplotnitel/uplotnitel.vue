<template>
  <section class="warning">
    <div class="container">
        <div class="container-container">
            <div class="left">
                <div class="left-up-container">
                    <div class="left-up" data-aos="fade-down"
                        data-aos-duration="700">
                        <h3 class="title-section">
                            Внимание!
                        </h3>
                        <p class="desc">
                            Основной причиной продувания и неплотности притвора является потеря упругости уплотнителя пластиковых окон. Уже на второй-третий год эксплуатации, окна подвергаются риску продувания, если уплотнительную резину не чистить и не смазывать регулярно в соответствии с рекомендациями производителя.
                        </p>
                    </div>
                    <p class="list-header"
                        data-aos="fade-up" data-aos-duration="1400"
                    >
                        Уплотнитель пора менять если:
                    </p>
                    <ul data-aos="fade-up" data-aos-duration="1400" class="list-container">
                        <li class="list-item">прошло 5 и более с момента установки окна, либо замены уплотнителя</li>
                        <li class="list-item">даже при закрытой створке окна на подоконнике или откосе появляется пыль</li>
                        <li class="list-item">резина уплотнителя потеряла первоначальный вид, стала бледной, ломкой и сухой</li>
                        <li class="list-item">увеличился уровень шума и появился сквозняк, перепады давления</li>
                        <li class="list-item">зимой, рукой можно ощутить струйки холодного воздуха</li>
                    </ul>
                </div>
            </div>
            <img data-aos="fade-up" data-aos-duration="1200" src="./img/uplot.png" alt="картинка уплотнитель">
        </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
    .warning {
        padding-top: 80px;
        padding-bottom: 60px;
    }

    .title-section {
        margin-bottom: 20px;
        color: #121212;
    }

    .container-container {
        display: flex;
        gap: 20px;
    }

    img {
        width: 48%;
        border-radius: 20px;
    }

    .left {
        color: #fff;
        display: flex;
        flex-direction: column;
        .left-up {
            color: #121212;
            background-color: #bafa21;
            padding: 30px;
            border-radius: 20px;
        }
    }

    .light .left {
        color: #212121;
    }

    .list-header {
        text-align: center;
        margin-top: 45px;
        font-size: 26px;
        font-weight: 700;
        margin-bottom: 15px;
    }

    .list-container {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding-left: 20px;

        .list-item {
            list-style: disc;
        }
    }

    .btn-zapis {
        margin-top: 35px;
    }

    @media(max-width: 1160px) {
        img {
            max-width: 70%;
        }

        .list-header {
            margin-top: 25px;
        }
    }

    @media(max-width: 1130px) {
        .container-container {
            align-items: flex-start;
        }
    }

    @media(max-width: 950px) {
        .container-container {
            flex-direction: column;
        }

        .warning {
            padding-top: 20px;
        }

        img {
            max-width: 70%;
            margin: 0 auto;
            width: 100%;
            margin-top: 30px;
        }
    }

    @media(max-width: 710px) {
        img {
            max-width: none;
        }

        .list-header {
            margin-top: 40px;
        }
    }
</style>