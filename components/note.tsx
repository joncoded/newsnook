/*
newsnook by @joncoded (aka @jonchius)
/components/note.tsx
alert message on top of main content
*/
import Link from "next/link"

// import Link from "next/link"
export default function Note() {
  return (
    <>
    <aside className="border border-gray-600 bg-yellow-300 p-5 my-5 text-xl">
      <p>⚠️ These headlines come from the <Link href="https://news.ycombinator.com/" target="_blank">ycombinator.com</Link> Hacker News API! The news will come from a wide mix of mindsets and outlooks!</p>
    </aside> 
    </>
  )
}