import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import useLocalStorage from "../../hooks/useLocalStorage";
import {
  initialCSS,
  initialHTML,
  initialJS,
} from "../../constants/initialValues";
import CodeEditor from "./CodeEditor";
import { PiLinkSimpleHorizontalBold } from "react-icons/pi";        // Link react-icon
import { AiFillHtml5 } from 'react-icons/ai';                       // HTML react-icon
import { SiCss3 } from 'react-icons/si';                            // CSS react-icon
import { BiLogoJavascript } from 'react-icons/bi';                  // JS react-icon
import { PiCopyBold } from 'react-icons/pi';                        // Max react-icon
import { BiMinus } from 'react-icons/bi';                           // Min react-icon
import { RxCross2 } from 'react-icons/rx';                          // Close react-icon

const WebIDE = () => {

  /**
    * "useLocalStorage()", This hook likely abstracts away the details of working with the HTML5 localStorage API, 
      which allows you to store key-value pairs in a web browser's local storage.
    * "Destructuring the Returned Values:" The result of calling the useLocalStorage hook is an array containing two elements.
      (1) The first element (htmlValue, cssValue, jsValue) represents the current value stored in the local storage under the key "html, css, js"
      (2) The second element (setHtmlValue, setCssValue, setJsValue) is a function that allows you to update the value associated with the "html" key in the local storage.
  */
  const [htmlValue, setHtmlValue] = useLocalStorage("html", initialHTML);
  const [cssValue, setCssValue] = useLocalStorage("css", initialCSS);
  const [jsValue, setJsValue] = useLocalStorage("js", initialJS);

  /**
    * The content inside the backticks defines template string to represent an HTML document 
      structure with placeholders for dynamic values (htmlValue, cssValue, and jsValue).
    * "${htmlValue}, ${cssValue}, ${jsValue}" these placeholders are meant to be replaced with actual 
      HTML content, CSS code, and JS code. And the values for these placeholder would be variables or string
      containing user-generated content.
  */
  const [code, setCode] = useState(`
    <html>
      <body>${htmlValue}</body>
      <style>${cssValue}</style>
      <script>${jsValue}</script>
    </html>
  `);

  /** 
    * "useEffect(() => {...}, []);", hook takes a callback function as its first argument. 
      This function is executed after the component renders and, by default, after every subsequent render.
    * "const timeout = setTimeout(() => {...}, 250);" a timeout is created using the setTimeout, 
      and the purpose of the timeout is to delay an action (in this case, updating the code state) by 250ms.
    * "setCode(...)", Inside the setTimeout callback, the setCode function is called to update the code state.
  */
  useEffect(() => {

    const timeout = setTimeout(() => {
      setCode(`
        <html>
          <body>${htmlValue}</body>
          <style>${cssValue}</style>
          <script>${jsValue}</script>
        </html>
      `);
    }, 250);

    // Clean-up function for when the component unmounts or when the effect re-runs.
    return () => clearTimeout(timeout);

  }, [htmlValue, cssValue, jsValue]);

  return (
    <>
      {/** Navbar on the top */}
      <Navbar />

      <div className="flex lg:flex-row md:flex-col sm:flex-col xxs:flex-col gap-x-0.5 mt-1">
        {/** Web Editor Div - (LEFT SECTION) */}
        <div className="lg:w-2/5 w-full pl-2 pt-1 mb-0.5">
          <div className="w-full mt-1">
            <CodeEditor
              displayName="HTML"
              lang="html"
              value={htmlValue}
              setValue={setHtmlValue}
              icon={<AiFillHtml5 className="text-orange-500" />}
            />
          </div>

          <div className="w-full mt-1">
            <CodeEditor
              displayName="CSS"
              lang="css"
              value={cssValue}
              setValue={setCssValue}
              icon={<SiCss3 className="text-blue-500" />}
            />
          </div>

          <div className="w-full mt-1">
            <CodeEditor
              displayName="Javascript"
              lang="javascript"
              value={jsValue}
              setValue={setJsValue}
              icon={<BiLogoJavascript className="text-yellow-400" />}
            />
          </div>
        </div>

        {/** OUTPUT Div - (RIGHT SECTION) */}
        <div className="lg:w-3/5 w-full p-2">
          <div className="bg-[#1d2423] p-2 flex justify-between">
            <div className="bg-[#353F3E] lg:w-3/5 md:w-3/5 sm:w-3/6 xxs:w-[80%] m-0.3 lg:p-1 md:p-1 sm:p-0.5 xxs:p-0.1 flex items-center rounded-full">
              <PiLinkSimpleHorizontalBold className="lg:ml-2 md:ml-2 sm:ml-0.5 xxs:ml-1 text-white" />
              <span className="font-mukta text-white text-sm sm:text-xs xxs:text-xs ml-2">http://localhost:3000/codex/coderoom/web-editor</span>
            </div>
            <div className="flex justify-between items-center gap-x-2">
              <BiMinus className="text-gray-400 text-lg hover:text-2xl hover:text-gray-500 cursor-pointer" />
              <PiCopyBold className="text-gray-400 text-lg hover:text-2xl hover:text-gray-500 cursor-pointer" />
              <RxCross2 className="text-gray-400 text-lg hover:text-2xl hover:text-red-500 cursor-pointer" />
            </div>
          </div>
          <iframe
            srcDoc={code}
            title="Output"
            width="100%"
            height="92%"
            sandbox="allow-scripts"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default WebIDE;
