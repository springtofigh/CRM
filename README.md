# CRM - Customer Management 🧾

**CRM** is a full-stack Customer Relationship Management application developed with **Next.js**, allowing administrators to manage customer data with full CRUD functionality.

## 🚀 Features

- 🔐 **Authentication** with NextAuth (Credentials)
- 📋 Add, edit, delete, and view **customers**
- 📄 Dynamic **forms** for user/customer data
- 🧾 Pagination and search for long lists
- 💾 MongoDB integration with **Mongoose**
- ⚙️ RESTful API routes for full CRUD
- 📦 Organized folder structure for scalability


## 📁 Technologies

- Next.js
- NextAuth.js
- Mongoose
- Moment.js
- bcryptjs
- CSS Modules

## 🧠 What I Learned

* Managing form data 
* Building custom API routes in Next.js
* Hashing passwords with bcryptjs
* Connecting and querying MongoDB with Mongoose

## 📸 Screenshots

*(screenshots )*

> ![Home Page]
<img width="1920" height="957" alt="Capture 01 -  -  Home Page" src="https://github.com/user-attachments/assets/2ae2a05f-f785-4fe2-aa11-8e5da24ffcd0" />

> ![Add Customer Page]
<img width="1920" height="2306" alt="Capture 02 -  -  Add Cutomer Details" src="https://github.com/user-attachments/assets/4d842586-e5ae-4e80-81b5-04f5f098a56e" />

> ![Customer Details Page]
<img width="1920" height="1115" alt="Capture 03 -  -  Customer Details" src="https://github.com/user-attachments/assets/f7ebb2d3-be1b-4cf2-b3a3-cbcf7cde8b35" />

## 🔗 Live Demo

👉 [Your Live Demo Link](https://customer-manager-iota.vercel.app/)


## 📦 Installation

```bash
git clone https://github.com/springtofigh/CRM-customer
cd CRM-customer
npm install
npm run dev
````

## ⚙️ Environment Variables

Create a `.env.local` file like below:

```env
MONGODB_URI=your-mongodb-uri
MONGO_USER=your-mongodb-username
MONGO_PASS=your-mongodb-password
```

## 🧬 Mongoose Models

* **User Model**: Includes fields for `name`, `email`, `password`, and `products`

* Located in the `/models` folder and connected via `/utils/dbConnect.js`