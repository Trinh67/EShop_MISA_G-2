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
                v-on:click="saveProduct"
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
                        <input type="radio" class="radio-button" v-model="Product.Status" id="radio1" name="status" value="1">
                        <label for="">Đang kinh doanh</label>
                        <input type="radio" class="radio-button" v-model="Product.Status" id="radio2" name="status" value="0">
                        <label for="">Ngừng kinh doanh</label>
                    </div>
                    <div class="row">
                        <span class="input-title">Tên hàng hóa <span class="label-required">*</span></span>
                        <input 
                            type="text" 
                            class="input-dialog" 
                            ref="productName" 
                            v-model="Product.ProductName"
                            :class="{requireErr: !isHideErrorName}"
                            @blur="validate('productName')"
                        />
                        <small 
                            id="error-name" class="error-msg"
                            :class="{isHide:isHideErrorName}"
                        >{{ErrorName}}</small>
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
                        <span class="input-title" ref="SKUCode">Mã SKU</span>
                        <input type="text" class="input-dialog"/>
                    </div>
                    <div class="row">
                        <span class="input-title row">Giá mua<div class="items-dialog icons-support"></div></span>
                        <input 
                            type="text" 
                            class="input-dialog price"
                            v-model="Product.BuyPrice"
                            @keyup="formatBuyPrice(Product.BuyPrice)"
                        />
                    </div>
                    <div class="row">
                        <span class="input-title">Giá bán</span>
                        <input 
                            type="text" 
                            class="input-dialog price" 
                            v-model="Product.SalePrice" 
                            @keyup="formatSalePrice(Product.SalePrice)"
                        />
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
                        <input type="checkbox" v-model="Product.IsShowInScreen" class=""/>
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
                    <input-tag v-model="tags"></input-tag>
                </div>
                <div class="row">
                    <span class="input-title">Chi tiết thuộc tính</span>
                    <div class="grid">
                        <table>
                            <caption>Bảng chi tiết thuộc tính</caption>
                            <thead>
                            <tr class="table__row">
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
                                <tr class="table__row"
                                    v-for="Product in ProductDetails"
                                    :key="Product.ProductId"
                                    :id="Product.ProductId"
                                >
                                    <td>{{ Product.ProductName }}</td>
                                    <td>{{ Product.SKUCode }}</td>
                                    <td>{{ Product.BarCode }}</td>
                                    <td class="right">{{ Product.SalePrice | formatNumber}}</td>
                                    <td class="right">{{ Product.BuyPrice | formatNumber}}</td>
                                    <td><div class="btn-toolbar-icon icon-delete-attr"></div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="additional-info">
                <div class="info-title">Thông tin bổ sung</div>
                <div class="row">
                    <span class="input-title">Mô tả</span>
                    <textarea id="description"/>
                </div>
                <div class="row">
                    <span class="input-title">Ảnh hàng hóa</span>
                    <div id="product-image">
                        <div id="show-image">
                            <div id="symbol">
                                <div class="btn-toolbar-icon icon-edit-brown"></div>
                                Biểu tượng
                            </div>
                            <div id="image"></div>
                        </div>
                        <input type="file" name="file" id="file" class="upload-image"/>
                        <label for="file">...</label>
                    </div>
                    <div id="text-note">
                        <em>- Lựa chọn biểu tượng để thay thế nếu không có ảnh</em><br/><br/>
                        <em>- Định dạng ảnh (.jpg, .jpeg, .png, .gif) và dung lượng nhỏ hơn 5MB</em>
                    </div>
                </div>
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
                v-on:click="saveProduct"
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
import InputTag from 'vue-input-tag'
export default {
    name: 'ProductDialog',
    components: {
      InputTag
    },
    data() {
        return {
            Product:{
                Status: 1,
                IsShowInScreen: true,
            },
            tags: [],
            ProductDetails: [
                {ProductName: "Test", SKUCode: "T-01", BarCode: "16498456", SalePrice: 100000, BuyPrice: 200000,},
                {ProductName: "Test", SKUCode: "T-01", BarCode: "16498456", SalePrice: 100000, BuyPrice: 200000,},
                {ProductName: "Test", SKUCode: "T-01", BarCode: "16498456", SalePrice: 100000, BuyPrice: 200000,},
                {ProductName: "Test", SKUCode: "T-01", BarCode: "16498456", SalePrice: 100000, BuyPrice: 200000,},
                {ProductName: "Test", SKUCode: "T-01", BarCode: "16498456", SalePrice: 100000, BuyPrice: 200000,},
                {ProductName: "Test", SKUCode: "T-01", BarCode: "16498456", SalePrice: 100000, BuyPrice: 200000,},
                {ProductName: "Test", SKUCode: "T-01", BarCode: "16498456", SalePrice: 100000, BuyPrice: 200000,},
                {ProductName: "Test", SKUCode: "T-01", BarCode: "16498456", SalePrice: 100000, BuyPrice: 200000,},
                {ProductName: "Test", SKUCode: "T-01", BarCode: "16498456", SalePrice: 100000, BuyPrice: 200000,},
                {ProductName: "Test", SKUCode: "T-01", BarCode: "16498456", SalePrice: 100000, BuyPrice: 200000,},
            ],
            ErrorName: "Lỗi",
            isHideErrorName: true,
            Alert: {
                Text: "",
                Success: false,
            },
        }
    },
    methods: {
        btnCancelOnClick(){
            this.$emit('cancelDialog');
        },
        /**
         * Lưu mới cửa hàng
         * Created By: TXTrinh (17/03/2021)
         */
        saveProduct() {
            // validate dữ liệu trước khi cho phép thêm
            if(this.validateData() == false) {
                // validate không hợp lệ.
                this.Alert.Success = false;
                this.Alert.Text = 'Bạn phải điền đầy đủ thông tin đúng định dạng';
                this.$emit("hanldeAlertDialog", this.Alert);
            }
            else{
                alert("Lưu thành công")
            }
        },
        /**
         * Hàm Validate định dạng dữ liệu nhập vào, return: True - hợp lệ; False: không hợp lệ
         * Created by: TXTrinh (17/03/2021)
         *  */ 
        validate(type) {
        const formProductName = /^[A-Za-z0-9]{1,50}$/;
        
        switch (type) {
            case 'productName':  
            // Validate productName:
            { 
                if((this.Product.ProductName == null) || (this.Product.ProductName.trim()=='')) {
                    this.isHideErrorName = false;
                    this.ErrorName = "* Tên hàng hóa không được để trống"
                }
                else if(formProductName.test(this.Product.ProductName.trim())==false){
                    this.isHideErrorName = false;
                    this.ErrorName = "* Tên hàng hóa chỉ chứa kí tự chữ hoặc số"
                }
                else {
                    this.isHideErrorName = true;
                }
            break;
            }
            case 'SKUCode': {
                break;
            }
            default:
            { 
                break;
            }
        }
        },
        /**
         * Kiểm tra toàn bộ dữ liệu
         * Created by: TXTrinh (16/03/2021)
         */
        validateData(){
            this.validate('productName');
            // nếu không có lỗi thì không hiện cảnh báo
            if(this.isHideErrorName)
                return true;
            return false;
        },
        
        formatBuyPrice(val){
            // Bỏ kí tự ,
            console.log(val);
            val = val.toString().replace(/\D/g, "");
            this.Product.BuyPrice = val.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        },
        formatSalePrice(val){
            // Bỏ kí tự ,
            console.log(val);
            val = val.toString().replace(/\D/g, "");
            this.Product.SalePrice = val.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        },
        focusInput: function() {
            this.$refs.productName.focus();
        },
    },
    mounted(){
        this.focusInput();
    },
}
</script>
<style scoped>
.isHide{
    display: none;
}
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
  min-width: 100px;
}
#productName{
  min-width: 400px;
}
#barcode{
  min-width: 100px;
}
#salePrice{
  min-width: 100px;
}
#buyPrice{
  min-width: 80px;
}
#delete{
  min-width: 30px;
}
</style>