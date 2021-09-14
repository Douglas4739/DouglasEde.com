import React from "react";
import "./App.css";
import "./Contact.css";


function Contact() {
  return <div className='contact'>

<div class="container">
  <div className="row-header">
    <h1>CONTACT ME &nbsp;</h1>
    <h3>Fill out the form below to learn more!</h3>
  </div>
  <div className="row body">
    <form action="#">
      <ul className='form'>
        
        <li>
          <p class="left">
            <label for="first_name">First Name</label>
            <input type="text" name="first_name" placeholder="John" />
          </p>
          <p class="pull-right">
            <label for="last_name">Last Name</label>
            <input type="text" name="last_name" placeholder="Smith" />      
          </p>
        </li>
        
        <li>
          <p>
            <label for="email">Email <span class="req">*</span></label>
            <input type="email" name="email" placeholder="john.smith@gmail.com" />
          </p>
        </li>        
        <li><div class="divider"></div></li>
        <li>
          <label for="comments">Message</label>
          <textarea cols="46" rows="3" name="comments" placeholder="Say Hello!"></textarea>
        </li>
        
        <li>
          <input class="btn btn-submit" type="submit" value="Submit" />
        </li>
        
      </ul>
    </form>  
  </div>
</div>
    </div>;
}

export default Contact;
