import React from 'react'
import { Form, Stack, Col, Row, Container, Card } from "react-bootstrap"
import { useNoteProvider } from '../context/NoteContext'
import { Link } from "react-router-dom"

const SearchNote: React.FC = () => {
    const { searchByTitle, searchNote, openSingleNoteDesciption } = useNoteProvider()
    return (
        <Container>
            <Form className='mt-5'>
                <h5>Search note by </h5>
                <Stack gap={4}>
                    <Row className='mt-2'>
                        <Col>
                            <Form.Group>
                                <Form.Label> Title :</Form.Label>
                                <Form.Control onChange={searchByTitle} />
                            </Form.Group>
                            {searchNote!.length !== 0 &&
                                searchNote?.slice(0, 5).map((el, i) => (
                                    <Card key={i} >
                                        <Link id={i.toString()} to={"/singleNoteInfo"} onClick={() => openSingleNoteDesciption(el)}>{el?.title}</Link>
                                    </Card>
                                ))
                            }
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Tags :</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Col>
                    </Row>
                </Stack>
            </Form>
        </Container>
    )
}

export default SearchNote