import { BrowserRouter, Routes, 
    Route, Link, useLocation, Outlet } from "react-router-dom";
    
    function App() {
      return (
        <BrowserRouter>
          {/* 라우트를 감싸줍니다. */}
          <Routes>
            <Route path="/three/*" element={<Outlet />}>
              <Route path="" element={<HojunIndex/>}/>
              <Route path="hojunone/" element={<HojunOne/>}/>
              <Route path="hojuntwo/" element={<HojunTwo/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      );
    }
    
    function HojunIndex(){
      return <h1>hello Hojun Index</h1>
    }
    
    function HojunOne(){
      return <h1>Hello Hojun One</h1>
    }
    
    function HojunTwo(){
      return <h1>Hello Hojun Two</h1>
    }
    
    export default App;