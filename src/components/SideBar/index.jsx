import React from 'react';
// import React, { Fragment  } from 'react';
// import { Menu, Transition } from '@headlessui/react';

function SideBar() {
  return (
    <div className="slider border-r-2 border-[#dadce0] h-full w-64 p-4">
      <div role="button" className="w-32 h-12 border rounded-lg shadow-2xl hover:bg-gray-200 flex justify-center items-center">
        <i className="fa-solid fa-plus fa-lg mr-4"></i>
        Create
      </div>
      {/* <Menu>
        <Menu.Button className="w-32 h-12 border rounded-lg shadow-2xl hover:bg-gray-200">
          <i className="fa-solid fa-plus fa-lg mr-4"></i>
          Create
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item className="w-full">
              {({ active }) => (
                <a
                  className={`${active && 'bg-blue-500'}`}
                >
                  Account settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item className="w-full">
              {({ active }) => (
                <a
                  className={`${active && 'bg-blue-500'}`}
                >
                  Documentation
                </a>
              )}
            </Menu.Item>
          </div>
          </Menu.Items>
        </Transition>
      </Menu> */}
    </div>
  )
}

export default SideBar