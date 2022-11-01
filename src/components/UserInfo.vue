<template>
    <div class="user-info">
        <div class="user-info__wallet">
            <div class="user-info__wallet-icon icon">
                <img src="@/assets/images/wallet.svg" />
            </div>
            <div class="user-info__wallet-data">
                <div class="user-info__wallet-title">
                    Мой баланс
                </div>
                <div class="user-info__wallet-value">
                    00.00 руб.
                </div>
            </div>
        </div>
        <div class="user-info__user-icon avatar">AD</div>
        <div class="user-info__logout icon">
            <img src="@/assets/images/logout.svg" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserInfo'
}
</script>

<style lang="scss">
    .user-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        

        &__wallet {
            display: flex;
            justify-content: start;
            align-items: center;
            margin-right:16px;
            
            &-info {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: start;
            }

            &-title {
                font-size: 12px;
            }

            &-value {
                color: #7E2AEA;
                font-weight: 500;
                font-size: 16px;
            }
        }
    }
</style>