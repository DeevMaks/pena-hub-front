<template>
    <section class="section section--landing-feedback" >
        <div class="container container--landing-feedback">
            <div class="col">
                <h3>Остались вопросы</h3>
                <div class="btn btn--white">Подробнее</div>
            </div>

            <div class="col">
                <p>
                    Сервисы  помогают предпринимателям, маркетологам и агентствам
                    сделать интернет-маркетинг прозрачным и эффективным. С нами не придется
                    тратить рекламный бюджет впустую и терять клиентов на сайте.
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'LandingSectionFeedback'
}
</script>

<style lang="scss">
    .section--landing-feedback {
        background-color: #7E2AEA;
        padding: 100px 0;

        .container {
            display: flex;
            justify-content: space-between;
        }

        .btn {
            margin-top: 60px;
        }
    }

    @media screen AND (max-width: 960px) {
        .section--landing-feedback {
            padding: 80px 0;

            .container {
                flex-direction: column;
            }

            .col {
                margin-bottom: 40px;
            }
        }
    }
</style>