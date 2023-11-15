import { createContext, useContext, useState } from "react"
import { NoteProviderInterface, NoteProviderProps } from "../types/Note_Interface"
import { NavigateFunction, useNavigate } from "react-router-dom"
import Note from "../models/todo"
import { useLocalStorage } from "../hooks/useLocalStorage"







const NoteProviders = createContext({} as NoteProviderInterface)

export function useNoteProvider() {
    return useContext(NoteProviders)
}



export function NoteProvider({ children }: Readonly<NoteProviderProps>) {

    const navigate: NavigateFunction = useNavigate();


    const navigateNewRoot = (root: string): void => {
        window.scrollTo(0, 0);
        navigate(root)
    }



    //Note store into array of notes
    const [notes, setNotes] = useLocalStorage<Note[]>("Notes", [])
    const [values, setValues] = useState<Note>({
        id: "",
        title: "",
        date: "",
        tags: [],
        body: "",
        todo: true
    });
    const [singleNote, setSingleNote] = useState<Note>()
    const [searchNote, setSearchNote] = useState<Note[]>([])
    const [showTags, setShowTags] = useState<boolean>(false);
    const [tags, setTags] = useLocalStorage<string[]>("Tags", [])
    const [tagNewNote, setTagNewNote] = useState<string[]>([])
    const [openTags, setOpenTags] = useState<boolean>(false)

    const handleClose = () => setShowTags(false);
    const handleShow = () => setShowTags(true);

    const handleCloseTagsNewModify = () => setOpenTags(false);
    const handleShowTagsNewModify = () => setOpenTags(true);
    const clearTagNewNote = () => {
        setTagNewNote([])
    }

    const handleChange = (e: { target: { name: string; value: string } }): void => {

        const { name, value } = e.target;
        setValues((prev: any) => ({ ...prev, [name]: value }))

    }

    const handleEditNote = (e: { target: { name: string; value: string } }): void => {

        const { name, value } = e.target;
        setSingleNote((prev: any) => ({ ...prev, [name]: value }))

    }

    const handleSubmitEditNode = (e: { preventDefault: () => void }): void => {
        e.preventDefault()
        const id = singleNote!.id
        setNotes(notes.map(el => (el!.id === id ? Object.assign({}, singleNote) : el)))
        navigateNewRoot("/")
        setSearchNote([])


    }

    const handleSubmit = (e: { preventDefault: () => void }): void => {
        e.preventDefault()
        const title = values!.title
        const text = values!.body
        const newTodo = new Note(title, text, tagNewNote)
        setNotes((current) => { return current.concat(newTodo) })
        navigateNewRoot("/")
        setSearchNote([])
        clearTagNewNote();
    }

    const openSingleNoteDesciption = (note: Note): void => {
        setSingleNote(note)
        navigateNewRoot("/singleNoteInfo")
        setSearchNote([])


    }

    const searchByTitle = (e: { target: { value: any } }) => {
        const serchWorld = e.target.value
        const filter = notes?.filter((value) => {
            return value?.title?.toLocaleLowerCase().includes(serchWorld.toLocaleLowerCase())
        })
        if (serchWorld === "") {
            setSearchNote([])
        } else {
            setSearchNote(filter)
        }


    }


    const deleteNote = (id: string | undefined): void => {
        setNotes(currentItem => {
            return currentItem?.filter(item => item?.id !== id)
        })
        navigateNewRoot("/")
        setSearchNote([])
    }


    const createTag = (e: any) => {
        const tag = e.target!.value;
        const valueTag = tag?.toString();

        if (e.key === 'Enter') {
            if (tag?.length !== 0) {
                if (tags.indexOf(valueTag) === -1 && tag?.length !== 0) {
                    e.preventDefault();
                    setTags((prev) => { return prev?.concat(tag) })
                    resetInputTag(e)
                } else {
                    alert("Tag Alredy present")
                    e.preventDefault();
                    resetInputTag(e)
                }
            } else {
                alert("Plese insert a valid Tag")
                e.preventDefault();
                resetInputTag(e)
            }

        }

    }

    const deleteTag = (el: string): void => {
        setTags(currentItem => {
            return currentItem?.filter(item => item !== el)
        })

    }

    const resetInputTag = (e: any) => {
        e.target.value = "";
    }

    const addTag = (el: string) => {

        if (tagNewNote?.indexOf(el) === -1) {
            setTagNewNote((current) => { return current?.concat(el) })
        } else {
            alert("Tag alredy added")
        }

    }



    const deleteTagNewNote = (el: string): void => {
        setTagNewNote(currentItem => {
            return currentItem.filter(item => item !== el)
        })

    }

    const deleteTagModifyNote = (el: string): void => {
        let prova = singleNote
        const lt = prova?.tags.filter((i) => i !== el)
        //@ts-ignore
        setSingleNote(current => {
            return { ...current, tags: lt }
        })
    }




    return <NoteProviders.Provider value={{ values, showTags, searchNote, singleNote, notes, tags, openTags, tagNewNote, deleteTagModifyNote, clearTagNewNote, deleteTagNewNote, addTag, handleCloseTagsNewModify, handleShowTagsNewModify, createTag, deleteTag, resetInputTag, handleShow, handleClose, searchByTitle, deleteNote, handleSubmitEditNode, handleEditNote, navigateNewRoot, handleSubmit, handleChange, openSingleNoteDesciption }}>
        {children}
    </NoteProviders.Provider>

}