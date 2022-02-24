# Take A Daytrip

Take A Datrip is a clone of Airbnb where users can view spots available to reserve for the day. Users can also create, update, delete, and view a reservation and a spot. 

Take A Daytrip encourages users to get out the house and experience a new place for the day. 

# Technologies Used

![pythonIcon](https://user-images.githubusercontent.com/46228676/155580259-d463ce91-0e5f-428d-b493-4fb8e2fdc26d.png) 
![flaskIcon](https://user-images.githubusercontent.com/46228676/155580604-551e8f24-3ebc-4c53-8eaa-f98732c4ddb9.png)
![ReduxIcon](https://user-images.githubusercontent.com/46228676/155580882-4864d2fa-7c8a-4500-a0e1-48675f26c1aa.png)
![JSIcon](https://user-images.githubusercontent.com/46228676/155581097-f6c3326c-5062-4a14-9d85-ad554b800dc8.png)
![GitIcon](https://user-images.githubusercontent.com/46228676/155581231-7e0913d2-db16-4e90-84f9-f3952ee10520.png)
![DockerIcon](https://user-images.githubusercontent.com/46228676/155581328-b6caf92b-2f70-4cfa-8758-1d42344cffb4.png)
![CSSIcon](https://user-images.githubusercontent.com/46228676/155581460-d049b83a-9113-4663-83a3-445385e207fb.png)
![HTML Icon 1](https://user-images.githubusercontent.com/46228676/155582063-d058a367-35c4-4f44-aee4-f7e4de58bdb1.png)
![ReactIcon](https://user-images.githubusercontent.com/46228676/155582169-e92128f9-58a6-46c7-b312-58f83f126717.png)

# Features


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


# Feature List

Please view official Feature List here: https://github.com/scorrea310/Take-A-Daytrip/wiki/Feature-List

## Getting started

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/appacademy-starters/python-project-starter.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

***
*IMPORTANT!*
   If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment.
   You can do this by running:

   ```bash
   pipenv lock -r > requirements.txt
   ```

*ALSO IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***

## Deploy to Heroku

1. Before you deploy, don't forget to run the following command in order to
ensure that your production environment has all of your up-to-date
dependencies. You only have to run this command when you have installed new
Python packages since your last deployment, but if you aren't sure, it won't
hurt to run it again.

   ```bash
   pipenv lock -r > requirements.txt
   ```

2. Create a new project on Heroku
3. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres"
4. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)
5. Run

   ```bash
   heroku login
   ```

6. Login to the heroku container registry

   ```bash
   heroku container:login
   ```

7. Update the `REACT_APP_BASE_URL` variable in the Dockerfile.
   This should be the full URL of your Heroku app: i.e. "https://flask-react-aa.herokuapp.com"
8. Push your docker container to heroku from the root directory of your project.
   (If you are using an M1 mac, follow [these steps below](#for-m1-mac-users) instead, then continue on to step 9.)
   This will build the Dockerfile and push the image to your heroku container registry.

   ```bash
   heroku container:push web -a {NAME_OF_HEROKU_APP}
   ```

9. Release your docker container to heroku

      ```bash
      heroku container:release web -a {NAME_OF_HEROKU_APP}
      ```

10. set up your database

      ```bash
      heroku run -a {NAME_OF_HEROKU_APP} flask db upgrade
      heroku run -a {NAME_OF_HEROKU_APP} flask seed all
      ```

11. Under Settings find "Config Vars" and add any additional/secret .env
variables.

12. profit

### For M1 Mac users

(Replaces **Step 8**)

1. Build image with linux platform for heroku servers. Replace
{NAME_OF_HEROKU_APP} with your own tag:

   ```bash=
   docker buildx build --platform linux/amd64 -t {NAME_OF_HEROKU_APP} .
   ```

2. Tag your app with the url for your apps registry. Make sure to use the name
of your Heroku app in the url and tag name:

   ```bash=2
   docker tag {NAME_OF_HEROKU_APP} registry.heroku.com/{NAME_OF_HEROKU_APP}/web
   ```

3. Use docker to push the image to the Heroku container registry:

   ```bash=3
   docker push registry.heroku.com/{NAME_OF_HEROKU_APP}/web
   ```


