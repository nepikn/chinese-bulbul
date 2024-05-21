import { useRef, useState } from 'react';
import Icons from './Icons';
import clsx from 'clsx';

export default function Nav() {
  const [collapsed, setCollapsed] = useState(true);
  const [linkSelected, setLinkSelected] = useState(0);
  const Icon = Icons[collapsed ? 'hamburgur' : 'x'];
  const links = [
    { id: 0, text: '白頭翁的特性', href: '#' },
    { id: 1, text: '白頭翁的故事', href: '#' },
    { id: 2, text: '白頭翁的美照', href: '#' },
    { id: 3, text: '白頭翁的危機', href: '#' },
  ].map(({ id, text, href }) => {
    const selected = id == linkSelected;
    return (
      <li>
        <span className={clsx(selected && 'border-b-2 border-selected')}>
          <a
            key={id}
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
    <nav className="grid">
      <div className="flex h-[87.74px] items-center justify-between">
        <button onClick={() => setCollapsed(!collapsed)}>
          <Icon />
        </button>
        <h1 className="text-xl font-bold">白頭翁不吃小米</h1>
        <div>
          <Icons.logo />
        </div>
      </div>
      <ul
        className={clsx(
          'grid justify-center gap-[22px] text-lg',
          collapsed && 'hidden',
        )}
      >
        {links}
      </ul>
    </nav>
  );
}
