export default function RefundPolicy() {
  return (
    <div className="legal-page">
      <div className="container">
        <h1 className="legal-page__title">Refund Policy</h1>
        <div className="legal-page__content">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>Due to the custom nature of our digital services, our refund policy is as follows:</p>
          <h2>1. Initial Deposits</h2>
          <p>Any initial deposit made to commence a project is strictly non-refundable. This covers the initial time, research, and resource allocation required to start a project.</p>
          <h2>2. Cancellations</h2>
          <p>If a project is cancelled by the client before completion, the client will be billed for the proportionate amount of work completed up to that point.</p>
        </div>
      </div>
    </div>
  );
}
