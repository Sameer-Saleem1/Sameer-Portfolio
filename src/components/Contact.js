import React ,{useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import LoadingBar from 'react-top-loading-bar'

export default function Contact() {

  const [data,setData] = useState({
    name: "",
    email: "",
    message:""
  })

  const {name,email,message} = data;

  const handleChange  = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch('https://v1.nocodeapi.com/sameersaleem/google_sheets/ZMXLAjHJGsxIXBfO', {
        method: 'POST', 
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify([
          [name, email, message, new Date().toLocaleString()],
        ]),
      }
      );
        await response.json()
          setData({...data, name:"", email:"", message:""})
      }
     catch (err) {
      console.log(err)     
    }
  }
  

  const [progress, setProgress] = useState(0)

  return (
    <div>

    <LoadingBar
      color='#397080'
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
      height={3}
      waitingTime={500}
      style={
        {
          top: "fixed"
          
        }
      }
    />

      <div className='contact-section'>
        <h1 className='contact-title'>Contact Me</h1>
        <h3>For business inquiries or discussions regarding potential projects, please feel free to contact me using the form below. Your input is invaluable, and I am eager to explore opportunities for meaningful partnerships. I appreciate your time and look forward to the prospect of working together.</h3>
        <Form onSubmit={handleSubmit}>
          <h2 style={{color:'#397080'}} >Contact Form</h2>
          <label>Your Name</label>
          <input type='text' onChange={handleChange} name='name'></input>

          <label>Email</label>
          <input type='email' onChange={handleChange} name='email'></input>

          <label>Message</label>
          <textarea name='message' onChange={handleChange} rows={6} placeholder='Type your message'/>

          <Button onClick={() => setProgress(100)} className='btn'>Submit</Button>
        </Form>
      </div>
    </div>
  )
}