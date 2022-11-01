<template>
    <div class="page page--login">
        <div class="wrapper">
            <Logo />
            <h2>Вход в личный кабинет</h2>

            <div class="form">
                <h3>Телефон или E-mail</h3>
                <input type="text" />

                <h3>Пароль</h3>
                <input type="text" />

                <div class="btn">Войти</div>
            </div>
            
            <RouterLink class="forget" to="#">Забыли пароль?</RouterLink>

            <h6>Еще не присоединились</h6>
            <RouterLink to="#">Регистрация</RouterLink>
        </div>
    </div>
</template>

<script>
    import Logo from "../components/Logo.vue";

    export default {
        name: "LoginPage",
        components: { Logo }
    }
</script>

<style lang="scss">
    .page.page--login{
        display: flex;
        justify-content: center;
        align-items: center;

        .forget {
            color: #000000;
            text-decoration: underline;
            margin-top: 15px;
        }

        .wrapper{
            width: 600px;
            min-height: 600px;
            background: #FFFFFF;
            box-shadow: 0px 100px 309px rgba(210, 208, 225, 0.24), 0px 41.7776px 129.093px rgba(210, 208, 225, 0.172525), 0px 22.3363px 69.0192px rgba(210, 208, 225, 0.143066), 0px 12.5216px 38.6916px rgba(210, 208, 225, 0.12), 0px 6.6501px 20.5488px rgba(210, 208, 225, 0.0969343), 0px 2.76726px 8.55082px rgba(210, 208, 225, 0.0674749);
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            padding: 50px;
            padding-bottom: 40px;
            align-items: center;
        }

        .form {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 100%;

            input {
                width: 100%;
                margin-top: 10px;
            }
        }

        h2 {
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;

            /* identical to box height */
            text-align: center;

            color: #4D4D4D;
            margin-top: 20px;
        }

        h6 {
            margin-top: 30px;
            color: #7E2AEA;
            margin-bottom: 10px;
            font-weight: 400;
            font-size: 18px;
        }

        .btn {
            width: 100%;
        }
    }
</style>