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
        >
          <div class="btn-toolbar-icon icon-load" @click="reloadData"></div> Nạp 
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
                  v-model="Filter.txtSearchSKUCode"
                  @change="SearchProduct()"
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
                  v-model="Filter.txtSearchProductName"
                  @change="SearchProduct()"
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
                  v-model="Filter.txtSearchProductCategory"
                  @change="SearchProduct()"
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
                  v-model="Filter.txtSearchUnit"
                  @change="SearchProduct()"
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
                  v-model="Filter.txtSearchSalePrice"
                  @change="SearchProduct()"
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
                  v-model="Filter.txtSearchIsShow"
                  @change="SearchProduct()"
                >
                  <option value="">
                    Tất cả
                  </option>
                  <option class="1" value="">Có</option>
                  <option class="0" value="">Không</option>
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
                  v-model="Filter.txtSearchStatus"
                  @change="SearchProduct()"
                >
                  <option value="">
                    Tất cả trạng thái
                  </option>
                  <option class="1" value="">Đang kinh doanh</option>
                  <option class="0" value="">Ngừng kinh doanh</option>
                </select>
              </div>
            </th>
          </tr>
        </thead>
        <tbody id="tbody">
          <tr
            class="table__row"
            v-for="Product in Products"
            :key="Product.ProductID"
            :id="Product.ProductID"
            @click="rowOnClick(Product.ProductID)"
            @dblclick="rowOnDBClick(Product.ProductID)"
          >
            <td><input type="checkbox" @change="CheckListDelete(Product.ProductID, Product.isChecked)" v-model="Product.isChecked" name="checkboxInput"></td>
            <td>
              <div>{{ Product.SKUCode }}</div>
            </td>
            <td>
              <div>{{ Product.ProductName }}</div>
            </td>
            <td>
              <div>{{ Product.ProductCategoryID }}</div>
            </td>
            <td>
              <div>{{ Product.UnitID }}</div>
            </td>
            <td>
              <div class="right">{{ Product.SalePrice | formatNumber}}</div>
            </td><td>
              <div>{{ isShow[Product.ShowInScreen] }}</div>
            </td>
            <td>
              <div>{{statusList[Product.Status]}}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- End Content Body -->
    <!-- Content footer -->
    <Paging 
      :PagingValue="PagingValue"
    />
    <!-- End Content Footer -->
  </div>
</template>

<script src="https://unpkg.com/vue"></script>
<script>
import Vue from 'vue';
import '@/styles/pages/productList.scss';
import Paging from '@/components/base/Paging.vue'
export default {
  name: "ProductList",
  components: {
    Paging,
  },
  data() {
      return {
          Products:[
              {ProductID:1,SKUCode:11,ProductName:"Test0",ProductCategoryID:12,UnitID:1,SalePrice: 100000,ShowInScreen:0,Status:1,isChecked: false},
              {ProductID:2,SKUCode:11,ProductName:"Test1",ProductCategoryID:12,UnitID:1,SalePrice: 100000,ShowInScreen:1,Status:1,isChecked: false},
              {ProductID:3,SKUCode:11,ProductName:"Test2",ProductCategoryID:12,UnitID:1,SalePrice: 100000,ShowInScreen:0,Status:0,isChecked: false},
              {ProductID:4,SKUCode:11,ProductName:"Test3",ProductCategoryID:12,UnitID:1,SalePrice: 100000,ShowInScreen:1,Status:1,isChecked: false},
              {ProductID:5,SKUCode:11,ProductName:"Test4",ProductCategoryID:12,UnitID:1,SalePrice: 100000,ShowInScreen:1,Status:1,isChecked: false},
              {ProductID:6,SKUCode:11,ProductName:"Test5",ProductCategoryID:12,UnitID:1,SalePrice: 100000,ShowInScreen:0,Status:0,isChecked: false},
              {ProductID:7,SKUCode:11,ProductName:"Test6",ProductCategoryID:12,UnitID:1,SalePrice: 100000,ShowInScreen:0,Status:1,isChecked: false},
              {ProductID:8,SKUCode:11,ProductName:"Test7",ProductCategoryID:12,UnitID:1,SalePrice: 100000,ShowInScreen:1,Status:0,isChecked: false},
              {ProductID:9,SKUCode:11,ProductName:"Test8",ProductCategoryID:12,UnitID:1,SalePrice: 100000,ShowInScreen:0,Status:0,isChecked: false},
              {ProductID:10,SKUCode:11,ProductName:"Test9",ProductCategoryID:12,UnitID:1,SalePrice: 100000,ShowInScreen:1,Status:0,isChecked: false},
              {ProductID:11,SKUCode:11,ProductName:"Test10",ProductCategoryID:12,UnitID:1,SalePrice: 100000,ShowInScreen:0,Status:0,isChecked: false},
              {ProductID:12,SKUCode:11,ProductName:"Test11",ProductCategoryID:12,UnitID:1,SalePrice: 100000,ShowInScreen:0,Status:0,isChecked: false},
              {ProductID:13,SKUCode:11,ProductName:"Test12",ProductCategoryID:12,UnitID:1,SalePrice: 100000,ShowInScreen:0,Status:1,isChecked: false},
          ],
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
            txtSearchSKUCode: "",
            txtSearchProductName: "",
            txtSearchProductCategory: "",
            txtSearchUnit: "",
            txtSearchSalePrice: "",
            txtSearchIsShow: "",
            txtSearchStatus: "",
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

    reloadData() {

    },

    /**
     * Xóa hàng hóa
     */
    btnDeleteOnClick(){
      if(this.DelInfo.ListProDelete.length == 0) {
        this.WarnInfo = "Bạn chưa chọn nhân viên nào!"; 
        this.$emit('showPopupWarn', this.WarnInfo);
        return
      }
      else if(this.DelInfo.ListProDelete.length == 1){
        const result = this.Products.filter(product => product.ProductID == this.DelInfo.ListProDelete[0]);
        this.DelInfo.content = result[0].ProductName;
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
        if(!this.allSelected) this.DelInfo.ListProDelete.push(this.Products[i].ProductID);
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
  min-width: 110px;
}
#isShowInScreen{
  min-width: 190px;
}
#status{
  min-width: 110px;
}
</style>