import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CodeIDE from "./components/Code-Editor/CodeIDE";
import WebIDE from "./components/Web-Editor/WebIDE";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <>
      {/** This is a toast for homepage when we create room/joinRoom */}
      <div>
        <Toaster
          position="top-center"
          toastOptions={{
            success: {
              theme: {
                primary: '#4aed88',
              },
            },
          }}
        >
        </Toaster>   
      </div>
      {/** All Routes -> (LogIn, Home, CodeIDE, WebIDE) */}
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path={`/coderoom/:roomId`} element={<Home />} />
          <Route exact path={`/coderoom/:roomId/code-editor`} element={<CodeIDE />} />
          <Route exact path={`/coderoom/:roomId/web-editor`} element={<WebIDE />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;