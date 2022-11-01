<template>
    <div class="slider">
        <div class="slider__track">
            <div class="slider__fill" :style="`width: ${fill}%`"></div>
        </div>
        <div class="slider__handler" :style="`left: calc( ${fill}% - 18px)`"></div>
    </div>
</template>

<script>
export default {
    name: 'Slider',
    props: {
        from: Number,
        to: Number,
        value: Number,
    },
    computed: {
        fill() {
            return 100 / (this.to - this.from)  * this.value
        }
    }
}
</script>

<style lang="scss">
.slider{
    width: 100%;
    position: relative;
    padding: 30px 0;

    &__track {
        width: 100%;
        height: 12px;
        background-color: #F2F3F7;
        border: 1px solid #9A9AAF;
        border-radius: 6px;
        overflow: hidden;
        position: relative;
    }

    &__fill {
        height: 12px;
        background-color: #7E2AEA;
    }

    &__handler {
        width: 32px;
        height: 32px;
        background-color: #FFFFFF;
        border: 6px solid #7E2AEA;
        outline: 3px solid #FFFFFF;
        box-shadow: 0px 4px 4px #C3C8DD;
        border-radius: 50%;
        position: absolute;
        top: 21px;
    }
}
</style>