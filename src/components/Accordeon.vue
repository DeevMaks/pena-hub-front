<template>
    <div class="accordeon">
        <div class="accordeon__item" @click="open(i)" v-for="item, i of data" :key="i">
            <div class="accordeon__question">
                {{ item.question }}

                <img v-if="i != opened" src="../assets/images/icons/arrows/circle-down.png" />
                <img v-else="" src="../assets/images/icons/arrows/circle-up.png" />
            </div>
            <Transition>
                <div v-show="i == opened" class="accordeon__answer">
                    {{ item.answer }}
                </div>
            </Transition>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Accordeon',
    props: {
        data: Array
    },
    data() {
        return {
            opened: null
        }
    },
    methods: {
        open(n) {
            this.opened = n
        }
    }
}
</script>

<style lang="scss">
.accordeon {
    width: 100%;
    min-height: 74px;
    background-color: #FFFFFF;
    box-shadow: 0px 100px 309px rgba(210, 208, 225, 0.24), 0px 41.7776px 129.093px rgba(210, 208, 225, 0.172525), 0px 22.3363px 69.0192px rgba(210, 208, 225, 0.143066), 0px 12.5216px 38.6916px rgba(210, 208, 225, 0.12), 0px 6.6501px 20.5488px rgba(210, 208, 225, 0.0969343), 0px 2.76726px 8.55082px rgba(210, 208, 225, 0.0674749);
    border-radius: 12px;

    &__item {
        display: flex;
        flex-direction: column;
        width: 100%;   
        border-bottom: 1px solid #9A9AAF;   
        
        &:last-child {
            border-bottom: none;
        }
    }

    &__question {
        height: 75px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;

        color: #4D4D4D;
    }

    &__answer {
        background-color: #F1F2F6;
        padding: 20px;
        font-weight: 400;
        font-size: 18px;
        color: #4D4D4D;
    }

    .v-enter-active,
    .v-leave-active {
        transition: 0.5s;
    }

    .v-enter-to,
    .v-leave-from {
        height: 0;
        opacity: 1;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
        height: 75px;
    }
}
</style>