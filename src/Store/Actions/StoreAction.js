import {
  DELETE_STORE_PRODUCTS,
  GET_PRODUCT_CATEGORY,
  GET_STORE_PRODUCTS,
  UPDATE_STORE_PRODUCTS,
  REMOVE_FROM_CART,
  GET_STORE_PRODUCTSLIST,
} from '../Types/actions_type';

const StoreAction = {
  getProductCategory: data => {
    return {
      type: GET_PRODUCT_CATEGORY,
      payload: data,
    };
  },
  getStoreProducts: data => {
    return {
      type: GET_STORE_PRODUCTS,
      payload: data,
    };
  },
  updateStoreProducts: data => {
    return {
      type: UPDATE_STORE_PRODUCTS,
      payload: data,
    };
  },
  getStoreProductList: data => {
    return {
      type: GET_STORE_PRODUCTSLIST,
      payload: data,
    };
  },
  removeProductFromCart: data => {
    return {
      type: REMOVE_FROM_CART,
      payload: data,
    };
  },
  deleteStoreProducts: data => {
    return {
      type: DELETE_STORE_PRODUCTS,
      payload: data,
    };
  },
};

export default StoreAction;
