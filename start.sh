#!/bin/bash

# Inicie o JSON-Server em segundo plano
json-server --watch /db.json &

# Inicie o Nginx em primeiro plano
nginx -g 'daemon off;'
