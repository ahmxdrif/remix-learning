import { redirect } from '@remix-run/node';
import NewNote, { links as newNoteLinks } from '../components/NewNote';
import NoteList, { links as noteListLinks } from '../components/NoteList';
import { getStoredNotes, storeNotes } from '../data/notes';
import { useLoaderData } from '@remix-run/react';

export default function NotesPage() {
    const notes = useLoaderData();
    return (
        <main>
            <NewNote />
            <NoteList notes = {notes}/>
        </main>
    );
}

export function links() {
    return [...newNoteLinks(), ...noteListLinks()];
}

export async function loader(){
    const notes = await getStoredNotes();
    return notes;
}

export async function action({request}) {  
    const formData = await request.formData();
    const noteData = {
        title : formData.get("title"),
        content : formData.get("content")
    }
    const existingNotes = await getStoredNotes();
    noteData.id = new Date().toISOString();
    const updatingNotes = existingNotes.concat(noteData);
    await storeNotes(updatingNotes);
    return redirect('/notes');
}