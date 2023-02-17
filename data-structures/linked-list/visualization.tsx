const linkedListVisualizationSteps = [
  {
    stepId: 0,
    text: `"Lists" are one type of data structure, and can storemultiple values`,
    nodes: [
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
  },
  {
    stepId: 1,
    text: `They are unique in how they pair data with "pointers", the pointers indicating the next piece of data's memory location.`,
    label: 'Pointer',
    nodes: [
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
  },
  {
    stepId: 2,
    text: `In lists, data is stored in various disjointed locations in memory.`,
    orientation: 'column',
    label: 'Memory',
    nodes: [
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
  }

]
export default linkedListVisualizationSteps;