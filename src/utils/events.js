export const emit = (eventName, data = {}) => {
	const event = new CustomEvent(eventName, { detail: data });

	document.dispatchEvent(event);
};

export const listen = (eventName, callback) => {
	document.addEventListener(eventName, callback);
};
