<template>
  <div class="content">
    <ProductList 
      v-if="isList" 
      @showDialog="showDialog" 
      @showEditDialog="showEditDialog"
      @showDupbleDialog="showDupbleDialog"
      @showPopupDel="showPopupDel" 
      @showPopupWarn="showPopupWarn" 
      @showLoading="showLoading" 
      @hideLoading="hideLoading"/>
    <ProductDialog 
      v-if="isDialog" 
      :ProductID="productID"
      :isEdit="isEdit"
      @hanldeAlertDialog="handleAlert"
      @cancelDialog="cancelDialog"
      @showPopupWarn="showPopupWarn"
    />
    <!-- Loading -->
    <loading :active.sync="isLoading"  
    :is-full-page="isFullPage"></loading>
    <!-- Popup -->
    <PopupDel
      @closePopupDel="closePopup"
      @hanldeAlertDel="handleAlert"
      v-if="isDel"
      :PopupDelInfo='PopupDelInfo'
    />
    <PopupWarn
      @closePopupWarn="closePopup"
      v-if="isWarn"
      :PopupWarnInfo='PopupWarnInfo'
    />
    <ToggleMess 
      v-if='isToggleMess'
      @reloadData="reload"
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
      productID: null,
      isEdit: false,
      Alert: {Text: "MISA eShop", Success: true},
      PopupDelInfo: {
        listProId: [],
        contentPopup: ''
      },
      PopupWarnInfo: '',
    };
  },
  methods:{
    showLoading(){
      this.isLoading = true;
    },
    hideLoading(){
      this.isLoading = false;
    },
    showDialog(){
      this.isList = false;
      this.isDialog = true;
      this.$emit('setTitle', 'Hàng hóa / Thêm mới');
    },
    showEditDialog(id){
      this.isList = false;
      this.isDialog = true;
      this.productID = id;
      this.isEdit = true;
      this.$emit('setTitle', 'Hàng hóa / Cập nhập');
    },
    showDupbleDialog(id){
      this.isList = false;
      this.isDialog = true;
      this.productID = id;
      this.$emit('setTitle', 'Hàng hóa / Nhân bản');
    },
    cancelDialog(){
      this.isList = true;
      this.isDialog = false;
      this.isEdit = false;
      this.productID = null;
      this.$emit('setTitle', 'Hàng hóa');
    },
    showPopupDel(DelInfo){
      this.PopupDelInfo = DelInfo;
      this.isDel = true;
    },
    closePopup(){
      this.isDel = false;
      this.isWarn = false;
    },
    handleAlert(Alert){
      this.isToggleMess = true;
      this.Alert = Alert;
      setTimeout(() => {
        this.isToggleMess = false
      }, 2000)
    },
    reload(){
      return 
    },
    showPopupWarn(WarnInfo){
      this.PopupWarnInfo = WarnInfo;
      this.isWarn = true;
    }
  }
}
</script>