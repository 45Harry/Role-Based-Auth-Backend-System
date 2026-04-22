# Role-Based Auth Spotify Clone (Backend)

A robust backend implementation of a Spotify-like music platform featuring role-based access control (RBAC), user authentication, and music/album management.

## 🚀 Features

- **Role-Based Access Control (RBAC)**: Distinct permissions for `user` and `artist` roles.
- **Authentication**: Secure registration, login, and logout using JWT (JSON Web Tokens) stored in cookies.
- **Music Management**:
  - **Artists**: Can upload music and create albums.
  - **Users**: Can browse and listen to music and albums.
- **File Uploads**: Integration with `multer` for handling music file uploads.
- **Database**: MongoDB integration using Mongoose for scalable data storage.

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: JWT, bcryptjs
- **File Handling**: Multer, ImageKit (via `@imagekit/nodejs`)
- **Environment Management**: dotenv

## 📁 Project Structure

```
├── src/
│   ├── controllers/    # Request handlers for auth and music
│   ├── db/            # Database connection configuration
│   ├── middlewares/  # Auth and Role-based middlewares
│   ├── models/        # Mongoose schemas (User, Music, Album)
│   ├── routes/        # API route definitions
│   └── services/      # External service integrations (e.g., Storage)
├── server.js          # Entry point of the application
└── package.json       # Project dependencies and scripts
```

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd role-based-auth-spotify-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_super_secret_key
   # Add other necessary keys for ImageKit or other services
   ```

4. **Run the application**
   - For development (with nodemon):
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm start
     ```

## 🛣️ API Endpoints

### Auth Routes (`/api/auth`)
- `POST /register` - Register a new user.
- `POST /login` - Authenticate user and receive a token.
- `POST /logout` - Clear authentication token.

### Music Routes (`/api/music`)
- **Artist Only**:
  - `POST /upload` - Upload a music track.
  - `POST /album` - Create a new album.
- **All Authenticated Users**:
  - `GET /` - Get all music tracks.
  - `GET /albums` - Get all albums.
  - `GET /albums/:albumId` - Get details of a specific album.

## 🛡️ Middleware
- `authUser`: Ensures the request is from a logged-in user or artist.
- `authArtist`: Ensures the request is specifically from a user with the `artist` role.
