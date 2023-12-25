import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ThaiForm() {
    const [file, setFile] = useState(null);
    const [buttonColor, setButtonColor] = useState('bg-green-600');
    const [blinkInterval, setBlinkInterval] = useState(null);

    const handleUpload = async (e) => {
        e.preventDefault();
        setButtonColor('bg-red-600'); // Set the button color to red after clicking

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:5001/api/data', formData);
            console.log(response);

            setTimeout(() => {
                setButtonColor('bg-green-600'); // Reset the button color to green after a delay
            }, 0.1); // Change button color back to green after 500ms (0.5 seconds)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form className="flex">
            <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button
                onClick={handleUpload}
                className={`rounded-r-lg px-3 py-1 text-white shrink-0 ${buttonColor}`}
            >
                Upload
            </button>
        </form>
    );
}

export default ThaiForm;
