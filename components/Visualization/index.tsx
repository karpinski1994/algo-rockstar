import visualizationFactory from './visualizationFactory';

// TODO: improve readability maybe just background maybe some extra highlighter
export default ({ route }: {route: string}) => {
  const visualizationSteps = visualizationFactory(route);
  console.log("🚀 ~ file: index.tsx:6 ~ visualizationSteps", visualizationSteps)

  return (
    <div>
        Visualization
    </div>
  )
}
