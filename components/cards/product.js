import Image from 'next/image'
import { Plus } from '../../utils/icomoon'
import { classNames } from '../../utils/functions'

function ProductCard(props) {
  const data = props

  const checkAvailable = (available) => {
    if (!available) return <div className='absolute top-0 right-0 bottom-0 left-0 bg-white z-[1] opacity-50 rounded-[5px] pointer-events-none cursor-default'></div>
  }

  const formatter = (val) => {
    const newVal = (parseInt(val)).toLocaleString('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }); 

    return newVal
  }
  
  return (
      <div className="bg-white rounded-[5px] p-0 lg:p-4 lg:hover:p-[15px] lg:hover:border hover:border-[#10b65b] flex gap-4 h-full relative">
        {checkAvailable(data.available)}
        <div className='h-[97px] w-[97px] md:h-[130px] md:w-[130px] lg:h-[120px] lg:w-[120px] flex-none rounded-[5px] overflow-hidden'>
          <Image
            className='flex-none'
            src={data.imgHref}
            alt={data.name}
            height={'120px'}
            width={'120px'}
            priority
          />
        </div>
        <div className='flex flex-col w-full text-left'>
          <div className=''>
            <p className='leading-[1.5] '
              dangerouslySetInnerHTML={{
                __html: data.name
              }}>
            </p>
            <p className={ classNames(
                data.description ? 'mt-[6px]' : '',
                'text-sm text-[#9a9a9a] break-words'
              )}
              dangerouslySetInnerHTML={{
                __html: data.description
              }}>
            </p>
          </div>
          <div className='flex items-end justify-between h-full mt-3 lg:mt-0'>
            <div className='mt-3 lg:mt-0'>
              { data.discounted >= 1 ?
                <div className='flex items-center text-[#b7b7b7]'>
                  <span className='text-[#f38621] text-[10px] leading-[10px] lg:leading-4 lg:text-xs font-medium bg-[#f386214d] px-[2px] lg:px-1 py-[2px] rounded-sm'>{ `Save ${formatter(data.discounted.toString().slice(0, -2))}` }</span>
                  <span className='line-through ml-1 text-xs'>{ data.price }</span>
                </div> : null
              }
              <div className='font-medium px-[6px] lg:px-0'>
                {data.discountedPrice}
              </div>
            </div>
            <div className='w-[30px] h-[30px] inline-flex items-center justify-center bg-[#00b14f] rounded-sm mx-[6px] lg:mx-0'>
              <Plus 
                className='w-4 h-4'
                fill='#ffffff'
                />
            </div>
          </div>
        </div>
      </div>
  );
  
}

export default ProductCard