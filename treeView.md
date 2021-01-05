# tree 

```bash 
$ tree -I 'node_modules|cache|lib|venv|build'
```

```
├── HowToRun.md
├── README.md
├── VULCAN.code-workspace
├── vulcan-1.1
│   ├── README.md
│   ├── docker-compose.yml
│   ├── whatnxt
│   │   ├── README.md
│   │   ├── __init__.py
│   │   ├── docker
│   │   │   ├── Dockerfile
│   │   │   ├── core
│   │   │   │   ├── __init__.py
│   │   │   │   ├── applicationView.py
│   │   │   │   ├── models.py
│   │   │   │   └── serviceController.py
│   │   │   ├── entrypoint.sh
│   │   │   └── requirements.txt
│   │   └── whatnxt.db
│   ├── whatnxt-ui
│   │   ├── README.md
│   │   └── docker
│   │       ├── Dockerfile
│   │       ├── core
│   │       │   ├── package-lock.json
│   │       │   ├── package.json
│   │       │   ├── public
│   │       │   │   ├── favicon.ico
│   │       │   │   └── index.html
│   │       │   ├── src
│   │       │   │   ├── assets
│   │       │   │   │   ├── images
│   │       │   │   │   │   ├── add.svg
│   │       │   │   │   │   └── search.svg
│   │       │   │   │   ├── style
│   │       │   │   │   │   └── index.css
│   │       │   │   │   └── text
│   │       │   │   │       └── en_US.js
│   │       │   │   ├── components
│   │       │   │   │   ├── hoc
│   │       │   │   │   │   └── wrapInputBox.js
│   │       │   │   │   ├── ui
│   │       │   │   │   │   ├── CheckBox.js
│   │       │   │   │   │   ├── FilteredList.js
│   │       │   │   │   │   ├── Header.js
│   │       │   │   │   │   ├── InputBox.js
│   │       │   │   │   │   ├── TodoItem.js
│   │       │   │   │   │   └── TodoList.js
│   │       │   │   │   └── wrappers
│   │       │   │   │       ├── App.js
│   │       │   │   │       └── StateProvider.js
│   │       │   │   ├── index.js
│   │       │   │   ├── services
│   │       │   │   │   └── todo.js
│   │       │   │   └── util
│   │       │   │       └── common.js
│   │       │   └── yarn.lock
│   │       └── entrypoint.sh
│   └── yarn.lock
├── vulcan-1.2
│   ├── README.md
│   ├── build.gradle
│   ├── gradle
│   │   ├── docker.gradle
│   │   └── wrapper
│   │       ├── gradle-wrapper.jar
│   │       └── gradle-wrapper.properties
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── settings.gradle
│   ├── whatnxt
│   │   ├── Dockerfile
│   │   ├── README.md
│   │   ├── __init__.py
│   │   ├── build.gradle
│   │   ├── src
│   │   │   ├── core
│   │   │   │   ├── __init__.py
│   │   │   │   ├── applicationView.py
│   │   │   │   ├── models.py
│   │   │   │   └── serviceController.py
│   │   │   ├── entrypoint.sh
│   │   │   └── requirements.txt
│   │   └── whatnxt.db
│   └── whatnxt-ui
│       ├── Dockerfile
│       ├── README.md
│       ├── build.gradle
│       └── src
│           ├── core
│           │   ├── package-lock.json
│           │   ├── package.json
│           │   ├── public
│           │   │   ├── favicon.ico
│           │   │   └── index.html
│           │   ├── src
│           │   │   ├── assets
│           │   │   │   ├── images
│           │   │   │   │   ├── add.svg
│           │   │   │   │   └── search.svg
│           │   │   │   ├── style
│           │   │   │   │   └── index.css
│           │   │   │   └── text
│           │   │   │       └── en_US.js
│           │   │   ├── components
│           │   │   │   ├── hoc
│           │   │   │   │   └── wrapInputBox.js
│           │   │   │   ├── ui
│           │   │   │   │   ├── CheckBox.js
│           │   │   │   │   ├── FilteredList.js
│           │   │   │   │   ├── Header.js
│           │   │   │   │   ├── InputBox.js
│           │   │   │   │   ├── TodoItem.js
│           │   │   │   │   └── TodoList.js
│           │   │   │   └── wrappers
│           │   │   │       ├── App.js
│           │   │   │       └── StateProvider.js
│           │   │   ├── index.js
│           │   │   ├── services
│           │   │   │   └── todo.js
│           │   │   └── util
│           │   │       └── common.js
│           │   └── yarn.lock
│           └── entrypoint.sh
├── vulcan-1.3
│   ├── README.md
│   ├── build.gradle
│   ├── gradle
│   │   ├── docker.gradle
│   │   └── wrapper
│   │       ├── gradle-wrapper.jar
│   │       └── gradle-wrapper.properties
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── jenkins
│   │   ├── Dockerfile
│   │   └── pipeline-script
│   ├── settings.gradle
│   ├── whatnxt
│   │   ├── Dockerfile
│   │   ├── README.md
│   │   ├── __init__.py
│   │   ├── build.gradle
│   │   ├── src
│   │   │   ├── core
│   │   │   │   ├── __init__.py
│   │   │   │   ├── applicationView.py
│   │   │   │   ├── models.py
│   │   │   │   └── serviceController.py
│   │   │   ├── entrypoint.sh
│   │   │   └── requirements.txt
│   │   └── whatnxt.db
│   └── whatnxt-ui
│       ├── Dockerfile
│       ├── README.md
│       ├── build.gradle
│       └── src
│           ├── core
│           │   ├── package-lock.json
│           │   ├── package.json
│           │   ├── public
│           │   │   ├── favicon.ico
│           │   │   └── index.html
│           │   ├── src
│           │   │   ├── assets
│           │   │   │   ├── images
│           │   │   │   │   ├── add.svg
│           │   │   │   │   └── search.svg
│           │   │   │   ├── style
│           │   │   │   │   └── index.css
│           │   │   │   └── text
│           │   │   │       └── en_US.js
│           │   │   ├── components
│           │   │   │   ├── hoc
│           │   │   │   │   └── wrapInputBox.js
│           │   │   │   ├── ui
│           │   │   │   │   ├── CheckBox.js
│           │   │   │   │   ├── FilteredList.js
│           │   │   │   │   ├── Header.js
│           │   │   │   │   ├── InputBox.js
│           │   │   │   │   ├── TodoItem.js
│           │   │   │   │   └── TodoList.js
│           │   │   │   └── wrappers
│           │   │   │       ├── App.js
│           │   │   │       └── StateProvider.js
│           │   │   ├── index.js
│           │   │   ├── services
│           │   │   │   └── todo.js
│           │   │   └── util
│           │   │       └── common.js
│           │   └── yarn.lock
│           └── entrypoint.sh
└── vulcan-1.4
    ├── README.md
    ├── build.gradle
    ├── gradle
    │   ├── docker.gradle
    │   └── wrapper
    │       ├── gradle-wrapper.jar
    │       └── gradle-wrapper.properties
    ├── gradle.properties
    ├── gradlew
    ├── gradlew.bat
    ├── jenkins
    │   ├── Dockerfile
    │   ├── entrypoint.sh
    │   └── pipeline-script
    ├── settings.gradle
    ├── whatnxt
    │   ├── Dockerfile
    │   ├── README.md
    │   ├── __init__.py
    │   ├── build.gradle
    │   ├── src
    │   │   ├── core
    │   │   │   ├── __init__.py
    │   │   │   ├── applicationView.py
    │   │   │   ├── models.py
    │   │   │   └── serviceController.py
    │   │   ├── entrypoint.sh
    │   │   └── requirements.txt
    │   └── whatnxt.db
    └── whatnxt-ui
        ├── Dockerfile
        ├── README.md
        ├── build.gradle
        └── src
            ├── core
            │   ├── package-lock.json
            │   ├── package.json
            │   ├── public
            │   │   ├── favicon.ico
            │   │   └── index.html
            │   ├── src
            │   │   ├── assets
            │   │   │   ├── images
            │   │   │   │   ├── add.svg
            │   │   │   │   └── search.svg
            │   │   │   ├── style
            │   │   │   │   └── index.css
            │   │   │   └── text
            │   │   │       └── en_US.js
            │   │   ├── components
            │   │   │   ├── hoc
            │   │   │   │   └── wrapInputBox.js
            │   │   │   ├── ui
            │   │   │   │   ├── CheckBox.js
            │   │   │   │   ├── FilteredList.js
            │   │   │   │   ├── Header.js
            │   │   │   │   ├── InputBox.js
            │   │   │   │   ├── TodoItem.js
            │   │   │   │   └── TodoList.js
            │   │   │   └── wrappers
            │   │   │       ├── App.js
            │   │   │       └── StateProvider.js
            │   │   ├── index.js
            │   │   ├── services
            │   │   │   └── todo.js
            │   │   └── util
            │   │       └── common.js
            │   └── yarn.lock
            └── entrypoint.sh

```
