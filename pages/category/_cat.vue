<template>
    <div>
        <the-header></the-header>
        <div class="category-header" :class="category">
            <h2 class="category-title">
                {{ title }}
            </h2>
        </div>
        <div class="category-posts">
            <div class="container">
                <div class="row posts-row" v-for="index in rows" :key="index">
                    <div class="col-sm-4 col-lg-3">
                        <post-card v-if="currentPosts[index-1][0]" :post="currentPosts[index-1][0]"></post-card>
                    </div>
                    <div class="col-sm-4 col-lg-3">
                        <post-card v-if="currentPosts[index-1][1]" :post="currentPosts[index-1][1]"></post-card>
                    </div>
                    <div class="col-sm-4 col-lg-3">
                        <post-card v-if="currentPosts[index-1][2]" :post="currentPosts[index-1][2]"></post-card>
                    </div>
                </div>
            </div>
        </div>
        <div class="pagination">
            <!-- <button @click="changePage(index)" v-for="index in Math.ceil(this.posts.length/9)" :key="index">{{ index }}</button> -->
            <button @click="changePage(1)" v-if="currentPage > 2">{{ 1 }} </button>
            <span v-if="currentPage > 3">...</span>
            <button @click="changePage(currentPage - 1)" v-if="currentPage > 1">{{ currentPage - 1}} </button>
            <button class="active">{{ currentPage }} </button>
            <button @click="changePage(currentPage + 1)" v-if="currentPage < lastPage">{{ currentPage + 1}} </button>
            <span v-if="currentPage < lastPage - 2">...</span>
            <button @click="changePage(lastPage)" v-if="currentPage < lastPage-1">{{ lastPage }} </button>
        </div>
        <the-footer></the-footer>
    </div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader'
import TheFooter from '@/components/layout/TheFooter'
import PostCard from '@/components/UI/PostCard'
export default {
    data() {
        return {
            postPos: 0,
            category: '',
            currentPosts: [],
            rows: 3,
            currentPage: 1
        };
    },
    components: {
        TheHeader,
        TheFooter,
        PostCard
    },
    computed: {
        title() {
            return this.category === 'podosfairo' ? 'ΠΟΔΟΣΦΑΙΡΟ' : 'ΜΠΑΣΚΕΤ';
        },
        posts() {
            if (this.category === 'podosfairo') {
                return this.$store.getters.getCategory('ποδοσφαιρο');
            }
            else {
                return this.$store.getters.getCategory('μπασκετ');
            }
        },
        lastPage() {
            return Math.ceil(this.posts.length/9);
        }
    },
    methods: {
        loadCategory(route) {
            this.category = route.params.cat;
        },
        getPostRow() {
            let postsRow = [];
            let current = [];
            let expectRows = 1;
            for (let i = this.postPos; i < this.postPos + 9; i++) {
                if ( i >= this.posts.length) {
                    this.rows = expectRows;
                    current.push(postsRow);
                    break;
                }
                postsRow.push(this.posts[i]);
                if ((i+1)%3 === 0) {
                    current.push(postsRow);
                    postsRow = [];
                    expectRows = expectRows + 1;
                }
            }
            this.currentPosts = current;
        },
        changePage(idx) {
            this.postPos = (idx-1)*9;
            this.rows = 3;
            this.currentPage = idx;
            this.getPostRow();
            if(idx === this.lastPage) {
                window.scroll(0, 100);
            }
        }
    },
    created() {
        this.loadCategory(this.$route);
        this.getPostRow();
    },
    watch: {
        $route(newRoute) {
            this.loadCategory(newRoute);
            this.getPostRow();
        },
        currentPosts: {
            deep: true,
            handler() {
                console.log('Current Posts have changed!');
            }
        },
        category: {
            deep: true,
            handler() {
                console.log('Category has changed!');
            }
        }
    }
}
</script>

<style scoped>
.category-header {
    height: 260px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}
.category-header.podosfairo {
    background-image: url('~/assets/podosfairo_bg.jpg');
}
.category-header.basket {
    background-image: url('~/assets/basket_bg.jpg');
}
.category-title {
    font-size: 1.6rem;
    font-weight: 700;
    color: #fff;
}
.posts-row {
    margin-top: 2rem;
}
.pagination {
    justify-content: center;
    margin: 1rem 0 3rem 0;
}
button {
    border: none;
    background: none;
    font-weight: bold;
    font-size: 20px;
}
.pagination span {
    font-size: 20px;
    font-weight: bold;
}
.active {
    background-color: #059011;
    border-radius: 5px;
    color: #fff;
}
</style>