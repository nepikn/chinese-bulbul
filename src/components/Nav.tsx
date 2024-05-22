import clsx from 'clsx';
import { useState } from 'react';
import Icons from './Icons';

export default function Nav() {
  const [collapsed, setCollapsed] = useState(true);
  const [linkSelected, setLinkSelected] = useState('0');

  const MenuIcon = Icons[collapsed ? 'hamburgur' : 'x'];
  const handleMenuClicked = () => setCollapsed(!collapsed);

  return (
    <div className="text-center lg:min-w-[345px]">
      <div className="relative my-[19.61px] flex items-center justify-between pl-[26px] pr-[18px] lg:my-[78.33px]">
        <button onClick={handleMenuClicked} className="lg:hidden">
          <MenuIcon />
        </button>
        <h1 className="flex-grow text-xl font-bold lg:text-3xl">
          白頭翁不吃小米
        </h1>
        <a
          href="/"
          className="z-10 grid aspect-square w-[48.52px] place-items-center overflow-hidden rounded-full bg-white shadow-[0_0_6px] shadow-black/40 transition-shadow hover:shadow-[0_0_12px] lg:absolute lg:left-full lg:w-[97.56px] lg:-translate-x-1/2"
        >
          <Icons.logo className="w-3/4" />
        </a>
      </div>
      <Links
        {...{
          linkSelected,
          handleLinkSelected: (id) => setLinkSelected(id),
          collapsed,
        }}
      />
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

interface Links {
  linkSelected: string;
  handleLinkSelected: (id: string) => void;
  collapsed: boolean;
}

function Links({ linkSelected, handleLinkSelected, collapsed }: Links) {
  const links = [
    { id: '0', text: '白頭翁的特性', href: '#' },
    { id: '1', text: '白頭翁的故事', href: '#' },
    { id: '2', text: '白頭翁的美照', href: '#' },
    { id: '3', text: '白頭翁的危機', href: '#' },
  ].map(({ id, text, href }) => {
    return (
      <li key={id} className="group">
        <span
          className={clsx(
            // 'transition-colors',
            id == linkSelected
              ? 'border-b-2 border-selected font-bold text-selected'
              : 'hover:border-b-2 hover:border-selected/50 hover:text-selected/50',
          )}
        >
          <a href={href} onClick={() => handleLinkSelected(id)}>
            {text}
          </a>
        </span>
      </li>
    );
  });

  return (
    <ul
      className={clsx(
        'grid justify-center gap-[22px] pb-[41px] text-lg transition-transform',
        collapsed && 'max-lg:hidden',
      )}
    >
      {links}
    </ul>
  );
}
