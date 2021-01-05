# VULCAN 

A full stack blueprint for DevOps Essentials .

Project `VULCAN` is intended to provide a blueprint/template bundled with a full stack essential tool kit encapsulated with automation & utility scripts required for any service/application to be hosted on a public cloud . 

`H I G H L I G H T S  :`

- An in-out Python Project
- 3 Tier web application based on MVC paradigm
- Microservices Architecture 
- Dockerized images for Core , Sidecar applications & Database
- Gradle Project 
- Container Orchestration via Kubernetes 
- Infrastructure as a Code with Terraform
- Configuration Management with Ansible
- CI with Jenkins 
- Automation to host service/application on  AWS, GCP & OCI 

`T E C H  S T A C K :`
	
- Programming Language 
   > [ Python3 ](https://www.python.org/downloads/) | >= v3.7 

- Build Tools 
   > [ Gradle ](https://gradle.org/install/) | >= v6x 

- Continuous Integration Tool 
  > [ Jenkins ](https://www.jenkins.io/doc/) | >= v2.2x 

- Infrastructure as a Code 
  > [ Terraform ](https://www.terraform.io/downloads.html) | >= v0.12 

- Containerization Tool 
  > [ Docker ](https://docs.docker.com/engine/install/) | >= v19.03x <br /> 
  > [ Docker-compose ](https://docs.docker.com/compose/install/) | >= v1.26.2

- Docker Registry 
  > [ Docker Hub ](https://docs.docker.com/docker-hub/) 

- Container Orchestration 
  > [ Kubernetes ](https://kubernetes.io/docs/tasks/tools/) | >= v1.17 <br /> 
  > [ kubectl ](https://kubernetes.io/docs/tasks/tools/install-kubectl/) | >= v1.2 <br /> 
  > [ minikube ](https://minikube.sigs.k8s.io/docs/start/) 

`NOTE : Make sure to install all the above dependecies as per your Operating System & desired bit processor before running any of the subprojects , any specific pre-requisites (if any)  are mentioned in detail on each of the subproject's  README` <br /> 


`HOW TO RUN THE SUB PROJECTS :`

1. Click on each of the projects to see how 

    [ VULCAN-1.1 ](https://github.com/KVSDURGASURESH/VULCAN/tree/master/vulcan-1.1/README.md ) : GIT `[ DISTRIBUTED VERSION CONTROL ]` + DOCKER `[ CONTAINERIZATION ]` + DOCKER COMPOSE `[ MULTI CONTAINER SETUP ]`

    [ VULCAN-1.2 ](https://github.com/KVSDURGASURESH/VULCAN/tree/master/vulcan-1.2/README.md ) : GIT `[ DISTRIBUTED VERSION CONTROL ]` + DOCKER `[ CONTAINERIZATION ]` + GRADLE `[ BUILD + DEPENDENCY MANAGEMENT ]` +  DOCKERHUB `[ DOCKER REGISTRY ]`

    [ VULCAN-1.3 ](https://github.com/KVSDURGASURESH/VULCAN/tree/master/vulcan-1.3/README.md ) : GIT `[ DISTRIBUTED VERSION CONTROL ]` + DOCKER `[ CONTAINERIZATION ]` + GRADLE `[ BUILD + DEPENDENCY MANAGEMENT ]` +  DOCKERHUB `[ DOCKER REGISTRY ]` + JENKINS PIPELINE `[ CONTINOUS INTEGRATION ]`

    [ VULCAN-1.4 ](https://github.com/KVSDURGASURESH/VULCAN/tree/master/vulcan-1.4/README.md ) : GIT `[ DISTRIBUTED VERSION CONTROL ]` + DOCKER `[ CONTAINERIZATION ]` + GRADLE `[ BUILD + DEPENDENCY MANAGEMENT ]` +  DOCKERHUB `[ DOCKER REGISTRY ]` + JENKINS PIPELINE WITH GRADLE BUILD COMMANDS `[ CONTINOUS INTEGRATION ]`


2. [ Tree view of the Project  ](https://github.com/KVSDURGASURESH/VULCAN/tree/master/treeView.md )

      Install Tree if !Exists 

      ```bash
      LINUX
      $ sudo apt-get install tree

      MACOS
      $ brew install tree
      ```
      
      ```bash
      $ tree -I 'node_modules|cache|lib|venv|build'
      ```

      ```bash
      $ WINDOWS (GitBash)
      ```

      [download exe](http://gnuwin32.sourceforge.net/packages/tree.htm) 
      and add it to "C:\Program Files\Git\usr\bin" :










