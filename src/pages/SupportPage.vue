<template>
    <div class="page page--support">
        <Navigation 
            :links="navLinks"
            :full-wide="true"
        >
            <template v-slot:right>
                <UserInfo />
            </template>    
        </Navigation>
        <div class="container">
            <div class="breadcrumbs">
                <RouterLink class="breadcrumbs__link" to="/tarif">Все тарифы</RouterLink>
                <span class="breadcrumbs__delimeter">-</span>
                <span class="breadcrumbs__current">Кастомный тариф</span>
            </div>
            <h2>Запрос в службу техподдержки</h2>
            
            <SupportCreate />
        </div>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import UserInfo from '@/components/UserInfo.vue';
import Card from '../components/Card.vue';
import SupportCreate from '../components/SupportCreate.vue';

export default {
    name: "SupportPage",
    components: {
        Navigation,
        UserInfo,
        Card,
        SupportCreate
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
.page.page--support{

    .container {
        padding-bottom:60px;
    }

    h2 {
            margin-top: 20px;
            margin-bottom: 40px;
        }

    

}
</style>