import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getInfo } from "../redux/infoReducer"
import { FaGlobe } from "react-icons/fa"
import { FaFlickr } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaGlobeAmericas } from "react-icons/fa"

const Footer = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.info.data)
  // const error = useSelector((state) => state.info.error)
  //  const loading = useSelector((state) => state.info.loading)

  console.log("data footer:" + data)

  useEffect(() => {
    dispatch(getInfo())
  }, [dispatch])
  return (
    <footer className="flex text-zinc-200 bg-slate-800 p-10 justify-between absolute bottom-0 w-screen sm:flex-col sm:gap-5 sm:items-center">
      <div className="flex gap-1">
        <FaGlobeAmericas className="self-center" />
        <p>{data.headquarters?.address},</p>
        <p>{data.headquarters?.city},</p>
        <p>{data.headquarters?.state}</p>
      </div>
      <p>&copy; SpaceX</p>
      <div className="flex gap-5">
        <a href={data.links?.website} target="_blank" rel="noreferrer">
          <FaGlobe />
        </a>
        <a href={data.links?.flickr} target="_blank" rel="noreferrer">
          <FaFlickr />
        </a>
        <a href={data.links?.twitter} target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
      </div>
    </footer>
  )
}

export default Footer
