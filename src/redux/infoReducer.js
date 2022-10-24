import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const getInfo = createAsyncThunk("api/info", () => {
  return axios
    .get("https://api.spacexdata.com/v3/info")
    .then((response) => {
      console.log("API info", response.data)
      return response.data
    })
    .catch((err) => console.log("Error from info api " + err))
})

const infoSlice = createSlice({
  name: "info",
  initialState: {
    data: [],
    loading: false,
    error: "",
  },
  extraReducers: {
    [getInfo.fulfilled]: (state, action) => {
      console.log("action", action)
      state.loading = false
      state.data = action.payload
    },
    [getInfo.pending]: (state, action) => {
      state.loading = true
    },
    [getInfo.rejected]: (state) => {
      state.loading = false
    },
  },
})

export { getInfo }
export default infoSlice.reducer
