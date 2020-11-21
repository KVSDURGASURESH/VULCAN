# What-Next App

Desired customizations are made based on the below base project

#### Source : 
https://github.com/bhavaniravi/flask-tutorial

### To Run App in Docker

1. First clone this repository.
```bash
$ git clone https://github.com/KVSDURGASURESH/VULCAN.git
```


2. Checkout `Dockerfile`. It is created by [following this tutorial](https://runnable.com/docker/python/dockerize-your-flask-application).

3. Changed it to accomodate latest version of ubuntu and `python3`

4. To build docker image . 

    ```bash
    $ cd < Dockerfile directory >
    ```
    
    ```bash
    $ docker build -t whatnxt-app:latest .
    ```
5. To run the docker container 
    ```bash
    $ docker run -it -d --name whatnxt-app -p 5000:5000  whatnxt-app:latest
    ```

6. To access in browser , enter the following in the URL field
    ```bash
    http://localhost:5000/
    ```
    
    ```bash
    http://localhost:5000/whatnxt
    ```

####  Credits :
 [This is a code that comes along with great tutorial](https://medium.com/@bhavaniravi/build-your-1st-python-web-app-with-flask-b039d11f101c)