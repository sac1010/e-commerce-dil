import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products:[],
    productDetails:{},
    loading:true
  },
  reducers: {
    setProducts: (state, action) => {
      return {...state, products:action.payload, loading:false};
    },
    setProductDetail: (state, action) => {
        return {...state, productDetails:action.payload, loading:false};

      },
      setLoading: (state, action) => {
        return { ...state, loading: action.payload };
      },
  },
});

export const { setProducts, setProductDetail, setLoading } = productSlice.actions;
export default productSlice.reducer;