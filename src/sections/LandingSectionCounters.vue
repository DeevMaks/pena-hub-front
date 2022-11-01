<template>
    <section class="section section--landing-counters" >
        <div class="container container--landing-counters">
            <div class="counter" v-for="counter, idx of counters" :key="idx">
                <span class="counter__value">{{ counter.value}}</span>
                <span class="counter__title">{{ counter.name }}</span>
            </div>
        </div>
    </section>
</template>

<script>                                                                                                                                                                                                          
export default {
    name: 'LandingSectonCounters',
    data() {
        return {
            counters: [
                {name: 'counter1', value: 15},
                {name: 'counter2', value: 1573},
                {name: 'counter3', value: 3},
                {name: 'counter4', value: 1},
                {name: 'counter5', value: '24/7'},
                {name: 'counter6', value: 1531},
            ]
        }
    }
}
</script>

<style lang="scss">
.section--landing-counters {
    padding: 100px 0;
    padding-bottom: 40px;
    background-color: #252734;

        .container {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        .counter {
            width: 33%;
            display: flex;
            flex-direction: column;
            text-align: left;
            margin-bottom: 60px;

            &:nth-child(2), &:nth-child(5) {
                text-align: center;               
            } 

            &:nth-child(3),  &:nth-child(6) {
                text-align: right;               
            } 

            &__value {
                font-size: 80px;
                color: #7E2AEA;
            }

        }

}

@media screen AND (max-width: 680px) {
            .section--landing-counters {
                padding: 80px 0;
                padding-bottom: 40px;
                background-color: #252734;

                .container {
                    flex-direction: column;
                }

                .counter{ 
                    width: 100%;
                    text-align: center !important;
                }
            }
        }
</style>