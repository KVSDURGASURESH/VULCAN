#!/bin/sh

set -x 

echo $PROJECT_HOME
cd $PROJECT_HOME && mv *gradle* jenkins
cd $PROJECT_HOME && gradle init
cd $PROJECT_HOME && mv jenkins/*gradle* .