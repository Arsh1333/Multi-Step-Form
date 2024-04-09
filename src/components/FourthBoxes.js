const FourthBoxes = (props) => {
  const { heading, content } = props;
  return (
    <div className="fourth-box border-2 border-gray-400 p-5">
      <div className="box">
        <div className="heading">{props.heading}</div>
        <div className="box-content">{props.content}</div>
      </div>
    </div>
  );
};
export default FourthBoxes;
