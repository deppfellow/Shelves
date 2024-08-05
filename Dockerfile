FROM node

WORKDIR /usr/src/app

# Reorder the COPY and RUN step to not invalidate build cache
COPY . .

RUN npm install

CMD ["npm", "run", "dev"]
