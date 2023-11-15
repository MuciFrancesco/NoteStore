import React from 'react'
import { Form, Stack, Col, Row, Container, Button } from "react-bootstrap"
import { useNoteProvider } from '../context/NoteContext'
import AddTags from './AddTags'
import EditTags from './EditTags'

const CreateNote: React.FC = () => {
    const { navigateNewRoot, handleChange, handleSubmit, handleShowTagsNewModify, deleteTagNewNote, openTags, tagNewNote, showTags, values } = useNoteProvider()

    function SubmitAble() {
        if (values?.body === "" || values?.title === "") {
            return true
        } else {
            return false
        }
    }
    return (
        <>
            {openTags &&
                <AddTags />
            }
            {showTags &&
                <EditTags />
            }
            <Container className='mt-5'>
                <h1>New Note</h1>
                <Form className='mt-5' onSubmit={(e) => handleSubmit(e)}>
                    <Stack gap={4}>
                        <Row className='mt-2'>
                            <Col>
                                <Form.Group>
                                    <Form.Label htmlFor='title' className='text-secondary fw-bold'>Title :</Form.Label>
                                    <Form.Control required placeholder='Add a title' type='text' id='title' name='title' onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label htmlFor='tags' className='text-secondary fw-bold'>Tags :</Form.Label>
                                    <Form.Control placeholder='Add a Tag' type='button' id='tags' name='tags' onChange={handleChange} onClick={() => handleShowTagsNewModify()} />
                                </Form.Group>
                                {
                                    tagNewNote?.length > 0 && <div className='d-flex flex-row flex-wrap '>
                                        <h6 className='m-2 d-flex w-100'>Tags Added:</h6>
                                        {tagNewNote?.map((el, i) => (
                                            <div key={el[i]} className='d-flex justify-content-center align-items-center border m-2 p-1 rounded'>
                                                <p className='mb-0 p-1'>{el}</p>
                                                <Button variant='danger' id="deleteTag" className='btn btn-danger btn-sm' onClick={() => deleteTagNewNote(el)}>Delete</Button>
                                            </div>
                                        ))}
                                    </div>
                                }
                            </Col>
                        </Row>
                        <Form.Group>
                            <Form.Label htmlFor='body' className='text-secondary fw-bold'>Body :</Form.Label>
                            <Form.Control required as='textarea' rows={15} id='body' name='body' placeholder='Add the body of Note' onChange={handleChange} />
                        </Form.Group>
                        <Stack direction='horizontal' gap={3}>
                            <Button id='submit' role='buttonSubmit' title='submit' name='submit' type="submit" disabled={SubmitAble()} >Save</Button>
                            <Button type="button" variant="danger" onClick={() => navigateNewRoot("/")} >Cancel</Button>
                        </Stack>
                    </Stack>
                </Form>
            </Container>
        </>
    )
}

export default CreateNote