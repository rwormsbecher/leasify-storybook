FROM node:18 as builder

WORKDIR /usr/app

COPY ./package*.json ./

COPY ./.storybook ./.storybook

COPY ./nginx ./nginx

COPY . .

RUN npx rimraf node_modules

RUN npm i

RUN npm run build-storybook

FROM nginx:stable-alpine
COPY --from=builder /usr/app/storybook-static /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY startup.sh /startup.sh
RUN chmod +x /startup.sh
