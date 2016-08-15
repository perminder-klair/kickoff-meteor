# Meteor 1.4 Starting Point

## Requirements
- NodeJs
- MeteorJs

## Setup for development

```shell
meteor npm install
```

### To run the app

```bash
meteor --settings settings.json
```

### Scripts

To lint:

```bash
npm run lint
```

### Plugins used (for reference)

- https://github.com/kadirahq/flow-router - For routing
- npm install --save react react-dom - For ReactJs Support
- npm install --save react-addons-pure-render-mixin - load extra required modules for react
- npm install --save react-mounter - to load react in meteor
- meteor add react-meteor-data - to load database in react from meteor
- meteor add accounts-base - to load users
- meteor add accounts-password - to able to login using password
- meteor add service-configuration - to login using social services
- meteor add accounts-facebook - to login using facebook
- meteor add useraccounts:semantic-ui - login ui
- meteor add useraccounts:core - meteor accounts ui package
- https://github.com/aldeed/meteor-simple-schema - db validation library
- meteor add aldeed:collection2 -  for making validations work
- meteor add dburles:collection-helpers - to allow helpers in db file
- meteor add reywood:publish-composite - to allow relational db
- meteor add twbs:bootstrap - to install bootstrap 3
- meteor add fortawesome:fontawesome - to install fontawesome
- meteor add useraccounts:bootstrap - to create signup/login pages using bootstrap
- meteor add tmeasday:publish-counts - to count total items in db
- meteor add edgee:slingshot - to upload amazon images
- meteor add email - to send emails using mailgun
- meteor add meteorhacks:ssr - set html template for emails
- meteor add meteorhacks:kadira - error tracking systen goto: www.kadira.io
- meteor add fourseven:scss - use scss
- meteor add momentjs:moment - to install momentjs for dates
- meteor add anti:fake - to generate dummy data
- meteor add random - random number generator
- meteor add ovcharik:alertifyjs - nice alert library

### Removed plugins (.meteor/packages)

- autopublish             # Publish all data to the clients (for prototyping)
- insecure                # Allow all DB writes from clients (for prototyping)

### Notes

- https://facebook.github.io/react/docs/component-specs.html
- https://www.meteor.com/tutorials/blaze/creating-an-app
- https://github.com/meteor-useraccounts/core/blob/master/Guide.md - for user login pages
- https://github.com/aldeed/meteor-simple-schema - for validations
- https://github.com/kadirahq/flow-router - routing system
- https://docs.mongodb.com/manual/reference/operator/update/push/ - mongodb docs