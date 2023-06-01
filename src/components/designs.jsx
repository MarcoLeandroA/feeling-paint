export function Desings(props) {
  return (
    <div className='desings-container'>
      <div className="desing">
        <a href="https://www.instagram.com/feeling_paint/">
          <img src={`./images/desing-${props.img}.webp`} alt="image" className="desing-img" />
        </a>
        <h3 className="p-2">{props.title}</h3>
        <p className="p-2">{props.desc}</p>
      </div>
    </div>
  );
}