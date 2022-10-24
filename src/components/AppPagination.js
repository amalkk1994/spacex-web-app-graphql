import React from "react"
import { Pagination } from "@material-ui/lab"

const AppPagination = (props) => {
  return (
    <div className="flex justify-center pb-32">
      <Pagination
        onChange={(e) => {
          props.onChange(e.target.textContent)
        }}
        count={props.pageCount}
      />
    </div>
  )
}

export default AppPagination
