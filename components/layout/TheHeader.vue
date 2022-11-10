<template>
    <header :class="stick ? 'nav-sticky' : ''">
        <div>
            <b-navbar toggleable="xl">
                <b-navbar-brand href="#"><NuxtLink to="/"><img src="~/assets/logo.png" alt="prasinos typos logo"></NuxtLink></b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item href="#"><NuxtLink to="/category/podosfairo">ΠΟΔΟΣΦΑΙΡΟ</NuxtLink></b-nav-item>
                        <b-nav-item href="#"><NuxtLink to="/category/basket">ΜΠΑΣΚΕΤ</NuxtLink></b-nav-item>
                        <b-nav-item href="#"><NuxtLink to="/">ΕΡΑΣΙΤΕΧΝΗΣ</NuxtLink></b-nav-item>
                        <b-nav-item href="#"><NuxtLink to="/">OI... ΑΛΛΟΙ</NuxtLink></b-nav-item>
                        <b-nav-item href="#"><NuxtLink to="/">ΣΤΟΙΧΗΜΑ</NuxtLink></b-nav-item>
                        <b-nav-item href="#"><NuxtLink to="/">LIFESTYLE</NuxtLink></b-nav-item>
                        <b-nav-item href="#"><NuxtLink to="/">POH ΕΙΔΗΣΕΩΝ</NuxtLink></b-nav-item>
                        <b-nav-item href="#">
                            <NuxtLink to="/">
                                <span data-v-9e4144f2="" class="activate-search-container"><i data-v-9e4144f2="" class="fa fa-search"></i></span>
                            </NuxtLink>
                        </b-nav-item>
                        <b-nav-item class="social" href="#"><img src="~/assets/facebook.png"></b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            sticky: false
        };
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll (event) {
            if (window.scrollY > 200) {
                this.sticky = true;
            }
            else {
                this.sticky = false;
            }
        }
    },
    computed: {
        stick() {
            return this.sticky;
        }
    }
}
</script>

<style scoped>
@import 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css';
.nav-sticky {
    position: fixed;
    top: 0;
    animation: slide-down 0.3s ease-out;
}
header {
    width: 100%;
    padding: 1rem 6rem;
    background-color: #fff;
    z-index: 10;
}
ul li {
    margin-left: 15px;
}
.navbar-brand {
    height: 65px;
}
a {
    color: black;
    font-weight: bold;
}
a:hover {
    text-decoration: none;
    color: #059011;
}
img {
    width: auto;
    height: 100%;
}
span {
    font-size: 14px;
}
.navbar-collapse {
    flex-grow: 0;
}
.social img {
    max-width: 20px;
}
.social ul {
    padding: 0;
    margin: 0;
    list-style: none;
}

@keyframes slide-down{
    0% {
        top: -200px;
    }
    100% {
        top: 0;
    }
}
@media screen and (max-width: 1400px) {
    #nav-collapse a {
        font-size: 0.9rem;
    }
}
@media screen and (max-width: 1199px) {
    .navbar-nav {
        flex-direction: row;
        margin-top: 2rem;
        justify-content: space-between;
    }
}
@media screen and (max-width: 991px) {
    .navbar-nav {
        flex-direction: column;
        margin-top: 2rem;
        justify-content: space-between;
    }
}
</style>