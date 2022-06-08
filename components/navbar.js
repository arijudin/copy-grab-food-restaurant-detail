import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { CartDefault, GeoIcon } from '../utils/icomoon'
import { classNames, useWindowSize } from '../utils/functions'

const Navbar = () => {
  const [locationFocus, setLocationFocus] = useState(false)
  const [windowSize, setWindowSize] = useState([])
  const inputLocationRef = useRef(null)
  
  const winSize = useWindowSize()
  useEffect(() => {
    if (locationFocus) {
      inputLocationRef.current.focus();
    }

    setWindowSize(winSize)
  }, [locationFocus, winSize]);

  return (
      <div className='z-[99] sticky -top-12 lg:top-0'>
        <div className='bg-white '>
          <div className='w-full max-w-7xl my-0 mx-auto'>
            <div className='px-3 md:px-9 lg:px-10 flex items-center justify-between h-12 lg:h-[88px] border-b lg:border-b-0 border-[#f0efef]'>
              <div className='flex items-center'>
                <div className='flex-none'>
                  <Link href={'#'} passHref>
                    <a className={`h-[50px] overflow-hidden flex items-center transition-all duration-300 ${windowSize.width <= 420 ? 'w-[90px!important]' : ''}`}>
                      <Image
                          className='h-10 mx-auto lg:mr-0 w-[90px!important] lg:w-[142px!important]'
                          src='/logo-grabfood2.svg'
                          alt='GrabFood logo'
                          height={'100%'}
                          width={'142px'}
                          priority
                      />
                    </a>
                  </Link>
                </div>
                <div className='w-full lg:min-w-[360px] lg:max-w-[360px] mx-0 lg:mx-[50px] h-10 absolute lg:relative top-12 lg:top-0 right-0 left-0 bg-white flex items-center px-3 lg:px-0'>
                  <style jsx>{
                    `
                      .location-input {
                        box-shadow: 0 3px 6px rgb(28 28 28 / 10%);
                      }
                      .icon-drop-off .path1:before {
                        content: '\e907';
                        color: rgb(238, 99, 82);
                      }
                      .icon-drop-off .path2:before {
                        content: '\e908';
                        margin-left: -1em;
                        color: rgb(0, 0, 0);
                      }
                      .icon-drop-off .path3:before {
                        content: '\e909';
                        margin-left: -1em;
                        color: rgb(255, 255, 255);
                      }
                    `
                  }</style>
                  <div className={ classNames(
                    locationFocus ? 'block' : 'hidden',
                    'relative w-full'
                    )}>
                    <span className="icomoon icon-drop-off text-[30px] mx-1 absolute w-[30px] lg:w-10 h-[30px] lg:h-10 flex items-center justify-center left-1">
                      <span className="path1"></span>
                      <span className="path2"></span>
                      <span className="path3"></span>
                    </span>
                    <input
                      className='location-input w-full border-transparent lg:border-[#c5c5c5] rounded-md text-sm h-[30px] lg:h-10 placeholder:text-[#9a9a9a] px-12 focus:border-[#1ebd60]
                      focus:outline-offset-0 focus:outline-[#1ebd60]/20'
                      onBlur={() => setLocationFocus(false)}
                      ref={inputLocationRef}
                      type='text'
                      autoComplete='off'
                      placeholder='Type your location' />
                    <div className='absolute right-0 w-[30px] lg:w-10 h-[30px] lg:h-10 top-0 bottom-0 mx-2 flex items-center justify-center'>
                      <GeoIcon className="h-5 w-5 lg:w-6 lg:h-6"/>
                    </div>
                  </div>
                  { !locationFocus ?
                    <div className='w-full h-[30px] lg:h-full flex items-center justify-center border border-transparent lg:border-[#c5c5c5] rounded-md text-sm hover:cursor-pointer px-6'
                      onClick={ () => setLocationFocus(true) }>
                      <span className="icomoon icon-drop-off text-[32px] w-[30px] lg:w-8 h-[30px] lg:h-8 mx-1">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                      </span>
                      <span className='text-[#c5c5c5] text-xs lg:text-sm'>
                        Type your location
                      </span>
                    </div> : null
                  }
                </div>
              </div>
              <div className='flex-none'>
                <div className='h-7 lg:h-10 flex gap-3'>
                  <Link href={'#'} passHref>
                    <a className='bg-white px-2 md:px-3 text-[#676766] rounded border border-[#f0efef] font-medium text-xs h-full hidden lg:flex items-center'>
                      <CartDefault stroke='#676766' className='w-4 h-4' />
                    </a>
                  </Link>
                  <Link href={'#'} passHref>
                    <a className='bg-white px-2 md:px-3 text-[#676766] rounded border border-[#f0efef] font-medium text-xs h-full flex items-center'>
                      Login/Sign Up
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
  
}

export default Navbar