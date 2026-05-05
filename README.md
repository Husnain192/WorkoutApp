# WorkoutApp

A full-stack workout tracking application built with the **MERN** stack (MongoDB, Express, React, Node.js). Users can sign up, log in, and manage their personal workout records.

---

## Features

- User authentication (sign up & log in)
- Create, view, update, and delete workout entries
- Each workout tracks: **title**, **reps**, and **load (kg)**
- Responsive single-page frontend with React Router

---

## Tech Stack

| Layer     | Technology                          |
|-----------|-------------------------------------|
| Frontend  | React 18, React Router v6, date-fns |
| Backend   | Node.js, Express 4                  |
| Database  | MongoDB (via Mongoose)              |
| Auth      | JWT (JSON Web Tokens)               |
| Config    | dotenv                              |

---

## Project Structure

```
WorkoutApp/
├── backend/
│   ├── controllers/
│   │   ├── WorkoutController.js   # CRUD logic for workouts
│   │   └── userController.js      # Signup & login logic
│   ├── models/
│   │   ├── WorkoutModel.js        # Workout schema
│   │   └── userModel.js           # User schema
│   ├── routes/
│   │   ├── workouts.js            # /api/workouts routes
│   │   └── user.js                # /api/user routes
│   └── server.js                  # Express app entry point
└── frontend/
    └── src/
        ├── components/
        │   ├── Navbar.js
        │   ├── WorkoutsDetails.js
        │   └── WorkoutsForm.js
        ├── context/
        │   └── WorkoutsContext.js
        ├── hooks/
        │   └── useWorkoutsContext.js
        └── pages/
            └── Home.js
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+)
- [MongoDB](https://www.mongodb.com/) instance (local or Atlas)

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
SECRET=your_jwt_secret
```

Start the backend server:

```bash
# Development (with nodemon auto-reload)
npm run dev

# Production
npm start
```

The API will be available at `http://localhost:4000`.

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

The React app will be available at `http://localhost:3000` and proxies API requests to `http://localhost:4000`.

---

## API Endpoints

### Workouts — `/api/workouts`

| Method | Endpoint    | Description          |
|--------|-------------|----------------------|
| GET    | `/`         | Get all workouts     |
| GET    | `/:id`      | Get a single workout |
| POST   | `/`         | Create a workout     |
| PATCH  | `/:id`      | Update a workout     |
| DELETE | `/:id`      | Delete a workout     |

### Users — `/api/user`

| Method | Endpoint   | Description   |
|--------|------------|---------------|
| POST   | `/signup`  | Register user |
| POST   | `/login`   | Log in user   |
