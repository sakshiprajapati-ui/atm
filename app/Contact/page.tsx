"use client";

import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { SparklesCore } from "@/components/magicui/sparkles";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Input,
  Textarea,
  Label,
} from "@/components/ui/input"; // if you don't have Label/Textarea, create small wrappers
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <AuroraBackground className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16">
      {/* Title */}
      <div className="relative w-full max-w-3xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tight relative z-10"
        >
          Get in <span className="text-primary">Touch</span>
        </motion.h1>

        <SparklesCore
          className="-z-10"
          background="transparent"
          particleDensity={120}
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
          We’d love to hear from you. Whether you have a question or a project
          in mind, let’s talk!
        </motion.p>
      </div>

      {/* Contact Section */}
      <div className="mt-16 grid gap-8 md:grid-cols-2 max-w-5xl w-full">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="rounded-2xl shadow-lg backdrop-blur bg-background/70">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-primary" />
                <p>hello@example.com</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-primary" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-primary" />
                <p>123 Tech Street, Innovation City</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="rounded-2xl shadow-lg backdrop-blur bg-background/70">
            <CardContent className="p-8 space-y-6">
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Write your message..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </AuroraBackground>
  );
}
