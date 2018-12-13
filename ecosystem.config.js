module.exports = {
  apps : [{
    name      : 'FundacionLaMercedVida',
    script    : './server.js',
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : '66.97.37.2',
      key  : '~/.ssh/id_rsa.pub',
      ref  : 'origin/master',
      repo : 'git@github.com:migueljrojas/lamerced_front.git',
      path : '/home/admin/web/lamercedvida.com/public_html',
      'post-deploy' : 'npm install && npm run build && pm2 startOrRestart ecosystem.config.js --env production'
    }
  }
};
