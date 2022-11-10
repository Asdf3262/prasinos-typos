<template>
    <div class="triples-cover">
        <b-container class="bv-row">
            <b-row class="post-row" :class="alignment" v-for="index in postrows" :key="index">
                <b-col sm="4" :md="4" :lg="lgcolumns" v-for="idx in 3" :key="idx">
                    <post-card :post="posts[index-1][idx-1]"></post-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import PostCard from '@/components/UI/PostCard'
export default {
    components: {
        PostCard
    },
    props: {
        postrows: Number,
        alignment: String,
        lgcolumns: Number,
        startat: Number
    },
    computed: {
        posts() {
            let pos = this.startat;
            let tposts = []
            let r = []
            for (let i = 0; i < this.postrows; i++) {
                r.push(this.$store.getters.getPost(pos))
                r.push(this.$store.getters.getPost(pos+1))
                r.push(this.$store.getters.getPost(pos+2))
                tposts.push(r);
                r = [];
                pos = pos + 3;
            }
            return tposts;
        }
    }
}
</script>

<style scoped>
.triples-cover {
    padding-bottom: 40px;
}
.right-align {
    justify-content: right;
}
.bv-row {
    padding-top: 0;
}
.post-row {
    margin-bottom: 30px;
}
@media (min-width: 1400px) {
    .container {
        max-width: 1260px;
    }
}
</style>