<template>
  <a :href="link" class="btn">
    <slot>

    </slot>
  </a>
</template>

<script>
export default {
    name: 'main-btn',
    props: ['link']
}
</script>

<style scoped lang="scss">
    .btn {
        background-color: #bafa21;
        width: 100%;
        display: block;
        padding: 20px 30px;
        border-radius: 10px;
        text-align: center;
        color: #121212;
        font-size: 18px;
        font-weight: 700;
        transition: .3s ease;

        &:hover {
            background-color: #212121;
            color: #bafa21;
        }
    }
</style>