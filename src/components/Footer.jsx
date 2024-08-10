import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="https://www.linkedin.com/in/carlos-p-26034328b/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
        </a>
        <a href="https://github.com/karlos-kon-ka" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="footer-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
