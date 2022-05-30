import React from 'react';

const FeaturesCard = () => {
    return (
        <div className='flex flex-col items-center justify-center space-y-6'>
            <h1 className='font-serif text-3xl font-bold'>Features</h1>

            <div className='flex flex-row items-center justify-center space-x-12 border-2 border-black rounded-3xl mx-20 p-5'>
                <div className='flex flex-col items-center justify-center'>
                    <div className="w-40 h-40 rounded-full bg-gray-100"></div>
                    <h1 className='text-center text-2xl font-serif font-medium'>Create your card<br /> in just 5 mins</h1>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className="w-40 h-40 rounded-full bg-gray-100"></div>
                    <h1 className='text-center text-2xl font-serif font-medium'>Customize the Text<br /> with "Edit this Page" Option</h1>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className="w-40 h-40 rounded-full bg-gray-100"></div>
                    <h1 className='text-center text-2xl font-serif font-medium'>Editing is available<br /> after purchase also</h1>
                </div>
            </div>
        </div>
    )
}

export default FeaturesCard;