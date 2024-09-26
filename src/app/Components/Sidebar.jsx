"use client"

import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {

  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }

  return (
    <> 
      <div className="flex">
        <aside className={`fixed top-20 left-0 w-64 h-full bg-blue-900 transition-all transform ${open ? "translate-x-0":"-translate-x-full"} transition-transform duration-300`}> 
            <ul className=" flex flex-col items-center p-5 my-2">  
              <h1 className="text-3xl py-4 text-black">Menu </h1>
              <Link href="/">Home</Link>
              <Link href="/About">About</Link>
              <Link href="/Contactus">ContactUs</Link>
            </ul>

        </aside>
        <div className="Hamburger fixed top-0  w-[100%] h-20 bg-blue-900 p-5" ><button className="btn" onClick={toggle}>{!open ? "Open" : "Close"}</button></div>   
      </div>

    </>
  )
}
