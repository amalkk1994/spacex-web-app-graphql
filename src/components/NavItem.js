import React from "react"
import { Link } from "react-router-dom"

const NavItem = (props) => {
  return (
    <li className="font-bold text-zinc-200 hover:text-zinc-400">
      <Link to={props.link}>{props.label}</Link>
    </li>
  )
}

export default NavItem
