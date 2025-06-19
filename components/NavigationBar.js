import { Menu, Search, User, Settings } from 'lucide-react'
import { Fragment, useState } from 'react'
import { Disclosure } from '@headlessui/react'
export default function NavigationBar() {
  const [search, setSearch] = useState('')
  return (
    <Disclosure as="nav" className="bg-white border-b shadow-sm">
      {({ open }) => (
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Menu size={28} className="md:hidden text-blue-600" />
              <span className="text-xl font-bold text-blue-700 tracking-tight">Springer LMS</span>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <a href="#" className="text-gray-700 hover:text-blue-700 font-medium flex items-center gap-1">
                <User size={18} />
                My Profile
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-700 font-medium flex items-center gap-1">
                <Settings size={18} />
                Settings
              </a>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <input
                  type="text"
                  className="pl-8 pr-3 py-1.5 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm bg-gray-50"
                  placeholder="Search courses"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
                <Search size={16} className="absolute left-2 top-2 text-gray-400" />
              </div>
              <div className="md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none">
                  <Menu size={24} />
                </Disclosure.Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Disclosure>
  )
}