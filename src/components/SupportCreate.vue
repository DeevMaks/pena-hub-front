<template>
    <div class="support-create">
        <h3>Написать обращение</h3>
        <div class="support-create__body">
            <div class="support-create__form">
                <input type="text" />
                <textarea>

                </textarea>
            </div>
            <div class="btn">Отправить</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SupportCreate'
}
</script>

<style lang="scss">
    .support-create {
        width: 100%;
        min-height: 74px;
        background-color: #FFFFFF;
        box-shadow: 0px 100px 309px rgba(210, 208, 225, 0.24), 0px 41.7776px 129.093px rgba(210, 208, 225, 0.172525), 0px 22.3363px 69.0192px rgba(210, 208, 225, 0.143066), 0px 12.5216px 38.6916px rgba(210, 208, 225, 0.12), 0px 6.6501px 20.5488px rgba(210, 208, 225, 0.0969343), 0px 2.76726px 8.55082px rgba(210, 208, 225, 0.0674749);
        border-radius: 12px;
        padding: 20px;

        &__body {
            display: flex;
            align-items: flex-end;
            flex-grow: 1;
            justify-content: space-between;
        }

        &__form {
            width: 80%;
            display: flex;
            flex-direction: column;
            align-items: stretch;
        }

        .btn {
            margin-left: 20px;
        }

        @media screen AND (max-width: 960px) {
            &__form {
                width: 100%;
                margin-bottom: 40px;
            }
            &__body {
                flex-direction: column;
            }
        }
    }
</style>