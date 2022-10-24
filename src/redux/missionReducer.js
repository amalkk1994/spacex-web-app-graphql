import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const getAllMissions = createAsyncThunk(
  "api/missions",
  ({ setFltData, setPageData }) => {
    return axios
      .get("https://api.spacexdata.com/v3/missions")
      .then((response) => {
        console.log("Data from mission API", response.data)
        setFltData(response.data)
        setPageData(response.data.slice(0, 14))
        return response.data
      })
      .catch((err) => console.log("Error from mission api call:" + err))
  }
)

const missionSlice = createSlice({
  name: "mission",
  initialState: {
    data: [],
    loading: false,
    error: "",
  },
  extraReducers: {
    [getAllMissions.fulfilled]: (state, action) => {
      state.loading = false
      state.data = action.payload
    },
    [getAllMissions.pending]: (state, action) => {
      state.loading = true
    },
    [getAllMissions.rejected]: (state) => {
      state.loading = false
    },
  },
})

export { getAllMissions }
export default missionSlice.reducer
