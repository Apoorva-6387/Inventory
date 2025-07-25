# Inventory Management System – Backend API

A secure, token-based REST API to manage products in an inventory system.  
Built using **Node.js**, **Express**, **MongoDB Atlas**, and **JWT Authentication**.

>  Built with clean code, scalable architecture, and Python-based test automation!

---

## Tech Stack

- **Backend:** Node.js + Express.js  
- **Database:** MongoDB Atlas (Cloud DB)  
- **Authentication:** JWT (JSON Web Token)  
- **Testing:** Python script using `requests`  
- **Other Tools:** dotenv, mongoose, bcrypt, nodemon

---

## ✅ Features

-  **User Authentication**
  - `POST /auth/register` → Register a new user
  - `POST /auth/login` → Login with JWT token

-  **Product Management**
  - `POST /products` → Add product (auth required)
  - `PUT /products/:id/quantity` → Update product quantity (auth required)
  - `GET /products` → View all products (auth required)

-  **Automated Testing Script**
  - `test_api.py` script to test all endpoints programmatically using Python

---

## 🚀 Getting Started

### 1️⃣ Clone the repo

```bash
git clone https://github.com/yourusername/inventory-backend.git
cd inventory-backend
