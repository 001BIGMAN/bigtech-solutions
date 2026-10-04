export default function CookiePolicy() {
  return (
    <div className="legal-page">
      <div className="container">
        <h1 className="legal-page__title">Cookie Policy</h1>
        <div className="legal-page__content">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>This Cookie Policy explains what cookies are and how we use them on our website.</p>
          <h2>1. What are cookies?</h2>
          <p>Cookies are small text files that are used to store small pieces of information. They are stored on your device when the website is loaded on your browser. These cookies help us make the website function properly, make it more secure, provide better user experience, and understand how the website performs.</p>
          <h2>2. How we use cookies</h2>
          <p>We use essential cookies for the functioning of our website, and analytics cookies to understand how our visitors interact with the site in order to improve our services.</p>
        </div>
      </div>
    </div>
  );
}
