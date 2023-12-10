/// <reference path="libs/streamdeck-javascript-sdk/js/action.js" />
/// <reference path="libs/streamdeck-javascript-sdk/js/stream-deck.js" />
import { API_URL } from './libs/api.js';
import toggleAction from './actions/toggle.power/index';

// @ts-ignore
$SD.onConnected(async ({ actionInfo, appInfo, connection, messageType, port, uuid }) => {
	console.log('Stream Deck connected!');

	try {
		// @ts-ignore
		const cache = await fetch(`${API_URL}/cache`, {
			method: 'GET',
			redirect: 'manual'
		});

		console.log(await cache.json());
	}
	catch(error) {
		console.error(error);
	}

});
