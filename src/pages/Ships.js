import React, { useState } from "react"
// import { useSelector, useDispatch } from "react-redux"
import {
  debounce,
  paginationLogic,
  onChangeLogic,
} from "../utils/UtilFunctions"

import SearchBar from "../components/SearchBar"
import AppPagination from "../components/AppPagination"
// import { getAllShips } from "../redux/shipReducer"
import ShipContainer from "../components/ShipContainer"
import { useQuery, gql } from "@apollo/client"

const SHIP_QUERY = gql`
  {
    ships {
      id
      name
      type
    }
  }
`

const Ships = () => {
  //  const dispatch = useDispatch()
  // const data = useSelector((state) => state.ship.data)
  const [fltData, setFltData] = useState()
  const [pageData, setPageData] = useState()
  // const [pageCount, setPageCount] = useState()

  const { data, loading, error } = useQuery(SHIP_QUERY, {
    onCompleted: (data) => {
      console.log("ship data from graphql", data)
      setFltData(data.ships)
      setPageData(data.ships.slice(0, 14))
    },
  })

  console.log("data launch from ships", data)

  function handlePagination(pageNo) {
    paginationLogic(pageNo, setPageData, fltData)
  }

  function handleOnChange(e) {
    console.log("key press", e.target.value)
    onChangeLogic(e, data.ships, setFltData, setPageData, "name")
  }

  /*
  useEffect(() => {
    dispatch(getAllShips({ setFltData, setPageData }))
  }, [dispatch])

  */

  if (loading) return "Loading..."
  if (error) return <pre>{error.message}</pre>

  return (
    <div>
      <h1 className="text-4xl font-black text-center">SHIPS</h1>
      <SearchBar
        placeholder="search ships by ship name"
        onChange={debounce(handleOnChange, 3000)}
      />
      <ShipContainer data={pageData} />
      <AppPagination
        onChange={handlePagination}
        pageCount={Math.ceil(fltData?.length / 15)}
      />
    </div>
  )
}

export default Ships
