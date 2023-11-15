import React from 'react'
import { useNoteProvider } from '../context/NoteContext'
import { Form, Stack, Col, Row, Container, Button } from "react-bootstrap"
import { MdDeleteForever } from "react-icons/md"
import AddTags from './AddTags'
import EditTags from './EditTags'

const EditNote: React.FC = () => {
    const { singleNote, navigateNewRoot, handleSubmitEditNode, handleEditNote, deleteNote, handleChange, handleShowTagsNewModify, deleteTagNewNote, deleteTagModifyNote, showTags, openTags, tagNewNote } = useNoteProvider()
    return (
        <>
            {openTags &&
                <AddTags />
            }
            {showTags &&
                <EditTags />
            }
            <Container className='mt-5'>
                <h1>Edit note</h1>
                <Form className='mt-5' onSubmit={(e) => handleSubmitEditNode(e)}>
                    <Stack gap={4}>
                        <Row className='mt-2'>
                            <Col>
                                <Form.Group>
                                    <Form.Label className='text-secondary fw-bold'>Title :</Form.Label>
                                    <Form.Control required type='text' id='title' name='title' value={singleNote?.title} onChange={handleEditNote} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label className='text-secondary fw-bold'>Tags :</Form.Label>
                                    <Form.Control placeholder='Add a Tag' type='button' id='tags' name='tags' onChange={handleChange} onClick={() => handleShowTagsNewModify()} />
                                </Form.Group>
                                {
                                    singleNote?.tags.map((el) => el.length > 0) && <div className='d-flex flex-row flex-wrap '>
                                        <h6 className='m-2 d-flex w-100'>Tags Added:</h6>
                                        {singleNote.tags.map((i) => (
                                            <div key={i} className='d-flex justify-content-center align-items-center border m-2 p-1 rounded'>
                                                <p className='mb-0 p-1'>{i}</p>
                                                <Button variant='danger' id='deleteTag' className='btn btn-danger btn-sm' onClick={() => deleteTagModifyNote(i.toString())}>Delete</Button>
                                            </div>
                                        ))}
                                    </div>
                                }
                                {
                                    tagNewNote?.length > 0 && <div className='d-flex flex-row flex-wrap '>
                                        {tagNewNote?.map((el) => (
                                            <div key={el} className='d-flex justify-content-center align-items-center border m-2 p-1 rounded'>
                                                <p className='mb-0 p-1'>{el}</p>
                                                <Button variant='danger' className='btn btn-danger btn-sm' onClick={() => deleteTagNewNote(el)}>Delete</Button>
                                            </div>
                                        ))}
                                    </div>
                                }
                            </Col>
                        </Row>
                        <Form.Group>
                            <Form.Label className='text-secondary fw-bold'>Body :</Form.Label>
                            <Form.Control required as='textarea' rows={15} id='body' name='body' value={singleNote?.body} onChange={handleEditNote} />
                        </Form.Group>
                        <Stack direction='horizontal' gap={3}>
                            <Button type="submit" id='saveEditNote'>Save</Button>
                            <Button type="button" variant="danger" onClick={() => navigateNewRoot("/")} >Cancel</Button>
                            <Button type="button" variant="outline-danger" id='deleteEditedNote' onClick={() => deleteNote(singleNote?.id)} >
                                <MdDeleteForever />
                            </Button>
                        </Stack>
                    </Stack>
                </Form>
            </Container>
        </>
    )
}

export default EditNote