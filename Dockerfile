FROM node:17

WORKDIR /app
COPY package*.json /app/
COPY src/ /app/src/
COPY main.js /app/
COPY .cljs_node_repl/ /app/.cljs_node_repl/
COPY .clj-kondo/ /app/.clj-kondo/
COPY deps.edn /app/
COPY entrypoint.sh /

RUN npm install

ENTRYPOINT ["/entrypoint.sh"]


