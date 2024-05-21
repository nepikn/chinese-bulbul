import { useRef } from 'react'
import Icons from './Icons'
import clsx from 'clsx'

export default function Nav() {
  const linksRef = useRef<HTMLUListElement>(null)
  const links = [
    { text: '白頭翁的特性', active: true },
    { text: '白頭翁的故事', active: false },
    { text: '白頭翁的美照', active: false },
    { text: '白頭翁的危機', active: false }
  ].map(({ text, active }) => (
    <a key={text} className={clsx(active && 'font-bold text-selected')}>
      {text}
    </a>
  ))
  return (
    <nav className="grid h-[87.74px]">
      <div className="flex items-center justify-between">
        <button onClick={() => linksRef.current!.classList.toggle('hidden')}>
          <Icons.hamburgur />
        </button>
        <h1 className="text-xl font-bold">白頭翁不吃小米</h1>
        <div>
          <Icons.logo />
        </div>
      </div>
      <ul
        ref={linksRef}
        className="grid justify-center text-lg"
        // className="hidden"
      >
        {links}
      </ul>
    </nav>
  )
}
