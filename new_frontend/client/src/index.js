import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import IdeaDetail from './pages/IdeaDetail'

import Register from './pages/Register'
import Login from './pages/Login'
import UserProfile from './pages/UserProfile'
import Authors from './pages/Authors'
import CreateIdea from './pages/CreateIdea'
import EditIdea from './pages/EditIdea'
import DeleteIdea from './pages/DeleteIdea'
import CategoryIdeas from './pages/CategoryIdeas'
import AuthorIdeas from './pages/AuthorIdeas'
import Dashboard from './pages/Dashboard'
import Logout from './pages/Logout'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <Home/>},
      {path: "Ideas/:id", element: <IdeaDetail/>},
      {path: "register", element: <Register/>},
      {path: "login", element: <Login/>},
      {path: "profile/:id", element: <UserProfile/>},
      {path: "authors", element: <Authors/>},
      {path: "create", element: <CreateIdea/>},
      {path: "Ideas/categories/:category", element: <CategoryIdeas/>},
      {path: "Ideas/users/:id", element: <AuthorIdeas/>},
      {path: "myIdeas/:id", element: <Dashboard/>},
      {path: "Ideas/:id/edit", element: <EditIdea/>},
      {path: "Ideas/:id/delete", element: <DeleteIdea/>},
      {path: "logout", element: <Logout/>},




    ]


  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);

