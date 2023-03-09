const arrayVisualizationSteps = [
  {
    stepId: 0,
    text: '"Arrays" are one type of data structure, and can store multiple values.',
    rows: [
      [
        {
          name: 'blue',
          color: [40, 148, 255, 1],
          pointer: false,
        },
        {
          name: 'yellow',
          color: [255, 200, 10, 1],
          pointer: false,
        },
        {
          name: 'red',
          color: [240, 10, 10, 1],
          pointer: false,
        },
      ]
    ]
  },
  {
    stepId: 1,
    text: 'Each element can be accessed through its index (a number that denotes its order within the data).',
    rows: [
      [
        {
          name: 'blue',
          color: [40, 148, 255, 1],
          pointer: false,
        },
        {
          name: 'yellow',
          color: [255, 200, 10, 1],
          pointer: false,
        },
        {
          name: 'red',
          color: [240, 10, 10, 1],
          pointer: false,
        },
      ]
    ]
  },
  {
    stepId: 2,
    text: 'Data is stored sequentially in memory in consecutive locations.',
    orientation: 'column',
    label: 'Memory',
    rows: [
      [
        {
          name: 'blue',
          color: [40, 148, 255, 1],
          pointer: false,
        },
        {
          name: 'yellow',
          color: [255, 200, 10, 1],
          pointer: false,
        },
        {
          name: 'red',
          color: [240, 10, 10, 1],
          pointer: false,
        },
      ]
    ]
  },
  {
    stepId: 3,
    text: 'Because they\'re stored in consecutive locations, memory addresses can be calculated using their indices, allowing for random access of data.',
    label: 'Random Access',
    rows: [
      [
        {
          name: 'blue',
          color: [200, 200, 200, 1],
          pointer: false,
        },
        {
          name: 'yellow',
          color: [200, 200, 200, 1],
          pointer: false,
        },
        {
          name: 'red',
          color: [200, 200, 200, 1],
          pointer: false,
        },
      ]
    ]
  },
  {
    stepId: 4,
    text: 'Each element can be accessed through its index (a number that denotes its order within the data).',
    label: 'Random Access',
    rows: [
      [
        {
          name: 'blue',
          color: [200, 200, 200, 1],
          pointer: false,
        },
        {
          name: 'yellow',
          color: [200, 200, 200, 1],
          pointer: false,
        },
        {
          name: 'red',
          color: [240, 10, 10, 1],
          pointer: false,
        },
      ]
    ]
  },
  {
    stepId: 5,
    text: 'Each element can be accessed through its index (a number that denotes its order within the data).',
    label: 'Random Access',
    rows: [
      [
        {
          name: 'blue',
          color: [40, 148, 255, 1],
          pointer: false,
        },
        {
          name: 'yellow',
          color: [200, 200, 200, 1],
          pointer: false,
        },
        {
          name: 'red',
          color: [200, 200, 200, 1],
          pointer: false,
        },
      ]
    ]
  },
  {
    stepId: 6,
    text: 'Each element can be accessed through its index (a number that denotes its order within the data).',
    label: 'Random Access',
    rows: [
      [
        {
          name: 'blue',
          color: [200, 200, 200, 1],
          pointer: false,
        },
        {
          name: 'yellow',
          color: [255, 200, 10, 1],
          pointer: false,
        },
        {
          name: 'red',
          color: [200, 200, 200, 1],
          pointer: false,
        },
      ]
    ]
  },
  {
    stepId: 7,
    text: 'Each element can be accessed through its index (a number that denotes its order within the data).',
    label: 'Random Access',
    rows: [
      [
        {
          name: 'blue',
          color: [40, 148, 255, 1],
          pointer: false,
        },
        {
          name: 'yellow',
          color: [255, 200, 10, 1],
          pointer: false,
        },
        {
          name: 'red',
          color: [240, 10, 10, 1],
          pointer: false,
        },
      ]
    ]
  },
  {
    stepId: 8,
    text: 'Another feature of arrays is that adding or deleting data in a specific location carries a high cost compared to lists.',
    rows: [
      [
        {
          name: 'blue',
          color: [40, 148, 255, 1],
          pointer: false,
        },
        {
          name: 'yellow',
          color: [255, 200, 10, 1],
          pointer: false,
        },
        {
          name: 'red',
          color: [240, 10, 10, 1],
          pointer: false,
        },
      ]
    ]
  },
  {
    stepId: 9,
    text: 'Let\'s imagine adding "Green" to the 2nd location.',
    rows: [
      [
        {
          name: 'blue',
          color: [40, 148, 255, 1],
          pointer: false,
        },
        {
          name: 'yellow',
          color: [255, 200, 10, 1],
          pointer: false,
        },
        {
          name: 'red',
          color: [240, 10, 10, 1],
          pointer: false,
        },
      ],
      [
        {
          color: [40, 148, 255, 0],
          pointer: false,
        },
        {
          name: 'Green',
          color: [0, 255, 0, 1],
          pointer: false,
        },
      ]
    ]
  },
  {
    stepId: 10,
    text: 'First we secure an additional space at the end of the array.',
    rows: [
      [
        {
          name: 'blue',
          color: [40, 148, 255, 1],
          pointer: false,
        },
        {
          name: 'yellow',
          color: [255, 200, 10, 1],
          pointer: false,
        },
        {
          name: 'red',
          color: [240, 10, 10, 1],
          pointer: false,
        },
        {
          color: [255, 255, 255, 1],
          pointer: false,
        },
      ],
      [
        {
          color: [40, 148, 255, 0],
          pointer: false,
        },
        {
          name: 'Green',
          color: [0, 255, 0, 1],
          pointer: false,
        },
      ]
    ]
  },
  {
    stepId: 11,
    text: 'In order to free up the space needed for the addition, data is shifted one element at a time.',
    rows: [
      [
        {
          name: 'blue',
          color: [40, 148, 255, 1],
          pointer: false,
        },
        {
          name: 'yellow',
          color: [255, 200, 10, 1],
          pointer: false,
        },
        {
          color: [255, 255, 255, 1],
          pointer: false,
        },
        {
          name: 'red',
          color: [240, 10, 10, 1],
          pointer: false,
        },
      ],
      [
        {
          color: [40, 148, 255, 0],
          pointer: false,
        },
        {
          name: 'Green',
          color: [0, 255, 0, 1],
          pointer: false,
        },
      ]
    ]
  },
  {
    stepId: 12,
    text: 'In order to free up the space needed for the addition, data is shifted one element at a time.',
    rows: [
      [
        {
          name: 'blue',
          color: [40, 148, 255, 1],
          pointer: false,
        },
        {
          color: [255, 255, 255, 1],
          pointer: false,
        },
        {
          name: 'yellow',
          color: [255, 200, 10, 1],
          pointer: false,
        },
        {
          name: 'red',
          color: [240, 10, 10, 1],
          pointer: false,
        },
      ],
      [
        {
          color: [40, 148, 255, 0],
          pointer: false,
        },
        {
          name: 'Green',
          color: [0, 255, 0, 1],
          pointer: false,
        },
      ]
    ]
  },
  {
    stepId: 13,
    text: '"Green" is added to the empty space, completing the addition.',
    rows: [
      [
        {
          name: 'blue',
          color: [40, 148, 255, 1],
          pointer: false,
        },
        {
          name: 'green',
          color: [0, 255, 0, 1],
          pointer: false,
        },
        {
          name: 'yellow',
          color: [255, 200, 10, 1],
          pointer: false,
        },
        {
          name: 'red',
          color: [240, 10, 10, 1],
          pointer: false,
        },
      ]
    ]
  },
  {
    stepId: 14,
    text: 'Conversely, when deleting the second element,',
    rows: [
      [
        {
          name: 'blue',
          color: [40, 148, 255, 1],
          pointer: false,
        },
        {
          name: 'green',
          color: [0, 255, 0, 1],
          pointer: false,
        },
        {
          name: 'yellow',
          color: [255, 200, 10, 1],
          pointer: false,
        },
        {
          name: 'red',
          color: [240, 10, 10, 1],
          pointer: false,
        },
      ]
    ]
  },
  {
    stepId: 15,
    text: 'we first delete the element,',
    rows: [
      [
        {
          color: [40, 148, 255, 0],
          pointer: false,
        },
        {
          name: 'green',
          color: [0, 255, 0, 1],
          pointer: false,
        },
      ],
      [
        {
          name: 'blue',
          color: [40, 148, 255, 1],
          pointer: false,
        },
        {
          color: [255, 255, 255, 1],
          pointer: false,
        },
        {
          name: 'yellow',
          color: [255, 200, 10, 1],
          pointer: false,
        },
        {
          name: 'red',
          color: [240, 10, 10, 1],
          pointer: false,
        },
      ]
    ]
  },
  {
    stepId: 16,
    text: 'then fill in the empty space by shifting the data one element at a time.',
    rows: [
      [
        {
          color: [40, 148, 255, 0],
          pointer: false,
        },
        {
          name: 'green',
          color: [0, 255, 0, 1],
          pointer: false,
        },
      ],
      [
        {
          name: 'blue',
          color: [40, 148, 255, 1],
          pointer: false,
        },
        {
          name: 'yellow',
          color: [255, 200, 10, 1],
          pointer: false,
        },
        {
          color: [255, 255, 255, 1],
          pointer: false,
        },
        {
          name: 'red',
          color: [240, 10, 10, 1],
          pointer: false,
        },
      ]
    ]
  },
  {
    stepId: 17,
    text: 'then fill in the empty space by shifting the data one element at a time.',
    rows: [
      [
        {
          color: [40, 148, 255, 0],
          pointer: false,
        },
        {
          name: 'green',
          color: [0, 255, 0, 1],
          pointer: false,
        },
      ],
      [
        {
          name: 'blue',
          color: [40, 148, 255, 1],
          pointer: false,
        },
        {
          name: 'yellow',
          color: [255, 200, 10, 1],
          pointer: false,
        },
        {
          name: 'red',
          color: [240, 10, 10, 1],
          pointer: false,
        },
        {
          color: [255, 255, 255, 1],
          pointer: false,
        },
      ]
    ]
  },
  {
    stepId: 18,
    text: 'Finally, the extra space is deleted, completing the deletion.',
    rows: [
      [
        {
          color: [40, 148, 255, 0],
          pointer: false,
        },
        {
          name: 'green',
          color: [0, 255, 0, 1],
          pointer: false,
        },
      ],
      [
        {
          name: 'blue',
          color: [40, 148, 255, 1],
          pointer: false,
        },
        {
          name: 'yellow',
          color: [255, 200, 10, 1],
          pointer: false,
        },
        {
          name: 'red',
          color: [240, 10, 10, 1],
          pointer: false,
        },
      ]
    ]
  },
  {
    stepId: 19,
    text: 'This concludes the explanation of arrays.',
    rows: [
      [
        {
          color: [40, 148, 255, 0],
          pointer: false,
        },
        {
          name: 'green',
          color: [0, 255, 0, 1],
          pointer: false,
        },
      ],
      [
        {
          name: 'blue',
          color: [40, 148, 255, 1],
          pointer: false,
        },
        {
          name: 'yellow',
          color: [255, 200, 10, 1],
          pointer: false,
        },
        {
          name: 'red',
          color: [240, 10, 10, 1],
          pointer: false,
        },
      ]
    ]
  },
  
  

]
export default arrayVisualizationSteps;