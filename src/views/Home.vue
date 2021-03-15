<template>
  <div class="home">
    <Navbar />
    <Header :title='title'/>
    <Content @setTitle='setTitle'/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// @ is an alias to /src
import Navbar from '@/components/layout/TheNavbar.vue';
import Header from '@/components/layout/TheHeader.vue';
import Content from '@/components/layout/Content.vue';
export default Vue.extend({
  name: 'Home',
  data() {
    return {
      title: 'Hàng hóa'
    }
  },
  components: {
    Navbar,
    Header,
    Content
  },
  methods: {
    setTitle(newTitle: string){
      this.title = newTitle;
    }
  }
});
</script>
