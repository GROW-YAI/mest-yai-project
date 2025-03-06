import React from "react";
import './Innovator.css'

const Innovator = () =>{
    return(
        <section className="bg-gray-100 py-12 px-6 text-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">About the Innovator</h2>
                <p className="text-gray-600 text-lg">
                    Meet [Innovator's Name], the visionary behind [Product/Service Name]. With a passion for innovation and a
                    track record of success, [he/she/they] have dedicated [his/her/their] career to pushing boundaries and
                    creating impactful solutions.
                </p>
                <p className="text-gray-600 text-lg mt-4">
                    [Innovator's Name] believes in the power of technology and creativity to transform industries. With years of
                    experience in [Industry/Field], [he/she/they] continue to drive forward with a mission to improve lives and
                    businesses through cutting-edge solutions.
                </p>
            </div>
        </section>
    )
}

export default Innovator;