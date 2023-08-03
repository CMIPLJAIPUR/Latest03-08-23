import MetaTags from "react-meta-tags";
import React, { useEffect, useState } from "react";
import Header from "./../../layouts/front/Header";
import Footer from "./../../layouts/front/Footer";
import ContactSection from "./ContactSection";
import axios from "axios";
import Url from "./../configure.js";
import { Link } from "react-router-dom";
import $ from "jquery";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Index() {
    const optionsFeature = {
        loop: true,
        margin: 60,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            991: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    };
    const optionsPortfolio = {
        loop: true,
        margin: 60,
        dots: false,
        nav: true,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1200: {
                items: 1.5,
            },
        },
    };
    const optionTechnology = {
        loop: true,
        margin: 60,
        dots: false,
        nav: true,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1200: {
                items: 3,
            },
        },
    };
    const responsive1 = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const [sliderL, setSlider] = useState([]);
    const [abouts, setAbout] = useState([]);
    const [aboutsLen, setAboutLen] = useState([]);
    const [diffss, setDiff] = useState([]);
    const [diffCheck, setDiffCheck] = useState([]);
    const [sliderTest, setTestSlider] = useState([]);
    const [setFeature, setFeatureSlider] = useState([]);
    const [sliderTechno, setTechnoSlider] = useState([]);
    const [sliderPortfolio, setPortfolioSlider] = useState([]);
    const getRecord = async () => {
        await axios.get(Url.baseUrl + "api/getslider").then((response) => {
            const itemsS = response.data.data;
            let sliderS = [];
            for (let i = 0; i < itemsS.length; i++) {
                if (itemsS[i]["status"] === 1) {
                    sliderS.push(itemsS[i]);
                }
            }
            setSlider(sliderS);
        });
    };

    const getAboutRecord = async () => {
        await axios.get(Url.baseUrl + "api/get-statistic").then((response) => {
            setAbout(response.data.data[0]);
            setAboutLen(response.data.data);
        });
    };
    const getDiffRecord = async () => {
        await axios
            .get(Url.baseUrl + "api/get-differentfrom")
            .then((response) => {
                const result = [];
                const arr = response.data.data[0].listli.split("$");
                for (let i = 0; i < arr.length; i += 2) {
                    result.push(arr.slice(i, i + 2));
                }

                setDiffCheck(response.data.data);
                setDiff(response.data.data[0]);
            });
    };
    const getRecordFeature = async () => {
        await axios.get(Url.baseUrl + "api/getfslider").then((response) => {
            const itemsF = response.data.data;
            let featureS = [];
            for (let i = 0; i < itemsF.length; i++) {
                if (itemsF[i]["status"] === 1) {
                    featureS.push(itemsF[i]);
                }
            }
            setFeatureSlider(featureS);
        });
    };
    const getRecordPortfolio = async () => {
        await axios.get(Url.baseUrl + "api/getpslider").then((response) => {
            const itemsP = response.data.data;
            let portfolioS = [];
            for (let i = 0; i < itemsP.length; i++) {
                if (itemsP[i]["status"] === 1) {
                    portfolioS.push(itemsP[i]);
                }
            }
            setPortfolioSlider(portfolioS);
        });
    };
    const getTechnology = async () => {
        await axios.get(Url.baseUrl + "api/gettslider").then((response) => {
            const itemsT = response.data.data;
            let technoS = [];
            for (let i = 0; i < itemsT.length; i++) {
                if (itemsT[i]["status"] === 1) {
                    technoS.push(itemsT[i]);
                }
            }
            setTechnoSlider(technoS);
        });
    };
    const getRecordTestimonial = async () => {
        await axios.get(Url.baseUrl + "api/gettmslider").then((response) => {
            const items = response.data.data;
            let featureS = [];
            for (let i = 0; i < 8; i++) {
                if (items[i]["status"] === 1) {
                    featureS.push(items[i]);
                }
            }
            setTestSlider(featureS);
        });
    };

    const addActiveClass = (event) => {
        $(".show").addClass("hide-top");
        $(".hide-top").removeClass("show");
        $(`.quote-text-${event}`).addClass("show");
        $(`.quote-text-${event}`).removeClass("hide-bottom");

        $(".look").addClass("hide-dp-top");
        $(".hide-dp-top").removeClass("look");

        $(`.dp-name-${event}`).addClass("look");
        $(`.dp-name-${event}`).removeClass("hide-dp-bottom");
    };

    useState(() => {
        getRecord();
        getAboutRecord();
        getDiffRecord();
        getRecordFeature();
        getRecordPortfolio();
        getTechnology();
        getRecordTestimonial();
    }, []);

    useEffect(() => {
        $(".search-btn").click(function () {
            $("header").toggleClass("searchopen");
        });
    });

    return (
        <>
            <MetaTags>
                <title>
                    Web Development Company in India | IT Solutions | Apps
                </title>
                <meta
                    httpEquiv="refresh"
                    name="Web Development Company in India | IT Solutions | Apps"
                    content="Charu Mindworks is India's best website development company. It excels in Software & Mobile app development, E-commerce, UI & UX, Digital Marketing url=https://charumindworks.com/"
                />
            </MetaTags>
            <Header />
            <section className="slider-bx">
                <div className="inner-bx">
                    <div id="carouselExampleCaptions" className="">
                        <Carousel
                            arrows={false}
                            showDots={true}
                            responsive={responsive1}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={2000}
                        >
                            {sliderL.map((student, index) => (
                                <div key={index}>
                                    <div className="carousel-item active">
                                        <img
                                            className="d-block w-100"
                                            src={
                                                Url.baseUrl +
                                                "/public/uploads/slider/" +
                                                student.attachment
                                            }
                                            alt={student.attachment_alt}
                                        />
                                        <div className="carousel-caption d-md-block">
                                            <h5 className="font75 inter bolder clr-white">
                                                {student.slider_title}
                                            </h5>
                                            <p>{student.slider_subtitle}</p>
                                            {/* <div className="btn-bx mt30">
											<a href="#" className="theme-btn">Know More Details</a>
										</div> */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </section>

            <section className="about-sec bg-blue">
                <div className="inner-bx pt80 bg-white">
                    <div className="container">
                        <div className="row">
                            {aboutsLen.length && (
                                <>
                                    <div className="col-md-6">
                                        <div className="inner-txt">
                                            <h5 className="font18 medium clr-yellow">
                                                ABOUT US
                                            </h5>
                                            <h1 className="font42 bold clr-black">
                                                {abouts.title}{" "}
                                                <span className="clr-yellow">
                                                    {abouts.subtitle}
                                                </span>
                                            </h1>
                                            <div
                                                className="details-bx contentLimit"
                                                dangerouslySetInnerHTML={{
                                                    __html: abouts.description,
                                                }}
                                            ></div>
                                            {/* <div className="details-bx">
                                                <p>
                                                    {abouts.description.substring(
                                                        1,
                                                        700
                                                    )}
                                                    .
                                                </p>
                                            </div> */}
                                            <div className="mor-btn mt30">
                                                <Link
                                                    to="/about-us"
                                                    className="theme-btn"
                                                >
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="boxes-cls">
                                            <div className="cont-img">
                                                <img
                                                    src={
                                                        Url.baseUrl +
                                                        "/public/uploads/statistics/" +
                                                        abouts.image
                                                    }
                                                    alt={abouts.image_alt}
                                                />
                                            </div>
                                            <div className="team-member">
                                                <h3>
                                                    <span>
                                                        {
                                                            abouts.team_member_count
                                                        }
                                                    </span>{" "}
                                                    Expert Team Members
                                                </h3>
                                            </div>
                                            <div className="clent-sat">
                                                <h3>
                                                    <span>
                                                        {abouts.satisfied_count}
                                                    </span>{" "}
                                                    Happy & Satisfied Clients
                                                </h3>
                                            </div>
                                            <div className="exp-cls">
                                                <h3>
                                                    <span>
                                                        {
                                                            abouts.experiance_count
                                                        }
                                                    </span>{" "}
                                                    Years of Experience
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className="serviece-sec mt80">
                <div className="inner-box-bg pt50 pb50">
                    <div className="container">
                        <div className="heading-bx text-center">
                            <h5 className="font18 medium clr-yellow">
                                {" "}
                                Key Features
                            </h5>
                            <h3 className="font45 bold clr-white">
                                Features Service
                            </h3>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="services">
                                    {setFeature.length && (
                                        <OwlCarousel {...optionsFeature}>
                                            {setFeature.map(
                                                (features, index) => (
                                                    <div
                                                        className="item"
                                                        data-index={index}
                                                        key={index}
                                                    >
                                                        <div className="serv-main">
                                                            <div className="icon-box">
                                                                <img
                                                                    src={
                                                                        Url.baseUrl +
                                                                        "/public/uploads/featureslider/" +
                                                                        features.image
                                                                    }
                                                                    alt={
                                                                        features.image_alt
                                                                    }
                                                                />
                                                            </div>
                                                            <div className="detail">
                                                                <h3 className="font25 clr-white">
                                                                    {
                                                                        features.title
                                                                    }
                                                                </h3>
                                                                <p>
                                                                    {
                                                                        features.subtitle
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </OwlCarousel>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="diffence-bx">
                <div className="inner-box pt80 pb80">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-5">
                                <div className="diff-img">
                                    <div className="img">
                                        <img
                                            src="/assets/img/diif-img.png"
                                            alt="..."
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="cont-box">
                                    <h3 className="font45 bold clr-black">
                                        <span>{diffss.title}</span>
                                        {diffss.subtitle}
                                    </h3>
                                    <div className="detail">
                                        <p>{diffss.description}</p>
                                    </div>
                                    <div className="lists">
                                        {diffCheck.length && (
                                            <>
                                                <ul>
                                                    {diffss.listli
                                                        .split("$")
                                                        .map((data, index) => (
                                                            <li key={index}>
                                                                {data}
                                                            </li>
                                                        ))}
                                                </ul>
                                            </>
                                        )}
                                    </div>
                                    {/* <div className="mor-btn mt20">
										<a href={diffss.btnurl} className="theme-btn">Read More</a>
									</div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testomonial">
                <div className="inner-box-bg pt50 pb50">
                    <div className="container-fluid">
                        <div className="heading-bx text-center">
                            <h5 className="font18 medium clr-yellow">
                                Our Portfolio
                            </h5>
                            <h3 className="font45 bold clr-white">
                                Please look at the tremendous work we have{" "}
                                <br /> accomplished for some of our prestigious
                                clients.
                            </h3>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                {sliderPortfolio.length && (
                                    <OwlCarousel {...optionsPortfolio}>
                                        {sliderPortfolio.map(
                                            (techno, index) => (
                                                <div
                                                    className="item"
                                                    data-index={index}
                                                    key={index}
                                                >
                                                    <div className="growslider-bx">
                                                        <div className="slider-bx-2">
                                                            <div className="slide-bg">
                                                                <img
                                                                    src="/assets/img/test-bg.jpg"
                                                                    alt="slider boxes"
                                                                />
                                                            </div>
                                                            <div
                                                                className="infomation-box"
                                                                style={{
                                                                    backgroundColor:
                                                                        techno.color,
                                                                }}
                                                            >
                                                                <div className="heading">
                                                                    <a href="/#">
                                                                        {
                                                                            techno.title
                                                                        }
                                                                    </a>
                                                                </div>
                                                                <div className="cont">
                                                                    {
                                                                        techno.subtitle
                                                                    }
                                                                </div>
                                                                <div className="inf-btns">
                                                                    <ul>
                                                                        {techno.skill
                                                                            .split(
                                                                                ","
                                                                            )
                                                                            .map(
                                                                                (
                                                                                    ft,
                                                                                    ind
                                                                                ) => {
                                                                                    return (
                                                                                        <li
                                                                                            key={
                                                                                                ind
                                                                                            }
                                                                                            style={{
                                                                                                textTransform:
                                                                                                    "uppercase",
                                                                                            }}
                                                                                        >
                                                                                            {
                                                                                                ft
                                                                                            }
                                                                                        </li>
                                                                                    );
                                                                                }
                                                                            )}
                                                                    </ul>
                                                                </div>
                                                                <div className="mor-btn">
                                                                    <Link
                                                                        to={`/portfolio-detail/${techno.id}`}
                                                                        className="theme-btn "
                                                                    >
                                                                        View
                                                                        More
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="lap-img-box">
                                                                <a href="/#">
                                                                    <img
                                                                        src={
                                                                            Url.baseUrl +
                                                                            "/public/uploads/portfolioslider/" +
                                                                            techno.image
                                                                        }
                                                                        alt={
                                                                            techno.image_alt
                                                                        }
                                                                    />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </OwlCarousel>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="technologies mt50 mb50">
                <div className="container">
                    <div className="heading text-center">
                        <h3 className="font45 bold mb30">
                            Technologies We Work On
                        </h3>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tec-slider">
                                {sliderTechno.length && (
                                    <OwlCarousel {...optionTechnology}>
                                        {sliderTechno.map((techno, index) => (
                                            <div key={index} className="item">
                                                <div className="main-bx">
                                                    <div className="tech-bx text-center">
                                                        <div className="img">
                                                            <img
                                                                src={
                                                                    Url.baseUrl +
                                                                    "/public/uploads/technology/" +
                                                                    techno.image
                                                                }
                                                                alt={
                                                                    techno.image_alt
                                                                }
                                                            />
                                                        </div>
                                                        <h3 className="font18 clr-black">
                                                            {techno.title}
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </OwlCarousel>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="testomonials mt50 bg-white">
                <div className="inner-box-bg pt50 pb50">
                    <div className="container">
                        <div className="heading-bx text-center">
                            <h5 className="font18 medium clr-yellow">
                                TESTIMONIALS
                            </h5>
                            <h3 className="font45 bold clr-white">
                                What makes us different, makes us better
                            </h3>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="testimonials-block">
                                    <div className="section-eight">
                                        <div className="row">
                                            <div className="col-lg-3 fade-in">
                                                <div className="container-pe-quote">
                                                    {sliderTest.map(
                                                        (testi, indexTesti) => (
                                                            <div
                                                                onClick={() =>
                                                                    addActiveClass(
                                                                        indexTesti +
                                                                            1
                                                                    )
                                                                }
                                                                className={`pp-quote li-quote-${
                                                                    indexTesti +
                                                                    1
                                                                }`}
                                                                key={indexTesti}
                                                            >
                                                                <img
                                                                    src={
                                                                        Url.baseUrl +
                                                                        "/public/uploads/testimonial/" +
                                                                        testi.image
                                                                    }
                                                                    alt={
                                                                        testi.image_alt
                                                                    }
                                                                    title="Testimonial"
                                                                />
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-lg-5 fade-in">
                                                <div className="sec-eight-text-area">
                                                    <div className="container-dp-name">
                                                        {sliderTest.map(
                                                            (
                                                                testimon,
                                                                index
                                                            ) => (
                                                                <div
                                                                    className={`box-dpname dp-name-${
                                                                        index +
                                                                        1
                                                                    } hide-dp-top `}
                                                                    key={index}
                                                                >
                                                                    <div className="img">
                                                                        <img
                                                                            className=""
                                                                            src={
                                                                                Url.baseUrl +
                                                                                "/public/uploads/testimonial/" +
                                                                                testimon.image
                                                                            }
                                                                            alt={
                                                                                testimon.image_alt
                                                                            }
                                                                            title="Testimonial"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 fade-in">
                                                <div className="sec-eight-text-area">
                                                    <div className="container-quote">
                                                        {sliderTest.map(
                                                            (
                                                                testio,
                                                                indexDes
                                                            ) => (
                                                                <div
                                                                    className={`quote quote-text-${
                                                                        indexDes +
                                                                        1
                                                                    } hide-dp `}
                                                                    key={
                                                                        indexDes
                                                                    }
                                                                >
                                                                    <img
                                                                        className=""
                                                                        src="/assets/img/quote.png"
                                                                        alt="Quote"
                                                                        title="Quote"
                                                                    />
                                                                    <p className="font14 clr-grey">
                                                                        {
                                                                            testio.testimonial
                                                                        }
                                                                    </p>
                                                                    <div className="name-degi">
                                                                        <span className="name-block clr-white bold font18 d-block">
                                                                            {
                                                                                testio.name
                                                                            }
                                                                        </span>
                                                                        <span className="name-block clr-white font16 d-block">
                                                                            {
                                                                                testio.designation
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="charu-team">
                <div className="inner-bx bg-whitegrey pt80 pb80">
                    <div className="heading-bx text-center mb40">
                        <h5 className="font25 medium clr-black">
                            Would you like to join our
                        </h5>
                        <h3 className="font45 bold">Charu Mindworks Team?</h3>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="team-boxes">
                                    <div className="box">
                                        <div className="img">
                                            <img
                                                src="/assets/img/t-ic-1.png"
                                                alt="..."
                                            />
                                        </div>
                                        <h3 className="font20 clr-black medium">
                                            Challenging projects
                                        </h3>
                                    </div>
                                    <div className="box">
                                        <div className="img">
                                            <img
                                                src="/assets/img/t-ic-2.png"
                                                alt="..."
                                            />
                                        </div>
                                        <h3 className="font20 clr-black medium">
                                            Custom working time
                                        </h3>
                                    </div>
                                    <div className="box">
                                        <div className="img">
                                            <img
                                                src="/assets/img/t-ic-3.png"
                                                alt="..."
                                            />
                                        </div>
                                        <h3 className="font20 clr-black medium">
                                            Pixel perfect apps
                                        </h3>
                                    </div>
                                    <div className="box">
                                        <div className="img">
                                            <img
                                                src="/assets/img/t-ic-4.png"
                                                alt="..."
                                            />
                                        </div>
                                        <h3 className="font20 clr-black medium">
                                            Close to city center
                                        </h3>
                                    </div>
                                    <div className="box">
                                        <div className="img">
                                            <img
                                                src="/assets/img/t-ic-5.png"
                                                alt="..."
                                            />
                                        </div>
                                        <h3 className="font20 clr-black medium">
                                            Awesome Clients
                                        </h3>
                                    </div>
                                    <div className="box">
                                        <div className="img">
                                            <img
                                                src="/assets/img/t-ic-6.png"
                                                alt="..."
                                            />
                                        </div>
                                        <h3 className="font20 clr-black medium">
                                            Award winning team
                                        </h3>
                                    </div>
                                    <div className="box">
                                        <div className="img">
                                            <img
                                                src="/assets/img/t-ic-7.png"
                                                alt="..."
                                            />
                                        </div>
                                        <h3 className="font20 clr-black medium">
                                            Great people
                                        </h3>
                                    </div>
                                    <div className="box">
                                        <div className="img">
                                            <img
                                                src="/assets/img/t-ic-8.png"
                                                alt="..."
                                            />
                                        </div>
                                        <h3 className="font20 clr-black medium">
                                            Creative environment
                                        </h3>
                                    </div>
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
export default Index;
