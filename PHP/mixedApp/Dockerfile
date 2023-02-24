FROM bitnami/symfony as deploy-symfony
WORKDIR /
ENV COMPOSER_ALLOW_SUPERUSER 1
RUN apt update && apt install -y curl build-essential
RUN curl -1sLf 'https://dl.cloudsmith.io/public/symfony/stable/setup.deb.sh' | bash
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
ENV PATH "$PATH:/root/.symfony/bin"
ENV NVM_DIR /root/.nvm

RUN apt install -y symfony-cli
RUN git config --global user.email "ajffj4@gmail.com"
RUN git config --global user.name "adanfj"
RUN . $NVM_DIR/nvm.sh && nvm install 19.6.0
RUN . $NVM_DIR/nvm.sh && nvm alias default 19.6.0
RUN . $NVM_DIR/nvm.sh && npm i -g bun

CMD . $NVM_DIR/nvm.sh \
    && ( [ -d "/app/vendor" ] || symfony new --webapp app )\
    && cd /app \
    && composer require twig && composer require encore && composer require symfony/asset \
    && bun i \
    && chmod -R 777 . \
    && symfony serve

