# Take A Daytrip

[Live Link Here](https://take-a-daytrip.herokuapp.com/)

Take A Datrip is a clone of Airbnb where users can view spots available to reserve for the day. Users can also create, update, delete, and view a reservation and a spot. 

Take A Daytrip encourages users to get out the house and experience a new place for the day. 

# Technologies Used

Take A Daytrip is built on a React frontend with a Flask backend using PostgreSQL as a database. I used React for all the display logic and Redux with thunks making API calls to the backend server to manage the state. The backend uses the Flask framework and a PostgreSQL database. SQLAlchemy is the ORM used to handle all data manipulation of the database. Take A Daytrip image storage is implemented through Amazon Web Services S3.

![pythonIcon](https://user-images.githubusercontent.com/46228676/155580259-d463ce91-0e5f-428d-b493-4fb8e2fdc26d.png) 
![flaskIcon](https://user-images.githubusercontent.com/46228676/155580604-551e8f24-3ebc-4c53-8eaa-f98732c4ddb9.png)
![ReduxIcon](https://user-images.githubusercontent.com/46228676/155580882-4864d2fa-7c8a-4500-a0e1-48675f26c1aa.png)
![JSIcon](https://user-images.githubusercontent.com/46228676/155581097-f6c3326c-5062-4a14-9d85-ad554b800dc8.png)
![GitIcon](https://user-images.githubusercontent.com/46228676/155581231-7e0913d2-db16-4e90-84f9-f3952ee10520.png)
![DockerIcon](https://user-images.githubusercontent.com/46228676/155581328-b6caf92b-2f70-4cfa-8758-1d42344cffb4.png)
![CSSIcon](https://user-images.githubusercontent.com/46228676/155581460-d049b83a-9113-4663-83a3-445385e207fb.png)
![HTML Icon 1](https://user-images.githubusercontent.com/46228676/155582063-d058a367-35c4-4f44-aee4-f7e4de58bdb1.png)
![ReactIcon](https://user-images.githubusercontent.com/46228676/155582169-e92128f9-58a6-46c7-b312-58f83f126717.png)

# Walthrough


Landing Page

<img width="1440" alt="Screen Shot 2022-02-24 at 10 13 25 AM" src="https://user-images.githubusercontent.com/46228676/155582917-00149f2a-181b-45cf-ab02-48bfc574a3e5.png">

Users Can Login or use Demo user

<img width="1440" alt="Screen Shot 2022-02-24 at 10 13 59 AM" src="https://user-images.githubusercontent.com/46228676/155583023-b829041f-c777-44b3-828f-fd7966c292ad.png">


Users Can Host a spot.

<img width="1439" alt="Screen Shot 2022-02-24 at 10 14 36 AM" src="https://user-images.githubusercontent.com/46228676/155583110-31c69949-05dc-47f5-9daf-726620167676.png">


User Can also reserve a spot


<img width="1440" alt="Screen Shot 2022-02-24 at 10 15 20 AM" src="https://user-images.githubusercontent.com/46228676/155583201-7681b0a2-02b8-46e1-8022-d520f76a37ff.png">


User can view, edit, and delete their reservation


<img width="1440" alt="Screen Shot 2022-02-24 at 10 19 33 AM" src="https://user-images.githubusercontent.com/46228676/155583841-a7718761-47e9-4ea3-b379-ad0ce68733c2.png">


## Feature List

1. Spots: Users can create, read, update, and delete a spot.
2. Reservations: Users can create, read, update, and delete a reservation.

## Getting started

1. Clone this repository `https://github.com/scorrea310/Take-A-Daytrip.git`
2. CD into the /app directory and install dependencies `pipenv install`
3. CD into the /react-app directory and install dependencies `npm install`
4. Create a .env file based on the .env.example given An AWS S3 account is required for adding/editing user and spot images
5. Create a user in psql based on your .env DATABASE_URL app_name `psql -c "CREATE USER <username> PASSWORD '<password>' CREATEDB"
6. Create a databse in psql based on your.env DATABASE_URL app_db_name
7. Start your shell, migrate your database, seed your database, and run the flask app
  `pipenv shell`

  `flask db upgrade`

  `flask seed all`

  `flask run`
  
  
8. Open another terminal and change directory into /react-app and run the React app  `npm start`

9. Now go to http://localhost:3000 and enjoy the site.

## Features Coming Soon.

1. Reviews: Full CRUD
2. Search



