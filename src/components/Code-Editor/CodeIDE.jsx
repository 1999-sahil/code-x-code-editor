import { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import { ToastContainer, toast } from 'react-toastify';
import LanguageDropdown from './LanguageDropdown';
import ThemeDropdown from './ThemeDropdown';
import EditorWindow from './EditorWindow';
import OutputWindow from './OutputWindow';
import CustomInput from './CustomInput';
import { languageOptions } from '../../constants/languageOptions';
import { defineTheme } from '../../libs/defineTheme';
import OutputDetails from './OutputDetails';
import axios from 'axios';

const defaultCode = `/**
  Choose your language before writing the code.
  Choose your theme anytime.

  Write your code below.
*/`;

const CodeIDE = () => {
  
  const [code, setCode] = useState(defaultCode);
  const [language, setLanguage] = useState(languageOptions[0]);
  const [theme, setTheme] = useState("cobalt");
  const [customInput, setCustomInput] = useState("");
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(null);


  /** Set Language */
  const onSelectChange = (sl) => {
    setLanguage(sl);
  };

  /** Set Theme */
  function handleThemeChange(th) {
    const theme = th;
    console.log("theme...", theme);

    if (["light", "vs-dark"].includes(theme.value)) {
      setTheme(theme);
    } else {
      defineTheme(theme.value).then((_) => setTheme(theme));
    }
  };

  /** Default Theme */
  useEffect(() => {
    defineTheme("oceanic-next").then((_) =>
      setTheme({ value: "oceanic-next", label: "Oceanic Next" })
    );
  }, []);

  /** Set Code */
  const onChange = (action, data) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };

  /** Handle Compile */
  const handleCompile = () => {
    setProcessing(true);

    const formData = {
      language_id: language.id,
      source_code: btoa(code),
      stdin: btoa(customInput)
    };

    const url = 'https://judge0-ce.p.rapidapi.com/submissions';

    const options = {
      method: "POST",
      url: url,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Host": 'judge0-ce.p.rapidapi.com',
        "X-RapidAPI-Key": '00c4388a30mshad4aab029e54a9dp11f4adjsnca7f4254f077'
      },
      data: formData
    };

    axios
      .request(options)
      .then(function (response) {
        console.log("res.data", response.data);
        const token = response.data.token;
        checkStatus(token);
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
        // get error status
        let status = err.response.status;
        console.log("status", status);
        if (status === 429) {
          console.log("too many requests", status);

          showErrorToast(
            `Quota of 100 requests exceeded for the Day! Please read the blog on freeCodeCamp to learn how to setup your own RAPID API Judge0!`,
            10000
          );
        }
        setProcessing(false);
        console.log("catch block...", error);
      });
  };

  /** Check Statuses */
  const checkStatus = async(token) => {

    const url = 'https://judge0-ce.p.rapidapi.com/submissions';

    const options = {
      method: "GET",
      url: `${url}/${token}`,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "X-RapidAPI-Host": 'judge0-ce.p.rapidapi.com',
        "X-RapidAPI-Key": '00c4388a30mshad4aab029e54a9dp11f4adjsnca7f4254f077',
      },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;

      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        setProcessing(false);
        setOutputDetails(response.data);
        showSuccessToast(`Compiled Successfully!`);
        console.log("response.data", response.data);
        return;
      }
    } catch (err) {
      console.log("err", err);
      setProcessing(false);
      showErrorToast();
    }
  };

  /** Success Toast */
  const showSuccessToast = (msg) => {
    toast.success(msg || `Compiled Successfully!`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  /** Show Error Toast */
  const showErrorToast = (msg, timer) => {
    toast.error(msg || `Something went wrong! Please try again.`, {
      position: "top-right",
      autoClose: timer ? timer : 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      {/** Navbar Component */}
      <Navbar />

      {/** Toast, it will shown after compilation */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {/** Language and Theme Section Div */}
      <div className="lg:flex sm:flex xxs:flex lg:flex-row sm:flex-row xxs:flex-col lg:justify-start sm:justify-center xxs:items-center">
        {/** Language Dropdown */}
        <div className="px-4 py-2 mt-2">
          <LanguageDropdown onSelectChange={onSelectChange} />
        </div>
        {/** Theme Dropdown */}
        <div className="px-4 py-2 mt-2">
          <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
        </div>
      </div>

      {/** Code Editor and Input/Output Sections */}
      <div className="lg:flex sm:flex lg:flex-row sm:flex-col xxs:flex-col lg:items-start px-4 py-4 sm:justify-center xxs:justify-center">
        {/** Code Editor Section */}
        <div className="lg:flex lg:flex-col lg:w-[80%] sm:w-full h-[90%]">
          <EditorWindow
            code={code}
            onChange={onChange}
            language={language?.value}
            theme={theme.value} 
          />
        </div>

        {/** Input and Output Sections */}
        <div className="container flex lg:w-[30%] sm:w-full md:w-full xxs:w-full lg:flex-col sm:flex-col md:flex-col xxs:flex-col lg:ml-2 lg:pl-2 lg:pr-2 md:ml-12 md:pl-0 md:mr-1 xxs:ml-12 sm:ml-5 sm:">

          <OutputWindow outputDetails={outputDetails} />

          <div className="flex flex-col">
            <CustomInput customInput={customInput} setCustomInput={setCustomInput} />
            <button 
              onClick={handleCompile} 
              className="sm:mb-2 lg:mb-0 mt-3 relative px-10 py-3 font-bold font-mukta text-white transition duration-300 bg-emerald-500 rounded-md hover:bg-emerald-600 ease"
            >
              <span className="absolute bottom-0 left-0 h-full -ml-2">
                <svg viewBox="0 0 487 487" className="w-auto h-full opacity-100 object-stretch" xmlns="http://www.w3.org/2000/svg"><path d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z" fill="#FFF" fillRule="nonzero" fillOpacity=".1"></path></svg>
              </span>
              <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                <svg viewBox="0 0 487 487" className="object-cover w-full h-full" xmlns="http://www.w3.org/2000/svg"><path d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z" fill="#FFF" fillRule="nonzero" fillOpacity=".1"></path></svg>
              </span>
              <span className="relative">
                {processing ? "Processing..." : "Compile and Execute"}
              </span>
            </button>
          </div>

          {/** Output Details...shows after compiling the code */}
          {
            outputDetails && <OutputDetails outputDetails={outputDetails} />
          }

        </div>
      </div>
    </>
  )
}

export default CodeIDE;