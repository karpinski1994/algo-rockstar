import ArrayVisualization from "@/data-structures/Array/visualization";
import LinkedlistVisualization from "@/data-structures/LinkedList/visualization";


const stepsSettingsForEachJustTest = [
    {
      stepId: 0,
      text: '"Lists" are one type of data structure, and can storemultiple values',
      nodes: [
        {
          name: 'blue',
          color: [40, 148, 255, 1],
          arrow: false,
        },
        {
          name: 'blue',
          color: [50, 18, 255, 1],
          arrow: false,
        },
        {
          name: 'blue',
          color: [150, 180, 55, 1],
          arrow: false,
        }
      ]
    },
    {
      stepId: 1,
      text: 'Second description',
      nodes: [
        {
          name: 'blue',
          color: [60, 48, 5, 1],
          arrow: false,
        },
        {
          name: 'blue',
          color: [200, 73, 255, 1],
          arrow: false,
        },
        {
          name: 'blue',
          color: [255, 12, 155, 1],
          arrow: false,
        }
      ]
    }
  
  ]
  

{/*TODO: add more conditional statements here*/}
export default function stepsFactory({route}){
    switch(route){
        case "array":
            return stepsSettingsForEachJustTest;
        case "linked list":
            return stepsSettingsForEachJustTest;
        default:
            return null;
    }
}