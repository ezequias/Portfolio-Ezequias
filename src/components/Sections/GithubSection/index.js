import { Card } from "components/Card";
import { Section } from "components/Section";
export function GithubSection() {
  return (
    <Section title="Github" id="GithubSection" alignItems="center">
      <Card
        image={github.src}
        type="resume-content"
        height={{ base: "110px", lg: "200px" }}
      />
    </Section>
  );
}
