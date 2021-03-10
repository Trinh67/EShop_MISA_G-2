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
        <button class="m-btn m-btn-default disable-button" disabled>
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
        cellspacing="0"
        cellpadding="0"
        style="min-width: 100%"
      >
        <thead>
          <tr class="el-table__row">
            <th 
              colspan="1"
              rowspan="1"
              width=3% 
            >
                <input type="checkbox">
            </th>
            <th
              colspan="1"
              rowspan="1"
              width=8%
            >
              <div class="cell">Mã SKU<br/></div>
              <div class="group-input">
                <input class="select-filter-button" placeholder="*" disabled/>
                <input
                  id="txtSearchProductCode"
                  class="input-search"
                  type="text"
                  placeholder=""
                  v-model="txtSearchProductCode"
                  @change="SearchProduct()"
                />
              </div>
              
            </th>
            <th
              colspan="1"
              rowspan="1"
              width=40%
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
              colspan="1"
              rowspan="1"
              width=11%
            >
              <div class="cell">Nhóm hàng hóa<br/></div>
              <div class="group-input">
                <input class="select-filter-button" placeholder="*" disabled/>
                <input
                  id="txtSearchAddress"
                  class="input-search"
                  type="text"
                  placeholder=""
                  v-model="txtSearchAddress"
                  @change="SearchProduct()"
                />
              </div>
            </th>
            <th
              colspan="1"
              rowspan="1"
              width=8%
            >
              <div class="cell">Đơn vị tính<br/></div>
              <div class="group-input">
                <input class="select-filter-button" placeholder="*" disabled/>
                <input
                  id="txtSearchPhoneNumber"
                  class="input-search"
                  type="text"
                  placeholder=""
                  v-model="txtSearchPhoneNumber"
                  @change="SearchProduct()"
                />
              </div>
            </th>
            <th
              colspan="1"
              rowspan="1"
              width=8%
            >
              <div class="cell">Giá bán TB<br/></div>
              <div class="group-input">
                <input class="select-filter-button" placeholder="≤" disabled/>
                <input
                  id="txtSearchPhoneNumber"
                  class="input-search"
                  type="text"
                  placeholder=""
                  v-model="txtSearchPhoneNumber"
                  @change="SearchProduct()"
                />
              </div>
            </th>
            <th
              colspan="1"
              rowspan="1"
              width=12%
              class="el-table_30_column_116 is-leaf"
            >
              <div class="cell">Hiển thị trên MH bán hàng<br/></div>
              <div class="group-input">
                <select
                  id="txtSearchStatus"
                  class="m-control"
                  v-model="txtSearchStatus"
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
              colspan="1"
              rowspan="1"
              width=11%
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
                  <option class="" value="674934cc-42cf-20cf-1d4a-aea48a10ed18">Đang kinh doanh</option>
                  <option class="" value="64a59a25-2488-54b0-f6b4-c8af08a50cbf">Ngừng kinh doanh</option>
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
    <div class="paging-bar">
      <div class="paging-option">
        <div class="btn-select-page m-btn-firstpage" v-on:click="FirstPageNumber"></div>
        <div class="btn-select-page m-btn-prev-page" v-on:click="DecreasePageNumber"></div>
        <div class="m-btn-list-page">
          Trang
          <input 
            type="number" 
            v-model="currentPage"
            id="current-page"
            @change="SetCurrentPage()"
          />
          trên {{totalPage}}
        </div>
        <div class="btn-select-page m-btn-next-page" v-on:click="IncreasePageNumber"></div>
        <div class="btn-select-page m-btn-lastpage" v-on:click="LastPageNumber"></div>
        <div class="btn-select-page m-btn-refresh" @click="reloadData"></div>
      </div>
      <div class="paging-record-option">
        <select v-model="number" class="input-number-record">
          <option :value='15'>15 </option>
          <option :value='25'>25 </option>
          <option :value='50'>50 </option>
          <option :value='100'>100 </option>
        </select>
      </div>
      <div class="paging-record-info">Hiển thị <b>{{startListProduct}}-{{finishListProduct}}/{{ProductDataLength}}</b> nhân viên</div>
    </div>
    <!-- toggle message -->
    <div id="snackbar"></div>
  </div>
</template>

<script src="https://unpkg.com/vue"></script>
<script>
import Vue from 'vue';
import '@/styles/pages/productList.scss';
export default {
  name: "ProductList",
  components: {
    
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
          ]
              
      }
  },
};
</script>

<style scoped>
</style>