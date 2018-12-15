import React from 'react';
import { Form, FormGroup, Label, Button, Input } from 'reactstrap';

export default () => (
  <Form>
    <FormGroup>
      <Label for="name" className="sr-only">
        Name
      </Label>
      <Input
        type="text"
        name="name"
        id="name"
        placeholder="Your Name"
        required
      />
    </FormGroup>
    <FormGroup>
      <Label for="email" className="sr-only">
        Email
      </Label>
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="Your Email Address"
      />
    </FormGroup>
    <FormGroup>
      <Label for="subject" className="sr-only">
        Subject
      </Label>
      <Input
        type="text"
        name="subject"
        id="subject"
        placeholder="Message Subject"
        required
      />
    </FormGroup>
    <FormGroup>
      <Label for="message" className="sr-only">
        Message
      </Label>
      <Input
        type="textarea"
        name="message"
        id="message"
        rows="5"
        placeholder="Type Your Message Here..."
        required
      />
    </FormGroup>
    <div className="d-flex justify-content-center mb-3">
      <Button className="button--submit">Submit</Button>
    </div>
  </Form>
);
