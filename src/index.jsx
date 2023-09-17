import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/header'
import InputNote from './components/inputNote';
import NoteLists from './components/noteLists';
import ArchiveLists from './components/archiveLists';
import { getInitialData } from './utils/index';
// import style
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
function App() {
    const [notes, setNotes] = useState(getInitialData());
    const [searchKeyword, setSearchKeyword] = useState(''); // State untuk kata kunci pencarian
    const [archiveData, setArchiveData] = useState([]); // State untuk arsip data

    // Fungsi untuk pindahkan catatan berdasarkan ID
    const changeNote = (id) => {
        const archivedNote = archiveData.find((note) => note.id === id);
        setNotes([...notes, archivedNote]);
        setArchiveData(archiveData.filter((note) => note.id !== id));
    };

    // Fungsi untuk mengarsipkan catatan berdasarkan ID
    const archiveNote = (id) => {
        const archivedNote = notes.find((note) => note.id === id);
        setArchiveData([...archiveData, archivedNote]);
        setNotes(notes.filter((note) => note.id !== id));
    };

    // Fungsi untuk mengupdate kata kunci pencarian
    const handleSearch = (keyword) => {
        setSearchKeyword(keyword);
        // setArchiveData(keyword);
    };

    // Fungsi untuk menghapus catatan berdasarkan ID
    const deleteNote = (id) => {
        const updatedNotes = notes.filter((note) => note.id !== id);
        setNotes(updatedNotes);
    };

    // Fungsi untuk menghapus arsip data berdasarkan ID
    const deleteArchive = (id) => {
        const updatedArchive = archiveData.filter((note) => note.id !== id);
        setArchiveData(updatedArchive);
    };

    // Fungsi untuk menambah catatan
    const addNote = (newNote) => {
        // Menggunakan spread operator untuk menyalin data catatan yang ada
        const updatedNotes = [...notes, newNote];
        setNotes(updatedNotes);
    };

    // Fungsi untuk menghasilkan daftar catatan yang sesuai dengan kata kunci pencarian
    const filteredNotes = notes.filter((note) => {
        const lowerCaseKeyword = searchKeyword.toLowerCase();
        return (
            note.title.toLowerCase().includes(lowerCaseKeyword)
        );
    });

    // Fungsi untuk menghasilkan daftar catatan yang diarsip sesuai dengan kata kunci pencarian
    const filteredArchive = archiveData.filter((note) => {
        const lowerCaseKeyword = searchKeyword.toLowerCase();
        return (
            note.title.toLowerCase().includes(lowerCaseKeyword)
        );
    });

    return (
        <div>
            <Header onSearch={handleSearch} />
            <div className='note-app__body'>
                <InputNote onAddNote={addNote} />
                <h2>Catatan Aktif</h2>
                <NoteLists notes={filteredNotes} onDeleteNote={deleteNote} onArchiveNote={archiveNote} />
                <h2>Arsip</h2>
                <ArchiveLists archiveData={filteredArchive} onDeleteArchive={deleteArchive} onChangeNote={changeNote}/>
            </div>
        </div>
    );
}

root.render(<App />);