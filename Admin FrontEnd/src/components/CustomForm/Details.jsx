import React from 'react'
const Details = () => {

    return (
        <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
            {/* <!--begin::Page--> */}
            <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
                {/* <!--begin::Wrapper--> */}
                <div class="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">

                    {/* <!--begin::Main--> */}
                    <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
                        {/* <!--begin::Content wrapper--> */}
                        <div class="d-flex flex-column flex-column-fluid">
                            {/* <!--begin::Content--> */}
                            <div id="kt_app_content" class="app-content flex-column-fluid">
                                {/* <!--begin::Content container--> */}
                                <div id="kt_app_content_container" class="app-container container-xxl">

                                    {/* <!--begin::Row--> */}
                                    <div class="row g-6 g-xl-9">
                                        {/* <!--begin::Col--> */}
                                        <div class="col-lg-6">
                                            {/* <!--begin::Card--> */}
                                            <div class="card card-flush h-lg-100">
                                                {/* <!--begin::Card header--> */}
                                                <div class="card-header mt-6">
                                                    {/* <!--begin::Card title--> */}
                                                    <div class="card-title flex-column">
                                                        <h3 class="fw-bold mb-1 text-primary">Title</h3>
                                                    </div>
                                                    {/* <!--end::Card title--> */}
                                                </div>
                                                {/* <!--end::Card toolbar--> */}
                                                {/* <!--begin::Card body--> */}
                                                <div class="card-body d-flex flex-column p-9 pt-3 mb-9">
                                                    {/* <!--begin::Item--> */}
                                                    <div class="d-flex align-items-center mb-5">
                                                        {/* <!--begin::Details--> */}
                                                        <div class="fw-semibold">
                                                            <div class="fs-5 fw-bold text-gray-900 "> Lorem ipsum dolor sit amet consectetur
                                                                adipisicing elit. Voluptatem esse ab tempore deleniti necessitatibus explicabo iure dolores id modi,
                                                                inventore fugit quam, nobis unde dicta, enim ad odit aliquam dignissimos? </div>
                                                        </div>
                                                        {/* <!--end::Details--> */}
                                                    </div>
                                                    {/* <!--end::Item--> */}
                                                </div>
                                                {/* <!--end::Card body--> */}
                                                {/* <!--begin::Actions--> */}
                                                <div className="d-flex flex-stack">
                                                    <button type="button" className="btn btn-lg btn-primary" data-kt-element="settings-next">
                                                        <span className="indicator-label">Edit</span>
                                                    </button>
                                                </div>
                                                {/* <!--end::Actions--> */}
                                            </div>
                                            {/* <!--end::Card--> */}
                                        </div>
                                        {/* <!--end::Col--> */}
                                        {/* <!--begin::Col--> */}
                                        <div class="col-lg-6">
                                            {/* <!--begin::Card--> */}
                                            <div class="card card-flush h-lg-100">
                                                {/* <!--begin::Card header--> */}
                                                <div class="card-header mt-6">
                                                    {/* <!--begin::Card title--> */}
                                                    <div class="card-title flex-column">
                                                        <h3 class="fw-bold mb-1">Related Files</h3>
                                                        <div class="fs-6 text-gray-400">Total 382 fiels</div>
                                                    </div>
                                                    {/* <!--end::Card title--> */}
                                                    {/* <!--begin::Card toolbar--> */}
                                                    <div class="card-toolbar">
                                                        <a href="#" class="btn btn-bg-light btn-active-color-primary btn-sm">View All</a>
                                                    </div>
                                                    {/* <!--end::Card toolbar--> */}
                                                </div>
                                                {/* <!--end::Card header--> */}
                                                {/* <!--begin::Card body--> */}
                                                <div class="card-body p-9 pt-3">
                                                    {/* <!--begin::Files--> */}
                                                    <div class="d-flex flex-column mb-9">
                                                        {/* <!--begin::File--> */}
                                                        <div class="d-flex align-items-center mb-5">
                                                            {/* <!--begin::Icon--> */}
                                                            <div class="symbol symbol-30px me-5">
                                                                <img alt="Icon" src="assets/media/svg/files/pdf.svg" />
                                                            </div>
                                                            {/* <!--end::Icon--> */}
                                                            {/* <!--begin::Details--> */}
                                                            <div class="fw-semibold">
                                                                <a class="fs-6 fw-bold text-dark text-hover-primary" href="#">Project tech requirements</a>
                                                                <div class="text-gray-400">2 days ago
                                                                    <a href="#">Karina Clark</a></div>
                                                            </div>
                                                            {/* <!--end::Details--> */}
                                                            {/* <!--begin::Menu--> */}
                                                            <button type="button" class="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                                {/* <!--begin::Svg Icon | path: icons/duotune/general/gen024.svg--> */}
                                                                <span class="svg-icon svg-icon-3">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                            <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                                                                            <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                            <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                            <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                        </g>
                                                                    </svg>
                                                                </span>
                                                                {/* <!--end::Svg Icon--> */}
                                                            </button>
                                                            {/* <!--begin::Menu 1--> */}
                                                            <div class="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_63d92467d17c0">
                                                                {/* <!--begin::Header--> */}
                                                                <div class="px-7 py-5">
                                                                    <div class="fs-5 text-dark fw-bold">Filter Options</div>
                                                                </div>
                                                                {/* <!--end::Header--> */}
                                                                {/* <!--begin::Menu separator--> */}
                                                                <div class="separator border-gray-200"></div>
                                                                {/* <!--end::Menu separator--> */}
                                                                {/* <!--begin::Form--> */}
                                                                <div class="px-7 py-5">
                                                                    {/* <!--begin::Input group--> */}
                                                                    <div class="mb-10">
                                                                        {/* <!--begin::Label--> */}
                                                                        <label class="form-label fw-semibold">Status:</label>
                                                                        {/* <!--end::Label--> */}
                                                                    </div>
                                                                    {/* <!--end::Input group--> */}
                                                                    {/* <!--begin::Input group--> */}
                                                                    <div class="mb-10">
                                                                        {/* <!--begin::Label--> */}
                                                                        <label class="form-label fw-semibold">Member Type:</label>
                                                                        {/* <!--end::Label--> */}
                                                                        {/* <!--begin::Options--> */}
                                                                        <div class="d-flex">
                                                                            {/* <!--begin::Options--> */}
                                                                            <label class="form-check form-check-sm form-check-custom form-check-solid me-5">
                                                                                <input class="form-check-input" type="checkbox" value="1" />
                                                                                <span class="form-check-label">Author</span>
                                                                            </label>
                                                                            {/* <!--end::Options--> */}
                                                                            {/* <!--begin::Options--> */}
                                                                            <label class="form-check form-check-sm form-check-custom form-check-solid">
                                                                                <input class="form-check-input" type="checkbox" value="2" checked="checked" />
                                                                                <span class="form-check-label">Customer</span>
                                                                            </label>
                                                                            {/* <!--end::Options--> */}
                                                                        </div>
                                                                        {/* <!--end::Options--> */}
                                                                    </div>
                                                                    {/* <!--end::Input group--> */}
                                                                    {/* <!--begin::Input group--> */}
                                                                    <div class="mb-10">
                                                                        {/* <!--begin::Label--> */}
                                                                        <label class="form-label fw-semibold">Notifications:</label>
                                                                        {/* <!--end::Label--> */}
                                                                        {/* <!--begin::Switch--> */}
                                                                        <div class="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                                                                            <input class="form-check-input" type="checkbox" value="" name="notifications" checked="checked" />
                                                                            <label class="form-check-label">Enabled</label>
                                                                        </div>
                                                                        {/* <!--end::Switch--> */}
                                                                    </div>
                                                                    {/* <!--end::Input group--> */}
                                                                    {/* <!--begin::Actions--> */}
                                                                    <div class="d-flex justify-content-end">
                                                                        <button type="reset" class="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
                                                                        <button type="submit" class="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
                                                                    </div>
                                                                    {/* <!--end::Actions--> */}
                                                                </div>
                                                                {/* <!--end::Form--> */}
                                                            </div>
                                                            {/* <!--end::Menu 1--> */}
                                                            {/* <!--end::Menu--> */}
                                                        </div>
                                                        {/* <!--end::File--> */}
                                                        {/* <!--begin::File--> */}
                                                        <div class="d-flex align-items-center mb-5">
                                                            {/* <!--begin::Icon--> */}
                                                            <div class="symbol symbol-30px me-5">
                                                                <img alt="Icon" src="assets/media/svg/files/doc.svg" />
                                                            </div>
                                                            {/* <!--end::Icon--> */}
                                                            {/* <!--begin::Details--> */}
                                                            <div class="fw-semibold">
                                                                <a class="fs-6 fw-bold text-dark text-hover-primary" href="#">Create FureStibe branding proposal</a>
                                                                <div class="text-gray-400">Due in 1 day
                                                                    <a href="#">Marcus Blake</a></div>
                                                            </div>
                                                            {/* <!--end::Details--> */}
                                                            {/* <!--begin::Menu--> */}
                                                            <button type="button" class="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                                {/* <!--begin::Svg Icon | path: icons/duotune/general/gen024.svg--> */}
                                                                <span class="svg-icon svg-icon-3">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                            <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                                                                            <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                            <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                            <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                        </g>
                                                                    </svg>
                                                                </span>
                                                                {/* <!--end::Svg Icon--> */}
                                                            </button>
                                                            {/* <!--begin::Menu 1--> */}
                                                            <div class="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_63d92467d17e7">
                                                                {/* <!--begin::Header--> */}
                                                                <div class="px-7 py-5">
                                                                    <div class="fs-5 text-dark fw-bold">Filter Options</div>
                                                                </div>
                                                                {/* <!--end::Header--> */}
                                                                {/* <!--begin::Menu separator--> */}
                                                                <div class="separator border-gray-200"></div>
                                                                {/* <!--end::Menu separator--> */}
                                                                {/* <!--begin::Form--> */}
                                                                <div class="px-7 py-5">
                                                                    {/* <!--begin::Input group--> */}
                                                                    <div class="mb-10">
                                                                        {/* <!--begin::Label--> */}
                                                                        <label class="form-label fw-semibold">Status:</label>
                                                                        {/* <!--end::Label--> */}
                                                                    </div>
                                                                    {/* <!--end::Input group--> */}
                                                                    {/* <!--begin::Input group--> */}
                                                                    <div class="mb-10">
                                                                        {/* <!--begin::Label--> */}
                                                                        <label class="form-label fw-semibold">Member Type:</label>
                                                                        {/* <!--end::Label--> */}
                                                                        {/* <!--begin::Options--> */}
                                                                        <div class="d-flex">
                                                                            {/* <!--begin::Options--> */}
                                                                            <label class="form-check form-check-sm form-check-custom form-check-solid me-5">
                                                                                <input class="form-check-input" type="checkbox" value="1" />
                                                                                <span class="form-check-label">Author</span>
                                                                            </label>
                                                                            {/* <!--end::Options--> */}
                                                                            {/* <!--begin::Options--> */}
                                                                            <label class="form-check form-check-sm form-check-custom form-check-solid">
                                                                                <input class="form-check-input" type="checkbox" value="2" checked="checked" />
                                                                                <span class="form-check-label">Customer</span>
                                                                            </label>
                                                                            {/* <!--end::Options--> */}
                                                                        </div>
                                                                        {/* <!--end::Options--> */}
                                                                    </div>
                                                                    {/* <!--end::Input group--> */}
                                                                    {/* <!--begin::Input group--> */}
                                                                    <div class="mb-10">
                                                                        {/* <!--begin::Label--> */}
                                                                        <label class="form-label fw-semibold">Notifications:</label>
                                                                        {/* <!--end::Label--> */}
                                                                        {/* <!--begin::Switch--> */}
                                                                        <div class="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                                                                            <input class="form-check-input" type="checkbox" value="" name="notifications" checked="checked" />
                                                                            <label class="form-check-label">Enabled</label>
                                                                        </div>
                                                                        {/* <!--end::Switch--> */}
                                                                    </div>
                                                                    {/* <!--end::Input group--> */}
                                                                    {/* <!--begin::Actions--> */}
                                                                    <div class="d-flex justify-content-end">
                                                                        <button type="reset" class="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
                                                                        <button type="submit" class="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
                                                                    </div>
                                                                    {/* <!--end::Actions--> */}
                                                                </div>
                                                                {/* <!--end::Form--> */}
                                                            </div>
                                                            {/* <!--end::Menu 1--> */}
                                                            {/* <!--end::Menu--> */}
                                                        </div>
                                                        {/* <!--end::File--> */}
                                                        {/* <!--begin::File--> */}
                                                        <div class="d-flex align-items-center mb-5">
                                                            {/* <!--begin::Icon--> */}
                                                            <div class="symbol symbol-30px me-5">
                                                                <img alt="Icon" src="assets/media/svg/files/css.svg" />
                                                            </div>
                                                            {/* <!--end::Icon--> */}
                                                            {/* <!--begin::Details--> */}
                                                            <div class="fw-semibold">
                                                                <a class="fs-6 fw-bold text-dark text-hover-primary" href="#">Completed Project Stylings</a>
                                                                <div class="text-gray-400">Due in 1 day
                                                                    <a href="#">Terry Barry</a></div>
                                                            </div>
                                                            {/* <!--end::Details--> */}
                                                            {/* <!--begin::Menu--> */}
                                                            <button type="button" class="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                                {/* <!--begin::Svg Icon | path: icons/duotune/general/gen024.svg--> */}
                                                                <span class="svg-icon svg-icon-3">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                            <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                                                                            <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                            <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                            <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                        </g>
                                                                    </svg>
                                                                </span>
                                                                {/* <!--end::Svg Icon--> */}
                                                            </button>
                                                            {/* <!--begin::Menu 1--> */}
                                                            <div class="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_63d92467d1808">
                                                                {/* <!--begin::Header--> */}
                                                                <div class="px-7 py-5">
                                                                    <div class="fs-5 text-dark fw-bold">Filter Options</div>
                                                                </div>
                                                                {/* <!--end::Header--> */}
                                                                {/* <!--begin::Menu separator--> */}
                                                                <div class="separator border-gray-200"></div>
                                                                {/* <!--end::Menu separator--> */}
                                                                {/* <!--begin::Form--> */}
                                                                <div class="px-7 py-5">
                                                                    {/* <!--begin::Input group--> */}
                                                                    <div class="mb-10">
                                                                        {/* <!--begin::Label--> */}
                                                                        <label class="form-label fw-semibold">Status:</label>
                                                                        {/* <!--end::Label--> */}
                                                                    </div>
                                                                    {/* <!--end::Input group--> */}
                                                                    {/* <!--begin::Input group--> */}
                                                                    <div class="mb-10">
                                                                        {/* <!--begin::Label--> */}
                                                                        <label class="form-label fw-semibold">Member Type:</label>
                                                                        {/* <!--end::Label--> */}
                                                                        {/* <!--begin::Options--> */}
                                                                        <div class="d-flex">
                                                                            {/* <!--begin::Options--> */}
                                                                            <label class="form-check form-check-sm form-check-custom form-check-solid me-5">
                                                                                <input class="form-check-input" type="checkbox" value="1" />
                                                                                <span class="form-check-label">Author</span>
                                                                            </label>
                                                                            {/* <!--end::Options--> */}
                                                                            {/* <!--begin::Options--> */}
                                                                            <label class="form-check form-check-sm form-check-custom form-check-solid">
                                                                                <input class="form-check-input" type="checkbox" value="2" checked="checked" />
                                                                                <span class="form-check-label">Customer</span>
                                                                            </label>
                                                                            {/* <!--end::Options--> */}
                                                                        </div>
                                                                        {/* <!--end::Options--> */}
                                                                    </div>
                                                                    {/* <!--end::Input group--> */}
                                                                    {/* <!--begin::Input group--> */}
                                                                    <div class="mb-10">
                                                                        {/* <!--begin::Label--> */}
                                                                        <label class="form-label fw-semibold">Notifications:</label>
                                                                        {/* <!--end::Label--> */}
                                                                        {/* <!--begin::Switch--> */}
                                                                        <div class="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                                                                            <input class="form-check-input" type="checkbox" value="" name="notifications" checked="checked" />
                                                                            <label class="form-check-label">Enabled</label>
                                                                        </div>
                                                                        {/* <!--end::Switch--> */}
                                                                    </div>
                                                                    {/* <!--end::Input group--> */}
                                                                    {/* <!--begin::Actions--> */}
                                                                    <div class="d-flex justify-content-end">
                                                                        <button type="reset" class="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
                                                                        <button type="submit" class="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
                                                                    </div>
                                                                    {/* <!--end::Actions--> */}
                                                                </div>
                                                                {/* <!--end::Form--> */}
                                                            </div>
                                                            {/* <!--end::Menu 1--> */}
                                                            {/* <!--end::Menu--> */}
                                                        </div>
                                                        {/* <!--end::File--> */}
                                                        {/* <!--begin::File--> */}
                                                        <div class="d-flex align-items-center">
                                                            {/* <!--begin::Icon--> */}
                                                            <div class="symbol symbol-30px me-5">
                                                                <img alt="Icon" src="assets/media/svg/files/ai.svg" />
                                                            </div>
                                                            {/* <!--end::Icon--> */}
                                                            {/* <!--begin::Details--> */}
                                                            <div class="fw-semibold">
                                                                <a class="fs-6 fw-bold text-dark text-hover-primary" href="#">Create Project Wireframes</a>
                                                                <div class="text-gray-400">Due in 3 days
                                                                    <a href="#">Roth Bloom</a></div>
                                                            </div>
                                                            {/* <!--end::Details--> */}
                                                            {/* <!--begin::Menu--> */}
                                                            <button type="button" class="btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary ms-auto" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                                {/* <!--begin::Svg Icon | path: icons/duotune/general/gen024.svg--> */}
                                                                <span class="svg-icon svg-icon-3">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                            <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                                                                            <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                            <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                            <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                        </g>
                                                                    </svg>
                                                                </span>
                                                                {/* <!--end::Svg Icon--> */}
                                                            </button>
                                                            {/* <!--begin::Menu 1--> */}
                                                            <div class="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_63d92467d1829">
                                                                {/* <!--begin::Header--> */}
                                                                <div class="px-7 py-5">
                                                                    <div class="fs-5 text-dark fw-bold">Filter Options</div>
                                                                </div>
                                                                {/* <!--end::Header--> */}
                                                                {/* <!--begin::Menu separator--> */}
                                                                <div class="separator border-gray-200"></div>
                                                                {/* <!--end::Menu separator--> */}
                                                                {/* <!--begin::Form--> */}
                                                                <div class="px-7 py-5">
                                                                    {/* <!--begin::Input group--> */}
                                                                    <div class="mb-10">
                                                                        {/* <!--begin::Label--> */}
                                                                        <label class="form-label fw-semibold">Status:</label>
                                                                        {/* <!--end::Label--> */}
                                                                    </div>
                                                                    {/* <!--end::Input group--> */}
                                                                    {/* <!--begin::Input group--> */}
                                                                    <div class="mb-10">
                                                                        {/* <!--begin::Label--> */}
                                                                        <label class="form-label fw-semibold">Member Type:</label>
                                                                        {/* <!--end::Label--> */}
                                                                        {/* <!--begin::Options--> */}
                                                                        <div class="d-flex">
                                                                            {/* <!--begin::Options--> */}
                                                                            <label class="form-check form-check-sm form-check-custom form-check-solid me-5">
                                                                                <input class="form-check-input" type="checkbox" value="1" />
                                                                                <span class="form-check-label">Author</span>
                                                                            </label>
                                                                            {/* <!--end::Options--> */}
                                                                            {/* <!--begin::Options--> */}
                                                                            <label class="form-check form-check-sm form-check-custom form-check-solid">
                                                                                <input class="form-check-input" type="checkbox" value="2" checked="checked" />
                                                                                <span class="form-check-label">Customer</span>
                                                                            </label>
                                                                            {/* <!--end::Options--> */}
                                                                        </div>
                                                                        {/* <!--end::Options--> */}
                                                                    </div>
                                                                    {/* <!--end::Input group--> */}
                                                                    {/* <!--begin::Input group--> */}
                                                                    <div class="mb-10">
                                                                        {/* <!--begin::Label--> */}
                                                                        <label class="form-label fw-semibold">Notifications:</label>
                                                                        {/* <!--end::Label--> */}
                                                                        {/* <!--begin::Switch--> */}
                                                                        <div class="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                                                                            <input class="form-check-input" type="checkbox" value="" name="notifications" checked="checked" />
                                                                            <label class="form-check-label">Enabled</label>
                                                                        </div>
                                                                        {/* <!--end::Switch--> */}
                                                                    </div>
                                                                    {/* <!--end::Input group--> */}
                                                                    {/* <!--begin::Actions--> */}
                                                                    <div class="d-flex justify-content-end">
                                                                        <button type="reset" class="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
                                                                        <button type="submit" class="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
                                                                    </div>
                                                                    {/* <!--end::Actions--> */}
                                                                </div>
                                                                {/* <!--end::Form--> */}
                                                            </div>
                                                            {/* <!--end::Menu 1--> */}
                                                            {/* <!--end::Menu--> */}
                                                        </div>
                                                        {/* <!--end::File--> */}
                                                    </div>
                                                    {/* <!--end::Files--> */}
                                                </div>
                                                {/* <!--end::Card body --> */}
                                            </div>
                                            {/* <!--end::Card--> */}
                                        </div>
                                        {/* <!--end::Col--> */}

                                    </div>
                                    {/* <!--end::Row--> */}
                                    {/* <!--end::Card--> */}
                                </div>
                                {/* <!--end::Content container--> */}
                            </div>
                            {/* <!--end::Content--> */}
                        </div>
                        {/* <!--end::Content wrapper--> */}
                        {/* <!--begin::Footer--> */}
                        <div id="kt_app_footer" class="app-footer">
                            {/* <!--begin::Footer container--> */}
                            <div class="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
                                {/* <!--begin::Copyright--> */}
                                <div class="text-dark order-2 order-md-1">
                                    <span class="text-muted fw-semibold me-1">2023&copy;</span>
                                    <a href="https://keenthemes.com" target="_blank" class="text-gray-800 text-hover-primary">Keenthemes</a>
                                </div>
                                {/* <!--end::Copyright--> */}
                                {/* <!--begin::Menu--> */}
                                <ul class="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                                    <li class="menu-item">
                                        <a href="https://keenthemes.com" target="_blank" class="menu-link px-2">About</a>
                                    </li>
                                    <li class="menu-item">
                                        <a href="https://devs.keenthemes.com" target="_blank" class="menu-link px-2">Support</a>
                                    </li>
                                    <li class="menu-item">
                                        <a href="https://themes.getbootstrap.com/product/keen-the-ultimate-bootstrap-admin-theme/" target="_blank" class="menu-link px-2">Purchase</a>
                                    </li>
                                </ul>
                                {/* <!--end::Menu--> */}
                            </div>
                            {/* <!--end::Footer container--> */}
                        </div>
                        {/* <!--end::Footer--> */}
                    </div>
                    {/* <!--end:::Main--> */}
                </div>
                {/* <!--end::Wrapper--> */}
            </div>
            {/* <!--end::Page--> */}
        </div >
    )
}

export default Details