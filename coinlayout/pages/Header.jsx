import React from 'react';
import Link from 'next/link';

const Header = () => {
  const NavRightItems = [
    { id: 1, name: 'خرید فروش ارز دیجیتال', href: '/' },
    { id: 2, name: 'بازارها', href: '/' },
    { id: 3, name: 'معامله', href: '/' },
    { id: 4, name: 'دعوت از دوستان', href: '/' },
    { id: 5, name: 'راهنمای استفاده', href: '/' },
  ];
  const NavLeftItems = [
    { id: 6, name: ' کیف پول', href: '/' },
    { id: 7, name: 'سفارشات', href: '/' },
    { id: 8, name: 'راهنمای استفاده', href: '/' },
  ];
  return (
    <div className="bg-white shadow-xl text-black hidden md:block ">
      <div className="flex justify-between flex-row-reverse py-5  px-11">
        <div className="blockRigth flex flex-row-reverse">
          <h1 className="font-bold	 text-primary text-xl">BITALIN</h1>
          <ul className="flex">
            {NavRightItems.map((item) => {
              return (
                <li key={item.id} className="mr-5">
                  <Link href={item.href}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="blockLeft">
          <ul className="flex">
            {NavLeftItems.map((itemLeft) => {
              return (
                <li key={itemLeft.id} className="mr-5">
                  <Link href={itemLeft.href}>{itemLeft.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
