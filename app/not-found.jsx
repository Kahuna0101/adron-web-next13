import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <main className="flex flex-col justify-center gap-5 items-center min-h-[100vh] text-center">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Adron Homes"
          width={90}
          height={20}
        />
      </Link>
        <Image src="/error.png" width={250} height={250} alt="error" />
        <h2 className="text-5xl font-bold">Page Not Found?</h2>
        <p className="text-base font-medium text-slate-500">Looks like the page you were looking for wasn't found.</p>
        <Link href="/">
          <Button className="text-white text-xl bg-green-600 p-6">
            Back to Home
          </Button>
        </Link>
      </main>
    </section>
  );
}
