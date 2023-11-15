import { ReactNode } from "react"
import Note from "../models/todo"


export type NoteProviderInterface = {
    navigateNewRoot : (el:string) => void
    handleSubmit : (e: { preventDefault: () => void })=>void
    handleChange : (e: { target: { name: string; value: string } })=>void
    openSingleNoteDesciption : (note:Note)=>void
    handleSubmitEditNode: (e: { preventDefault: () => void })=>void
    handleEditNote: (e: { target: { name: string; value: string } })=>void
    deleteNote :(id:string | undefined)=>void
    searchByTitle :(e: { target: { value: any } })=>void
    handleClose : ()=>void
    handleShow : ()=>void
    createTag : (e:any)=>void
    deleteTag : (el:string)=>void
    resetInputTag : (e:any)=>void
    handleCloseTagsNewModify : ()=>void
    handleShowTagsNewModify : ()=>void
    addTag : (el:string)=>void
    deleteTagNewNote : (el:string)=>void
    clearTagNewNote : ()=>void
    deleteTagModifyNote:(el:string)=>void
    tagNewNote : string[]
    openTags : boolean
    singleNote : Note | undefined
    notes : Note[] | undefined
    searchNote : Note[] | undefined
    showTags : boolean
    tags : string[]
    values : Note
}

export type NoteProviderProps = {
    children: ReactNode
}


