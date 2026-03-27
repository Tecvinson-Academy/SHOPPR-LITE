import styles from "../styles/Footer.module.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        {/* BRAND */}
        <div className={styles.brand}>
          <h2>Shoppr</h2>
          <p>Fashion, electronics and lifestyle — delivered to your door.</p>

          {/* SOCIAL ICONS */}
          <div className={styles.socials}>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>

          {/* NEWSLETTER */}
          <div className={styles.newsletter}>
            <p>Subscribe to our newsletter</p>
            <div className={styles.subscribe}>
              <input
                type="email"
                placeholder="Enter your email"
              />
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        {/* LINKS */}
        <div className={styles.links}>
          {/* SHOP */}
          <div className={styles.section}>
            <h3>Shop</h3>
            <ul>
              <li>All Products</li>
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Electronics</li>
              <li>Footwear</li>
            </ul>
          </div>

          {/* HELP */}
          <div className={styles.section}>
            <h3>Help</h3>
            <ul>
              <li>Returns</li>
              <li>Shipping info</li>
              <li>Size guide</li>
              <li>Contact us</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className={styles.section}>
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* JOURNAL */}
          <div className={styles.section}>
            <h3>Journal</h3>
            <ul>
              <li>All Posts</li>
            </ul>
          </div>
        </div>
      </footer>

      {/* COPYRIGHT BAR */}
      <div className={styles.copyright}>
        2026 © 2025 Shoppr. All rights reserved.
      </div>
    </>
  );
}