<template>
    <div class="social-hub">
        <div class="container">
            <div class="social-header">
                <h2>THE SOCIAL HUB</h2>
            </div>
            <b-container>
                <b-row>
                    <b-col lg="6">
                        <div class="social-wrapper">
                            <social-card :main="true">
                                <template v-slot:title><h2>ΤΑ HIGHLIGHTS ΤΟΥ «ΕΞΑΣΤΕΡΟΥ» ΑΠΟ ΤΟΝ ΘΡΙΑΜΒΟ ΜΕ ΤΗΝ ΕΦΕΣ (VID)</h2></template>
                                <template v-slot:video>
                                    <iframe width="100%" height="100%"
                                        src="https://www.youtube.com/embed/rakJTMVo1Eg">
                                    </iframe>
                                </template>
                            </social-card>
                        </div>
                    </b-col>
                    <b-col lg="6" class="social-right">
                        <b-row>
                            <b-col lg="6">
                                <div class="social-wrapper">
                                    <social-card>
                                        <template v-slot:title><h2>ΤΑ HIGHLIGHTS ΑΠΟ ΤΟ ΑΡΗΣ - ΠΑΝΑΘΗΝΑΙΚΟΣ 1-0</h2></template>
                                        <template v-slot:video>
                                            <iframe width="100%" height="100%"
                                                src="https://www.youtube.com/embed/rakJTMVo1Eg">
                                            </iframe>
                                        </template>
                                    </social-card>
                                </div>
                            </b-col>
                            <b-col lg="6">
                                <div class="social-wrapper">
                                    <social-card>
                                        <template v-slot:title><h2>ΠΑΝΑΘΗΝΑΙΚΟΣ - ΑΠΟΛΛΩΝ ΣΜΥΡΝΗΣ 4-0 | ΣΤΙΓΜΙΟΤΥΠΑ</h2></template>
                                        <template v-slot:video>
                                            <iframe width="100%" height="100%"
                                                src="https://www.youtube.com/embed/rakJTMVo1Eg">
                                            </iframe>
                                        </template>
                                    </social-card>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col lg="6">
                                <div class="social-wrapper">
                                    <social-card>
                                        <template v-slot:title><h2>ΠΑΝΑΘΗΝΑΙΚΟΣ - ΑΠΟΛΛΩΝ ΣΜΥΡΝΗΣ 4-0 | ΣΤΙΓΜΙΟΤΥΠΑ</h2></template>
                                        <template v-slot:video>
                                            <iframe width="100%" height="100%"
                                                src="https://www.youtube.com/embed/rakJTMVo1Eg">
                                            </iframe>
                                        </template>
                                    </social-card>
                                </div>
                            </b-col>
                            <b-col lg="6">
                                <div class="social-wrapper">
                                    <social-card>
                                        <template v-slot:title>
                                            <h2>ΜΑΓΙΚΟΣ ΠΑΠΑΠΕΤΡΟΥ ΜΕ 41 ΠΟΝΤΟΥΣ - ΝΙΚΗ ΣΤΗ ΔΕΥΤΕΡΗ ΠΑΡΑΤΑΣΗ (ΒΙΝΤΕΟ HIGHLIGHTS)</h2>
                                        </template>
                                        <template v-slot:video>
                                            <iframe width="100%" height="100%"
                                                src="https://www.youtube.com/embed/rakJTMVo1Eg">
                                            </iframe>
                                        </template>
                                    </social-card>
                                </div>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-container>
            <div class="btn-more"><NuxtLink to="/">ΔΕΙΤΕ ΠΕΡΙΣΣΟΤΕΡΑ</NuxtLink></div>
        </div>
    </div>
</template>

<script>
import SocialCard from '@/components/UI/SocialCard'
export default {
    components: {
        SocialCard
    }
}
</script>

<style scoped>
.social-hub {
    padding-bottom: 40px;
}
.social-wrapper {
    height: 100%;
}
.social-header h2 {
    color: #fff;
}
iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.social-right h2 {
    font-size: 1rem;
}
.btn-more {
    text-align: center;
    margin-top: 30px;
}
.btn-more a {
    padding: 15px 100px;
    border: 1px solid;
    border-color: #4c6f98!important;
    color: #4c6f98;
    font-size: 14px;
    font-weight: 800;
    letter-spacing: .84px;
    transition: all 0.2s;
}
.btn-more a:hover {
    text-decoration: none;
    background-color: #04770e;
    border-color: #04770e;
    color: #fff;
}

@media (min-width: 1400px) {
    .container {
        max-width: 1260px;
    }
}
</style>