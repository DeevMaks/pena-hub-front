<template>
    <section class="section section--landing-footer" >
        <div class="container container--landing-footer">
           <div class="footer__nav">
            <Logo />
            <nav>
                <RouterLink to="#">link1</RouterLink>
                <RouterLink to="#">link1</RouterLink>
                <RouterLink to="#">link1</RouterLink>
            </nav>
            <nav>
                <RouterLink to="#">link1</RouterLink>
                <RouterLink to="#">link1</RouterLink>
                <RouterLink to="#">link1</RouterLink>
            </nav>
            <nav>
                <RouterLink to="#">link1</RouterLink>
                <RouterLink to="#">link1</RouterLink>
                <RouterLink to="#">link1</RouterLink>
            </nav>
            <p>
                Сервисы  помогают предпринимателям,<br /> маркетологам и агентствам <br />
                сделать интернет-маркетинг прозрач
            </p>
           </div>
           <footer>
            Конструктор маркетинговых решений. © 2022
           </footer>
        </div>
    </section>
</template>

<script>
import Logo from '@/components/Logo.vue';
export default {
    name: "LandingSectionFooter",
    components: { Logo }
}
</script>

<style lang="scss">
    .section--landing-footer {
        padding: 100px 0;
        padding-bottom: 60px;

        .container {
        }

        .footer__nav {
            display:flex;
            justify-content: space-between;
            align-items: center;

            nav {
                display: flex;
                flex-direction: column;

                a {
                    color: #ffffff;
                    margin-bottom: 10px;
                }
            }
        }

        footer {
            text-align: center;
            margin-top: 100px;
        }
    }

    @media screen AND (max-width: 960px) {
        .section--landing-footer {
            padding-bottom: 20px;

            .footer__nav {
                flex-direction: column;
                align-items: flex-start;

                .main-logo {
                    margin-bottom: 50px;
                }

                p{
                    margin-top: 30px;
                }
            } 

            footer {
                text-align: left;
                margin-top: 50px;
                padding-top: 30px;
                border-top: 1px solid #FFFFFF;
            }
        }

       
    }
</style>