import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import Prefooter from "@/components/custom/Prefooter/Prefooter";

export default function UniqueHeroWithSidebar() {
  return (
    <div className=" mx-auto relative flex flex-col md:flex-row">
      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-6 py-12 ">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}

          <div className="flex justify-end">
            <div className="max-w-[800px] space-y-6 text-center md:text-left">
              <Prefooter />
              <p className="max-w-[400px] text-lg text-muted-foreground">
                We craft scalable, responsive, and user-friendly platforms to
                grow your digital presence.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> Seamless
                  integration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> Scalable
                  architecture
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> 24/7 support
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
                <ShimmerButton className="text-white dark:text-white">
                  Get A Quote
                </ShimmerButton>
              </div>
            </div>
          </div>

          {/* Visual / Image Block */}
          <Card className="shadow-lg overflow-hidden rounded-4xl ml-20">
            <CardContent className="p-0">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                alt="Hero visual"
                className="object-cover h-full w-full"
              />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
