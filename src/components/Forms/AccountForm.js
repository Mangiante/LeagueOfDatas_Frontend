import React, { useState } from 'react';

function AccountForm() {
    const [gameName, setGameName] = useState('');
    const [tagLine, setTagLine] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/api/accounts/${gameName}/${tagLine}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };    

    return (
        <div className="container">
            <h1>Get Riot Account</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="gameName">Game Name:</label>
                    <input
                        type="text"
                        id="gameName"
                        value={gameName}
                        onChange={(e) => setGameName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="tagLine">Tag Line:</label>
                    <input
                        type="text"
                        id="tagLine"
                        value={tagLine}
                        onChange={(e) => setTagLine(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AccountForm;
