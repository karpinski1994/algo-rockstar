const data = {
    name: "A",
    children: [
        {
            name: "B",
            children: [
                {
                    name: "C"
                },
                {
                    name: "D"
                },
                {
                    name: "E"
                }
            ]
        },
        {
            name: "F"
        },
        {
            name: "G",
            children: [
                {
                    name: "H"
                },
                {
                    name: "I"
                },
                {
                    name: "J"
                }
            ]
        }
    ]
};
const graphVisualizationSteps = [
    {
        "nodes": [
            {
                "id": 1,
                "name": "A",
            },
            {
                "id": 2,
                "name": "B"
            },
            {
                "id": 3,
                "name": "C"
            },
            {
                "id": 4,
                "name": "D"
            },
            {
                "id": 5,
                "name": "E"
            },
            {
                "id": 6,
                "name": "F"
            },
            {
                "id": 7,
                "name": "G"
            },
            {
                "id": 8,
                "name": "H"
            },
            {
                "id": 9,
                "name": "I"
            },
            {
                "id": 10,
                "name": "J"
            }
        ],
        "links": [

            {
                "source": 1,
                "target": 2
            },
            {
                "source": 1,
                "target": 5
            },
            {
                "source": 1,
                "target": 6
            },

            {
                "source": 2,
                "target": 3
            },
            {
                "source": 2,
                "target": 7
            }
            ,

            {
                "source": 3,
                "target": 4
            },
            {
                "source": 8,
                "target": 3
            }
            ,
            {
                "source": 4,
                "target": 5
            }
            ,

            {
                "source": 4,
                "target": 9
            },
            {
                "source": 5,
                "target": 10
            }
        ]
    },
    // 2
    {
        "nodes": [
            {
                "id": 1,
                "name": "A",
                selected: true
            },
            {
                "id": 2,
                "name": "B"
            },
            {
                "id": 3,
                "name": "C"
            },
            {
                "id": 4,
                "name": "D"
            },
            {
                "id": 5,
                "name": "E"
            },
            {
                "id": 6,
                "name": "F"
            },
            {
                "id": 7,
                "name": "G"
            },
            {
                "id": 8,
                "name": "H"
            },
            {
                "id": 9,
                "name": "I"
            },
            {
                "id": 10,
                "name": "J"
            }
        ],
        "links": [

            {
                "source": 1,
                "target": 2
            },
            {
                "source": 1,
                "target": 5
            },
            {
                "source": 1,
                "target": 6
            },

            {
                "source": 2,
                "target": 3
            },
            {
                "source": 2,
                "target": 7
            }
            ,

            {
                "source": 3,
                "target": 4
            },
            {
                "source": 8,
                "target": 3
            }
            ,
            {
                "source": 4,
                "target": 5
            }
            ,

            {
                "source": 4,
                "target": 9
            },
            {
                "source": 5,
                "target": 10
            }
        ]
    },
    // 3
    {
        "nodes": [
            {
                "id": 1,
                "name": "A",
                selected: true
            },
            {
                "id": 2,
                "name": "B",
            },
            {
                "id": 3,
                "name": "C"
            },
            {
                "id": 4,
                "name": "D"
            },
            {
                "id": 5,
                "name": "E"
            },
            {
                "id": 6,
                "name": "F",
                selected: true
            },
            {
                "id": 7,
                "name": "G"
            },
            {
                "id": 8,
                "name": "H"
            },
            {
                "id": 9,
                "name": "I"
            },
            {
                "id": 10,
                "name": "J"
            }
        ],
        "links": [

            {
                "source": 1,
                "target": 2
            },
            {
                "source": 1,
                "target": 5
            },
            {
                "source": 1,
                "target": 6
            },

            {
                "source": 2,
                "target": 3
            },
            {
                "source": 2,
                "target": 7
            }
            ,

            {
                "source": 3,
                "target": 4
            },
            {
                "source": 8,
                "target": 3
            }
            ,
            {
                "source": 4,
                "target": 5
            }
            ,

            {
                "source": 4,
                "target": 9
            },
            {
                "source": 5,
                "target": 10
            }
        ]
    },
    // 4
    {
        "nodes": [
            {
                "id": 1,
                "name": "A",
                selected: true
            },
            {
                "id": 2,
                "name": "B",
                selected: true
            },
            {
                "id": 3,
                "name": "C"
            },
            {
                "id": 4,
                "name": "D"
            },
            {
                "id": 5,
                "name": "E",
            },
            {
                "id": 6,
                "name": "F",
                selected: true
            },
            {
                "id": 7,
                "name": "G"
            },
            {
                "id": 8,
                "name": "H"
            },
            {
                "id": 9,
                "name": "I"
            },
            {
                "id": 10,
                "name": "J"
            }
        ],
        "links": [

            {
                "source": 1,
                "target": 2
            },
            {
                "source": 1,
                "target": 5
            },
            {
                "source": 1,
                "target": 6
            },

            {
                "source": 2,
                "target": 3
            },
            {
                "source": 2,
                "target": 7
            }
            ,

            {
                "source": 3,
                "target": 4
            },
            {
                "source": 8,
                "target": 3
            }
            ,
            {
                "source": 4,
                "target": 5
            }
            ,

            {
                "source": 4,
                "target": 9
            },
            {
                "source": 5,
                "target": 10
            }
        ]
    },
    {
        "nodes": [
            {
                "id": 1,
                "name": "A",
                selected: true
            },
            {
                "id": 2,
                "name": "B",
                selected: true
            },
            {
                "id": 3,
                "name": "C"
            },
            {
                "id": 4,
                "name": "D"
            },
            {
                "id": 5,
                "name": "E",
                selected: true
            },
            {
                "id": 6,
                "name": "F",
                selected: true
            },
            {
                "id": 7,
                "name": "G"
            },
            {
                "id": 8,
                "name": "H"
            },
            {
                "id": 9,
                "name": "I"
            },
            {
                "id": 10,
                "name": "J"
            }
        ],
        "links": [

            {
                "source": 1,
                "target": 2
            },
            {
                "source": 1,
                "target": 5
            },
            {
                "source": 1,
                "target": 6
            },

            {
                "source": 2,
                "target": 3
            },
            {
                "source": 2,
                "target": 7
            }
            ,

            {
                "source": 3,
                "target": 4
            },
            {
                "source": 8,
                "target": 3
            }
            ,
            {
                "source": 4,
                "target": 5
            }
            ,

            {
                "source": 4,
                "target": 9
            },
            {
                "source": 5,
                "target": 10
            }
        ]
    },
    {
        "nodes": [
            {
                "id": 1,
                "name": "A",
                selected: true
            },
            {
                "id": 2,
                "name": "B",
                selected: true
            },
            {
                "id": 3,
                "name": "C"
            },
            {
                "id": 4,
                "name": "D"
            },
            {
                "id": 5,
                "name": "E",
                selected: true
            },
            {
                "id": 6,
                "name": "F",
                selected: true
            },
            {
                "id": 7,
                "name": "G",
                selected: true
            },
            {
                "id": 8,
                "name": "H"
            },
            {
                "id": 9,
                "name": "I"
            },
            {
                "id": 10,
                "name": "J"
            }
        ],
        "links": [

            {
                "source": 1,
                "target": 2
            },
            {
                "source": 1,
                "target": 5
            },
            {
                "source": 1,
                "target": 6
            },

            {
                "source": 2,
                "target": 3
            },
            {
                "source": 2,
                "target": 7
            }
            ,

            {
                "source": 3,
                "target": 4
            },
            {
                "source": 8,
                "target": 3
            }
            ,
            {
                "source": 4,
                "target": 5
            }
            ,

            {
                "source": 4,
                "target": 9
            },
            {
                "source": 5,
                "target": 10
            }
        ]
    },
    {
        "nodes": [
            {
                "id": 1,
                "name": "A",
                selected: true
            },
            {
                "id": 2,
                "name": "B",
                selected: true
            },
            {
                "id": 3,
                "name": "C",
                selected: true
            },
            {
                "id": 4,
                "name": "D"
            },
            {
                "id": 5,
                "name": "E",
                selected: true
            },
            {
                "id": 6,
                "name": "F",
                selected: true
            },
            {
                "id": 7,
                "name": "G",
                selected: true
            },
            {
                "id": 8,
                "name": "H"
            },
            {
                "id": 9,
                "name": "I"
            },
            {
                "id": 10,
                "name": "J"
            }
        ],
        "links": [

            {
                "source": 1,
                "target": 2
            },
            {
                "source": 1,
                "target": 5
            },
            {
                "source": 1,
                "target": 6
            },

            {
                "source": 2,
                "target": 3
            },
            {
                "source": 2,
                "target": 7
            }
            ,

            {
                "source": 3,
                "target": 4
            },
            {
                "source": 8,
                "target": 3
            }
            ,
            {
                "source": 4,
                "target": 5
            }
            ,

            {
                "source": 4,
                "target": 9
            },
            {
                "source": 5,
                "target": 10
            }
        ]
    },
    {
        "nodes": [
            {
                "id": 1,
                "name": "A",
                selected: true
            },
            {
                "id": 2,
                "name": "B",
                selected: true
            },
            {
                "id": 3,
                "name": "C",
                selected: true
            },
            {
                "id": 4,
                "name": "D"
            },
            {
                "id": 5,
                "name": "E",
                selected: true
            },
            {
                "id": 6,
                "name": "F",
                selected: true
            },
            {
                "id": 7,
                "name": "G",
                selected: true
            },
            {
                "id": 8,
                "name": "H"
            },
            {
                "id": 9,
                "name": "I"
            },
            {
                "id": 10,
                "name": "J",
                selected: true
            }
        ],
        "links": [

            {
                "source": 1,
                "target": 2
            },
            {
                "source": 1,
                "target": 5
            },
            {
                "source": 1,
                "target": 6
            },

            {
                "source": 2,
                "target": 3
            },
            {
                "source": 2,
                "target": 7
            }
            ,

            {
                "source": 3,
                "target": 4
            },
            {
                "source": 8,
                "target": 3
            }
            ,
            {
                "source": 4,
                "target": 5
            }
            ,

            {
                "source": 4,
                "target": 9
            },
            {
                "source": 5,
                "target": 10
            }
        ]
    },
    {
        "nodes": [
            {
                "id": 1,
                "name": "A",
                selected: true
            },
            {
                "id": 2,
                "name": "B",
                selected: true
            },
            {
                "id": 3,
                "name": "C",
                selected: true
            },
            {
                "id": 4,
                "name": "D",
                selected: true
            },
            {
                "id": 5,
                "name": "E",
                selected: true
            },
            {
                "id": 6,
                "name": "F",
                selected: true
            },
            {
                "id": 7,
                "name": "G",
                selected: true
            },
            {
                "id": 8,
                "name": "H"
            },
            {
                "id": 9,
                "name": "I"
            },
            {
                "id": 10,
                "name": "J",
                selected: true
            }
        ],
        "links": [

            {
                "source": 1,
                "target": 2
            },
            {
                "source": 1,
                "target": 5
            },
            {
                "source": 1,
                "target": 6
            },

            {
                "source": 2,
                "target": 3
            },
            {
                "source": 2,
                "target": 7
            }
            ,

            {
                "source": 3,
                "target": 4
            },
            {
                "source": 8,
                "target": 3
            }
            ,
            {
                "source": 4,
                "target": 5
            }
            ,

            {
                "source": 4,
                "target": 9
            },
            {
                "source": 5,
                "target": 10
            }
        ]
    },
    {
        "nodes": [
            {
                "id": 1,
                "name": "A",
                selected: true
            },
            {
                "id": 2,
                "name": "B",
                selected: true
            },
            {
                "id": 3,
                "name": "C",
                selected: true
            },
            {
                "id": 4,
                "name": "D",
                selected: true
            },
            {
                "id": 5,
                "name": "E",
                selected: true
            },
            {
                "id": 6,
                "name": "F",
                selected: true
            },
            {
                "id": 7,
                "name": "G",
                selected: true
            },
            {
                "id": 8,
                "name": "H",
                selected: true
            },
            {
                "id": 9,
                "name": "I"
            },
            {
                "id": 10,
                "name": "J",
                selected: true
            }
        ],
        "links": [

            {
                "source": 1,
                "target": 2
            },
            {
                "source": 1,
                "target": 5
            },
            {
                "source": 1,
                "target": 6
            },

            {
                "source": 2,
                "target": 3
            },
            {
                "source": 2,
                "target": 7
            }
            ,

            {
                "source": 3,
                "target": 4
            },
            {
                "source": 8,
                "target": 3
            }
            ,
            {
                "source": 4,
                "target": 5
            }
            ,

            {
                "source": 4,
                "target": 9
            },
            {
                "source": 5,
                "target": 10
            }
        ]
    },
    {
        "nodes": [
            {
                "id": 1,
                "name": "A",
                selected: true
            },
            {
                "id": 2,
                "name": "B",
                selected: true
            },
            {
                "id": 3,
                "name": "C",
                selected: true
            },
            {
                "id": 4,
                "name": "D",
                selected: true
            },
            {
                "id": 5,
                "name": "E",
                selected: true
            },
            {
                "id": 6,
                "name": "F",
                selected: true
            },
            {
                "id": 7,
                "name": "G",
                selected: true
            },
            {
                "id": 8,
                "name": "H",
                selected: true
            },
            {
                "id": 9,
                "name": "I",
                selected: true
            },
            {
                "id": 10,
                "name": "J",
                selected: true
            }
        ],
        "links": [

            {
                "source": 1,
                "target": 2
            },
            {
                "source": 1,
                "target": 5
            },
            {
                "source": 1,
                "target": 6
            },

            {
                "source": 2,
                "target": 3
            },
            {
                "source": 2,
                "target": 7
            }
            ,

            {
                "source": 3,
                "target": 4
            },
            {
                "source": 8,
                "target": 3
            }
            ,
            {
                "source": 4,
                "target": 5
            }
            ,

            {
                "source": 4,
                "target": 9
            },
            {
                "source": 5,
                "target": 10
            }
        ]
    },
]




export { data, graphVisualizationSteps }