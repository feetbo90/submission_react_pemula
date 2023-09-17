import React from 'react';

function Header({ onSearch }) {
    const handleSearch = (e) => {
        onSearch(e.target.value);
    };

    return (
        <header className="note-app__header">
            <h1>Notes</h1>
            <div className="note-search">
                <input
                    type="text"
                    placeholder="Cari catatan ..."
                    onChange={handleSearch}
                />
            </div>
        </header>
    );
}

export default Header;
