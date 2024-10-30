import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { FormField, FormItem, FormControl, FormMessage, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { z } from "zod"
import { ArrowRight, MailOpen, MapPin, Telescope } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

const FormSchema = z.object({
    name: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().min(2, {
      message: "Email must be at least 8 characters.",
    }),
    company: z.string().min(2, {
      message: "Compny name must be at least 2 characters.",
    }),
    phone: z.string().min(2, {
      message: "Phone must be at least 8 digits.",
    }),
    description: z.string().min(2, {
      message: "Please provide description of your projects.",
    }),
  })

export function ContactUs() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          name: "",
          email: "",
          company: "",
          phone: "",
          description: "",
        },
      })

      function onSubmit(data: z.infer<typeof FormSchema>) {
        // toast("You submitted the following values:", {
        //   label: "action",
        //   onClick: () => (
        //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        //     </pre>
        //   )
        // })
      }

    return (
        <div className="px-20">
            <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
                <div className="max-w-3xl mb-10 lg:mb-14">
                    <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Contact us</h2>
                    <p className="mt-1 text-neutral-400 ">Whatever your goal - we will get you there.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-x-16">
                    <div>
                        <div className="flex gap-x-5">
                            <MapPin className="flex-shrink-0 size-6 mt-2 text-neutral-500" />
                            <div className="text-left">
                                <h4 className="text-white font-semibold">Our address:</h4>
                                <span className="mt-1 text-neutral-400 text-sm not-italic">
                                    Uhuru Height 2 Floor, Dar es Salaam, Tanzania
                                </span>
                            </div>
                        </div>
                        
                        <div className="flex flex-row gap-x-5 py-8">
                            <MailOpen className="flex-shrink-0 size-6 mt-2 text-neutral-500" />
                            <div className="text-left">
                                <h4 className="text-white font-semibold">Email us:</h4>

                                <Link className="mt-1 text-neutral-400 text-sm" href="#mailto:example@site.co" target="_blank" rel="noreferrer">
                                    info@ovaltechtz.som
                                </Link>
                            </div>
                        </div>
                            
                        <div className="flex flex-row gap-x-5">
                            <Telescope className="flex-shrink-0 size-6 mt-2 text-neutral-500" />
                                
                            <div className="text-left">
                                <h4 className="text-white font-semibold">We're hiring</h4>
                                <p className="mt-1 text-neutral-400">We're thrilled to announce that we're expanding our team and looking for talented individuals like you to join us.</p>
                                <p className="mt-2">
                                <Link className="group inline-flex items-center gap-x-2 font-medium text-sm text-[#ff0] decoration-2 hover:underline focus:outline-none focus:underline" href="#">
                                    Job openings
                                    <ArrowRight className="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-focus:translate-x-0.5"  />
                                </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:py-4 md:pb-0 md:mb-0">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="w-4/5 lg:w-4/5 md:w-auto space-y-6 md:space-y8">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="shadcn" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="Provide your Email Address" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="company"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="Your Company name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="Phone number" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Textarea placeholder="Describe your Project" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit">Submit</Button>
                            </form>
                        </Form>
                    </div>

                </div>

            </div>
        </div>

                 
    );
}