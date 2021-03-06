# Gympoint

## This is a fullstack application made during the Rocketseat Bootcamp 9.0 / October ~ December 2019 using the Oministack: NodeJs, React Js & React Native.

### What do we have here?
A small gym system composed by a RESTful API made with Node Js, serving the gym admin system made with ReactJS and a members mobile application made with React Native.

![Gympoint](https://github.com/fmontone/gympoint/blob/master/_githubfiles/gympoint_screenshot.png)

## Want to install?

### Basic Requirements

- **NodeJs**
- **Npm** or **Yarn** (commands listed below with yarn)
- **Docker**
- **Sequelize CLI**
- **Android and/Or IOS development environment well setted-up**
- **MailTrap** account
- **Sentry** account
- Optionals:
  - **Reactotron** Front Web and Mobile are connected with Reactotron in **DEV ENV**.
  - **React Native CLI**
  - **Postbird**
  - **MongoDb Compass**

### Running Backend API

1. Clone or Download this repo
2. Open terminal on this repo folder
3. Make shure you have **.env** file configured with database connections of your choice based on **docker-compose.yml** file.
4. Run Scripts (one after another finishes):
  - Install dependencies:  `yarn install-backend`
  - Load containers: `yarn compose`
  - Populate Postgres DB: `yarn populate`
5. With all setted up, you can now awake the API and get it running on port **3333**:
  - Go to **backend** dir and run `yarn dev`
  - Open another terminal window at **backend** dir and run `yarn queue`
  - **Note that this will make application and job list run simultaneously**

**At this point you should have your API awake and running**

## Running Front-End

1. In terminal go to **/front-web** dir
2. Run scripts:
  - Install dependencies:  `yarn install`
  - To start application:  `yarn start`
  - With front-web running in development mode you can now make login:
    - `USER: admin@gympoint.com`
    - `PASS: 123456`

**At this point you should have your Front-end web built with ReactJs awake and running on port 3000**

## Running Front-End Mobile
  
1. In terminal go to **/front-mobile** dir
2. Run scripts:
  - Install dependencies:  `yarn install`
  - To start application:  `react-native run-android`
  - * Due to some technical issues my XCode kept kiddin me with a totally blank black screen several times during the development process. My guess is that with a good machine with MacOs and Xcode you can easely make small adjustments and run `react-native run-ios` 
3. Now you can login with one of the users **emails** below, or create one with front-web:
  - `joao@student.com`
  - `maria@student.com`
  - `patricia@student.com`
  - `jose@student.com`

**At this point everything should be up and running**
If it's not, feel free to contact-me @ **montone@gmail.com**


