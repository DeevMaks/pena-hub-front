<template>
    <div class="page page--tarif">
        <Navigation 
            :links="navLinks"
            :full-wide="true"
        >
            <template v-slot:right>
                <UserInfo />
            </template>   
        </Navigation>
        <div class="container">
            <h2>Выберите удобный тариф</h2>

            <div class="row">
                <Card>
                    <template v-slot:header>
                        <div class="icon icon--primary">
                            <img src="@/assets/images/icons/calendar.png" />
                        </div>
                    </template>
                    <template v-slot:content>
                        <h3>Тарифы на время</h3>
                        <p>
                            безлимит на 1 месяц , 3 , 6 , 12
                        </p>
                    </template>
                    <template v-slot:footer>
                        <router-link to="/tarif/time" class="btn btn--reverse">Подробнее</router-link>
                    </template>
                </Card>

                <Card>
                    <template v-slot:header>
                        <div class="icon icon--primary">
                            <img src="@/assets/images/icons/pie.png" />
                        </div>
                    </template>
                    <template v-slot:content>
                        <h3>Тарифы на обьем</h3>
                        <p>
                            безлимит на 1 месяц , 3 , 6 , 12
                        </p>
                    </template>
                    <template v-slot:footer>
                        <router-link to="/tarif/volume" class="btn btn--reverse">Подробнее</router-link>
                    </template>
                </Card>

                <Card>
                    <template v-slot:header>
                        <div class="icon icon--primary">
                            <img src="@/assets/images/icons/group.png" />
                        </div>
                    </template>
                    <template v-slot:content>
                        <h3>Кастомный тариф</h3>
                        <p>
                            Настраивайте под свои задачи
                        </p>
                    </template>
                    <template v-slot:footer>
                        <router-link to="/tarif/custom" class="btn btn--reverse">Подробнее</router-link>
                    </template>
                </Card>
            </div>
            <p>Или попробуйте наш <RouterLink to="#">бесплатный план</RouterLink></p>
            <h2>Наши продукты</h2>

            <div class="row ">
                <Card class="card--primary">
                    <template v-slot:content>
                        <img src="../assets/images/tamplate.png" />
                        <h3>Шаблонизатор</h3>
                        <p>
                            Текст-заполнитель — 
                            это текст, который имеет некоторые характеристики реального письменного текста, 
                            но является 
                        </p>
                        <router-link to="#" class="btn btn--white">Подробнее</router-link>
                    </template>
                </Card>

                <Card class="card--primary">
                    <template v-slot:content>
                        <img src="../assets/images/quiz.png" />
                        <h3>Опросник</h3>
                        <p>
                            Текст-заполнитель — 
                            это текст, который имеет некоторые характеристики реального письменного текста, 
                            но является 
                        </p>
                        <router-link to="#" class="btn btn--white">Подробнее</router-link>
                    </template>
                </Card>

                <Card class="card--primary">
                    <template v-slot:content>
                        <img src="../assets/images/link.png" />
                        <h3>Сокращатель ссылок</h3>
                        <p>
                            Текст-заполнитель — 
                            это текст, который имеет некоторые характеристики реального письменного текста, 
                            но является 
                        </p>
                        <router-link to="#" class="btn btn--white">Подробнее</router-link>
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
    name: "TarifPage",
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
    .page.page--tarif{
        .container {
            padding-bottom:60px;
        }

        h2 {
            margin-top: 60px;
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
        .page.page--tarif {
            .row {
                flex-direction: column;

                .card:nth-child(2) {
                    margin: 30px 0;
                }
            }

        }   
    }
</style>