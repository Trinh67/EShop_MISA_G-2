<template>
  <div class="content-body">
    <!-- Loading -->
    <div class="vld-parent">
        <loading :active.sync="isLoading" 
        :can-cancel="false" 
        @click="onCancel"
        :is-full-page="fullPage"></loading>
    </div>
    <!-- Content Header -->
    <div class="header-content">
      <div class="toolbar">
        <button 
          class="m-btn m-btn-default" 
          @click="btnAddOnClick"
        >
          <div class="btn-toolbar-icon icon-add"></div> Thêm mới
          <div class="account-option icon-option-default-16 mg-left-10"></div>
        </button>
        <button 
          class="m-btn m-btn-default disable-button"
          @click="btnEditOnClick"
        >
          <div class="btn-toolbar-icon icon-multiply"></div> Nhân bản
        </button>
        <button 
          class="m-btn m-btn-default"
          @click="btnEditOnClick"
        >
          <div class="btn-toolbar-icon icon-edit"></div> Sửa 
        </button>
        <button 
          class="m-btn m-btn-default" 
          @click="btnDeleteOnClick">
          <div class="btn-toolbar-icon icon-delete"></div> Xóa 
        </button>
        <button class="m-btn m-btn-default"><div class="btn-toolbar-icon icon-load" @click="reloadData"></div> Nạp </button>
      </div>
    </div> 
    <!-- Content Body -->
    <div
      class="grid grid-product el-table el-table--fit el-table--scrollable-y el-table--enable-row-hover el-table--enable-row-transition"
    >
      <table
        id="tbListData"
      >
        <caption>Bảng hàng hóa</caption>
        <thead>
          <tr class="el-table__row">
            <th 
              id="checkboxInput"
              colspan="1"
              rowspan="1"
            >
                <input type="checkbox">
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
                  placeholder=""
                  v-model="txtSearchSKUCode"
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
                  placeholder=""
                  v-model="txtSearchProductName"
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
                  placeholder=""
                  v-model="txtSearchProductCategory"
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
                  placeholder=""
                  v-model="txtSearchUnit"
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
                  placeholder=""
                  v-model="txtSearchSalePrice"
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
                  v-model="txtSearchIsShow"
                  @change="SearchProduct()"
                >
                  <option value="">
                    Tất cả
                  </option>
                  <option class="" value="">Có</option>
                  <option class="" value="">Không</option>
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
                  v-model="txtSearchStatus"
                  @change="SearchProduct()"
                >
                  <option value="">
                    Tất cả trạng thái
                  </option>
                  <option class="" value="">Đang kinh doanh</option>
                  <option class="" value="">Ngừng kinh doanh</option>
                </select>
              </div>
            </th>
          </tr>
        </thead>
        <tbody id="tbody">
          <tr
            class="el-table__row"
            v-for="Product in Products"
            :key="Product.ProductId"
            :id="Product.ProductId"
            @click="rowOnClick(Product.ProductId, Product.ProductName)"
            @dblclick="rowOnDBClick(Product.ProductId)"
          >
            <td><input type="checkbox"></td>
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
              <div>{{ Product.SalePrice }}</div>
            </td><td>
              <div>{{ Product.ShowInScreen }}</div>
            </td>
            <td>
              <div>{{ Product.Status }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Content footer -->
    <Paging 
      :PagingValue="PagingValue"
    />
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
              {
                SKUCode: 11,
                ProductName: "Test",
                ProductCategoryID: 12,
                UnitID: 1,
                SalePrice: 100000,
                ShowInScreen: 0,
                Status: 0,
              },
              {
                SKUCode: 12,
                ProductName: "Test",
                ProductCategoryID: 12,
                UnitID: 1,
                SalePrice: 100000,
                ShowInScreen: 0,
                Status: 0,
              },
              {
                SKUCode: 12,
                ProductName: "Test",
                ProductCategoryID: 12,
                UnitID: 1,
                SalePrice: 100000,
                ShowInScreen: 0,
                Status: 0,
              },
              {
                SKUCode: 12,
                ProductName: "Test",
                ProductCategoryID: 12,
                UnitID: 1,
                SalePrice: 100000,
                ShowInScreen: 0,
                Status: 0,
              },
              {
                SKUCode: 12,
                ProductName: "Test",
                ProductCategoryID: 12,
                UnitID: 1,
                SalePrice: 100000,
                ShowInScreen: 0,
                Status: 0,
              },
              {
                SKUCode: 12,
                ProductName: "Test",
                ProductCategoryID: 12,
                UnitID: 1,
                SalePrice: 100000,
                ShowInScreen: 0,
                Status: 0,
              },
              {
                SKUCode: 12,
                ProductName: "Test",
                ProductCategoryID: 12,
                UnitID: 1,
                SalePrice: 100000,
                ShowInScreen: 0,
                Status: 0,
              },
              {
                SKUCode: 12,
                ProductName: "Test",
                ProductCategoryID: 12,
                UnitID: 1,
                SalePrice: 100000,
                ShowInScreen: 0,
                Status: 0,
              },
              {
                SKUCode: 12,
                ProductName: "Test",
                ProductCategoryID: 12,
                UnitID: 1,
                SalePrice: 100000,
                ShowInScreen: 0,
                Status: 0,
              },
              {
                SKUCode: 12,
                ProductName: "Test",
                ProductCategoryID: 12,
                UnitID: 1,
                SalePrice: 100000,
                ShowInScreen: 0,
                Status: 0,
              },
              {
                SKUCode: 12,
                ProductName: "Test",
                ProductCategoryID: 12,
                UnitID: 1,
                SalePrice: 100000,
                ShowInScreen: 0,
                Status: 0,
              },
              {
                SKUCode: 12,
                ProductName: "Test",
                ProductCategoryID: 12,
                UnitID: 1,
                SalePrice: 100000,
                ShowInScreen: 0,
                Status: 0,
              },
              {
                SKUCode: 12,
                ProductName: "Test",
                ProductCategoryID: 12,
                UnitID: 1,
                SalePrice: 100000,
                ShowInScreen: 0,
                Status: 0,
              },
              {
                SKUCode: 12,
                ProductName: "Test",
                ProductCategoryID: 12,
                UnitID: 1,
                SalePrice: 100000,
                ShowInScreen: 0,
                Status: 0,
              },
              {
                SKUCode: 12,
                ProductName: "Test",
                ProductCategoryID: 12,
                UnitID: 1,
                SalePrice: 100000,
                ShowInScreen: 0,
                Status: 0,
              },
              {
                SKUCode: 12,
                ProductName: "Test",
                ProductCategoryID: 12,
                UnitID: 1,
                SalePrice: 100000,
                ShowInScreen: 0,
                Status: 0,
              },
              {
                SKUCode: 12,
                ProductName: "Test",
                ProductCategoryID: 12,
                UnitID: 1,
                SalePrice: 100000,
                ShowInScreen: 0,
                Status: 0,
              },
              {
                SKUCode: 12,
                ProductName: "Test",
                ProductCategoryID: 12,
                UnitID: 1,
                SalePrice: 100000,
                ShowInScreen: 0,
                Status: 0,
              },
              {
                SKUCode: 12,
                ProductName: "Test",
                ProductCategoryID: 12,
                UnitID: 1,
                SalePrice: 100000,
                ShowInScreen: 0,
                Status: 0,
              },
              {
                SKUCode: 12,
                ProductName: "Test",
                ProductCategoryID: 12,
                UnitID: 1,
                SalePrice: 100000,
                ShowInScreen: 0,
                Status: 0,
              },
          ],
          PagingValue: {
            productDataLength: 105,
            startPoint: 0,
            totalPage: 10,
            startListProduct: 1,
            finishListProduct: 1,
            currentPage: 1,
            number: 15
          }
      }
  },
  methods: {
    
  }
};
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
  width: 3%;
}
#SKUCode{
  width: 7%;
}
#productName{
  width: 40%;
}
#productCategoryID{
  width: 11%;
}
#unitID{
  width: 8%;
}
#salePrice{
  width: 8%;
}
#isShowInScreen{
  width: 12%;
}
#status{
  width: 11%;
}
</style>