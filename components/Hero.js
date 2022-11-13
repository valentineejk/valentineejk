import React from 'react'
import Image from 'next/image'
import Mine from '../public/valed-611.JPEG'
import Code from './Code'

const Hero = () => {

    function url() {

        location.href = 'https://docs.google.com/document/d/1EbnsdaB0v52x3RfdkSJyBoZStEMx5Jo8QghPrIYseqA/edit?usp=sharing';

    }
    return (
        <div className="hero min-h-screen" >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold " >Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <div className="mockup-code shadow-sm shadow-purple-300 dark:shadow-purple-200 ">
                        <pre data-prefix="$"><code>npm i valentineejk</code></pre>
                        <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
                        <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
                    </div>
                    <button className="btn btn-primary m-6  shadow-sm shadow-purple-400 dark:shadow-purple-200 " onClick={ () => url() }>Resume</button>
                </div>
            </div>
        </div>

    )
}

export default Hero
