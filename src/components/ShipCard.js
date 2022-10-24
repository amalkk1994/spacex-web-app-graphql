import React from "react"
import FieldValueItem from "./FieldValueItem"

const ShipCard = ({ shipItem }) => {
  console.log("ship card")
  return (
    <div className="bg-slate-200 p-10">
      <FieldValueItem field="Ship Id" value={shipItem.ship_id} />
      <FieldValueItem field="Ship Name" value={shipItem.ship_name} />
      <FieldValueItem field="Ship Type" value={shipItem.ship_type} />
    </div>
  )
}

export default ShipCard
