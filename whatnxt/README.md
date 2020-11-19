# What-Next App

Desired customizations are made based on the below base project

#### Source : 
https://github.com/bhavaniravi/flask-tutorial

### To Run App in Docker

1. Checkout `Dockerfile`. It is created by [following this tutorial](https://runnable.com/docker/python/dockerize-your-flask-application).

2. Changed it to accomodate latest version of ubuntu and `python3`

3. To build docker image . 

    ```bash
    $ cd < Dockerfile directory >
    ```
    
    ```bash
    $ docker build -t what-nxt:latest .
    ```
4. To run the docker container 
    ```bash
    $ docker run -it -d --name what-nxt -p 5000:5000  what-nxt:latest
    ```



####  Credits :
 [This is a code that comes along with great tutorial](https://medium.com/@bhavaniravi/build-your-1st-python-web-app-with-flask-b039d11f101c)