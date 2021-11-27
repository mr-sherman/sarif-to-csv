FROM node:17

WORKDIR /github/workspace 
COPY package*.json /github/workspace/
COPY src/ /github/workspace/src/
COPY main.js /github/workspace/
COPY .cljs_node_repl/ /github/workspace/.cljs_node_repl/
COPY .clj-kondo/ /github/workspace/.clj-kondo/
COPY deps.edn /github/workspace/
COPY entrypoint.sh /

RUN npm install

ENTRYPOINT ["/entrypoint.sh"]


