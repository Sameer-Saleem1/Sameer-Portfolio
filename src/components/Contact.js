import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import LoadingBar from "react-top-loading-bar";

export default function Contact() {
  const [progress, setProgress] = useState(0);

  return (
    <div id="contact">
      <LoadingBar
        color="#397080"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        height={3}
        waitingTime={500}
        style={{
          top: "fixed",
        }}
      />

      <div className="contact-section">
        <h1 className="contact-title">Contact Me</h1>
        <h3>
          For business inquiries or discussions regarding potential projects,
          please feel free to contact me using the form below. Your input is
          invaluable, and I am eager to explore opportunities for meaningful
          partnerships. I appreciate your time and look forward to the prospect
          of working together.
        </h3>
        <Form>
          <h2 style={{ color: "#397080" }}>Contact Form</h2>
          <label>Your Name</label>
          <input type="text" name="name"></input>

          <label>Email</label>
          <input type="email" name="email"></input>

          <label>Message</label>
          <textarea name="message" rows={6} placeholder="Type your message" />

          <Button onClick={() => setProgress(100)} className="btn">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
