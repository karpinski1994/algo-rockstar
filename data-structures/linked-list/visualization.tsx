const linkedListVisualizationSteps = [
  {
    stepId: 0,
    text: `"Lists" are one type of data structure, and can storemultiple values`,
    rows: [
      [
      {
        name: 'blue',
        color: [40, 148, 255, 1],
        arrow: true,
      },
      {
        name: 'yellow',
        color: [255, 200, 10, 1],
        arrow: true,
      },
      {
        name: 'red',
        color: [240, 10, 10, 1],
      }
        ]
      ]
  },
  {
    stepId: 1,
    text: `They are unique in how they pair data with "pointers", the pointers indicating the next piece of data's memory location.`,
    label: 'Pointer',
    rows: [
      [
      {
        name: 'blue',
        color: [40, 148, 255, 1],
        arrow: true,
        pointed: true
      },
      {
        name: 'yellow',
        color: [255, 200, 10, 1],
        arrow: true,
        pointed: true
      },
      {
        name: 'red',
        color: [240, 10, 10, 1],
        pointed: true
      }
      ]
    ]
  },
  {
    stepId: 2,
    text: `In lists, data is stored in various disjointed locations in memory.`,
    orientation: 'column',
    label: 'Memory',
    rows: [[
      {
        name: 'yellow',
        color: [255, 200, 10, 1],
        arrow: false,
        pointed: true
      },
      {
        name: 'blue',
        color: [40, 148, 255, 1],
        arrow: false,
        pointed: true
      },
      {
        name: 'red',
        color: [240, 10, 10, 1],
        arrow: false,
        pointed: true
      }
    ]
  ]
  },
  {
    stepId: 3,
    text: `In lists, data is stored in various disjointed locations in memory.`,
    orientation: 'column',
    label: 'Memory',
    rows: [[
      {
        name: 'yellow',
        color: [255, 200, 10, 1],
        arrow: false,
        pointed: true
      },
      {
        name: 'blue',
        color: [40, 148, 255, 1],
        arrow: false,
        pointed: true
      },
      {
        name: 'red',
        color: [240, 10, 10, 1],
        arrow: false,
        pointed: true
      }
    ]
  ]
  },
  {
    stepId: 4,
    text: `Because data is stored in different locations, each piece of data can only be accessed through the pointer that precedes it.`,
    label: 'Sequential Access',
    rows: [
      [
      {
        name: 'blue',
        color: [40, 148, 255, 1],
        arrow: true,
      },
      {
        name: 'yellow',
        color: [180, 180, 180, 1],
        arrow: true,
      },
      {
        name: 'red',
        color: [180, 180, 180, 1],
      }
    ]
  ]
  },
  {
    stepId: 5,
    text: `Because data is stored in different locations, each piece of data can only be accessed through the pointer that precedes it.`,
    label: 'Sequential Access',
    rows: [
      [
      {
        name: 'blue',
        color: [40, 148, 255, 1],
        arrow: true,
        pointed: true
      },
      {
        name: 'yellow',
        color: [180, 180, 180, 1],
        arrow: true,
      },
      {
        name: 'red',
        color: [180, 180, 180, 1],
      }
    ]
  ]
  },
  {
    stepId: 6,
    text: `Because data is stored in different locations, each piece of data can only be accessed through the pointer that precedes it.`,
    label: 'Sequential Access',
    rows: [
      [
      {
        name: 'blue',
        color: [40, 148, 255, 1],
        arrow: true,
        pointed: true
      },
      {
        name: 'yellow',
        color: [255, 200, 10, 1],
        arrow: true,
      },
      {
        name: 'red',
        color: [180, 180, 180, 1],
      }
    ]
  ]
  },
  {
    stepId: 7,
    text: `Because data is stored in different locations, each piece of data can only be accessed through the pointer that precedes it.`,
    label: 'Sequential Access',
    rows: [
      [
      {
        name: 'blue',
        color: [40, 148, 255, 1],
        arrow: true,
        pointed: true
      },
      {
        name: 'yellow',
        color: [255, 200, 10, 1],
        arrow: true,
        pointed: true
      },
      {
        name: 'red',
        color: [180, 180, 180, 1],
      }
    ]
  ]
  },
  {
    stepId: 8,
    text: `Because data is stored in different locations, each piece of data can only be accessed through the pointer that precedes it.`,
    label: 'Sequential Access',
    rows: [
      [
      {
        name: 'blue',
        color: [40, 148, 255, 1],
        arrow: true,
        pointed: true
      },
      {
        name: 'yellow',
        color: [255, 200, 10, 1],
        arrow: true,
        pointed: true
      },
      {
        name: 'red',
        color: [240, 10, 10, 1],
      }
    ]
  ]
  },
  {
    stepId: 9,
    text: `Addition of data is performed simply by replacing the pointers on either side of the addition.`,
    label: 'Sequential Access',
    rows: [
      [
      {
        name: 'blue',
        color: [40, 148, 255, 1],
        arrow: true,
        pointed: true
      },
      {
        name: 'yellow',
        color: [255, 200, 10, 1],
        arrow: true,
        pointed: true
      },
      {
        name: 'red',
        color: [240, 10, 10, 1],
      }
    ],[
      {
        name: '',
        color: [0, 200, 7, 0],
      },
      {
        name: 'green',
        color: [0, 200, 7, 1],
      }
    ]
  ]
  },
  {
    stepId: 10,
    text: `Addition of data is performed simply by replacing the pointers on either side of the addition.`,
    label: 'Sequential Access',
    rows: [
      [
      {
        name: 'blue',
        color: [40, 148, 255, 1],
        arrow: true,
        pointed: true
      },
      {
        name: 'yellow',
        color: [255, 200, 10, 1],
        arrow: true,
        pointed: true
      },
      {
        name: 'red',
        color: [240, 10, 10, 1],
      }
    ],[
      {
        name: '',
        color: [0, 200, 7, 0],
      },
      {
        name: 'green',
        color: [0, 200, 7, 1],
        arrow: true,
        arrowOrientation: 'top',
      }
    ]
  ]
  },
  {
    stepId: 11,
    text: `Addition of data is performed simply by replacing the pointers on either side of the addition.`,
    label: 'Sequential Access',
    rows: [
      [
      {
        name: 'blue',
        color: [40, 148, 255, 1],
        arrow: true,
        pointed: true,
        arrowOrientation: 'bottom'
      },
      {
        name: 'yellow',
        color: [255, 200, 10, 1],
        arrow: true,
        pointed: true
      },
      {
        name: 'red',
        color: [240, 10, 10, 1],
      }
    ],[
      {
        name: '',
        color: [0, 200, 7, 0],
      },
      {
        name: 'green',
        color: [0, 200, 7, 1],
        arrow: true,
        arrowOrientation: 'top',
      }
    ]
  ]
  },
  {
    stepId: 12,
    text: `This concludes the explanation of lists.`,
    label: 'Sequential Access',
    rows: [
      [
      {
        name: 'blue',
        color: [40, 148, 255, 1],
        arrow: true,
        pointed: true,
        arrowOrientation: 'bottom'
      },
      {
        name: 'yellow',
        color: [255, 200, 10, 1],
        arrow: true,
        pointed: true
      },
      {
        name: 'red',
        color: [240, 10, 10, 1],
      }
    ],[
      {
        name: '',
        color: [0, 200, 7, 0],
      },
      {
        name: 'green',
        color: [0, 200, 7, 1],
        arrow: true,
        arrowOrientation: 'top',
      }
    ]
  ]
  }

]
export default linkedListVisualizationSteps;