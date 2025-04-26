<script>
export default {
    name: 'Thanks Modal',
    emits: ['modalClose']
}
</script>

<template>
    <section class="thanks-modal">
        <div class="thanks-modal__bg" @click="$emit('modalClose')"></div>
        <div class="thanks-modal__content">
            <p>
                <slot />
            </p>
            <main-btn @click="$emit('modalClose')">Close</main-btn>
        </div>
    </section>
</template>

<style>

</style>