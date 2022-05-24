import React from "react";
import Accordion from 'react-bootstrap/Accordion'
import {
    Button,
    InputGroup,
    FormControl,
    Container,
    Row,
    Col,
  } from "react-bootstrap";

export default function WorkPage() {

    return(
        <Accordion>
            <Accordion.Item eventKey="0" flush>
                <Accordion.Header>광업</Accordion.Header>
                <Accordion.Body>
                    <Button>
                        일하기
                    </Button>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" flush>
                <Accordion.Header>농업</Accordion.Header>
                <Accordion.Body>
                    <Button>
                        일하기
                    </Button>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" flush>
                <Accordion.Header>어업</Accordion.Header>
                <Accordion.Body>
                    <Button>
                        일하기
                    </Button>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
    

}