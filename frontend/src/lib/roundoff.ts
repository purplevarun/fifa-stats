const ROUND_OFF_FACTOR = 100;

const roundoff = (numerator: number, denominator: number) => {
	const ratio = numerator / denominator;
	return Math.round(ratio * ROUND_OFF_FACTOR) / ROUND_OFF_FACTOR;
};

export default roundoff;
