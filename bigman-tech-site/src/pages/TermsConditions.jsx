export default function TermsConditions() {
  return (
    <div className="legal-page">
      <div className="container">
        <h1 className="legal-page__title">Terms &amp; Conditions</h1>
        <div className="legal-page__content">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>Please read these terms and conditions carefully before using Our Service.</p>
          <h2>1. Agreement to Terms</h2>
          <p>By accessing or using our services, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you disagree with any part of the terms, you may not access the service.</p>
          <h2>2. Intellectual Property</h2>
          <p>The Service and its original content, features, and functionality are and will remain the exclusive property of BigTech Solutions and its licensors. The Service is protected by copyright, trademark, and other laws.</p>
        </div>
      </div>
    </div>
  );
}
