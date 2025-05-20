export const emit = (eventName, data = {}) => {
	const event = new CustomEvent(eventName, { detail: data });
	console.log("emitting event with data::", data, event);
	document.dispatchEvent(event);
};

export const listen = (eventName, callback) => {
	console.log("listening for event::", eventName);
	document.addEventListener(eventName, callback);
};
