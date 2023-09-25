const Popup = (props) => {
  return props.trigger ? (
    <div id="popup" className="popup-window">
      <div className="popup-inner">
        <button className="btn close-btn" onClick={() => props.setTrigger(false)}>
          {props.closingMsg}
        </button>
        {props.popUpMsg}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
