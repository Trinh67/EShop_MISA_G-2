<template>
  <div class="content">
    <ProductList v-if="isList" @showDialog="showDialog" @showPopupDel="showPopupDel"/>
    <ProductDialog v-if="isDialog" @cancelDialog="cancelDialog"/>
    <!-- Popup -->
    <PopupDel
      @closePopupDel="closePopup"
      @hanldeAlert="HandleAlert"
      v-if="isDel"
      :titleDelDialog="title" 
      :productId="selectedId"
      :productName="productNameSelected" 
    />
    <PopupWarn
      @closePopupWarn="closePopup"
      @hanldeAlert="HandleAlert"
      v-if="isWarn"
      :titleWarnDialog="title" 
    />
    <ToggleMess :Alert='Alert'/>
  </div>
</template>
<script>
import ProductList from '@/views/dictionary/product/ProductList.vue'
import ProductDialog from '@/views/dictionary/product/ProductDialog.vue'
import PopupDel from '@/components/base/PopupDel.vue'
import PopupWarn from '@/components/base/PopupWarn.vue'
import ToggleMess from '@/components/base/ToggleMess.vue'
export default {
  name: "Content",
  components: {
    ProductList,
    ProductDialog,
    PopupDel,
    PopupWarn,
    ToggleMess,
  },
  data() {
    return{
      isList: true,
      isDialog: false,
      isDel: false,
      isWarn: false,
      Alert: {Text: "MISA eShop", Success: true},
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
      this.isDel = true;
    },
    closePopup(){
      this.isDel = false;
      this.isWarn = false;
    }
  }
}
</script>