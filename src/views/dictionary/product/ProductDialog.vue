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
            <div class="basic-info">
                <div class="info-title">Thông tin cơ bản</div>
                <div class="info-body">
                    <div class="row">
                        <span class="input-title">Trạng thái kinh doanh</span>
                        <input type="radio" class="radio-button" id="radio1" name="" value="1">
                        <label for="">Đang kinh doanh</label>
                        <input type="radio" class="radio-button" id="radio2" name="" value="0">
                        <label for="">Ngừng kinh doanh</label>
                    </div>
                    <div class="row">
                        <span class="input-title">Tên hàng hóa <span class="label-required">*</span></span>
                        <input type="text" class="input-dialog" ref="productName"/>
                    </div>
                    <div class="row">
                        <span class="input-title">Nhóm hàng hóa</span>
                        <select class="input-dialog">
                            <option>Giày</option>
                            <option>Áo</option>
                            <option>Mũ</option>
                        </select>
                        <input class="disable-input" disabled placeholder="+"/>
                    </div>
                    <div class="row">
                        <span class="input-title">Mã SKU</span>
                        <input type="text" class="input-dialog"/>
                    </div>
                    <div class="row">
                        <span class="input-title row">Giá mua<div class="items-dialog icons-support"></div></span>
                        <input type="number" class="input-dialog"/>
                    </div>
                    <div class="row">
                        <span class="input-title">Giá bán</span>
                        <input type="number" class="input-dialog"/>
                    </div>
                    <div class="row">
                        <span class="input-title">Đơn vị tính</span>
                        <select class="input-dialog">
                            <option>Chiếc</option>
                            <option>Đôi</option>
                            <option>Chục</option>
                        </select>
                        <input class="disable-input" disabled placeholder="+"/>
                    </div>
                    <div class="row">
                        <input type="checkbox" class=""/>
                        <span id="isShow-text">Hiển thị trên màn hình bán hàng</span>
                        <div class="items-dialog icons-support"></div>
                    </div>
                </div>
            </div>
            <div class="attribute-info">
                <div class="info-title">Thông tin thuộc tính</div>
                <div class="row">
                    <span class="input-title">Thuộc tính</span>
                    <input disabled placeholder="Màu sắc" class="disable-input"/>
                    <input type="text" class="input-dialog"/>
                </div>
                <div class="row">
                    <span class="input-title">Chi tiết thuộc tính</span>
                    <div class="grid">
                        <table>
                            <caption>Bảng chi tiết thuộc tính</caption>
                            <thead>
                            <tr class="el-table__row">
                                <th
                                id="productName"
                                colspan="1"
                                rowspan="1"
                                >
                                    <div class="cell">Tên hàng hóa<br/></div>
                                </th>
                                <th
                                id="SKUCode"
                                colspan="1"
                                rowspan="1"
                                >
                                    <div class="cell">Mã SKU<br/></div>
                                </th>
                                <th
                                id="barcode"
                                colspan="1"
                                rowspan="1"
                                >
                                    <div class="cell">Mã vạch<br/></div>
                                </th>
                                <th
                                id="buyPrice"
                                colspan="1"
                                rowspan="1"
                                >
                                    <div class="cell">Giá mua<br/></div>
                                </th>
                                <th
                                id="salePrice"
                                colspan="1"
                                rowspan="1"
                                >
                                    <div class="cell">Giá bán<br/></div>
                                </th>
                                <th
                                id="delete"
                                colspan="1"
                                rowspan="1"
                                >
                                    <div class="cell"></div>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Quần bò</td>
                                    <td>QB-01</td>
                                    <td>1546848</td>
                                    <td class="right">112000</td>
                                    <td class="right">50000</td>
                                    <td><div class="btn-toolbar-icon icon-delete-attr"></div></td>
                                </tr>
                                <tr>
                                    <td>Quần bò</td>
                                    <td>QB-01</td>
                                    <td>1546848</td>
                                    <td class="right">112000</td>
                                    <td class="right">50000</td>
                                    <td><div class="btn-toolbar-icon icon-delete-attr"></div></td>
                                </tr>
                                <tr>
                                    <td>Quần bò</td>
                                    <td>QB-01</td>
                                    <td>1546848</td>
                                    <td class="right">112000</td>
                                    <td class="right">50000</td>
                                    <td><div class="btn-toolbar-icon icon-delete-attr"></div></td>
                                </tr>
                                <tr>
                                    <td>Quần bò</td>
                                    <td>QB-01</td>
                                    <td>1546848</td>
                                    <td class="right">112000</td>
                                    <td class="right">50000</td>
                                    <td><div class="btn-toolbar-icon icon-delete-attr"></div></td>
                                </tr>
                                <tr>
                                    <td>Quần bò</td>
                                    <td>QB-01</td>
                                    <td>1546848</td>
                                    <td class="right">112000</td>
                                    <td class="right">50000</td>
                                    <td><div class="btn-toolbar-icon icon-delete-attr"></div></td>
                                </tr>
                                <tr>
                                    <td>Quần bò</td>
                                    <td>QB-01</td>
                                    <td>1546848</td>
                                    <td class="right">112000</td>
                                    <td class="right">50000</td>
                                    <td><div class="btn-toolbar-icon icon-delete-attr"></div></td>
                                </tr>
                                <tr>
                                    <td>Quần bò</td>
                                    <td>QB-01</td>
                                    <td>1546848</td>
                                    <td class="right">112000</td>
                                    <td class="right">50000</td>
                                    <td><div class="btn-toolbar-icon icon-delete-attr"></div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="additional-info">
                <div class="info-title">Thông tin bổ sung</div>

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
    },
}
</script>
<style scoped>
table{
  border-spacing: 0;
  min-width: 100%
}
table th{
  padding: 0px!important;
}
table caption{
  display: none;
}
#SKUCode{
  width: 12%;
}
#productName{
  width: 45%;
}
#barcode{
  width: 12%;
}
#salePrice{
  width: 12%;
}
#buyPrice{
  width: 9%;
}
#delete{
  width: 4%;
}
</style>