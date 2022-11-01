<template>
    <nav class="navigation">
        <div :class="{navigation__container: true, container: !fullWide}">
            <Logo />
            <div class="navigation__links">
                <router-link class="navigation__link" v-for="link, idx in links" :key="idx" :to="link.path">{{ link.title }}</router-link>
            </div>
            <div class="navigation__right">
                <slot name="right"></slot>
            </div>
            <Transition name="toggle">
                <div class="navigation__burger" v-if="isMobileOpen" v-on:click="isMobileOpen = !isMobileOpen"></div>
                <div class="navigation__burger navigation__burger--open" v-else v-on:click="isMobileOpen = !isMobileOpen"></div>
            </Transition>
            
            <Transition name="fade">
                <div class="navigation__mobile" v-if="isMobileOpen">
                    <router-link class="navigation__link" v-for="link, idx in links" :key="idx" :to="link.path">{{ link.title }}</router-link>
                    <slot name="right"></slot>
                </div>
            </Transition>
        </div>
    </nav>
</template>

<script>
import Logo from "./Logo.vue";
    export default {
    name: "Navigation",
    data() {
        return {
            isMobileOpen: false
        }
    },
    props: [
        "links",
        "fullWide",
        "showLogoOnDesktop"
    ],
    components: { Logo }
}
</script>

<style lang="scss">
    .navigation {
        border-bottom: 1px solid #E3E3E3;
        background-color: #ffffff;

        .page--landing & {
            background-color: transparent;
        }

        &__container {
            height: 79px;
            padding: 0 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__links {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__link {
            color: #000000;
            text-decoration: none;
            font-weight: 500;
            margin-right: 30px;

            &:hover {
                color: #7E2AEA;
            }
        }

        .page--landing &__link {
            color: #FFFFFF;
        }

        &__burger {
            width: 24px;
            height: 24px;
            background-image: url('../assets/images/Close.svg');
            background-size: 100%;
            background-repeat: no-repeat;
            background-position: center;
            cursor: pointer;
            display: none;
        }

        .page--landing &__burger {
            background-image: url('../assets/images/CloseLanding.svg');
        }

        &__burger--open {
            background-image: url('../assets/images/Burger.svg');
        }

        .page--landing &__burger--open {
            background-image: url('../assets/images/BurgerLanding.svg');
        }

        &__mobile {
            position: fixed;
            top: 79px;
            left: 0;
            width: 100%;
            height: calc(100vh - 79px);
            background-color: #FFFFFF;
            padding: 40px;
            display: flex;
            flex-direction: column;

            .navigation__link {
                margin-bottom: 40px;
            }
        }

        .page--landing &__mobile {
            background-color: #333647;
        }
    }

    .page--landing .navigation .main-logo {
        display: none;
    }

    @media screen AND (max-width: 760px) {
        .navigation {
            &__right {
                display: none;
            }

            &__links {
                display: none;
            }

            &__burger {
                display: block;
            }
        }

        .page--landing .navigation .main-logo {
            display: block;
        }
    }

    .fade-enter-active, .toggle-enter-active {
    transition: opacity 0.3s ease;
    }

    .fade-enter-from, .toggle-enter-from{
    opacity: 0;
    }

    .toggle-leave-active {
        display: none;
    }
</style>