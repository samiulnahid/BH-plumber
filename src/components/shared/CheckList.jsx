import Icon from "../common/Icon.jsx";

export default function CheckList({ items }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>
          <span className="check-icon">
            <Icon name="check" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
