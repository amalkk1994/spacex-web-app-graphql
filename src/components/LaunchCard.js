import React from "react"
import FieldValueItem from "./FieldValueItem"

const LaunchCard = ({ launchItem }) => {
  return (
    <li>
      <div className="bg-slate-200 p-10">
        <h1 className="text-3xl font-bold text-center">
          {launchItem.mission_name}
        </h1>
        <div className="grid grid-cols-1 gap-2 mt-6 items-center">
          <FieldValueItem field="Launch year" value={launchItem.launch_year} />
          <FieldValueItem
            field="Launch Site"
            value={launchItem.launch_site.site_name}
          />
          <FieldValueItem
            className="col-span-1"
            field="Details"
            value={
              launchItem.details ||
              "No Details available regarding this mission"
            }
          />
        </div>
      </div>
    </li>
  )
}

export default LaunchCard
