FROM node:17

COPY package*.json ./
COPY src/ ./src/c
COPY main.js ./
COPY .cljs_node_repl/ ./.cljs_node_repl/
COPY .clj-kondo/ ./.clj-kondo/
COPY deps.edn ./
COPY entrypoint.sh ./

RUN npm install

ENTRYPOINT ["./entrypoint.sh"]


