import plate from '@/assets/images/plate.png'

const Banner = () => {
    return (
        <div className='flex justify-between pt-[24px] items-center flex-col gap-[25px] lg:flex-row lg:gap-0'>
            <div>
                <h1 className='text-3xl lg:text-7xl lg:leading-[80px] font-bold text-white text-center lg:text-left'>
                    Delight
                    <div>
                        in every bite!
                    </div>
                </h1>
                <h2 className='text-xl lg:text-3xl lg:leading-10 text-white mt-2'>Delivering happiness,
                    <span className='underline whitespace-nowrap'> on time.</span>
                </h2>
            </div>

            <div className='aspect-[444/384] w-[222px] lg:w-[444px]'>
                <img className='w-full h-full object-cover' src={plate}/>
            </div>
        </div>
    )
}

export default Banner;