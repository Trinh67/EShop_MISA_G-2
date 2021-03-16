<template>
  <div>
    <!-- Dialog -->
    <div
      class="m-dialog dialog-detail"
      title="Popup"
    >
      <div class="dialog-modal"></div>
      <!-- Dialog Content -->
      <div class="dialog-content">
      <!-- Dialog Header -->
        <div class="dialog-header">
          <div class="dialog-header-title">MISA eShop</div>
          <div class="dialog-header-close">
            <div 
              v-on:click="btnConfirmOnClick" class="btn-toolbar-icon icon-cancel">
            </div>
          </div>
        </div>
      <!-- Dialog Body -->
        <div class="dialog-body">
            <div class="icon-warn"></div>
            <div id="title-warn">
                Bạn gặp phải lỗi?
            </div>
        </div>
      <!-- Dialog Footer -->
        <div class="dialog-footer">
          <button 
            id="btnConfirm" 
            class="m-btn m-btn-default" 
            v-on:click="btnConfirmOnClick"
          >
            <div class="btn-toolbar-icon icon-tick"></div>
            Đồng ý
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import * as axios from "axios";
export default {
  name: "PopupWarn",
  data() {
    return {
    }
  },
  methods: {
    /**
     * Đóng dialog
     * Created By: TXTrinh (16/03/2021)
     */
    btnConfirmOnClick() {
      this.$emit('closePopupWarn', true);
    },
  }
};
</script>
<style scoped>
.m-dialog {
  z-index: 3 !important;
}
.dialog-content{
  z-index: 4;
}
.dialog-header {
  position: relative;
  height: 45px;
  line-height: 60px;
  padding-bottom: 8px;
  padding-left: 16px;
  border-radius: 4px;
  display: flex;
  font-size: 20px;
  font-weight: bold;
  background-color: #e9ebee;
}
.dialog-header-title{
  padding-left: 8px;
}
.dialog-header-close {
  position: absolute;
  right: 16px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  color: #a5a5a5;
  cursor: pointer;
  top: 16px;
  align-items: center;
  border: none;
  font-size: 30px;
  line-height: 24px;
}
.dialog-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 0.4;
  z-index: 3;
}

.dialog-content {
  position: fixed;
  border-radius: 5px;
  width: 500px;
  height: 180px;
  background-color: #fff;
  left: calc(50% - 250px);
  top: calc(50% - 300px);
}
.dialog-body {
  display: flex;
  height: 80px;
  padding: 0px 16px 16px 16px;
  font-size: 15px;
}
div.icon-warn{
  width: 90px;
  height: 80px;
  margin-top: 12px;
  background-image : url('../../assets/icons/icon-popup.png');
  background-position: -87px -4px;
  background-repeat: no-repeat;
  background-size: cover;
}
#title-warn{
  padding: 24px 16px 16px 16px;
}
.dialog-footer {
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #e9ebee;
  border-radius: 0 0 5px 5px;
  align-items: center;
  justify-content: flex-end;
  padding: 12px 24px;
  box-sizing: border-box;
  margin-top: 16px;
}
.dialog-footer button {
  height: 35px;
  width: auto;
  color: #ffffff;
  font-weight: bold;
  border-radius: 4px;
  font-size: 15px;
  padding-left: 0px!important;
  margin-right: 4px;
  margin-left: 4px!important;
  background-color: #2b3173;
}
#btnConfirm:hover{
  background-color: #6b6f9d;
}
.btn-toolbar-icon {
  width: 12px;
  height: 12px;
}
#btnConfirm div{
  margin-left: 8px!important;
  padding-left: 4px!important;
}
</style>