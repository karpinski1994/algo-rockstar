import TopBar from './TopBar';
import React, { useEffect, useState } from 'react'
import { CopyBlock, dracula } from 'react-code-blocks';
import codeExamplesFactory from './codeExamplesFactory';

// TODO: The same like with Markdown here we may want to rename this
// TODO: This is dummy sync function for testing purposes we have to change it the way example will be rendered with mounting of component

type Props = {
    codeStructure: string | string[] | undefined;
}

type CodeExample = {
    [key: string]: string;
}

function CodeExample({ codeStructure }: Props) {

    const codeExamples: CodeExample | string | undefined = codeExamplesFactory(codeStructure);

    useEffect(() => {
        if (codeExamples) {
            setCodeExample(codeExamples['javascript' as keyof CodeExample])
        }
    }, [codeExamples])

    const [language, changeLanguage] = useState('javascript');
    const [codeExample, setCodeExample] = useState(codeExamples['javascript']);
    const [areLineNumbersVisible, toggleLineNumbersVisibility] = useState(true);
    return (
        <>
            <TopBar
                select={{
                    value: language,
                    onChange: (e: React.ChangeEvent) => {
                        setCodeExample(codeExamples[(e.target as HTMLInputElement).value]);
                        return changeLanguage((e.target as HTMLInputElement).value);
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