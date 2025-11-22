import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import emailjs from "@emailjs/browser";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const formRef = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_2hznfib",   
        "template_8mhjg0h", 
        formData,
        "NtWRAAZAl89z6ixsw"   
      )
      .then(() => {
        alert("Pesan berhasil dikirim!");
        setFormData({ user_name: "", user_email: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        alert("Gagal mengirim email.");
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "prtmyog17@gmail.com",
      href: "mailto:prtmyog17@gmail.com",
      bg: "#ffd803",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62 813-8696-9362",
      href: "tel:+6281386969362",
      bg: "#f582ae",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Indonesia",
      href: "#",
      bg: "#8bd3dd",
    },
  ];

  return (
    <section ref={ref} className="relative py-32 bg-[#fef6e4] overflow-hidden">

      {/* --- DECORATION --- */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-20 right-20 w-64 h-64 bg-[#f3d2c1] border-4 border-[#001858] rounded-full opacity-50 hidden lg:block"
        style={{ boxShadow: "12px 12px 0 #001858" }}
      />

      {/* --- HEADER --- */}
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div
            className="inline-block bg-[#ffd803] border-4 border-[#001858] p-8 mb-6"
            style={{ boxShadow: "12px 12px 0 #001858" }}
          >
            <h2 className="text-5xl md:text-7xl text-[#001858] uppercase">
              Let's Talk
            </h2>
          </div>

          <div
            className="bg-white border-4 border-[#001858] p-6 max-w-3xl mx-auto"
            style={{ boxShadow: "8px 8px 0 #001858" }}
          >
            <p className="text-xl text-[#001858]">
              Have a project in mind? Let's create something amazing together!
            </p>
          </div>
        </motion.div>

        {/* --- GRID WRAPPER --- */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* --- CONTACT INFO --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 8, y: -4 }}
                  className="flex items-center gap-6 group block"
                >
                  <div
                    className="w-20 h-20 flex items-center justify-center border-4 border-[#001858]"
                    style={{
                      backgroundColor: info.bg,
                      boxShadow: "6px 6px 0 #001858",
                    }}
                  >
                    <info.icon className="w-8 h-8 text-[#001858]" />
                  </div>

                  <div>
                    <div className="text-sm text-[#001858] uppercase mb-1 opacity-70">
                      {info.label}
                    </div>
                    <div className="text-xl text-[#001858]">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              animate={{
                rotate: [0, 180, 360],
                transition: { duration: 15, repeat: Infinity, ease: "linear" },
              }}
              className="mt-16 w-48 h-48 bg-[#f582ae] border-4 border-[#001858] hidden lg:block"
              style={{ boxShadow: "12px 12px 0 #001858" }}
            />
          </motion.div>

          {/* --- CONTACT FORM / EMAILJS --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white border-4 border-[#001858] p-8 space-y-6"
              style={{ boxShadow: "12px 12px 0 #001858" }}
            >
              <div>
                <label className="block text-[#001858] mb-2 uppercase">
                  Name
                </label>
                <Input
                  name="user_name"
                  type="text"
                  value={formData.user_name}
                  onChange={(e) =>
                    setFormData({ ...formData, user_name: e.target.value })
                  }
                  className="border-4 border-[#001858] bg-[#fef6e4]"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-[#001858] mb-2 uppercase">
                  Email
                </label>
                <Input
                  name="user_email"
                  type="email"
                  value={formData.user_email}
                  onChange={(e) =>
                    setFormData({ ...formData, user_email: e.target.value })
                  }
                  className="border-4 border-[#001858] bg-[#fef6e4]"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-[#001858] mb-2 uppercase">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="border-4 border-[#001858] bg-[#fef6e4] min-h-[150px]"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#001858] text-white hover:bg-[#ffd803] hover:text-[#001858] transition-all uppercase"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
