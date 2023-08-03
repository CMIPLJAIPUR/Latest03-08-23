import React, { Component } from "react";
//import "./App.css";
import { createBrowserHistory } from "history";

import Index from "./components/front/Index";
import About from "./components/front/About";
import Portfolio from "./components/front/Portfolio";
import PortfolioDetail from "./components/front/Portfolio-detail";
import Service from "./components/front/Service";
import ServiceDetail from "./components/front/Service-detail";
import Testimonial from "./components/front/Testimonial";
import Contactus from "./components/front/Contact-us";
import Career from "./components/front/Career";
import Careerdetail from "./components/front/Career-detail";
import Groupofcompanies from "./components/front/Group-of-companies";
import PrivacyPolicy from "./components/front/Privacy-policy";
import Sitemap from "./components/front/Sitemap";
import TermCondition from "./components/front/Term-condition";
import Faq from "./components/front/Faq";
import Blog from "./components/front/Blog";
import Blogdetail from "./components/front/Blog-detail";
import Page403 from "./components/errors/Page403";
import Page404 from "./components/errors/Page404";

// Start Admin Link
import Signin from "./components/admin/Signin";
import Admin from "./components/admin/Admin";
import Dashboard from "./components/admin/Dashboard";
import Sliderlist from "./components/admin/slider/Sliderlist";
import Addslider from "./components/admin/slider/Addslider";
import Editslider from "./components/admin/slider/Editslider";
import Fsliderlist from "./components/admin/featureslider/Fsliderlist";
import Faddslider from "./components/admin/featureslider/Faddslider";
import Feditslider from "./components/admin/featureslider/Feditslider";
import Psliderlist from "./components/admin/portfolio/Psliderlist";
import Paddslider from "./components/admin/portfolio/Paddslider";
import Peditslider from "./components/admin/portfolio/Peditslider";

import Tsliderlist from "./components/admin/technologyslider/Tsliderlist";
import Taddslider from "./components/admin/technologyslider/Taddslider";
import Teditslider from "./components/admin/technologyslider/Teditslider";

import Tmsliderlist from "./components/admin/testimonial/Tmsliderlist";
import Tmaddslider from "./components/admin/testimonial/Tmaddslider";
import Tmeditslider from "./components/admin/testimonial/Tmeditslider";

import Ourlist from "./components/admin/statistics/Ourlist";
import Ouredit from "./components/admin/statistics/Ouredit";

import DifferentFromlist from "./components/admin/statistics/DifferentFromlist";
import DifferentFromedit from "./components/admin/statistics/DifferentFromedit";

import Translist from "./components/admin/statistics/Translist";
import Transedit from "./components/admin/statistics/Transedit";

import Asomelist from "./components/admin/asome-services/Asome-sliderlist";
import AsomeAdd from "./components/admin/asome-services/Asome-addslider";
import Asomeedit from "./components/admin/asome-services/Asome-editslider";

import AboutTablist from "./components/admin/abouttab/Abouttablist";
import AboutTabAdd from "./components/admin/abouttab/Addabouttab";
import AboutTabEdit from "./components/admin/abouttab/Editabouttab";

import Proservicelist from "./components/admin/professional-service/Proservicelist";
import Addproservice from "./components/admin/professional-service/Addproservice";
import Editproservice from "./components/admin/professional-service/Editproservice";

import Categorylist from "./components/admin/category/Categorylist";
import Addcategory from "./components/admin/category/Addcategory";
import Editcategory from "./components/admin/category/Editcategory";

import ListPortfolio from "./components/admin/portfolio-detail/Portfoliolist";
import AddPortfolio from "./components/admin/portfolio-detail/Portfolioadd";
import EditPortfolio from "./components/admin/portfolio-detail/Portfolioedit";

import ListService from "./components/admin/services/Servicelist";
import AddService from "./components/admin/services/Serviceadd";
import EditService from "./components/admin/services/Serviceedit";

import Ourservicelist from "./components/admin/services/Ourservicelist";
import Ourserviceedit from "./components/admin/services/Ourserviceedit";

import Contactuslist from "./components/admin/statistics/Contact-us-list";
import Contactusedit from "./components/admin/statistics/Contact-us-edit";

import Listtechno from "./components/admin/technologyslider/Listtechnology";
import Addtechno from "./components/admin/technologyslider/Addtechnology";
import Edittechno from "./components/admin/technologyslider/Edittechnology";

import Skilllist from "./components/admin/skills/Skilllist";
import Skilladd from "./components/admin/skills/Addskill";
import Skilledit from "./components/admin/skills/Editskill";

import Careerlist from "./components/admin/career/Careerlist";
import Careeradd from "./components/admin/career/Addcareer";
import Careeredit from "./components/admin/career/Editcareer";

