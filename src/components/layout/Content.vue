<template>
  <div class="content">
    <ProductList v-if="isList" @showDialog="showDialog"/>
    <product-dialog v-if="isDialog" @cancelDialog="cancelDialog"/>
    <!-- Popup -->
    <PopupDel
      @closePopupDel="closePopup"
      @hanldeAlert="HandleAlert"
      v-if="isHideDel"
      :titleDelDialog="title" 
      :productId="selectedId"
      :productName="productNameSelected" 
    />
    <PopupWarn
      @closePopupWarn="closePopup"
      @hanldeAlert="HandleAlert"
      v-if="isHideWarn"
      :titleWarnDialog="title" 
    />
  </div>
</template>
<script>
import ProductList from '@/views/dictionary/product/ProductList.vue'
import ProductDialog from '@/views/dictionary/product/ProductDialog.vue'
import PopupDel from '@/components/base/PopupDel.vue'
import PopupWarn from '@/components/base/PopupWarn.vue'
export default {
  name: "Content",
  components: {
    ProductList,
    ProductDialog,
    PopupDel,
    PopupWarn,
  },
  data() {
    return{
      isList: true,
      isDialog: false,
      isHideDel: false,
      isHideWarn: true,
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
    },
    showPopupDel(){
      this.isHideDel = true;
    },
    closePopup(){
      this.isHideDel = false;
      this.isHideWarn = false;
    }
  }
}
</script>