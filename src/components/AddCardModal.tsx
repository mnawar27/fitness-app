import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import {Card } from '../interfaces/card';

export function AddCardModal({visible, setVisible, addCard}:
    {visible: boolean, setVisible:(b: boolean)=>void,
     addCard: (c: Card) => void}): JSX.Element{
        const [Prompt, setPrompt] = useState<string>("QUIZ TEXT");
        const [Answer, setAnswer] = useState<string>("ANSWER TEXT");

        function saveCard(){
            
            addCard({
                ID: Math.random(),
                Kind: "Custom",
                Prompt, Answer
            });
            setVisible(false);
        }

    const hide = () => setVisible(false); 
    return (
    <Modal show = {visible} onHide = {hide}>
    <Modal.Header closeButton>
      <Modal.Title>Add New Card</Modal.Title>
    </Modal.Header>
  
    <Modal.Body>
    <Form>
        <Form.Group className="mb-3" controlId="addCardForm.promptTextArea">
            <Form.Label>Quiz Question</Form.Label>
            <Form.Control as="textarea" rows={3}
                value={Prompt}
                onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>)=>setPrompt(ev.target.value)}/>
            
        </Form.Group>
        <Form.Group className="mb-3" controlId="addCardForm.answerTextAreas">
         <Form.Label>Suggested Answer</Form.Label>
         <Form.Control as="textarea" rows={3}
         value={Answer}
         onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>)=>setAnswer(ev.target.value)}/>
        </Form.Group>
    </Form>
    </Modal.Body>
  
    <Modal.Footer>
      <Button variant="secondary" onClick = {hide}>Close</Button>
      <Button variant="primary" onClick = {hide}>Save changes</Button>
    </Modal.Footer>
  </Modal>)
}