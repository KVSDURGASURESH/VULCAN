
## VULCAN 1.2
#### DOCKER [ CONTAINERIZATION ] + GRADLE [ BUILD + DEPENDENCY MANAGEMENT ] +  DOCKERHUB [ DOCKER REGISTRY ]

##### RECOMMENDED ENV : DEV

`GRADLE TASKS :`

1. Stay at root (where you have the parent build.gradle file is present)
    ```bash
    $ cd <root directory > ex: vulcan-1.2
    ```    

2. `Build` the project 
    ```bash
    $ ./gradlew build 
    ```

3. `Check` the available  gradle tasks 
    ```bash
    $ ./gradlew task 
    ```

2. `Build` the images 
    ```bash
    $ ./gradlew docker 
    ```

3. `Run` the containers
    ```bash
    $ ./gradlew dockerRun 
    ```

4. `Tag` the images to push to Docker Registry , in this case DockerHub
    ```bash
    $ ./gradlew dockerTagDockerHub
    ```

5. `Push` the images to push to Docker Registry , in this case DockerHub
    ```bash
    $ ./gradlew dockerPushDockerHub
    ```


    `Note` : UI would take ~1-2 min to come up on the browser !


`TEST & VALIDATE :`


1. Access WhatNxt App UI on any `browser`

    ```bash
    $ http://localhost:3000
    ```    

    Enter any Text and validate POST ( open up developer tools-->Network) 

    1. Check any Item and validate PUT 
    2. Delete any Item and Validate DELETE
    3. Post any new items via postman or curl
    4. Refresh the page and validate GET 
    
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

