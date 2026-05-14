"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Quiz from "@/components/Quiz";
import Projects from "@/components/Projects";
import Pricing from "@/components/Pricing";
import Founder from "@/components/Founder";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import StickyBar from "@/components/StickyBar";
import { useState } from "react";

export default function Home() {
  const [quizOpen, setQuizOpen] = useState(false);

  return (
    <>
      <Header onQuizOpen={() => setQuizOpen(true)} />
      <main>
        <Hero onQuizOpen={() => setQuizOpen(true)} />
        <Projects />
        <Benefits />
        <Founder /> 
        <Quiz isOpen={quizOpen} onClose={() => setQuizOpen(false)} />
        <Pricing onQuizOpen={() => setQuizOpen(true)} />
       {/* <Testimonials />
        <ContactForm />  */}
      </main>
      <Footer />
      {/* <ChatWidget />
      <StickyBar onQuizOpen={() => setQuizOpen(true)} /> */}
    </>
  );
}
