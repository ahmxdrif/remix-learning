import styles from './NewNote.css';
function NewNote() {
    return (
        <form action="post" id="note-form">
            <p>
                <label htmlFor="title">Title:</label><br />
                <input type="text" id="title" name="title" required/>
            </p>
            <p>
                <label htmlFor="content">Content:</label><br />
                <textarea id="content" name="content" rows="5" required></textarea>
            </p>
            <div className="form-actions">
                <button>Add Note</button>
            </div>
        </form>
    );
}

export default NewNote;
export function links() {
    return [{ rel: 'stylesheet', href: styles }];
}

