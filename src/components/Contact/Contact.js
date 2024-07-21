import React, { useState,useEffect } from "react";
import { ContactWrapper, Email } from "./ContactElements";
import { MdContentCopy } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from '@mui/material/Zoom';
import axios from "axios";

import ScrollAnimation from "react-animate-on-scroll";
function Contact() {
  
  const[mail,setMail]=useState('')
  const[a,seta]=useState(true)

  const handleSubmit=((e)=>{
    e.preventDefault()
    seta(!a)
    try{
      axios.post('http://localhost:3001/app/mail',{mail})
      .then((res)=>{
        if(res.data==='post'){
          alert('posted')
        }
      })
      setMail('')
    }
    catch{
     console.log('hi')
    }
  })


  return (
    <ContactWrapper id="contact">

      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <ScrollAnimation animateIn="fadeIn" >
          <div className="Big">
            <Email>
              <div>
              <form onSubmit={((e)=>handleSubmit(e))}>
            
            <input className="cont" type='text'placeholder="Enter your mail id" value={mail} onChange={((e)=>setMail(e.target.value))}/>
            <button className="but" type='submit'>Submit</button>
      </form>
               </div>
            </Email>
          </div>
        </ScrollAnimation>

      </div>
    </ContactWrapper>
  );
}

export default Contact;
