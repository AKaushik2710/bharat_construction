import {Div, Para, Span, Input, Button, Header, Card, ProjectCard, Carousel, Footer} from "../Components/Assembler";
import { WTP, ERT, Quality, Building } from "../Components/Svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../index.css'

export default function Home(){
    return <>
    <Div cn="font-display relative h-lvh w-screen overflow-y-auto overflow-x-hidden bg-pink-300">
        <Header />
        <Div cn="h-5/10 md:h-9/10 w-full relative">
            <Div cn="absolute top-10 left-5 md:left-10 jump transition-all duration-300 ease">
                <Para cn="md:text-8xl text-2xl text-cyan-500">Water</Para>
            </Div>
            <Div cn="absolute top-10 left-[30%] md:left-[30%] jump transition-all duration-300 ease">
                <Para cn="md:text-8xl text-2xl bg-gradient-to-r from-black to-cyan-500 bg-clip-text text-transparent">Treatment</Para>
            </Div>
            <Div cn="absolute top-10 left-[65%] md:left-[70%] jump transition-all duration-300 ease">
                <Para cn="text-cyan-500 text-center md:text-8xl text-2xl ">Projects</Para>
            </Div>
            <img className="h-full w-full object-fill" src="https://ptc-parforce.de/wp-content/uploads/klaeranlage-deutschland-abwasser-1024x685.jpg"></img>
        </Div>
        
        <Div cn="md:h-8/5 overflow-y-auto flex flex-col justify-center items-center bg-black text-white">
            <Div cn="h-1/5 w-3/4 flex justify-start items-end">
                <h2 className="text-xl md:text-6xl my-12 md:mb-12">Our Values</h2>
            </Div>
            <Div cn="flex flex-col md:flex-row h-3/5 w-3/4">
                <Card title="Mastering Infrastructure Development" text="Bharat Construction is an experienced EPC contractor, distinguished by our successful track record in delivering diverse infrastructure projects, driven by our deep expertise, rigorous project management, and pioneering innovative techniques."><Building /></Card>
                <Card title="Clean Water, Our Mission" text="Bharat Construction engineers a healthier planet. Our profound expertise and innovative techniques ensure the successful delivery of vital water treatment projects, turning complex issues into sustainable clean water solutions"><WTP /></Card> 
                <Card title="Uncompromising Quality" text="Bharat Construction upholds uncompromising quality standards across all projects. Our commitment ensures every component, process, and final delivery meets the highest benchmarks, resulting in lasting value and exceptional performance for our clients."><Quality /></Card>
                <Card title="Leading with Knowledge" text="At Bharat Construction, our projects are shaped by industry leaders. We pride ourselves on having expert personnel with deep domain knowledge and diverse experiences, committed to delivering cutting-edge and efficient engineering solutions"><ERT /></Card>
            </Div>
            <Div cn="h-auto w-3/4 flex flex-col md:flex-row mt-12 mb-6">
                <Div cn="h-full w-full md:w-2/3 flex flex-col justify-start">
                    <h2 className="text-2xl md:text-5xl mb-2">Who We Are</h2>
                    <Para cn="text-sm mb-2 w-full md:w-2/3 md:text-xl text-balance p-2"><Span cn="text-fuchsia-400/75">Bharat Construction</Span> is an experienced and dynamic EPC Company. It is managed by a group of highly trained specialists and environmental engineers with multidisciplinary skills and a varied spectrum of experiences. Our Company provides turnkey solutions to water and wastewater challenges with expertise in Municipal Water Treatment Plants, Industrial Effluent Treatment, Sewage Treatment Plants, Desalination, Water Recycling & Reuse, Zero Liquid Discharge (ZLD) Systems, and specialized solutions for various industrial processes.</Para>
                    <Button cn="mb-2 w-1/3 md:w-1/5 hover:text-white hover:bg-black hover:shadow-lg hover:shadow-white cursor-pointer mx-3 p-1 rounded-2xl text-sm bg-white text-black">Read More</Button>
                </Div>
                <Div cn="h-full w-full md:w-1/3">
                    <img className="h-full w-full object-fill" src="https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?cs=srgb&dl=bucket-bulldozer-clouds-1078884.jpg&fm=jpg"></img>
                </Div>
            </Div>
        </Div>
        <Div cn="h-3/2 bg-black text-white overflow-y-auto md:overflow-hidden flex flex-col justify-start items-center relative">
            <Div cn="h-1/4 w-full md:w-3/4 flex pl-7 md:pl-14 font-extrabold  justify-start items-center">
                <h2 className="text-3xl md:text-5xl">Our Projects</h2>
            </Div>
            <Div cn="h-3/4 w-full md:w-4/5 flex flex-col md:grid md:grid-cols-3 md:gap-4">
                <ProjectCard title="Industrial" src="https://5.imimg.com/data5/SELLER/Default/2024/12/471266321/LW/VH/IV/59144526/industrial-construction-projects.jpg"/>
                <ProjectCard title="Hotels & Malls " src="https://img.freepik.com/premium-photo/modern-shopping-mall-construction-with-innovative-design-stateoftheart-facilities_1327465-8875.jpg?w=360"/>
                <ProjectCard title="Roads & Bridges" src="https://www.fluidconstructions.com/wp-content/uploads/2024/05/shutterstock_108982223-1024x756.jpg"/>
                <ProjectCard title="Hospitals" src="https://media.istockphoto.com/id/157279602/photo/construction-site.jpg?s=612x612&w=0&k=20&c=fGrSuh9qtWE292UljlpgOjbsBtgeyqcN7rHYm31wJMk="/>
                <ProjectCard title="Housing Society" src="https://maparcassociates.com/wp-content/uploads/2025/05/Re-development-of-Co-op-housing-societies-in-Mumbai-1024x700.jpg"/>
                <ProjectCard title="Water Treatment" src="https://wtp-operators.thewaternetwork.com/storage2/bZLl7vOopy4JrRaPcpkKDMxNPW_bQk5ALNocVql8tv5lMhq8NZsqYJkEu3pa4LIM-CVePCkPh3JgRXlmWMq2Nu5_eeBFLLPl69bxIfowddDOJeWP2iCk-bL5KJSD2f_d"/>
            </Div>
        </Div>
        <Div cn="h-full w-full bg-black flex justify-center items-center">
            <Div cn="h-full w-4/5 md:w-3/4 bg-cyan-400 translate-y-1/6 grid grid-cols-1 md:grid-cols-3 gap-4 px-2">
                <Div cn="flex w-full mt-2 h-full justify-center items-center md:px-5">
                    <h2 className="w-1/3 text-center text-4xl md:text-6xl font-extrabold">10+</h2>
                    <Div cn="flex flex-col px-4 md:ml-5">
                        <Para cn="w-2/3 text-sm md:text-lg opacity-50">Projects</Para>
                        <h4 className="font-bold text w-2/3 md:text-xl">Rs. 400 Cr Completed</h4>
                    </Div>
                </Div>
                <Div cn="flex w-full mt-2 h-full justify-center items-center md:px-5">
                    <h2 className="w-1/3 text-center text-4xl md:text-6xl font-extrabold">8+</h2>
                    <Div cn="flex flex-col px-4 md:ml-5">
                        <Para cn="w-2/3 text-sm md:text-lg opacity-50">Projects</Para>
                        <h4 className="font-bold text w-2/3 md:text-xl">Under Execution</h4>
                    </Div>
                </Div>
                <Div cn="flex w-full mt-2 h-full justify-center items-center md:px-5">
                    <h2 className="w-1/3 text-center text-4xl md:text-6xl font-extrabold">210+</h2>
                    <Div cn="flex flex-col px-4 md:ml-12">
                        <Para cn="w-2/3 text-sm md:text-lg opacity-50">Crore</Para>
                        <h4 className="font-bold text w-2/3 md:text-xl">Order Book In Hand</h4>
                    </Div>
                </Div>
                <Div cn="flex w-full mt-2 h-full justify-center items-center md:px-5">
                    <h2 className="w-1/3 text-center text-4xl md:text-6xl font-extrabold">10+</h2>
                    <Div cn="flex flex-col px-4 md:ml-5">
                        <Para cn="w-2/3 text-sm md:text-lg opacity-50">Locations</Para>
                        <h4 className="font-bold text w-2/3 md:text-xl">PAN India</h4>
                    </Div>
                </Div>
                <Div cn="flex w-full mt-2 h-full justify-center items-center md:px-5">
                    <h2 className="w-1/3 text-center text-4xl md:text-6xl font-extrabold">40+</h2>
                    <Div cn="flex flex-col px-4 md:ml-5">
                        <Para cn="w-2/3 text-sm md:text-lg opacity-50 text-center">Deployed</Para>
                        <h4 className="font-bold text w-2/3 text-center md:text-xl">Machines & Equipments</h4>
                    </Div>
                </Div>
                <Div cn="flex w-full mt-2 h-full justify-center items-center md:px-5">
                    <h2 className="w-1/3 text-center text-4xl md:text-6xl font-extrabold">20+</h2>
                    <Div cn="flex flex-col px-4 md:ml-5">
                        <Para cn="w-2/3 text-sm md:text-lg opacity-50 text-center">Deployements Due</Para>
                        <h4 className="font-bold text w-2/3 md:text-xl text-center">Machines & Equipments</h4>
                    </Div>
                </Div>
            </Div>
        </Div>
        <Div cn="w-full md:h-full h-2/3 bg-white z-10 flex items-center justify-center">
            <Carousel />
        </Div>
        <Div cn="w-full h-full flex flex-col justify-center items-center bg-white text-black overflow-y-auto">
            <Div cn="h-1/4 w-2/3 flex items-center text-4xl md:items-end justify-center">
                <h2 className="h-2/4 md:text-6xl">Our Clients</h2>
            </Div>
            <Div cn="h-2/3 w-2/3 grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-3">
                <Div cn="h-full w-full flex justify-center items-center">
                    <img className="h-2/3 w-2/3 object-fill" src="https://www.shaktiinfraprojects.com/img/c1.jpg"></img>
                </Div>
                <Div cn="h-full w-full flex justify-center items-center">
                    <img className="h-2/3 w-2/3 m-auto object-fill" src="https://www.shaktiinfraprojects.com/img/c5.jpg"></img>
                </Div>
                <Div cn="h-full w-full flex justify-center items-center">
                    <img className="h-2/3 w-2/3 object-fill" src="https://www.shaktiinfraprojects.com/img/c3.jpg"></img>
                </Div>
                <Div cn="h-full w-full flex justify-center items-center">
                    <img className="h-2/3 w-2/3 object-fill" src="https://www.shaktiinfraprojects.com/img/c6.jpg"></img>
                </Div>
                <Div cn="h-full w-full flex justify-center items-center">
                    <img className="h-2/3 w-2/3 object-fill" src="https://www.shaktiinfraprojects.com/img/c8.jpg"></img>
                </Div>
                <Div cn="h-full w-full flex justify-center items-center">
                    <img className="h-2/3 w-2/3 object-fill" src="https://www.shaktiinfraprojects.com/img/c7.jpg"></img>
                </Div>
            </Div>
        </Div>
        <Footer />
    </Div>
    </>
}