<template>
    <header class="header">
        <div class="container header-container">
            <router-link to="/" class="header-logo">
                <img src="@/assets/img/header-logo.svg" alt="">
                <span>The Garden Gurus</span>
            </router-link>
            <ul class="header-navs">
                <li>
                    <router-link to="/table" class="header-navs__link">
                        <i class="fa-regular fa-paper-plane"></i>
                    </router-link>
                </li>
                <li>
                    <router-link to="/answer" class="header-navs__link">
                        <i class="fa-solid fa-share-nodes"></i>
                    </router-link>
                </li>
                <li>
                    <a href="#" class="header-navs__link">
                        <i class="fa-regular fa-envelope"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="header-navs__link">
                        <i class="fa-solid fa-phone"></i>
                    </a>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style>

</style>