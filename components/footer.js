import Image from 'next/image'
import Link from 'next/link'
import Icon from '../utils/icons'
import { Fragment, useState, useEffect, useRef } from 'react'
import { Listbox, Transition, Disclosure } from '@headlessui/react'
import { classNames, useWindowSize } from '../utils/functions'

const countries = [
  { name: 'Indonesia', href: '#' },
  { name: 'Philippines', href: '#' },
  { name: 'Thailand', href: '#' },
  { name: 'Vietnam', href: '#' },
  { name: 'Singapore', href: '#' },
  { name: 'Malaysia', href: '#' },
  { name: 'Myanmar', href: '#' },
]

const footerNavigation = [
  {
    name: 'Frequently Searched',
    children: [
      { name: 'Burger King Menu', href: '#' },
      { name: 'Chatime Menu', href: '#' },
      { name: 'Domino&#39;s Pizza Menu', href: '#' },
      { name: 'Hokben Menu', href: '#' },
      { name: 'JCO Delivery', href: '#' },
      { name: 'KFC Menu', href: '#' },
      { name: 'McDonalds Menu', href: '#' },
      { name: 'Pizza Hut Delivery', href: '#' },
      { name: 'Richeese Menu', href: '#' },
      { name: 'Menu Solaria', href: '#' },
      { name: 'Starbucks Menu', href: '#' },
      { name: 'Yoshinoya Menu', href: '#' },
    ]
  },
  {
    name: 'Popular Cuisines',
    children: [
      { name: 'Chinese Food', href: '#' },
      { name: 'Fast Food', href: '#' },
      { name: 'Indian Food', href: '#' },
      { name: 'Indonesian Food', href: '#' },
      { name: 'Italian Food', href: '#' },
      { name: 'Japanese Food', href: '#' },
      { name: 'Korean Food', href: '#' },
      { name: 'Thai Food', href: '#' },
      { name: 'Vietnamese Food', href: '#' },
    ]
  },
  {
    name: 'About Grab',
    children: [
      { name: 'About Grab', href: '#' },
      { name: 'About GrabFood', href: '#' },
      { name: 'Blog', href: '#' },
    ]
  },
  {
    name: 'Support',
    children: [
      { name: 'Help', href: '#' },
      { name: 'FAQs', href: '#' },
      { name: 'Be a GrabFood Merchant', href: '#' },
      { name: 'Drive With Grab', href: '#' },
    ]
  }
]

const languages = [
  { id: 2, name: 'ID', title: 'Bahasa Indonesia' },
  { id: 1, name: 'EN', title: 'English' }
]


