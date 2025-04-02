
import React, { useState, FormEvent } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { Parallax } from '@/components/animations/Parallax';
import { cn } from '@/lib/utils';
import { useToast } from "@/hooks/use-toast";

interface CTASectionProps {
  className?: string;
  id?: string;
  emailTo?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({ 
  className, 
  id,
  emailTo = "support@yourdomain.com" // Default email to send form submissions to
}) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form
      if (!formData.name || !formData.email || !formData.message) {
        toast({
          title: "Missing information",
          description: "Please fill out all required fields.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // Log the submission data (in a real app, you'd send this to your server)
      console.log("Form submitted with data:", formData);
      console.log("Will be sent to:", emailTo);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For actual implementation, you'd use a service like EmailJS, Zapier, or a custom backend
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={id} className={cn("py-24 px-6 md:px-10 bg-black relative overflow-hidden", className)}>
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-blue-500/10 to-indigo-500/5 blur-2xl rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-indigo-500/10 to-blue-500/5 blur-2xl rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <Parallax speed={0.05}>
            <div className="rounded-xl overflow-hidden relative shadow-2xl h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-indigo-600/40 backdrop-blur-sm z-0"></div>
              <div className="relative z-10 p-8 md:p-12 h-full flex flex-col items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-blue-500/20 backdrop-blur-md flex items-center justify-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-500/40 backdrop-blur-md"></div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 text-center">
                  Missed Our Special Offer? Don't Worry, We've Got More!
                </h3>
                
                <p className="text-white/80 text-center mb-6">
                  We may not be handing out freebies anymore, but we're still serving top-notch creativity freshly crafted, just like your nearest vegetable shop!
                </p>
                
                <button className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full text-white transition-all duration-300 transform hover:scale-105">
                  See Our Plans
                </button>
              </div>
            </div>
          </Parallax>
          
          <div>
            <FadeIn direction="up">
              <div className="text-sm font-medium text-blue-400 mb-3 tracking-wider">CONTACT US</div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white tracking-tight">
                Ready to Elevate Your Brand?
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Let's work together to shape a brand identity that stands out and connects with your audience. 
                Get in touch today for a free consultation!
              </p>
            </FadeIn>
            
            <FadeIn delay={300}>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-white/80 text-sm">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors" 
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-white/80 text-sm">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors" 
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="service" className="text-white/80 text-sm">Service Interested In</label>
                  <select 
                    id="service" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors appearance-none" 
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="" disabled className="bg-gray-900">Select a service</option>
                    <option value="branding" className="bg-gray-900">Brand Design</option>
                    <option value="social" className="bg-gray-900">Social Media Content</option>
                    <option value="video" className="bg-gray-900">Video Production</option>
                    <option value="print" className="bg-gray-900">Print Design</option>
                    <option value="digital" className="bg-gray-900">Digital Design</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-white/80 text-sm">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors" 
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                
                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Get Started"}
                  </button>
                </div>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
