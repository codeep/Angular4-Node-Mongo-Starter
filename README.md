# Node - Mongo - Angular4 Starter

#### The project structure gives you a great opportunity to scale your application. Adding and maintaining API endpoints is easy and very fast. The structure is ideal for development process. 
#### For production mode, only one server is required which is more affordable and convenient. 

## Development server
Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Development API
Run `npm run api` for a separate server for API server. Navigate to `http://localhost:3000/`.

## Production

Run `npm run production` to generate a static files from Angular project and serve them from NodeJS.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `server/dist` directory.

## Build Production

Run `npm run buildPROD` to build the project for production. The build artifacts will be stored in the `server/dist` directory.

## Project general structure

    ├── server                   # The whole API folder
    	├── api                   # Project Moules(Route Handlers, Mongoose Models), the modules are collected automatically,  and inserted into the API
    	├── bin                   # Project start point
    	├── config                # Config files
    	├── lib                   # Libs used - express, mongoose
    ├── src                    # Angular application source
    	├── app                     # Angular App
    		├── components                 # All the Angular's structure components
    		├── guards                     # Guards(Auth)
    		├── routing                    # Application Routing
    		├── services                   # Services(Request)
    			├── Request                   # Responsible for making get, post requests to the API.
                    ├── app.component.ts         # App's first component
                    ├── app.component.html       # App's entry template
                    ├── app.component.spec.ts    # Component's unit tests
                    ├── app.component.css        # Css for the component
                    ├── app.module.ts            # The root module that you bootstrap to launch the application
    	├── assets                     # App assets, Here we can place public files
    	├── environments               # Production and development environments

The client side was generated with [angular-cli](https://github.com/angular/angular-cli).
