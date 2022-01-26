# This Dockerfile is a community contribution and is not maintained by the New Relic Docs team.
# Use it at your own risk!
#
# docker build . -t docs-preview
# docker run -ti --rm -p 8080:80 docs-preview
# http://localhost:8080

FROM node:16 as build

WORKDIR /app

# Pull dependencies
ADD package.json yarn.lock .nvmrc /app/
RUN yarn

ADD . /app
RUN yarn build

FROM nginx
COPY --from=build /app/public /usr/share/nginx/html
RUN chmod 644 -R /usr/share/nginx/html &&\
    find /usr/share/nginx/html -type d -execdir chmod 755 {} +
