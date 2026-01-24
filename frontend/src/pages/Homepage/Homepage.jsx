import { motion, useScroll, useTransform } from "framer-motion";
import LoginCitizen from "../Loginpages/LoginCitizen.jsx";
import LoginOrg from "../Loginpages/LoginOrg.jsx";
import Howtohelp from "./Subpages/Howtohelp.jsx";
import News from "./Subpages/News.jsx";
import Blogs from "./Subpages/Blogs.jsx";
import Impact from "./Subpages/Impact.jsx";
import About from "./Subpages/Aboutus.jsx";
import { Link } from "react-router-dom";
import "./Homepage.css";
import Card from "../../components/Socialmedia.jsx";
import Logo from "../../components/Logo.jsx";

function Homepage() {
  console.log(motion);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, -200]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0.4]);

  return (
    <div>
      <div className="homepage">
        <div className="Topbar">
          <Logo />
          <select className="country">
            <option>India</option>
          </select>
        </div>

        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <Link to="/Howtohelp">How To Help</Link>
            </li>
            <li>
              <Link to="/News">News and Stories</Link>
            </li>
            <li>
              <Link to="/Blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/Impact">Impact</Link>
            </li>
            <li>
              <Link to="/About">About Us</Link>
            </li>
          </ul>

          <div className="nav-actions">
            <Link to="/LoginCitizen" className="Donate-btn">
              Donate
            </Link>
            <Link to="/LoginCitizen" className="login-btn">
              Log In
            </Link>
          </div>
        </nav>
        <div className="hero">
          <motion.div
            className="hero-content"
            style={{ y: heroY, opacity: heroOpacity }}
          >
            <motion.h1
              initial="hidden"
              animate="show"
              variants={{
                show: { transition: { staggerChildren: 0.25 } },
              }}
            >
              <motion.span
                className="block"
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                Blockchain-Based
              </motion.span>

              <motion.span className="block highlight">
                Donation Transparency
              </motion.span>

              <motion.span
                className="block"
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                System
              </motion.span>
            </motion.h1>

            <motion.div
              className="underline"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              Ensure every donation is traceable,
              <br />
              verifiable, and fully transparent.
            </motion.p>

            <motion.div
              className="herobuttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 30px rgba(0,255,200,0.6)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/LoginCitizen" className="hero-btn">
                  DONATE NOW
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/LoginOrg" className="hero-btn-org-btn">
                  LOGIN AS ORGANIZATION
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <a
        href="https://wa.me/917880601408"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
      >
        💬
      </a>
      <div className="content-section">
        <div className="Welcome-section">
          <h1>Welcome to TraceImpact</h1>
        </div>
        <div className="mission-vision">
          <h2>Our Mission & Vision</h2>
          <p>
            At TraceImpact, our mission is to revolutionize the donation process
            by leveraging blockchain technology to ensure transparency,
            accountability, and trust. We envision a world where every donor can
            confidently contribute to causes they care about, knowing that their
            donations are tracked and utilized effectively.
          </p>
          <img src="/Ourmission.png" alt="Mission and Vision" />
        </div>
        <div className="Why-Choose-Us">
          <h2>Why Choose TraceImpact?</h2>
          <p>
            At TraceImpact, we leverage cutting-edge blockchain technology to
            bring transparency and accountability to the donation process. Our
            platform ensures that every contribution is traceable, verifiable,
            and fully transparent, empowering donors to make informed decisions
            and see the real impact of their generosity.
          </p>
          <img src="/blob.jpg" alt="Why Choose Us" />
        </div>
      </div>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-col brand">
            <h3>TraceImpact</h3>
            <p>
              Building transparent, tech-driven solutions to amplify social
              impact, sustainability, and responsible innovation.
            </p>
          </div>
          <div className="footer-col">
            <h4>Platform</h4>
            <ul>
              <li>About Us</li>
              <li>Our Impact</li>
              <li>Events</li>
              <li>Partners</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li>Your Profile</li>
              <li>Find Donations</li>
              <li>Donation History</li>
              <li>Help Center</li>
            </ul>
          </div>
          <div className="footer-col social">
            <h4>Join the Community</h4>
            <Card />
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 TraceImpact. All rights reserved.</p>
          <div className="footer-legal">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Contact</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
