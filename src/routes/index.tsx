import { ContactUs } from "@/components/Contactus";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Code, Paintbrush, Smartphone, Server, Globe, ShieldCheck, } from "lucide-react";


export const Route = createFileRoute('/')({
    component: IndexComponent
}) 



function IndexComponent() {
    return (
        <div>
            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center h-[32rem] ">
                <div className="px-14 mx-auto text-center">
                    <h1 className="text-5xl sm:text-4xl lg:text-6xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        We Build Digital Solutions<br />That Drive Growth
                    </h1>
                    <p className="text-xl sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Transform your ideas into powerful software solutions with our expert team of developers, designers, and strategists.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button size="lg">
                            Start Your Project
                        </Button>
                        <Button size="lg" variant="secondary">
                            View Our Work
                        </Button>
                    </div>
                </div>
            </div>

          {/* End Hero Section */}

           {/* Success Stories */}
            <div className="flex flex-col ">
               <div className="max-w-5xl px-4 xl:px-0 py-24 mx-auto">
                    {/* Title  */}
                    <div className="max-w-3xl mb-10 lg:mb-14">
                        <h2 className="text-3xl font-bold mb-4 mt-4">Success stories</h2>
                        <p className="text-white text-left text-muted-foreground max-w-2xl mx-aut">Global brands see measurable success when they collaborate with us. From higher conversion and payment approval rates to faster processing speeds. Discover their stories here.</p>
                    </div>
                    {/* End Title  */}

                    {/* Card Grid  */}
                    <div className="">
                        <Card className="w-full max-w-4xl text-white bg-neutral-900 bg-gradient-to-t from-black to-transparent">
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="py-5">
                                        <p className="font-bold py-4 text-5xl text-left">43%</p>
                                        <h3 className="text-lg font-bold  text-left">Enhancement in Customer Engagement</h3>
                                        <p className="text-sm text-left">
                                            With the aim of optimizing customer interactions and boosting brand loyalty, the team at Preline leveraged Mailchimp's powerful tools and expertise to deliver exceptional results.
                                        </p>
                                    </div>
                                    <Separator className="md:hidden" />
                                    <div className="py-5">
                                        <p className="font-bold py-4 text-5xl text-left">20%</p>
                                        <h3 className="text-lg font-bold  text-left">Rise in E-commerce</h3>
                                        <p className="text-sm text-left">
                                            In collaboration with Shopify, Preline embarked on a mission to revolutionize the e-commerce experience for a fictitious fashion brand, "StyleAura."
                                        </p>
                                    </div>
                                    <Separator className="md:hidden" />
                                    <div className="py-5">
                                        <p className="font-bold py-4 text-5xl text-left">12%</p>
                                        <h3 className="text-lg font-bold text-left">Streamlining Development</h3>
                                        <p className="text-sm text-left">
                                            With the goal of accelerating project delivery and enhancing collaboration among development teams, Preline leveraged GitLab's comprehensive suite of tools and Preline's expertise in digital product development.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* End Card Grid  */}
               </div>
            </div>

            {/* End Success Stories */}

            {/* Services Section */}
            <div className="flex flex-col px-4 lg:px-24 md:px-20 sm:px-6 ">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 mt-4">Our Services</h2>
                        <p className="text-left max-w-2xl mx-auto">
                          We at Oval Technologies are derived by Trust on what we are capable of 
                          and geared to climb to heights. We&apos;ve got what you need!. We are providing highly quality in the following services and much more....
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card key="1" className="flex flex-col bg-violet-950 text-white">
                            <CardHeader>
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                    <Code className="h-10 w-10" />
                                </div>
                                <CardTitle className="text-xl mb-2">
                                  Web Development
                                </CardTitle>
                                <CardDescription>
                                  Custom websites and web applications tailored to your needs.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <Button asChild>
                                    <Link to="" >
                                        View Project
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                        <Card key="1" className="flex flex-col bg-violet-950 text-white">
                            <CardHeader>
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                    <Paintbrush className="h-10 w-10" />
                                </div>
                                <CardTitle className="text-xl mb-2">
                                  UI/UX Design
                                </CardTitle>
                                <CardDescription>
                                   Intuitive and visually appealing user interfaces and experiences.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <Button asChild>
                                    <Link to="" >
                                        View Project
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                        <Card key="1" className="flex flex-col bg-violet-950 text-white">
                            <CardHeader>
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                  <Smartphone className="h-10 w-10" />
                                </div>
                                <CardTitle className="text-xl mb-2">
                                  Mobile App Development
                                </CardTitle>
                                <CardDescription>
                                Native and cross-platform mobile applications for iOS and Android.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <Button asChild>
                                    <Link to="" >
                                        View Project
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                        <Card key="1" className="flex flex-col bg-violet-950 text-white">
                            <CardHeader>
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                    <Globe className="h-10 w-10" />
                                </div>
                                <CardTitle className="text-xl mb-2">
                                    SEO Optimization
                                </CardTitle>
                                <CardDescription>
                                Improve your website's visibility and ranking on search engines.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <Button asChild>
                                    <Link to="" >
                                        View Project
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                        <Card key="1" className="flex flex-col bg-violet-950 text-white">
                            <CardHeader>
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                    <Server className="h-10 w-10" />
                                </div>
                                <CardTitle className="text-xl mb-2">
                                    Cloud Services
                                </CardTitle>
                                <CardDescription>
                                Scalable and reliable cloud solutions for your business needs.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <Button asChild>
                                    <Link to="" >
                                        View Project
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                        <Card key="1" className="flex flex-col bg-violet-950 text-white">
                            <CardHeader>
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                    <ShieldCheck className="h-10 w-10" />
                                </div>
                                <CardTitle className="text-xl mb-2">
                                    Cyber Security
                                </CardTitle>
                                <CardDescription>
                                Protect your digital assets with our advanced security measures.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <Button asChild>
                                    <Link to="" >
                                        View Project
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
            </div>
            {/* // End Services Section  */}

            {/* Contact US */}
            <ContactUs />
            {/* End Contact US */}

        </div>
           
        
    );
}

