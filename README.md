# Hackathon Quickstart: Sinatra + Angular 2

Fork/clone this repository to quickly dive into a hackathon without the hassle of setting up your API or frontend. 

This quickstart project depends on Sinatra for Ruby and Angular 2. It features a reveal.js template for your pitch and a [generic config for NGINX](config/nginx.conf), in case you need to proxy a remote API. 


## Usage

The project contains a [`Makefile`](Makefile), which eases the basic development: 

```bash
$ make backend          # install backend dependencies and run rackup
$ make frontend         # install frontend dependencies and watch for changes
$ make pitch            # install pitch dependencies and run the presentation
```

Make will look for `/backend/bundle.installed`, `/frontend/node_modules` and `/pitch/node_modules` to ensure it doesn't pull the dependencies each time it is called. 


### Backend

Sinatra is preconfigured to statically serve the files from `/frontend/dist`. To manually install all dependencies and start Sinatra: 

```bash
$ cd backend/
$ bundle install      # install gems
$ rackup              # run sinatra
```


### Frontend

The frontend code is separated into `src/` and `dist/` directories, preventing confusion with a "dirty" code base. To manually install all dependencies and start working:

```bash
$ cd frontend/
$ npm install      # install modules and copy them to `dist/`
$ gulp watch       # compile on changes
```

As `node_modules` will be in `/frontend/node_modules`, but `dist` will be at `/frontend/dist/`, the modules will not be accessible by the web app. To fix this, while keeping the clean structure, the task `npm modules:replace` will be called in the `postinstall` task after installing the dependencies. 


### Pitch

[reveal-md](https://github.com/webpro/reveal-md) is used as the presentation framework in the `/pitch` directory. To manually install the dependencies and run the server: 

```bash
$ cd pitch/
$ npm install        # install modules
$ npm run reveal     # start the reveal-md webserver
```
