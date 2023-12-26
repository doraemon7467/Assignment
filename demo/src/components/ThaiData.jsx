import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataList = () => {
  const [data, setData] = useState([]);
  const [jsonData, setJsonData] = useState('');
  const [editableFields, setEditableFields] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://thaiiddetection.vercel.app/api/data');
      setData(response.data);
      setJsonData(JSON.stringify(response.data, null, 2));
      initializeEditableFields(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const initializeEditableFields = (data) => {
    const fields = {};
    data.forEach(item => {
      fields[item._id] = false;
    });
    setEditableFields(fields);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://thaiiddetection.vercel.app/api/data/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleUpdate = (id) => {
    setEditableFields(prevState => ({
      ...prevState,
      [id]: true,
    }));
  };

  const handleFieldChange = (id, field, value) => {
    setData(prevData => {
      const newData = prevData.map(item => {
        if (item._id === id) {
          return { ...item, [field]: value };
        }
        return item;
      });
      return newData;
    });
  };

  const handleSave = async (id) => {
    try {
      const updatedItem = data.find(item => item._id === id);
      await axios.put(`https://thaiiddetection.vercel.app/api/data/${id}`, updatedItem);
      setEditableFields(prevState => ({
        ...prevState,
        [id]: false,
      }));
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div>
      <h5>Data List</h5>
      <button onClick={fetchData} className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">Fetch Data</button>
      <ul>
        {data.map(item => (
          <li key={item._id}>
            ID: {item.idNumber}, Name: {item.name}, Last Name: {item.lastName}
            <button onClick={() => handleUpdate(item._id)} className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">Update</button>
            <button onClick={() => handleDelete(item._id)} className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">Delete</button>
            {editableFields[item._id] ? (
              <div>
                <input
                  type="text"
                  value={item.idNumber}
                  onChange={(e) => handleFieldChange(item._id, 'idNumber', e.target.value)}
                  className="input-field"
                />
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => handleFieldChange(item._id, 'name', e.target.value)}
                  className="input-field"
                />
                <input
                  type="text"
                  value={item.lastName}
                  onChange={(e) => handleFieldChange(item._id, 'lastName', e.target.value)}
                  className="input-field"
                />
                <button onClick={() => handleSave(item._id)} className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">Save</button>
              </div>
            ) : null}
          </li>
        ))}
      </ul>

      <div>
        <h5>JSON Data</h5>
        <pre>{jsonData}</pre>
      </div>
    </div>
  );
};

export default DataList;