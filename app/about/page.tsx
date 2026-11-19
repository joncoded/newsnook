/*
newsnook by @joncoded (aka @jonchius)
/app/(root)/about/page.tsx
explanation of the project
*/

import { MainDiv } from "../../components/main"
import { PageNavi, NaviName } from "../../components/navi"
import { text } from "../../components/text"
import Link from "next/link"

export default function About() {

  return (

    <>

      <PageNavi>
        <NaviName label={`${text['about']}`} />
      </PageNavi>

      <MainDiv className="mt-20 text-2xl">

        <p>
          <strong>newsnook</strong> : shows a list of <em>nerd-minded</em> news headlines from the <Link href="https://hn.algolia.com/api" target="_blank">Hacker News API</Link>
        </p>

        <ul>
          <li>Groundbreaking : started with only a <strong>home page list</strong> (like the <Link href="https://news.ycombinator.com/" target="_blank">Hacker News home page</Link>) then allowed:
            <ul>
              <li><strong>look up by keyword</strong>: <em>command-K</em> for headlines by term, such as <Link href="/term/LLM">LLM</Link>!</li>
              <li><strong>look up by year</strong>: <Link href="/year/2022">2022</Link> or <Link href="/year/2021">2021</Link> all the way back to <Link href="/year/2006">2006</Link></li>
              <li><strong>look up by anything</strong>: with "<Link href="/omni/">Omni</Link>"" lookup</li>
              <li><strong>"dark mode"</strong>: (inside the menu)</li>
              <li><strong>full-screen menu</strong>: <em>command-slash</em>!)</li>
              <li><strong>URL-input strings</strong>: play around with the URLs in "Omni" to look up other headlines!</li>
            </ul>
          </li>
          <li>2025-10-23 : <strong><Link href="/conf">user settings</Link></strong> and other tidbits:
            <ul>
              <li><strong>look up by "score"</strong> (with user input)</li>
              <li><strong>linking to "comments"</strong> (read the "comments" of each link!)</li>
            </ul>
          </li>
          <li>2025-10-24 : <strong><Link href="/conf">user settings</Link></strong> feature:
            <ul>
              <li><strong>nooks settings</strong> with cookies and term keywords</li>
            </ul>
          </li>
        </ul>

      </MainDiv>

    </>
  )

}