<template>
    <div class="page page--time-tarif">
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
                <span class="breadcrumbs__current">Тарифы на время</span>
            </div>
            <h2>Тарифы на время</h2>
            <div class="linkgroup">
                <RouterLink class="linkgroup__link" to="#">Шаблонизатор</RouterLink>
                <RouterLink class="linkgroup__link" to="#">Опросник</RouterLink>
                <RouterLink class="linkgroup__link" to="#">Сокращатель ссылок</RouterLink>
            </div>

            <div class="row">
                <Card>
                    <template v-slot:header>
                        <div class="icon icon--unlim">
                            <img src="@/assets/images/icons/infinity.png" />
                        </div>
                    </template>
                    <template v-slot:content>
                        <h3>Тарифы на время</h3>
                        <p>
                            безлимит на 1 месяц , 3 , 6 , 12
                        </p>
                    </template>
                    <template v-slot:footer>
                        <router-link to="#" class="btn btn--reverse">Подробнее</router-link>
                    </template>
                </Card>

                <Card>
                    <template v-slot:header>
                        <div class="icon icon--time">
                            <img src="@/assets/images/icons/blue-numbers/1.png" />
                        </div>
                    </template>
                    <template v-slot:content>
                        <h3>Тарифы на время</h3>
                        <p>
                            безлимит на 1 месяц , 3 , 6 , 12
                        </p>
                    </template>
                    <template v-slot:footer>
                        <router-link to="#" class="btn btn--reverse">Подробнее</router-link>
                    </template>
                </Card>

                <Card>
                    <template v-slot:header>
                        <div class="icon icon--time">
                            <img src="@/assets/images/icons/blue-numbers/3.png" />
                        </div>
                    </template>
                    <template v-slot:content>
                        <h3>Тарифы на время</h3>
                        <p>
                            безлимит на 1 месяц , 3 , 6 , 12
                        </p>
                    </template>
                    <template v-slot:footer>
                        <router-link to="#" class="btn btn--reverse">Подробнее</router-link>
                    </template>
                </Card>
            </div>

            <div class="row ">
                <Card>
                    <template v-slot:header>
                        <div class="icon icon--time">
                            <img src="@/assets/images/icons/blue-numbers/6.png" />
                        </div>
                    </template>
                    <template v-slot:content>
                        <h3>Тарифы на время</h3>
                        <p>
                            безлимит на 1 месяц , 3 , 6 , 12
                        </p>
                    </template>
                    <template v-slot:footer>
                        <router-link to="#" class="btn btn--reverse">Подробнее</router-link>
                    </template>
                </Card>

                <Card>
                    <template v-slot:header>
                        <div class="icon icon--time">
                            <img src="@/assets/images/icons/blue-numbers/9.png" />
                        </div>
                    </template>
                    <template v-slot:content>
                        <h3>Тарифы на время</h3>
                        <p>
                            безлимит на 1 месяц , 3 , 6 , 12
                        </p>
                    </template>
                    <template v-slot:footer>
                        <router-link to="#" class="btn btn--reverse">Подробнее</router-link>
                    </template>
                </Card>

                <Card class="card--primary">
                    <template v-slot:header>
                        <div class="icon icon--white">
                            <img src="@/assets/images/icons/blue-numbers/0.png" />
                        </div>
                    </template>
                    <template v-slot:content>
                        <h3>Тарифы на время</h3>
                        <p>
                            безлимит на 1 месяц , 3 , 6 , 12
                        </p>
                    </template>
                    <template v-slot:footer>
                        <router-link to="#" class="btn btn--reverse-white">Подробнее</router-link>
                    </template>
                </Card>
            </div>
        </div>
        
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import UserInfo from '@/components/UserInfo.vue';
import Card from '../components/Card.vue'

export default {
    name: "TimeTarifPage",
    components: {
    Navigation,
    UserInfo,
    Card
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
            ]
        }
    }
}
</script>

<style lang="scss">
    .page.page--time-tarif{
        .container {
            padding-bottom:60px;
        }

        h2 {
            margin-top: 20px;
            margin-bottom: 40px;
        }

        .row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;

            .card:nth-child(2) {
                margin: 0 40px;
            }
        }
    }

    @media screen AND (max-width: 960px) {
        .page.page--time-tarif {
            .row {
                flex-direction: column;

                .card:nth-child(2) {
                    margin: 30px 0;
                }
            }

        }   
    }
</style>