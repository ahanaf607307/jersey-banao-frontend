"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Shirt, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function LandingView() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Navbar Placeholder */}
      <nav className="w-full max-w-7xl px-6 py-6 flex justify-between items-center z-50 absolute top-0">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center border border-primary/50 text-primary font-bold">
            JB
          </div>
          <span className="text-xl font-bold tracking-tighter">Jersey Banao</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
          <Link href="#how-it-works" className="hover:text-primary transition-colors">How it Works</Link>
          <Link href="#models" className="hover:text-primary transition-colors">Models</Link>
        </div>
        <div className="flex gap-4">
          <Link href="/dashboard" className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/25">
            Dashboard
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border w-fit text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Batch 2026 Registration Open!
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Design & Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Premium Jerseys
              </span><br />
              Together.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              সবার সাথে মিলে নিজেদের পছন্দের জার্সি ডিজাইন করুন এবং পেমেন্ট কনফার্ম করে অর্ডার নিশ্চিত করুন। 
              <br className="hidden md:block" />
              Join the team, select a model, confirm your payment, and get ready to gear up!
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Link href="/dashboard" className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-xl shadow-primary/20">
                Start Building <ArrowRight size={18} />
              </Link>
              <Link href="#how-it-works" className="px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-full hover:bg-secondary/80 transition-colors">
                কীভাবে কাজ করে?
              </Link>
            </div>
          </motion.div>

          {/* Hero Image Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl border border-border bg-card/50 backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-2xl"
          >
            <div className="text-center p-8">
              <Shirt size={80} className="mx-auto text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground font-medium">Hero Image Placeholder</p>
              <p className="text-xs text-muted-foreground/60 mt-2">(Use a high-quality 3D render or action shot of a jersey here)</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-24 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose Us? / কেন আমরা?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">A seamless platform for teams to manage jersey orders collectively without any hassle.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="text-blue-400" size={32} />,
                title: "Team Collaboration",
                desc: "Invite all members to a single dashboard. Everyone can see the progress and updates in real-time."
              },
              {
                icon: <ShieldCheck className="text-green-400" size={32} />,
                title: "Secure Verification",
                desc: "Upload payment proofs easily. Admins will verify and confirm orders transparently."
              },
              {
                icon: <Shirt className="text-primary" size={32} />,
                title: "Model Selection",
                desc: "Vote or choose from various jersey models and designs. See what fits your team best."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-8 rounded-3xl border border-border hover:border-primary/50 transition-colors shadow-sm"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary/80 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="w-full py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">কীভাবে কাজ করে?</h2>
            <p className="text-muted-foreground text-lg">4 Simple steps to get your premium jerseys.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 -z-10" />

            {[
              { step: "01", title: "Join Group", desc: "System Owner creates the project and invites members." },
              { step: "02", title: "Select Model", desc: "View the latest models and finalize the design." },
              { step: "03", title: "Pay & Upload", desc: "Pay the required amount and upload the screenshot." },
              { step: "04", title: "Admin Confirms", desc: "Admins verify the proof and confirm your jersey." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center bg-background p-6 rounded-2xl">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-6 shadow-xl shadow-primary/30">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Models Preview (Placeholder) */}
      <section id="models" className="w-full py-24 bg-card/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">Available Models</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((model) => (
              <div key={model} className="aspect-[3/4] rounded-2xl bg-secondary/50 border border-border flex flex-col items-center justify-center p-6 hover:border-primary/50 transition-colors">
                <Shirt size={60} className="text-muted-foreground/30 mb-4" />
                <p className="font-semibold text-lg">Model Version {model}</p>
                <p className="text-sm text-muted-foreground mt-2">Replace with real image from public folder</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="w-full py-12 border-t border-border mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center border border-primary/50 text-primary text-xs font-bold">
              JB
            </div>
            <span className="font-semibold">Jersey Banao</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 Jersey Banao. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
