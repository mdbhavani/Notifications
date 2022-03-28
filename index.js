const Notification = (props) => {
  const { name, className, icon } = props;
  return (
    <div className={className}>
      <img src={icon} className="img" />
      <p className="para">{name}</p>
    </div>
  );
};

const element = (
  <div className="container">
    <h1 className="heading">Notifications</h1>
    <Notification
      name="Information Message"
      className="info"
      icon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
    />
    <Notification
      name="Success Message"
      className="success"
      icon="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
    />
    <Notification
      name="Warning Message"
      className="warning"
      icon="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
    />
    <Notification
      name="Error Message"
      className="danger"
      icon="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
