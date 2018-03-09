export const initialState = {
  mazeId: null,
  mazeData: null,
  pony: null,
  domokun: null,
  goal: null,
  gameState: null,
  resultMessage: null,
  resultPicture: null,
  fetchError: false,
};

export const mazeDataApi0 = {
  pony: [7],
  domokun: [20],
  'end-point': [12],
  size: [5, 5],
  difficulty: 1,
  data: [
    ['west', 'north'], [], [], [], [],
    [], [], [], [], [],
    [], [], [], [], [],
    [], [], [], [], [],
    [], [], [], [], [],
  ],
  maze_id: '03a13279-8fb1-4dfa-898f-65bfbe689674',
  'game-state': {
    state: 'Active',
    'state-result': 'Successfully created',
  },
};

export const mazeDataApi1 = {
  pony: [6],
  domokun: [19],
  'end-point': [12],
  size: [5, 5],
  difficulty: 1,
  data: [
    ['west', 'north'], [], [], [], [],
    [], [], [], [], [],
    [], [], [], [], [],
    [], [], [], [], [],
    [], [], [], [], [],
  ],
  maze_id: '03a13279-8fb1-4dfa-898f-65bfbe689674',
  'game-state': {
    state: 'Active',
    'state-result': 'Successfully created',
  },
};

export const moveApiOver = {
  state: 'won',
  'state-result': 'You won. Game ended',
  'hidden-url': 'foobar',
};

export const mazeModel0 = {
  mazeId: '03a13279-8fb1-4dfa-898f-65bfbe689674',
  mazeData: [
    [
      { north: true, west: true, originalIndex: 0 },
      { north: false, west: false, originalIndex: 1 },
      { north: false, west: false, originalIndex: 2 },
      { north: false, west: false, originalIndex: 3 },
      { north: false, west: false, originalIndex: 4 },
    ], [
      { north: false, west: false, originalIndex: 5 },
      { north: false, west: false, originalIndex: 6 },
      { north: false, west: false, originalIndex: 7 },
      { north: false, west: false, originalIndex: 8 },
      { north: false, west: false, originalIndex: 9 },
    ], [
      { north: false, west: false, originalIndex: 10 },
      { north: false, west: false, originalIndex: 11 },
      { north: false, west: false, originalIndex: 12 },
      { north: false, west: false, originalIndex: 13 },
      { north: false, west: false, originalIndex: 14 },
    ], [
      { north: false, west: false, originalIndex: 15 },
      { north: false, west: false, originalIndex: 16 },
      { north: false, west: false, originalIndex: 17 },
      { north: false, west: false, originalIndex: 18 },
      { north: false, west: false, originalIndex: 19 },
    ], [
      { north: false, west: false, originalIndex: 20 },
      { north: false, west: false, originalIndex: 21 },
      { north: false, west: false, originalIndex: 22 },
      { north: false, west: false, originalIndex: 23 },
      { north: false, west: false, originalIndex: 24 },
    ],
  ],
  pony: 7,
  domokun: 20,
  goal: 12,
  gameState: 'active',
  resultMessage: null,
  resultPicture: null,
  fetchError: false,
};

export const mazeModel1 = {
  ...mazeModel0,
  pony: 6,
  domokun: 19,
};

export const mazeModelOver = {
  ...mazeModel1,
  gameState: 'won',
  resultMessage: 'You won. Game ended',
  resultPicture: 'foobar',
};

