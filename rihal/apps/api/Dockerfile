FROM node:lts-alpine
WORKDIR /app
COPY ./dist/apps/api .
ENV PORT=3333
EXPOSE ${PORT}
RUN npm install --production
RUN npm install reflect-metadata tslib rxjs hbs
CMD node ./main.js