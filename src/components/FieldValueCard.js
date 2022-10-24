import React from "react"
import FieldValueItem from "./FieldValueItem"

const FieldValueCard = (props) => {
  return (
    <div className="p-10 bg-slate-200">
      <FieldValueItem field={props.field} value={props.value} />
    </div>
  )
}

export default FieldValueCard
