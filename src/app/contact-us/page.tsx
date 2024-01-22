"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from '@/components/ui/button';
import React from 'react';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input";
  import { toast, useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";

  // FORM VALIDATION
  const FormSchema = z.object({
    fullname: z.string().min(10,{message:"fullname atleast 10 characters"}),
    email: z.string().email({message:"Email required"}),
    subject: z.string().min(4,{message:"Subject required"}),
    description: z.string().min(4,{message:"Description required"}),
  });

export default function Contactus() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullname: "",
      email: "",
      subject: "",
      description: "",



    },});
   
  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }
 
  return <><section className="bg-white dark:bg-gray-900">
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>NAME</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="write your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>EMAIL</FormLabel>
                <FormControl>
                  <Input placeholder="name@flowbite.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} /> 
          
<FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>SUBJECT</FormLabel>
                <FormControl>
                  <Input  type="text" placeholder="Leave a comment..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Let us know how we can help you Leave a comment..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
                   <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  </section>
  
  </>
};