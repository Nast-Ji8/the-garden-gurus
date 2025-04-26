<template>
  <div class="wrapper">
    <Header />
    <main>
      <bg-slider />
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import BgSlider from '@/components/BgSlider.vue';

export default {
  name: 'App',
  components: {
    Header,
    BgSlider,
  }
}
</script>

<style>

</style>