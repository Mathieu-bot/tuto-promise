# Character Management App

A modern web application for managing characters with React/TypeScript frontend and Node.js/Express backend using JSON file manipulation.

## Features

- View character list
- Add new characters  
- Edit existing characters
- Delete characters
- UI with Material-UI

## Tech Stack

**Frontend:** React 19, TypeScript, Material-UI, Vite  
**Backend:** Node.js, Express, JSON file storage

## Installation

### Prerequisites
- Node.js (20+)
- npm

### Setup
```bash
git clone <repo-url>
cd tuto-promise

# Backend
cd backend
npm install

# Frontend  
cd frontend
npm install
```

### Configuration
Create `.env` in `frontend/`:
```env
VITE_API_URL=http://localhost:8080
```

## Development

```bash
# Backend
cd backend
npm run dev

# Frontend
cd frontend  
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/characters` | Get all characters |
| `GET` | `/characters/:id` | Get character by ID |
| `POST` | `/characters` | Create character |
| `PUT` | `/characters/:id` | Update character |
| `DELETE` | `/characters/:id` | Delete character |

## Deployment

**Frontend:** Vercel (automatic from GitHub)  
**Backend:** Render.com (supports file persistence)

1. Deploy backend to [render.com](https://render.com)
2. Update `VITE_API_URL` to Render backend URL

## Troubleshooting

**500 Errors:** Vercel doesn't support file writes - use Render for backend  
**CORS Errors:** Check CORS configuration in `main.js`
