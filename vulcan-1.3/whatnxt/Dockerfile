FROM ubuntu:18.04

LABEL       Description="WhatNxt Image" \
            Maintainer="<suresh.kvsd@gmail.com>"

RUN apt-get update && apt-get install -y python3 python3-dev python3-pip nginx

# We copy just the requirements.txt first to leverage Docker cache
COPY src/requirements.txt /core/requirements.txt

WORKDIR /core

RUN pip3 install -r requirements.txt 

EXPOSE 5000

COPY src/core/__init__.py /core
COPY src/core/applicationView.py /core
COPY src/core/models.py /core
COPY src/core/serviceController.py /core
COPY src/entrypoint.sh /
 
RUN chmod +x /entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]