import { useEffect,useState } from 'react';
import axios from 'axios'
import ThaiItem from './ThaiItem';
function ThaiForm() {
    
    const [file,setFile] = useState();
    const handleUpload = (e) => {
        e.preventDefault();
        console.log(file);
        const formdata = new FormData();
        formdata.append('file' , file);
        console.log(formdata);
        axios.post('http://localhost:5001/api/data' , formdata)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
        <form  className="flex">
            <input
                type="file"
                onChange={e => setFile(e.target.files[0])}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button onClick={handleUpload} className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Upload
            </button>
        </form>
    );
}

export default ThaiForm;