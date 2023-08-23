#!/bin/bash

flask db upgrade
flask seed undo
flask seed all

gunicorn -b 0.0.0.0:8000 app:app
