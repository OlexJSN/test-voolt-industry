export function chunk<T>(inputArray: T[], perChunk: number): T[][] {
	return inputArray.reduce<T[][]>((resultArray, item, index) => {
		const chunkIndex = Math.floor(index / perChunk);
		if (!resultArray[chunkIndex]) {
			resultArray[chunkIndex] = []; // start a new chunk
		}

		resultArray[chunkIndex].push(item);

		return resultArray;
	}, []);
}
