import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { CartDefault, GeoIcon } from '../utils/icomoon'
import { classNames } from '../utils/functions'

const Navbar = () => {
  const [locationFocus, setLocationFocus] = useState(false)
  const inputLocationRef = useRef(null);

  useEffect(() => {
    if (locationFocus) {
      inputLocationRef.current.focus();
    }
    
  }, [locationFocus]);

  return (
      <navbar className='z-[99] sticky top-0'>
        <div className='bg-white '>
          <div className='w-full max-w-7xl my-0 mx-auto'>
            <div className='px-3 md:px-9 lg:px-10 flex items-center justify-between h-[88px]'>
              <div className='flex items-center'>
                <div className='flex-none'>
                  <Link href={'#'} passHref>
                    <a className='h-[50px] overflow-hidden flex'>
                      <Image
                          className='h-10 mx-auto lg:mr-0'
                          src='/logo-grabfood2.svg'
                          alt='GrabFood logo'
                          height={'100%'}
                          width={'142px'}
                          priority
                      />
                    </a>
                  </Link>
                </div>
                <div className='w-full min-w-[360px] max-w-[360px] mx-[50px] h-10'>
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
                    'relative'
                    )}>
                    <span className="icomoon icon-drop-off text-[32px] mx-1 absolute h-10 w-10 flex items-center justify-center left-1">
                      <span className="path1"></span>
                      <span className="path2"></span>
                      <span className="path3"></span>
                    </span>
                    <input
                      className='location-input w-full border-[#c5c5c5] rounded-md text-sm h-10 placeholder:text-[#9a9a9a] px-12 focus:border-[#1ebd60]
                      focus:outline-offset-0 focus:outline-[#1ebd60]/20'
                      onBlur={() => setLocationFocus(false)}
                      ref={inputLocationRef}
                      type='text'
                      autoComplete='off'
                      placeholder='Type your location' />
                    <div className='absolute right-0 h-10 w-10 top-0 bottom-0 mx-2 flex items-center justify-center'>
                      <GeoIcon className="h-6 w-6"/>
                    </div>
                  </div>
                  { !locationFocus ?
                    <div className='w-full h-full flex items-center justify-center border border-[#c5c5c5] rounded-md text-sm hover:cursor-pointer px-6'
                      onClick={ () => setLocationFocus(true) }>
                      <span className="icomoon icon-drop-off text-[32px] mx-1">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                      </span>
                      <span className='text-[#c5c5c5]'>
                        Type your location
                      </span>
                    </div> : null
                  }
                </div>
              </div>
              <div className='flex-none'>
                <div className='h-10 flex gap-3'>
                  <Link href={'#'} passHref>
                    <a className='bg-white px-2 md:px-3 text-[#676766] rounded border border-[#f0efef] font-medium text-xs h-full flex items-center'>
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
      </navbar>
  );
  
}

export default Navbar