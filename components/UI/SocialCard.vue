<template>
    <div class="social-card" :class="main ? 'main-social' : ''">
        <div class="hub-title">
            <slot name="title"></slot>
        </div>
        <div class="video">
            <slot name="video"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ['main']
}
</script>

<style scoped>
.social-card.main-social {
    height: 98%;
    margin-top: 2%;
}
.social-card {
    background-color: #fff;
    padding: 15px;
    display: block;
    height: 96%;
    min-height: 300px;
    margin-top: 4%;
}
.hub-title h2 {
    color: #000;
    font-size: 1.5rem;
    font-weight: 700;
}
.video {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}
</style>