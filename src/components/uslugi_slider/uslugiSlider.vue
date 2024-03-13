<template>
	<section id="uslugi" class="uslugi-slider">
		<div class="container">
			<div class="slider">
				<p
					class="slider-item"
					v-for="(item, i) in data"
					:key="i"
					:class="i != currentIndex ? '--hidden' : ''"
				>
					{{ item }}
				</p>
			</div>

			<div class="uslugi-desc">
				Работаем в Самаре и области с Физическими и Юридическими лицами по
				безналичному и наличному расчёту.
			</div>

			<div class="uslugi" data-aos="fade-up" data-aos-duration="500">
				<div class="uslugi__item uslugi__item__header">Услуги</div>
				<div class="uslugi__item" v-for="(item, i) in data" :key="i">
					<span data-aos="fade-right" data-aos-duration="700">
						{{ item }}
					</span>
				</div>
				<div class="uslugi__item uslugi__item__header">
					<span style="opacity: 0">Услуги</span>
				</div>
			</div>

			<main-btn class="btn-zapis" :link="'#form'"> Оставить заявку </main-btn>
		</div>
	</section>
</template>

<script>
import uslugi from '@/assets/js/uslugi'

export default {
	name: 'uslugi-slider',
	data() {
		return {
			data: uslugi,
			currentIndex: 0,
			speedSlider: 2, // скорость смены в секундах
		}
	},
	methods: {
		slideSlider() {
			setInterval(() => {
				if (this.currentIndex == this.data.length - 1) {
					this.currentIndex = 0
				} else {
					this.currentIndex++
				}
			}, this.speedSlider * 1000)
		},
	},
	mounted() {
		this.slideSlider()
	},
}
</script>

<style scoped lang="scss">
.uslugi-slider {
	padding-top: 100px;
	color: #bafa21;
	font-weight: 700;
	font-size: 70px;
}

.light .uslugi-slider {
	color: #212121;
}

.slider {
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;

	.slider-item {
		padding: 0 50px;
		transition: opacity 0.3s ease;
		opacity: 1;
		animation: showPunkt 2s;
		min-height: 170px;

		&.--hidden {
			display: none;
			opacity: 0;
		}
	}
}

.uslugi {
	width: 100%;
	background-color: #212121;
	border-radius: 20px;
	color: #fff;
	font-size: 30px;
	overflow: hidden;
	font-weight: 400;
	margin-top: 100px;
	margin-bottom: 50px;

	.uslugi__item {
		padding: 20px;
		border-bottom: 1px solid #bafa21;
		border-left: 1px solid #bafa21;
		border-right: 1px solid #bafa21;
		transition: 0.3s ease;

		&.uslugi__item__header {
			background-color: #bafa21;
			color: #121212;
			text-align: center;
			font-weight: 700;
			border: none;
		}
	}
}

.light .uslugi {
	background-color: #ffffff00;

	.uslugi__item {
		border-color: #212121;
		color: #212121;
		&.uslugi__item__header {
			background-color: #212121;
			color: #fff;
		}
	}
}

@keyframes showPunkt {
	0% {
		opacity: 0;
	}

	50% {
		opacity: 1;
	}

	100% {
		opacity: 0;
	}
}

.uslugi-desc {
	color: #fff;
	font-size: 60px;
	text-align: center;
	margin-top: 40px;
}

.light .uslugi-desc {
	color: #212121;
}

@media (max-width: 900px) {
	.slider {
		.slider-item {
			font-size: 45px;
			min-height: 130px;
		}
	}

	.uslugi-desc {
		font-size: 40px;
	}

	.uslugi {
		margin-top: 60px;
	}

	.uslugi__item {
		font-size: 25px;
	}
}

@media (max-width: 660px) {
	.slider {
		.slider-item {
			font-size: 35px;
			min-height: 90px;
		}
	}

	.uslugi-desc {
		font-size: 24px;
	}

	.uslugi-slider {
		padding-top: 60px;
	}

	.uslugi__item {
		font-size: 20px;
	}
}

@media (max-width: 530px) {
	.uslugi__item {
		font-size: 18px;
	}

	.uslugi {
		.uslugi__item {
			padding: 13px;
		}
	}
}

@media (max-width: 450px) {
	.slider {
		.slider-item {
			min-height: 130px;
		}
	}
}
</style>
