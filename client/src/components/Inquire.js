import iconClose from './icon-close.svg';
export default function Inquire({ setShowInquire }) {
  const closeHandler = () => {
    setShowInquire(false);
  };
  return (
    <div className="show-inquire">
      <img
        src={iconClose}
        alt="icon-close"
        className="icon-close"
        onClick={() => closeHandler()}
      />
      <h3 className="information">
        Contact or more information availability and price
      </h3>
      <div className="container-input">
        <input
          id="first-name-input"
          className="inquire-input"
          placeHolder="First Name"
        />
        <input
          id="last-name-input"
          className="inquire-input"
          placeHolder="Last Name"
        />
      </div>
      <input
        className="inquire-input separate"
        placeHolder="Email Address"
        type="email"
      />
      <input
        className="inquire-input separate"
        placeHolder="Mobile"
        type="phone"
      />
      <textarea
        id="ask-information-input"
        className="inquire-input separate"
        placeHolder="Hi, i'm interested in purchasing this artwork. Could you please provide more information?"
      />
      <div className="end-inquire-information ">
        I would like to receive updates and contacts
      </div>
      <button className="send-inquire">Inquire now</button>
    </div>
  );
}
