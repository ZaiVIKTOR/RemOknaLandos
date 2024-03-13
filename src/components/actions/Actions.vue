<template>
    <section id="actions" class="actions">
        <div class="container">
            <h3 class="title-section">🔥Акции🔥</h3>
            <p>
                Регулировка одного окна БЕСПЛАТНО!!! При замене уплотнителя на
                3-х створках.
            </p>
            <p>Акция на москитные сетки. Заказываете 5шт. 6-я в подарок.</p>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.title-section {
    margin-bottom: 30px;
}
.actions {
    padding: 100px 0 0 0;
    color: #fff;

    .container {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        gap: 30px;
        font-size: 20px;
    }
}

.light .actions {
    color: #212121;
}
</style>
