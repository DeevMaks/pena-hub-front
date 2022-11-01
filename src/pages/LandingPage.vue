<template>
    <div class="page page--landing">
        <Navigation 
            :links="navLinks"
        >
            <template v-slot:right>
                <router-link to="/tarif" class="btn btn--white-reverse">Личный кабинет</router-link>
            </template>   
        </Navigation>
        <LandingSectionMain />
        <LandingSectionProducts />
        <LandingSectionPromo />
        <LandingSectionCounters />
        <LandingSectionFeedback />
        <LandingSectionFooter />
    </div>
</template>

<script>
    import Navigation from '../components/Navigation.vue'
    import LandingSectionMain from '../sections/LandingSectionMain.vue'
    import LandingSectionProducts from '@/sections/LandingSectionProducts.vue';
import LandingSectionPromo from '@/sections/LandingSectionPromo.vue';
import LandingSectionCounters from '@/sections/LandingSectionCounters.vue';
import LandingSectionFeedback from '@/sections/LandingSectionFeedback.vue';
import LandingSectionFooter from '@/sections/LandingSectionFooter.vue';

    export default {
        name: "LandingPage",
        components: {
    Navigation,
    LandingSectionMain,
    LandingSectionProducts,
    LandingSectionPromo,
    LandingSectionCounters,
    LandingSectionFeedback,
    LandingSectionFooter
},
        data() {
            return {
                navLinks: [
                    {path: '/faq', title: 'FAQ'},
                    {path: '/login', title: 'Логин'},
                    {path: '/', title: 'Меню 3'},
                    {path: '/', title: 'Меню 4'},
                    {path: '/', title: 'Меню 5'},
                    {path: '/', title: 'Меню 6'},
                ]
            }
        }
    }
</script>

<style lang="scss">
    .page.page--landing{
        background-color: #333647;
        color: #FFFFFF;
    }
</style>