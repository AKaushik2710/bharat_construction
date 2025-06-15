import { useState, useRef, useEffect } from "react";
import {Div, Para, Span, Input, Button} from "../Components/Assembler";


export default function Carousel(){
    const CarouselStates = [
    {
        description : "A quick note to say what a great job done by Bharat Construction, they are great to work with, and between you all you did a great job. You should be very proud of your business and team.",
        position : "Director",
        company : "JMC Ltd."
    },
    {
        description : "We are incredibly grateful for Bharat Construction's professionalism and expertise. They turned our complex requirements into a seamless reality.",
        position : "Manager",
        company : "MMA Ltd."
    },
    {
        description : "Our deepest thanks to Bharat Construction for their innovative approach. They provided solutions where others saw obstacles, ensuring our project's success.",
        position : "Chairman",
        company : "BMJ Ltd."
    }
]
    const [count, setCount] = useState(0);
    const intervalRef = useRef();
    const [animation, setAnimation] = useState("fadeIn");
    useEffect(()=>{
        intervalRef.current = setInterval(()=>{
            handleNext();
        }, 3000);
        return ()=> clearInterval(intervalRef.current);
    },[])
    function handlePrev(){
        setCount(prevState => prevState===0? 2 : prevState-1);
        animation==="fadeIn"?setAnimation("fadeOut"): null;
    }
    function handleNext(){
        setCount(nextState => nextState===2? 0 : nextState+1);
        animation==="fadeOut"?setAnimation("fadeIn"):null;
    }
    return <Div cn="md:w-2/3 w-full mx-3 h-2/3 relative self-end md:self-center font-title">
            <Div cn="absolute w-full h-full bg-transparent flex justify-between items-center md:items-end md:justify-end md:px-5">
                <Button cn="text-2xl md:text-4xl md:mr-6 rounded-[50%] md:hover:bg-black md:hover:text-white py-1 md:px-3 transition-all duration-300 ease cursor-pointer" onClick={handlePrev}>{"<"}</Button>
                <Button cn="text-2xl md:text-4xl md:ml-6 rounded-[50%] md:hover:bg-black md:hover:text-white py-1 md:px-3 transition-all duration-300 ease cursor-pointer" onClick={handleNext}>{">"}</Button>
            </Div>
            <Div cn="h-full w-full overflow-hidden flex flex-col items-center justify-center md:justify-around  font-edu">
                <Div cn="flex justify-center items-center mb-5 md:h-1/5 ">
                    <h2 className="md:text-6xl text-xl font-extrabold font-display">What our Clients Say:-</h2>
                </Div>
                <Div key={CarouselStates[count].position+count} cn={animation}>
                    <Para cn="text-xs md:text-2xl px-6 ">{CarouselStates[count].description}</Para>
                    <Para cn="text-xs text-black/50 md:text-lg px-6 pt-3">{CarouselStates[count].position}</Para>
                    <Para cn="text-[0.65rem] text-black/50 md:text-sm px-6 pt-1">{CarouselStates[count].company}</Para>
                </Div>
            </Div>
            </Div>
}