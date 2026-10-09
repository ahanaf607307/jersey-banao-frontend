"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, ShieldCheck, ArrowRight, Shirt } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
          <span className="text-xl font-bold tracking-tighter text-foreground">Jersey Banao</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#features" className="text-foreground hover:text-primary transition-colors">Features</Link>
          <Link href="#how-it-works" className="text-foreground hover:text-primary transition-colors">How it Works</Link>
          <Link href="#models" className="text-foreground hover:text-primary transition-colors">Models</Link>
        </div>
        <div className="flex gap-4">
          <Link href="/dashboard" className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-bold rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/25">
            Dashboard
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-yellow-300/20 rounded-full blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-border w-fit text-sm font-medium text-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              ডিপার্টমেন্ট বা ব্যাচের জার্সির কাজ এখন আরও সহজ!
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.2] text-foreground">
              সবাই মিলে জার্সি বানানো <br />
              এখন <span className="text-primary">কোনো প্যারা না!</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              ব্যাচ বা গ্রুপ ট্যুরের জার্সি বানানোর দায়িত্ব পেয়ে হিমশিম খাচ্ছেন? কে কোন সাইজ নেবে, কে হাফ হাতা আর কে ফুল হাতা চায়—সব হিসাব রাখা এখন একদম সহজ। 
              <br /><br />
              অ্যাডমিন ডিজাইন আপলোড করবে, আর তোমরা শুধু নিজেদের সাইজ দিয়ে পেমেন্টের স্ক্রিনশট দিলেই অর্ডার কনফার্ম!
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-2">
              <Link href="/dashboard" className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
                ড্যাশবোর্ডে চলো <ArrowRight size={18} />
              </Link>
              <Link href="#how-it-works" className="px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-xl hover:bg-secondary/80 transition-colors">
                কীভাবে কাজ করে?
              </Link>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <img 
              src="/image%20for%20design/hero.jpg" 
              alt="Jersey Hero Image" 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://via.placeholder.com/800x600?text=Please+add+hero.jpg";
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-24 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">কেন এই ওয়েবসাইট?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              এখান থেকে আমরা কোনো জার্সি বিক্রি করি না। এটি শুধুমাত্র তোমাদের গ্রুপের জার্সি বানানোর কাজটাকে সহজ ও গোছানো করার একটি টুল।
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6">
              {[
                {
                  icon: <Users className="text-primary" size={28} />,
                  title: "খাতা-কলমের হিসাব বাদ",
                  desc: "কে টাকা দিলো, কার সাইজ কত—এসব আর খাতায় লিখে রাখতে হবে না। সবাই নিজে নিজে পোর্টালে ঢুকে আপডেট করবে।"
                },
                {
                  icon: <Shirt className="text-primary" size={28} />,
                  title: "সাইজ ও হাতার পছন্দ",
                  desc: "মেম্বাররা নিজেরাই তাদের ফিটিং অনুযায়ী S, M, L, XL সাইজ এবং ফুল বা হাফ হাতা পছন্দ করে নিতে পারবে।"
                },
                {
                  icon: <ShieldCheck className="text-primary" size={28} />,
                  title: "স্বচ্ছ পেমেন্ট ভেরিফিকেশন",
                  desc: "বিকাশ বা নগদে টাকা পাঠিয়ে স্ক্রিনশট আপলোড করলেই অ্যাডমিন সেটা চেক করে অ্যাপ্রুভ করে দিতে পারবে।"
                }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background p-6 rounded-2xl border border-border hover:border-primary/30 transition-colors flex gap-4 items-start shadow-sm"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Payment Demo Image */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white"
            >
              <img 
                src="/image%20for%20design/payment.jpg" 
                alt="Payment Proof Demo" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://via.placeholder.com/800x800?text=Please+add+payment.jpg";
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="w-full py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">যেভাবে কাজ করে</h2>
            <p className="text-muted-foreground text-lg">খুবই সাধারণ ৪টি ধাপে সবার জার্সির অর্ডার কনফার্ম করা যায়।</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 -z-10" />

            {[
              { step: "১", title: "প্রজেক্ট খোলা", desc: "অ্যাডমিন বা সিস্টেম ওনার একটি প্রজেক্ট খুলে মেম্বারদের ইনভাইট করবে।" },
              { step: "২", title: "মডেল ও সাইজ", desc: "মেম্বাররা জার্সির মডেল দেখে সাইজ এবং হাফ/ফুল হাতা সিলেক্ট করবে।" },
              { step: "৩", title: "পেমেন্ট প্রুফ", desc: "নির্ধারিত নম্বরে টাকা পাঠিয়ে পেমেন্টের স্ক্রিনশট আপলোড করতে হবে।" },
              { step: "৪", title: "অ্যাডমিন অ্যাপ্রুভাল", desc: "অ্যাডমিন পেমেন্ট চেক করে কনফার্ম করলেই তোমার জার্সি ডান!" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center bg-card p-6 rounded-2xl shadow-sm border border-border">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section id="models" className="w-full py-24 bg-muted/50 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">আমাদের জার্সির মডেল</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-12">
            অ্যাডমিনরা যেসব সুন্দর মডেল আপলোড করেছে, সেগুলো এখান থেকে দেখে নিতে পারো।
          </p>
          
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white max-w-5xl mx-auto">
            <img 
              src="/image%20for%20design/models.jpg" 
              alt="Jersey Models" 
              className="w-full h-full object-contain bg-white"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://via.placeholder.com/1280x720?text=Please+add+models.jpg";
              }}
            />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="w-full py-12 border-t border-border mt-auto bg-background">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center border border-primary/50 text-primary text-xs font-bold">
              JB
            </div>
            <span className="font-bold text-foreground">Jersey Banao</span>
          </div>
          <p className="text-sm text-muted-foreground font-medium">© 2026 Jersey Banao. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
