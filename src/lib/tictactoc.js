const _getDirections = _ => {
  const divisions = [
    { x: -1, y: -1 },
    { x: 0, y: -1 },
    { x: 1, y: -1 },
    { x: -1, y: 0 },
    { x: 1, y: 0 },
    { x: -1, y: 1 },
    { x: 0, y: 1 },
    { x: 1, y: 1 }
  ];

  // division 방향 보고 체크하면 되겠음.
  return divisions;
};

class TicTacToc {
  constructor(size) {
    this.state = {
      size,
      isOver: false,
      bgColors: ["#fce4ec", "#e3f2fd"]
    };
  }

  getIsOver() {
    return this.state.isOver;
  }

  setSize(size) {
    this.state.size = size;
  }

  setBgColors(color) {
    this.state.bgColors.push(color);
  }

  getBgColors() {
    return this.state.bgColors;
  }

  getResult(boards, marker, index) {
    // index => pos
    const pos = this._getIndexToPos(index);
    // check할 방향을 구한다
    const directions = _getDirections();
    // 각 방향의 board의 marker를 비교한다. 같으면 같은 방향으로 계속 찾고 아니면 끝
    const markerCounts = [];

    for (const direction of directions) {
      markerCounts.push(this._getMarkerCount(boards, marker, direction, pos));
    }

    const result = markerCounts.some(
      markerCount => markerCount === this.state.size
    );

    if (result) {
      this.state.isOver = true;
    }

    return result;
  }

  _getPosToIndex(pos) {
    return this.state.size * pos.y + pos.x;
  }

  _getIndexToPos(index) {
    return {
      x: index % this.state.size,
      y: parseInt(index / this.state.size, 10)
    };
  }

  _getMarkerCount(boards, marker, direction, pos) {
    const _pos = {
      x: pos.x + direction.x,
      y: pos.y + direction.y
    };
    const _index = this._getPosToIndex(_pos);
    const _marker = boards[_index];
    let count = 1;

    if (_pos.x < 0 || _pos.y < 0) {
      return count;
    }

    if (typeof _marker === "boolean" && _marker === marker) {
      count = this._getMarkerCount(boards, marker, direction, _pos) + 1;
    }

    return count;
  }
}

export default new TicTacToc();
