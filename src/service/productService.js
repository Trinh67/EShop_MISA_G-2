import axios from "axios";
import { apiUrl } from "../../tsconfig.json";

const ApiUrl = apiUrl + "Products";

/**
 * Lấy danh sách hàng hóa theo bộ chọn
 * @param {Bộ chọn} Parameters 
 * @returns List hàng hóa
 */
const getProduct = async (Parameters) => {
  const Products = axios.post(ApiUrl + '/FilterProduct', Parameters).then((response) => {
    return response;
  })
  .catch((err) => {
    return err.response;
  });
  const res = await Products;
  return res.data;
};

/**
 * Lấy tổng số bản ghi
 * @param {Bộ chọn} Parameters 
 * @returns Tổng số bản ghi
 */
const quantityProduct = async (Parameters) => {
    const quantity = axios.post(ApiUrl + '/CountProduct', Parameters).then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
    const res = await quantity;
    return res.data[0].total;
};

/**
 * 
 * @param {Lấy hàng hóa theo ID} id 
 * @returns Một hàng hóa
 */
const getProductById = async (id) => {
  const Product = axios.get(ApiUrl + '/' + id).then((response) => {
    return response;
  });
  const res = await Product;
  return res.data[0];
};

/**
 * Cập nhập hàng hóa
 * @param {Thông tin hàng hóa đã cập nhập} Product 
 * @returns Số bản ghi ảnh hưởng
 */
const updateProduct = async (Product) => {
  const updatePro = axios
    .put(ApiUrl, Product)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
  const result = await updatePro;
  return result.data;
};

/**
 * Thêm mới hàng hóa
 * @param {Hàng hóa thêm mới} Product 
 * @returns Số bản ghi ảnh hưởng
 */
const insertProduct = async (Product) => {
  const insertPro = axios
    .post(ApiUrl, Product)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
  const result = await insertPro;
  return result.data;
};

/**
 * Xóa hàng hóa
 * @param {Danh sách ID hàng hóa} listId 
 * @returns Mã code trả về
 */
const deleteProduct = async (listId) => {
  const deletePro = axios.post(ApiUrl + "/DeleteList", listId).then((response) => {
    return response;
  })
  .catch((err) => {
    return err.response;
  });
  const res = await deletePro;
  return res.data.misaCode;
};

/**
 * Sinh mã SKU
 * @param {Tên hàng hóa đã format} name 
 * @returns Mã SKU
 */
const genSKUCode = async (name) => {
  const genCode = axios.get(ApiUrl + "/GenSKUCode?name=" + name).then((response) => {
    return response;
  })
  .catch((err) => {
    return err.response;
  });
  const res = await genCode;
  return res.data.data[0];
};

export default {
  getProduct,
  deleteProduct,
  updateProduct,
  insertProduct,
  getProductById,
  quantityProduct,
  genSKUCode,
};
