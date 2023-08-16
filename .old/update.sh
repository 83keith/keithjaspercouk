export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" 
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"


rm -rf /home/ubuntu/autostage
mkdir -p /home/ubuntu/autostage/deployment-archive

cp -R /opt/codedeploy-agent/deployment-root/$DEPLOYMENT_GROUP_ID/$DEPLOYMENT_ID/deployment-archive /home/ubuntu/autostage/
cd /home/ubuntu/autostage/deployment-archive
rm -rf package-lock.json
rm -rf yarn.lock

yarn install
yarn build
pm2 restart keithjaspercouk



#

#yarn install
#yarn upgrade
#yarn build#


