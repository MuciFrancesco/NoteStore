import React from 'react'
import HeaderNote from '../components/HeaderNote'
import SearchNote from '../components/SearchNote'
import NoteContainer from '../components/NoteContainer'
import { useNoteProvider } from '../context/NoteContext'
import EditTags from '../components/EditTags'

const Note: React.FC = () => {
    const { showTags } = useNoteProvider()
    return (
        <>
            {showTags &&
                <EditTags />
            }
            <HeaderNote />
            <SearchNote />
            <NoteContainer />

        </>
    )
}

export default Note