import React from "react"
//import { useDispatch, useSelector } from "react-redux"
//import { getInfo } from "../redux/infoReducer"
import FieldValueCard from "../components/FieldValueCard"
import { useQuery, gql } from "@apollo/client"

const COMPANY_QUERY = gql`
  {
    company {
      ceo
      coo
      cto_propulsion
      cto
      employees
      founded
      founder
      launch_sites
      name
      summary
      test_sites
      valuation
      vehicles
    }
  }
`

const Home = () => {
  //const dispatch = useDispatch()

  // const data = useSelector((state) => state.info.data)
  const { data, error, loading } = useQuery(COMPANY_QUERY)
  //const error = useSelector((state) => state.info.error)
  // const loading = useSelector((state) => state.info.loading)

  if (loading) return "Loading..."
  if (error) return <pre>{error.message}</pre>

  /*
  useEffect(() => {
    dispatch(getInfo())
  }, [dispatch])

  */

  return (
    <div className="p-10">
      <h1 className="text-6xl font-black text-center text-slate-800 mb-8">
        {data.company.name}
      </h1>
      <p className="text-2xl text-center text-slate-700 font-medium">
        {data.company.summary}
      </p>
      <div className="grid grid-cols-4 mt-20 gap-10 pb-32 md:grid-cols-1">
        <FieldValueCard field="Founder" value={data.company.founder} />
        <FieldValueCard field="Founded In" value={data.company.founded} />
        <FieldValueCard field="Employees" value={data.company.employees} />
        <FieldValueCard field="Vehicles" value={data.company.vehicles} />
        <FieldValueCard
          field="Launch Sites"
          value={data.company.launch_sites}
        />
        <FieldValueCard field="Test Sites" value={data.company.test_sites} />
        <FieldValueCard field="CEO" value={data.company.ceo} />
        <FieldValueCard field="CTO" value={data.company.cto} />
        <FieldValueCard field="COO" value={data.company.coo} />
        <FieldValueCard
          field="CTO Propulsion"
          value={data.company.cto_propulsion}
        />
        <FieldValueCard field="Valutation" value={data.company.valuation} />
      </div>
    </div>
  )
}

export default Home
