FROM php as web

WORKDIR /var/www/html

RUN docker-php-ext-configure gd --with-jpeg=/usr/include/ && docker-php-ext-install gd

EXPOSE 80

FROM certbot/certbot as cert

RUN