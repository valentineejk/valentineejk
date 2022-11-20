import React from 'react'
import Image from 'next/image'
import Flutter from '../public/flutter.svg'
import React1 from '../public/React.svg'
import Tw from '../public/tw.svg'
import Firebase1 from '../public/firebase1.svg'
import Mongo from '../public/mongo.svg'
import Nodejs from '../public/nodejs.svg'
import Expressjs from '../public/expressjs.svg'
import Reduxjs from '../public/redux.svg'








const stack = [
    { img: Flutter },
    { img: React1 },
    { img: Tw },
    { img: Firebase1 },
    { img: Mongo },
    { img: Nodejs },
    { img: Expressjs },
    { img: Reduxjs },





]


const Stack = () => {
    return (
        <div className="h-96">
            <div className=" grid place-items-center " >
                <h1 className="text-4xl font-bold m-16  ">Tech Stack</h1>
                <div div className="avatar grid grid-cols-4 sm:grid-cols-4 gap-4 place-content-center h-48 ">

                    { stack.map((stacks) => (

                        <div className="sm:w-24 w-16  rounded-[20px] shadow-xl" key={ stacks.img }>
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


        </div>
    )
}

export default Stack
