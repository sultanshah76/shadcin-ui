
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button"



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-5">
      <h1 className="font-bold text-6xl text-red-500">
        Hello my name is salma i am bht gandi
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure
      </p>
      <Button variant="outline">push me</Button>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia,
      </p>
      {/* <Link className={buttonVariants({ variant: "outline" })}>Click here</Link> */}
      {/* <Button asChild>
  <Link href="/blog/id">Login</Link>
</Button> */}


    </main>
  );
}
