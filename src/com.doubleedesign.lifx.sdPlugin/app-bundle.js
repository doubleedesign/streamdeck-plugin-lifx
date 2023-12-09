const toggleAction = new Action('com.doubleedesign.lifx.action.toggle.power');
toggleAction.onKeyUp(({ action, context, device, event, payload }) => {
    console.log(payload.settings);
});

const API_URL = 'http://localhost:4000/lifx';

/// <reference path="libs/streamdeck-javascript-sdk/js/action.js" />
/// <reference path="libs/streamdeck-javascript-sdk/js/stream-deck.js" />


// @ts-ignore
$SD.onConnected(async ({actionInfo, appInfo, connection, messageType, port, uuid}) => {
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
