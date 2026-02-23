import Link from "next/link"
import { text } from "./text"

export default function Tail () {
  return (
    <footer className="p-5 py-16 bg-gradient-to-b from-gray-800 to-gray-900 w-full bottom-0 text-center">
      <div className="w-screen-xl max-w-screen-xl mx-auto text-white flex-col md:flex-row items-center justify-between gap-10">
        <div className="tail-1 mb-5">          
          <p> a <a href="https://joncoded.com" className="text-green-400 hover:text-white" target="_blank">@joncoded</a> (aka <a href="https://jonchius.com" className="text-green-400 hover:text-white" target="_blank">@jonchius</a>) <span aria-hidden="true">🐼🧑🏻‍💻</span> project </p>          
        </div>
        <div className="tail-2 flex gap-5 justify-center">
          
          <Link className="text-green-400 hover:text-white" href="/about">{text['about']}</Link>
          <Link className="text-green-400 hover:text-white" href="/omni">{text['search']}</Link>
          <Link className="text-green-400 hover:text-white" href="/conf">{text['configuration']}</Link>
        </div>
      </div>
    </footer>
  )
}