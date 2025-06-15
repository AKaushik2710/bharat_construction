import {Div, Para, Span, Input, Button} from "../Components/Assembler";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { useState, useReducer } from "react";

const initialState={
    nav : false,
    investor : false
}
function handleToggle(state,action){
    switch(action.type){
        case "nav":{
            return {...state, nav : !state.nav, investor: false}
        }
        case "investor":{
            return {...state, investor: !state.investor}
        }
            
    }
}

export default function Header(){
    const [toggle, dispatch] = useReducer(handleToggle, initialState)
    // const [toggle, setToggle] = useState({nav: true, invest:false});

    const handleToggling = (type)=>{
        dispatch({type : type});
    }
    return <header className="w-full z-10 h-1/10 sticky top-0 transition-all duration-500 ease border-b-1 flex justify-between items-center bg-black text-white px-3">
            <h2 className="text-sm md:text-xl w-2/3 md:w-1/6 ">Bharat Construction</h2>
            <nav className="w-3/5 h-full hidden md:flex justify-around items-center">
                <Link to={"/"} className="group transition-all duration-300 ease h-full hover:shadow-xl hover:shadow-white w-1/5 flex justify-center items-center">
                    <Span cn="group-hover:text-xl transition-all duration-300 ease">Home</Span>
                </Link>
                {/* <Link to={"/about"}className="group transition-all duration-300 ease h-full hover:shadow-xl hover:shadow-white w-1/5 flex justify-center items-center">
                    <Span cn="group-hover:text-xl transition-all duration-300 ease">About</Span>
                </Link> */}
                <Link to={"/investors"} className="group relative transition-all duration-300 ease h-full hover:shadow-xl hover:shadow-white w-1/5 flex justify-center items-center">
                    <Span cn="group-hover:text-xl transition-all duration-300 ease">Investors
                        {/* <Div cn="flex flex-col group-hover:block hidden w-full text-sm left-0 top-full ease absolute p-2 bg-black">
                            <Link to={"1"}><Div cn="text-center transition-all duration-300 ease hover:text-xl hover:text-pink-400 py-1">1</Div></Link>
                            <Link to={"/2"}><Div cn="text-center transition-all duration-300 ease hover:text-xl hover:text-pink-400 py-1">2</Div></Link>
                            <Link to={"/3"}><Div cn="text-center transition-all duration-300 ease hover:text-xl hover:text-pink-400 py-1">3</Div></Link>
                        </Div> */}
                    </Span>
                </Link>
                <Link to={"/contact"} className="group transition-all duration-300 ease h-full hover:shadow-xl hover:shadow-white w-1/5 flex justify-center items-center">
                    <Span cn="group-hover:text-xl transition-all duration-300 ease">Contact</Span>
                </Link>
                <Link to={"/services"} className="group transition-all duration-300 ease h-full hover:shadow-xl hover:shadow-white w-1/5 flex justify-center items-center">
                    <Span cn="group-hover:text-xl transition-all duration-300 ease">Services</Span>
                </Link>
            </nav>
            <Button cn="text-sm w-1/5 md:block hidden transition-all duration-300 ease p-2 cursro-pointer hover:text-xl font-bold " onClick={e => navigator.clipboard.writeText(e.target.textContent)}>+91 9991133941</Button>
            <Div cn="text-white relative w-1/3 md:hidden flex justify-end items-center">
                <Button cn="text-white" onClick={()=> handleToggling("nav")}><FontAwesomeIcon icon={faBars} /></Button>
                {toggle.nav && <nav className="w-full md:hidden absolute top-full -right-3 flex  flex-col p-2 bg-black justify-around items-center">
                <Link to={"/"} className="transition-all duration-300 ease h-full hover:shadow-white w-full flex justify-center items-center py-1">
                    <Span cn="text-sm">Home</Span>
                </Link>
                {/* <Link className="h-full hover:shadow-xl hover:shadow-white w-full flex justify-center items-center py-1">
                    <Span cn="text-sm">About</Span>
                </Link> */}
                <Link to={"/investors"} className="group relative transition-all duration-300 ease h-full hover:shadow-xl hover:shadow-white flex justify-center items-center py-1">
                    <Span cn="text-sm" onClick={()=> handleToggling("investor")}>Investors
                        {/* {toggle.investor && <Div cn="flex flex-col w-full text-xs -left-5/4 top-1/2 absolute bg-black">
                            <Div cn="text-center active:text-fuchsia-300 py-2">1</Div>
                            <Div cn="text-center active:text-fuchsia-300 py-2">2</Div>
                            <Div cn="text-center active:text-fuchsia-300 py-2">3</Div>
                        </Div>} */}
                    </Span>
                </Link>
                <Link to={"/contact"} className="group transition-all duration-300 ease h-full hover:shadow-xl hover:shadow-white w-full flex justify-center items-center py-1">
                    <Span cn="text-sm">Contact</Span>
                </Link>
                <Link to={"/services"} className="group transition-all duration-300 ease h-full hover:shadow-xl hover:shadow-white w-full flex justify-center items-center py-1">
                    <Span cn="text-sm">Services</Span>
                </Link>
            </nav>}
            </Div>
        </header>
}