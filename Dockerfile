FROM node:14.15.4-slim

# Esse usuario ja vem na imagem.
USER node

WORKDIR /home/node/app

CMD [ "sh", "-c", "npm install && tail - f /dev/null" ]