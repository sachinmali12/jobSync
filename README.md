<<<<<<< HEAD
# jobSync
=======
# ResumeXpert

AI-powered resume management and job application platform connecting candidates and companies with intelligent resume parsing, scoring, and shortlisting.

## Table of Contents

- Overview
- Features
- Tech Stack
- Project Structure
- Installation & Setup
- Usage
- Contributing
- License

## Overview

ResumeXpert streamlines hiring with a full-stack web app:
- For Candidates: resume generation, uploads, tracking, and profile links (GitHub, LeetCode)
- For Companies: job posting, AI-driven screening, shortlisting, and dashboards
- AI: resume parsing, skill matching, automated scoring, and feedback

## Features

### Candidate
- AI-assisted resume generation
- Resume upload and application tracking
- Profile management with GitHub and LeetCode integration

### Company
- Create and manage job posts
- AI-powered candidate analysis and shortlisting
- Hiring pipeline and analytics dashboard

### AI / Automation
- Resume parsing and skill extraction
- ML-based candidate scoring
- Feedback generation and company-candidate fit scoring

## Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- React Router DOM
- Axios
- Framer Motion, Lucide React

### Backend
- Django, Django REST Framework
- SQLite (dev)
- JWT Auth, CORS

### AI/Utilities
- Resume parser, GitHub and LeetCode scrapers
- ML scoring utilities

## Project Structure

```
finalindi_sem4/
├── backend/
│   └── resumeX/
│       ├── resume/                 # Django app (models, views, serializers)
│       ├── api/                    # API endpoints
│       ├── media/                  # Uploads (resumes, generated files)
│       └── manage.py
└── frontend/
    └── resumex/
        ├── src/
        │   ├── assets/
        │   │   ├── components/     # React components
        │   │   ├── css/            # Styles
        │   │   └── api/            # API helpers
        │   ├── App.jsx
        │   └── main.jsx
        ├── package.json
        └── vite.config.js
```

## Installation & Setup

### Prerequisites
- Node.js 18+
- Python 3.8+
- Git

### Backend (Django)
```bash
cd backend/resumeX
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install django djangorestframework django-cors-headers djangorestframework-simplejwt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

### Frontend (React + Vite)
```bash
cd frontend/resumex
npm install
npm run dev
```

## Usage

### Candidate
1. Sign up or log in
2. Generate or upload resume
3. Apply to jobs and track status

### Company
1. Log in with company account
2. Create job posts
3. Review applicants with AI insights and manage pipeline

## Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "feat: add your feature"`
4. Push branch: `git push origin feature/your-feature`
5. Open a Pull Request

## License

MIT License. See `LICENSE` for details.

---

Made with ❤️ by the ResumeXpert Team
>>>>>>> d742819 (Initial commit)
