<template>
    <div 
        class="base-container" 
        :class="{ 'base-container__horizontal': horizontal, 'base-container__align-center': alignCenter }"
        :style="{ margin: marginY + 'px 0', 'min-height': minHeight + 'vh'}"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "BaseContainer",
    props: {
        marginY: { type: Number, default: 0},
        minHeight: { type: Number, default: 90 },
        horizontal: { type: Boolean, default: false },
        alignCenter: {type: Boolean, default: false },
        justifyCenter: {type: Boolean, default: false },
    },
}
</script>

<style lang="scss">
    .base-container {
    }
    .base-container__horizontal {
        display: flex;
    }
    .base-container__align-center {
        align-items: center;
    }
    @media only screen and (max-width: 768px) {
        .base-container {
            margin: 0 !important;
            min-height: 100vh !important;
        }
        .base-container__horizontal {
            display: flex;
            flex-direction: column;
            gap: 30px
        }    
    }
        
</style>