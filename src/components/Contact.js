import React from 'react'
import { Button, Form } from 'react-bootstrap'

export default function Contact() {
  return (
    <div>
      <div className='contact-section'>
        <h1 className='contact-title'>Contact Me</h1>
        <h3>For business inquiries or discussions regarding potential projects, please feel free to contact me using the form below. Your input is invaluable, and I am eager to explore opportunities for meaningful partnerships. I appreciate your time and look forward to the prospect of working together.</h3>
        <Form>
          <h2 style={{color:'#397080'}} >Contact Form</h2>
          <label>Your Name</label>
          <input type='text'></input>

          <label>Email</label>
          <input type='email'></input>

          <label>Subject</label>
          <input type='text'></input>

          <label>Message</label>
          <textarea rows={6} placeholder='Type your message'/>

          <Button className='btn'>Submit</Button>
        </Form>
      </div>
    </div>
  )
}