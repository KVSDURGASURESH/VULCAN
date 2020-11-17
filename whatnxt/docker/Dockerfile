FROM ubuntu:18.04

LABEL       Description="WhatNxt Image"
            Maintainer="<suresh.kvsd@gmail.com>"

RUN apt-get update && apt-get install -y python3 python3-dev python3-pip nginx

# We copy just the requirements.txt first to leverage Docker cache
COPY ./requirements.txt /app/requirements.txt

WORKDIR /core

RUN pip3 install -r requirements.txt

COPY . /core

ENTRYPOINT [ "python3" ]

CMD [ "core/applicationView.py" ]