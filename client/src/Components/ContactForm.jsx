import { useRef } from "react";
import {Div, Para, Span, Input, Button} from "../Components/Assembler";

export default function Form(){
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const subjectRef = useRef();
    const contactRef = useRef();
    const handleSubmit = async (e) => {
    e.preventDefault();
    // setStatus('Sending...');

    try {
      const res = await fetch('/api/email-sender', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: nameRef.current.value,
          email: emailRef.current.value,
          subject: subjectRef.current.value,
          message: messageRef.current.value,
          contact: contactRef.current.value
        })
      });

      if (res.ok) {
        // setStatus('Email sent successfully!');
        console.log('Email sent successfully!');
        // setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // const data = await res.json();
        // setStatus(`Error: ${data.message}`);
        console.error('Error sending email:', res.statusText);
      }
    } catch (err) {
      console.error(err);
    //   setStatus('Error sending email');
    }
  };

    return <form className="h-full w-2/3 p-5 flex flex-col" onSubmit={handleSubmit}>
        <Div cn="md:grid md:grid-cols-2 flex flex-col md:h-1/2">
            <Div cn=" md:h-2/3 grid items-center h-1/4 md:p-4 p-1">
                <Input label="name" holder="John Doe..." ref={nameRef} labelText="Name" cnLabel="md:text-xl text-sm" cnInput="md:text-sm text-xs md:p-3 p-2 placeholder:text-cyan-100/25 rounded-sm border-1 border-white/25 caret-cyan-300 focus:outline-cyan-300 h-2/3 md:w-2/3 w-full"></Input>
            </Div>
            <Div cn=" md:h-2/3 grid items-center md:p-4 p-1">
                <Input label="name" holder="example@gmail.com" ref={emailRef} labelText="E-mail" cnLabel="md:text-xl text-sm" cnInput="md:text-sm text-xs placeholder:text-cyan-100/25 md:p-3 p-2 rounded-sm border-1 border-white/25 caret-cyan-300 focus:outline-cyan-300 h-2/3 md:w-2/3 w-full"></Input>
            </Div>
            <Div cn=" md:h-2/3 grid items-center md:p-4 p-1">
                <Input label="name" holder="12345 67890" ref={contactRef} labelText="Contact No." cnLabel="md:text-xl text-sm" cnInput="md:text-sm text-xs placeholder:text-cyan-100/25 md:p-3 p-2 rounded-sm border-1 border-white/25 caret-cyan-300 focus:outline-cyan-300 h-2/3 md:w-2/3 w-full"></Input>
            </Div>
            <Div cn=" md:h-2/3 grid items-center md:p-4 p-1">
                <Input label="name" holder="Regarding Construction" ref={subjectRef} labelText="Subject" cnLabel="md:text-xl text-sm" cnInput="md:text-sm text-xs placeholder:text-cyan-100/25 md:p-3 p-2 rounded-sm border-1 border-white/25 caret-cyan-300 focus:outline-cyan-300 h-2/3 md:w-2/3 w-full"></Input>
            </Div>
        </Div>
        <Div cn="flex flex-col justify-around h-1/2 md:px-4 px-1">
            <Div cn="md:h-4/5 h-full md:grid md:grid-cols-6 flex flex-col justify-around md:items-center items-start">
                <textarea ref={messageRef} className="md:h-full border-1 border-white/25 h-2/3 w-full md:col-span-4 resize-none md:p-3 p-1 caret-cyan-300 focus:outline-cyan-300" placeholder="Message...."></textarea>
                <Button cn="border-2 h-1/5 md:h-1/3 md:p-3 md:col-start-6 hover:bg-cyan-300 hover:text-white border-white/25 font-extrabold w-1/3 md:w-2/3 text-sm md:text-lg" type="submit">Send</Button>
            </Div>

        </Div>
    </form>
}