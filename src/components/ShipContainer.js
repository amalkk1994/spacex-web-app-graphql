import React from "react"
import ShipCard from "./ShipCard"

const ShipContainer = ({ data }) => {
  console.log("data from launch container", data)
  return (
    <div className="mt-12 mb-12">
      <ul className="grid grid-cols-1 gap-10 ">
        {data?.map((dataItem) => (
          <ShipCard
            key={dataItem.ship_id.toString() + dataItem.ship_name}
            shipItem={dataItem}
          />
        ))}
      </ul>
    </div>
  )
}

export default ShipContainer
