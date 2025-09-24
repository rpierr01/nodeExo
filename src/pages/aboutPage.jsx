import React, { useEffect } from 'react';

function AboutPage() {
  useEffect(() => {
    document.title = 'About Page';
  }, []);

  return (
    <div>
      <h2>About Page</h2>
      <p>Ceci est la page à propos.</p>
    </div>
  );
}

export default AboutPage;
