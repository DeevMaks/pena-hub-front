<template>
    <div class="card">
        <div class="card__bg"><slot name="bg"></slot></div>

        <div class="card__content">
            <div class="card__main">
                <div class="card__main_header">
                    <slot name="header"></slot>
                </div>

                <div class="card__main_content">
                    <slot name="content"></slot>
                </div>

                <div class="card__main_footer">
                    <slot name="footer"></slot>
                </div>
            </div>
            <div class="card__aside">
                <div class="card__aside_header">
                    <slot name="aside-header"></slot>
                </div>

                <div class="card__aside_content">
                    <slot name="aside-content"></slot>
                </div>

                <div class="card__aside_footer">
                    <slot name="aside-footer"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card"
}
</script>


<style lang="scss">
    .card {
        width: 100%;
        background-color: #FFFFFF;
        border-radius: 12px;
        position: relative;
        color: #000000;
        box-shadow: 0px 100px 309px rgba(210, 208, 225, 0.24), 0px 41.7776px 129.093px rgba(210, 208, 225, 0.172525), 0px 22.3363px 69.0192px rgba(210, 208, 225, 0.143066), 0px 12.5216px 38.6916px rgba(210, 208, 225, 0.12), 0px 6.6501px 20.5488px rgba(210, 208, 225, 0.0969343), 0px 2.76726px 8.55082px rgba(210, 208, 225, 0.0674749);
        
        .card__bg img {
            align-self: center;
            margin-bottom: 20px;
        }

        p {
            margin-top: 20px;
            margin-bottom: 40px;
        }

        &__content {
            display: flex;
            justify-content: space-between;
        }

        &__main {
            flex-grow: 80;
            min-width: 65%;
            padding: 20px;
        }

        &__main_header {
            margin-bottom: 15px;
        }

        &__main_content {
            display: flex;
            flex-direction: column;

            p {
                color: #4D4D4D;
            }
        }

        &__aside {
            padding: 20px;
            border-left: 1px solid #9A9AAF;
            flex-grow: 40;
            display: none;
            flex-direction: column;
            justify-content: space-between;
        }

        &__bg {
            position: absolute;
            width: 100%;
            height: 100%;
            display:none;

            & img {
                position: absolute;
                height: 100%;
                right: 0;
            }
        }
    }

    .card--twin {
        .card__aside {
            display: flex;
        }
    }

    .card--primary {
        color: #FFFFFF;
        background-color: #7E2AEA;
    
        p {
            color: #FFFFFF;
        }
    
    }

    .card--landing {
        color: #FFFFFF;
        background-color: #434657;
        box-shadow: 0px 100px 309px rgba(37, 39, 52, 0.24), 0px 41.7776px 129.093px rgba(37, 39, 52, 0.172525), 0px 22.3363px 69.0192px rgba(37, 39, 52, 0.143066), 0px 12.5216px 38.6916px rgba(37, 39, 52, 0.12), 0px 6.6501px 20.5488px rgba(37, 39, 52, 0.0969343), 0px 2.76726px 8.55082px rgba(37, 39, 52, 0.0674749);
    
        p {
            color: #FFFFFF;
        }
    
    }

    .card--promo {
        aspect-ratio: 5 / 3;
        color: #FFFFFF;
        background-color: #252734;
        box-shadow: 0px 100px 309px rgba(37, 39, 52, 0.24), 0px 41.7776px 129.093px rgba(37, 39, 52, 0.172525), 0px 22.3363px 69.0192px rgba(37, 39, 52, 0.143066), 0px 12.5216px 38.6916px rgba(37, 39, 52, 0.12), 0px 6.6501px 20.5488px rgba(37, 39, 52, 0.0969343), 0px 2.76726px 8.55082px rgba(37, 39, 52, 0.0674749);
    
        &__bg {
            display: block;
        }
    }

    .card--hovered:hover {
        background-color: #7E2AEA;

        a {
            color: #FFFFFF;
        }
    }

    @media screen AND (max-width: 960px) {
        .card__content {
            flex-direction: column;
        }

        .card__aside {
            border-top: 1px solid #9A9AAF;
            border-left: none;
        }
    }
</style>