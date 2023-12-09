import React from 'react'

const Result = ({ data }) => {
    return (
        <div className='w-full flex flex-col gap-5 justify-center px-5 md:px-20 pb-5'>
            <h3 className='font-bold text-center text-2xl lg:text-4xl'>Here are Matching books</h3>
            <div className='shadow-lg rounded-lg py-5 border-2 border-gray-200 '>
                <div className='grid sm:grid-cols-3 lg:grid-cols-4 grid-cols-2 p-5 md:p-10 gap-5'>
                    {data?.length ?
                        data?.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className='flex flex-col gap-2 items-center font-medium text-[#1a2656]'
                                >
                                    <img src={item.imageLink} width={70} height={100} />
                                    <p className=' md:text-sm text-xs'>{item.title}</p>

                                </div>
                            )
                        })
                        :
                        <span>No data found</span>
                    }
                </div>
            </div>
        </div>

    )
}

export default Result