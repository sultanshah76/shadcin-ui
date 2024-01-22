"use client"
import { Button } from "@/components/ui/button";
import {
  ChevronRightIcon,
  EnvelopeOpenIcon,
  ReloadIcon,
} from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import Alertdialog from "@/components/Alert dialog";
import Profiledialog from "@/components/Profile-dialog";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <Link href={"./blog"}>BLOG APP</Link>
      <Link href={"./todo"}>TODO APP</Link>
      <Link href={"./contact-us"}>CONTACT US(FORM VALIDATIONS)</Link>

      <div>heloo shadcin ui</div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Taxing Laughter: The Joke Tax Chronicles
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The king, seeing how much happier his subjects were, realized the error
        of his ways and repealed the joke tax.
      </p>
      <br />
      <div className=" flex gap-5">
        <Button>primary</Button>
        <Button variant={"destructive"}>destructive</Button>
        <Button variant={"ghost"}>ghost</Button>
        <Button variant={"link"}>link</Button>
        <Button variant={"outline"}>outline</Button>
        <Button variant={"secondary"}>SECONDARY</Button>
        <Button variant="outline" size="icon">
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
        <Button>
          <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
        </Button>
        <Button disabled>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
      </div>
      <div className="mt-6">
        <Input type="email" placeholder="Email" />
        <br />
        <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email with label" />
    </div>
        </div>
 <div>
  <Alertdialog/>
<Profiledialog/>
 </div>


    </main>
  );
}
