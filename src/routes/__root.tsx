import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'

import { RouterContext } from '@/routeContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';


export const Route = createRootRouteWithContext<RouterContext>()({
  component: RouteComponent
}); 




function RouteComponent() {
  return (
  
    <html lang="en">
      <head>
         
      </head>
      <body className='w-full text-white min-h-screen flex flex-col overflow-x-hidden'>
        <div className=''>
            <Navbar />
            <Outlet />

            <footer>
               <Footer />
            </footer>
        </div>
        
      </body>
      
    </html>
  )
};
