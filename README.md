/**Project Structure--------------------------------**/

config/Infrastrucure
	logger, node env config, db config etc etc..
	multiple aspects of the application can go here, which are needed across all the layers of an application
routes
	routes.js - common application routes
    specific behavior,domain routes.js - specific functionality routes will go inside this
	routes will only redirect to controller to handle the request, do nothing else
controllers/adapters/lib
	Either perform an operation or redirect to service/application
	Use promises/callbacks wherever possible
service/application 
     this is responsible for actual business logic, 
     db communication or any third party communications
	 if to implemet promise in controller layer, should function needs to be returned from this layer
utility
	Helper classess
	constants
    dummy data, app config
models/domain
	classess	
spec
	test files organized per layer
    env variables needed configured in separate config file
    TODO : Mocking, set up test Runner
node_concepts 
    This will not be avilable in real project,
    This folder just contains node concepts with examples
server.js
app.js/index.js
package.json
server.js
Readme.md

/**---------Packages installed -----**/
npm init
npm install express --save
npm install --save-dev nodemon
npm install body-parser --save
npm install --save winston
npm install --save https://github.com/winstonjs/winston-daily-rotate-file/tarball/master
npm install jasmine-node --save-dev
npm install request --save

For string, date, array, promise - many more packages are available like string -format, dateformatter etc.
/**----------------------**/
To run the application
npm strat
To run the test cases
npm test
/**----------------------**/

Project structure can be defined around roles as well e.g.
Instead of keeping all the files in separate folder regarding one behavior, we can keep them in one folder inside application layer
config
application
    account
        account.js
        savingAccount.js
        CurrentAccount.js
        accountService.js
        accountController.js
routes
    account.js
utility
index.js
package.json
server.js

/**----------------------**/
