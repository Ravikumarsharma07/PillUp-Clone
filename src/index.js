import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Layout from "./Layout"
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements  } from 'react-router-dom';
import BlogPage from './components/blogPage/blogPage';
import HomePage from './components/homePage/HomePage';
import WhyUs from './components/whyUs/WhyUs';
import HowItWorks from './components/howItWorks/HowItWorks';
import BrandStory from './components/brandStory/BrandStory';
import ReadBlog from './components/blogPage/components/smallComponents/ReadBlog';





const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Layout />} >
        <Route path='' element={<HomePage />} />
        <Route path='WhyUs' element={<WhyUs />} />
        <Route path='HowItWorks' element={<HowItWorks />} />
        <Route path='Blogs/' element={<BlogPage />} />
        <Route path='Blogs/:blogID' element={<ReadBlog />}></Route> 
        
        <Route path='BrandStory' element={<BrandStory />} />
        <Route path='*' element={<p className='text-center my-10 text-6xl font-bold'>404 page not found</p>} />
      </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