const Footer = () => {
  const [selected, setSelected] = useState(languages[1])
  const [windowSize, setWindowSize] = useState([])
  const selectionRef = useRef(null)

  const winSize = useWindowSize()
  useEffect(() => {
    if (winSize) {
      setWindowSize(winSize)
    }
  }, [winSize]);

  return (
      <footer >
        <div className='bg-[#eaeff2] text-[#363a45] pt-11 pb-3' id='footerNew'>
          <div className='w-full max-w-7xl my-0 mx-auto'>
            <div className='px-3 md:px-9 lg:px-10'>
              <div className='border-b border-[#dadfe8] pb-6'>
                <div className='flex items-center justify-between w-full h-7'>
                  <Link href={'#'} passHref>
                    <a className={`${windowSize.width <= 420 ? 'w-[90px!important]' : ''}`}>
                      <Image
                        className='h-10 mx-auto lg:mr-0 w-[90px!important] lg:w-[142px!important]'
                        src='/logo-grabfood-mono.svg'
                        alt='GrabFood logo'
                        height={'32px'}
                        width={'173px'}
                        priority
                      />
                    </a>
                  </Link>
                  <Listbox value={selected} onChange={setSelected}>
                    {({ open }) => (
                      <>
                        <div className='relative h-full'>
                            <Listbox.Button ref={selectionRef} className='flex items-center space-x-1 cursor-default hover:cursor-pointer'>
                              <span className='block text-xs text-[#363a45]'>{selected.name}</span>
                              <span className='w-4 pointer-events-none mt-1 lg:mt-0'>
                                <Icon icon='arrow-down-dark' className='text-base text-[#363a45]' />
                              </span>
                            </Listbox.Button>
                            <Transition
                              show={open}
                              as={Fragment}
                              leave='transition ease-in duration-100'
                              leaveFrom='opacity-100'
                              leaveTo='opacity-0'
                            >
                                <Listbox.Options className='absolute right-0 w-full min-w-[195px] bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm z-[13]'>
                                  { languages.map((lang) => (
                                    <Listbox.Option
                                      key={lang.id}
                                      className={({ active }) =>
                                        classNames(
                                          active ? 'bg-[#d8f0df]' : '',
                                          'text-[#1c1c1c] cursor-pointer select-none relative py-[9px] pl-3'
                                        )
                                      }
                                      value={lang}
                                    >
                                      {({ selected }) => (
                                        <>
                                          <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate w-full')}>
                                            {lang.title}
                                          </span>
                                        </>
                                      )}
                                    </Listbox.Option>
                                  ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                      </>
                    )}
                  </Listbox>
                </div>
              </div>
              <div className='grid grid-cols-1 lg:grid-cols-4 mt-4 lg:mt-8 mb-3 lg:mb-0 gap-4 lg:gap-0'>
              { windowSize.width <= 420 ?
                <>
                  { footerNavigation.map((row, key) => (
                    <div key={key}>
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full justify-between">
                              <h3 className='font-medium text-base' 
                                dangerouslySetInnerHTML={{
                                __html: row.name
                              }}></h3>
                              <Icon icon='arrow-down-dark' className='text-base text-[#363a45]' />
                            </Disclosure.Button>
                            <Disclosure.Panel>
                              <ul role='list' className='mt-4 mb-0 lg:mb-12'>
                                {row.children.map((item) => (
                                  <li key={ item.name } className='leading-6'>
                                    <Link href={ item.href } passHref>
                                      <a className='text-sm hover:underline'
                                        dangerouslySetInnerHTML={{
                                          __html: item.name
                                        }}></a>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </div>
                  ))}
                </> :
                <>
                  { footerNavigation.map((row, key) => (
                    <div key={key}>
                      <h3 className='font-medium text-base' 
                        dangerouslySetInnerHTML={{
                        __html: row.name
                      }}></h3>
                      <ul role='list' className='mt-4 mb-12'>
                        {row.children.map((item) => (
                          <li key={ item.name } className='leading-6'>
                            <Link href={ item.href } passHref>
                              <a className='text-sm hover:underline'
                                dangerouslySetInnerHTML={{
                                  __html: item.name
                                }}></a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </>
              }
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#363a45] text-white pt-8 pb-12' id='footerOld'>
          <div className='w-full max-w-7xl my-0 mx-auto'>
            <div className='px-3 md:px-9 lg:px-10'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-0'>
                <div>
                  <h3 className='text-base mb-4 lg:mb-2 font-medium text-center lg:text-left'>
                    Countries with GrabFood
                  </h3>
                  <ul role='list' className='text-sm mb-8 flex flex-wrap justify-center lg:justify-start'>
                    <style jsx>{
                      `
                        li:after {
                          content: '|';
                          color: #6b7896;
                          margin-right: 8px;
                          margin-left: 8px;
                        }
                        li:last-child:after {
                          content: '';
                        }
                      `
                    }</style>
                    { countries.map((item) => (
                      <li key={ item.name } className='inline-block'>
                        <Link href={ item.href } passHref>
                          <a className='text-sm text-white hover:underline'>
                            { item.name }
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='flex items-start justify-center lg:justify-end w-full mb-[14px] lg:mb-0'>
                  <ul role='list' className='space-x-5'>
                    <li className='inline-block'>
                      <Link href={'#'} passHref>
                        <a className='text-sm text-white'>
                          <Icon icon='icon-facebook' className='text-[32px]' />
                        </a>
                      </Link>
                    </li>
                    <li className='inline-block'>
                      <Link href={'#'} passHref>
                        <a className='text-sm text-white'>
                          <Icon icon='icon-instagram' className='text-[32px]' />
                        </a>
                      </Link>
                    </li>
                    <li className='inline-block'>
                      <Link href={'#'} passHref>
                        <a className='text-sm text-white'>
                          <Icon icon='icon-twitter' className='text-[32px]' />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='text-center lg:text-left mb-6 lg:mb-0'>
                  <div className='text-[#afb0b4] mb-2'>
                    &copy; Grab 2022
                  </div>
                  <ul role='list' className='text-sm'>
                    <li className='inline-block first:pl-0'>
                      <Link href={'#'} passHref>
                        <a className='text-sm text-white hover:underline'>
                          Terms of Service
                        </a>
                      </Link>
                    </li>
                    <li className='inline-block px-2 select-none'>
                      •
                    </li>
                    <li className='inline-block'>
                      <Link href={'#'} passHref>
                        <a className='text-sm text-white hover:underline'>
                          Privacy Policy
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='flex items-end justify-center lg:justify-end w-full'>
                  <div className='h-[38px] space-x-6'>
                    <Link href={'#'} passHref>
                      <a className='inline-block h-[38px]'>
                        <Image
                          className='mx-auto lg:mr-0 w-[auto]'
                          src='/logo-appstore.svg'
                          alt='Appstore logo'
                          height={'38px'}
                          width={'120px'}
                        />
                      </a>
                    </Link>
                    <Link href={'#'} passHref>
                      <a className='inline-block h-[38px]'>
                        <Image
                          className='mx-auto lg:mr-0 w-[auto]'
                          src='/logo-playstore.svg'
                          alt='Playstore logo'
                          height={'38px'}
                          width={'120px'}
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );

}

export default Footer