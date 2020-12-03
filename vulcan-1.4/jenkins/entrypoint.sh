#!/bin/sh
set -x 

echo $PROJECT_HOME

if [ ! -f $PROJECT_HOME/.gradlew ]; then
    cd $PROJECT_HOME && mv *gradle* jenkins/
    cd $PROJECT_HOME && gradle init
    cd $PROJECT_HOME && mv jenkins/*gradle* $PROJECT_HOME
fi