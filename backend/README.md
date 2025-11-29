# Portfolio Backend

Django REST API backend for the portfolio application.

## Features

- **About Me API**: Manage and serve "About Me" section content
- **Contact Messages API**: Handle contact form submissions
- **Django Admin Panel**: Easy content management interface
- **CORS Enabled**: Ready for frontend integration

## Setup Instructions

### Prerequisites

- Python 3.8 or higher
- pip (Python package manager)

### Installation

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Create and activate virtual environment:**
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

5. **Run migrations:**
   ```bash
   python manage.py migrate
   ```

6. **Create a superuser (for admin access):**
   ```bash
   python manage.py createsuperuser
   ```

7. **Run the development server:**
   ```bash
   python manage.py runserver
   ```

The API will be available at `http://localhost:8000`

## API Endpoints

### About Me

- **GET** `/api/about/` - Get active About Me information
  - Returns the currently active About record
  - Response: JSON object with name, title, bio, social links, etc.

### Contact Messages

- **POST** `/api/receive_message/` - Submit a contact message
  - Request body:
    ```json
    {
      "name": "Client Name",
      "email": "client@example.com",
      "phone": "+1234567890",
      "address": "Client Address",
      "priority": "High",
      "description": "Project description"
    }
    ```
  - Priority options: `Low`, `Medium`, `High`
  - Response: Success message with created message data

## Admin Panel

Access the Django admin panel at `http://localhost:8000/admin/`

### About Me Management

- Edit personal information (name, title, contact details)
- Update biography text
- Manage social media links
- Upload profile image
- Only one About record can be active at a time

### Contact Messages Management

- View all submitted messages
- Filter by priority and read/unread status
- Search by name, email, or description
- Mark messages as read
- Messages are read-only (created from frontend)

## Development Commands

### Run Tests
```bash
python manage.py test
```

### Create Migrations
```bash
python manage.py makemigrations
```

### Apply Migrations
```bash
python manage.py migrate
```

### Check for Issues
```bash
python manage.py check
```

### Collect Static Files (for production)
```bash
python manage.py collectstatic
```

## Environment Variables

See `.env.example` for all available configuration options:

- `SECRET_KEY` - Django secret key (change in production!)
- `DEBUG` - Debug mode (set to False in production)
- `ALLOWED_HOSTS` - Comma-separated list of allowed hosts
- `CORS_ALLOWED_ORIGINS` - Comma-separated list of allowed frontend URLs

## Project Structure

```
backend/
├── manage.py                 # Django management script
├── requirements.txt          # Python dependencies
├── .env.example             # Environment variables template
├── portfolio_backend/       # Main project directory
│   ├── settings.py          # Django settings
│   ├── urls.py              # Main URL configuration
│   └── wsgi.py              # WSGI configuration
└── portfolio/               # Portfolio app
    ├── models.py            # Database models
    ├── serializers.py       # DRF serializers
    ├── views.py             # API views
    ├── urls.py              # App URL configuration
    ├── admin.py             # Admin customization
    └── tests.py             # Unit tests
```

## Frontend Integration

1. Update your frontend `.env` file:
   ```
   VITE_API_URL=http://localhost:8000
   ```

2. The backend is configured to accept requests from:
   - `http://localhost:5173` (Vite default)
   - `http://localhost:3000` (React default)

3. To add more allowed origins, update `CORS_ALLOWED_ORIGINS` in `.env`

## License

This project is part of the portfolio application.
