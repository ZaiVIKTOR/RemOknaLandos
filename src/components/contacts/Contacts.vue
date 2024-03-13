<template>
    <section class="contacts">
        <div class="container">
            <h3 class="title-section">Мессенджеры</h3>
            <div class="contacts-container">
                <a
                    target="_blank"
                    class="contacts-item"
                    href="https://t.me/kaziev74"
                >
                    <img src="@/assets/telegram.svg" alt="telegram" />
                    <p>Telegram</p>
                </a>
                <a
                    target="_blank"
                    class="contacts-item"
                    href="https://wa.me/789171055985"
                >
                    <img src="@/assets/WhatsApp.png" alt="whatsapp" />
                    <p>WhatsApp</p>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.contacts {
    padding-top: 80px;
    padding-bottom: 40px;
}

.contacts-container {
    display: flex;
    justify-content: center;
    gap: 160px;

    .contacts-item {
        width: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        font-size: 40px;
        color: #fff;

        img {
            width: 100%;
        }
    }
}

.light .contacts-item {
    color: #212121;
}

@media (max-width: 680px) {
    .contacts {
        padding-bottom: 0;
    }
    .contacts-container {
        gap: 130px;
        .contacts-item {
            width: 100px;
            font-size: 30px;
        }
    }
}
@media (max-width: 420px) {
    .contacts-container {
        gap: 100px;
        .contacts-item {
            width: 70px;
            font-size: 20px;
        }
    }
}
</style>
