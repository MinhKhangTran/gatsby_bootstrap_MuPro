import React from "react";
import { Col, Container, Row, Button, Badge } from "react-bootstrap";

const Pricing = () => {
  const pricingArray = [
    {
      id: 1,
      title: "Platinum",
      price: "24",
      text: "The essentials to provide your best work for clients.",
      feat: [
        { id: 1, text: "5 products" },
        { id: 2, text: "Up to 1,000 subscribers" },
        { id: 3, text: "Basic analytics" },
        { id: 4, text: "48-hour support response time" },
      ],
    },
    {
      id: 2,
      title: "Penthouse",
      price: "32",
      text: "A plan that scales with your rapidly growing business.",
      feat: [
        { id: 1, text: "25 products" },
        { id: 2, text: "Up to 10,000 subscribers" },
        { id: 3, text: "Advanced analytics" },
        { id: 4, text: "24-hour support response time" },
        { id: 5, text: "Marketing automations" },
      ],

      popular: true,
    },
    {
      id: 3,
      title: "Gold",
      price: "48",
      text: "Dedicated support and infrastructure for your company.",
      feat: [
        { id: 1, text: "Unlimited products" },
        { id: 2, text: "Unlimited subscribers" },
        { id: 3, text: "Advanced analytics" },
        { id: 4, text: "1-hour, dedicated support response time" },
        { id: 5, text: "Marketing automations" },
        { id: 6, text: "Custom integrations" },
      ],
    },
  ];
  return (
    <section id="pricing" className="section">
      <Container>
        <h2>Our pricing</h2>
        <p className="lead subtitle text-secondary mb-5">
          I'm baby activated charcoal yr occupy synth retro kitsch portland.
        </p>
        <Row className="justify-content-center gap-3 mx-auto">
          {pricingArray.map((pricing) => {
            return (
              <Col key={pricing.id} lg={3} className="pricing_wrapper shadow">
                {pricing.popular && (
                  <Badge pill bg="primary">
                    Most Popular
                  </Badge>
                )}
                <h3>{pricing.title}</h3>
                <h4>
                  ${pricing.price} <span>/hour</span>
                </h4>
                <p className="text-secondary">{pricing.text}</p>
                {pricing.feat.map((feat) => {
                  return (
                    <div className="d-flex">
                      <i className="bi bi-check-lg text-primary me-2"></i>
                      <p key={feat.id}>{feat.text}</p>
                    </div>
                  );
                })}
                <div className="d-grid">
                  <Button
                    variant={pricing.popular ? "primary" : "outline-primary"}
                  >
                    Book now
                  </Button>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;
