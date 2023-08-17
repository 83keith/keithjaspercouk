export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" 
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"


rm -rf /home/ubuntu/autostage

mkdir -p /home/ubuntu/autostage/deployment-archive/
echo $DEPLOYMENT_GROUP_ID
echo $DEPLOYMENT_ID
cp -R /opt/codedeploy-agent/deployment-root/$DEPLOYMENT_GROUP_ID/$DEPLOYMENT_ID/deployment-archive/ /home/ubuntu/autostage/

cd /home/ubuntu/autostage/deployment-archive



rm -rf /var/www/html/*

cp /home/ubuntu/autostage/deployment-archive/* /var/www/html/ -R
cp /home/ubuntu/autostage/deployment-archive/.htaccess /var/www/html/
chmod 777 /var/www/html/includes/smarty/

#yarn install
#yarn upgrade
#yarn build#


