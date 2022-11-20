import React from 'react'
import Image from 'next/image'
import Mine from '../public/valed-611.JPEG'
import Code from './Code'
import Stack from './Stack'
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

const Hero = () => {

    function url() {

        location.href = 'https://docs.google.com/document/d/1EbnsdaB0v52x3RfdkSJyBoZStEMx5Jo8QghPrIYseqA/edit?usp=sharing';

    }
    return (
        <div className="hero  max-h-full sm:min-h-screen " >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold " >Hello there</h1>
                    <p className="mb-5">Highly dedicated Software developer with over 4+ years of experience in Frontend, mobile development, and UI / UX Design</p>
                    <div className="mockup-code shadow-xl dark:shadow-green-600 ">
                        <pre data-prefix="$"><code>npm i valentineejk</code></pre>
                        <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
                        <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
                    </div>



                    <button className="btn btn-primary m-6  shadow-xl dark:shadow-green-600" onClick={ () => url() }>Resume</button>
                </div>
            </div>
        </div>



    )
}

export default Hero
