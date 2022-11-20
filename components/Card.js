import React from 'react'
import Image from 'next/image'

const Card = ({ img, desc, name, link, tech1, tech2, tech3, tech4 }) => {
    return (
        <div className="card w-86 sm:w-96 bg-base-100 shadow-xl m-6 dark:shadow-green-600">
            <figure>
                <Image
                    alt="prooject"
                    src={ img }
                    width="540"
                    height="400"
                    objectFit="cover"

                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    { name }
                    <div className="badge badge-secondary"> <a href={ link }>View</a></div>
                </h2>
                <p>{ desc }</p>
                <div className="card-actions justify-start">
                    <div className="badge badge-outline">{ tech1 }</div>
                    <div className="badge badge-outline">{ tech2 }</div>
                    <div className="badge badge-outline">{ tech3 }</div>
                    <div className="badge badge-outline">{ tech4 }</div>

                </div>
            </div>
        </div>
    )
}

export default Card