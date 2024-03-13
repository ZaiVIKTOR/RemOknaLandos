<template>
  <section id="form" class="feedback-form">
    <div class="container">
        <h3 class="title-section">
            Закажите обратный звонок
        </h3>
        <form @submit.prevent="sendData" class="feedback-form-form">
            <label>
                <input ref="name_input" @input="validateName" v-model="formData.name" type="text" class="form-input" placeholder="ФИО">
                <p class="err" v-if="errName">Имя не заполнено</p>
            </label>
            <label>
                <input ref="phone_input" @input="validatePhone" v-model="formData.phone" type="text" class="form-input" placeholder="+7-999-999-99-99">
                <p class="err" v-if="errPhone">Заполните номер телефона</p>
            </label>
            <button type="submit" class="submit-btn" :class="load ? '--black' : ''">
                <span v-if="load == false">Отправить</span>
                <span v-else class="loader"></span>
            </button>
        </form>
        <div class="popup-mess" v-if="popup" @click="popup = false">
            <div v-if="typePopup == 'success'" class="--green">
                <div class="check-mark">
                    <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                </div>

                <p>
                    {{ popupMess }}
                </p>
            </div>

            <div v-if="typePopup == 'err'" class="--red">
                <div class="check-mark">
                    <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                </div>

                <p>
                    {{ popupMess }}
                </p>
            </div>

        </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
    name: 'feedback-form',
    data() {
        return {
            formData: {
                name: '',
                phone: ''
            },
            digits: '0123456789',
            errPhone: false,
            errName: false,
            BOT: '6865749605:AAGQjl73TOJuZg6xf_yH5LaoqQ0pXQG31QE',
            popup: false,
            typePopup: 'err',
            popupMess: 'Заявка успешно отправлена',
            load: false
        }
    },
    methods: {
        validatePhone(e) {
            if (this.formData.phone.length != 18) {
                this.errPhone = true;
            } 
            if (this.formData.phone.length >= 18) {
                this.errPhone = false;
            }
            if (e.data != null) {
                if (e.data == " ") {
                    this.formData.phone = this.formData.phone.slice(0, -1);
                }
                if (!this.digits.includes(this.formData.phone[this.formData.phone.length - 1])) {
                    this.formData.phone = this.formData.phone.slice(0, -1);
                }
                if (this.formData.phone.length == 1) {
                    this.formData.phone = '+7 (' + this.formData.phone;
                }
                if (this.formData.phone.length == 7) {
                    this.formData.phone = this.formData.phone + ') ';
                }
                if (this.formData.phone.length == 12) {
                    this.formData.phone = this.formData.phone + ' ';
                }
                if (this.formData.phone.length == 15) {
                    this.formData.phone = this.formData.phone + ' ';
                }
                if (this.formData.phone.length == 19) {
                    this.formData.phone = this.formData.phone.slice(0, -1);
                }
            }
        },

        validateName() {
            if (this.formData.name.trim() == "") {
                this.errName = true;
            } else {
                this.errName = false;
            }
        },

        sendData() {
            if (this.formData.name.trim() == "") {
                this.errName = true;
            } else {
                this.errName = false;
            }

            if (this.formData.phone.trim() == "") {
                this.errPhone = true;
            }

            if (this.errName == true) {
                this.$refs.name_input.focus();
                return false;
            }

            if (this.errPhone == true) {
                this.$refs.phone_input.focus();
                return false;
            }

            const CHAT_ID = '-1001998699592';
            const URI_API = `https://api.telegram.org/bot${this.BOT}/sendMessage`;
            let mess = `<b>Новая заявка на обратный звонок!</b>\n <b>ФИО: </b> ${this.formData.name}\n <b>Номер телефона: </b> ${this.formData.phone}`;
            this.load = true;
            axios.post(URI_API, {
                chat_id: CHAT_ID,
                parse_mode: 'html',
                text: mess
            })
            .then(response => {
                if (response.data.ok == true) {
                    this.popup = true;
                    this.popupMess = 'Заявка успешно отправлена';
                    this.typePopup = 'success';
                    // this.data.name = '';
                    // this.data.phone = '';
                    setTimeout(() => {
                        this.popup = false;
                    }, 1500)
                } else {
                    this.popup = true;
                    this.popupMess = `При отправке произошла ошибка`;
                    this.typePopup = 'err';
                }
            })
            .catch(err => {
                this.popup = false;
                this.popupMess = `При отправке произошла ошибка: ${err}`;
                this.typePopup = 'err';
            })
            .finally(mess => {
                this.load = false;
            })
        }
    }
}
</script>

<style scoped lang="scss">
    .feedback-form {
        padding-top: 100px;
        padding-bottom: 100px;
    }

    .feedback-form-form {
        max-width: 500px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        margin: 0 auto;

        label {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 5px;
            color: rgb(225, 27, 27);

            p {
                animation: animErr 2s infinite;
            }
        }
        input {
            width: 100%;
            padding: 20px;
            border-radius: 20px;
            outline: none;
            border: 1px solid #fff;
            background-color: #121212;
            color: #fff;
            font-size: 20px;
            transition: .3s;

            &::placeholder {
                font-size: 20px;
                color: #9d9d9d;
            }

            &:focus {
                border-color: #bafa21;
                background-color: #b9fa211a;
            }
        }
        button {
            background-color: #bafa21;
            width: 100%;
            display: block;
            padding: 20px 30px;
            border-radius: 10px;
            text-align: center;
            color: #121212;
            font-size: 18px;
            font-weight: 700;
            transition: 0.3s ease;
            cursor: pointer;
            border: none;
            outline: none;
            display: flex;
            justify-content: center;
            align-items: center;

            &:hover {
                background-color: #212121;
                color: #bafa21;
            }
            &.--black {
                background-color: #212121;
            }
        }
    }

    .light .feedback-form-form {
        input {
            background-color: #b9fa211a;
            color: #212121;
            border-color: #6bde00;

            &:focus {
                background-color: #fff;
                border-color: #212121;
            }
        }
    }

    @keyframes animErr {
        0% {
            opacity: 1;
        }

        50% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    .popup-mess {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0 0 0 / .3);
        backdrop-filter: blur(10px);
        z-index: 999;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        cursor: pointer;

        div {
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-items: center;
        }

        .check-mark {
            border-radius: 30px;
            background-color: #6bde00;
            width: fit-content;
            aspect-ratio: 1/1;
            padding: 20px;
            height: fit-content;

            svg {
                width: 70px;
                height: fit-content;
            }
        }

        .--red .check-mark {
            background-color: rgb(214, 23, 23);
        }

        p {
            font-size: 20px;
            color: #6bde00;
            padding: 0 20px;
        }

        .--red p {
            color: rgb(214, 23, 23);
        }
    }

@media(max-width: 1100px) {
    .feedback-form {
        padding-top: 40px;
    }
}
</style>