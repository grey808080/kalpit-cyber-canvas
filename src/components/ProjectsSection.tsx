import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Cloud } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  status: 'live' | 'development' | 'concept';
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: 'weathercheck',
    name: 'WeatherCheck',
    description: 'Real-time weather monitoring application with location-based forecasts and weather alerts.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Weather API'],
    status: 'live',
    liveUrl: 'https://kalpitdhakal.com.np/weather.html',
    features: [
      'Location-based weather data',
      'Real-time forecast updates',
      'Responsive design',
      'Clean UI/UX'
    ]
  },
  {
    id: 'portfolio',
    name: 'Hacker Portfolio',
    description: 'Cyberpunk-themed personal portfolio with terminal aesthetics and interactive elements.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    status: 'development',
    features: [
      'Terminal-style interface',
      'Matrix effects',
      'Responsive design',
      'Dark theme optimization'
    ]
  },
  {
    id: 'security-scanner',
    name: 'Network Security Scanner',
    description: 'Ethical hacking tool for vulnerability assessment and network analysis.',
    tech: ['Python', 'Nmap', 'Socket Programming', 'CLI'],
    status: 'concept',
    features: [
      'Port scanning capabilities',
      'Vulnerability detection',
      'Report generation',
      'Command-line interface'
    ]
  }
];

const ProjectsSection = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'text-primary';
      case 'development': return 'text-accent';
      case 'concept': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusSymbol = (status: string) => {
    switch (status) {
      case 'live': return '●';
      case 'development': return '◐';
      case 'concept': return '○';
      default: return '?';
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="terminal-prompt text-muted-foreground mb-4">
            kalpit@cybersec:~$ cd /projects && ls -la
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            <span className="glitch-text text-primary" data-text="Projects">
              Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my work spanning web development, cybersecurity tools, and creative experiments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="cyber-border bg-card/50 backdrop-blur-sm p-6 hover-lift hover-scan group cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold terminal-text group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <span className={`text-sm font-mono ${getStatusColor(project.status)}`}>
                      {getStatusSymbol(project.status)} {project.status.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack */}
                <div className="space-y-2">
                  <div className="text-xs font-mono text-accent">
                    $ cat tech_stack.txt
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary border border-primary/30 rounded font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <div className="text-xs font-mono text-accent">
                    $ grep -i "features" README.md
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary text-xs mt-1">▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-border/50">
                  {project.liveUrl && (
                    <Button 
                      variant="default" 
                      size="sm"
                      className="flex items-center gap-2 text-xs hover:neon-glow transition-all"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} />
                        LIVE
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex items-center gap-2 text-xs cyber-border hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={14} />
                        CODE
                      </a>
                    </Button>
                  )}
                  {!project.liveUrl && !project.githubUrl && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      disabled
                      className="flex items-center gap-2 text-xs"
                    >
                      <Cloud size={14} />
                      IN DEVELOPMENT
                    </Button>
                  )}
                </div>

                {/* Terminal command */}
                <div className="text-xs font-mono text-muted-foreground pt-2">
                  <span className="text-accent">$</span> ./run_{project.id}.sh --mode=production
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Terminal footer */}
        <div className="text-center mt-16">
          <div className="cyber-border p-4 bg-card/30 backdrop-blur-sm inline-block">
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-accent">$</span> git status
              <br />
              <span className="text-primary">Modified:</span> 3 projects
              <br />
              <span className="text-accent">$</span> git commit -m "Building the future, one line at a time"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;