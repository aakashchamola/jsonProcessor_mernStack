# Full Stack Project (Express, React, Node.js)
This is a full-stack web application using **Express.js, React.js, and Node.js**. This project does not use a database.

## 📌 Project Information
This project provides an API that categorizes input data into numbers and alphabets. It takes a list of mixed values as input and returns a structured response separating numbers and alphabets, along with identifying the highest alphabet.

### **Example Input:**
```json
{
    "data": ["1", "3", "A", "c", "D"]
}
```

### **Example API Response:**
```json
{
    "is_success": true,
    "user_id": "<your_user_id>",
    "email": "<your_email>",
    "roll_number": "<your_roll_number>",
    "numbers": [
        "1",
        "3"
    ],
    "alphabets": [
        "A",
        "c",
        "D"
    ],
    "highest_alphabet": [
        "D"
    ]
}
```

### **Changes in `bfhlController.js` (Located in `src/controllers/`)**
- Implemented logic to get your email, rollnumber, user_id.


## 🚀 Getting Started

Follow these steps to set up and run the project on your local machine.

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/aakashchamola/jsonProcessor_mernStack.git
```

Move into the project folder:
```sh
cd jsonProcessor_mernStack
```

---

### **2️⃣ Install Dependencies**
Since `node_modules` is not included in the repository, you need to install dependencies separately for both frontend and backend.

#### **Backend Setup**
1. Navigate to the `backend` folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
3. Create a `.env` file inside the `backend` folder and add necessary environment variables:
   ```sh
   PORT=5000
   JWT_SECRET=your_jwt_secret
   ```
4. Start the backend server:
   ```sh
   npm run dev  # or yarn dev
   ```

#### **Frontend Setup**
1. Move to the `frontend` folder:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
3. Start the frontend development server:
   ```sh
   npm start  # or yarn start
   ```

---

### **3️⃣ Run the Project**
- The **backend** will run on `http://localhost:5000` (or the port specified in `.env`).
- The **frontend** will run on `http://localhost:3000`.

Make sure both servers are running simultaneously to fully use the application.

---

## 📌 Additional Notes
- If you encounter permission issues, try running commands with `sudo` (Mac/Linux).
- If a port is already in use, modify it in the `.env` file or `package.json`.
- Use `yarn` instead of `npm` if preferred, you would just need to replace `npm` instead of `yarn` in all the commands.

Now you're ready to use the ERN stack project! 🚀

