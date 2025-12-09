# IT Consult Backend - Filament Admin Panel

This is the Laravel backend with Filament admin panel for managing the IT Consult website.

## Setup Instructions

1. **Install Dependencies**
   ```bash
   composer install
   ```

2. **Environment Configuration**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

3. **Database Setup**
   - Update `.env` with your database credentials
   - Run migrations:
     ```bash
     php artisan migrate
     ```

4. **Create Admin User**
   ```bash
   php artisan db:seed --class=AdminUserSeeder
   ```
   
   Default credentials:
   - Email: `admin@myit-consult.com`
   - Password: `password`
   
   **⚠️ IMPORTANT: Change the password after first login!**

5. **Start Development Server**
   ```bash
   php artisan serve
   ```

6. **Access Admin Panel**
   - URL: `http://localhost:8000/admin`
   - Login with the admin credentials above

## Available Resources

The admin panel includes management for:

- **Projects** - Manage website projects
- **Resources** - Manage resources/articles
- **Team Members** - Manage team member profiles
- **Testimonials** - Manage client testimonials
- **Partners** - Manage partner organizations
- **Services** - Manage services offered

## File Structure

```
backend/
├── app/
│   ├── Filament/
│   │   └── Resources/     # Filament resource classes
│   └── Models/            # Eloquent models
├── database/
│   ├── migrations/        # Database migrations
│   └── seeders/          # Database seeders
└── public/               # Public assets
```

## API Integration

The backend can be integrated with the frontend React application via API endpoints. You can create API routes in `routes/api.php` and use Laravel's API resources for consistent JSON responses.

## Security Notes

- Always use strong passwords in production
- Update the admin user password immediately after setup
- Configure proper CORS settings for API access
- Use environment variables for sensitive data
- Enable HTTPS in production
