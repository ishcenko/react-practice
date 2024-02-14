import Painting from 'components/Painting';
import paintings from './paintings.json';

export default function App() {
  return (
    <div>
      {paintings.map(painting => (
        <Painting
          key={painting.id}
          imgUrl={painting.url}
          title={painting.title}
          authorName={painting.author.tag}
          profilUrl={painting.author.url}
          price={painting.price}
          quantity={painting.quantity}
        />
      ))}
    </div>
  );
}
