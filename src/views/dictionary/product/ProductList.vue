<template>
  <div class="content-body">
    <!-- Content Header -->
    <div class="header-content">
      <div class="toolbar">
        <button
          title="Thêm mới"
          class="m-btn m-btn-default" 
          @click="btnAddOnClick"
        >
          <div class="btn-toolbar-icon icon-add"></div> Thêm mới
          <div class="account-option icon-option-default-16 mg-left-10"></div>
        </button>
        <button 
          title="Nhân bản"
          class="m-btn m-btn-default disable-button"
          @click="btnEditOnClick"
        >
          <div class="btn-toolbar-icon icon-multiply"></div> Nhân bản
        </button>
        <button
          title="Sửa" 
          class="m-btn m-btn-default"
          @click="btnEditOnClick"
        >
          <div class="btn-toolbar-icon icon-edit"></div> Sửa 
        </button>
        <button
          title="Xóa" 
          class="m-btn m-btn-default" 
          @click="btnDeleteOnClick">
          <div class="btn-toolbar-icon icon-delete"></div> Xóa 
        </button>
        <button 
          title="Nạp"
          class="m-btn m-btn-default"
          @click="reloadData"
        >
          <div class="btn-toolbar-icon icon-load"></div> Nạp 
        </button>
      </div>
    </div> 
    <!-- End Content Header -->
    <!-- Content Body -->
    <div
      class="grid grid-product"
    >
      <table
        id="tbListData"
      >
        <caption>Bảng hàng hóa</caption>
        <thead>
          <tr class="table__row">
            <th 
              id="checkboxInput"
              colspan="1"
              rowspan="1"
            >
                <input type="checkbox" id="checkAll" @change="selectAll()">
            </th>
            <th
              id="SKUCode"
              colspan="1"
              rowspan="1"
            >
              <div class="cell">Mã SKU<br/></div>
              <div class="group-input">
                <input class="select-filter-button" placeholder="*" disabled/>
                <input
                  id="txtSearchSKUCode"
                  class="input-search"
                  type="text"
                  v-model="Filter.txtSKUCode"
                  @change="FilterProduct()"
                />
              </div>
              
            </th>
            <th
              id="productName"
              colspan="1"
              rowspan="1"
            >
              <div class="cell">Tên hàng hóa<br/></div>
              <div class="group-input">
                <input class="select-filter-button" placeholder="*" disabled/>
                <input
                  id="txtSearchProductName"
                  class="input-search"
                  type="text"
                  v-model="Filter.txtProductName"
                  @change="FilterProduct()"
                />
              </div>
            </th>
            <th
              id="productCategoryID"
              colspan="1"
              rowspan="1"
            >
              <div class="cell">Nhóm hàng hóa<br/></div>
              <div class="group-input">
                <input class="select-filter-button" placeholder="*" disabled/>
                <input
                  id="txtSearchProductCategory"
                  class="input-search"
                  type="text"
                  v-model="Filter.txtProductCategory"
                  @change="FilterProduct()"
                />
              </div>
            </th>
            <th
              id="unitID"
              colspan="1"
              rowspan="1"
            >
              <div class="cell">Đơn vị tính<br/></div>
              <div class="group-input">
                <input class="select-filter-button" placeholder="*" disabled/>
                <input
                  id="txtSearchUnit"
                  class="input-search"
                  type="text"
                  v-model="Filter.txtUnit"
                  @change="FilterProduct()"
                />
              </div>
            </th>
            <th
              id="salePrice"
              colspan="1"
              rowspan="1"
            >
              <div class="cell">Giá bán TB<br/></div>
              <div class="group-input">
                <input class="select-filter-button" placeholder="≤" disabled/>
                <input
                  id="txtSearchSalePrice"
                  class="input-search"
                  type="text"
                  v-model="Filter.txtSalePrice"
                  @change="FilterProduct()"
                />
              </div>
            </th>
            <th
              id="isShowInScreen"
              colspan="1"
              rowspan="1"
              class="el-table_30_column_116 is-leaf"
            >
              <div class="cell">Hiển thị trên MH bán hàng<br/></div>
              <div class="group-input">
                <select
                  id="txtSearchIsShow"
                  class="m-control"
                  v-model="Filter.txtIsShow"
                  @change="FilterProduct()"
                >
                  <option value="">
                    Tất cả
                  </option>
                  <option class="" value="1">Có</option>
                  <option class="" value="0">Không</option>
                </select>
              </div>
            </th>
            <th
              id="status"
              colspan="1"
              rowspan="1"
            >
              <div class="cell">Trạng thái<br/></div>
              <div class="group-input">
                <select
                  id="txtSearchStatus"
                  class="m-control"
                  v-model="Filter.txtStatus"
                  @change="FilterProduct()"
                >
                  <option value="">
                    Tất cả trạng thái
                  </option>
                  <option class="" value="1">Đang kinh doanh</option>
                  <option class="" value="0">Ngừng kinh doanh</option>
                </select>
              </div>
            </th>
          </tr>
        </thead>
        <tbody id="tbody">
          <tr
            class="table__row"
            v-for="Product in Products"
            :key="Product.productID"
            :id="Product.productID"
            @click="rowOnClick(Product.productID)"
            @dblclick="rowOnDBClick(Product.productID)"
          >
            <td><input type="checkbox" @change="CheckListDelete(Product.productID, Product.isChecked)" v-model="Product.isChecked" name="checkboxInput"></td>
            <td>
              <div>{{ Product.skuCode }}</div>
            </td>
            <td>
              <div>{{ Product.productName }}</div>
            </td>
            <td>
              <div>{{ Product.productCategoryName }}</div>
            </td>
            <td>
              <div>{{ Product.unitName }}</div>
            </td>
            <td>
              <div class="right">{{ Product.salePrice | formatNumber}}</div>
            </td><td>
              <div>{{ isShow[Product.showInScreen] }}</div>
            </td>
            <td>
              <div>{{statusList[Product.status]}}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- End Content Body -->
    <!-- Content footer -->
    <Paging 
      :PagingValue="PagingValue"
      @reloadProList="reloadData"
    />
    <!-- End Content Footer -->
  </div>
