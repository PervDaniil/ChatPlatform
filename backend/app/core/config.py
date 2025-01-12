from pathlib import Path

BASE_DIR_PATH = Path(__file__).resolve().parent.parent

SECRET_KEY = 'django-insecure-o^v$e+!37v8*m+tcr$*64v30wo1!7j+u+ldbx@=lxbxqn$1mik'

CORS_ALLOWED_ORIGINS = [
    'http://127.0.0.1:3000/',
    'http://localhost:3000/',
]