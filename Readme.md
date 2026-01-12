# Basic Simple Structure – Backend (TypeScript)

A minimal, clean, and beginner-friendly backend project structure built using **Node.js**, **Express**, and **TypeScript**.  
This repository is intended to demonstrate how to organize a backend application professionally while keeping the setup simple and easy to understand.

---

## 🎯 Purpose of This Repository

The main goals of this project are:

- To provide a **basic backend boilerplate** using TypeScript
- To demonstrate a **clean and scalable folder structure**
- To help beginners understand **TypeScript usage in backend development**
- To serve as a **starting point** for real-world backend projects

---

## 🛠 Tech Stack

- **Node.js** – Runtime environment  
- **Express.js** – Web framework  
- **TypeScript** – Static typing and better developer experience  
- **ts-node / nodemon** – Development utilities  

---

## 📁 Project Structure

```txt
src/
│
├── controllers/     # Request handlers (business logic)
├── routes/          # API routes
├── middlewares/     # Custom middlewares
├── models/          # Data models / schemas
├── utils/           # Helper functions and utilities
├── config/          # Configuration files
│
├── app.ts           # Express app setup
├── server.ts        # Server entry point
│
└── types/           # Custom TypeScript types & interfaces
