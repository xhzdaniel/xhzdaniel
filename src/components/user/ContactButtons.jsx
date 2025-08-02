import { FaEnvelope, FaDollarSign } from "react-icons/fa6";
export default function CotnactButtons() {
  const handleEmailClick = () => {
    window.open("mailto:9xHt4@eduinhernandez386@gmail.com", "_blank");
  };

  const handleSupportClick = () => {
    window.open("https://paypal.me/froxono", "_blank");
  };
  return (
    <div className="contact">
      <button
        className="email-button"
        onClick={handleEmailClick}
        data-tooltip-id="tooltip"
        data-tooltip-content="Send email"
      >
        <span className="icon">
          <FaEnvelope />
        </span>
        <span>Email</span>
      </button>

      <button
        className="support-button"
        onClick={handleSupportClick}
        data-tooltip-id="tooltip"
        data-tooltip-content="Send tip"
      >
        <span className="icon">
          <FaDollarSign />
        </span>
        <span>Support</span>
      </button>
    </div>
  );
}
