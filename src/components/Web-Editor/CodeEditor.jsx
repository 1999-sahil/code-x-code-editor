import { Editor } from '@monaco-editor/react';
import React from 'react';
import Heading from './Heading';

const CodeEditor = ({ displayName, lang, value, setValue, icon }) => {

    /** Function related to handling changes in an editor or input field. */
    const handleEditorChange = (value, event) => {
        setValue(value);
    };

    return (
        <div className="bg-gray-300">
            <Heading 
                name={displayName}
                icon={icon} 
            />

            <Editor
                width="100%"
                height="25vh"
                defaultLanguage={lang}
                defaultValue={value}
                theme="vs-dark"
                onChange={handleEditorChange}
            />
        </div>
    );
};

export default CodeEditor;