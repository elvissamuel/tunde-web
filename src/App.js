import { useEffect, useState } from "react";
import { Layout } from "./components/Layout";
import About from "./pages/About";
import ArticlesIndex from "./pages/Articles";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaSun, FaMoon, FaLaptop } from 'react-icons/fa';


function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : '')
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');


  const options = [
    {
      icon: <FaSun />,
      text: 'light'
    }, {
      icon: <FaMoon />,
      text: 'dark'
    },
    // {
    //   icon: <FaLaptop />,
    //   text: 'system'
    // }
  ]

  useEffect(()=>{
    switch (theme) {
      case 'dark':
        document.documentElement.classList.add('dark')
        localStorage.setItem("theme", "dark")

        break;
      case 'light': 
        document.documentElement.classList.remove('dark')
        localStorage.setItem("theme", "light")
 
        break;
    
      default:
        localStorage.removeItem("theme")
        
        break;
    }
  }, [theme])

  const onWindowsMatch = ()=>{
    if(localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  }

  onWindowsMatch()

  return (
    <Router>
    <div className="">
      <Layout>
        <div className="z-40 absolute right-40 top-8 flex gap-2 border border-slate-200 rounded-lg border-opacity-70 p-2">
          {options.map((btn, index) => ( 
            <button key={index} onClick={()=> setTheme(btn.text)} className={`${theme === btn.text ? 'text-zinc-600' : 'text-zinc-200'}`}>
              {btn.icon}
            </button>
          ))}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<ArticlesIndex />} />
        </Routes>
      </Layout>

    </div>
    </Router>
  );
}

export default App;
