
## VULCAN 1.4
#### GIT [ DISTRIBUTED VERSION CONTROL ] + DOCKER [ CONTAINERIZATION ] + GRADLE [ BUILD + DEPENDENCY MANAGEMENT ] +  DOCKERHUB [ DOCKER REGISTRY ] + JENKINS PIPELINE WITH GRADLE BUILD COMMANDS [ CONTINOUS INTEGRATION ]

##### RECOMMENDED ENV : DEV

##### SUMMARY

This version of VULCAN has 2 (frontend & backend)  `Microservices` which are `Dockerized` and with `Jenkins` around which is brought UP via a docker image , helps building and  pushing the whatnxt images to  `DockerHub` using  `Gradle` build commands with auto incremental builds via `Pipeline` scripts .


`PRE-REQUISITES` :

1. Setup Webhook Relay , Why ? 

    `[1.1].` If we need to connect GitHub with internally deployed Jenkins which is not reachable from outside. In order to do this, we will be using Webhook Relay <br />
    https://webhookrelay.com/blog/2017/11/23/github-jenkins-guide/

    Installation [ here in this version we have used ] : <br />
    https://webhookrelay.com/v1/installation/cli.html 

    I'm Felling Lucky:

      ```For MAC```
    ```
    $ sudo curl --output /usr/local/bin/relay https://storage.googleapis.com/webhookrelay/downloads/relay-darwin-amd64 
    ```    
    
    ```For Linux 64 Bit```
    ```
    $ sudo curl --output /usr/local/bin/relay https://storage.googleapis.com/webhookrelay/downloads/relay-darwin-amd64 
    ```    

    ```For Windows : Download -> ``` https://storage.googleapis.com/webhookrelay/downloads/relay-windows-amd64.exe. 
    
    ```Or if you have curl installed, use this command: ```
    ```
    curl -LO https://storage.googleapis.com/webhookrelay/downloads/relay-windows-amd64.exe
    ```    



    Receiving webhooks on localhost : <br />
    https://webhookrelay.com/v1/examples/receiving-webhooks-on-localhost.html

    Creating Buckets <br />
    <img width="1432" alt="VULCAN-Webhook-Relay" src="https://user-images.githubusercontent.com/24245515/103701132-7ed86b80-4fcb-11eb-93af-7365505e7832.png"> <br />

    `[1.2].` Commands to execute as per the above documentation post installation 

    ```bash
    $ relay login -k <key> -s <secret>

    $ relay forward --bucket <bucket name> http://localhost:8080/<webhook name>/

    ex:
    $ relay forward --bucket vulcan-github-jenkins http://localhost:8080/vulcan-github-webhook/
    ``` 

    `[1.3].` Other Options and ways to use : <br />  https://webhookrelay.com/intro/

  

2. Firstly , to make sure  Jenkins is UP and Running 

    `[2.1].` Navigate to Jenkins directory and build the docker image 

    ```bash
    $ cd jenkins
    ```

    ```bash
    $ docker build -t dkagitha/jenkins-docker-gradle .
    ```

    `[2.2].` Make sure the docker image is build 
    ```bash
    $ docker images
    ``` 

    `[2.3].` Run the docker 
    ```bash
    $ docker run --rm -d  --name jenkins-docker -d -p 8080:8080 -p 50000:50000 -v jenkins_home:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock dkagitha/jenkins-docker-gradle
    ```    

    `[2.4].` Make sure the docker is up and running 
    ```bash
    $ docker ps 
    ```

    `[2.5].` Login to UI , with username and password (username :"whatnxt" ; password : "whatnxt" )

    ```bash
    $ http://localhost:8080
    ```

    <img width="416" alt="VULCAN-Jenkins-Login" src="https://user-images.githubusercontent.com/24245515/103701127-7da73e80-4fcb-11eb-93fb-3bb87616cca2.png">

3. Login into docker 
```bash
    $ docker login
```
    Type in Username & Password (docker token key)

`HOW TO RUN VIA JENKINS :`

1. From Dashboard , Click "New Item" 

    `[1.1].` Select Pipeline Project in the next screen <br />

    `[1.2].` Copy the content from "PROJECTS/VULCAN/vulcan-1.3/jenkins/Jenkinsfile" into Pipeline script section <br />
    <img width="877" alt="VULCAN-Jenkins-Pipeline" src="https://user-images.githubusercontent.com/24245515/103701130-7e3fd500-4fcb-11eb-8be8-3f29c5260679.png">  <br />

    Save & Apply 

    <br />
    More on Jenkins Pipeline : https://www.jenkins.io/doc/book/pipeline/ <br />

    `[1.3].` Back to Dashboard , pick the project and click Build Now <br />
    <img width="1274" alt="VULCAN-1 4-Pipeline-Screenshot" src="https://user-images.githubusercontent.com/24245515/103701116-78e28a80-4fcb-11eb-999e-ae150df88593.png">


<br />
More on Jenkins : https://www.jenkins.io/doc/ 

`TEST & VALIDATE :`

1. Verify if the images are pushed to DockerHub repository 

    Login to DockerHub 

    <img width="1310" alt="VULCAN-DockerHub-1" src="https://user-images.githubusercontent.com/24245515/103702895-cc090d00-4fcc-11eb-9159-e315ba802760.png">

    <img width="1255" alt="VULCAN-DockerHub-2" src="https://user-images.githubusercontent.com/24245515/103702953-d0352a80-4fcc-11eb-890b-78df84db8c0e.png">


2. Access WhatNxt App UI on any `browser`

    ```bash
    $ http://localhost:3000
    ```    

    Enter any Text and validate POST ( open up developer tools-->Network) 

    1. Check any Item and validate PUT <br /> 
    2. Delete any Item and Validate DELETE <br /> 
    3. Post any new items via postman or curl <br /> 
    4. Refresh the page and validate GET <br /> 

    `Note` : UI would take ~1-2 min to come up on the browser !

    <img width="972" alt="VULCAN-WhatNxt-UI" src="https://user-images.githubusercontent.com/24245515/103701136-80099880-4fcb-11eb-91cf-7f7c097fd415.png">
    
3. To submit via CURL or POSTMAN

    `CURL`
    ```bash
    $ curl -X POST -d '{"Title":"Errands", "Description":"To collect documents", "completed":false, "id":2}' 'http://localhost:5000/whatnxt' -H 'Content-Type: application/json'
    ```  

    `POSTMAN`

    ENDPOINT : http://localhost:5000/whatnxt <br />
    PAYLOAD: 
        {"Title":"Errands", "Description":"To collect documents", "completed":false, "id":2}
    
    `TODO`: Update the swagger spec here 

    <img width="1093" alt="VULCAN-WhatNxt-Postman" src="https://user-images.githubusercontent.com/24245515/103701135-7ed86b80-4fcb-11eb-817c-7fafaed0f062.png">

