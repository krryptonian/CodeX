'use client'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Fragment } from 'react'

import Logo from '@/components/Logo'
import NavbarLink from '@/components/NavbarLink'
import ToggleTheme from '@/components/ToggleTheme'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const Navbar = () => {
  return (
    <Disclosure as='nav' className='navbar'>
      {({ open }) => (
        <Fragment>
          <div className='container'>
            <div className='flex h-16 justify-between'>
              <div className='flex'>
                <div className='flex flex-shrink-0 items-center'>
                  <Link href='/'>
                    <div className='flex items-center gap-2'>
                      <Logo size={42} blur={4} />
                    </div>
                  </Link>
                </div>
              </div>
              <div className='hidden md:ml-6 md:flex md:space-x-8'>
                {navigation.map((menu, index) => (
                  <NavbarLink key={index} href={menu.href}>
                    {menu.name}
                  </NavbarLink>
                ))}
                <ToggleTheme />
              </div>
              <div className='-mr-2 flex items-center md:hidden'>
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-200'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 pt-2 pb-3'>
              {navigation.map((menu, index) => (
                <Disclosure.Button
                  as={Link}
                  key={index}
                  href={menu.href}
                  className='block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-neutral-500 hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-700'
                >
                  {menu.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </Fragment>
      )}
    </Disclosure>
  )
}

export default Navbar
