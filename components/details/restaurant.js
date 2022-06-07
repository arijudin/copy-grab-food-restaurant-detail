import { Fragment, useState, useEffect } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import axios from 'axios'
import { PreveredIcon, StarIcon, PromoTagIcon, InfoIcon, ClockIcon, CevronRight, CalendarIcon } from '../../utils/icomoon'
import { getTimeDelivery, getDateDelivery } from '../../utils/functions'

const restaurantDetailsURL = '/api/restaurant-details'

const RestaurantDetail = () => {
	const [restaurant, setRestaurant] = useState([])
  const [deliveryDate, setDeliveryDate] = useState([])
  const [deliveryTime, setDeliveryTime] = useState([])
  const [selectedDate, setSelectedDate] = useState([])
  const [selectedTime, setSelectedTime] = useState([])
  const [isOpenDate, setIsOpenDate] = useState(false)
  const [isOpenTime, setIsOpenTime] = useState(false)

  useEffect(() => {
    const getRestaurantDetail = async () => {
      const res = await axios.get(`${restaurantDetailsURL}`)

      try {
        const response = res.data
        const restaurantDetail = response.pageRestaurantDetail
        
        if (response) {
          setRestaurant(restaurantDetail)

          const getTimeDeliveryData = getTimeDelivery(restaurantDetail.openingHours.displayedHours)
          const now = [['Now', null]]
          getTimeDeliveryData = now.concat(getTimeDeliveryData)
          
          setDeliveryTime(getTimeDeliveryData)
          setSelectedTime(getTimeDeliveryData[0])
          
          const getDateDeliveryData = getDateDelivery(restaurantDetail.openingHours.displayedHours)
          const today = ['Today']
          getDateDeliveryData = today.concat(getDateDeliveryData)
  
          setDeliveryDate(getDateDeliveryData)
          setSelectedDate(getDateDeliveryData[0])
        }

      } catch (error) {
      }
    }
    
    const fetchDataRestaurant = async () => {
      await getRestaurantDetail()
    }
    fetchDataRestaurant()
  }, [])

  return (
    <>
      { restaurant.merchant_info ?
        <div className='flex gap-[5px] mt-4 mb-[6px]'>
          <PreveredIcon />
          <span className='text-xs font-medium text-[#00b14f]'>{ restaurant.merchant_info.preferred }</span>
        </div> : null
      }
      <h1 className='text-4xl font-medium leading-[48px] mb-[2px]'>
        { restaurant.name }
      </h1>
      <div className='text-[#676767] text-sm my-2'>
        { restaurant.cuisine }
      </div>
      <div className='flex items-center text-sm text-[#676767]'>
        <div className='flex items-center gap-[10px] mr-11'>
          <StarIcon />
          { restaurant.rating }
        </div>
        <div className=''>
          { `${restaurant.distanceInKm} km` }
        </div>
      </div>
      { restaurant.common ? 
        <div className='flex items-center text-sm text-[#676767] my-2'>
          <div className='font-medium mr-[42px]'>
            { restaurant.common.opening_hours }
          </div>
          <div className=''>
            { `${restaurant.common.today}` }&nbsp;&nbsp;{ `${restaurant.openingHours.displayedHours}` }
          </div>
        </div> : null
      }
      { restaurant.campaigns ? 
        <div className='flex text-sm'>
          <div className=''>
            { restaurant.campaigns.slice(0, 2).map((campaign) => (
              <div className='flex items-center' key={campaign.ID}>
                <PromoTagIcon />
                <span className='ml-2 mr-4'>{ campaign.name }</span>
              </div>
            ))}
          </div>
          <div className='text-[#00a5cf] font-medium hover:cursor-pointer self-end pb-[2px]'>
            See More
          </div>
        </div> : null
      }
      { restaurant.sofConfiguration ?
        <div className='flex items-center text-sm'>
          <InfoIcon className='w-6 h-6' />
          <span className='ml-2 mr-4'>{ restaurant.sofConfiguration.tips }</span>
        </div> : null
      }
      <div className='grid grid-cols-3 gap-4 mt-3 mb-6'>
        <div>
          <style jsx>{
            `
              .duration .times:last-child:before {
                content: '-';
                margin: 0 2px;
              }
            `
          }</style>
          <Listbox value={selectedDate} onChange={setSelectedDate}>
            <div className='relative mt-1'>
              <Listbox.Button className={`relative w-full cursor-pointer rounded-lg bg-white border hover:border-[#1ebd60] text-sm text-[#1c1c1c] h-12
              focus-visible:border-[#1ebd60] focus-visible:outline-offset-2 focus-visible:outline-[#1ebd60]/20 flex items-center ${isOpenDate ? 'border-[#1ebd60] outline-2 outline-offset-0 outline-[#1ebd60]/20' : 'border-[#f0efef]' }`}
              onClick={() => (setIsOpenDate(!isOpenDate), setIsOpenTime(false))}
              >
                <span className='pointer-events-none ml-[11px] mr-[10px]'>
                  <CalendarIcon />
                </span>
                <span className='flex truncate items-center justify-start'>
                  <span>{`${selectedDate == 'Today' ? 'Delivery Date: Today' : selectedDate}`}</span>              
                </span>
                <span className='pointer-events-none ml-[11px] mr-[11px] absolute right-0 top-0 bottom-0 flex items-center'>
                  <CevronRight className={`w-3 h-3 transition-all ease-in-out duration-300 ${ isOpenDate ? 'rotate-[270deg]' : 'rotate-90'}`} />
                </span>
              </Listbox.Button>
              <Transition
                onBlur={() => setIsOpenDate(!isOpenDate)}
                as={Fragment}
                leave='transition ease-linear duration-300'
                leaveFrom='opacity-100 h-full'
                leaveTo='opacity-0 h-0'
              >
                <Listbox.Options className='absolute z-[4] mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
                  onBlurCapture={() => setIsOpenDate(false)}>
                  { deliveryDate.map((delivery, key) => (
                    <Listbox.Option
                      key={key}
                      className={({ active }) =>
                        `relative flex items-center cursor-default select-none py-[5px] h-[42px] px-3 pr-4 text-[#1c1c1c] ${
                          active ? 'bg-[#d8f0df] cursor-pointer' : ''
                        }`
                      }
                      value={delivery}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-bold' : 'font-normal'
                            }`}
                          >
                            <div>
                              <div className='flex duration'>
                                <span>{delivery}</span>
                              </div>
                            </div>
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
        <div>
          <style jsx>{
            `
              .duration .times:last-child:before {
                content: '-';
                margin: 0 2px;
              }
            `
          }</style>
          <Listbox value={selectedTime} onChange={setSelectedTime}>
            <div className='relative mt-1'>
              <Listbox.Button className={`relative w-full cursor-pointer rounded-lg bg-white border hover:border-[#1ebd60] text-sm text-[#1c1c1c] h-12
              focus-visible:border-[#1ebd60] focus-visible:outline-offset-2 focus-visible:outline-[#1ebd60]/20 flex items-center ${isOpenTime ? 'border-[#1ebd60] outline-2 outline-offset-0 outline-[#1ebd60]/20' : 'border-[#f0efef]' }`}
              onClick={() => (setIsOpenTime(!isOpenTime), setIsOpenDate(false))}
              >
                <span className='pointer-events-none ml-[11px] mr-[10px]'>
                  <ClockIcon />
                </span>
                <span className='flex truncate items-center justify-start duration'>
                { selectedTime.map((splice, i) => (
                  <div key={i} className={`times ${splice ? '' : 'hidden'}`}>
                    <span>{`${splice == 'Now' ? 'Delivery Time: Now' : splice}`}</span>              
                  </div>
                )) }
                </span>
                <span className='pointer-events-none ml-[11px] mr-[11px] absolute right-0 top-0 bottom-0 flex items-center'>
                  <CevronRight className={`w-3 h-3 transition-all ease-in-out duration-300 ${ isOpenTime ? 'rotate-[270deg]' : 'rotate-90'}`} />
                </span>
              </Listbox.Button>
              <Transition
                onBlur={() => setIsOpenTime(!isOpenTime)}
                as={Fragment}
                leave='transition ease-linear duration-300'
                leaveFrom='opacity-100 h-full'
                leaveTo='opacity-0 h-0'
              >
                <Listbox.Options className='absolute z-[4] mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
                  onBlurCapture={() => setIsOpenTime(false)}>
                  { deliveryTime.map((delivery, key) => (
                    <Listbox.Option
                      key={key}
                      className={({ active }) =>
                        `relative flex items-center cursor-default select-none py-[5px] h-[42px] px-3 pr-4 text-[#1c1c1c] ${
                          active ? 'bg-[#d8f0df] cursor-pointer' : ''
                        }`
                      }
                      value={delivery}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-bold' : 'font-normal'
                            }`}
                          >
                            <div>
                              <div className='flex duration'>
                                { delivery.map((splice, i) => (
                                  <div key={i} className={`times ${splice ? '' : 'hidden'}`}>
                                    <span>{splice}</span>              
                                  </div>
                                )) }
                              </div>
                            </div>
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>
    </>
  )
}

export default RestaurantDetail