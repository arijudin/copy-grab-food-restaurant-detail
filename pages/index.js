import Head from 'next/head'
import Layout from '../components/layout'
import ProductCard from '../components/cards/product'
import { useState, useEffect, useRef } from 'react'
import { Popover, Transition, Dialog } from '@headlessui/react'
import { Fragment } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { CevronRight } from '../utils/icomoon'
import { classNames } from '../utils/functions'
import RestaurantDetail from '../components/details/restaurant'
import { Link as ScrollLink, animateScroll as scroll} from 'react-scroll'

// import { Link, animateScroll as scroll } from "react-scroll"

const menusURL = '/api/menus'

const pages = [
  {
    position: 1,
    name: 'Home',
    href: 'https://food.grab.com/id/en/',
    current: false,
  }, {
    position: 2,
    name: 'Restaurant',
    href: 'https://food.grab.com/id/en/restaurants',
    current: false,
  }, {
    position: 3,
    name: 'Do Yan Seafood - Sumbersekar',
    href: 'https://food.grab.com',
    current: true,
  }
]

const Home = () => {
	const [categories, setCategories] = useState([])
  const [overlay, setOverlay] = useState(false)
  const selectionRef = useRef(null)

  useEffect(() => {
    const getMenus = async () => {
      const res = await axios.get(`${menusURL}`)

      try {
        const response = res.data
        
        if (response) {
          const menu = response.menu
          setCategories(menu.categories)
        }

      } catch (error) {
      }
    }
    
    const fetchDataMenu = async () => {
      await getMenus()
    }
    fetchDataMenu()

  }, [])

  return (
    <Layout className='bg-[#f7f7f7]'>
        <Head>
          <title>Copy Trial | GrabFood ID</title>
        </Head>
        <div className='bg-white'>
          <div className='w-full max-w-7xl my-0 mx-auto'>
            <div className='px-3 md:px-9 lg:px-10 pt-12 pb-4'>
              <nav aria-label='Breadcrumb'>
                <ol role='list' className='flex items-center space-x-2'>
                  {pages.map((page, key) => (
                  <li key={key}>
                    <div className='flex items-center'>
                      { key != 0 ?
                        <CevronRight className='w-4 h-4' /> : null
                      }
                      { !page.current ?
                        <Link href={page.href} passHref>
                          <a
                            className={ classNames(
                              page.current ? 'text-[#1c1c1c] select-none' : 'text-[#00a5cf] hover:text-[#1ebd60]',
                              key == 0 ? '' : 'ml-2',
                              'text-base transition-all duration-300 ease-in-out tracking-[-0.64px]'
                            )}
                            aria-current={page.current ? 'page' : undefined}
                          >
                            {page.name}
                          </a>
                        </Link> :
                        <span className='text-[#1c1c1c] ml-2 text-base hover:cursor-auto tracking-[-0.64px]'
                          aria-current={page.current ? 'page' : undefined}
                        >
                          {page.name}
                        </span>
                      }
                    </div>
                  </li>
                ))} 
                </ol>
              </nav>
              <RestaurantDetail />
            </div>
          </div>
        </div>
        <div className='static'>
          <>
            <style jsx>{
              `
                .shadow-custom {
                  box-shadow: 0 4px 6px 0 rgb(28 28 28 / 6%);
                }
              `
            }</style>
            <div className='bg-white text-[#1a1a1a] sticky top-[88px] z-[3] shadow-custom'>
              <div className='w-full max-w-7xl my-0 mx-auto'>
                <div className='px-3 md:px-9 lg:px-10 h-[66px]'>
                  <div className='flex gap-0 w-full overflow-hidden'>
                    { categories.map((row, key) => (
                      <ScrollLink 
                        className='px-6 py-[14px] whitespace-nowrap text-[#676767] hover:cursor-pointer hover:text-[#1ebd60] transition-all duration-300 ease-linear'
                        key={key}
                        to={row.ID}
                        spy={true}
                        smooth={true}
                        offset={-158}
                        duration={600}
                      >
                        {row.name}
                      </ScrollLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
          <div className='w-full max-w-7xl my-0 mx-auto'>
            <div className='px-3 md:px-9 lg:px-10 py-[72px]'>
              { categories.map((row, key) => (
                <section key={key} className='mb-[72px] last:mb-0' id={row.ID}>
                  <h2 className='text-[#1c1c1c] font-medium text-4xl mb-12'>
                    {row.name}
                  </h2>
                  <div className='grid grid-cols-3 gap-6'>
                    { row.items.map((item, id) => (
                      <Popover className='relative' key={id}>
                        {({ open }) => (
                          <>
                            <Dialog as='div' className='fixed z-[1] inset-0 overflow-y-auto'
                              open={open}
                              onClose={() => setOverlay}
                              initialFocus={selectionRef} >
                              <Transition.Child
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0'
                                enterTo='opacity-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100'
                                leaveTo='opacity-0'
                              >
                                <Dialog.Overlay className='fixed inset-0 bg-opacity-60 transition-opacity z-10' />
                              </Transition.Child>
                            </Dialog>
                            <Popover.Button
                              className='focus:outline-none focus-visible:ring-0 relative w-full h-full'
                              onClick={() => (setOverlay)}
                              ref={selectionRef}>
                              <ProductCard
                                name={item.name}
                                description={item.description}
                                available={item.available}
                                price={item.priceV2.amountDisplay}
                                discounted={item.priceV2.amountInMinor - item.discountedPriceV2.amountInMinor }
                                discountedPrice={item.discountedPriceV2.amountDisplay}
                                imgHref={item.imgHref}
                              />
                            </Popover.Button>
                            <Transition
                              as={Fragment}
                              enter='transition ease-out duration-200'
                              enterFrom='opacity-0 translate-y-1'
                              enterTo='opacity-100 translate-y-0'
                              leave='transition ease-in duration-150'
                              leaveFrom='opacity-100 translate-y-0'
                              leaveTo='opacity-0 translate-y-1'
                            >
                              <Popover.Panel className='absolute left-0 right-3 bottom-0 z-10 mt-3 -translate-y-[18px] transform' ref={selectionRef}>
                                <style jsx>{
                                  `
                                    .shadow-custom {
                                      box-shadow: 0 5px 13px rgb(28 28 28 / 16%);
                                    }
                                    .arrow-custom {
                                      color: transparent;
                                      border-color: #fff;
                                      border-style: solid;
                                      border-width: 0 5px 7px;
                                      border-top-color: transparent!important;
                                      border-left-color: transparent!important;
                                      border-right-color: transparent!important;
                                      position: absolute;
                                      top: -7px;
                                      left: 16px;
                                      width: 0;
                                      height: 0;                                
                                    }
                                  `
                                }</style>
                                <div className='overflow-hidden rounded-md shadow-custom'>
                                  <div className='arrow-custom'></div>
                                  <div className='bg-white p-4'>
                                    <div className='flex justify-between items-center w-full gap-2 text-sm font-medium'>
                                      <p className='text-[#1c1c1c]'>Please login to add this item to your basket.</p>
                                      <Popover.Button className='px-[15px] rounded-md bg-[#00b14f] hover:bg-[#1ebd60] text-white h-[48px] transition-all duration-300 ease-in-out touch-manipulation select-none'
                                        ref={selectionRef}
                                        onClick={() => (setOverlay)}
                                        type='button'>
                                        <span className='whitespace-nowrap'>Login/Sign Up</span>
                                      </Popover.Button>
                                    </div>
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                      ))}
                  </div>
                  
                </section>
              ))}
            </div>
            <div className='text-xs leading-[18px] text-[#676767] text-center pb-6 px-3'>
              We&#39;re always working to get the most accurate information.
              <Link href={'#'} passHref>
                <a className='text-[#00a5cf] hover:text-[#23bddb] transition-all duration-300 ease-linear px-[2px]'>
                  Let us
                </a>
              </Link>
              know if you come across anything that&#39;s outdated!
            </div>
          </div>
        </div>
    </Layout>
  );
}

export default Home