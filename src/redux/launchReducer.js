import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const getLaunches = createAsyncThunk("api/launches", ({ pageNo, limit }) => {
  console.log("pageNo", pageNo)
  console.log("limit", limit)
  return axios
    .get(
      `https://api.spacexdata.com/v3/launches?limit=${limit}&&offset=${
        pageNo * limit
      }`
    )
    .then((response) => {
      console.log("API Launch Data", response.data)
      return response.data
    })
    .catch((err) => {
      console.log("ërror from launch API", err)
    })
})

const getAllLaunches = createAsyncThunk(
  "api/alllaunches",
  ({ setFltData, setPageData }) => {
    return axios
      .get("https://api.spacexdata.com/v3/launches")
      .then((response) => {
        console.log("API All Launch Data", response.data)
        setFltData(response.data)
        setPageData(response.data.slice(0, 14))
        //  setPageCount(Math.ceil(response.data.length / 15))
        return response.data
      })
      .catch((err) => {
        console.log("ërror from launch API", err)
      })
  }
)

const launchSlice = createSlice({
  name: "launch",
  initialState: {
    data: [],
    loading: false,
    error: "",
  },
  extraReducers: {
    [getLaunches.fulfilled]: (state, action) => {
      state.loading = false
      state.data = action.payload
    },
    [getLaunches.pending]: (state, action) => {
      state.loading = true
    },
    [getLaunches.rejected]: (state) => {
      state.loading = false
    },
    [getAllLaunches.fulfilled]: (state, action) => {
      state.loading = false
      state.data = action.payload
    },
    [getAllLaunches.pending]: (state, action) => {
      state.loading = true
    },
    [getAllLaunches.rejected]: (state) => {
      state.loading = false
    },
  },
})

export { getLaunches, getAllLaunches }
export default launchSlice.reducer
