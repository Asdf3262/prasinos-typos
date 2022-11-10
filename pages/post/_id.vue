<template>
    <div>
        <the-header></the-header>
        <div class="post-header" :class="category">
            <div><h2 class="post-title">
                {{ post.title }}
            </h2></div>
            <div class="created-at">
                Δημοσιεύτηκε στις {{ post.timestamp }}
            </div>
        </div>
        <div class="container post-content">
            <div class="row">
                <div class="col-lg-9">
                    <div class="post-image">
                        <img :src="post.image">
                    </div>
                    <div class="post-socials">
                        <a href="#">
                            <div class="fb">
                                    <img src="~/assets/fb.png">
                                    <span>Facebook</span>
                            </div>
                        </a>
                        <div class="whatsapp">
                            
                        </div>
                        <div class="twitter">
                            
                        </div>
                    </div>
                    <div class="post-description">
                        {{ post.description }}
                    </div>
                </div>
            </div>
        </div>
        <the-footer></the-footer>
    </div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader'
import TheFooter from '@/components/layout/TheFooter'

export default {
    data() {
        return {
        };
    },
    components: {
        TheHeader,
        TheFooter
    },
    computed: {
        postId() {
            return this.$route.params.id;
        },
        post() {
            return this.$store.getters.getPost(parseInt(this.postId));
        },
        category() {
            return this.post.category === "ποδοσφαιρο" ? "podosfairo" : "basket";
        }
    }
}
</script>

<style scoped>
.post-header {
    height: 260px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 3rem;
}
.post-header.podosfairo {
    background-image: url('~/assets/podosfairo_bg.jpg');
}
.post-header.basket {
    background-image: url('~/assets/basket_bg.jpg');
}
.post-title {
    font-size: 1.6rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 20px;
}
.created-at {
    color: #fff;
    font-size: 14px;
}
.post-image img {
    width: 100%;
}
.post-socials {
    margin-top: 2rem;
}
.fb {
    background-color: #3a559f;
    display: inline-block;
    padding: 10px 20px 10px 5px;
}
.fb img {
    width: 24px;
    background-color: #fff;
}
.fb span {
    color: #fff;
    font-size: 14px;
}
.post-description {
    margin-top: 2rem;
}
@media screen and (max-width: 1400px) {
    .post-header  {
        padding-left: 0;
    }
    .created-at {
        padding-left: 1rem;
    }
}
</style>
