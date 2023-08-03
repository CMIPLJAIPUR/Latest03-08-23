import MetaTags from "react-meta-tags";
import React, { Component } from "react";
import Header from "./../../layouts/front/Header";
import Footer from "./../../layouts/front/Footer";
import axios from "axios";
import Url from "./../configure.js";
import { Link } from "react-router-dom";
class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setFaq: [],
    };
  }
  componentDidMount() {
    axios.get(Url.baseUrl + "api/get-faq").then((response) => {
      const itemsT = response.data.data;
      let setFaq = [];
      for (let i = 0; i < itemsT.length; i++) {
        if (itemsT[i]["status"] === 1) {
          setFaq.push(itemsT[i]);
        }
      }

      this.setState({
        setFaq: setFaq,
      });
    });
  }

  render() {
    return (
      <>
        <MetaTags>
          <title>Website designs | Best portfolio websites and templates</title>
          <meta
            httpEquiv="refresh"
            name="Website designs | Best portfolio websites and templates"
            content="Website designs developed on the most advanced technology platforms like to React. js, angular,Laravel, Magento, Word press and many more. Each web design is tailor-made and customized to your business objectives. For the most stunning websites reach out to us."
          />
        </MetaTags>
        <Header />

        <section className="banner-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="banner-name text-center">
                  <h4 className="font40 inter bold clr-white">FAQ</h4>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        FAQ
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-curv">
            <img src="/assets/img/wave-1.png" />
          </div>
        </section>

        <section className="faq-sec mt50 mb40">
          <div className="container">
            <div className="heading-bx text-center mb40">
              <h3 className="font45 bold clr-black">
                <span className="clr-yellow">Frequently</span> Asked Questions
              </h3>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="faq-boxes">
                  <div className="accordion" id="cmipl-faq">
                    {this.state.setFaq.length > 0 && (
                      <>
                        {this.state.setFaq.map((data, i) => {
                          return i + 1 === 1 ? (
                            <div className="accordion-item active show" key={i}>
                              <h2
                                className="accordion-header"
                                id={`faq-heading_${i}`}
                              >
                                <button
                                  className="accordion-button "
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#faq-one_${i}`}
                                  aria-expanded="true"
                                  aria-controls="faq-one"
                                >
                                  {i + 1}. &nbsp;{data.title}
                                </button>
                              </h2>
                              <div
                                id={`faq-one_${i}`}
                                className="accordion-collapse collapse show"
                                aria-labelledby={`faq-heading_${i}`}
                                data-bs-parent="#cmipl-faq"
                              >
                                <div className="accordion-body">
                                  {data.description}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="accordion-item" key={i}>
                              <h2
                                className="accordion-header"
                                id={`faq-heading_${i}`}
                              >
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#faq-one_${i}`}
                                  aria-expanded="true"
                                  aria-controls="faq-one"
                                >
                                  {i + 1}. &nbsp;{data.title}
                                </button>
                              </h2>
                              <div
                                id={`faq-one_${i}`}
                                className="accordion-collapse collapse"
                                aria-labelledby={`faq-heading_${i}`}
                                data-bs-parent="#cmipl-faq"
                              >
                                <div className="accordion-body">
                                  {data.description}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}
export default Faq;
