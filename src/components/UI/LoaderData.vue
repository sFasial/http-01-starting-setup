<template>
    <div @click="CloseDialog"></div>
    <dialog :open="isOpen">
        <slot></slot>
        <menu>
            <slot name="actions"></slot>
        </menu>
    </dialog>
</template>



<script>
export default {
    emits:['close'],
    props : {
        isOpen:{
            required : false,
            default : false,
        }
    },
    data() {
        return {

        }
    },
    methods: {
        CloseDialog(){
            console.log('event emitted');
            this.$emit('close',false);
        }
    }
}
</script>


<style scoped>
dialog {
    position: fixed;
    top: 20vh;
    left: 30%;
    width: 40%;
    background-color: white;
    box-shadow: 0 2px 8px rgba(0,0,0,0.26);
    padding: 1rem;
}
</style>