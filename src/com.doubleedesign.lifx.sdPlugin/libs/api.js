export const API_URL = 'http://localhost:4000/lifx';

export const api = {

	getGroups: async function () {
		try {
			const cache = await fetch(`${API_URL}/cache/groups`, {
				method: 'GET',
				redirect: 'manual'
			});

			return await cache.json();
		}
		catch (error) {
			console.error(error);
		}
	}
};
