
###################
# BUILD FOR DEVELOPMENT
###################

FROM node:18-alpine As development

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

RUN npm ci

COPY --chown=node:node . .

USER node


###################
# BUILD FOR PRODUCTION
###################

FROM node:18-alpine As build

WORKDIR /usr/src/app

COPY . .

COPY --chown=node:node package*.json ./

COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

RUN npm run build

ENV NODE_ENV production

RUN npm ci --only=production && npm cache clean --force

USER node


###################
# PRODUCTION
###################

FROM node:18-alpine As production

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

# Start the server using the production build
# CMD [ "node", "dist/main.js" ]

WORKDIR /usr/src/app
COPY   ./. ./.
COPY package*.json ./
#COPY dist ./dist
RUN npm i
#USER node
RUN npm install pm2 -g
CMD [ "pm2-runtime", "dist/main.js" ]