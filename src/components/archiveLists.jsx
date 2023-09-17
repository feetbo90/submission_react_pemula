import React from 'react';
import { showFormattedDate } from '../utils/index';

function ArchiveLists({ archiveData, onDeleteArchive, onChangeNote }) {

    // Fungsi menghapus catatan berdasarkan ID
    const handleDeleteArchive = (id) => {
        onDeleteArchive(id);
    };
    
    return (
        <div className="notes-list">
            {archiveData.length === 0 ? ( // Periksa apakah daftar catatan kosong
                <p>Tidak ada arsip.</p> // Tampilkan pesan jika kosong
            ) : (archiveData.map((note) => (
                <div className="note-item" key={note.id}>
                    <div className="note-item__content">
                        <h3 className="note-item__title">{note.title}</h3>
                        <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
                        <p className="note-item__body">{note.body}</p>
                    </div>
                    <div className="note-item__action">
                        <button className="note-item__delete-button"onClick={() => handleDeleteArchive(note.id)}>Delete</button>
                        <button className="note-item__archive-button" onClick={() => onChangeNote(note.id)}>
                            Pindahkan
                        </button>
                    </div>
                </div>
            )))}
        </div>
    );
}

export default ArchiveLists;
