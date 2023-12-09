/// <reference path="../../libs/streamdeck-javascript-sdk/js/action.js" />
import {API_URL} from "../../constants";

const toggleAction = new Action('com.doubleedesign.lifx.action.toggle.power');

toggleAction.onKeyUp(({ action, context, device, event, payload }) => {
	console.log(payload.settings);
});

export default toggleAction;
