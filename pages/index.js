import Head from 'next/head'
import Layout from '../components/layout'
import ProductCard from '../components/cards/product'
import { useState, useEffect, useRef } from 'react'
import { Popover, Transition, Dialog } from '@headlessui/react'
import { Fragment } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { CevronRight } from '../utils/icomoon'
import { useWindowSize } from '../utils/functions'
import RestaurantDetail from '../components/details/restaurant'
import { Link as ScrollLink, animateScroll as scroll} from 'react-scroll'

const menusURL = '/api/menus'

const Home = () => {
	const [categories, setCategories] = useState([])
  const [windowSize, setWindowSize] = useState([])
  const [overlay, setOverlay] = useState(false)
  const [scroll, setScroll] = useState(1)
  const [showScrollCategories, setShowScrollCategories] = useState(true)
  const selectionRef = useRef(null)
  const scrollBar = useRef()

  const scrollFirst = () => {
    const scrollTabsInner = document.querySelector('.scroll-tabs_inner')
    scrollTabsInner.style.transform = 'translate3d(-29%, 0px, 0px)'
  }
  
  const scrollLast = () => {
    const scrollTabsInner = document.querySelector('.scroll-tabs_inner')
    scrollTabsInner.style.transform = 'translate3d(0px, 0px, 0px)'
  }
  
  const winSize = useWindowSize()
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

    if (winSize) {
      setWindowSize(winSize)

      const onScroll = () => {      
        if (winSize.width <= 420) {
          setShowScrollCategories(false)
          if (window.scrollY > 320) {
            setShowScrollCategories(true)
          } else {
            setShowScrollCategories(false)
          }
        } else {
          setShowScrollCategories(true)
        }

        const nav = document.querySelector('.tabs.active');
        if (nav) {
          // nav.scrollIntoView({ block: 'start' })
        }
      }

      document.addEventListener('scroll', onScroll)
    }


  }, [scroll, setScroll, winSize])

  return (
    <Layout className='bg-[#f7f7f7]'>
        <Head>
          <title>Copy Trial | GrabFood ID</title>
        </Head>
        <div className='bg-white'>
          <div className='w-full max-w-7xl my-0 mx-auto'>
            <div className='px-3 md:px-9 lg:px-10 pt-10 lg:pt-12 pb-4'>
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
            <div className={`bg-white text-[#1a1a1a] lg:sticky top-10 lg:top-[88px] z-[3] ${ windowSize <= 420 ? 'shadow-custom' : ''}`}>
              <div className={`w-full max-w-7xl my-0 mx-auto fixed lg:relative top-10 lg:top-0 transition-opacity duration-200 ease-linear bg-white ${ windowSize <= 420 ? 'shadow-custom' : ''} ${showScrollCategories ? 'opacity-100 z-[9]' : 'opacity-0'}`}>
                <div className='px-8 md:px-9 lg:px-10 h-12 lg:h-[66px] flex items-end relative bg-white'>
                  <style>{
                    `
                      .scroll-tabs .active {
                        font-family: Sanomat App Medium, sans-serif;
                        color: #00b14f;
                        font-weight: 500;
                        border-bottom: 2px solid #00b14f;
                      }

                      .scroll-left,
                      .scroll-right {
                        position: relative;
                      }

                      .scroll-left:before,
                      .scroll-right:before {
                        content: ;
                        position: absolute;
                        width: 30px;
                        top: 0;
                        bottom: 0;
                        z-index: 1;
                      }

                      .scroll-left:before {
                        left: 20px;
                        background: linear-gradient(90deg, #FFFFFF 37.25%, rgba(255, 255, 255, 0) 100%);
                      }
                      .scroll-right:before {
                        right: 26px;
                        background: linear-gradient(270deg, #FFFFFF 37.25%, rgba(255, 255, 255, 0) 100%);
                      }

                      .no-scrollbar {
                        -ms-overflow-style: none; /* IE and Edge */
                        scrollbar-width: none; /* Firefox */
                      }
                    `
                  }</style>
                  <div className='flex gap-0 w-full overflow-y-auto md:overflow-y-hidden lg:overflow-y-hidden .no-scrollbar scroll-tabs px-0 lg:px-4 z-[1]'>
                    <div className='flex scroll-tabs_inner transition-transform duration-500'>
                      { categories.map((row, key) => (
                        <ScrollLink 
                        className={`tabs text-sm lg:text-base px-3 lg:px-6 py-[14px] border-b-2 border-transparent whitespace-nowrap text-[#676767] hover:cursor-pointer hover:text-[#1ebd60] transition-all duration-300 ease-linear ${windowSize && windowSize.width <= 420 ? 'h-12' : ''}`}
                        ref={scrollBar}
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
                  <div className='flex w-full justify-between absolute left-0 bottom-[2px] lg:bottom-[2px] px-0 lg:px-8'>
                    <span className='bg-white h-10 lg:h-[52px] w-11 pr-3 flex items-center justify-center border-b-2 border-transparent z-[2] hover:cursor-pointer scroll-left'
                      onClick={scrollLast}>
                      <CevronRight className='flex-none rotate-180' />
                    </span>
                    <span className='bg-white h-10 lg:h-[52px] w-8 flex items-center justify-center z-[2] hover:cursor-pointer scroll-right'
                      onClick={scrollFirst}>
                      <CevronRight className='flex-none' />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
          <div className='w-full max-w-7xl my-0 mx-auto'>
            <div className='px-3 md:px-9 lg:px-10 py-6 lg:py-[72px]'>
              { categories.map((row, key) => (
                <section key={key} className='mb-3 lg:mb-[72px] last:mb-0 bg-white lg:bg-transparent -mx-3 lg:mx-0 px-3 lg:px-0 py-6 lg:py-0' id={row.ID}>
                  <h2 className='text-[#1c1c1c] font-medium text-xl lg:text-4xl mb-6 lg:mb-12'>
                    {row.name}
                  </h2>
                  <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 divide-y'>
                    { row.items.map((item, id) => (
                      <Popover className={`relative lg:pt-0 ${id > 0 ? 'pt-3' : ''}`} key={id}>
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
                              ref={selectionRef} >
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
                              <Popover.Panel className='absolute left-0 right-3 bottom-0 z-[11] mt-3 -translate-y-[2px] lg:-translate-y-[18px] transform' ref={selectionRef}>
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
                  Let us know
                </a>
              </Link>
              if you come across anything that&#39;s outdated!
            </div>
          </div>
        </div>
    </Layout>
  );
}

export default Home