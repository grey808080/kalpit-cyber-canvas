import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import hackerProfile from '@/assets/hacker-profile.jpg';

const TerminalHero = () => {
  const [currentText, setCurrentText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  const fullText = "Hello, I'm Kalpit Dhakal";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setCurrentText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden matrix-bg">
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Terminal content */}
          <div className="space-y-8">
            <div className="cyber-border p-6 bg-card/50 backdrop-blur-sm scan-line">
              <div className="space-y-4">
                <div className="terminal-prompt text-sm text-muted-foreground">
                  kalpit@cybersec:~$ whoami
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold terminal-text">
                  {currentText}
                  <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                    |
                  </span>
                </h1>
                <div className="terminal-prompt text-sm text-muted-foreground">
                  kalpit@cybersec:~$ cat /about
                </div>
                <p className="text-lg text-muted-foreground">
                  &gt; BSc. CSIT Student @ BMC, Bhaktapur
                </p>
                <p className="text-lg text-muted-foreground">
                  &gt; Passionate about <span className="text-accent">Web Development</span> & <span className="text-accent">Cybersecurity</span>
                </p>
                <p className="text-lg text-muted-foreground">
                  &gt; Location: Kathmandu, Nepal
                </p>
                <div className="terminal-prompt text-sm text-muted-foreground">
                  kalpit@cybersec:~$ ./connect.sh
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="default" 
                size="lg"
                className="neon-glow hover:animate-pulse-glow transition-all duration-300"
              >
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="cyber-border hover:bg-primary/10 transition-all duration-300"
              >
                View Projects
              </Button>
            </div>
          </div>
          
          {/* Right side - Profile image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden cyber-border neon-glow">
                <img 
                  src={hackerProfile} 
                  alt="Kalpit Dhakal - Cybersecurity & Web Development"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse-glow"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse-glow delay-1000"></div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Background matrix effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="text-xs font-mono text-primary leading-none whitespace-pre">
          {Array.from({ length: 50 }, (_, i) => (
            <div key={i} className="mb-1">
              {Array.from({ length: 100 }, () => 
                Math.random() > 0.5 ? '1' : '0'
              ).join('')}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TerminalHero;