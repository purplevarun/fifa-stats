import PlayerSeasonNumeralKeyType from "../types/PlayerSeasonNumeralKeyType";
import PlayerSeasonType from "../types/PlayerSeasonType";

const isFormComplete = (data: PlayerSeasonType) => {
	const keys = Object.keys(data);
	for (const key of keys) {
		if (key === "name" || key === "photo") {
			if (data[key].length === 0) {
				return false;
			}
		} else {
			const numKey = key as PlayerSeasonNumeralKeyType;
			const val = data[numKey];
			if (isNaN(val)) {
				return false;
			}
		}
	}
	return true;
};

export default isFormComplete;
