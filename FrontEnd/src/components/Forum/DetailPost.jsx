import React from 'react'
import Header from '../Header'
import CategoriesSection from './CategoriesSection'
import IndividualPost from './IndividualPost'

const Post = {
    Author: 'John Doe',
    Category: "Marriage",
    Date: 'March 2, 2024',
    Content:
        'Legal history refers to the study of how law has evolved and developed over time. It encompasses the historical origins of legal systems, the evolution of legal principles and doctrines, and the social, political, and cultural contexts that have shaped legal systems throughout history. Legal systems have existed in various forms in different civilizations and cultures throughout the world. For example, ancient legal systems include Hammurabis Code in ancient Mesopotamia, the Twelve Tables in ancient Rome, and the Code of Justinian in the Byzantine Empire. The development of legal systems has been influenced by various factors, including religious and moral principles, political structures, economic systems, and societal norms. Over time, legal systems have evolved to address the changing needs and challenges of societies. During the Middle Ages, legal systems in Europe were heavily influenced by Canon law, which was based on the teachings of the Christian Church. In parallel, Islamic law (Sharia) developed in the Muslim world, drawing upon Islamic teachings and jurisprudence. The modern legal systems in many countries have roots in the common law tradition, which originated in England and spread to other English-speaking countries, including the United States. Common law is based on judicial decisions and legal precedents, emphasizing the importance of case law in the development of legal principles. Civil law systems, on the other hand, have their origins in Roman law and the legal codes of continental Europe. Civil law is codified and relies on written laws and statutes as the primary source of legal authority. Throughout history, legal systems have undergone significant transformations due to social, political, and technological changes. Important milestones in legal history include the Magna Carta in 1215, which established principles of limited government and individual rights, and the Enlightenment era, which emphasized the importance of reason, human rights, and the rule of law. In recent times, legal systems have continued to evolve to address contemporary issues such as human rights, constitutional law, international law, and emerging areas like technology and intellectual property. Studying legal history provides insights into the development of legal systems, the principles that underpin them, and the societal forces that have shaped them. It helps us understand the foundations of modern legal systems and provides a historical context for contemporary legal issues and debates.'
}

function DetailPost() {
    return (
        <>
            {/* <!--begin::Main--> */}
            <Header />
            <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
                {/* <!--begin::Content wrapper--> */}
                <div className="d-flex flex-column flex-column-fluid">
                    <div className="d-flex flex-row">
                        <CategoriesSection />
                        {/* <!--begin::Content--> */}
                        <div className="w-100 flex-lg-row-fluid mx-lg-13">
                            {/* <!--begin::Main form--> */}
                            {/* <CreatePost /> */}
                            {/* <!--end::Main form--> */}
                            {/* <!--begin::Posts--> */}
                            <div className="mb-10" id="kt_social_feeds_posts">
                                {/* <!--begin::Post 1--> */}
                                <IndividualPost Post={Post} Feed={false} />

                            </div>
                            {/* <!--end::Posts--> */}
                            {/* <!--begin::Show more feeds--> */}
                            <div className="d-flex flex-center">
                                <a href="#" className="btn btn-primary fw-bold px-6" id="kt_social_feeds_more_posts_btn">
                                    {/* <!--begin::Indicator label--> */}
                                    <span className="indicator-label">Show more</span>
                                    {/* <!--end::Indicator label--> */}
                                    {/* <!--begin::Indicator progress--> */}
                                    <span className="indicator-progress">Please wait...
                                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                    {/* <!--end::Indicator progress--> */}
                                </a>
                            </div>
                            {/* <!--end::Show more feeds--> */}
                        </div>
                        {/* <!--end::Content--> */}

                    </div>
                </div>
                {/* <!--end::Content wrapper--> */}
                {/* <!--begin::Footer--> */}
                <div id="kt_app_footer" className="app-footer">
                    {/* <!--begin::Footer container--> */}
                    <div className="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
                        {/* <!--begin::Copyright--> */}
                        <div className="text-dark order-2 order-md-1">
                            <span className="text-muted fw-semibold me-1">2023&copy;</span>
                            <a href="https://keenthemes.com" target="_blank" className="text-gray-800 text-hover-primary">Keenthemes</a>
                        </div>
                        {/* <!--end::Copyright--> */}
                        {/* <!--begin::Menu--> */}
                        <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                            <li className="menu-item">
                                <a href="https://keenthemes.com" target="_blank" className="menu-link px-2">About</a>
                            </li>
                            <li className="menu-item">
                                <a href="https://devs.keenthemes.com" target="_blank" className="menu-link px-2">Support</a>
                            </li>
                            <li className="menu-item">
                                <a href="https://themes.getbootstrap.com/product/keen-the-ultimate-bootstrap-admin-theme/" target="_blank" className="menu-link px-2">Purchase</a>
                            </li>
                        </ul>
                        {/* <!--end::Menu--> */}
                    </div>
                    {/* <!--end::Footer container--> */}
                </div>
                {/* <!--end::Footer--> */}
            </div>


        </>
    )
}

export default DetailPost