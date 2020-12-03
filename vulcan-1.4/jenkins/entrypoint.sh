#!/bin/sh
set -x 

echo $PROJECT_HOME

if [ ! -f $PROJECT_HOME/.gradlew ]; then
	echo `find $PROJECT_HOME -maxdepth 1 -iname '*gradle*' -exec mv {} jenkins \;`
	cd $PROJECT_HOME && gradle init
	echo `find $PROJECT_HOME/jenkins -iname '*gradle*' -exec mv {} $PROJECT_HOME \;`
fi