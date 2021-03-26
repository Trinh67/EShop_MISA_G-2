import axios from "axios";
import { apiUrl } from "../../tsconfig.json";

const ApiUrl = apiUrl + "Products";

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

const getProductById = async (id) => {
  const Product = axios.get(ApiUrl + '/' + id).then((response) => {
    return response;
  });
  const res = await Product;
  return res.data[0];
};

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
