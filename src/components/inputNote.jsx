import React, { useState } from 'react';

function InputNote({ onAddNote }) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Mengirimkan catatan ke komponen App
        onAddNote({
            id: Date.now(),
            title: title,
            body: body,
            archived: false, 
            createdAt: new Date().toISOString(),
        });

        setTitle('');
        setBody('');
    };

    const remainingCharacters = 50 - title.length;

    return (
        <div className="note-input">
            <h2>Buat catatan</h2>
            <form onSubmit={handleSubmit}>
                <p className="note-input__title__char-limit">Sisa karakter: {remainingCharacters}</p>
                <input
                    className="note-input__title"
                    type="text"
                    placeholder="Ini adalah judul ..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    maxLength={50}
                />
                <textarea
                    className="note-input__body"
                    type="text"
                    placeholder="Tuliskan catatanmu di sini ..."
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <button type="submit">Buat</button>
            </form>
        </div>
    );
}

export default InputNote;
