<template>
    <div :class="[ aligment, kind ]">
        <div :class="['base-icon__icon', type]" @click="goTo(link)" >
            <font-awesome-icon class="fa-base-icon" :icon="getIcon()"/>
        </div>
    </div>

</template>

<script>
export default {
    name: "BaseIcon",
    props: {
        link: { type: String, default: "" },
        type: { type: String, default: "" },
        aligment: { type: String, default: "top-left" },
        icon: { type: String, default: "arrow-left" },
        kind: { type: String, default: "base-icon" },
    },
    methods: {
        goTo(link) { // maybe will break for go backs that go home => solution: give the link /home
            if(link){
                this.$router.push("/" + link)
            }
        },
        getIcon(){
            const options = {
                arrowLeft: ['fa', 'arrow-left'],
                trash: ['fa', 'trash-can'],
                settings: ['fa', 'gear'],
                exit: ['fa', 'right-from-bracket'],
                loupe: ['fa', 'magnifying-glass'],
                barcode: ['fa', 'barcode'],
                cancel: ['fa', 'xmark']
            };
            return options[this.icon]
        }
    }
}
</script>

<style lang="scss">

    .base-icon{
        display: flex;
        align-items: center;
        gap: 1.2rem;
        cursor: pointer;
        .base-icon__icon{
            width: 50px;
            height: 50px;
            border-radius: 3px;
            color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.42);
            transition: all .1s ease-in;
            .fa-base-icon {
                color: white;
            }
            &:active{
                transform: translateY(3px);
                box-shadow:  0 0 0  rgba(0, 0, 0, 0.42);
            }
        }
        //types
        .dark{
            background: black;
            color: white;
        }
        .alert{
            // background: $purple;
            color:white;
        }
    }
    //aligment
    .top-left{
        top: 15px;
        left: 1.4rem;
    }
    .top-right{
        top: 15px;
        right: 1.4rem;
    }
    .none {
        top: 0;
        left: 0; 
    }
    // what kind is it?
    .in-btn {
        position: relative;
    }
</style>