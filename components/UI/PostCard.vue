<template>
    <div class="post-container">
        <NuxtLink :to="'/post/' + post.id">
            <img :src="post.image">
            <div class="post-category">{{ post.category }}</div>
            <div><h3>{{ post.title }}</h3></div>
            <div class="date">{{ post.timestamp }}</div>
        </NuxtLink>
    </div>
</template>

<script>
export default {
    props: {
        post: Object
    }
}
</script>


<style scoped>

.post-container {
    text-align: left;
}
.post-container a {
    text-decoration: none;
}
.post-container img {
    margin-bottom: 2rem;
    width: 100%;
}
.post-container h3 {
    line-height: 0.5;
    font-weight: bold;
}
.post-container h3 {
    color: #000;
    font-size: 17px;
    line-height: 1.1;
}
.post-container h3:hover {
    color: #000;
    text-decoration: underline;
    text-decoration-color: #000;
}
.post-category {
    display: inline-block;
    background-color: #059011;
    color: #fff;
    font-size: .75rem;
    text-transform: uppercase;
    padding: 5px 8px;
    line-height: 1;
    font-weight: 700;
    margin-bottom: 12px;
}
.date {
    color: #000;
    font-size: 12px;
}
</style>