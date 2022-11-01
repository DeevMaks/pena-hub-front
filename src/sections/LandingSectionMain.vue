<template>
    <section class="section section--landing-main" >
        <div class="container container--landing-main">
            <div class="col col__left">
                <Logo />
                <h1>
                    Сервисы <br> прокачки <br> маркетинга
                </h1>
            </div>
            <div class="col col__right">
                <p>
                    Покажут эффективность рекламы <br>
                    Соберут все обращения клиентов <br>
                    Повысят конверсию сайта
                </p>
                <p>
                    И все это в едином кабинете
                </p>
                <div class="btn">Подробнее</div>
            
            </div>
        </div>
    </section>
</template>

<script>
import Logo from '@/components/Logo.vue';
export default {
    name: "LandingSectionMain",
    components: { Logo }
}
</script>

<style lang="scss">
    .section--landing-main {
        .container {
            min-height: 520px;
            background-image: url('../assets/images/section-main.svg');
            background-position: calc(50% + 30px) top;
            background-repeat: no-repeat;
            display: flex;
            justify-content: space-between;padding-top: 70px;
            color: #FFFFFF;
        }

        .col__right {
            margin-top: 160px;
            margin-right: 60px;

            .btn {
                margin-top: 40px;
            }
        }
    }

    @media screen and (max-width: 1088px) {
        .section--landing-main {
            .container {
                .col__right {
                    margin-right: 0;
                }
            }
        }
    }

    @media screen AND (max-width: 960px) {
        .section--landing-main {
            h1 {
                font-size: 42px;
            }
            .container {
                background-image: url('../assets/images/section-main-mobile.svg');
                background-position: center top;
                flex-direction: column;
                padding-top: 240px;
                padding-bottom: 71px;

                .col__right {
                    margin-top: 30px;
                    margin-right: 0px;
                }
            }
        }
    }

    @media screen AND (max-width: 760px) {
        .section--landing-main {
            & .main-logo {
                display: none;
            }
        }
    }
</style>