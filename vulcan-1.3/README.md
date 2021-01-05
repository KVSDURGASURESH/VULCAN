
## VULCAN 1.3
#### GIT [ DISTRIBUTED VERSION CONTROL ] + DOCKER [ CONTAINERIZATION ] + GRADLE [ BUILD + DEPENDENCY MANAGEMENT ] +  DOCKERHUB [ DOCKER REGISTRY ] + JENKINS PIPELINE [ CONTINOUS INTEGRATION ]

##### RECOMMENDED ENV : DEV

##### SUMMARY

This version of VULCAN has 2 (frontend & backend)  `Microservices` which are `Dockerized` and with `Jenkins` around which is brought UP via a docker image , helps building and  pushing the whatnxt images to  `DockerHub` using only `Docker` commands via `Pipeline` scripts .

Optional : Uses `Gradle` for build management (not used during building/deploying the docker) 

`HOW TO RUN VIA JENKINS :`

`PRE-REQUISITES` :

1. Setup Webhook Relay , Why ? 

    `[a].` If we need to connect GitHub with internally deployed Jenkins which is not reachable from outside. In order to do this, we will be using Webhook Relay <br />
    https://webhookrelay.com/blog/2017/11/23/github-jenkins-guide/

    Installation [ here in this version we have used ] : <br />
    https://webhookrelay.com/v1/installation/cli.html 

    Receiving webhooks on localhost : <br />
    https://webhookrelay.com/v1/examples/receiving-webhooks-on-localhost.html

    Creating Buckets <br />
    ![Webhook Buckets ](PROJECTS/VULCAN/images/VULCAN-Webhook-Relay.png?raw=true) <br />

    `[b].` Commands to execute as per the above documentation post installation 

    ```bash
    $ relay login -k <key> -s <secret>

    $ relay forward --bucket vulcan-github-jenkins http://localhost:8080/vulcan-github-webhook/
    ``` 

    `[c].` Other Options and ways to use : <br />  https://webhookrelay.com/intro/
         

2. Firstly , to make sure  Jenkins is UP and Running 

    2.1. Navigate to Jenkins directory and build the docker image 

    ```bash
    $ cd jenkins
    ```
    
    ```bash
    $ docker build -t dkagitha/jenkins-docker .
    ```

    2.2. Make sure the docker image is build 
    ```bash
    $ docker images
    ``` 

    2.3. Run the docker 
    ```bash
    $ docker run --rm -d  --name jenkins-docker -d -p 8080:8080 -p 50000:50000 -v jenkins_home:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock dkagitha/jenkins-docker
    ```    

    2.4. Make sure the docker is up and running 
    ```bash
    $ docker ps 
    ```

    2.5. Login to UI , with username and password
    ![Jenkins Login](PROJECTS/VULCAN/images/VULCAN-Jenkins-Login.png?raw=true)


3. From Dashboard , Click "New Item" 

    3.1. Select Pipeline Project in the next screen <br />

    3.2. Copy the content from "PROJECTS/VULCAN/vulcan-1.3/jenkins/pipeline-script" into Pipelinse script section <br />

    ![Pipeline Project View ](PROJECTS/VULCAN/images/VULCAN-1.4-Pipeline-Screenshot.png?raw=true)

    Save & Apply 

    <br />
    More on Jenkins Pipeline : https://www.jenkins.io/doc/book/pipeline/ <br />

    3.3 Back to Dashboard , pick the project and click Build Now <br />
    ![Successful Build ](PROJECTS/VULCAN/images/VULCAN-1.4-Pipeline-Screenshot.png?raw=true)

<br />
More on Jenkins : https://www.jenkins.io/doc/ 

`TEST & VALIDATE :`


1. Access WhatNxt App UI on any `browser`

    ```bash
    $ http://localhost:3000
    ```    

    Enter any Text and validate POST ( open up developer tools-->Network) 

    1. Check any Item and validate PUT <br /> 
    2. Delete any Item and Validate DELETE <br /> 
    3. Post any new items via postman or curl <br /> 
    4. Refresh the page and validate GET <br /> 

    `Note` : UI would take ~1-2 min to come up on the browser !

    ![Submit task via WhatNxt UI](PROJECTS/VULCAN/images/VULCAN-WhatNxt-UI.png?raw=true)
    
2. To submit via CURL or POSTMAN

    `CURL`
    ```bash
    $ curl -X POST -d '{"Title":"Errands", "Description":"To collect documents", "completed":false, "id":2}' 'http://localhost:5000/whatnxt' -H 'Content-Type: application/json'
    ```  

    `POSTMAN`

    ENDPOINT : http://localhost:5000/whatnxt
    PAYLOAD: 
        {"Title":"Errands", "Description":"To collect documents", "completed":false, "id":2}
    
    `TODO`: Update the swagger spec here 

    ![Postman POST ](PROJECTS/VULCAN/images/VULCAN-WhatNxt-Postman.png?raw=true)

