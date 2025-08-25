"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const post = {
  title: "How to Build a Modern Blog with Next.js",
  author: "Jane Doe",
  date: "August 24, 2025",
  coverImage:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1350&q=80",
  contentBlocks: [
    {
      type: "paragraph",
      content:
        "Next.js is a fantastic React framework that enables building fast and scalable web apps...",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80",
      alt: "Beautiful sunset",
    },
    {
      type: "quote",
      content:
        "The journey of a thousand miles begins with one step.",
      author: "Lao Tzu",
    },
    {
      type: "code",
      language: "tsx",
      content: `function HelloWorld() {
  return <h1>Hello, world!</h1>;
}`,
    },
    {
      type: "paragraph",
      content:
        "With server-side rendering and static generation, Next.js offers great flexibility...",
    },
  ],
};

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

export default function BlogPostPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial="hidden"
        animate="visible"
        custom={0}
        variants={variants}
        className="mb-6"
      >
        <Heading as="h1" className="text-4xl font-extrabold tracking-tight">
          {post.title}
        </Heading>
        <p className="mt-2 text-sm text-gray-500">
          By {post.author} · {post.date}
        </p>
      </motion.div>

      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        src={post.coverImage}
        alt="Cover Image"
        className="rounded-lg w-full h-auto mb-10 shadow-lg"
      />

      <article className="space-y-10">
        {post.contentBlocks.map((block, idx) => {
          switch (block.type) {
            case "paragraph":
              return (
                <motion.p
                  key={idx}
                  custom={idx + 1}
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  className="text-lg leading-relaxed text-gray-800"
                >
                  {block.content}
                </motion.p>
              );

            case "image":
              return (
                <motion.img
                  key={idx}
                  custom={idx + 1}
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  src={block.src}
                  alt={block.alt}
                  className="rounded-lg w-full h-auto shadow-md"
                />
              );

            case "quote":
              return (
                <motion.blockquote
                  key={idx}
                  custom={idx + 1}
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  className="border-l-4 border-blue-500 pl-4 italic text-xl text-gray-600"
                >
                  “{block.content}”
                  <footer className="mt-2 text-right font-semibold text-gray-700">
                    — {block.author}
                  </footer>
                </motion.blockquote>
              );

            case "code":
              return (
                <motion.pre
                  key={idx}
                  custom={idx + 1}
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto font-mono text-sm"
                >
                  <code>{block.content}</code>
                </motion.pre>
              );

            default:
              return null;
          }
        })}
      </article>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: post.contentBlocks.length * 0.3, duration: 0.5 }}
        className="mt-12 text-center"
      >
        <Button variant="outline" onClick={() => alert("Thanks for reading!")}>
          Like this post
        </Button>
      </motion.div>
    </main>
  );
}
