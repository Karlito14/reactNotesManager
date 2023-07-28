import axios from "axios";;

const BASE_URL = 'http://localhost:3200/notes';

export class NotesAPI {
    static async create (note) {
        return this.formatId((await axios.post(`${BASE_URL}`, note)).data);
    };

    static async fetchAll () {
        const notes = await axios.get(`${BASE_URL}`);
        return notes.data.map(this.formatId);
    };

    static async fetchByID (id) {
        const note = await axios.get(`${BASE_URL}/${id}`);
        return this.formatId(note.data);
    };

    static async deleteByID (id) {
        const note = await axios.delete(`${BASE_URL}/${id}`);
        return note.data;
    };

    static async update (note) {
        const newNote = await axios.patch(`${BASE_URL}/${note.id}`, note);
        return this.formatId(newNote.data);
    };

    static formatId(note) {
        return {
            ...note,
            id : note.id.toString()
        }
    }
}