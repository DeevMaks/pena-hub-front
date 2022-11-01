<template>
    <div class="page page--custom-tarif">
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
            <h2>Кастомный тариф <span class="accent">Шаблонизатор</span></h2>
            <div class="row">
                <Card class="card--twin">
                    <template v-slot:header>
                        <span class="light-text">Текст-заполнитель — это текст, который имеет </span>
                    </template>
                    <template v-slot:content>
                        <div>
                            <div class="inner-header">
                                <h3>
                                    <div class="icon icon--red">
                                        <img src="@/assets/images/icons/calendar-red.png" />
                                    </div>
                                    Время
                                </h3>
                                <h3 class="accent">{{template.time}} месяцев</h3>
                            </div>
                            <Slider :from="0" :to="12" :value="template.time" />
                        </div>
                        <div>
                            <div class="inner-header">
                                <h3>
                                    <div class="icon icon--red">
                                        <img src="@/assets/images/icons/pie-red.png" />
                                    </div>
                                    Обьем
                                </h3>
                                <h3 class="accent">{{template.volume}} шаблонов</h3>
                            </div>
                            <Slider :from="0" :to="5000" :value="template.volume" />
                        </div>
                    </template>

                    <template v-slot:aside-header>
                        <div class="aside">
                            <span class="light-text">Чем больше пакеты, тем дешевле подписки и опции </span>
                            <div class="sale">-60%</div>
                        </div>
                        
                    </template>

                    <template v-slot:aside-content>
                        <div class="aside-content">
                            <span class="light-text">Сумма с учетом скидки</span>
                            <div class="price-wrapper light-text">
                                <span class="price">3 190  руб.</span>
                                <span class="price price--old">10 190  руб.</span>
                            </div>
                        </div>
                    </template>

                    <template v-slot:aside-footer>
                        <router-link to="#" class="btn">Выбрать</router-link>
                    </template>
                </Card>
            </div>
            <h2>Кастомный тариф <span class="accent">Опросник</span></h2>
            <div class="row">
                <Card class="card--twin">
                    <template v-slot:header>
                        <span class="light-text">Текст-заполнитель — это текст, который имеет </span>
                    </template>
                    <template v-slot:content>
                        <div>
                            <div class="inner-header">
                                <h3>
                                    <div class="icon icon--red">
                                        <img src="@/assets/images/icons/calendar-red.png" />
                                    </div>
                                    Время
                                </h3>
                                <h3 class="accent">{{template.time}} месяцев</h3>
                            </div>
                            <Slider :from="0" :to="12" :value="template.time" />
                        </div>
                        <div>
                            <div class="inner-header">
                                <h3>
                                    <div class="icon icon--red">
                                        <img src="@/assets/images/icons/pie-red.png" />
                                    </div>
                                    Обьем
                                </h3>
                                <h3 class="accent">{{template.volume}} шаблонов</h3>
                            </div>
                            <Slider :from="0" :to="5000" :value="template.volume" />
                        </div>
                    </template>

                    <template v-slot:aside-header>
                        <div class="aside">
                            <span class="light-text">Чем больше пакеты, тем дешевле подписки и опции </span>
                            <div class="sale">-60%</div>
                        </div>
                        
                    </template>

                    <template v-slot:aside-content>
                        <div class="aside-content">
                            <span class="light-text">Сумма с учетом скидки</span>
                            <div class="price-wrapper light-text">
                                <span class="price">3 190  руб.</span>
                                <span class="price price--old">10 190  руб.</span>
                            </div>
                        </div>
                    </template>

                    <template v-slot:aside-footer>
                        <router-link to="#" class="btn">Выбрать</router-link>
                    </template>
                </Card>
            </div>

            <hr />
            <div class="total">
                <div class="total__desc">
                    <h2>Итоговая цена</h2>
                    <p class="light-text">
                        Текст-заполнитель — 
                        это текст, который имеет Текст-заполнитель — 
                        это текст, который имеет Текст-заполнитель — 
                        это текст, который имеет Текст-заполнитель — 
                        это текст, который имеет Текст-заполнитель
                    </p>
                </div>
                <div class="total__info">
                    <span class="price price--old">10 190  руб.</span>
                    <span class="price">3 190  руб.</span>
                    <router-link to="#" class="btn">Выбрать</router-link>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import UserInfo from '@/components/UserInfo.vue';
import Card from '../components/Card.vue';
import Slider from '../components/Slider.vue';

export default {
    name: "CustomTarifPage",
    components: {
        Navigation,
        UserInfo,
        Card,
        Slider
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
            template: {
                time: 9,
                volume: 1000
            }
        }
    }
}
</script>

<style lang="scss">
    .page.page--custom-tarif{

        .container {
            padding-bottom:60px;
        }

        .total {
            display: flex;

            &__desc {
                flex-grow: 80;
                min-width: 65%;
            }

            &__info {
                flex-grow: 40;
                display:flex;
                flex-direction: column;
                justify-content: space-between;
                min-width: 35%;
                padding: 0 40px;
            }
        }

        @media screen AND (max-width: 960px) {
            .total {
                flex-direction: column;

                &__info {
                    padding: 0;
                    height: 200px;
                }
            }
        }

        h2 {
            margin-top: 20px;
            margin-bottom: 40px;
        }

        .row {
            margin-bottom: 80px;
        }

        .card {
            .inner-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 20px;
            }
            h3 {
                display: flex;
                align-items: center;
            }
            .icon{
                margin-right: 20px;
            }

            .aside {
                display: flex;
                justify-content: space-between;
            }

            .aside-content {
                margin-top: 45px;
                margin-bottom: 40px;
            }

            .price-wrapper {
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>