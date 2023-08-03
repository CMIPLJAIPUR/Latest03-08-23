import MetaTags from "react-meta-tags";
import React, { useState } from "react";
import Header from "./../../layouts/front/Header";
import Footer from "./../../layouts/front/Footer";
import axios from "axios";
import { DynamicStar } from "react-dynamic-star";
import Url from "./../configure.js";

function Testimonial() {
  const [testimoniallist, testimonialList] = useState([]);

  const [star] = useState({
    rating: 2,
    totalStars: 5,
    sharpness: 2.5,
    width: 16,
    height: 16,
    outlined: true,
    outlinedColor: "",
    fullStarColor: "#FFBC00",
    emptyStarColor: "transparent",
  });
  const getTestimonial = async () => {
    await axios.get(Url.baseUrl + "api/gettmslider").then((response) => {
      const items = response.data.data;
      let featureS = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i]["status"] === 1) {
          featureS.push(items[i]);
        }
      }

      testimonialList(featureS);
    });
  };

  useState(() => {
    getTestimonial();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MetaTags>
        <title>
          WEBSITE DEVELOPMENT | WEB DEVELOPER | BEST WEBSITE | REVIEWS
        </title>
        <meta
          httpEquiv="refresh"
          name="WEBSITE DEVELOPMENT | WEB DEVELOPER | BEST WEBSITE | REVIEWS"
          content="WEBSITE DEVELOPMENT | WEB DEVELOPER | BEST WEBSITE | REVIEWS."
        />
      </MetaTags>
      <Header />
      <section className="banner-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-name text-center">
                <h4 className="font40 inter bold clr-white">Testimonials</h4>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Testimonials
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-curv">
          <img src="/assets/img/wave-1.png" alt="wave-1" />
        </div>
      </section>

      <section className="testimonial-sec mt50">
        <div className="container">
          <div className="tp-head-cls text-center mb30">
            <h3 className="font20 clr-black medium">TESTIMONIALS</h3>
            <h4 className="font40 clr-black bold">
              What makes us{" "}
              <span className="clr-yellow">different makes us better</span>
            </h4>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="test-boxes">
                {testimoniallist.length > 0 && (
                  <>
                    {testimoniallist.map((data, i) => (
                      <div className="img-txt-bx" key={i}>
                        <div className="img-bx">
                          <img
                            src={
                              Url.baseUrl +
                              "/public/uploads/testimonial/" +
                              data.image
                            }
                            alt={data.image_alt}
                          />
                        </div>
                        <div className="inner-txt more">{data.testimonial}</div>
                        <div className="lst-box">
                          <div className="name">
                            <h3 className="font18 medium clr-black">
                              {data.name}
                            </h3>
                            <h4 className="font14 medium clr-yellow">
                              {data.designation}
                            </h4>
                          </div>
                          <div className="stars">
                            <DynamicStar
                              rating={data.star_rating}
                              width={parseFloat(star.width)}
                              height={parseFloat(star.height)}
                              outlined={
                                star.outlinedColor
                                  ? star.outlinedColor
                                  : star.outlined
                              }
                              totalStars={star.totalStars}
                              sharpnessStar={star.sharpness}
                              fullStarColor={star.fullStarColor}
                              emptyStarColor={star.emptyStarColor}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Testimonial;
