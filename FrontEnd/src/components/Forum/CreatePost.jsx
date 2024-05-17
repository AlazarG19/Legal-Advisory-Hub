import React from 'react'
import AddQuestionModal from "./Elements/AddQuestionModal"
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
            <FormControl placeholder="Search for questions" />
            <Button variant="primary" onClick={handleSearch}>Search</Button>
          </InputGroup>
            <AddQuestionModal/>
            
        </Col>
      </Row>
        </>
    )
}

export default CreatePost