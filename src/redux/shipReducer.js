import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const getAllShips = createAsyncThunk(
  "api/ships",
  ({ setFltData, setPageData }) => {
    return axios
      .get("https://api.spacexdata.com/v3/ships")
      .then((response) => {
        console.log("Data from ships API", response.data)
        setFltData(response.data)
        setPageData(response.data.slice(0, 14))
        return response.data
      })
      .catch((err) => console.log("Error from ships api call:" + err))
  }
)

const shipSlice = createSlice({
  name: "ship",
  initialState: {
    data: [],
    loading: false,
    error: "",
  },
  extraReducers: {
    [getAllShips.fulfilled]: (state, action) => {
      state.loading = false
      state.data = action.payload
    },
    [getAllShips.pending]: (state, action) => {
      state.loading = true
    },
    [getAllShips.rejected]: (state) => {
      state.loading = false
    },
  },
})

export { getAllShips }
export default shipSlice.reducer
