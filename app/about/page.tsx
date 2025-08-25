"use client";

import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { SparklesCore } from "@/components/magicui/sparkles";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail } from "lucide-react";
export default function AboutPage() {
  return (
    <AuroraBackground className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16">
      {/* Hero Section */}
      <div className="relative w-full max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tight relative z-10"
        >
          About <span className="text-primary">Us</span>
        </motion.h1>

        {/* Sparkles behind text */}
        <SparklesCore
          className="-z-10"
          background="transparent"
          particleDensity={140}
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
          We build next-gen digital experiences with performance, aesthetics,
          and cutting-edge technology.
        </motion.p>
      </div>

      <Separator className="my-12 max-w-2xl" />

      {/* Mission + Vision */}
      <div className="grid gap-6 md:grid-cols-2 max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="rounded-2xl shadow-lg backdrop-blur bg-background/60">
            <CardContent className="p-6 space-y-3">
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <p className="text-muted-foreground">
                Empower innovators and businesses by delivering scalable,
                accessible, and delightful digital products.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="rounded-2xl shadow-lg backdrop-blur bg-background/60">
            <CardContent className="p-6 space-y-3">
              <h2 className="text-2xl font-semibold">Our Vision</h2>
              <p className="text-muted-foreground">
                To redefine the web with immersive experiences, intuitive
                interfaces, and seamless technology integration.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Team Section */}
      <div className="mt-16 max-w-5xl w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold mb-8"
        >
          Meet Our Team
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: "Alex Carter", role: "Frontend Engineer" },
            { name: "Sophia Lee", role: "UI/UX Designer" },
            { name: "Ethan Walker", role: "Backend Architect" },
          ].map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center space-y-3">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 animate-pulse" />
                  <h3 className="text-xl font-medium">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-16 flex flex-col items-center gap-4">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Let’s Build Something Amazing
        </h2>
        <div className="flex gap-4">
          <Button variant="outline" size="icon" asChild>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="mailto:hello@example.com">
              <Mail className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </AuroraBackground>
  );
}
