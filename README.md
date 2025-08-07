# [🚀📝 **Todo List API**](https://todo-list-ecru-theta-40.vercel.app)

A minimal yet powerful **Todo List REST API**, designed for simplicity, security, and scalability.

---

## 🌐🔥 [👉 Live Project < – Click Here to View 👈](https://todo-list-ecru-theta-40.vercel.app)

> 🟢 **Deployed Frontend** built with React  
> 🛠 **Connected to a secure backend** hosted via Render  
> ✅ Try it out live – no setup required!
> 
> ⏳ **Note**: Due to free-tier hosting on Render, the **backend may take up to 20 seconds** to respond on the **first request** (cold start). After that, it's fast and responsive.


---  

## 🔧 Overview

This project features a fully functional **Todo List backend** built with **Node.js**, **Express**, and **MongoDB (Mongoose)**.  
It is connected to a clean and modern frontend UI (built separately), with full **CORS support** for seamless integration.

- 🔐 Input validation with [Zod](https://zod.dev)  
- ☁️ Backend deployed on **Render**  
- 🌐 Frontend deployed on **Vercel**  
- 🧠 Cloud database powered by **MongoDB Atlas**  
- 🛡 JWT-ready setup for secure routes (basic implementation included)

---

## ✨ Features

- ✅ Create new todos (`title`, `description`, `completed` status)  
- 📄 Fetch all existing todos  
- ✏️ Mark a todo as completed  
- 🔎 Input validation with **Zod**  
- 🔗 Cross-origin ready – works with any frontend  
- 🌍 Cloud-hosted (Serverless architecture)  
- 💡 Clean, readable codebase with modular structure  

---

## 🧰 Tech Stack

| Layer      | Tech Used                          |
|------------|------------------------------------|
| Backend    | Node.js, Express.js                |
| Database   | MongoDB (via Mongoose)             |
| Validation | Zod                                |
| Hosting    | Render (backend), Vercel (frontend)|
| Tools      | dotenv, cors, serverless-http      |

---

## 📁 API Endpoints

### ✅ `GET /todo`  
Returns all existing todos.

#### Example Response:
```json
{
  "todos": [
    {
      "_id": "abc123",
      "title": "Buy milk",
      "description": "2 liters",
      "completed": false
    }
  ]
}
