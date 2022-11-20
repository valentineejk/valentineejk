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
            name: "GoalsApp",
            img: "https://i.ibb.co/N7Wrm5V/Goal-Setter-App.png",
            desc: "A react app where each user can set goals and perform crud operations",
            tech1: "React",
            tech2: "Nodejs",
            tech3: "MongoDB",
            tech4: "Redux",
            link: "https://goalsetterapi1.herokuapp.com/"

        },
        {
            name: "Space",
            img: "https://iili.io/HHn7RK7.png",
            desc: "Social Media App",
            tech1: "React",
            tech2: "Firebase",
            tech3: "yup",
            tech4: "TypeScript",
            link: "https://social-media-82aab.web.app/"

        },

    ]


    return (
        <div>
            <h1 className="text-4xl font-bold  text-center m-16 ">Projects</h1>


            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 place-content-center '>

                {
                    port.map((item) => (
                        <>
                            <div className='hero min-w-screen'>
                                <Card key={ item.id } name={ item.name } img={ item.img } desc={ item.desc } link={ item.link } tech1={ item.tech1 } tech2={ item.tech2 } tech3={ item.tech3 } tech4={ item.tech4 } />
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default Portfolio
