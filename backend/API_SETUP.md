# API Setup and Configuration

## CORS Configuration

The API is configured to allow requests from the frontend. To configure CORS, update the `config/cors.php` file or set the following in your `.env`:

```env
CORS_ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000
```

## API Endpoints

All API endpoints are prefixed with `/api/v1`

### Projects
- `GET /api/v1/projects` - Get all published projects
- `GET /api/v1/projects/{id}` - Get a specific project by ID
- `GET /api/v1/projects/slug/{slug}` - Get a project by slug

### Resources
- `GET /api/v1/resources` - Get all published resources
- `GET /api/v1/resources/{id}` - Get a specific resource by ID
- `GET /api/v1/resources/slug/{slug}` - Get a resource by slug

### Services
- `GET /api/v1/services` - Get all published services
- `GET /api/v1/services/{id}` - Get a specific service by ID

### Team Members
- `GET /api/v1/team-members` - Get all published team members
- `GET /api/v1/team-members/{id}` - Get a specific team member by ID

### Testimonials
- `GET /api/v1/testimonials` - Get all published testimonials
- `GET /api/v1/testimonials/{id}` - Get a specific testimonial by ID

### Partners
- `GET /api/v1/partners` - Get all published partners
- `GET /api/v1/partners/{id}` - Get a specific partner by ID

## Frontend Configuration

Create a `.env` file in the root of your frontend project:

```env
VITE_API_URL=http://localhost:8000/api/v1
```

## Running the Backend

```bash
cd backend
php artisan serve
```

The API will be available at `http://localhost:8000/api/v1`

## Image Storage

Images uploaded through Filament are stored in `storage/app/public`. Make sure to:

1. Create a symbolic link:
   ```bash
   php artisan storage:link
   ```

2. Images will be accessible at: `http://localhost:8000/storage/{path}`

## Testing the API

You can test the API endpoints using:

- Postman
- cURL
- Browser (for GET requests)
- The frontend application

Example:
```bash
curl http://localhost:8000/api/v1/projects
```

