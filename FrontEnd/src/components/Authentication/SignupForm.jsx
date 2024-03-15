import { useEffect } from 'react';
const SignupForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    const script1 = document.createElement('script');
    const script2 = document.createElement('script');
    script.src = "assets/js/custom/authentication/sign-up/general.js"
    script.async = true;
    script1.src = "assets/js/scripts.bundle.js"
    script1.async = true;
    script2.src = "assets/plugins/global/plugins.bundle.js"
    script2.async = true;
    document.body.appendChild(script);
    document.body.appendChild(script1);
    document.body.appendChild(script2);
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    }
  }, [])
  return (

    <div className="d-flex flex-column flex-lg-row flex-column-fluid">
      {/* begin::Aside */}
      <div className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center" style={{ backgroundImage: `url(assets/media/misc/auth-bg.png)` }}>
        {/* begin::Content */}
        <div className="d-flex flex-column flex-center p-6 p-lg-10 w-100">
          {/* begin::Logo */}
          <a href="../../demo1/dist/index.html" className="mb-0 mb-lg-20">
            <img alt="Logo" src="assets/media/logos/default-white.svg" className="h-40px h-lg-50px" />
          </a>
          {/* end::Logo */}
          {/* begin::Image */}
          <img className="d-none d-lg-block mx-auto w-300px w-lg-75 w-xl-500px mb-10 mb-lg-20" src="assets/media/misc/auth-screens.png" alt="" />
          {/* end::Image */}
          {/* begin::Title */}
          <h1 className="d-none d-lg-block text-white fs-2qx fw-bold text-center mb-7">Fast, Efficient and Productive</h1>
          {/* end::Title */}
          {/* begin::Text */}
          <div className="d-none d-lg-block text-white fs-base text-center">In this kind of post,
            <a href="#" className="opacity-75-hover text-warning fw-semibold me-1">the blogger</a>introduces a person they’ve interviewed
            <br />and provides some background information about
            <a href="#" className="opacity-75-hover text-warning fw-semibold me-1">the interviewee</a>and their
            <br />work following this is a transcript of the interview.</div>
          {/* end::Text */}
        </div>
        {/* end::Content */}
      </div>
      {/* begin::Aside */}
      {/* begin::Body */}
      <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10">
        {/* begin::Form */}
        <div className="d-flex flex-center flex-column flex-lg-row-fluid">
          {/* begin::Wrapper */}
          <div className="w-lg-500px p-10">
            {/* begin::Form */}
            <form className="form w-100" noValidate="novalidate" id="kt_sign_up_form" data-kt-redirect-url="../../demo1/dist/authentication/layouts/corporate/sign-in.html" action="#">
              {/* begin::Heading */}
              <div className="text-center mb-11">
                {/* begin::Title */}
                <h1 className="text-dark fw-bolder mb-3">Sign Up</h1>
                {/* end::Title */}
                {/* begin::Subtitle */}
                <div className="text-gray-500 fw-semibold fs-6">Your Social Campaigns</div>
                {/* end::Subtitle= */}
              </div>
              {/* begin::Heading */}
              {/* begin::Login options */}
              <div className="row g-3 mb-9">
                {/* begin::Col */}
                <div className="col-md-6">
                  {/* begin::Google link= */}
                  <a href="#" className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                    <img alt="Logo" src="assets/media/svg/brand-logos/google-icon.svg" className="h-15px me-3" />Sign in with Google</a>
                  {/* end::Google link= */}
                </div>
                {/* end::Col */}
                {/* begin::Col */}
                <div className="col-md-6">
                  {/* begin::Google link= */}
                  <a href="#" className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                    <img alt="Logo" src="assets/media/svg/brand-logos/apple-black.svg" className="theme-light-show h-15px me-3" />
                    <img alt="Logo" src="assets/media/svg/brand-logos/apple-black-dark.svg" className="theme-dark-show h-15px me-3" />Sign in with Apple</a>
                  {/* end::Google link= */}
                </div>
                {/* end::Col */}
              </div>
              {/* end::Login options */}
              {/* begin::Separator */}
              <div className="separator separator-content my-14">
                <span className="w-125px text-gray-500 fw-semibold fs-7">Or with email</span>
              </div>
              {/* end::Separator */}
              {/* begin::Input group= */}
              <div className="fv-row mb-8">
                {/* begin::Email */}
                <input type="text" placeholder="Email" name="email" autoComplete="off" className="form-control bg-transparent" />
                {/* end::Email */}
              </div>
              {/* begin::Input group */}
              <div className="fv-row mb-8" data-kt-password-meter="true">
                {/* begin::Wrapper */}
                <div className="mb-1">
                  {/* begin::Input wrapper */}
                  <div className="position-relative mb-3">
                    <input className="form-control bg-transparent" type="password" placeholder="Password" name="password" autoComplete="off" />
                    <span className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2" data-kt-password-meter-control="visibility">
                      <i className="bi bi-eye-slash fs-2"></i>
                      <i className="bi bi-eye fs-2 d-none"></i>
                    </span>
                  </div>
                  {/* end::Input wrapper */}
                  {/* begin::Meter */}
                  <div className="d-flex align-items-center mb-3" data-kt-password-meter-control="highlight">
                    <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                    <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                    <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                    <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
                  </div>
                  {/* end::Meter */}
                </div>
                {/* end::Wrapper */}
                {/* begin::Hint */}
                <div className="text-muted">Use 8 or more characters with a mix of letters, numbers & symbols.</div>
                {/* end::Hint */}
              </div>
              {/* end::Input group= */}
              {/* end::Input group= */}
              <div className="fv-row mb-8">
                {/* begin::Repeat Password */}
                <input placeholder="Repeat Password" name="confirm-password" type="password" autoComplete="off" className="form-control bg-transparent" />
                {/* end::Repeat Password */}
              </div>
              {/* end::Input group= */}
              {/* begin::Accept */}
              <div className="fv-row mb-8">
                <label className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" name="toc" value="1" />
                  <span className="form-check-label fw-semibold text-gray-700 fs-base ms-1">I Accept the
                    <a href="#" className="ms-1 link-primary">Terms</a></span>
                </label>
              </div>
              {/* end::Accept */}
              {/* begin::Submit button */}
              <div className="d-grid mb-10">
                <button type="submit" id="kt_sign_up_submit" className="btn btn-primary">
                  {/* begin::Indicator label */}
                  <span className="indicator-label">Sign up</span>
                  {/* end::Indicator label */}
                  {/* begin::Indicator progress */}
                  <span className="indicator-progress">Please wait...
                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                  {/* end::Indicator progress */}
                </button>
              </div>
              {/* end::Submit button */}
              {/* begin::Sign up */}
              <div className="text-gray-500 text-center fw-semibold fs-6">Already have an Account?
                <a href="../../demo1/dist/authentication/layouts/corporate/sign-in.html" className="link-primary fw-semibold">Sign in</a></div>
              {/* end::Sign up */}
            </form>
            {/* end::Form */}
          </div>
          {/* end::Wrapper */}
        </div>
        {/* end::Form */}
        {/* begin::Footer */}
        <div className="d-flex flex-center flex-wrap px-5">
          {/* begin::Links */}
          <div className="d-flex fw-semibold text-primary fs-base">
            <a href="https://keenthemes.com" className="px-5" target="_blank">Terms</a>
            <a href="https://devs.keenthemes.com" className="px-5" target="_blank">Plans</a>
            <a href="https://themes.getbootstrap.com/product/keen-the-ultimate-bootstrap-admin-theme/" className="px-5" target="_blank">Contact Us</a>
          </div>
          {/* end::Links */}
        </div>
        {/* end::Footer */}
      </div>
      {/* end::Body */}
    </div>

  )
}

export default SignupForm;
