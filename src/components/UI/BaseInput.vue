<template>
    <div class="form__group field">
        <input 
            class="form__field"
            :type="type" 
            :value="modelValue"
            @input="updateValue"
            :placeholder="label"
        >
        <label for="name" class="form__label">{{ label }}</label>
    </div>
</template>

<script>
export default {   
    name: "BaseInput",
    props:{
        modelValue: { type: String, default: "" },
        type: { type: String, default: "text" },
        label: { type: String, default: "" }
    }, 
    methods: {
        updateValue(event){
            this.$emit("update:modelValue", event.target.value)
        }
    },

}
</script>

<style lang="scss">

$primary: white;
.form__group {
    position: relative;
    padding: 18px 0 0;
    margin-top: 10px;
    max-width: 200px;
    width: 50%;
    .form__field {
        font-family: inherit;
        width: 100%;
        border: 0;
        border-bottom: 2px solid $primary;
        color: white;
        outline: 0;
        font-size: 1.3rem;
        padding: 5px 0;
        background: transparent;
        transition: border-color 0.2s;

        &::placeholder {
            color: transparent;
        }
        &:placeholder-shown ~ .form__label {
            font-size: 1.3rem;
            cursor: text;
            top: 20px;
        }
        &:focus {
            padding-bottom: 6px;  
            font-weight: 700;
            ~ .form__label {
                position: absolute;
                top: 0;
                display: block;
                transition: 0.2s;
                font-size: 1rem;
                color: $primary;
                font-weight:700;    
            }
        }
        &:required,&:invalid { box-shadow:none; }
    }
    .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: $primary;
    }
}
</style>