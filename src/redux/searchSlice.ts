import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DataState = {
  isLoading: boolean;
  departureData: any;
  returnData: any;
};

const initialState = {
  isLoading: false,
  departureData: null,
  returnData: null,
};

const dataSlice = createSlice({
  name: "searchData",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setDepartureData: (state, action: PayloadAction<any>) => {
      state.departureData = action.payload;
    },
    setReturnData: (state, action: PayloadAction<any>) => {
      state.returnData = action.payload;
    },
  },
});

export const { setIsLoading, setDepartureData, setReturnData } =
  dataSlice.actions;
export default dataSlice.reducer;

const selectIsLoading = (state: { searchData: DataState }) =>
  state.searchData.isLoading;
const selectDepartureData = (state: { searchData: DataState }) =>
  state.searchData.departureData;
const selectReturnData = (state: { searchData: DataState }) =>
  state.searchData.returnData;

export { selectIsLoading, selectDepartureData, selectReturnData };
