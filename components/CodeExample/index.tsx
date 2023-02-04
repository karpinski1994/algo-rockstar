import TopBar from './TopBar';
import React, { useState } from 'react'
import { CopyBlock, dracula } from 'react-code-blocks';
import codeExamplesFactory from './codeExamplesFactory';

type Props = {}
// TODO: The same like with Markdown here we may want to rename this
function CodeExample({ dataStructure }: Props) {
    const codeExamples = codeExamplesFactory(dataStructure);

    const [language, changeLanguage] = useState('javascript');
    const [languagePlaceholder, changePlaceholder] = useState(codeExamples['javascript']);
    const [areLineNumbersVisible, toggleLineNumbersVisibility] = useState(true);
    return (
        <>
            <TopBar
                select={{
                    value: language,
                    onChange: e => {
                        changePlaceholder(codeExamples[e.target.value]);
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
                {language && languagePlaceholder && <CopyBlock
                    language={language}
                    text={languagePlaceholder}
                    showLineNumbers={areLineNumbersVisible}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock
                />}
            </div>

        </>
    )
}

export default CodeExample