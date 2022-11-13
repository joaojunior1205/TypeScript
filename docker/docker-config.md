version: '3.9'

services:

  db:
    image: [IMAGE-NAME]
    restart: always
    environment:
      POSTGRES_PASSWORD: [PASSWORD-DATABASE]
    ports:
      - [PORT]:[PORT] -> Default 5432