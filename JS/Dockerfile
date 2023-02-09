FROM node as qwik-bootstrap
RUN npm i -g bun
RUN bun upgrade --canary
WORKDIR /app
RUN mkdir -p public
COPY ./qwik/package.json .

WORKDIR /app/src
RUN mkdir -p lib
COPY ./qwik/src/entry* .
COPY ./qwik/src/root.tsx .
WORKDIR /app/src/components
COPY ./qwik/src/components/router-head .
WORKDIR /app/src/routes
COPY ./qwik/src/routes/service-worker.ts .
COPY ./qwik/src/routes/layout.tsx .
WORKDIR /app
RUN npx depcheck || :
RUN bun i typescript undici vite vite-tsconfig-paths bootstrap prettier sass eslint eslint-plugin-qwik node-fetch @builder.io/qwik @builder.io/qwik-city @emotion/react @emotion/styled @mui/material @mui/x-data-grid @types/eslint @types/node @types/node-fetch @typescript-eslint/eslint-plugin @typescript-eslint/parser  || :

CMD ls -lai