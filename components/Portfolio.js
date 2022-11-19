import React from 'react'
import Image from 'next/image'
import Flutter from '../public/flutter.svg'
import React1 from '../public/React.svg'
import Tw from '../public/tw.svg'
import Firebase1 from '../public/firebase1.svg'
import Swift1 from '../public/swift1.svg'
import Card from './Card'

const Portfolio = () => {
    const port = [
        {
            name: "GoalSetter App",
            img: "https://i.ibb.co/N7Wrm5V/Goal-Setter-App.png",
            desc: "React | Nodejs | MongoDB | Redux",
            link: "https://goalsetterapi1.herokuapp.com/"

        },
        {
            name: "mark",
            img: React1,
            desc: "smdsjk",

        },
    ]


    return (
        <div>
            <h1 className="text-4xl font-bold  text-center mb-16 ">Projects</h1>


            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 place-content-center '>

                {
                    port.map((item) => (
                        <>
                            <div className='hero min-w-screen'>
                                <Card key={ item.id } name={ item.name } img={ item.img } desc={ item.desc } link={ item.link } />
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default Portfolio
