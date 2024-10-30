import { Separator } from "@radix-ui/react-separator";
import { Card, CardContent } from "./ui/card";

export function SuccesStory() {
    return (
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
    );
}