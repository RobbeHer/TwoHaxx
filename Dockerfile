## ST1-BUILD ##
FROM node:15-alpine AS Build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
RUN npm install -g @angular/cli@10.0.2
COPY . .
RUN npm run build

## STAGE 2: RUN ##

FROM nginx:1.19-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/TwoHaxx /usr/share/nginx/html

