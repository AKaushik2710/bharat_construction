import {Div, Para, Span, Input, Button} from "../Components/Assembler";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
export default function Footer(){
    return <footer className="overflow-y-auto md:overflow-y-hidden h-4/3 md:h-2/3 bg-black text-white">
        <Div cn="h-9/10 grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-center px-3 ">
        <Div cn="h-1/2 mx-3">
            <h2 className="text-xl justify-self-center mb-3 md:text-3xl font-title font-extrabold">Bharat Construction</h2>
            <Para cn="text-sm text-white/50 md:w-4/5 md:justify-self-center md:pt-12">At <Span cn="text-fuchsia-400/75">Bharat Construction</Span>, we pledge to build not just structures, but legacies. Our commitment to unparalleled quality, meticulous craftsmanship, and enduring precision ensures every project stands as a testament to our dedication and your vision.</Para>
        </Div>
        <Div cn="h-1/2 grid grid-cols-1">
            <h2 className="text-xl justify-self-center mb-3 md:text-3xl">Quick Links</h2>
            <Div cn="grid grid-cols-2 gap-5 text-sm mt-3 text-white/50 md:grid-cols-1">
            <Link to={"/"} className="text-center hover:text-white shadow-lg hover:shadow-fuchsia-300/50 md:w-1/3 justify-self-center transition-all duration-400 ease "><Span>Home</Span></Link>
            <Link to={"/investors"} className="text-center hover:text-white shadow-lg hover:shadow-fuchsia-300/50 md:w-1/3 justify-self-center transition-all duration-400 ease "><Span>Investors</Span></Link>
            <Link to={"/services"} className="text-center hover:text-white shadow-lg hover:shadow-fuchsia-300/50 md:w-1/3 justify-self-center transition-all duration-400 ease "><Span>Services</Span></Link>
            <Link to={"/contact"} className="text-center hover:text-white shadow-lg hover:shadow-fuchsia-300/50 md:w-1/3 justify-self-center transition-all duration-400 ease "><Span>Contact</Span></Link>
            </Div>
        </Div>
        <Div cn="h-1/2 grid grid-cols-1 gap-3 mx-3">
            <h2 className="text-xl justify-self-center mb-3 md:text-3xl">Contact</h2>
            <Para cn="text-sm text-white/75 md:w-4/5 md:justify-self-center md:pt-4">Co-Founder:<Span cn="text-white/50 md:pl-4">Naveen</Span></Para>
            <Para cn="text-sm text-white/75 md:w-4/5 md:justify-self-center">Address:<Span cn="text-white/50 md:pl-4" onClick={e => navigator.clipboard.writeText(e.target.textContent)}>A-50, OPP. PNB Bank, SEC-7, Rohini, New Delhi-110085</Span></Para>
            <Para cn="text-sm text-white/75 md:w-4/5 md:justify-self-center">Email:<Span cn="text-white/50 md:pl-4" onClick={e => navigator.clipboard.writeText(e.target.textContent)} >bharatconstructionsnp@gmail.com</Span></Para>
            <Para cn="text-sm text-white/75 md:w-4/5 md:justify-self-center">Phone:<Span cn="text-white/50 md:pl-4" onClick={e => navigator.clipboard.writeText(e.target.textContent)} >+91 9991133941</Span></Para>
        </Div>
        </Div>
        <Para cn="text-center mt-12 md:mt-0 text-white/25">Copyright <FontAwesomeIcon icon={faCopyright} /> All Rights Reserved</Para>
    </footer>
}