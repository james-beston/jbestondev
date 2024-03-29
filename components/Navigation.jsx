import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation({ current }) {
  const navigation = [
    { name: 'Work', href: 'work', current: current === 'work' ? true : false },
    { name: 'About', href: 'about', current: current === 'about' ? true : false },
    /* { name: 'Blog', href: 'blog', current: current === 'blog' ? true : false }, */
    { name: 'Contact', href: 'contact', current: current === 'contact' ? true : false }
  ]

  return (
    <Disclosure as="nav" className="bg-slate-700">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                <Link href="/">
                  <div className="flex-shrink-0 flex items-center font-black text-white text-2xl cursor-pointer">
                    James Beston
                  </div>
                </Link>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link key={item.href} href={`/${item.href}`}>
                        <a className={classNames(
                            item.current ? 'border-b-2 border-slate-500 text-white' : 'text-slate-300 hover:border-b-2 hover:border-slate-500 hover:text-white',
                            'px-3 py-1 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link key={item.href} href={`/${item.href}`}>
                  <Disclosure.Button
                    as="a"
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium cursor-pointer'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
          <div className="h-1 w-full colorchange" />
        </>
      )}
    </Disclosure>
  )
}