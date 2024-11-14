import React from 'react'
import Button from '../../components/Button'

const HomeBanner = () => {
  return (
    <div className="pt-154 pb-80 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/banner.jpg')` }}>
         <div className='max-w-container mx-auto'>
            <div className='relative'>
              <div className='absolute right-0 px-10 pt-60 pb-10 bg-bannerBox'>
                     <span className='text-base text-smallText font-semibold tracking-[3px] capitalize'>New Arrival</span>
                     <h2 className='text-52 text-boxH w-460 font-bold leading-[65px] capitalize pt-[4px] pb-[17px]'>Discover Our  New Collection</h2>
                     <p className='text-lg text-smallText w-546 font-medium leading-6 pb-[46px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                     <Button className="py-[25px] px-[75px] bg-boxH text-white" btntxt="BUY NOW"/>
              </div>
            </div>
         </div>
    </div>
  )
}

export default HomeBanner