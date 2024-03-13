<template>
  <section id="defects" class="defects">
    <div class="container">
        <h3 class="title-section"
            data-aos="fade-down"
            data-aos-duration="500"
        >
            Какие дефекты требуют проведения ремонта пластиковых окон:
        </h3>

        <ul class="punkts-container">
            <li 
                data-aos="fade-up"
                data-aos-duration="500"
                class="punkt-container"
            >
                <p class="num">01</p>
                <img src="./img/obmerz.jpeg" alt="Обледеневшее окно">
                <p class="defect">
                    Обледенение и замерзание стеклопакета
                </p>
            </li>
            <li 
                data-aos="fade-up"
                data-aos-duration="800"
                class="punkt-container"
            >
                <p class="num">02</p>
                <img src="./img/klin.avif" alt="открывают окно">
                <p class="defect">
                    Поскрипывания и заклинивания створок окна
                </p>
            </li>
            <li
                data-aos="fade-up"
                data-aos-duration="1100"
                class="punkt-container"
            >
                <p class="num">03</p>
                <img src="./img/mancloseears.avif" alt="мужчина закрывает уши">
                <p class="defect">
                    Постоянный шум с улиц даже при закрытом окне
                </p>
            </li>
            <li 
                data-aos="fade-up"
                data-aos-duration="800"
                class="punkt-container"
            >
                <p class="num">04</p>
                <img src="./img/skvoz.jpeg" alt="сквозняк">
                <p class="defect">
                    Сквозняки, протекание стеклопакета
                </p>
            </li>
            <li
                data-aos="fade-up"
                data-aos-duration="1100"
                class="punkt-container"
            >
                <p class="num">05</p>
                <img src="./img/tresh.jpeg" alt="трещина">
                <p class="defect">
                    Трещины, сколы, повреждения поверхности
                </p>
            </li>
        </ul>
    </div>
  </section>
</template>

<script>
export default {
    name: 'defects'
}
</script>

<style scoped lang="scss">
    .defects {
        padding-top: 90px;
        padding-bottom: 60px;
    }

    .punkts-container {
        display: flex;
        gap: 40px;
        position: relative;
        width: 100%;
        flex-wrap: wrap;
        margin: 0 auto;
        justify-content: center;

        .punkt-container {
            width: 30%;
            min-width: 350px;
            background-color: #212121;
            padding: 30px 20px;
            border-radius: 10px;
            transition: .3s ease;
            font-weight: 700;
            color: #fff;

            &:hover {
                transform: scale(1.05);
                color: #bafa20;
            }

            .num {
                font-size: 39px;
                margin-bottom: 15px;
            }

            img {
                width: 100%;
                border-radius: 10px;
            }

            .defect {
                font-size: 18px;
                font-weight: 400;
                margin-top: 15px;
            }
        }
    } 

    .light {
        .punkts-container {
            .punkt-container {
                background-color: #212121bb;
            }
        }
    }

    @media(max-width: 440px) {
        .punkts-container {
            .punkt-container {
                min-width: 320px;
                .num {
                    font-size: 34px;
                }
            }
        }
    }

    @media(max-width: 370px) {
        .punkts-container {
            .punkt-container {
                min-width: 300px;
            }
        }
    }
</style>