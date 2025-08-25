"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Information We Collect",
    content:
      "We collect personal data such as name, email, and usage behavior to provide and improve our services.",
  },
  {
    title: "How We Use Data",
    content:
      "Data is used to enhance user experience, send updates, and ensure platform security.",
  },
  {
    title: "Third-Party Sharing",
    content:
      "We never sell data. We only share with trusted partners under strict data agreements.",
  },
  {
    title: "Security",
    content:
      "We use encryption and access control to safeguard your data. However, no system is 100% secure.",
  },
  {
    title: "Your Rights",
    content:
      "You can access, modify, or request deletion of your data by contacting support.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="container max-w-3xl px-4 py-20">
      <TextGenerateEffect
        words="Privacy Policy"
        className="text-4xl md:text-5xl font-bold text-center mb-12"
      />

      <div className="space-y-6">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border border-border/30 shadow-md bg-background/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-xl">{section.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-relaxed">
                {section.content}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-center text-xs text-muted-foreground mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </motion.p>
    </main>
  );
}
