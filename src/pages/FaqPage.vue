<template>
    <div class="page page--faq">
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
            <h2>Вопросы и Ответы</h2>
            <div class="linkgroup">
                <RouterLink class="linkgroup__link" to="#">Шаблонизатор</RouterLink>
                <RouterLink class="linkgroup__link" to="#">Опросник</RouterLink>
                <RouterLink class="linkgroup__link" to="#">Сокращатель ссылок</RouterLink>
            </div>
            <Accordeon :data="faq" />
        </div>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import UserInfo from '@/components/UserInfo.vue';
import Card from '../components/Card.vue';
import Accordeon from '@/components/Accordeon.vue';

export default {
    name: "FaqPage",
    components: {
    Navigation,
    UserInfo,
    Card,
    Accordeon
},
    data() {
        return {
            navLinks: [
                {path: '/faq', title: 'FAQ'},
                {path: '/login', title: 'Логин'},
                {path: '/support', title: 'Поддержка'},
                {path: '/', title: 'Меню 4'},
                {path: '/', title: 'Меню 5'},
                {path: '/', title: 'Меню 6'},
            ],
            faq: [
                {question: 'Вопос 1', answer: 'Ответ 1'},
                {question: 'Вопос 2', answer: 'Ответ 2'},
                {question: 'Вопос 3', answer: 'Ответ 3'},
                {question: 'Вопос 4', answer: 'Ответ 4'},
                {question: 'Вопос 5', answer: 'Ответ 5'}
            ]
        }
    }
}
</script>

<style lang="scss">
.page.page--faq{

    .container {
        padding-bottom:60px;
    }

    h2 {
            margin-top: 20px;
            margin-bottom: 40px;
        }

    .row {
            margin-bottom: 80px;
        }

}
</style>