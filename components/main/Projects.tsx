import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects: React.FC = () => {
    return (
        <div className='flex flex-col items-center justify-center py-20' id='projects'>
            <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>My Projects</h1>
            <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
                <ProjectCard
                    src='/projects/E-store.png'
                    title='Interactive E-commerce platform'
                    description='A modern website built with PhP and my sql for an online store'
                    link="https://github.com/shubhamghimire99/E-store" // Use double quotes for string literal
                />
                <ProjectCard
                    src='/projects/Promptopia.png'
                    title='an AI prompt sharing website for sharing quearies and answers'
                    description='A modern website built with Next.js and Tailwind CSS'
                    link="https://github.com/shubhamghimire99/promptopia"
                />
                <ProjectCard
                    src='/projects/Carhub.png'
                    title='Modern Next.js Website'
                    description='A modern website built with Next.js and Tailwind CSS for a car rental company'
                    link=""
                />


            </div>

        </div>
    )
}

export default Projects