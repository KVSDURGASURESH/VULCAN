
## VULCAN 1.1 
#### GIT [ DISTRIBUTED VERSION CONTROL ] + DOCKER [ CONTAINERIZATION ] + DOCKER COMPOSE [ MULTI CONTAINER SETUP ]

##### RECOMMENDED ENV : LOCAL/DEV

`DOCKER COMPOSE :`

1. Stay at root (where you have the docker-compose.yml)
    ```bash
    $ cd <root directory > ex: vulcan-1.1
    ```    

2. `Build` the images 
    ```bash
    $ docker-compose build
    ```
3. `Run` the containers
    ```bash
    $ docker-compose up -d
    ```

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


    `Note` : UI would take ~1-2 min to come up on the browser !

    <img width="972" alt="VULCAN-WhatNxt-UI" src="https://user-images.githubusercontent.com/24245515/103701136-80099880-4fcb-11eb-91cf-7f7c097fd415.png">
    
2. To submit via CURL or POSTMAN

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

