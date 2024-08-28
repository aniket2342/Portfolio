import React from 'react'
import { Element } from 'react-scroll';
import Project1 from '../assets/project1.png';
import Project2 from '../assets/Capture.jpg';
import Project3 from '../assets/project3.jpeg';
import Project4 from '../assets/project4.jpg';
import Project5 from '../assets/project5.jpg';

const cards = [
  { image: Project1, description: 'BarberShop Management', link:'https://github.com/aniket2342/Barbershop-Management' },
  { image: Project2, description: 'Celebritylist', link:'https://taskfactwise1.netlify.app/' },
  { image: Project3, description: 'Digital-Agency', link:'https://aniket2342.github.io/Digital_agency/' },
  { image: Project4, description: 'Clone SpaceX', link:'https://github.com/aniket2342/spacexclone' },
  { image: Project5, description: 'Clone Tesla', link:'https://aniket2342.github.io/Tesla-Clone/' },
];

function Project() {
  return (
    <Element name='projects'>
      <div className="mt-40 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 py-8 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-xl">
          <h2 className='text-3xl sm:text-4xl mb-4 font-medium text-indigo-700'>Projects</h2>
          <p className='text-lg sm:text-xl mb-4 font-medium text-white pt-2'>Have a look over my projects</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {cards.map(({ image, description, link }, index) => (
              <div key={index} className="border border-white rounded-lg">
                <img src={image} alt={`Project ${index + 1}`} className="w-full h-48 object-cover rounded-lg mb-4" />
                <p className="text-white text-sm">{description}</p>
                <a href={link} className='text-indigo-800 text-sm 'target='blank'>Learn More</a>
              </div>
            ))}
          </div>
          <div className='mt-10'>
            <p className='text-2xl text-white font-semibold pb-5'>Got an idea? We've got the skills. Let's team up</p>
            <p className='text-2xl text-white font-semibold'>Tell us more about yourself and your idea.</p>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Project