import { Section } from "components/Section";
import { Card } from "components/Card";

export function PortfolioSection() {
  return (
    <Section title="Portfólio" id="PortfolioSection" alignItems="center">
      <Card
        image="/assets/images/SectionImages/portfolio.jpg"
        type="resume-content"
        height={{ base: "110px", lg: "200px" }}
      />
    </Section>
  );
}
