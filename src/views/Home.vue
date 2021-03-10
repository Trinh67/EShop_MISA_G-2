<template>
  <div class="home">
    <Navbar />
    <Header title="Hàng hóa"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// @ is an alias to /src
import Navbar from '@/components/layout/Navbar.vue';
import Header from '@/components/layout/Header.vue';
export default Vue.extend({
  name: 'Home',
  components: {
    Navbar,
    Header,
  }
});
</script>
