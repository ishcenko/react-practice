import paintings from './paintings.json';
import PaindingList from 'components/PaintingList';
import Section from 'components/Section';
export default function App() {
  return (
    <div>
      <Section title="Top week">
        <PaindingList items={paintings} />
      </Section>
      <Section title="Like">
        <PaindingList items={paintings} />
      </Section>
    </div>
  );
}
