<template>
    <section class="section section--landing-promo" >
        <div class="container container--landing-promo">
            <div class="col">
                <h3>
                    Узнайте, как наши сервисы <br />
                    решают ваши задачи
                </h3>
                <div class="landing-promo__description">
                    <p>
                        Сервисы помогают предпринимателям, маркетологам и агентствам
                        сделать интернет-маркетинг прозрачным и эффективным. С нами не придется
                        тратить рекламный бюджет впустую и терять клиентов на сайте.
                    </p>

                    <RouterLink to="#">Подробнее 🡲</RouterLink>
                </div>

                <Card class="card--promo">
                    <template v-slot:bg>
                        <img src="../assets/images/Frame21.png" />
                    </template>
                </Card>
            </div>
            <div class="col">
                <Card class="card--promo">
                    <template v-slot:bg>
                        <img src="../assets/images/Frame21.png" />
                    </template>
                </Card>

                <Card class="card--promo">
                    <template v-slot:bg>
                        <img src="../assets/images/Frame21.png" />
                    </template>
                </Card>
            </div>
        </div>
    </section>
</template>

<script>
import Card from '../components/Card.vue'

export default {
    name: "LandingSectionPromo",
    components: {Card}
}
</script>

<style lang="scss">
    .section--landing-promo {
        padding: 100px 0;

        .container {
            display: flex;
            justify-content: space-between;
        }

        .col {
            width: calc(50% - 80px);
            display: flex;
            flex-direction: column;
        }

        .landing-promo__description {
            margin-top: 70px;
            margin-bottom: 60px;
        }

        .card:nth-child(2) {
            margin-top: 140px;
        }
    }

    @media screen AND (max-width: 960px) {
        .section--landing-promo {
            padding: 80px 0;
            .container {
                flex-direction: column;
            }

            .card:nth-child(2) {
                margin-top: 30px;
            }

            .card {
                margin-top: 30px;
            }

            .col {
                width: 100%;
            }
        }
    }
</style>