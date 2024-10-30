import { createRouter, RouterProvider } from '@tanstack/react-router';
import './App.css'
import { routeTree } from './routeTree.gen'

const router = createRouter({
  routeTree,
  context: {
    head: ''
  }
});

function App() {
  return <RouterProvider router={router} />
}

export default App
