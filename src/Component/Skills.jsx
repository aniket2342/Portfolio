import React from 'react'
import { Element } from 'react-scroll';

const technologies = [
  {name:'HTML', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqgHRzcGTnpXJa4phkA-8WCs1ChnDjPkvBWQ&s'},
  {name:'CSS', image:'https://cdn.iconscout.com/icon/free/png-256/free-css-alt-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-2-pack-logos-icons-3029935.png?f=webp&w=256'},
  {name:'Tailwind CSS', image:'https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png'},
  {name:'JavaScript', image:'https://cdn.iconscout.com/icon/free/png-512/free-javascript-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-1-pack-logos-icons-3029998.png?f=webp&w=256'},
  {name:'React JS', image:'https://cdn.iconscout.com/icon/free/png-512/free-react-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-freebies-pack-logos-icons-1175109.png?f=webp&w=256'},
  {name:'GitHub', image:'https://cdn.iconscout.com/icon/free/png-512/free-github-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-721954.png?f=webp&w=256'},
];

function Skills() {
  return (
    <Element name='skills'>
      <div className="mt-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl">
          <h2 className='text-3xl sm:text-4xl mb-4 font-medium text-indigo-600 pt-10'>Skills</h2>
          <div className='mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 pb-5'>
            {technologies.map(({name, image}) => (
              <div key={name} className="flex flex-col items-center">
                <div className="bg-white rounded-full p-4 mb-2">
                  <img src={image} alt={name} className="w-20 h-20" />
                </div>
                <span className="text-sm text-white">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Skills