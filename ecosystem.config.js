module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'cms',
      script    : 'src/bin/www',
      env_test: {
        NODE_ENV: 'test'
      },
      env_prod : {
        NODE_ENV: 'prod'
      },
      env_dev : {
        NODE_ENV: 'dev'
      }
    }

    // Second application
  //  {
  //    name      : 'WEB',
  //    script    : 'web.js'
  //  }
  ]

};
