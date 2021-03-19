<template>
  <div class="content">
    <ProductList v-if="isList" @showDialog="showDialog" @showPopupDel="showPopupDel"/>
    <ProductDialog 
      v-if="isDialog" 
      @hanldeAlert="HandleAlert"
      @cancelDialog="cancelDialog"
    />
    <!-- Loading -->
    <loading :active.sync="isLoading"  
    :is-full-page="isFullPage"></loading>
    <!-- Popup -->
    <PopupDel
      @closePopupDel="closePopup"
      @hanldeAlert="HandleAlert"
      v-if="isDel"
      :productId="selectedId"
      :productName="productNameSelected" 
    />
    <PopupWarn
      @closePopupWarn="closePopup"
      v-if="isWarn"
      :titleWarnDialog="title" 
    />
    <ToggleMess 
      v-if='isToggleMess'
      :Alert='Alert'
    />
  </div>
</template>
<script>
import ProductList from '@/views/dictionary/product/ProductList.vue'
import ProductDialog from '@/views/dictionary/product/ProductDialog.vue'
import PopupDel from '@/components/base/PopupDel.vue'
import PopupWarn from '@/components/base/PopupWarn.vue'
import ToggleMess from '@/components/base/ToggleMess.vue'
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
  name: "Content",
  components: {
    ProductList,
    ProductDialog,
    PopupDel,
    PopupWarn,
    ToggleMess,
    Loading
  },
  data() {
    return{
      isLoading: false,
      isFullPage: false,
      isList: true,
      isDialog: false,
      isDel: false,
      isWarn: false,
      isToggleMess: false,
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
    },
    HandleAlert(Alert){
      this.isToggleMess = true;
      this.Alert = Alert;
    }
  }
}
</script>