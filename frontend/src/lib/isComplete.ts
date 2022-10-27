const isComplete = (data: any) => {
	const values = Object.values(data);
	for (const value of values) {
		if (typeof value === "string") {
			if (value.length === 0) {
				return false;
			}
		} else if (typeof value === "number") {
			if (isNaN(value)) {
				return false;
			}
		}
	}
	return true;
};

export default isComplete;
