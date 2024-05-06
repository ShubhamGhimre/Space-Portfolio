"use client";
import Image from 'next/image';
import React from 'react'

interface Props {
    src: string;
    title: string;
    description: string;
    link: string;
}

const ProjectCard = ({ src, title, description,link }: Props) => {
    return (
        <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]'>
            <Image 
                src={src}
                alt={title}
                width={1000}
                height={1000}
                className='w-full object-cover'
            />
            <div className='relative p-4'>
                <h2 className='text-2xl font-semibold text-white'>{title}</h2>
                <p className='mt-2 text-gray-300'>{description}</p>
                <a href={link} className='text-xl mt-4 text-blue-300 hover:text-green-50'>View Git Repository</a>
            </div>


        </div>
    )
}

export default ProjectCard