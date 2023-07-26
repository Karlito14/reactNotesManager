import axios from "axios";;

const BASE_URL = 'http://localhost:3200/notes';

export class NotesAPI {
    static async create (note) {
        const newNote = await axios.post(`${BASE_URL}`, note);
        return newNote.data;
    };

    static async fetchAll () {
        const notes = await axios.get(`${BASE_URL}`);
        return notes.data;
    };

    static async fetchByID (id) {
        const note = await axios.get(`${BASE_URL}/${id}`);
        return note.data;
    };

    static async deleteByID (id) {
        const note = await axios.delete(`${BASE_URL}/${id}`);
        return note.data;
    };

    static async update (note) {
        const newNote = await axios.patch(`${BASE_URL}/${note.id}`, note);
        return newNote.data;
    }
}