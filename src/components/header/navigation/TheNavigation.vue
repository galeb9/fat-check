<template>
  <div class="navigation__container">
    <!-- mobile top of nav -->
    <div class="display-on-mobile nav-top--mobile">
        <div class="logo" @click="$router.push('/')" >Logo</div>
        <div class="hamburger__container" @click="decideOpenClose">
            <font-awesome-icon v-if="!hamburgerActive" class="hamburger__icon" :icon="['fa', 'bars']"/>
            <font-awesome-icon v-else class="hamburger__icon" :icon="['fa', 'xmark']"/>
        </div>
    </div>

    <nav class="navigation" v-if="hamburgerActive">
    <!-- nav1 -->
        <div class="logo display-on-desktop" @click="$router.push('/')" >Logo</div>

        <div class="nav1">
            <div v-for="(link, index) in navLinks1" :key="index" class="navigation__link">
                <router-link :to="link.path" >{{ link.text }}</router-link>
            </div>
        </div>
    </nav>


  </div>
</template>

<script>
export default {
    name: "TheNavigation",
    data () {
        return {
            navLinks1: [
                { text: "item", path: "" },
                { text: "item", path: "" },
                { text: "item", path: "" },
                { text: "item", path: "" },
                { text: "item", path: "" },
            ],
            navLinks2: [
                { text: "Kontakt", path: "" },
            ],
            hamburgerActive: true
        }
    },
    computed: {
        decideOpenClose(){
            return !this.hamburgerActive ? this.openMenu : this.closeMenu
        }
    },
    methods: {
        openMenu () {
            // make it only work if on mobile phone
            this.hamburgerActive = true;
            // make it so it make the body max 100vh
            document.getElementsByTagName("body")[0].style.maxHeight = "0vh" // not working
        }, 
        closeMenu () {
            this.hamburgerActive = false
        }
    }
}
</script>

<style lang="scss">
    .navigation__container {
        padding: 20px 0;
        .navigation {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .nav1, 
            .nav2 {
                display: flex;
                align-items: center;
                gap: 30px;
                flex: 1;
                .navigation__link {
                    width: max-content;
                }
            }
            .nav1 {
                justify-content: flex-end;
            }
        }
        .logo {
            cursor: pointer;
        }
        @media only screen and (max-width: 768px) {
            .nav-top--mobile {
                display: flex !important;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 30px;
                width: 100%;
                .hamburger__container {
                    padding: 5px 10px;
                }
            }
            .navigation {
                height: calc(100vh - 100px);
                flex-direction: column;
                align-items: flex-start;
                .nav1, 
                .nav2 {
                    margin-left: 5px;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 15px;
                    flex: 1;
                    .navigation__link {
                        width: 100%;
                    }
                }
                .nav1 {
                    margin-bottom: 15px;
                }
                .nav2 {
                    justify-content: flex-end;
                }
            }
            .logo {
                padding: 0;
            }
        }
    }
</style>