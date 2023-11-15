

class Note {
    id : string;
    title : string;
    body : string;
    date : string
    tags : string[]
    todo : boolean

    constructor (title: string, body : string , tags :string[] ){
        this.id = new Date().toISOString();
        this.title= title;
        this.body = body;
        this.date = new Date().toDateString();
        this.tags = tags
        this.todo = true;

    }

} 


export default Note