FROM node:18 as node


ENV PATH /app/node_modules/.bin:$PATH

ENV TZ="Europe/Madrid"

RUN npm install -g npm@latest
WORKDIR /app
COPY package.json /app/package.json
RUN npm install

ADD ./ /app

COPY deploy/docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

COPY deploy/healthcheck.sh /healthcheck.sh
RUN chmod +x /healthcheck.sh

RUN chmod uo+rwx /tmp

ENTRYPOINT [ "/docker-entrypoint.sh" ]
