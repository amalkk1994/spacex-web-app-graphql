import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getInfo } from "../redux/infoReducer"
import FieldValueCard from "../components/FieldValueCard"

const Home = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.info.data)
  //const error = useSelector((state) => state.info.error)
  // const loading = useSelector((state) => state.info.loading)

  useEffect(() => {
    dispatch(getInfo())
  }, [dispatch])

  return (
    <div className="p-10">
      <h1 className="text-6xl font-black text-center text-slate-800 mb-8">
        {data.name}
      </h1>
      <p className="text-2xl text-center text-slate-700 font-medium">
        {data.summary}
      </p>
      <div className="grid grid-cols-4 mt-20 gap-10 pb-32 md:grid-cols-1">
        <FieldValueCard field="Founder" value={data.founder} />
        <FieldValueCard field="Founded In" value={data.founded} />
        <FieldValueCard field="Employees" value={data.employees} />
        <FieldValueCard field="Vehicles" value={data.vehicles} />
        <FieldValueCard field="Launch Sites" value={data.launch_sites} />
        <FieldValueCard field="Test Sites" value={data.test_sites} />
        <FieldValueCard field="CEO" value={data.ceo} />
        <FieldValueCard field="CTO" value={data.cto} />
        <FieldValueCard field="COO" value={data.coo} />
        <FieldValueCard field="CTO Propulsion" value={data.cto_propulsion} />
        <FieldValueCard field="Valutation" value={data.valuation} />
      </div>
    </div>
  )
}

export default Home
