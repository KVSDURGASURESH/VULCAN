
## VULCAN 1.2
#### GIT [ DISTRIBUTED VERSION CONTROL ] + DOCKER [ CONTAINERIZATION ] + GRADLE [ BUILD + DEPENDENCY MANAGEMENT ] +  DOCKERHUB [ DOCKER REGISTRY ]

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

    <img width="1310" alt="VULCAN-DockerHub-1" src="https://user-images.githubusercontent.com/24245515/103702895-cc090d00-4fcc-11eb-9159-e315ba802760.png">

    <img width="1255" alt="VULCAN-DockerHub-2" src="https://user-images.githubusercontent.com/24245515/103702953-d0352a80-4fcc-11eb-890b-78df84db8c0e.png">
    

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

