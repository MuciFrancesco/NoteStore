import React from 'react'
import { useNoteProvider } from '../context/NoteContext';
import { Button, Modal } from "react-bootstrap"


const AddTags = () => {
    const { openTags, handleCloseTagsNewModify, tags, addTag, handleShow } = useNoteProvider()


    return (

        <Modal show={openTags} onHide={handleCloseTagsNewModify}>
            <Modal.Header closeButton>
                <Modal.Title>Present Tags:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6>Tags disponibili:</h6>
                {tags?.length !== 0 ? tags?.map((el, i) => (
                    <div key={el[i]} className='d-flex '>
                        <Button id={i.toString()} className='w-100 m-1' onClick={() => addTag(el)} >{el}</Button>
                    </div>
                )) :
                    <div>
                        <h6>No tags present</h6>
                        <Button role='noTags' id='noTag' onClick={() => { handleCloseTagsNewModify(); handleShow() }}>Add Tags</Button>
                    </div>
                }
            </Modal.Body>

        </Modal>

    )
}

export default AddTags