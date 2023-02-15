<template>
    <div class="starry-night">
        <div class="container" style="opacity: 0.8;">
            <div class="row">
                <div class="col-8">
                    <div class="card mb-3 border-light" style="max-width: 1000px;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="../assets/personal.png" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                               <div class="card-body">
                                <p class="card-title fs-4 fw-bold">曾一凡 Yi-Fan Tseng</p>
                                <p class="card-text fs-5">政治大學 資訊科學系 助理教授</p>
                                <p class="card-text fs-6">聯絡方式：yftseng1989@gmail.com</p>
                                <hr>
                                <p class="card-text fs-5 lh-1 fw-bold">研究領域 :</p>
                                <p class="card-text lh-1">Cryptography, Information Security, Security Proof</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4 d-flex justify-content-center align-item-center" >
                    <button type="button" class="btn btn-dark align-self-center btn-lg">Dark</button>
                    <button type="button" class="btn btn-dark align-self-center btn-lg">Dark</button>
                </div>
            </div>
        </div>
        <div></div>
    </div>
</template>
<style>
    .starry-night {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 100%),
                    url('../assets/night.jpg.jpg');
        animation: stars 50s infinite;
    }

    @keyframes stars {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 1000px 1000px;
    }
    }

</style>
