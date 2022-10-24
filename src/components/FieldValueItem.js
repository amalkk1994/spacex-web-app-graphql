import React from "react"

const FieldValueItem = (props) => {
  return (
    <>
      <p className={`text-xl font-semibold text-center ${props.className}`}>
        {props.field}
      </p>
      <p className={`text-center ${props.className}`}>{props.value}</p>
    </>
  )
}

export default FieldValueItem
