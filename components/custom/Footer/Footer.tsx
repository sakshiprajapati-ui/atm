import * as React from "react";

import { Separator } from "@/components/ui/separator";

import Toptext from "./Toptext";
import Midlinks from "./Midlinks";
import Bottomlinks from "./Bottomlinks";

export default function SiteFooter() {
  return (
    <footer className="border-t bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/99">
      <div className=" mx-auto px-8 py-20">
        <Toptext />
        <Midlinks />
        <Bottomlinks />
      </div>
    </footer>
  );
}
