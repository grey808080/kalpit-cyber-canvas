import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

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
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main terminal window */}
          <div className="cyber-border p-8 lg:p-12 bg-card/50 backdrop-blur-sm scan-line">
            <div className="space-y-8">
              <div className="terminal-prompt text-sm text-muted-foreground text-left">
                kalpit@cybersec:~$ whoami
              </div>
              
              <h1 className="text-4xl lg:text-7xl font-bold terminal-text">
                {currentText}
                <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                  |
                </span>
              </h1>
              
              <div className="space-y-4 text-left max-w-2xl mx-auto">
                <div className="terminal-prompt text-sm text-muted-foreground">
                  kalpit@cybersec:~$ cat /about
                </div>
                <div className="space-y-2 text-lg">
                  <p className="text-muted-foreground">
                    &gt; BSc. CSIT Student @ BMC, Bhaktapur
                  </p>
                  <p className="text-muted-foreground">
                    &gt; Passionate about <span className="text-accent">Web Development</span> & <span className="text-accent">Cybersecurity</span>
                  </p>
                  <p className="text-muted-foreground">
                    &gt; Location: Kathmandu, Nepal
                  </p>
                  <p className="text-muted-foreground">
                    &gt; Typing Speed: 50 WPM @ 96% accuracy
                  </p>
                </div>
                
                <div className="terminal-prompt text-sm text-muted-foreground">
                  kalpit@cybersec:~$ ./connect.sh
                </div>
              </div>
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
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
          
          {/* Status indicators */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-mono text-muted-foreground">ONLINE</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse delay-500"></div>
              <span className="text-sm font-mono text-muted-foreground">AVAILABLE</span>
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