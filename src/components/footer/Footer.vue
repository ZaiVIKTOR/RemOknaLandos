<template>
    <footer class="footer">
        <div class="container">
            <p>ИП</p>
            <p>ИНН 638101944855</p>
            <p>ОГРНИП 324632700042247</p>
            <p>РЕМ-ОКНА</p>
        </div>
    </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    color: #fff;

    p {
        width: 20%;
        text-align: center;
    }
}

.light .footer .container {
    color: #212121;
}

.footer {
    padding: 30px 0;
}

@media (max-width: 690px) {
    .footer .container {
        flex-wrap: wrap;
        gap: 10px;
        p {
            width: 45%;
        }
    }
}
</style>
