<template>
    <div class="main">
        <div class="featured">
            <b-container class="bv-example-row">
                <b-row class="text-center">
                    <b-col lg="9">
                        <div class="left">
                            <NuxtLink to="/post/1">
                                <img :src="featured.image"/>
                                <div class="featured-details">
                                    <div class="post-category">{{ featured.category }}</div>
                                    <div class="post-title"><h3>{{ featured.title }}</h3></div>
                                </div>
                            </NuxtLink>
                        </div>
                    </b-col>
                    <b-col lg="3">
                        <div class="right">
                            <NuxtLink to="/post/2">
                                <img :src="secondary.image">
                                <div class="post-category">{{ secondary.category }}</div>
                                <div><h3>{{ secondary.title }}</h3></div>
                                <div class="date">{{ secondary.timestamp }}</div>
                            </NuxtLink>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <div class="top-posts">
            <the-triples :postrows="1" alignment="right-align" :lgcolumns="3" :startat="2"></the-triples>
        </div>
        <the-bloggers></the-bloggers>
        <div class="latest-news">
            <div class="news-header">
                <b-container class="latest-news-inner">
                    <b-row>
                        <b-col lg="12">
                            <h2>
                                <span>ΤΕΛΕΥΤΑΙΑ ΝΕΑ</span>
                            </h2>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col sm="12" lg="9">
                            <the-triples :postrows="5" :lgcolumns="4" :startat="1"></the-triples>
                        </b-col>
                        <b-col lg="3" class="sidebar-outer">
                            <div class="sidebar">
                                <h4>ΔΗΜΟΦΙΛΗ</h4>
                            </div>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
        </div>
        <div class="frontpages">
            <the-fronts></the-fronts>
        </div>
        <div class="bottom-posts">
            <the-triples :postrows="2" :lgcolumns="3" :startat="16"></the-triples>
        </div>
        <div class="social-hub-cover">
            <the-hub></the-hub>
        </div>
        <div>
            <the-footer></the-footer>
        </div>
    </div>
</template>

<script>
import TheTriples from '@/components/layout/TheTriples'
import TheBloggers from '@/components/layout/TheBloggers'
import TheFronts from '@/components/layout/TheFronts'
import TheHub from '@/components/layout/TheHub'
import TheFooter from '@/components/layout/TheFooter'
export default {
    components: {
        TheTriples,
        TheBloggers,
        TheFronts,
        TheHub,
        TheFooter
    },
    computed: {
        featured() {
            return this.$store.getters.getPost(1);
        },
        secondary() {
            return this.$store.getters.getPost(2);
        },
        latest() {
            return this.$store.getters.getLatest;
        }
    }
}
</script>

<style scoped>
.left {
    position: relative;
}
img {
    display: block;
    width: 100%;
}
.featured {
    padding: 40px 0 40px;
    background: url('~/assets/prasinos-header-hp-bg.jpg') no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.featured .post-category {
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
.featured-details {
    position: absolute;
    bottom: 3rem;
    left: 3rem;
    text-align: left;
    max-width: 90%;
}
.left h3 {
    background-color: #fff;
    display: inline;
    padding: 7px 15px 4px 0;
    box-shadow: -14px 0 0 #fff;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    margin-left: 14px;
    line-height: 1.43;
    letter-spacing: normal;
    text-align: left;
    color: #000;
    font-size: 2.5rem;
}
.right {
    text-align: left;
    padding-top: 35%;
}
.right a {
    text-decoration: none;
}
.right img {
    margin-bottom: 2rem;
}
.right h3 {
    line-height: 0.5;
    font-weight: bold;
}
.right h3 {
    color: #fff;
    font-size: 17px;
    line-height: 1.1;
}
.right h3:hover {
    color: #fff;
    text-decoration: underline;
    text-decoration-color: #fff;
}
.date {
    color: #fff;
    font-size: 12px;
}

.top-posts {
    padding-top: 80px;
}

.latest-news {
    padding-top: 20px;
    position: relative;
}
.latest-news-inner {
    padding-bottom: 0;
}
.news-header {
    text-align: center;
}
.news-header h2 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 2rem;
}
.news-header span {
    display: inline-block;
    position: relative;
}
.sidebar h4 {
    font-size: 1.5rem;
    font-weight: 800;
    text-align: left;
}

.frontpages {
    background-color: #efefef;
}

.bottom-posts {
    padding-top: 80px;
}

.social-hub-cover {
    background-color: #042041;
}

@media (min-width: 1400px) {
    .container {
        max-width: 1260px;
    }
}
@media screen and (min-width: 1200px) {
    .news-header span:before {
        right: 100%;
        border-left: 1px solid #d9d9d9;
        content: "";
        height: 62px;
        width: 350px;
        border-top: 1px solid #d9d9d9;
        display: block;
        position: absolute;
        top: 30px;
    }
    .news-header span:after {
        left: 100%;
        border-right: 1px solid #d9d9d9;
        content: "";
        height: 62px;
        width: 350px;
        border-top: 1px solid #d9d9d9;
        display: block;
        position: absolute;
        top: 30px;
    }
}
@media screen and (max-width: 991px) {
    .featured-details {
        bottom: 1rem;
    }
    .left h3 {
        font-size: 18px;
    }
    .sidebar-outer {
        display: none;
    }
}
</style>
