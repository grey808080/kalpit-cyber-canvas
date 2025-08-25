import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Mail, MapPin, Instagram, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactTerminal = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message sent successfully!",
      description: "I'll get back to you as soon as possible.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const socialLinks = [
    {
      name: 'Email',
      url: 'mailto:webkalpit@gmail.com',
      icon: Mail,
      handle: 'webkalpit@gmail.com'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/kalpit_dhakal',
      icon: Instagram,
      handle: '@kalpit_dhakal'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/kalpit_dhakal',
      icon: Github,
      handle: '/kalpit_dhakal'
    },
    {
      name: 'Location',
      url: 'https://maps.google.com/?q=Kathmandu,Nepal',
      icon: MapPin,
      handle: 'Kathmandu, Nepal'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="terminal-prompt text-muted-foreground mb-4">
            kalpit@cybersec:~$ ./initiate_connection.sh
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            <span className="glitch-text text-accent" data-text="Establish Connection">
              Establish Connection
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate? Drop me a message or connect through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <Card className="cyber-border bg-card/50 backdrop-blur-sm p-8 hover-glow">
            <div className="space-y-6">
              <div className="terminal-prompt text-muted-foreground">
                kalpit@cybersec:~$ nano message.txt
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-mono text-primary">
                    &gt; Name
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="cyber-border bg-input/50 font-mono"
                    placeholder="Enter your name..."
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-mono text-primary">
                    &gt; Email
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="cyber-border bg-input/50 font-mono"
                    placeholder="your.email@domain.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-mono text-primary">
                    &gt; Message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="cyber-border bg-input/50 font-mono min-h-32"
                    placeholder="Type your message here..."
                    required
                  />
                </div>
                
                <div className="space-y-4">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full neon-glow hover:animate-pulse-glow"
                  >
                    {isSubmitting ? 'TRANSMITTING...' : 'SEND MESSAGE'}
                  </Button>
                  
                  <div className="text-xs font-mono text-muted-foreground">
                    <span className="text-accent">$</span> {isSubmitting ? 'Sending message...' : 'Ready to transmit'}
                  </div>
                </div>
              </form>
            </div>
          </Card>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            
            {/* Social Links */}
            <Card className="cyber-border bg-card/50 backdrop-blur-sm p-8 hover-glow">
              <div className="space-y-6">
                <div className="terminal-prompt text-muted-foreground">
                  kalpit@cybersec:~$ cat /contact/social_links.json
                </div>
                
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 cyber-border bg-card/30 hover-glow hover-scan transition-all duration-300 group"
                    >
                      <div className="p-2 bg-primary/20 rounded">
                        <link.icon size={20} className="text-primary group-hover:text-accent transition-colors" />
                      </div>
                      <div>
                        <div className="font-mono text-sm text-primary">
                          {link.name}
                        </div>
                        <div className="text-muted-foreground text-sm">
                          {link.handle}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Card>

            {/* Terminal Status */}
            <Card className="cyber-border bg-card/50 backdrop-blur-sm p-8 hover-glow">
              <div className="space-y-4">
                <div className="terminal-prompt text-muted-foreground">
                  kalpit@cybersec:~$ status --current
                </div>
                
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="text-primary">● ONLINE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="text-accent">Kathmandu, Nepal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response Time:</span>
                    <span className="text-primary">&lt; 24hrs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Preferred Contact:</span>
                    <span className="text-accent">Email</span>
                  </div>
                </div>
                
                <div className="text-xs font-mono text-muted-foreground pt-4 border-t border-border/50">
                  <span className="text-accent">$</span> echo "Let's build something amazing together!"
                </div>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactTerminal;