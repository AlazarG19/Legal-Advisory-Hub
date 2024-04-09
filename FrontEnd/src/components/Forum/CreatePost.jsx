import React from 'react'
import Modal from "./Elements/AddQuestionModal"
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
function CreatePost() {

    const handleSearch = (e) => {
        e.preventDefault();
        // Handle search functionality here
      };
    
      const handleAskQuestion = () => {
        // Handle ask question functionality here
      };
    return (
        <>
        
        <Row className="mt-5">
        <Col  className="mx-auto">
          <InputGroup className="mb-3">
            <FormControl placeholder="Search for posts" />
            <Button variant="primary" onClick={handleSearch}>Search</Button>
          </InputGroup>
            <Modal/>
        </Col>
      </Row>
        </>
    )
}

export default CreatePost