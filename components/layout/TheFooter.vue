<template>
    <footer class="footer">
        <div class="top-footer">
            <div class="tnc">
                <a href="">
                    <img src="~/assets/tnc.png">
                </a>
            </div>
        </div>
        <div class="bottom-footer container px-6">
            <div class="row sponsors">
                <div class="col-sm-4 col-lg-2">
                    <a href="">
                        <img src="~/assets/newpost.png">
                    </a>
                </div>
                <div class="col-sm-4 col-lg-2">
                    <a href="">
                        <img src="~/assets/provoc.png">
                    </a>
                </div>
                <div class="col-sm-4 col-lg-2">
                    <a href="">
                        <img src="~/assets/sportdog.png">
                    </a>
                </div>
                <div class="col-sm-4 col-lg-2">
                    <a href="">
                        <img src="~/assets/playboy.png">
                    </a>
                </div>
                <div class="col-sm-4 col-lg-2">
                    <a href="">
                        <img src="~/assets/startup.png">
                    </a>
                </div>
                <div class="col-sm-4 col-lg-2">
                    <a href="">
                        <img src="~/assets/prasinos.png">
                    </a>
                </div>
            </div>
            <div class="row contact">
                <button>ΕΠΙΚΟΙΝΩΝΙΑ</button>
            </div>
        </div>
        <div class="copyright-powered">
            <div class="cp-wrapper">
                <div class="copyright">
                    <span>Copyright 2022 - TNC Media Group</span>
                </div>
                <div class="powered">
                    <span>Powered By <img src="~/assets/webjar.png"></span>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    padding-top: 4rem;
    background-color: #f5f5f5;
}
.sponsors div, .tnc {
    text-align: center;
}
.sponsors img {
    width: 90%;
}
.contact button {
    margin: 4rem auto 1.5rem;
    font-size: 14px;
    border: none;
    background: none;
    font-size: .8125rem;
    font-weight: 700;
    color: #747474;
    text-decoration: underline;
}
.copyright-powered {
    border-top: 1px solid #e2e2e2;
    font-size: .625rem;
    color: #868686;
    padding-top: 2rem;
    padding-bottom: 2rem;
}
.cp-wrapper {
    max-width: 1140px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.copyright {
    text-align: left;
}
.powered {
    text-align: right;
}
.powered img {
    height: 12px;
}

@media screen and (max-width: 991px) {
    .sponsors img {
        width: auto;
        margin-bottom: 2rem;
    }
}
</style>