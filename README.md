# CRM - Customer Management Dashboard 🧾

**CRM** is a full-stack CRM (Customer Relationship Management) application developed with **Next.js**, allowing administrators to manage customer data with full CRUD functionality.

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

## 🔗 Live Demo

👉 [Your Live Demo Link](#)


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