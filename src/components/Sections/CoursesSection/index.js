import { Section } from "components/Section";
import { Card } from "components/Card";

export function CoursesSection() {
  return (
    <Section title="Cursos" alignItems="center">
      <Card
        image="/assets/images/SectionImages/vetorial.png"
        type="resume-content"
        height={{ base: "110px", lg: "200px" }}
      />
    </Section>
  );
}