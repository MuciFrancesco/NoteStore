import React from 'react';
import { Route, Routes } from "react-router-dom";
import { NoteProvider } from './context/NoteContext';
import Note from './Pages/Note';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';

function App() {
  return (
    <>
      <NoteProvider>
        <Routes>
          <Route path='/' element={<Note />} />
          <Route path='/new' element={<CreateNote />} />
          <Route path='/singleNoteInfo' element={<EditNote />} />
        </Routes>
      </NoteProvider>
    </>
  );
}

export default App;
