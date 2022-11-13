import React from 'react'
import Image from 'next/image'
import Flutter from '../public/flutter.svg'
import React1 from '../public/React.svg'
import Tw from '../public/tw.svg'
import Firebase1 from '../public/firebase1.svg'
import Swift1 from '../public/swift1.svg'





const stack = [
    { img: Flutter },
    { img: React1 },
    { img: Tw },
    { img: Swift1 }, { img: Firebase1 },


]


const Stack = () => {
    return (
        <>

            <div className=" grid  place-items-center h-56 " >

                <h1 className="text-4xl font-bold m-6">Tech Stack</h1>
                <div div className="avatar grid grid-cols-4 sm:grid-cols-5 gap-4 place-content-center h-48">

                    { stack.map((stacks) => (

                        <div className="w-24  shadow-sm rounded-[20px] dark:shadow-purple-200 " key={ stacks.img }>
                            <Image
                                alt="valentine"
                                src={ stacks.img }
                                width={ 100 }
                                height={ 100 }
                            />

                        </div>
                    )) }
                </div >


            </div >


        </>
    )
}

export default Stack
