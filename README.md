
Bot Command Line Interface Console
==================================

This application is based on the [web-cli-sample-app](https://github.com/amiturgman/web-cli), so everything you read there regarding enabling the different features is also relevant here.
I removed the google authentication and user management features to focus on the bot related scenarios, but you can follow the instructions of how to enable authentication and user management in the [web-cli-sample-app](https://github.com/amiturgman/web-cli) page.

![Example for the app](https://github.com/catalystcode/graph-bot-cli/raw/master/images/screenshot.png "Screenshot")


Running Locally
---------------
	git clone https://github.com/catalystcode/graph-bot-cli.git
	cd graph-bot-cli
	npm install
	cd public
	bower install

	
	
You should define a few environment variables in order for the command line interface to be able to work with you bot:

Copy the file `config/dev.sample.json` to `config/dev.private.json` and edit the following values:

To enable communicating with your bot:

`BOT_APP_ID`- the Microsoft bot Id

`BOT_IFRAME_HANDLE`- the handle name you provided when registered your bot

`BOT_IFRAME_SECRET`- the iframe secret from the dev portal- click on `get bot embed codes` and get it from the `web chat`


Logging
-------

To enable viewing and querying logs as it appears in the screenshot, you'll need to enable logs by providing the following environment variables:

`LOG_STORAGE_ACCOUNT`- azure storage account name to use for storing logs

`LOG_STORAGE_KEY`- the azure storage account key

`LOG_LEVEL`- one  of the following `log`, `info`, `warn`, `error`

`LOG_ENABLED`: false


In addition to that, you'll need to use the [azure-logging](https://github.com/amiturgman/azure-logging) node module in your bot code to be able to collect your bot application logs.
Follow the code in the [index.js](index.js) file as a reference to enabling collecting logs from your bot service.

Now run:

	npm start
	Browse to `http://localhost:3000`


Running in the cloud
--------------------
Make sure you added the environment variables to the app host server


# License
[MIT](LICENSE)

