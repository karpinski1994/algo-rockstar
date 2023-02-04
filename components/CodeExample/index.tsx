import TopBar from './TopBar';
import React, { useEffect, useState } from 'react'
import { CopyBlock, dracula } from 'react-code-blocks';
import codeExamplesFactory from './codeExamplesFactory';

type Props = {}
// TODO: The same like with Markdown here we may want to rename this
function CodeExample({ codeStructure }: Props) {
    const codeExamples = codeExamplesFactory(codeStructure);
    // console.log("🚀 ~ file: index.tsx:10 ~ CodeExample ~ codeExamples", codeExamples)
    // TODO: This is dummy sync function for testing purposes we have to change it the way example will be rendered with mounting of component

    useEffect(() => {
        if(codeExamples) {
            console.log("🚀 ~ file: index.tsx:15 ~ useEffect ~ codeExamples", codeExamples)
            setCodeExample(codeExamples['javascript'])
        }
    }, [codeExamples])

    const [language, changeLanguage] = useState('javascript');
    const [codeExample, setCodeExample] = useState(codeExamples['javascript']);
    const [areLineNumbersVisible, toggleLineNumbersVisibility] = useState(true);
    console.log("🚀 1 language", language)
    console.log("🚀 2 codeExample", codeExample)
    
    return (
        <>
            <TopBar
                select={{
                    value: language,
                    onChange: e => {
                        setCodeExample(codeExamples[e.target.value]);
                        return changeLanguage(e.target.value);
                    },
                    options: Object.keys(codeExamples).map(lang => (
                        <option key={lang} value={lang}>
                            {lang}
                        </option>
                    ))
                }}
                toggle={{
                    checked: areLineNumbersVisible,
                    onChange: () => toggleLineNumbersVisibility(!areLineNumbersVisible)
                }}
            />
            <div
                style={{ textAlign: 'left' }}
            >
                {language && codeExample && <CopyBlock
                    language={language}
                    text={codeExample}
                    showLineNumbers={areLineNumbersVisible}
                    theme={dracula}
                    wrapLines={true}
                />}
            </div>

        </>
    )
}

export default CodeExample