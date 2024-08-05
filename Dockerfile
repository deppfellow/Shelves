FROM node

WORKDIR /usr/src/app

# Reorder the COPY and RUN step to not invalidate build cache
COPY . .

RUN npm install

# Use better step for production
# If you need prebuilt files, add RUN npm build step
CMD ["npm", "run", "dev"]
