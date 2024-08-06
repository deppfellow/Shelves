# docker start <container_name> - to run container
# docker stop <container_name> - to stop container
# docker restart <container_name> - self explanatory
# docker ps -a ==> look the container status
# docker logs -f <container_name> ==> look up on container logs  

# Dont invalidate build cache

FROM node

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
