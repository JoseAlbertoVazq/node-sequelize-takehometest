#!/bin/bash

# ports="4000 4001 4002"
ports="3000"

for p in $ports
do
  curl localhost:${p}
  [[ "$?" != 0 ]] && exit 1
done

exit 0