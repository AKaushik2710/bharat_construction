import { Link } from "react-router-dom"
import {Div, Para, Span, Input, Button, Header, Card, ProjectCard, Carousel, Footer, Form} from "../Components/Assembler";

export default function Contact(){
    return <Div cn="font-display relative h-lvh w-screen overflow-y-auto overflow-x-hidden bg-black">
            <Header />
            <Div cn="h-2/3 w-full flex md:justify-around justify-evenly bg-black text-white overflow-y-hidden">
                <Span cn="md:text-8xl hidden md:block font-extrabold text-center rl rotate-180 fadeInfinite bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-white bg-clip-text text-transparent">Contact</Span>
                <Span cn="md:text-8xl hidden md:block font-extrabold text-center rl rotate-180 fadeInfinite bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-white bg-clip-text text-transparent">US</Span>
                <Div cn="flex flex-col justify-center items-center h-full w-1/7 md:hidden">
                    <Span cn="text-3xl contact">C</Span>
                    <Span cn="text-3xl contact">o</Span>
                    <Span cn="text-3xl contact">n</Span>
                    <Span cn="text-3xl contact">t</Span>
                    <Span cn="text-3xl contact">a</Span>
                    <Span cn="text-3xl contact">c</Span>
                    <Span cn="text-3xl contact">t</Span>
                    <Span cn="text-3xl contact mt-5">U</Span>
                    <Span cn="text-3xl contact">S</Span>
                </Div>
                <Form />
            </Div>
            <Footer />
        </Div>
}