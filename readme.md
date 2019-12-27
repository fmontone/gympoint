# Gympoint

This is a fullstack application made during the Rocketseat Bootcamp 9.0 / October ~ December 2019 using the Oministack: NodeJs, React Js & React Native.

**{{IMAGE GOES HERE}}**

## Want to install?

### Basic Requirements

- **NodeJs**
- **Npm** or **Yarn** (commands listed below with yarn)
- **Docker** with following containers and/or images:
  - **postgres:11**
  - **mongo**
  - **redis:alpine**
- **Sequelize CLI**
- **Android and/Or IOS development environment well setted-up**
- **MailTrap** account
- **Sentry** account
- Optionals:
  - **
  - **Reactotron** Front Web and Mobile are connected with Reactotron in **DEV ENV**.
  - **React Native CLI**
  - **Postbird**
  - **MongoDb Compass**

### Running API

1. Clone or Download this repo
2. In terminal go to **/backend** dir
3. Make shure you have **.env** file configured with connections to images listed at the **basic requirements** above.
4. Run Scripts at **backend dir**:
  - Install dependencies:  `yarn install`
  - To start application:  `yarn dev`
  - and in a new terminal window, on the same **backend** dir:  `yarn queue`
  - To run migrations on Postgres DB: `yarn sequelize db:migrate`
  - To run seeds on Postgres DB: `yarn sequelize db:seed:all`

**At this point you should have your API awake and running**

## Running Front-End

1. In terminal go to **/front-web** dir
2. Run scripts:
  - Install dependencies:  `yarn install`
  - To start application:  `yarn start`

**At this point you should have your Front-end web built with ReactJs awake and running**

## Running Front-End Mobile
  
1. In terminal go to **/front-mobile** dir
2. Run scripts:
  - Install dependencies:  `yarn install`
  - To start application:  `react-native run-android`
  - * Due to some technical issues my XCode kept kiddin me with a totally blank black screen several times during the development process. My guess is that with a good machine with MacOs and Xcode you can easely make small adjustments and run `react-native run-ios`.

**At this point everything should be up and running**
If it's not, feel free to contact-me @ **montone@gmail.com**


