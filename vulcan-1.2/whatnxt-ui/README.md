# What-Next App

This is a basic Reminder App 

1. Part 1 - How to build a Backend API with Flask - [What-Nxt App](https://github.com/KVSDURGASURESH/VULCAN/tree/master/whatnxt).
2. Part 2 - How to integrate APIs with a React Frontend

#### Source :
 This repo has been forked from [React-Todo-App](https://github.com/kabirbaidhya/react-todo-app.git) and modified to fit my requirement. You can check it out for Step by Step React tutorial


### To Run App (!Docker; want to run as a docker?  skip & jump to below section)

1. First clone this repository.
```bash
$ git clone https://github.com/KVSDURGASURESH/VULCAN.git
```

2. Install dependencies. Make sure you already have [`nodejs`](https://nodejs.org/en/) & [`npm`](https://www.npmjs.com/) [`Yarn`](https://classic.yarnpkg.com/en/docs/install/#mac-stable) installed in your system.

If using MACOS 

```bash
$ brew install yarn
```

3. Run Yarn/npm

```bash
$ yarn
```

```bash
$ yarn build # or npm install
```
4. Start the server (ui)

```bash
$ yarn start # npm start
```

### To Run App in Docker

1. Checkout `Dockerfile`. It is created by [following this tutorial](https://mherman.org/blog/dockerizing-a-react-app/).

2. To build docker image 

    ```bash
    $ cd < Dockerfile directory >
    ```

    ```bash
    $ docker build -t whatnxt-ui:latest .
    ```
3. To run the docker container 
    ```bash
    $ docker run -d --name whatnxt-ui -p 3000:3000  whatnxt-ui:latest
    ```
4. To access in browser , enter the following in the URL field
    ```bash
    http://localhost:3000/
    ```

    Enter any Text and Validate all CRUD operations




