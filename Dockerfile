# docker start <container_name> - to run container
# docker stop <container_name> - to stop container
# docker restart <container_name> - self explanatory
# docker ps -a ==> look the container status
# docker logs -f <container_name> ==> look up on container logs  

FROM node

WORKDIR /usr/src/app

# Reorder the COPY and RUN step to not invalidate build cache
COPY . .

RUN npm install

CMD ["npm", "run", "dev"]
