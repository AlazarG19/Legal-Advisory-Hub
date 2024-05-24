import React from 'react';

const categories = [
  'Criminal',
  'Civil',
  'Family',
  'Employment',
  'Contract',
  'Intellectual Property',
  'Constitutional',
  'Administrative',
  'Real Estate',
  'Tort',
];

function CategoriesSection() {
  return (
    <div
      className="d-lg-flex flex-column flex-lg-row-auto w-lg-325px"
      data-kt-drawer="true"
      data-kt-drawer-name="end-sidebar"
      data-kt-drawer-activate="{default: true, lg: false}"
      data-kt-drawer-overlay="true"
      data-kt-drawer-width="{default:'200px', '250px': '300px'}"
      data-kt-drawer-direction="end"
      data-kt-drawer-toggle="#kt_social_end_sidebar_toggle"
    >
      <div className="card mb-5 mb-xl-8">
        <div className="card-header border-0 pt-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bold text-dark">Categories</span>
            <span className="text-muted mt-1 fw-semibold fs-7">Recommended Topics</span>
          </h3>
        </div>

        <div className="card-body pt-2">
          {categories.map((item, index) => (
            <div key={index}>
              <div className="d-flex flex-stack py-3">
                <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                  <div className="flex-grow-1 me-3">
                    <a className="text-gray-800 text-hover-primary fs-6 fw-bold">{item}</a>
                  </div>
                  <a
                    href="../../demo1/dist/pages/user-profile/overview.html"
                    className="btn btn-sm btn-light fs-8 fw-bold"
                  >
                    {'-'}
                  </a>
                </div>
              </div>
              {index !== categories.length - 1 && (
                <div className="separator separator-dashed my-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoriesSection;