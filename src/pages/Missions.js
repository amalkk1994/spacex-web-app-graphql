import React, { useState } from "react"
// import { useSelector, useDispatch } from "react-redux"
import {
  debounce,
  paginationLogic,
  onChangeLogic,
} from "../utils/UtilFunctions"

import SearchBar from "../components/SearchBar"
import AppPagination from "../components/AppPagination"
// import { getAllMissions } from "../redux/missionReducer"
import MissionContainer from "../components/MissionContainer"
import { useQuery, gql } from "@apollo/client"

const MISSION_QUERY = gql`
  {
    missions {
      id
      description
      name
    }
  }
`

const Missions = () => {
  // const dispatch = useDispatch()
  //  const data = useSelector((state) => state.mission.data)
  const [fltData, setFltData] = useState()
  const [pageData, setPageData] = useState()
  // const [pageCount, setPageCount] = useState()
  const { data, loading, error } = useQuery(MISSION_QUERY, {
    onCompleted: (data) => {
      console.log("graphql mission", data)
      setFltData(data.missions)
      setPageData(data.missions.slice(0, 14))
    },
  })

  console.log("data launch from missions", data)

  function handlePagination(pageNo) {
    paginationLogic(pageNo, setPageData, fltData)
  }

  function handleOnChange(e) {
    console.log("key press", e.target.value)
    onChangeLogic(e, data.missions, setFltData, setPageData, "name")
  }

  /*
  useEffect(() => {
    dispatch(getAllMissions({ setFltData, setPageData }))
  }, [dispatch])

  */

  if (loading) return "Loading..."
  if (error) return <pre>{error.message}</pre>

  return (
    <div>
      <h1 className="text-4xl font-black text-center">MISSIONS</h1>
      <SearchBar
        placeholder="search Mission by mission name"
        onChange={debounce(handleOnChange, 3000)}
      />
      <MissionContainer data={pageData} />
      <AppPagination
        onChange={handlePagination}
        pageCount={Math.ceil(fltData?.length / 15)}
      />
    </div>
  )
}

export default Missions
