/**
 * 주어진 이름 배열에서 랜덤한 20개의 요소를 반환
 * @param {string[]} sourceNames - 랜덤 요소를 추출할 배열
 * @returns {string[]} 랜덤으로 선택된 20개의 요소를 포함한 배열
 */
const getRandomRow = (sourceNames: string[]): string[] => {
  const row = [];
  for (let i = 0; i < 20; i++) {
    row.push(sourceNames[Math.floor(Math.random() * sourceNames.length)]);
  }
  return row;
};

/**
 * 주어진 배열에서 특정 오프셋을 기준으로 보이는 요소를 반환
 * @param {string[]} row - 원본 배열
 * @param {number} offset - 기준 오프셋
 * @returns {string[]} 오프셋을 기준으로 보이는 7개의 요소를 포함한 배열
 */
const getVisibleRow = (row: string[], offset: number): string[] => {
  const visible = [];
  for (let i = -3; i <= 3; i++) {
    const index = (((offset + i) % row.length) + row.length) % row.length;
    visible.push(row[index]);
  }
  return visible;
};

export { getRandomRow, getVisibleRow };
