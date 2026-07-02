"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SectionWrapper } from "@/components/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Send, Copy, CheckCircle2, PhoneCall, MailOpen, XCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const [isCopied, setIsCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE",
          ...values,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setIsSuccess(true);
        setErrorMessage(null);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("mirzaaltamash203@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <SectionWrapper id="contact" className="relative overflow-hidden bg-foreground text-background py-32 rounded-t-[3rem] mt-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(37,99,235,0.2),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center">
        
        {/* Left Column: Huge CTA */}
        <div>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9] uppercase">
            Let&apos;s <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent italic">Build</span>
          </h2>
          <p className="text-xl md:text-2xl text-background/70 mb-12 leading-relaxed max-w-md font-medium">
            Currently open for software engineering roles. Reach out directly to discuss architecture, systems, and opportunities.
          </p>
          
          <div className="flex flex-col gap-6 mb-12">
            <a 
              href="mailto:mirzaaltamash203@gmail.com"
              className="flex items-center gap-6 p-6 rounded-3xl bg-background/5 border border-white/10 hover:border-primary/50 hover:bg-background/10 transition-all group"
            >
              <div className="p-4 bg-primary/20 rounded-2xl group-hover:scale-110 transition-transform">
                <MailOpen className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="text-sm text-background/50 font-bold uppercase tracking-widest mb-1">Email Me</p>
                <p className="text-xl font-bold">mirzaaltamash203@gmail.com</p>
              </div>
            </a>

            <a 
              href="tel:+917367017702"
              className="flex items-center gap-6 p-6 rounded-3xl bg-background/5 border border-white/10 hover:border-accent/50 hover:bg-background/10 transition-all group"
            >
              <div className="p-4 bg-accent/20 rounded-2xl group-hover:scale-110 transition-transform">
                <PhoneCall className="w-8 h-8 text-accent" />
              </div>
              <div>
                <p className="text-sm text-background/50 font-bold uppercase tracking-widest mb-1">Call Now</p>
                <p className="text-xl font-bold">+91 73670 17702</p>
              </div>
            </a>
          </div>

          <button 
            onClick={copyEmail}
            className="flex items-center gap-3 text-background/50 hover:text-background font-bold tracking-widest uppercase text-sm transition-colors"
          >
            {isCopied ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
            {isCopied ? "Email Copied!" : "Copy Email Address"}
          </button>
        </div>

        {/* Right Column: Premium Form */}
        <div className="relative">
          <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full" />
          <Card className="bg-card/90 backdrop-blur-2xl border-border/50 shadow-2xl relative z-10 rounded-[2.5rem] overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-bold tracking-widest uppercase text-foreground/90">
                      Name
                    </Label>
                    <Input 
                      id="name" 
                      placeholder="Jane Doe" 
                      {...register("name")} 
                      className="bg-muted/50 border-border rounded-xl px-4 py-6 text-lg focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary placeholder:text-muted-foreground/50 transition-colors" 
                    />
                    {errors.name && <p className="text-xs font-bold text-red-500 mt-1">{errors.name.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-bold tracking-widest uppercase text-foreground/90">
                      Email
                    </Label>
                    <Input 
                      id="email" 
                      placeholder="jane@company.com" 
                      {...register("email")} 
                      className="bg-muted/50 border-border rounded-xl px-4 py-6 text-lg focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary placeholder:text-muted-foreground/50 transition-colors" 
                    />
                    {errors.email && <p className="text-xs font-bold text-red-500 mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-bold tracking-widest uppercase text-foreground/90">
                    Subject
                  </Label>
                  <Input 
                    id="subject" 
                    placeholder="Software Engineering Role" 
                    {...register("subject")} 
                    className="bg-muted/50 border-border rounded-xl px-4 py-6 text-lg focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary placeholder:text-muted-foreground/50 transition-colors" 
                  />
                  {errors.subject && <p className="text-xs font-bold text-red-500 mt-1">{errors.subject.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-bold tracking-widest uppercase text-foreground/90">
                    Message
                  </Label>
                  <Textarea 
                    id="message"
                    placeholder="Hi Mirza, we are looking for..." 
                    className="bg-muted/50 border-border rounded-xl px-4 py-4 text-lg focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary placeholder:text-muted-foreground/50 transition-colors min-h-[120px] resize-y" 
                    {...register("message")} 
                  />
                  {errors.message && <p className="text-xs font-bold text-red-500 mt-1">{errors.message.message}</p>}
                </div>
                
                <div className="pt-2">
                  <AnimatePresence>
                    {errorMessage && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                        animate={{ opacity: 1, height: "auto", marginBottom: 24 }}
                        exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-bold flex items-center gap-3">
                          <XCircle className="w-5 h-5 shrink-0" />
                          <p>{errorMessage}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-16 text-lg font-bold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-between px-8 group disabled:opacity-70 transition-all shadow-lg hover:shadow-primary/20"
                  >
                    {isSubmitting ? "Sending..." : isSuccess ? "Message Sent!" : "Send Message"}
                    <div className="w-10 h-10 rounded-full bg-background/20 flex items-center justify-center group-hover:bg-background/40 transition-colors">
                      {isSuccess ? <CheckCircle2 className="w-5 h-5" /> : <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                    </div>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
