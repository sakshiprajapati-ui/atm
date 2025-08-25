"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-zinc-950 via-black to-zinc-900 px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-4xl"
      >
        <Card className="border border-white/10 bg-zinc-900/80 shadow-2xl backdrop-blur-xl">
          <CardContent className="p-10 sm:p-14">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-emerald-300 bg-clip-text text-transparent sm:text-5xl"
            >
              Privacy Policy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-8 text-lg leading-8 text-zinc-300 sm:text-xl"
            >
              We respect your privacy and are committed to protecting your personal
              information. This Privacy Policy explains how your data is collected,
              used, and safeguarded when you interact with our services. By using
              this platform, you consent to the practices described here. We employ
              technical and organizational safeguards to secure your data and ensure
              transparency in how it is processed. If you have any questions
              regarding this policy, please reach out to us directly.
            </motion.p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
