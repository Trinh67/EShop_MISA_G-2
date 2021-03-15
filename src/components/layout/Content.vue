<template>
  <div class="content">
    <ProductList v-if="isList" @showDialog="showDialog"/>
    <product-dialog v-if="isDialog" @cancelDialog="cancelDialog"/>
  </div>
</template>
<script>
import ProductList from '@/views/dictionary/product/ProductList.vue'
import ProductDialog from '@/views/dictionary/product/ProductDialog.vue'
export default {
  name: "Content",
  components: {
    ProductList,
    ProductDialog,
  },
  data() {
    return{
      isList: true,
      isDialog: false,
    };
  },
  methods:{
    showDialog(){
      this.isList = false;
      this.isDialog = true;
      this.$emit('setTitle', 'Hàng hóa / Thêm mới');
    },
    cancelDialog(){
      this.isList = true;
      this.isDialog = false;
      this.$emit('setTitle', 'Hàng hóa');
    }
  }
}
</script>