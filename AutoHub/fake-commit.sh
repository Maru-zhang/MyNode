# /bin/bash

cd `dirname $0`
path = "`dirname $0`""/mass.txt"
if [ ! -x "$path"]; then
 	touch mass.txt
fi
date >> mass.txt
cd ..
# git add .
# git commit -m "this is auto commit"
# git push origin
