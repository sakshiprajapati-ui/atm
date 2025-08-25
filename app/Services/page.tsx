"use client";

import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { SparklesCore } from "@/components/magicui/sparkles";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function ServicesPage() {
  return (
    <AuroraBackground className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16">
      {/* ✅ Hero Section */}
      <div className="relative w-full max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tight relative z-10"
        >
          Our <span className="text-primary">Services</span>
        </motion.h1>

        <SparklesCore
          className="-z-10"
          background="transparent"
          particleDensity={100}
          minSize={1}
          maxSize={2.5}
          particleColor="rgba(255,255,255,0.85)"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground relative z-10"
        >
          Cutting-edge solutions tailored for startups, enterprises, and
          innovators 🚀
        </motion.p>
      </div>

      {/* ✅ Services Grid Section */}
      <div className="mt-16 grid gap-8 md:grid-cols-3 max-w-6xl w-full">
        {[
          {
            title: "Web Development",
            desc: "Next.js, React, and modern frontend stacks.",
          },
          {
            title: "UI/UX Design",
            desc: "Clean, modern, and user-centered design systems.",
          },
          {
            title: "AI Integrations",
            desc: "Smart AI-powered features for your apps.",
          },
          {
            title: "Cloud Solutions",
            desc: "Scalable infrastructure on AWS, GCP, Azure.",
          },
          {
            title: "Mobile Apps",
            desc: "iOS & Android with React Native / Flutter.",
          },
          {
            title: "Tech Consulting",
            desc: "Helping you choose the right tools & strategy.",
          },
        ].map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <Card className="rounded-2xl shadow-lg bg-background/70 backdrop-blur hover:shadow-xl transition">
              <CardContent className="p-6 flex flex-col items-start">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.desc}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* ✅ Slider Section */}
      <div className="mt-20 max-w-5xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          What Our Clients Say
        </motion.h2>

        <Carousel className="w-full">
          <CarouselContent>
            {[
              {
                name: "John Doe",
                text: "The web app they built scaled to 1M users flawlessly!",
              },
              {
                name: "Sarah Lee",
                text: "Our startup UI/UX now looks stunning thanks to their design team.",
              },
              {
                name: "Mark Chan",
                text: "AI features integrated seamlessly into our workflow!",
              },
            ].map((testimonial, i) => (
              <CarouselItem
                key={i}
                className="basis-full md:basis-1/2 lg:basis-1/3 p-4"
              >
                <Card className="rounded-2xl shadow-lg bg-background/70 backdrop-blur">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">
                      "{testimonial.text}"
                    </p>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </AuroraBackground>
  );
}

// "use client";
// import React from "react";
// import { PinContainer } from "@/components/ui/3d-pin";

// export default function AnimatedPinDemo() {
//   return (
//     <div className="h-[40rem] w-full flex items-center justify-center ">
//       <PinContainer
//         title="/ui.aceternity.com"
//         href="https://twitter.com/mannupaaji"
//       >
//         <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
//           <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
//             Aceternity UI
//           </h3>
//           <div className="text-base !m-0 !p-0 font-normal">
//             <span className="text-slate-500 ">
//               Customizable Tailwind CSS and Framer Motion Components.
//             </span>
//           </div>
//           <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
//         </div>
//       </PinContainer>
//     </div>
//   );
// }

// "use client";
// import React from "react";
// import { WavyBackground } from "@/components/ui/wavy-background";
// export default  function WavyBackgroundDemo() {
//   return (
//     <WavyBackground className="max-w-4xl mx-auto pb-40">
//       <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
//         Hero waves are cool
//       </p>
//       <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
//         Leverage the power of canvas to create a beautiful hero section
//       </p>
//     </WavyBackground>
//   );
// }
