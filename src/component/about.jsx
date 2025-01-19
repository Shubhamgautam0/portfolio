import React from 'react'
import home1 from '../img/home1.jpg'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                        className='rounded-full'
                            src={home1} 
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Hi, I'm Shubham Gautam
                        </h2>
                        <p className="mt-6 text-gray-600">
                            I am a passionate web developer with a strong foundation in technology
                            and innovation. Having completed my B.Tech in Computer Science, I’ve dedicated
                            my journey to creating impactful and user-friendly digital experiences.
                        </p>
                        <h3 className="text-xs mt-1 text-gray-900 font-bold md:text-xl">
                            What I Do
                        </h3>
                        <p className="mt-1 text-gray-600">
                            I specialize in designing and developing responsive, dynamic,
                            and modern websites that not only look great but also deliver exceptional user experiences.
                        </p>
                        <h3 className="text-xs mt-1 text-gray-900 font-bold md:text-xl">
                            My Mission
                        </h3>
                        <p className="mt-1 text-gray-600">
                            To leverage my skills and creativity to build meaningful web solutions that
                            make a difference in the digital world.
                        </p>
                        <h3 className="text-xs mt-1 text-gray-900 font-bold md:text-xl">
                            Why Choose Me
                        </h3>
                        <ul className='list-disc ml-6'>
                            <li> <span className='font-bold'>Technical Expertise</span>
                                : With a solid academic background in computer science, I bring technical precision to every project.</li>

                            <li> <span className='font-bold'>User-Centric Approach</span>
                                : Every project I work on is crafted with the end-user in mind, ensuring accessibility, functionality, and engagement.</li>

                            <li> <span className='font-bold'>Passion for Innovation</span>
                                : I thrive on exploring new technologies and trends in web development to stay ahead of the curve.</li>
                        </ul>
                        <h3 className="text-xs mt-1 text-gray-900 font-bold md:text-xl">
                            What Drives Me
                        </h3>
                        <p className="mt-1 text-gray-600">
                            Web development is more than just a profession—it's my passion.
                            I love solving challenges, bringing ideas to life, and continuously learning to grow as a developer.
                        </p>
                        <h3 className="text-xs mt-1 text-gray-900 font-bold md:text-xl">
                            Let’s Connect
                        </h3>
                        <p className="mt-1 text-gray-600">
                            I’m always excited to collaborate and take on new challenges. Whether you’re looking
                            for a developer for your next project or just want to connect, feel free to reach out!

                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}