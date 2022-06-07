import Image from 'next/image'
import { Plus } from '../../utils/icomoon'
import { classNames } from '../../utils/functions'

function ProductCard(props) {
  const data = props

  const checkAvailable = (available) => {
    if (!available) return <div className='absolute top-0 right-0 bottom-0 left-0 bg-white z-[1] opacity-50 rounded-[5px] pointer-events-none cursor-default'></div>
  }

  return (
      <div className="bg-white rounded-[5px] p-4 hover:p-[15px] hover:border hover:border-[#10b65b] flex gap-4 h-full relative">
        {checkAvailable(data.available)}
        <div className='h-[120px] w-[120px] flex-none rounded-[5px] overflow-hidden'>
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
          <div className='flex items-end justify-end h-full'>
            <div className='w-[30px] h-[30px] inline-flex items-center justify-center bg-[#00b14f] rounded-sm'>
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