import {Div} from "../Components/Assembler";

export default function ProjectCard({title, src}){
    return <Div cn="h-2/3 mx-5 mb-3 md:h-full">
        <Div cn="h-3/4 w-full">
            <img className="h-full w-full object-fill" src={src}></img>
        </Div>
        <h2 className="h-1/5 py-3 font-bold text-xl text-center">{title}</h2>
    </Div>
}