import React from "react"
import MissionCard from "./MissionCard"

const MissionContainer = ({ data }) => {
  console.log("data from launch container", data)
  return (
    <div className="mt-12 mb-12">
      <ul className="grid grid-cols-1 gap-10 ">
        {data?.map((dataItem) => (
          <MissionCard
            key={dataItem.mission_id.toString() + dataItem.mission_name}
            missionItem={dataItem}
          />
        ))}
      </ul>
    </div>
  )
}

export default MissionContainer
