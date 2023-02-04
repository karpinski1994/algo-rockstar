import ReactMarkdown from 'react-markdown';
import markdownFactory from "./markdownFactory";

// TODO: improve readability maybe just background maybe some extra highlighter
export default ({ route }: {route: string}) => {
  const markdown = markdownFactory(route);

  return (
    <ReactMarkdown
      children={markdown}
    />
  )
}
