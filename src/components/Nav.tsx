import clsx from 'clsx';
import { useState } from 'react';
import Icons from './Icons';

export default function Nav() {
  const [collapsed, setCollapsed] = useState(true);
  const [linkSelected, setLinkSelected] = useState(0);
  const MenuIcon = Icons[collapsed ? 'hamburgur' : 'x'];
  const links = [
    { id: 0, text: '白頭翁的特性', href: '#' },
    { id: 1, text: '白頭翁的故事', href: '#' },
    { id: 2, text: '白頭翁的美照', href: '#' },
    { id: 3, text: '白頭翁的危機', href: '#' },
  ].map(({ id, text, href }) => {
    const selected = id == linkSelected;
    return (
      <li key={id}>
        <span
          className={clsx(
            selected ||
              'hover:border-b-2 hover:border-selected/50 hover:text-selected/50',
            selected && 'border-b-2 border-selected',
          )}
        >
          <a
            href={href}
            onClick={() => setLinkSelected(id)}
            className={clsx(selected && 'font-bold text-selected')}
          >
            {text}
          </a>
        </span>
      </li>
    );
  });

  return (
    <div className="text-center lg:min-w-[345px]">
      <div className="relative my-[19.61px] flex items-center justify-between pl-[26px] pr-[18px] lg:my-[78.33px]">
        <button onClick={() => setCollapsed(!collapsed)} className="lg:hidden">
          <MenuIcon />
        </button>
        <h1 className="flex-grow text-xl font-bold lg:text-3xl">
          白頭翁不吃小米
        </h1>
        <a
          href="/"
          className="grid aspect-square w-[48.52px] place-items-center overflow-hidden rounded-full bg-white shadow-[0_0_6px] shadow-black/40 lg:absolute lg:left-full lg:w-[97.56px] lg:-translate-x-1/2"
        >
          <Icons.logo className="w-3/4" />
        </a>
      </div>
      <ul
        className={clsx(
          'grid justify-center gap-[22px] pb-[41px] text-lg',
          collapsed && 'max-lg:hidden',
        )}
      >
        {links}
      </ul>
      {/* <div className="relative w-full">
        <div className="absolute w-full">
          <Icons.logo />
        </div>
        <div className="w-full">
          <Icons.logoSvg />
        </div>
      </div> */}
    </div>
  );
}
