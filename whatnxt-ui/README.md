# What-Next App

This is a basic Reminder App 

1. Part 1 - How to build a Backend API with Flask - [What-Nxt App](https://github.com/KVSDURGASURESH/VULCAN/tree/pvt/dkagitha/release1/whatnxt).
2. Part 2 - How to integrate APIs with a React Frontend

#### Source :
 This repo has been forked from [React-Todo-App](https://github.com/kabirbaidhya/react-todo-app.git) and modified to fit my requirement. You can check it out for Step by Step React tutorial


### To Run App 

First clone this repository.
```bash
$ git clone https://github.com/KVSDURGASURESH/VULCAN.git
```

Install dependencies. Make sure you already have [`nodejs`](https://nodejs.org/en/) & [`npm`](https://www.npmjs.com/) installed in your system.
```bash
$ yarn
```
```bash
$ yarn build # or npm install
```

Run it
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




