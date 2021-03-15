<template>
    <div class="dialog">
        <!-- Header -->
        <div class="header">
            <button 
            id="btnSave" 
            title="Lưu dữ liệu"
            class="m-btn m-btn-default"
            >
                <div class="btn-toolbar-icon icon-save"></div>
                <span 
                class="btn-text" 
                v-on:click="btnSaveOnClick"
                >
                Lưu
                </span>
            </button>
            <button 
                id="btnCancel" 
                title="Hủy bỏ"
                class="m-btn m-btn-default m-btn-cancel" 
                v-on:click="btnCancelOnClick"
            >
                <div class="btn-toolbar-icon icon-cancel"></div>
                Hủy bỏ
            </button>
        </div>
        <!-- End Header -->
        <!-- Body -->
        <div class="body">
            <div class="basic-ifno">
            </div>
            <div class="attribute-info">
            </div>
            <div class="additional-info">
            </div>
        </div>
        <!-- End Body -->
        <!-- Footer -->
        <div class="footer">
            <button 
            id="btnSave" 
            title="Lưu dữ liệu"
            class="m-btn m-btn-default"
            >
                <div class="btn-toolbar-icon icon-save"></div>
                <span 
                class="btn-text" 
                v-on:click="btnSaveOnClick"
                >
                Lưu
                </span>
            </button>
            <button 
                id="btnCancel" 
                title="Hủy bỏ"
                class="m-btn m-btn-default m-btn-cancel" 
                v-on:click="btnCancelOnClick"
            >
                <div class="btn-toolbar-icon icon-cancel"></div>
                Hủy bỏ
            </button>
        </div>
        <!-- End Footer -->
    </div>
</template>
<script>
import '@/styles/pages/dialogs/ProductDialog.scss'
export default {
    name: 'ProductDialog',
    data() {
        return {
            
        }
    },
    methods: {
        btnCancelOnClick(){
            this.$emit('cancelDialog');
        }
    }
}
</script>
<style scoped>

</style>