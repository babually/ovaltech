import { createFileRoute, } from '@tanstack/react-router'
import {Code, Computer, Figma, GitBranch, Github, Globe, Laptop, Paintbrush, Server, ShieldCheck, Smartphone,  } from 'lucide-react';

export const Route = createFileRoute('/services')({
  component: ServicesComponent
});

const logos = [
    <Code className="h-10 w-10"/>,
    <Smartphone className="h-10 w-10"/>,
    <Laptop className="h-10 w-10"/>,
    <Computer className="h-10 w-10"/>,
    <Github className="h-10 w-10"/>,
    <Paintbrush className="h-10 w-10"/>,
    <Globe className="h-10 w-10"/>,
    <GitBranch className="h-10 w-10"/>,
    <Server className="h-10 w-10"/>,
    <ShieldCheck className="h-10 w-10"/>,
    <Figma className="h-10 w-10"/>,
]

function ServicesComponent() {
    return (
        <div>
            {/* Hero Section */}
            <div className='py-20'>
                <div className='relative xl:container m-auto px-6 md:px-12 lg:px-6'>
                    <h1 className='text-wrap text-5xl underline text-left pb-8'>Our Services </h1>
                    <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white">
                        Run successful remote and <br className="lg:block hidden" /> 
                        <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary dark:from-primaryLight dark:to-secondaryLight">Hybrid teams</span>.
                    </h1>
                    <div className='lg:flex text-white'>
                        <div className='relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12'>
                            <p className="sm:text-lg lg:w-11/12">
                                DailyBot takes chat and collaboration to the next level: daily standups, team check-ins, surveys, kudos, best companion bot for your virtual watercooler, 1:1 intros, motivation tracking and more.
                            </p>
                            <span className="block font-bold text-white text-xl">
                                The best companion for your Business achievement.
                            </span>
                            {/* Animated Logo */}
                            <div className="relative items-center m-auto w-[500px] overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:content-['']">
                                <div className="animate-infinite-slider flex w-[calc(250px*10)]">
                                    {logos.map((logo, index) => (
                                        <div
                                            className="slide flex w-[180px] items-center justify-center"
                                            key={index}
                                        >
                                            {logo}
                                        </div>
                                    ))}
                                    {logos.map((logo, index) => (
                                        <div
                                            className="slide flex w-[180px] items-center justify-center"
                                            key={index}
                                        >
                                            {logo}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* End Animated Logo */}
                        </div>
                    </div>
                </div>
            </div>

            {/* End Herp Section */}
            


        </div>
    );
}
