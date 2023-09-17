import React from 'react';
import { showFormattedDate } from '../utils/index';
function NoteLists({ notes, onDeleteNote, onArchiveNote }) {
    // Fungsi menghapus catatan berdasarkan ID
    const handleDeleteNote = (id) => {
        onDeleteNote(id);
    };

    return (
        <div className="notes-list">
            {notes.length === 0 ? ( // Periksa apakah daftar catatan kosong
                <p>Tidak ada catatan.</p> // Tampilkan pesan jika kosong
            ) :
                (notes.map((note) => (
                    <div key={note.id} className="note-item">
                        <div className="note-item__content">
                            <h3 className="note-item__title">{note.title}</h3>
                            <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
                            <p className="note-item__body">{note.body}</p>
                        </div>
                        <div className="note-item__action">
                            <button
                                className="note-item__delete-button"
                                onClick={() => handleDeleteNote(note.id)}>
                                Delete
                            </button>
                            <button
                                className="note-item__archive-button"
                                onClick={() => onArchiveNote(note.id)} // Memanggil fungsi onArchiveNote
                            >
                                Arsipkan
                            </button>
                        </div>
                    </div>
                )))}
        </div>
    );
}

export default NoteLists;
