export const loadState = () => {
	try {
		const serializedData = localStorage.getItem("state");
		if (serializedData === null) {
			return undefined;
		}
		return JSON.parse(serializedData); // Si encontramos con exito nuestro storage lo devolvemos.
	} catch (error) {
		return undefined; // Si ocurre algun error, devuelvo undefined para cargar el state inicial.
	}
};

export const saveState = (state) => {
	const storage = {
		mailReducer : state.mailReducer 
	};
	try {
		const serializedData = JSON.stringify(storage);
		localStorage.setItem("state", serializedData);
	} catch (error) {
		// Acá podemos capturar o crear cualquier log que deseemos en caso de que falle el salvado en el storage.
	}
};
