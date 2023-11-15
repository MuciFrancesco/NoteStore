import React from 'react'
import { useNoteProvider } from '../context/NoteContext';
import { Form, Button, Modal } from "react-bootstrap"

const EditTags: React.FC = () => {
    const { handleClose, showTags, tags, createTag, deleteTag } = useNoteProvider()
    return (
        <Modal show={showTags} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Present Tags:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6 className='mb-4'>Tags:</h6>
                {tags.length !== 0 ? tags?.map((el, i) => (
                    <div key={el[i]} className='d-flex mb-2'>
                        <p className='w-50'>{el}</p>
                        <Button id={i.toString()} variant='danger' className='w-50' onClick={() => deleteTag(el)}>Ellimina</Button>
                    </div>

                )) :
                    <p className='fw-bold mt-3'>No tags present</p>
                }
                <Form>
                    <Form.Group>
                        <Form.Label className='fw-bold mt-2 mb-2'>Add Tag:</Form.Label>
                        <Form.Control id='addNewTag' placeholder='Enter key to confirm' onKeyDown={(e) => createTag(e)} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button id='closeEditTag' variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditTags