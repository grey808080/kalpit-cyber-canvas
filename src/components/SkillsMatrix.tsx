import { useState } from 'react';
import { Card } from '@/components/ui/card';

interface Skill {
  name: string;
  level: number;
  description: string;
  category: 'technical' | 'soft' | 'tools';
}

const skills: Skill[] = [
  {
    name: 'Web Development',
    level: 85,
    description: 'Frontend & Backend development with modern frameworks',
    category: 'technical'
  },
  {
    name: 'Cybersecurity',
    level: 70,
    description: 'Network security, penetration testing, ethical hacking',
    category: 'technical'
  },
  {
    name: 'Typing Speed',
    level: 75,
    description: '50 WPM with 96% accuracy, working towards 100 WPM',
    category: 'technical'
  },
  {
    name: 'Digital Marketing',
    level: 65,
    description: 'SEO, social media marketing, content strategy',
    category: 'soft'
  },
  {
    name: 'Problem Solving',
    level: 90,
    description: 'Analytical thinking and debugging complex issues',
    category: 'soft'
  },
  {
    name: 'Linux/Terminal',
    level: 80,
    description: 'System administration and command-line proficiency',
    category: 'tools'
  }
];

const SkillsMatrix = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="terminal-prompt text-muted-foreground mb-4">
            kalpit@cybersec:~$ ls -la /skills/
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            <span className="glitch-text text-accent" data-text="Skills Matrix">
              Skills Matrix
            </span>
          </h2>
        </div>

        {/* Category filter */}
        <div className="flex justify-center mb-12">
          <div className="cyber-border p-2 bg-card/30 backdrop-blur-sm">
            <div className="flex space-x-1">
              {['all', 'technical', 'soft', 'tools'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-mono transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground neon-glow'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {category.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <Card 
              key={skill.name}
              className="cyber-border bg-card/50 backdrop-blur-sm p-6 hover-glow hover-scan cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold terminal-text">
                    {skill.name}
                  </h3>
                  <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded font-mono">
                    {skill.category.toUpperCase()}
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
                
                {/* Progress bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span>Proficiency:</span>
                    <span className="text-accent">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out relative"
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 scan-line"></div>
                    </div>
                  </div>
                </div>
                
                {/* Terminal-style output */}
                <div className="text-xs font-mono text-muted-foreground">
                  <span className="text-accent">$</span> grep -i "{skill.name.toLowerCase()}" /usr/bin/kalpit
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMatrix;