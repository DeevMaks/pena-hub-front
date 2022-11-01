<template>
    <RouterLink to="/" class="main-logo"></RouterLink>
</template>

<style>
    .main-logo {
        width: 180px;
        height: 79px;
        display: block;
        background-image: url('../assets/images/logo_PenaHab.svg');
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
    }

    .navigation .main-logo {
        width: 124px;
    } 

    .page--landing .main-logo {
        background-image: url('../assets/images/logo_PenaHab_w.svg');
    }
</style>