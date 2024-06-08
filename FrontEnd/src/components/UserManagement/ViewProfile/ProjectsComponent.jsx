import React, {useEffect, useState} from "react";
import axios from 'axios'

const ProjectsComponent = ({ id }) => {
    const [offers, setOffers] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:3000/getOffers/${id}`)
    .then((response)=>{
      setOffers(response.data)
    })
    }, [])
    console.log(offers)
    
  return (
    <div>
      <div className="card card-xxl-stretch mb-5 mb-xl-10">
        {/*begin::Header*/}
        <div className="card-header card-header-stretch">
          {/*begin::Title*/}
          <div className="card-title">
            <h3 className="m-0 text-gray-900">Project Overview</h3>
          </div>
          {/*end::Title*/}
          {/*begin::Toolbar*/}
          <div className="card-toolbar"></div>
          {/*end::Toolbar*/}
        </div>
        {/*end::Header*/}
        {/*begin::Body*/}
        <div className="card-body pt-7 pb-0 px-0">
          {/*begin::Tab content*/}
          <div className="tab-content">
            {/*begin::Tab panel*/}
            <div
              className="tab-pane fade active show"
              id="kt_security_summary_tab_pane_hours"
              role="tabpanel"
            >
              {/*begin::Row*/}
              <div className="row p-0 mb-5 px-9">
                {/*begin::Col*/}
                <div className="col">
                  <div className="border border-dashed border-gray-300 text-center min-w-125px rounded pt-4 pb-2 my-3">
                    <span className="fs-4 fw-semibold text-success d-block">
                      Completed Offers
                    </span>
                    <span
                      className="fs-2hx fw-bold text-gray-900 counted"
                      data-kt-countup="true"
                      data-kt-countup-value={36899}
                      data-kt-initialized={1}
                    >
                      {offers.length}
                    </span>
                  </div>
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}

                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col">
                  <div className="border border-dashed border-gray-300 text-center min-w-125px rounded pt-4 pb-2 my-3">
                    <span className="fs-4 fw-semibold text-danger d-block">
                      Failed Offers
                    </span>
                    <span
                      className="fs-2hx fw-bold text-gray-900 counted"
                      data-kt-countup="true"
                      data-kt-countup-value={291}
                      data-kt-initialized={1}
                    >
                      291
                    </span>
                  </div>
                </div>
                {/*end::Col*/}
              </div>
              {/*end::Row*/}
              {/*begin::Container*/}
              {/*end::Container*/}
            </div>
            {/*end::Tab panel*/}

            {/*end::Tab panel*/}
            {/*begin::Tab panel*/}

            {/*end::Tab panel*/}
          </div>
          {/*end::Tab content*/}
        </div>
        {/*end::Body*/}
      </div>
      <div className="row g-6 g-xl-9">
        {offers.map((offer, index) => {
          return <>
            <div className="col-md-6 col-xl-4" key={index}>
              {/*begin::Card*/}
              <a
                href="../../demo1/dist/apps/projects/project.html"
                className="card border-hover-primary"
              >
                {/*begin::Card header*/}
                <div className="card-header border-0 pt-9">
                  {/*begin::Card Title*/}
                  <div className="card-title m-0">
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-50px w-50px bg-light">
                      <img
                        src="assets/media/svg/brand-logos/plurk.svg"
                        alt="image"
                        className="p-3"
                      />
                    </div>
                    {/*end::Avatar*/}
                  </div>
                  {/*end::Car Title*/}
                  {/*begin::Card toolbar*/}
                  <div className="card-toolbar">
                    <span className="badge badge-light-primary fw-bold me-auto px-4 py-3">
                      {offer.status}
                    </span>
                  </div>
                  {/*end::Card toolbar*/}
                </div>
                {/*end:: Card header*/}
                {/*begin:: Card body*/}
                <div className="card-body p-9">
                  {/*begin::Name*/}
                  <div className="fs-3 fw-bold text-dark">{offer.title}</div>
                  {/*end::Name*/}
                  {/*begin::Description*/}
                  <p className="text-gray-400 fw-semibold fs-5 mt-1 mb-7">
                    {offer.description}
                  </p>
                  {/*end::Description*/}
                  {/*begin::Info*/}
                  <div className="d-flex flex-wrap mb-5">
                    {/*begin::Due*/}
                    <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                      <div className="fs-6 text-gray-800 fw-bold">
                        {offer.date}
                      </div>
                      <div className="fw-semibold text-gray-400">Due Date</div>
                    </div>
                    {/*end::Due*/}
                    {/*begin::Budget*/}
                    <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                      <div className="fs-6 text-gray-800 fw-bold">
                        {offer.price}
                      </div>
                      <div className="fw-semibold text-gray-400">Budget</div>
                    </div>
                    {/*end::Budget*/}
                  </div>
                  {/*end::Info*/}
                  {/*begin::Progress*/}

                  {/*end::Progress*/}
                  {/*begin::Users*/}
                  <div className="symbol-group symbol-hover">
                    {/*begin::User*/}
                    <div
                      className="symbol symbol-35px symbol-circle"
                      data-bs-toggle="tooltip"
                      aria-label="Emma Smith"
                      data-bs-original-title="Emma Smith"
                      data-kt-initialized={1}
                    >
                      <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                    </div>
                    {/*begin::User*/}
                    {/*begin::User*/}
                    <div
                      className="symbol symbol-35px symbol-circle"
                      data-bs-toggle="tooltip"
                      aria-label="Rudy Stone"
                      data-bs-original-title="Rudy Stone"
                      data-kt-initialized={1}
                    >
                      <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                    </div>
                    {/*begin::User*/}
                    {/*begin::User*/}
                    <div
                      className="symbol symbol-35px symbol-circle"
                      data-bs-toggle="tooltip"
                      data-bs-original-title="Susan Redwood"
                      data-kt-initialized={1}
                    >
                      <span className="symbol-label bg-primary text-inverse-primary fw-bold">
                        S
                      </span>
                    </div>
                    {/*begin::User*/}
                  </div>
                  {/*end::Users*/}
                </div>
                {/*end:: Card body*/}
              </a>
              {/*end::Card*/}
            </div>
          </>;
        })}
      </div>
    </div>
  );
};

export default ProjectsComponent;
