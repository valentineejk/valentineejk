import React from 'react'
import Image from 'next/image'
import Mine from '../public/valed-611.JPEG'
import Code from './Code'

const Hero = () => {

    function url() {

        location.href = 'https://docs.google.com/document/d/1EbnsdaB0v52x3RfdkSJyBoZStEMx5Jo8QghPrIYseqA/edit?usp=sharing';

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <Image
                        alt="valentine"
                        src={ Mine }
                        width={ 260 }
                        height={ 400 }
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    {/* <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" /> */ }
                    <div>
                        <h1 className="text-4xl font-bold">Frontend / Mobile Engineer</h1>
                        <Code />
                        {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */ }
                        <button className="btn btn-primary" onClick={ () => url() }>Resume</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
