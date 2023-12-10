import { Editor } from '@monaco-editor/react';
import React, { useState } from 'react';

const EditorWindow = ({ language, onChange, code, theme }) => {
    
    const [value, setValue] = useState(code || "");

    /** Set Code on editor when onChange */
    const handleEditorChange = (value) => {
        setValue(value);
        onChange("code", value);
    };

    return (
    <>
        <div className="overlay rounded-lg overflow-hidden w-full h-full">
            <Editor
                height="76vh"
                width={`100%`}
                language={language || "javascript"}
                value={value}
                theme={theme}
                defaultValue="// some comment"
                onChange={handleEditorChange} 
            />
        </div>
    </>
  )
}

export default EditorWindow;