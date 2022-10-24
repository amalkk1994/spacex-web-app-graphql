import React from "react"
import { FaSearch } from "react-icons/fa"

const SearchBar = (props) => {
  return (
    <>
      <input
        type="search"
        name="search"
        placeholder={props.placeholder}
        className="p-2 bg-slate-200 w-72 mt-10"
        onChange={(e) => {
          props.onChange(e)
        }}
      />
      <div className="px-4 inline-block">
        <FaSearch />
      </div>
    </>
  )
}

export default SearchBar
