/// <reference path="../../../libs/streamdeck-javascript-sdk/js/property-inspector.js" />
/// <reference path="../../../libs/streamdeck-javascript-sdk/js/utils.js" />

import { api } from '../../../libs/api.js';

$PI.onConnected(async (jsn) => {
	const form = document.getElementById('property-inspector');
	const selectbox = document.getElementById('group');
	const { actionInfo, appInfo, connection, messageType, port, uuid } = jsn;
	const { payload, context } = actionInfo;
	const { settings } = payload;
	const groups = await api.getGroups();

	groups.forEach(group => {
		let option = document.createElement('option');
		option.text = group.label;
		option.value = group.group;
		selectbox.add(option);
	});

	Utils.setFormValue(settings, form);

	form.addEventListener(
		'input',
		Utils.debounce(150, () => {
			const value = Utils.getFormValue(form);
			$PI.setSettings(value);
		})
	);

});

$PI.onDidReceiveGlobalSettings(({ payload }) => {
	console.log('onDidReceiveGlobalSettings', payload);
});
