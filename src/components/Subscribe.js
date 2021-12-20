import '../styles/downNav.css';

export default function Subscribe() {
  return (
    <div className="subscribe">
      <h4 className="end-title">We have a lot of interesting things for you</h4>
      <div className="end-details">All latest news in your Inbox</div>
      <div className="subscribe-reg">
        <input
          placeholder="Your email address"
          type="email"
          className="subscribe-input"
        />
        <div className="subscribe-btn">Subscribe</div>
      </div>
    </div>
  );
}
