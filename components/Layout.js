import Head from 'next/head';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { Store } from "../utils/Store"

function Layout({ title, children }) {
  const { state } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);
  return (
    <>
      <Head>
        <title>{title ? title + ' - E-Garment' : 'E-Garment'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header className="sticky top-0 z-10 bg-white">
          <nav className="flex h-[70px] justify-between shadow-md px-4 items-center">
            <Link href="/">
              <a className="text-lg font-medium">
                E-GAR<span className="text-blue-500">MENTS</span>
              </a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="p-2 font-medium transition transform active:text-blue-700 hover:text-blue-500">
                  Cart
                  {cartItemsCount > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cartItemsCount}
                    </span>
                  )}
                </a>
              </Link>
              <Link href="/login">
                <a className="p-2 font-medium transition transform active:text-blue-700 hover:text-blue-500">
                  Login
                </a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner capitalize text-lg">
          <p>
            copyright &copy; 2022
            <a className="ml-2 text-lg font-medium">
              E-GAR
              <span className="text-blue-500">MENTS</span>
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}

export default Layout;
