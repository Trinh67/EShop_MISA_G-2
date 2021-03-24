import axios from "axios";
import { apiUrl } from "../../tsconfig.json";

const ApiUrl = apiUrl + "Products";

const getProduct = async (Parameters) => {
  const Products = axios.post(ApiUrl + '/FilterProduct', Parameters).then((response) => {
    return response;
  })
  .catch((err) => {
    return err.response.data.UserMsg;
  });
  const res = await Products;
  return res.data;
};

const quantityProduct = async (Parameters) => {
    const quantity = axios.post(ApiUrl + '/CountProduct', Parameters).then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response.data.UserMsg;
    });
    const res = await quantity;
    return res.data[0].total;
};

// const GetProductOfPage = async (offset, size) => {
//   const Products = axios
//     .get(ApiUrl + "page/" + offset + "&" + size)
//     .then((res) => {
//       return res;
//     });
//   let res = await Products;
//   return res.data;
// };

// const getProductById = async (id) => {
//   const Product = axios.get(ApiUrl + id).then((res) => {
//     return res;
//   });
//   let res = await Product;
//   return res.data[0];
// };

// const updateProduct = async (Product) => {
//   const result = {
//     Success: true,
//     data: "",
//   };
//   const res = axios
//     .put(ApiUrl, Product)
//     .then((res) => {
//       return res;
//     })
//     .catch((err) => {
//       result.Success = false;
//       return err.response.data.UserMsg;
//     });
//   result.data = await res;
//   return result;
// };

// const insertProduct = async (Product) => {
//   const result = {
//     Success: true,
//     data: "",
//   };
//   const res = axios
//     .post(ApiUrl, Product)
//     .then((res) => {
//       return res;
//     })
//     .catch((err) => {
//       result.Success = false;
//       return err.response.data.UserMsg;
//     });
//   result.data = await res;
//   return result;
// };

// const deleteProduct = async (id) => {
//   await axios.delete(ApiUrl + id);
// };

export default {
  getProduct,
//   deleteProduct,
//   updateProduct,
//   insertProduct,
//   getProductById,
  quantityProduct,
//   GetProductOfPage,
};
