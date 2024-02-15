import Painting from './Painting';
import PropTypes from 'prop-types';
function PaindingList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Painting
            imgUrl={item.url}
            title={item.title}
            authorName={item.author.tag}
            profilUrl={item.author.url}
            price={item.price}
            quantity={item.quantity}
          />
        </li>
      ))}
    </ul>
  );
}

PaindingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
export default PaindingList;
