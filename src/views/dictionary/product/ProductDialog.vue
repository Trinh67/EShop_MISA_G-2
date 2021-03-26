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
                        <input type="radio" class="radio-button" v-model="Product.status" id="radio1" name="status" value="1">
                        <label for="">Đang kinh doanh</label>
                        <input type="radio" class="radio-button" v-model="Product.status" id="radio2" name="status" value="0">
                        <label for="">Ngừng kinh doanh</label>
                    </div>
                    <div class="row">
                        <span class="input-title">Tên hàng hóa <span class="label-required">*</span></span>
                        <input 
                            type="text" 
                            class="input-dialog" 
                            ref="productName" 
                            v-model="Product.productName"
                            :class="{requireErr: !isHideErrorName}"
                            @change="autoSku()"
                            @blur="validate('productName')"
                        />
                        <small 
                            id="error-name" class="error-msg"
                            :class="{isHide:isHideErrorName}"
                        >{{ErrorName}}</small>
                    </div>
                    <div class="row">
                        <span class="input-title">Nhóm hàng hóa</span>
                        <select class="input-dialog" v-model="Product.productCategoryID">
                            <option value="1">Trang phục</option>
                            <option value="2">Áo</option>
                            <option value="3">Quần</option>
                            <option value="4">Áo phông</option>
                            <option value="5">Áo khoác Nữ</option>
                            <option value="6">Áo khoác Nam</option>
                            <option value="7">Giầy</option>
                            <option value="8">Giầy thể thao</option>
                            <option value="9">Giầy da</option>
                            <option value="10">Mũ</option>
                        </select>
                        <input class="disable-input" disabled placeholder="+"/>
                    </div>
                    <div class="row">
                        <span class="input-title" ref="SKUCode">Mã SKU</span>
                        <input type="text" class="input-dialog" v-model="Product.skuCode"/>
                    </div>
                    <div class="row">
                        <span class="input-title row">Giá mua<div class="items-dialog icons-support"></div></span>
                        <input 
                            type="text" 
                            class="input-dialog price"
                            v-model="Product.buyPrice"
                            @keyup="formatBuyPrice(Product.buyPrice)"
                        />
                    </div>
                    <div class="row">
                        <span class="input-title">Giá bán</span>
                        <input 
                            type="text" 
                            class="input-dialog price" 
                            v-model="Product.salePrice" 
                            @keyup="formatSalePrice(Product.salePrice)"
                        />
                    </div>
                    <div class="row">
                        <span class="input-title">Đơn vị tính</span>
                        <select class="input-dialog" v-model="Product.unitID">
                            <option value="1">Bộ</option>
                            <option value="2">Cái</option>
                            <option value="3">Chiếc</option>
                            <option value="4">Chục</option>
                            <option value="5">Đôi</option>
                            <option value="6">Hộp</option>
                            <option value="7">Mét</option>
                            <option value="8">Tá</option>
                        </select>
                        <input class="disable-input" disabled placeholder="+"/>
                    </div>
                    <div class="row">
                        <input type="checkbox" v-model="Product.showInScreen" class=""/>
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
                    <input-tag 
                        v-model="colors"
                    ></input-tag>
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
                                    :key="Product.productId"
                                    :id="Product.productId"
                                >
                                    <td>{{ Product.productName }}</td>
                                    <td>{{ Product.skuCode }}</td>
                                    <td>{{ Product.barCode }}</td>
                                    <td class="right">{{ Product.salePrice | formatNumber}}</td>
                                    <td class="right">{{ Product.buyPrice | formatNumber}}</td>
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
                    <textarea id="description" v-model="Product.description"/>
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
import productServices from '@/service/productService'
export default {
    name: 'ProductDialog',
    props: ['ProductID', 'isEdit'],
    components: {
      InputTag
    },
    data() {
        return {
            Data:{
                "skuCode": null,
                "productName": null,
                "productCategoryID": 1,
                "productCategoryName": null,
                "unitID": 1,
                "unitName": null,
                "salePrice": 0,
                "buyPrice": 0,
                "showInScreen": 1,
                "status": 1,
                "description": null,
                "image": null,
                "barCode": 999999,
                "color": null,
                "parentID": 0
            },
            Product:{
            },
            colors: [],
            ProductDetails: [
                {productName: "Test", skuCode: "T-01", barCode: "16498456", salePrice: 100000, buyPrice: 200000,},
            ],
            ErrorName: "Lỗi",
            isHideErrorName: true,
            Alert: {
                Text: "",
                Success: false,
            },
            WarnInfo: {
                content: "",
            }
        }
    },
    methods: {
        /**
         * Thoát Dialog
         */
        btnCancelOnClick(){
            try {
                this.$emit('cancelDialog');
            } catch (error) {
                console.log(error);
            }
        },
        /**
         * Lấy thông tin hàng hóa
         */
        async getProductData(){
            this.$emit('showLoading');
            this.Product = await productServices.getProductById(this.ProductID);
            this.formatBuyPrice(this.Product.buyPrice);
            this.formatSalePrice(this.Product.salePrice);
            if(this.isEdit == false) this.autoSku();
            this.$emit('hideLoading');
        },
        /**
         * Lưu mới cửa hàng
         * Created By: TXTrinh (17/03/2021)
         */
        async saveProduct() {
            try {
                
                // validate dữ liệu trước khi cho phép thêm
                if(this.validateData() == false) {
                    // validate không hợp lệ.
                    this.Alert.Success = false;
                    this.Alert.Text = 'Bạn phải điền đầy đủ thông tin đúng định dạng';
                    this.$emit("hanldeAlertDialog", this.Alert);
                }
                else{
                    if(this.Product.showInScreen == false) this.Product.showInScreen = 0;
                    else this.Product.showInScreen = 1;
                    this.Product.buyPrice = this.Product.buyPrice.toString().replace('.', '');
                    this.Product.salePrice = this.Product.salePrice.toString().replace('.', '');
                    let result;
                    if(this.isEdit == false) {
                        result = await productServices.insertProduct(this.Product)
                    }
                    else {
                        result = await productServices.updateProduct(this.Product)
                    }
                    if(result.data == 1){
                        this.Alert.Success = true;
                        this.Alert.Text = result.userMsg;
                        this.$emit("hanldeAlertDialog", this.Alert);
                        this.$emit('cancelDialog');
                    }
                    else{
                        for(let i = 0; i < result.userMsg.length; i++){
                            this.WarnInfo.content += result.userMsg[i] + "\n";
                        }
                        this.$emit('showPopupWarn', this.WarnInfo.content);
                        this.WarnInfo.content = "";
                    }
                }
            } catch (error) {
                console.log(error);
            }
        },
        /**
         * Hàm Validate định dạng dữ liệu nhập vào, return: True - hợp lệ; False: không hợp lệ
         * Created by: TXTrinh (17/03/2021)
         *  */ 
        validate(type) {
        const formProductName = /^[A-Za-z0-9 AÁÀẢÃẠÂẤẦẨẪẬĂẮẰẲẴẶEÉÈẺẼẸÊẾỀỂỄỆIÍÌỈĨỊOÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢUÚÙỦŨỤƯỨỪỬỮỰYÝỲỶỸỴĐaáàảãạâấầẩẫậăắằẳẵặeéèẻẽẹêếềểễệiíìỉĩịoóòỏõọôốồổỗộơớờởỡợuúùủũụưứừửữựyýỳỷỹỵđ]{1,50}$/;
        
        switch (type) {
            case 'productName':  
            // Validate productName:
            { 
                if((this.Product.productName == null) || (this.Product.productName.trim()=='')) {
                    this.isHideErrorName = false;
                    this.ErrorName = "* Tên hàng hóa không được để trống"
                }
                else if(formProductName.test(this.Product.productName.trim())==false){
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
        /**Bỏ dấu  */
        removeVietnameseTones(str) {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        str = str.replace(/Đ/g, "D");
        // Some system encode vietnamese combining accent as individual utf-8 characters
        // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
        str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
        // Remove extra spaces
        // Bỏ các khoảng trắng liền nhau
        str = str.replace(/ + /g, " ");
        str = str.trim();
        return str;
        },
        /**
         * Sinh mã tự động
         */
        async autoSku() {
            try {
                if(this.validateData() == false) return;
                let value = this.Product.productName;
                if (value != "") {
                    value = this.removeVietnameseTones(value);
                    const acronym = value
                    .toUpperCase()
                    .split(/\s/)
                    .reduce((response, word) => (response += word.slice(0, 1)), "");
                    const result = await productServices.genSKUCode(acronym);
                    this.Product.skuCode = result['skuCodeGen'];
                }
            } catch (error) {
                console.log(error);
            }
        },
        
        /**
         * Format giá mua
         */
        formatBuyPrice(val){
            try {
                // Bỏ kí tự ,
                val = val.toString().replace(/\D/g, "");
                this.Product.buyPrice = val.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
            } catch (error) {
                console.log(error);
            }
        },
        /**
         * Format giá bán
         */
        formatSalePrice(val){
            try {
                // Bỏ kí tự ,
                val = val.toString().replace(/\D/g, "");
                this.Product.salePrice = val.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
            } catch (error) {
                console.log(error);
            }
        },
        /**
         * Focus mặc định
         */
        focusInput: function() {
            this.$refs.productName.focus();
        },
        /**
         * Sinh con tự động
         */

    },
    mounted(){
        this.Product = this.Data;
        if(this.ProductID != null) {
            this.getProductData();
        }
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