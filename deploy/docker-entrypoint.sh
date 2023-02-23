#!/bin/bash

if [[ -z "$@" ]]
then
    node /app/src/index.js
else    
    exec "$@"
fi

