FROM composer as web
WORKDIR /app
RUN composer create-project symfony/website-skeleton .
# COPY . .
RUN composer require webapp
RUN composer require "twig/twig:^3.0"
RUN composer require symfony/webpack-encore-bundle
RUN npm i -g bun

CMD symfony server:start