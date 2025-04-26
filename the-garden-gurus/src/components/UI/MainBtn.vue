<script>
export default {
    name: 'Main Btn',
    props: {
        theme: {
            type: String,
            default: 'green'
        }
    }
}
</script>

<template>
    <button
        class="btn"
        :class="{
            'btn-green': theme == 'green',
        }"
    >
        <slot />
    </button>
</template>

<style>

</style>