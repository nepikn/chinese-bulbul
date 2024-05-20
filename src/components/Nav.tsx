import Icons from './Icons'

export default function Nav() {
  return (
    <nav className="grid h-[87.74px]">
      <div className="flex items-center justify-between">
        <button>
          <Icons.hamburgur />
        </button>
        <h1>白頭翁不吃小米</h1>
        <div>
          <Icons.logo />
        </div>
      </div>
      <ul className="hidden"></ul>
    </nav>
  )
}
