# 🏪 Inventory Management System – Backend API

A secure, token-based REST API to manage products in an inventory system.  
Built using **Node.js**, **Express**, **MongoDB Atlas**, and **JWT Authentication**.

> 🔐 Built with clean code, scalable architecture, and Python-based test automation!

---

## 📁 Tech Stack

- **Backend:** Node.js + Express.js  
- **Database:** MongoDB Atlas (Cloud DB)  
- **Authentication:** JWT (JSON Web Token)  
- **Testing:** Python script using `requests`  
- **Other Tools:** dotenv, mongoose, bcrypt, nodemon

---

## ✅ Features

- 🔐 **User Authentication**
  - `POST /auth/register` → Register a new user
  - `POST /auth/login` → Login with JWT token

- 📦 **Product Management**
  - `POST /products` → Add product (auth required)
  - `PUT /products/:id/quantity` → Update product quantity (auth required)
  - `GET /products` → View all products (auth required)

- 🧪 **Automated Testing Script**
  - `test_api.py` script to test all endpoints programmatically using Python

---

## 🚀 Getting Started

### 1️⃣ Clone the repo

```bash
git clone https://github.com/yourusername/inventory-backend.git
cd inventory-backend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file in root folder:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/inventory?retryWrites=true&w=majority
JWT_SECRET=<your_secret_key>
```

---

### 4️⃣ Run the server

```bash
npm start
```

You should see:

```
Server running on port 5000 🚀  
MongoDB connected ✅
```

---

## 🧪 Run Automated API Tests

### Requirements:
- Python 3.7+  
- `requests` module

### Steps:

```bash
# If not installed
pip install requests

# Run test script
python test_api.py
```

✅ Output will show pass/fail status for each endpoint.

---

## 📦 Folder Structure

```
inventory-backend/
│
├── config/
│   └── db.js             # MongoDB connection setup
│
├── models/
│   ├── userModel.js      # User schema
│   └── productModel.js   # Product schema
│
├── routes/
│   ├── auth.js           # Auth endpoints
│   └── product.js        # Product endpoints
│
├── test_api.py           # Python-based endpoint testing
├── server.js             # Main entry point
├── .env                  # Environment variables
└── README.md             # You’re here!
```

---

## 🔐 Authentication Flow

1. Register/Login to get **JWT token**
2. Pass token in request headers:

```http
Authorization: Bearer <your_token>
```

3. Only authenticated users can:
   - Add product
   - Update product
   - View product list

---

## 🛠️ Sample API Calls (via Postman)

**Register:**
```http
POST /auth/register
{
  "username": "Apoorva",
  "password": "mypassword"
}
```

**Login:**
```http
POST /auth/login
→ returns { "access_token": "<JWT>" }
```

**Add Product (with JWT):**
```http
POST /products
Headers: Authorization: Bearer <token>
Body:
{
  "name": "Phone",
  "type": "Electronics",
  "sku": "PHN-001",
  "image_url": "https://example.com/img.jpg",
  "description": "Latest phone",
  "quantity": 10,
  "price": 999.99
}
```

---

## 🧠 Future Improvements (Optional)

- Password hashing with bcrypt
- Role-based access (admin/user)
- Swagger API documentation
- Frontend React integration

---

## 👨‍💻 Author

**Apoorva Singh**  
[LinkedIn](https://www.linkedin.com/in/apoorva-singh-88460a257/) | [GitHub](https://github.com/Apoorva-6387)

---


