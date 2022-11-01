<template>
    <section class="section section--landing-products" >
        <div class="container container--landing-products">
            <div class="row">
                <h2>Интеграции,<br /> избавляющие<br /> от рутины</h2>
                <div class="landing-products__description">
                    <p>
                        Сервисы помогают предпринимателям, маркетологам и агентствам<br />
                        сделать интернет-маркетинг прозрачным и эффективным. С нами не придется<br />
                        тратить рекламный бюджет впустую и терять клиентов на сайте.
                    </p>

                    <RouterLink to="#">Подробнее 🡲</RouterLink>
                </div>
            </div>
            <div class="row row--parallax">
                <Card class="card--landing card--hovered">
                    <template v-slot:content>
                        <img src="../assets/images/tamplate.png" />
                        <h3>Шаблонизатор</h3>
                        <p>
                            Текст-заполнитель — 
                            это текст, который имеет некоторые характеристики реального письменного текста, 
                            но является 
                        </p>
                        <RouterLink to="#">Подробнее 🡲</RouterLink>
                    </template>
                </Card>

                <Card class="card--landing card--hovered">
                    <template v-slot:content>
                        <img src="../assets/images/quiz.png" />
                        <h3>Опросник</h3>
                        <p>
                            Текст-заполнитель — 
                            это текст, который имеет некоторые характеристики реального письменного текста, 
                            но является 
                        </p>
                        <RouterLink to="#">Подробнее 🡲</RouterLink>
                    </template>
                </Card>

                <Card class="card--landing card--hovered">
                    <template v-slot:content>
                        <img src="../assets/images/link.png" />
                        <h3>Сокращатель ссылок</h3>
                        <p>
                            Текст-заполнитель — 
                            это текст, который имеет некоторые характеристики реального письменного текста, 
                            но является 
                        </p>
                        <RouterLink to="#">Подробнее 🡲</RouterLink>
                    </template>
                </Card>
            </div>
        </div>
    </section>
</template>

<script>
import Card from '../components/Card.vue'

export default {
    name: "LandingSectionProducts",
    components: {Card}
}
</script>

<style lang="scss">
    .section--landing-products {
        min-height: 300px;
        background-color: #252734;
        padding-top: 90px;
        border-bottom: 53px solid #333647;

        .container {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
        }

        .row {
            display: flex;
            justify-content: space-between;
        }

        .row--parallax {
            margin-top: -53px;
            position: relative;
            top: 53px;
        }

        .landing-products__description {
            margin-top: 10px;
            margin-left: 120px;
        }

        .card:nth-child(2) {
            margin: 0 20px;
        }
       
    }

    @media screen AND (max-width: 960px) {
        .section--landing-products {
            .row {
                flex-direction: column;
            }

            .landing-products__description {
                margin-top: 0;
                margin-left: 0px;
                margin-bottom: 40px;
            }

            .card:nth-child(2) {
                margin: 30px 0;
            }
        }   
    }
</style>