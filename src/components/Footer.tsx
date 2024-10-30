import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
    return (
        <div className="container  mx-auto px-4 pt-10">
            <div className= "grid grid-cols-8 gap-6 md:gap-0">
                {/* Column 1: Company Logo */}
                <div className="col-span-8 border-gray-100 dark:border-gray-800 md:col-span-2 lg:col-span-3">
                    <div className="flex items-center justify-between gap-6 border-b border-white dark:border-gray-800 py-6 md:block md:space-y-6 md:border-none md:py-0">
                        <Link to="/">
                            <span className="text-xl font-bold">OvalTech</span>
                        </Link>
                    </div>
                </div>
                
                <div className="col-span-8 md:col-span-6 lg:col-span-5">
                    <div className="grid grid-cols-2 gap-6 pb-16 sm:grid-cols-3 md:pl-16">
                        {/* Column 2: Quick Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="#" className="text-sm text-gray-400 hover:text-gray-200">
                                        <span>Home</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm text-gray-400 hover:text-gray-200">
                                        <span>Services</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm text-gray-400 hover:text-gray-2000">
                                        <span>About Us</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm text-gray-400 hover:text-gray-200">
                                        <span>Portfolio</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Contact */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Products</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="#" className="text-sm text-gray-400 hover:text-gray-200">
                                        <span>Home</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm text-gray-400 hover:text-gray-200">
                                        <span>Services</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm text-gray-400 hover:text-gray-200">
                                        <span>About Us</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm text-gray-400 hover:text-gray-200">
                                        <span>Portfolio</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 4: Newsletter */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="#" className="text-sm text-gray-400 hover:text-gray-200">
                                        <span>Home</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm text-gray-400 hover:text-gray-200">
                                        <span>Services</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm text-gray-400 hover:text-gray-200">
                                        <span>About Us</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm text-gray-400 hover:text-gray-200">
                                        <span>Portfolio</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                

               
            </div>

                {/* Social Icons */}
            <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex justify-center space-x-6">
                    <Link href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Facebook</span>
                    <Facebook className="h-6 w-6" />
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Instagram</span>
                        <Instagram className="h-6 w-6" />
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Twitter</span>
                        <Twitter className="h-6 w-6" />
                    </Link>
                </div>
                <p className="mt-8 text-center text-sm text-gray-500">
                    &copy; 2024 Oval Tech, Inc. All rights reserved.
                </p>
            </div>
        </div>
    );

}