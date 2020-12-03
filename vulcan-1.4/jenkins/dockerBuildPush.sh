#!/bin/sh

set -x 

echo $PROJECT_HOME
cd $PROJECT_HOME && ./gradlew build
cd $PROJECT_HOME && ./gradlew tasks
cd $PROJECT_HOME && ./gradlew docker
cd $PROJECT_HOME && ./gradlew dockerTagDockerHub
cd $PROJECT_HOME && ./gradlew dockerPushDockerHuB