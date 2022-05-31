import React from 'react';
import BG1 from '../assets/Background.jpg';
import Page1 from '../assets/Page1.jpg';
import Page2 from '../assets/Page2.jpg';
import Page3 from '../assets/Page3.jpg';

const BannerCard = () => {
    return (
        <div className='h-screen'>
            <div className='h-96 mx-20 mt-12 rounded-3xl relative flex flex-col items-center justify-between'
                style={{ backgroundImage: `url(${BG1})` }}
            >
                <h1 className='text-3xl text-white font-serif font-bold text-center p-5'>
                    Digital Card Details
                </h1>

                <div className='absolute p-2 top-1/3 h-auto w-4/5 border-2 border-black bg-white rounded-3xl flex flex-row items-center justify-center'>
                    <div className='flex flex-row items-center p-5 relative'>
                        <img className='h-64 w-40 relative' src={Page1} alt='img1' />
                        <img className='h-56 w-40 absolute left-12' src={Page2} alt='img2' />
                        <img className='h-48 w-40 absolute left-24' src={Page3} alt='img3' />
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <div className=''>
                            <h1 className=''>Card Title</h1>
                        </div>
                        <div className=''>
                            <h1 className=''>$499 <span className=''>$2000</span></h1>
                            <h1 className=''>75% Off</h1>
                        </div>
                        <div className=''>
                            <p className=''>
                                Donec eu ornare mi. Sed finibus condimentum mauris, ut dictum eros maximus vitae. Nullam condimentum tortor ac elit feugiat iaculis. Aenean mauris nisl, blandit
                            </p>
                        </div>
                        <button className='' type='button'>
                            Try this Card
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerCard;