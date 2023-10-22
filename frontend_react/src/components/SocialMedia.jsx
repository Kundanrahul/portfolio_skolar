import React from 'react';
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai' 
import {SiGeeksforgeeks} from 'react-icons/si';

const SocialMedia = () =>{
  return (
    <div className='app__social'>
         <div>
          <a  target="_blank" href="https://github.com/Kundanrahul">
          <AiFillGithub />
          </a>
         </div>
         <div>
           <a target="_blank" href="https://www.linkedin.com/in/rahul-kundan-63b4b3248/">
            <AiFillLinkedin/>
           </a>
        </div>

        <div>
           <a target="_blank" href="https://auth.geeksforgeeks.org/user/rahulkundan/">
            <SiGeeksforgeeks/>
           </a>
        </div>
        
    </div>
  )
}

export default SocialMedia