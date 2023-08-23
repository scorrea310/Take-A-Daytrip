FROM node:12 AS build-stage

WORKDIR /react-app
COPY react-app/. .

# You have to set this because it should be set during build time.
ENV REACT_APP_BASE_URL=https://take-a-daytrip.com

# Build our React App
RUN npm install
RUN npm run build

FROM python:3.9

# Setup Flask environment
ENV FLASK_APP=app
ENV FLASK_ENV=production
ENV SQLALCHEMY_ECHO=True

EXPOSE 8000

WORKDIR /var/www
COPY . .
COPY --from=build-stage /react-app/build/* app/static/

# Install Python Dependencies
RUN pip install -r requirements.txt
RUN pip install psycopg2

# Copy the entrypoint.sh script
COPY entrypoint.sh /var/www/entrypoint.sh

# Give it execute permissions
RUN chmod +x /var/www/entrypoint.sh

# Use the script as the entrypoint
ENTRYPOINT ["/var/www/entrypoint.sh"]
