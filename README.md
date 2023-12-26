# ThaiDataX - Thai ID OCR Detection
Welcome to ThaiDataX🎯! <br><br>

- **Let's see the Demo Vedio first**

<video src="demo.mp4" controls title="Title"></video>

# Table of Contents📄
- Features
- Installation
- Usage
- Future Enhancements
- License

  
# Features💫
- **Data Retrieval** 
Fetch data from a backend API.
Display fetched data in a list format on the frontend.

- **Data Manipulation** 
Edit specific fields of the fetched data.
Save the edited data to the backend.

- **Data Deletion:** 
Delete specific data entries.

- **OCR Processing** 
Integrate the application with Google Vision API to perform OCR on id card images. 

- **Real-time Updates** 
update the displayed data after performing actions (edit or delete) without refreshing the page.
NOTE : Please press the fetch button again to see the updated data 

- **JSON Data View** 
View fetched data in JSON format.

- **User Interactions** 
Interactive buttons to trigger data fetch, edit, delete, and update actions.

- **File Upload** 
Upload files (e.g., images) to the backend server.



# Installation🛠️
To run ThaiDataX locally, follow these steps:

- Clone the repository: `https://github.com/doraemon7467/Assignment.git`
- Navigate to the project directory: `cd Assignment`
- Install server dependencies: `npm install`
- Navigate to the client directory: `cd client`
- Install client dependencies: `npm install`
- Go back to the main project directory: `cd ..`
- Create a .env file and add :
   - PORT: (desired port number / 5000 )
   - MONGO_URL: (MongoDB connection URL)
- Run the app: `npm run dev` for Frontend
- Run the backend `node index.js` for Backend
  
# Usage💻
- Easily fetch, update, and delete data entries from the database.
- Present fetched data in a readable JSON format for better understanding and debugging.
-  Utilize the file upload feature to perform Optical Character Recognition (OCR) and store data into the backend.
-  Modify specific fields of the fetched data and save changes back to the database.

# Future Enhancements💫

- Error handling for unreadable or unclear id cards.
- Unit Test cases
- Data Insights: Gain valuable insights after Text Detection from the Image.
  
# License📄

This project is licensed under the MIT License. Please feel free to use, modify, and distribute this code according to the terms of the license.

---
Feel free to star the repository if you find it useful, and don't forget to share it with others who might benefit from this tool.<br>
Happy Coding! 🎯<br>
