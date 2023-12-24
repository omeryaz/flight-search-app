import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  departureData: null,
  returnData: null,
};

const dataSlice = createSlice({
  name: "data",
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

type DataState = {
  isLoading: boolean;
  departureData: any;
  returnData: any;
};

const selectIsLoading = (state: DataState) => state.isLoading;
const selectDepartureData = (state: DataState) => state.departureData;
const selectReturnData = (state: DataState) => state.returnData;

export { selectIsLoading, selectDepartureData, selectReturnData };
