import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p className="footer-text">
            © {currentYear} Your Company. All rights reserved.
          </p>
        </div>
        <div className="footer-right">
          <a href="#privacy" className="footer-link">
            Privacy Policy
          </a>
          <a href="#terms" className="footer-link">
            Terms of Service
          </a>
          <a href="#support" className="footer-link">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}

/* Add this CSS to admin-dashboard.css */
/*
.footer {
  background-color: white;
  border-top: 1px solid var(--gray-200);
  padding: 20px 24px;
  margin-top: auto;
}

html.dark .footer {
  background-color: var(--dark-surface);
  border-top-color: var(--dark-surface-light);
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  max-width: 100%;
}

.footer-left {
  flex: 1;
}

.footer-text {
  font-size: 13px;
  color: var(--gray-500);
  margin: 0;
}

html.dark .footer-text {
  color: var(--dark-text-secondary);
}

.footer-right {
  display: flex;
  align-items: center;
  gap: 24px;
}

.footer-link {
  font-size: 13px;
  color: var(--gray-600);
  text-decoration: none;
  transition: var(--transition);
}

.footer-link:hover {
  color: var(--primary);
}

html.dark .footer-link {
  color: var(--dark-text-secondary);
}

html.dark .footer-link:hover {
  color: var(--primary-light);
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 16px;
  }

  .footer-right {
    width: 100%;
    justify-content: center;
  }
}
*/