FROM node:8.10.0-alpine

LABEL       Description="WhatNxt Image" \
            Maintainer="<suresh.kvsd@gmail.com>"

EXPOSE 3000

COPY ./core /home/app
WORKDIR /home/app/core
COPY ./entrypoint.sh /
 
RUN chmod +x /entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]