import CompanyGrouplist from "./components/admin/company-group/Companygrouplist";
import CompanyGroupadd from "./components/admin/company-group/Addcompanygroup";
import CompanyGroupedit from "./components/admin/company-group/Editcompanygroup";

import Jobapplication from "./components/admin/career/Jobapplication";

import Termcondtionlist from "./components/admin/termcondition/Term-condition-list";
import Termcondtionedit from "./components/admin/termcondition/Term-condition-edit";

import Privacylist from "./components/admin/privacy-policy/Privacy-policy-list";
import Privacyedit from "./components/admin/privacy-policy/Privacy-policy-edit";

import InquiryList from "./components/admin/statistics/Inquiry-list";

import Faqlist from "./components/admin/faq/Faqlist";
import Faqadd from "./components/admin/faq/Addfaq";
import Faqedit from "./components/admin/faq/Editfaq";

import Bloglist from "./components/admin/blogs/Bloglist";
import Blogadd from "./components/admin/blogs/Addblog";
import Blogedit from "./components/admin/blogs/Editblog";

import BlogCommentList from "./components/admin/blogs/BlogCommentList";
import BlogCommentEdit from "./components/admin/blogs/EditBlogComment";

import Setting from "./components/admin/Setting";

// End Admin Link url
import { Routes, Route } from "react-router-dom";

