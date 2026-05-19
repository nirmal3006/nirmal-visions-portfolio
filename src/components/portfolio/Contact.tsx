import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const EMAILJS_SERVICE_ID = "service_uknoew8";
const EMAILJS_TEMPLATE_ID = "template_4s68zyc";
const EMAILJS_PUBLIC_KEY = "nwnwK8c61u6MfQzdI";

const contactItems = [
  { icon: Mail, label: "Email", value: "nirmal.cse.37@gmail.com", href: "mailto:nirmal.cse.37@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 70105 61614", href: "tel:+917010561614" },
  { icon: MapPin, label: "Location", value: "Tamil Nadu, India" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "nirmal-gopalakrishnan",
    href: "https://www.linkedin.com/in/nirmal-gopalakrishnan-b09999200",
  },
];

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill in name, email and message", variant: "destructive" });
      return;
    }
    if (form.phone && !/^[+\d\s()-]{6,20}$/.test(form.phone)) {
      toast({ title: "Please enter a valid phone number", variant: "destructive" });
      return;
    }
    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          name: form.name,
          from_email: form.email,
          email: form.email,
          phone: form.phone || "Not provided",
          phone_number: form.phone || "Not provided",
          contact_number: form.phone || "Not provided",
          message: form.message,
          reply_to: form.email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      toast({ title: "Message sent!", description: "Thanks for reaching out — I'll get back to you soon." });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      toast({ title: "Failed to send message", description: "Please try again or email me directly.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-secondary/30 relative">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-sm text-primary mb-3">/ contact</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">build something</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Open to internships, collaborations, and roles in AI, software, and game development.
            Drop me a line — I respond fast.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
          <div className="space-y-3">
            {contactItems.map((c) => {
              const inner = (
                <div className="group flex items-center gap-4 rounded-2xl bg-gradient-card border border-border p-5 shadow-card hover:shadow-elegant hover:-translate-y-0.5 transition-spring">
                  <div className="h-12 w-12 rounded-xl bg-gradient-primary/10 grid place-items-center group-hover:bg-gradient-primary group-hover:shadow-glow transition-smooth">
                    <c.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-smooth" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-mono text-muted-foreground">{c.label}</p>
                    <p className="font-medium truncate">{c.value}</p>
                  </div>
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  {inner}
                </a>
              ) : (
                <div key={c.label}>{inner}</div>
              );
            })}
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="rounded-2xl bg-gradient-card border border-border p-6 sm:p-8 shadow-card space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  maxLength={100}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  maxLength={255}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">
                Phone <span className="text-muted-foreground font-normal">(optional)</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+91 98765 43210"
                maxLength={20}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project, role, or idea..."
                maxLength={1000}
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={sending}
              className="w-full bg-gradient-primary hover:opacity-90 shadow-glow rounded-full"
            >
              <Send className="mr-2 h-4 w-4" />
              {sending ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
