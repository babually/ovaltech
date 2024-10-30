import { Link } from "@tanstack/react-router";
import React from "react";
import { Button } from '@/components/ui/button'
// import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";


const navItems = [
  { name: 'HomeE', to: '/' },
  { name: 'About Us', to: '/aboutus' },
  { name: 'Services', to: '/services' },
  { name: 'Portfolio', to: '/portfolio' },
  { name: 'Contacts', to: '/contacts' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  
  return (
      <header className="sticky top-0 inset--x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
        <nav className="mt-6 relative lg:max-w-4xl md:max-w-3xl sm:max-w-xl w-full border border-neutral-700 rounded-[2rem] mx-2 py-2.5 md:flex md:items-center md:justify-between md:py-0 md:px-4 md:mx-auto">
          <div className="flex items-center justify-between lg:h-16 md:h-14 sm:h-10">
            <div className="flex items-start">
              <Link to="/" className="text-2xl px-6 font-bold text-primary">
                OvalTech
              </Link>
            </div>
            <div className="hidden md:block items-center justify-center">
              <div className="mr-10 flex flex-end items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="text-foreground text-white hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <Drawer open={isOpen} onOpenChange={setIsOpen}>
                <DrawerTrigger asChild className="bg-purple-950">
                  <Button variant="outline" className="px-2 mr-8" aria-label="Open menu">
                    <Menu className="h-6 w-6" />
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="bg-purple-950">
                    <div className="flex flex-col items-center justify-center  space-y-4 mt-4">
                        {navItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.to}
                            className="text-white hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </nav>
      </header>
  );
}