</template>

<script src="https://unpkg.com/vue"></script>
<script>
import Vue from 'vue';
import '@/styles/pages/productList.scss';
import Paging from '@/components/base/Paging.vue'
import productServices from '../../../service/productService'
import { EventBus } from '@/even-bus/EventBus.js'
export default {
  name: "ProductList",
  components: {
    Paging,
  },
  data() {
      return {
          Products:[],
          /**
           * Dữ liệu phân trang
           */
          PagingValue: {
            productDataLength: 100,
            startPoint: 0,
            totalPage: 7,
            startListProduct: 1,
            finishListProduct: 15,
            currentPage: 1,
            number: 15
          },
          // Danh sách hàng hóa để xóa
          selectedId: null,
          allSelected: false,
          DelInfo:{
            content: '',
            ListProDelete: [],
          },
          WarnInfo: '',
          /**
           * Dữ liệu mẫu
          */
          isShow: ["Không", "Có"],
          statusList : ["Ngừng kinh doanh", "Đang kinh doanh"],
          /**
           * Dữ liệu lọc theo điều kiện
           */
          Filter: {
            txtSKUCode: null,
            txtProductName: null,
            txtProductCategory: null,
            txtUnit: null,
            txtSalePrice: null,
            txtIsShow: "",
            txtStatus: "",
            startPoint: 0,
            number: 15
          }
      }
  },
  methods: {
    /**
     * Mở dialog thêm mới
     * Created By: TXTrinh (16/03/2021)
     */
    btnAddOnClick(){
      this.$emit('showDialog');
    },

    btnEditOnClick() {

    },
    /**
     * Load lại dữ liệu
     */
    reloadData(){
      this.Filter.number = this.PagingValue.number;
      this.Filter.startPoint = this.PagingValue.startPoint*this.Filter.number;
      this.FilterProduct();
    },
    /**
     * Lọc dữ liệu theo các đầu vào
     */
    async FilterProduct(){
      this.CountProduct();
      this.$emit('showLoading');
      this.Products = await productServices.getProduct(this.Filter);
      this.$emit('hideLoading');
    },
    /**
     * Lấy số lượng hàng hóa
     */
    async CountProduct(){
      this.$emit('showLoading');
      this.PagingValue.productDataLength = await productServices.quantityProduct(this.Filter);
      if(this.PagingValue.finishListProduct > this.PagingValue.productDataLength) this.PagingValue.finishListProduct = this.PagingValue.productDataLength;
      this.PagingValue.totalPage = Math.ceil(this.PagingValue.productDataLength/this.PagingValue.number);
      this.$emit('hideLoading');
    },
    /**
     * Xóa hàng hóa
     */
    btnDeleteOnClick(){
      if(this.DelInfo.ListProDelete.length == 0) {
        this.WarnInfo = "Bạn chưa chọn hàng hóa nào!";
        this.$emit('showPopupWarn', this.WarnInfo);
        return
      }
      else if(this.DelInfo.ListProDelete.length == 1){
        const result = this.Products.filter(product => product.productID == this.DelInfo.ListProDelete);
        this.DelInfo.content = result[0].productName;
      }
      else{
        this.DelInfo.content = 'tất cả hàng hóa đã chọn';
      }
      this.$emit('showPopupDel', this.DelInfo);
    },
    /**
     *  Thêm/Xóa phần tử vào danh sách để xóa
    */
    CheckListDelete(id, isChecked){
      if(!isChecked){
        this.DelInfo.ListProDelete.splice(this.DelInfo.ListProDelete.indexOf(id), 1);
        document.getElementById('checkAll').checked = false;
        this.allSelected = false;
      } 
      else {
        this.DelInfo.ListProDelete.push(id);
        if(this.DelInfo.ListProDelete.length == this.Products.length){
          document.getElementById('checkAll').checked = true;
          this.allSelected = true;
        }  
      }
    },
    /**
     * Chon tất cả hàng hóa
     */
    selectAll() {
      this.DelInfo.ListProDelete = [];
      for ( var i = 0; i < this.Products.length; i++) {
        if(!this.allSelected) this.DelInfo.ListProDelete.push(this.Products[i].productID);
            document.getElementsByName('checkboxInput')[i].checked = !this.allSelected;
      }
      this.allSelected = !this.allSelected;    
    },
    /**
     * Sự kiện click vào 1 hàng
     * Created By: TXTrinh (17/03/2021)
     */
    rowOnClick(id){
      if(this.selectedId == id){
       document.getElementById(id).classList.remove("selected");
       this.selectedId = null;
      }
      else if(this.selectedId != null && this.selectedId!= ""){
        document.getElementById(this.selectedId).classList.remove("selected");
        document.getElementById(id).classList.add("selected");
        this.selectedId = id;
      } else{
        document.getElementById(id).classList.add("selected");
        this.selectedId = id;
      }
    },
    /**
     * Sự kiến nhấn đúp vào 1 hàng
     * Create By: TXTrinh (17/03/2021)
     */
    rowOnDBClick(id){
      console.log(id);
    },
  },
  async mounted(){
    this.FilterProduct();
    EventBus.$on('reloadData', () => this.reloadData());
  }
};
    
/**
 * Format Number
 */
var numeral = require("numeral");
Vue.filter("formatNumber", function (value) {
    return numeral(value).format("0,0");
});
</script>

<style scoped>
#tbListData{
  border-spacing: 0;
  min-width: 100%
}
#tbListData th{
  padding: 0px!important;
}
#tbListData caption{
  display: none;
}
#checkboxInput{
  width: 10px !important;
  margin: auto !important;
}
td input[type="checkbox"]{
  margin-left: 4px !important;
}
#SKUCode{
  min-width: 100px;
}
#productName{
  min-width: 400px;
}
#productCategoryID{
  min-width: 130px;
}
#unitID{
  min-width: 110px;
}
#salePrice{
  min-width: 120px;
}
#isShowInScreen{
  min-width: 190px;
}
#status{
  min-width: 110px;
}
</style>