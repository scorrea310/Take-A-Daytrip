#!/bin/bash

# Run flask migrations
flask db upgrade

# Start gunicorn server in the foreground
gunicorn -b 0.0.0.0:8000 app:app
