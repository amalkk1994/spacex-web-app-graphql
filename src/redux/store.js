import { configureStore } from "@reduxjs/toolkit"
import infoReducer from "./infoReducer"
import launchReducer from "./launchReducer"
import missionReducer from "./missionReducer"
import shipReducer from "./shipReducer"

const store = configureStore({
  reducer: {
    info: infoReducer,
    launch: launchReducer,
    mission: missionReducer,
    ship: shipReducer,
  },
})

export default store
