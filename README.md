# 📝 Todo List API

A simple, robust, and secure **Todo List REST API** built with **Node.js**, **Express**, and **MongoDB (Mongoose)**.  
This backend is deployed serverlessly using **Vercel**, with request validation powered by **Zod**.

---

## 🚀 Features

- ✅ Create new todos with `title`, `description`, and `completed` status
- 📄 Fetch all existing todos
- ✏️ Mark a todo as completed
- 🛡 Input validation using [Zod](https://zod.dev/)
- 🌐 Fully CORS-enabled to allow requests from **any frontend**
- ☁️ Serverless deployment using [Vercel](https://vercel.com)
- 🧠 MongoDB Atlas for cloud database
- 🔒 JWT-ready setup for secure route protection (basic skeleton present)

---

## 📦 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Validation**: Zod
- **Hosting**: Vercel (serverless functions)
- **Other**: dotenv, cors, serverless-http

---

## 📁 API Endpoints

### ✅ GET `/todo`

Fetch all todos

**Response:**
```json
{
  "todos": [
    {
      "_id": "...",
      "title": "Buy milk",
      "description": "2 liters",
      "completed": false
    }
  ]
}