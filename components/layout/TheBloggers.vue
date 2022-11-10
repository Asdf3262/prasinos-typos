<template>
    <div class="bloggers-cover">
        <div class="bloggers-header"><h2>BLOGGERS</h2></div>
        <b-container class="bloggers-wrapper">
            <b-row>
                <b-col lg="4" v-for="blogger in bloggers" :key="blogger.name">
                    <div class="blogger-container">
                        <img :src="blogger.image" alt="" class="avatar">
                        <div class="blogger-name">
                            {{ blogger.name }}
                        </div>
                        <NuxtLink to="/"><div class="blogger-subject">{{ blogger.description }}</div></NuxtLink>
                        <NuxtLink :to="blogger.articles"><div class="articles-link">Δες όλα τα άρθρα</div></NuxtLink>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bloggers: [
                {
                    name: 'Χρήστος Δημόπουλος',
                    description: 'Θέμα: Οι 5 μεταγραφές που αναμένονται και το «κλειδί» Καλάθης!',
                    articles: '/',
                    image: require('~/assets/blogger1.jpg')
                },
                {
                    name: 'Ηλίας Λιβάνιος',
                    description: 'Το μεγάλο «όπλο» του Παναθηναϊκού για τα προκριματικά',
                    articles: '/',
                    image: require('~/assets/blogger2.jpg')
                },
                {
                    name: 'Πράσινος Τιμωρός',
                    description: 'Χάαλαντ, Μπαπέ και Μόντριτς για Παναθηναϊκό - «ΟΧΙ» είπε ο Γιοβάνοβιτς',
                    articles: '/',
                    image: require('~/assets/blogger3.jpg')
                }
            ]
        };
    }
}
</script>

<style scoped>
.bloggers-cover {
    padding: 1px 15%;
    background-image: url('~/assets/bloggers_bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
.bloggers-header {
    text-align: center;
    padding: 1rem;
    margin: 40px 0;
}
.bloggers-wrapper {
    margin-bottom: 40px;
    padding-top: 0;
}
h2 {
    font-weight: 700;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    font-size: 3.125rem;
    position: relative;
    color: #fff;
}
h2:before {
    content: "";
    display: block;
    width: 30%;
    height: 1px;
    background: #ffffff;
    left: 0;
    top: 50%;
    position: absolute;
}
h2:after {
    content: "";
    display: block;
    width: 30%;
    height: 1px;
    background: #ffffff;
    right: 0;
    top: 50%;
    position: absolute;
}
.blogger-container {
    text-align: center;
    max-width: 200px;
    margin: auto;
}
.avatar {
    border-radius: 50%;
    border: 4px solid #5a8a70;
    box-shadow: 0 3px 12px rgb(0 0 0 / 40%);
    width: 180px;
    height: 180px;
    align-self: center;
}
.blogger-name {
    margin-top: 10px;
    font-size: 18px;
    color: #fff;
}
.blogger-subject, .articles-link {
    color: #fff;
    margin-top: 20px;
    text-decoration: none;
}
.articles-link {
    color: hsla(0,0%,100%,.6);
    font-size: .875rem;
}
a:hover {
    text-decoration: none;
}

@media screen and (max-width: 991px) {
    h2 {
        font-size: 2.5rem;
    }
    h2:before {
        display: none;
    }
    h2:after {
        display: none;
        font-size: 2.8125rem;
    }
}
</style>