export const history = createBrowserHistory();
class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Routes history={history}>
                    {/* Start Front Route */}
                    <Route path="/403" element={<Page403 />} />
                    <Route path="*" element={<Page404 />} />
                    <Route path="/" element={<Index />} />
                    <Route path="/about-us" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route
                        path="/portfolio-detail/:id"
                        element={<PortfolioDetail />}
                    />
                    <Route path="/service" element={<Service />} />
                    <Route
                        path="/service-detail/:id"
                        element={<ServiceDetail />}
                    />
                    <Route path="/testimonial" element={<Testimonial />} />
                    <Route path="/contact-us" element={<Contactus />} />
                    <Route path="/career" element={<Career />} />
                    <Route
                        path="/career-detail/:id"
                        element={<Careerdetail />}
                    />
                    <Route
                        path="/group-of-companies"
                        element={<Groupofcompanies />}
                    />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/sitemap" element={<Sitemap />} />
                    <Route path="/term-condition" element={<TermCondition />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog-detail/:name" element={<Blogdetail />} />
                    {/* End Front Routes */}
                    {/* Start Admin Route */}
                    <Route index path="/admin" element={<Signin />} />
                    <Route path="/admin" element={<Admin />}>
                        <Route
                            path="/admin/dashboard"
                            element={<Dashboard />}
                        />

                        <Route
                            path="/admin/sliderlist"
                            element={<Sliderlist />}
                        />
                        <Route
                            path="/admin/addslider"
                            element={<Addslider />}
                        />
                        <Route
                            path="/admin/editslider/:id"
                            element={<Editslider />}
                        />

                        <Route
                            path="/admin/fsliderlist"
                            element={<Fsliderlist />}
                        />
                        <Route
                            path="/admin/faddslider"
                            element={<Faddslider />}
                        />
                        <Route
                            path="/admin/feditslider/:id"
                            element={<Feditslider />}
                        />

                        <Route
                            path="/admin/psliderlist"
                            element={<Psliderlist />}
                        />
                        <Route
                            path="/admin/paddslider"
                            element={<Paddslider />}
                        />
                        <Route
                            path="/admin/peditslider/:id"
                            element={<Peditslider />}
                        />

                        <Route
                            path="/admin/tsliderlist"
                            element={<Tsliderlist />}
                        />
                        <Route
                            path="/admin/taddslider"
                            element={<Taddslider />}
                        />
                        <Route
                            path="/admin/teditslider/:id"
                            element={<Teditslider />}
                        />

                        <Route
                            path="/admin/tmsliderlist"
                            element={<Tmsliderlist />}
                        />
                        <Route
                            path="/admin/tmaddslider"
                            element={<Tmaddslider />}
                        />
                        <Route
                            path="/admin/tmeditslider/:id"
                            element={<Tmeditslider />}
                        />

                        <Route path="/admin/ourlist" element={<Ourlist />} />
                        <Route
                            path="/admin/ouredit/:id"
                            element={<Ouredit />}
                        />

                        <Route
                            path="/admin/df-list"
                            element={<DifferentFromlist />}
                        />
                        <Route
                            path="/admin/df-edit/:id"
                            element={<DifferentFromedit />}
                        />

                        <Route
                            path="/admin/trans-list"
                            element={<Translist />}
                        />
                        <Route
                            path="/admin/trans-edit/:id"
                            element={<Transedit />}
                        />

                        <Route
                            path="/admin/asome-list"
                            element={<Asomelist />}
                        />
                        <Route path="/admin/asome-add" element={<AsomeAdd />} />
                        <Route
                            path="/admin/asome-edit/:id"
                            element={<Asomeedit />}
                        />

                        <Route
                            path="/admin/abouttab-list"
                            element={<AboutTablist />}
                        />
                        <Route
                            path="/admin/abouttab-add"
                            element={<AboutTabAdd />}
                        />
                        <Route
                            path="/admin/abouttab-edit/:id"
                            element={<AboutTabEdit />}
                        />

                        <Route
                            path="/admin/proservice-list"
                            element={<Proservicelist />}
                        />
                        <Route
                            path="/admin/proservice-add"
                            element={<Addproservice />}
                        />
                        <Route
                            path="/admin/proservice-edit/:id"
                            element={<Editproservice />}
                        />

                        <Route
                            path="/admin/category-list"
                            element={<Categorylist />}
                        />
                        <Route
                            path="/admin/category-add"
                            element={<Addcategory />}
                        />
                        <Route
                            path="/admin/category-edit/:id"
                            element={<Editcategory />}
                        />

                        <Route
                            path="/admin/portfoliodt-list"
                            element={<ListPortfolio />}
                        />
                        <Route
                            path="/admin/portfoliodt-add"
                            element={<AddPortfolio />}
                        />
                        <Route
                            path="/admin/portfoliodt-edit/:id"
                            element={<EditPortfolio />}
                        />

                        <Route
                            path="/admin/service-list"
                            element={<ListService />}
                        />
                        <Route
                            path="/admin/service-add"
                            element={<AddService />}
                        />
                        <Route
                            path="/admin/service-edit/:id"
                            element={<EditService />}
                        />

                        <Route
                            path="/admin/technology-list"
                            element={<Listtechno />}
                        />
                        <Route
                            path="/admin/technology-add"
                            element={<Addtechno />}
                        />
                        <Route
                            path="/admin/technology-edit/:id"
                            element={<Edittechno />}
                        />

                        <Route
                            path="/admin/our-service-list"
                            element={<Ourservicelist />}
                        />
                        <Route
                            path="/admin/our-service-edit/:id"
                            element={<Ourserviceedit />}
                        />

                        <Route
                            path="/admin/skill-list"
                            element={<Skilllist />}
                        />
                        <Route path="/admin/skill-add" element={<Skilladd />} />
                        <Route
                            path="/admin/skill-edit/:id"
                            element={<Skilledit />}
                        />

                        <Route
                            path="/admin/contact-list"
                            element={<Contactuslist />}
                        />
                        <Route
                            path="/admin/contact-edit/:id"
                            element={<Contactusedit />}
                        />
                        <Route
                            path="/admin/term-condition-list"
                            element={<Termcondtionlist />}
                        />
                        <Route
                            path="/admin/term-condition-edit/:id"
                            element={<Termcondtionedit />}
                        />
                        <Route
                            path="/admin/careerlist"
                            element={<Careerlist />}
                        />
                        <Route
                            path="/admin/careeradd"
                            element={<Careeradd />}
                        />
                        <Route
                            path="/admin/careeredit/:id"
                            element={<Careeredit />}
                        />

                        <Route
                            path="/admin/company-group-list"
                            element={<CompanyGrouplist />}
                        />
                        <Route
                            path="/admin/company-group-add"
                            element={<CompanyGroupadd />}
                        />
                        <Route
                            path="/admin/company-group-edit/:id"
                            element={<CompanyGroupedit />}
                        />

                        <Route
                            path="/admin/job-application"
                            element={<Jobapplication />}
                        />
                        <Route
                            path="/admin/privacy-policy-list"
                            element={<Privacylist />}
                        />
                        <Route
                            path="/admin/privacy-policy-edit/:id"
                            element={<Privacyedit />}
                        />

                        <Route path="/admin/faq-list" element={<Faqlist />} />
                        <Route path="/admin/faq-add" element={<Faqadd />} />
                        <Route
                            path="/admin/faq-edit/:id"
                            element={<Faqedit />}
                        />

                        <Route path="/admin/blog-list" element={<Bloglist />} />
                        <Route path="/admin/blog-add" element={<Blogadd />} />
                        <Route
                            path="/admin/blog-edit/:id"
                            element={<Blogedit />}
                        />

                        <Route
                            path="/admin/blog-comment-list"
                            element={<BlogCommentList />}
                        />
                        <Route
                            path="/admin/blog-comment-edit/:id"
                            element={<BlogCommentEdit />}
                        />

                        <Route
                            path="/admin/inquiry-list"
                            element={<InquiryList />}
                        />

                        <Route path="/admin/setting" element={<Setting />} />
                    </Route>
                    {/* End Admin Route  url */}
                </Routes>
            </div>
        );
    }
}
export default App;
