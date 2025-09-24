import React, { useEffect } from 'react';

function ContactPage() {
  useEffect(() => {
    document.title = 'Contact Page';
  }, []);

  return (
    <div>
      <h2>Contact Page</h2>
      <p>
        Pour nous contacter, envoyez un email à <a href="mailto:contact@example.com">contact@example.com</a>
      </p>
    </div>
  );
}

export default ContactPage;
