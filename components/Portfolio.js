import React from 'react'
import Image from 'next/image'
import Flutter from '../public/flutter.svg'
import React1 from '../public/React.svg'
import Tw from '../public/tw.svg'
import Firebase1 from '../public/firebase1.svg'
import Swift1 from '../public/swift1.svg'

const Portfolio = () => {
    const port = [
        {
            name: "john",
            img: Flutter,
            desc: "smdsjk",
            year: "2022",
            tech: "React",
            tech2: "monogodb"

        },
        {
            name: "john",
            img: Flutter,
            desc: "smdsjk",
            year: "2022",
            tech: "React",
            tech2: "monogodb"

        }, {
            name: "john",
            img: Flutter,
            desc: "smdsjk",
            year: "2022",
            tech: "React",
            tech2: "monogodb"

        },
        {
            name: "john",
            img: Flutter,
            desc: "smdsjk",
            year: "2022",
            tech: "React",
            tech2: "monogodb"

        },
        {
            name: "john",
            img: Flutter,
            desc: "smdsjk",
            year: "2022",
            tech: "React",
            tech2: "monogodb"

        },



    ]
    return (
        <div className=" hero min-h-screen">


            <div className="grid  place-items-center  ">
                <h1 className="text-4xl font-bold text-center  pb-12">Projects</h1>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 place-content-center  ">



                    { port.map((work) => (
                        <>

                            <div className="card w-96 bg-base-100 shadow-sm m-6 shadow-purple-300 dark:shadow-purple-200 ">
                                <figure>
                                    {/* <img src="https://placeimg.com/400/225/arch" alt="Shoes" /> */ }
                                    <Image
                                        alt="prooject"
                                        src={ work.img }
                                        width="600"
                                        height="400"
                                        objectFit="fit"

                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        { work.name }
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p>{ work.desc }</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">{ work.tech }</div>
                                        <div className="badge badge-outline">{ work.tech2 }</div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )) }




                </div>
            </div>
        </div>

    )
}

export default Portfolio
