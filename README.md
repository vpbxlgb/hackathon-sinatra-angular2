# Hackathon Quickstart: Sinatra + Angular 2

Fork/clone this repository to quickly dive into a hackathon without the hassle of setting up your API or frontend. 

This quickstart project depends on Sinatra for Ruby and Angular 2. It features a reveal.js template for your pitch and a [generic config for NGINX](config/nginx.conf), in case you need to proxy a remote API. 


### Frontend

To keep a clean code base, the frontend directory is separated into a `src` and a `dist` directory. Basically install all dependencies and start working:

```bash
$ npm install      # install dependencies
$ gulp watch       # compile on changes
```

##### node_modules

As `node_modules` will be in `/frontend/node_modules`, but `dist` will be at `/frontend/dist/`, the modules will not be accessible by the web app. To fix this, while keeping the clean structure, the task `npm modules:replace` will be called in the `postinstall` task after installing the dependencies. 
