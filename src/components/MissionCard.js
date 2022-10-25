import React from "react"
import FieldValueItem from "./FieldValueItem"

const MissionCard = ({ missionItem }) => {
  console.log("mission card")
  return (
    <div className="bg-slate-200 p-10">
      <FieldValueItem field="Mission Id" value={missionItem.id} />
      <FieldValueItem field="Mission Name" value={missionItem.name} />
      <FieldValueItem field="Description" value={missionItem.description} />
    </div>
  )
}

export default MissionCard
