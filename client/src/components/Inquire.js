export default function Inquire() {
  return (
    <div className="show-inquire">
      <h3 className="information">
        Contact or more information availability and price
      </h3>
      <input className="inquire-input" placeHolder="First Name" />
      <input className="inquire-input" placeHolder="Last Name" />
      <input
        className="inquire-input"
        placeHolder="Email Address"
        type="email"
      />
      <input className="inquire-input" placeHolder="Mobile" type="phone" />
      <input
        className="inquire-input"
        placeHolder="Hi, i'm interested in purchasing this artwork. Could you please provide more information?"
      />
      <div className="end-inquire-information">
        I would like to receive updates and contacts
      </div>
      <button className="send-inquire">Inquire now</button>
    </div>
  );
}
