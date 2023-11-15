import React from 'react'
import { Container, Button, Card } from "react-bootstrap"
import { useNoteProvider } from '../context/NoteContext'
import { MdDeleteForever } from "react-icons/md"

const NoteContainer: React.FC = () => {
    const { notes, openSingleNoteDesciption, deleteNote } = useNoteProvider()
    return (

        <Container className='mt-5 mb-5'>
            {notes!.length > 0 ?
                <>
                    <h4>Saved Notes : </h4>
                    {notes!.map((el, i) => (
                        <Card key={el?.id} id='cards-container' className='mb-5 d-flex flex-wrap '>
                            <Card.Body id={"card-body"}>
                                <Card.Title id={'card-title' + i}>{el?.title}</Card.Title>
                                <Card.Text id={'card-text' + i}>{el?.body}</Card.Text>
                                <Card.Footer className='d-flex'>
                                    <div className='w-100 d-flex justify-content-start '>
                                        <Button id='editNote' className='m-2' type="button" variant="primary" onClick={() => openSingleNoteDesciption(el)} >Edit Note</Button>
                                        <Button id='deleteNote' className='m-2' type="button" variant="danger" onClick={() => deleteNote(el?.id)} > Delete
                                            <MdDeleteForever />
                                        </Button>
                                    </div>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    ))}
                </>

                :

                <h4>Not stored Notes</h4>


            }
        </Container>

    )
}

export default NoteContainer