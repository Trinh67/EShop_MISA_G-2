<template>
  <div class="content">
    <ProductList />
  </div>
</template>
<script>
import ProductList from '@/views/dictionary/product/ProductList.vue'
export default {
  name: "Content",
  components: {
    ProductList,
  }
}
</script>