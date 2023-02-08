import ReactMarkdown from 'react-markdown';
import markdownFactory from "./markdownFactory";

// TODO: improve readability maybe just background maybe some extra highlighter
const Markdown = ({ route }: { route: string | string[] | undefined }) => {
  const markdown = markdownFactory(route);

  return (
      <ReactMarkdown
      //  eslint-disable-next-line
        children={markdown}
      />

  )
}

export default Markdown
Markdown.displayName = 'Markdown'
