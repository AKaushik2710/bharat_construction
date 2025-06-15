import {Div, Span, Para} from "./Assembler";

export default function Card(props){
    const {title, text, children} = props;
    return <Div cn="w-full md:w-1/5 mx-auto md:h-full h-1/4 flex flex-col group transition-all duration-500 ease md:hover:bg-white bg-white text-black md:bg-black md:text-white rounded-xl md:hover:text-black mb-3">
        <Div cn="h-1/4 flex justify-center items-center">
            {children}
        </Div>
        <h4 className="h-1/6 my-3 font-bold text-sm md:text-xl px-2 text-center">{title}</h4>
        <Para cn="h-1/4 text-balance text-xs md:text-sm px-2 mb-2 text-center">{text}</Para>
        <Div cn="h-1/4 flex justify-start items-end px-2 mb-2">
            <Span cn="mr-5 transition-all duration-500 text-xs ease font-bold active:bg-black active:text-white p-2 group-hover:bg-black group-hover:text-white rounded-xl cursor-pointer">Read More</Span>
        </Div>
        
    </Div>
}