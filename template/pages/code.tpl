<p>
    This site is hosted on AWS using CodeDeploy. This facility is an AWS automation which allows the monitoring of a GIT
    repository. Once AWS sees a change in the repository's version it downloads the code and deploys to the server.
</p>

<p>
    After this code is deployed on the server a defined (by script) set of actions take place, this is a good place to
    do some sanity checks which will come soon, i.e. before the code is commited to GIT a hash is generated for each
    file and then either manually copied to the server (possible more secure) or a hash table sent to GIT along with the
    commit to compare against to try to help prevent code replacement attacks.
</p>

<p>
    Below is a sample of the script used to automate the deployment of the source to the server.
</p>

<code class="code section">
    export NVM_DIR="$HOME/.nvm"<br />
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"<br />
    [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"<br />
    <br />
    <br />
    rm -rf /home/ubuntu/autostage<br />
    mkdir -p /home/ubuntu/autostage/deployment-archive<br />
    <br />
    cp -R /opt/codedeploy-agent/deployment-root/$DEPLOYMENT_GROUP_ID/$DEPLOYMENT_ID/deployment-archive<br />
    /home/ubuntu/autostage/<br />
    cd /home/ubuntu/autostage/deployment-archive<br />
    rm -rf package-lock.json<br />
    rm -rf yarn.lock<br />
    <br />
    yarn install<br />
    yarn build<br />
    pm2 restart keithjaspercouk<br />
</code>
<h2>THIS CODE IS CURRENTLY OLD AND USELESS</h2>
<p> This code is broken down as follows:</p>