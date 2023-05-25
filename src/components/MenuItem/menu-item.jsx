import "./menu-item.css"

function MenuItem(props) {
  return (
    <li class="nav-item">
      <a class ="nav-link active" href= {props.link}>
      {props.text}
      <span class="visually-hidden">(current)</span>
      </a>
    </li>
  );
}

export default MenuItem;
