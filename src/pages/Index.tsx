import TerminalHero from '@/components/TerminalHero';
import SkillsMatrix from '@/components/SkillsMatrix';
import ProjectsSection from '@/components/ProjectsSection';
import ContactTerminal from '@/components/ContactTerminal';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <TerminalHero />
      <SkillsMatrix />
      <ProjectsSection />
      <ContactTerminal />
    </main>
  );
};

export default Index;
