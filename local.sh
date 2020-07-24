#!/bin/bash 

echo -e "------------\nRunning Local Developer Docker Instance:" `date` 
 
docker run --rm -it \
-w="/code" \
-p 4000:4000 \
-v `pwd`:/code \
nodebase:1.0.0 /bin/bash