import React from "react"
import LaunchCard from "./LaunchCard"

const LaunchContainer = ({ data }) => {
  console.log("data from launch container", data)
  return (
    <div className="mt-12 mb-12">
      <ul className="grid grid-cols-1 gap-10 ">
        {data?.map((dataItem) => (
          <LaunchCard
            key={dataItem.id.toString() + dataItem.mission_name}
            launchItem={dataItem}
          />
        ))}
      </ul>
    </div>
  )
}

export default LaunchContainer
