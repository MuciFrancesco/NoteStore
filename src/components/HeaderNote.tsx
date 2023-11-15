import React from 'react'
import { Button } from 'react-bootstrap'
import { useNoteProvider } from '../context/NoteContext'

const HeaderNote: React.FC = () => {
    const { navigateNewRoot, handleShow, clearTagNewNote } = useNoteProvider()
    return (
        <div className='d-flex justify-content-around aling-items-center m-3'>
            <h1 >Notes</h1>
            <div className='d-flex'>
                <Button className='m-2' onClick={() => { navigateNewRoot("/new"); clearTagNewNote(); }} >Create</Button>
                <Button id='editTags' className='m-2' onClick={() => handleShow()}>Edit Tags</Button>
            </div>

        </div>
    )
}

export default HeaderNote