import React from 'react'
import Image from 'next/image'

const Card = ({ img, desc, name, link }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <Image
                    alt="prooject"
                    src={ img }
                    width="600"
                    height="400"
                    objectFit="fit"

                />          </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{ name }</h2>
                <p>{ desc }</p>
                <div className="card-actions">
                    <button className="btn btn-primary mt-2"><a href={ link }>View</a> </button>
                </div>
            </div>
        </div>
    )
}

export default Card