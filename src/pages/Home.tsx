import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { Col, Row } from "antd"
import { GoodIcon } from "../components/GoodIcon"
import { QouteIcon } from "../components/QouteIcon"
import { TrackerCompanyIcon } from "../components/TrackerCompanyIcon"
import { Link } from "react-router-dom"
import { Footer } from "../components/Footer"

export const Home = () => {
  return (
    <div className="landingPage">
      <Header />
      <Hero />
      <div className="why-choose-us">
        <h2>Why choose our</h2>
        <h2>platform?</h2>
        <Row gutter={[32, 32]} style={{ margin: "35px" }}>
          <Col xs={24} md={12}>
            <div className="vendor-admin-item">
              <GoodIcon />
              <span>
                <b>Vendors:</b> Effortless Product Management
              </span>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div className="vendor-admin-item">
              <GoodIcon />
              <span>
                <b>For Admins:</b> Manage User Access
              </span>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div className="vendor-admin-item">
              <GoodIcon />
              <span>
                <b>Vendors:</b> Reach a wider Audience
              </span>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div className="vendor-admin-item">
              <GoodIcon />
              <span>
                <b>For Admins:</b> Real-time Analytics
              </span>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div className="vendor-admin-item">
              <GoodIcon />
              <span>
                <b>Vendors:</b> Secure Payment Handling
              </span>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div className="vendor-admin-item">
              <GoodIcon />
              <span>
                <b>For Admins:</b> Real-time Analytics
              </span>
            </div>
          </Col>
        </Row>
      </div>
      <div className="what-they-say">
        <h2>What They say About</h2>
        <h2>Veridux</h2>
        <div className="what-they-say_inner">
          <Row justify={"space-between"} align={"middle"}>
            <Col xs={24} md={12}>
              <img src={"/girl.png"} alt="Girl" />
            </Col>
            <Col xs={24} md={10}>
              <QouteIcon />
              <div style={{ marginTop: "30px" }}>
                <p>"We love momaStore! Our</p>
                <p>designers were using it for their</p>
                <p>projects, so clients already knew</p>
                <p>what Landingfolio was and how</p>
                <p>to use it."</p>
              </div>
              <div className="reviewer">
                <small>
                  <b>Jenny Wilson</b>
                </small>
                <small style={{ color: "#52525B" }}>Co-Founder of</small>
                <TrackerCompanyIcon />
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="what-are-you-waiting-for">
        <Row align={"middle"}>
          <Col xs={24} md={12}>
            <h2>What are you waiting for</h2>
            <h2>Register now</h2>
            <div style={{ margin: "13px 0" }}>
              <div>
                <p>Clarity gives you the blocks & components you need to</p>
                <p>
                  create a truly professional website, landing page or admin
                </p>
                <p>panel for your SaaS and gives the blocks.</p>
              </div>
            </div>
            <div style={{ marginTop: "2.5rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <GoodIcon />
                <span style={{ marginLeft: "15px" }}>
                  <b>Start Selling Today</b>
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <GoodIcon />
                <span style={{ marginLeft: "15px" }}>
                  <b>Bacome a Vendor</b>
                </span>
              </div>
            </div>
            <Link
              to="/"
              className="btn-primary"
              style={{
                borderRadius: "47px",
                fontSize: "16px",
                marginTop: "50px",
              }}
            >
              Register now
            </Link>
          </Col>
          <Col xs={24} md={12} className="phone2">
            <img src="/phone2.svg" alt="Veridux Mobile App" />
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  )
}
