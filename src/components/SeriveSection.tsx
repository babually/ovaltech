import { Code, Server, Paintbrush, Smartphone, Globe, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function ServiceSection() {
    return (
        <div className="flex flex-col px-4 lg:px-24 md:px-20 sm:px-6 ">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4 mt-4">Our Services</h2>
                <p className="text-left max-w-2xl mx-auto">
                    We at Oval Technologies are derived by Trust on what we are capable of 
                    and geared to climb to heights. We&apos;ve got what you need!. We are providing highly quality in the following services and much more....
                </p>
            </div>
            
            <div className="">
                <Card className="w-full max-w-4xl text-white bg-violet-900 bg-gradient-to-t from-violet-950 to-transparent">
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="py-5">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                    <Code className="h-8 w-8" />
                                </div>
                                <h3 className="text-lg font-bold  text-left">Web Development</h3>
                                <p className="text-sm text-left">
                                    Custom websites and web applications tailored to your needs.
                                </p>
                            </div>

                            <div className="py-5">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                    <Paintbrush className="h-8 w-8" />
                                </div>
                                <h3 className="text-lg font-bold  text-left">
                                    UI/UX Design
                                </h3>
                                <p className="text-sm text-left">
                                    Intuitive and visually appealing user interfaces and experiences.
                                </p>
                            </div>

                            <div className="py-5">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                    <Smartphone className="h-8 w-8" />
                                </div>
                                <h3 className="text-lg font-bold  text-left">
                                    Mobile App Development
                                </h3>
                                <p className="text-sm text-left">
                                    Intuitive and visually appealing user interfaces and experiences.
                                </p>
                            </div>

                            <div className="py-5">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                    <Globe className="h-8 w-8" />
                                </div>
                                <h3 className="text-lg font-bold  text-left">
                                    SEO Optimization
                                </h3>
                                <p className="text-sm text-left">
                                    Improve your website's visibility and ranking on search engines.
                                </p>
                            </div>

                            <div className="py-5">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                    <Server className="h-8 w-8" />
                                </div>
                                <h3 className="text-lg font-bold  text-left">
                                    Cloud Services
                                </h3>
                                <p className="text-sm text-left">
                                    Scalable and reliable cloud solutions for your business needs.
                                </p>
                            </div>

                            <div className="py-5">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                    <ShieldCheck className="h-8 w-8" />
                                </div>
                                <h3 className="text-lg font-bold  text-left">
                                    Cyber Security
                                </h3>
                                <p className="text-sm text-left">
                                    Protect your digital assets with our advanced security measures.
                                </p>
                            </div>

                        </div>
                    </CardContent>
                </Card>
            </div>


        </div>
        //  End Services Section  
    );
}