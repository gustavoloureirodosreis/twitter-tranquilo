import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'twitter-tranquilo.settings')

application = get_wsgi_application()
