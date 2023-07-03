import "./SliderStyles.css";

function Slider(props) {
  return (
    <>
      <div className={props.cName}>
        <img src={props.sliderImg} alt="sliderImg" />
        <div className="slider-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}

export default Slider;
