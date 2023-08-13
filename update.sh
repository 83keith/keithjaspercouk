export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" 
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"


#mkdir -p /home/ubuntu/$DEPLOYMENT_GROUP_ID/$DEPLOYMENT_ID

cp -R /opt/codedeploy-agent/deployment-root/$DEPLOYMENT_GROUP_ID/$DEPLOYMENT_ID/deployment-archive /home/ubuntu/autostage/

#

#yarn install
#yarn upgrade
#yarn build#

#pm2 restart keithjaspercouk

