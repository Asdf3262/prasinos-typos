<template>
    <div class="container">
        <div class="fronts">
            <h2>ΠΡΩΤΟΣΕΛΙΔΑ</h2>
            <VueSlickCarousel v-bind="settings">
                <div class="front-item">
                    <h6>ΧΑΝΙΩΤΙΚΑ ΝΕΑ</h6>
                    <div class="frontpage-image">
                        <img src="~/assets/frontp.jpg">
                    </div>
                </div>
                <div class="front-item">
                    <h6>ΧΑΝΙΩΤΙΚΑ ΝΕΑ</h6>
                    <div class="frontpage-image">
                        <img src="~/assets/frontp.jpg">
                    </div>
                </div>
                <div class="front-item">
                    <h6>ΧΑΝΙΩΤΙΚΑ ΝΕΑ</h6>
                    <div class="frontpage-image">
                        <img src="~/assets/frontp.jpg">
                    </div>
                </div>
                <div class="front-item">
                    <h6>ΧΑΝΙΩΤΙΚΑ ΝΕΑ</h6>
                    <div class="frontpage-image">
                        <img src="~/assets/frontp.jpg">
                    </div>
                </div>
                
                <div class="front-item">
                    <h6>ΧΑΝΙΩΤΙΚΑ ΝΕΑ</h6>
                    <div class="frontpage-image">
                        <img src="~/assets/frontp.jpg">
                    </div>
                </div>
                <div class="front-item">
                    <h6>ΧΑΝΙΩΤΙΚΑ ΝΕΑ</h6>
                    <div class="frontpage-image">
                        <img src="~/assets/frontp.jpg">
                    </div>
                </div>
                <div class="front-item">
                    <h6>ΧΑΝΙΩΤΙΚΑ ΝΕΑ</h6>
                    <div class="frontpage-image">
                        <img src="~/assets/frontp.jpg">
                    </div>
                </div>
                <div class="front-item">
                    <h6>ΧΑΝΙΩΤΙΚΑ ΝΕΑ</h6>
                    <div class="frontpage-image">
                        <img src="~/assets/frontp.jpg">
                    </div>
                </div>
                
            </VueSlickCarousel>
        </div>
    </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    components: { VueSlickCarousel },
    data() {
        return {
            settings: {
                "arrows": false,
                "dots": true,
                "focusOnSelect": true,
                "infinite": true,
                "speed": 500,
                "slidesToShow": 4,
                "slidesToScroll": 1,
                "touchThreshold": 5,
                "dotsClass": "slick-dots custom-dot-class",
                "responsive": [
                    {
                    "breakpoint": 1024,
                    "settings": {
                        "slidesToShow": 3,
                    }
                    },
                    {
                    "breakpoint": 600,
                    "settings": {
                        "slidesToShow": 2,
                    }
                    },
                    {
                    "breakpoint": 480,
                    "settings": {
                        "slidesToShow": 1,
                    }
                    }
                ]
            }
        };
    }
}
</script>

<style>
.slick-slider {
    text-align: center;
}
.fronts h6 {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 700;
}
.frontpage-image img {
    max-width: 80%;
    margin: 10px auto;
}
ul {
    list-style-type: none;
}
.front-item:hover {
    border-radius: 10px;
    background-color: #d8d8d8;
}
</style>