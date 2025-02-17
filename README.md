# HW1_WAD2025
The 1st homework assignment\
**Frontend**: create a static profile page about yourself (HTML + CSS)
- Profile page should have: heading, text, image, etc.
- You can choose any design of profile page that you like.

**Backend**: using Python Flask to serve the frontend (profile page)

- Basic part:
    - Serve static profile page at default route ('/') (using any method you want).
    - Serve images, CSS files as static resources.

- Advanced part:
    - Serve profile page using render_template (might be with parameters on your choice).
    - Serve profile page at '/profile' and redirect default route to it.

# FOLDER CONTENT
HW1_WAD2025/\
│\
├── app.py\
├── static/\
│   ├── styles.css\
│   ├── profile.jpg\
│   ├── script.js\
│   └── Gta Vice City Theme.mp3\
└── templates/\
    └── profile.html

# HOW TO RUN
1. Install Flask if you haven't already:
   ```bash
   pip install flask
   ```
2. Run the Flask application:
   ```bash
   python app.py
   ```
4. Open brower and go to **http://127.0.0.1:5000/**
