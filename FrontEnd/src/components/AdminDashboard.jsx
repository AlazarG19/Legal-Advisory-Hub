import React from 'react';
import Content from './Content';
import Header from './Header';
import Navigation from './Navigation';

const Dashboard = () => {
  return (< div id="kt_app_content_container" class="app-container container-fluid" >
    <Navigation />
    {/* <!--begin::Row--> */}
    <div class="row gx-5 gx-xl-10">
      {/* <!--begin::Col--> */}
      <div class="col-xl-6 mb-5 mb-xl-10">
        {/* <!--begin::Chart widget 36--> */}
        <div class="card card-flush overflow-hidden h-xl-100">
          {/* <!--begin::Header--> */}
          <div class="card-header pt-5">
            {/* <!--begin::Title--> */}
            <h3 class="card-title align-items-start flex-column">
              <span class="card-label fw-bold text-dark">Performance</span>
            </h3>
            {/* <!--end::Title--> */}
          </div>
          {/* <!--end::Header--> */}
          {/* <!--begin::Card body--> */}
          <div class="card-body d-flex align-items-end p-0">
            {/* <!--begin::Chart--> */}
            <div id="kt_charts_widget_36" class="min-h-auto w-100 ps-4 pe-6" ></div>
            {/* <!--end::Chart--> */}
          </div>
          {/* <!--end::Card body--> */}
        </div>
        {/* <!--end::Chart widget 36--> */}
      </div>
      {/* <!--end::Col--> */}
    </div>
    {/* <!--end::Row--> */}
    {/* <!--begin::Row--> */}
    <div class="row g-5 g-xl-10 mb-5 mb-xl-10">
      {/* <!--begin::Col--> */}
      <div class="col-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
        {/* <!--begin::Card widget 17--> */}
        <div class="card card-flush h-md-50 mb-5 mb-xl-10">
          {/* <!--begin::Header--> */}
          <div class="card-header pt-5">
            {/* <!--begin::Title--> */}
            <div class="card-title d-flex flex-column">
              {/* <!--begin::Info--> */}
              <div class="d-flex align-items-center">
                {/* <!--begin::Currency--> */}
                {/* <!--end::Currency--> */}
                {/* <!--begin::Amount--> */}
                <span class="fs-2hx fw-bold text-dark me-2 lh-1 ls-n2">69,700</span>
                {/* <!--end::Amount--> */}
              </div>
              {/* <!--end::Info--> */}
              {/* <!--begin::Subtitle--> */}
              <span class="text-gray-400 pt-10 fw-semibold fs-6 ">Total Users</span>
              {/* <!--end::Subtitle--> */}
            </div>
            {/* <!--end::Title--> */}
          </div>
          {/* <!--end::Header--> */}
          {/* <!--begin::Card body--> */}
          <div class="card-body pt-20 pb-4 d-flex flex-wrap align-items-center">
            {/* <!--begin::Chart--> */}
            <div class="d-flex flex-center me-5 pt-2">
              <div id="kt_card_widget_17_chart" data-kt-size="70" data-kt-line="11"></div>
            </div>
            {/* <!--end::Chart--> */}
            {/* <!--begin::Labels--> */}
            <div class="d-flex flex-column content-justify-center flex-row-fluid">
              {/* <!--begin::Label--> */}
              <div class="d-flex fw-semibold align-items-center">
                {/* <!--begin::Bullet--> */}
                <div class="bullet w-8px h-3px rounded-2 bg-success me-3"></div>
                {/* <!--end::Bullet--> */}
                {/* <!--begin::Label--> */}
                <div class="text-gray-500 flex-grow-1 me-4">Freelancers</div>
                {/* <!--end::Label--> */}
                {/* <!--begin::Stats--> */}
                <div class="fw-bolder text-gray-700 text-xxl-end">10000</div>
                {/* <!--end::Stats--> */}
              </div>
              {/* <!--end::Label--> */}
              {/* <!--begin::Label--> */}
              <div class="d-flex fw-semibold align-items-center my-3">
                {/* <!--begin::Bullet--> */}
                <div class="bullet w-8px h-3px rounded-2 bg-primary me-3"></div>
                {/* <!--end::Bullet--> */}
                {/* <!--begin::Label--> */}
                <div class="text-gray-500 flex-grow-1 me-4">Individuals with Legal Issues</div>
                {/* <!--end::Label--> */}
                {/* <!--begin::Stats--> */}
                <div class="fw-bolder text-gray-700 text-xxl-end">$2,820</div>
                {/* <!--end::Stats--> */}
              </div>
              {/* <!--end::Label--> */}
              {/* <!--begin::Label--> */}
              <div class="d-flex fw-semibold align-items-center">
                {/* <!--begin::Bullet--> */}
                <div class="bullet w-8px h-3px rounded-2 me-3" ></div>
                {/* <!--end::Bullet--> */}
                {/* <!--begin::Label--> */}
                <div class="text-gray-500 flex-grow-1 me-4">Admins</div>
                {/* <!--end::Label--> */}
                {/* <!--begin::Stats--> */}
                <div class="fw-bolder text-gray-700 text-xxl-end">$45,257</div>
                {/* <!--end::Stats--> */}
              </div>
              {/* <!--end::Label--> */}
            </div>
            {/* <!--end::Labels--> */}
          </div>
          {/* <!--end::Card body--> */}
        </div>
        {/* <!--end::Card widget 17--> */}
      </div>
      {/* <!--end::Col--> */}
      {/* <!--begin::Col--> */}
      <div class="col-6">
        {/* <!--begin::Tables widget 16--> */}
        {/* <!--begin::List widget 25--> */}
        <div class="card card-flush h-lg-50">
          {/* <!--begin::Header--> */}
          <div class="card-header pt-5">
            {/* <!--begin::Title--> */}
            <h3 class="card-title text-gray-800">Highlights</h3>
            {/* <!--end::Title--> */}
            {/* <!--begin::Toolbar--> */}
            <div class="card-toolbar d-none">
              {/* <!--begin::Daterangepicker(defined in src/js/layout/app.js)--> */}
              <div data-kt-daterangepicker="true" data-kt-daterangepicker-opens="left" class="btn btn-sm btn-light d-flex align-items-center px-4">
                {/* <!--begin::Display range--> */}
                <div class="text-gray-600 fw-bold">Loading date range...</div>
                {/* <!--end::Display range--> */}
                {/* <!--begin::Svg Icon | path: icons/duotune/general/gen014.svg--> */}
                <span class="svg-icon svg-icon-1 ms-2 me-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.3" d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z" fill="currentColor" />
                    <path d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z" fill="currentColor" />
                    <path d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z" fill="currentColor" />
                  </svg>
                </span>
                {/* <!--end::Svg Icon--> */}
              </div>
              {/* <!--end::Daterangepicker--> */}
            </div>
            {/* <!--end::Toolbar--> */}
          </div>
          {/* <!--end::Header--> */}
          {/* <!--begin::Body--> */}
          <div class="card-body pt-5">
            {/* <!--begin::Item--> */}
            <div class="d-flex flex-stack">
              {/* <!--begin::Section--> */}
              <div class="text-gray-700 fw-semibold fs-6 me-2">Avg. Client Rating</div>
              {/* <!--end::Section--> */}
              {/* <!--begin::Statistics--> */}
              <div class="d-flex align-items-senter">
                {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr094.svg--> */}
                <span class="svg-icon svg-icon-2 svg-icon-success me-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect opacity="0.5" x="16.9497" y="8.46448" width="13" height="2" rx="1" transform="rotate(135 16.9497 8.46448)" fill="currentColor" />
                    <path d="M14.8284 9.97157L14.8284 15.8891C14.8284 16.4749 15.3033 16.9497 15.8891 16.9497C16.4749 16.9497 16.9497 16.4749 16.9497 15.8891L16.9497 8.05025C16.9497 7.49797 16.502 7.05025 15.9497 7.05025L8.11091 7.05025C7.52512 7.05025 7.05025 7.52513 7.05025 8.11091C7.05025 8.6967 7.52512 9.17157 8.11091 9.17157L14.0284 9.17157C14.4703 9.17157 14.8284 9.52975 14.8284 9.97157Z" fill="currentColor" />
                  </svg>
                </span>
                {/* <!--end::Svg Icon--> */}
                {/* <!--begin::Number--> */}
                <span class="text-gray-900 fw-bolder fs-6">7.8</span>
                {/* <!--end::Number--> */}
                <span class="text-gray-400 fw-bold fs-6">/10</span>
              </div>
              {/* <!--end::Statistics--> */}
            </div>
            {/* <!--end::Item--> */}
            {/* <!--begin::Separator--> */}
            <div class="separator separator-dashed my-3"></div>
            {/* <!--end::Separator--> */}
            {/* <!--begin::Item--> */}
            <div class="d-flex flex-stack">
              {/* <!--begin::Section--> */}
              <div class="text-gray-700 fw-semibold fs-6 me-2">Avg. Quotes</div>
              {/* <!--end::Section--> */}
              {/* <!--begin::Statistics--> */}
              <div class="d-flex align-items-senter">
                {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr093.svg--> */}
                <span class="svg-icon svg-icon-2 svg-icon-danger me-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect opacity="0.5" x="7.05026" y="15.5355" width="13" height="2" rx="1" transform="rotate(-45 7.05026 15.5355)" fill="currentColor" />
                    <path d="M9.17158 14.0284L9.17158 8.11091C9.17158 7.52513 8.6967 7.05025 8.11092 7.05025C7.52513 7.05025 7.05026 7.52512 7.05026 8.11091L7.05026 15.9497C7.05026 16.502 7.49797 16.9497 8.05026 16.9497L15.8891 16.9497C16.4749 16.9497 16.9498 16.4749 16.9498 15.8891C16.9498 15.3033 16.4749 14.8284 15.8891 14.8284L9.97158 14.8284C9.52975 14.8284 9.17158 14.4703 9.17158 14.0284Z" fill="currentColor" />
                  </svg>
                </span>
                {/* <!--end::Svg Icon--> */}
                {/* <!--begin::Number--> */}
                <span class="text-gray-900 fw-bolder fs-6">730</span>
                {/* <!--end::Number--> */}
              </div>
              {/* <!--end::Statistics--> */}
            </div>
            {/* <!--end::Item--> */}
            {/* <!--begin::Separator--> */}
            <div class="separator separator-dashed my-3"></div>
            {/* <!--end::Separator--> */}
            {/* <!--begin::Item--> */}
            <div class="d-flex flex-stack">
              {/* <!--begin::Section--> */}
              <div class="text-gray-700 fw-semibold fs-6 me-2">Avg. Agent Earnings</div>
              {/* <!--end::Section--> */}
              {/* <!--begin::Statistics--> */}
              <div class="d-flex align-items-senter">
                {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr094.svg--> */}
                <span class="svg-icon svg-icon-2 svg-icon-success me-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect opacity="0.5" x="16.9497" y="8.46448" width="13" height="2" rx="1" transform="rotate(135 16.9497 8.46448)" fill="currentColor" />
                    <path d="M14.8284 9.97157L14.8284 15.8891C14.8284 16.4749 15.3033 16.9497 15.8891 16.9497C16.4749 16.9497 16.9497 16.4749 16.9497 15.8891L16.9497 8.05025C16.9497 7.49797 16.502 7.05025 15.9497 7.05025L8.11091 7.05025C7.52512 7.05025 7.05025 7.52513 7.05025 8.11091C7.05025 8.6967 7.52512 9.17157 8.11091 9.17157L14.0284 9.17157C14.4703 9.17157 14.8284 9.52975 14.8284 9.97157Z" fill="currentColor" />
                  </svg>
                </span>
                {/* <!--end::Svg Icon--> */}
                {/* <!--begin::Number--> */}
                <span class="text-gray-900 fw-bolder fs-6">$2,309</span>
                {/* <!--end::Number--> */}
              </div>
              {/* <!--end::Statistics--> */}
            </div>
            {/* <!--end::Item--> */}
          </div>
          {/* <!--end::Body--> */}
        </div>
        {/* <!--end::LIst widget 25--> */}
        {/* <!--end::Tables widget 16--> */}
      </div>
      {/* <!--end::Col--> */}
      {/* <!--begin::Col--> */}
      <div class="col-xxl-6">
        {/* <!--begin::Tables widget 16--> */}
        <div class="card card-flush h-md-100">
          {/* <!--begin::Header--> */}
          <div class="card-header pt-5">
            {/* <!--begin::Title--> */}
            <h3 class="card-title align-items-start flex-column">
              <span class="card-label fw-bold text-gray-800">Various Functionalities Report</span>
            </h3>
            {/* <!--end::Title--> */}
            {/* <!--begin::Toolbar--> */}
            <div class="card-toolbar">
              {/* <!--begin::Menu--> */}
              <button class="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
                {/* <!--begin::Svg Icon | path: icons/duotune/general/gen023.svg--> */}
                <span class="svg-icon svg-icon-1 svg-icon-gray-300 me-n1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="4" fill="currentColor" />
                    <rect x="11" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                    <rect x="15" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                    <rect x="7" y="11" width="2.6" height="2.6" rx="1.3" fill="currentColor" />
                  </svg>
                </span>
                {/* <!--end::Svg Icon--> */}
              </button>
              {/* <!--begin::Menu 2--> */}
              <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                {/* <!--begin::Menu item--> */}
                <div class="menu-item px-3">
                  <div class="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
                </div>
                {/* <!--end::Menu item--> */}
                {/* <!--begin::Menu separator--> */}
                <div class="separator mb-3 opacity-75"></div>
                {/* <!--end::Menu separator--> */}
                {/* <!--begin::Menu item--> */}
                <div class="menu-item px-3">
                  <a href="#" class="menu-link px-3">New Ticket</a>
                </div>
                {/* <!--end::Menu item--> */}
                {/* <!--begin::Menu item--> */}
                <div class="menu-item px-3">
                  <a href="#" class="menu-link px-3">New Customer</a>
                </div>
                {/* <!--end::Menu item--> */}
                {/* <!--begin::Menu item--> */}
                <div class="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                  {/* <!--begin::Menu item--> */}
                  <a href="#" class="menu-link px-3">
                    <span class="menu-title">New Group</span>
                    <span class="menu-arrow"></span>
                  </a>
                  {/* <!--end::Menu item--> */}
                  {/* <!--begin::Menu sub--> */}
                  <div class="menu-sub menu-sub-dropdown w-175px py-4">
                    {/* <!--begin::Menu item--> */}
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Admin Group</a>
                    </div>
                    {/* <!--end::Menu item--> */}
                    {/* <!--begin::Menu item--> */}
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Staff Group</a>
                    </div>
                    {/* <!--end::Menu item--> */}
                    {/* <!--begin::Menu item--> */}
                    <div class="menu-item px-3">
                      <a href="#" class="menu-link px-3">Member Group</a>
                    </div>
                    {/* <!--end::Menu item--> */}
                  </div>
                  {/* <!--end::Menu sub--> */}
                </div>
                {/* <!--end::Menu item--> */}
                {/* <!--begin::Menu item--> */}
                <div class="menu-item px-3">
                  <a href="#" class="menu-link px-3">New Contact</a>
                </div>
                {/* <!--end::Menu item--> */}
                {/* <!--begin::Menu separator--> */}
                <div class="separator mt-3 opacity-75"></div>
                {/* <!--end::Menu separator--> */}
                {/* <!--begin::Menu item--> */}
                <div class="menu-item px-3">
                  <div class="menu-content px-3 py-3">
                    <a class="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                  </div>
                </div>
                {/* <!--end::Menu item--> */}
              </div>
              {/* <!--end::Menu 2--> */}
              {/* <!--end::Menu--> */}
            </div>
            {/* <!--end::Toolbar--> */}
          </div>
          {/* <!--end::Header--> */}
          {/* <!--begin::Body--> */}
          <div class="card-body pt-6">
            {/* <!--begin::Nav--> */}
            <ul class="nav nav-pills nav-pills-custom mb-3">
              {/* <!--begin::Item--> */}
              <li class="nav-item mb-3 me-3 me-lg-6">
                {/* <!--begin::Link--> */}
                <a class="nav-link btn btn-outline btn-flex btn-color-muted btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2 active" id="kt_stats_widget_16_tab_link_1" data-bs-toggle="pill" href="#kt_stats_widget_16_tab_1">
                  {/* <!--begin::Icon--> */}
                  <div class="nav-icon mb-3">
                    <i class="fonticon-drive fs-1 p-0"></i>
                  </div>
                  {/* <!--end::Icon--> */}
                  {/* <!--begin::Title--> */}
                  <span class="nav-text text-gray-800 fw-bold fs-6 lh-1">SaaS</span>
                  {/* <!--end::Title--> */}
                  {/* <!--begin::Bullet--> */}
                  <span class="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
                  {/* <!--end::Bullet--> */}
                </a>
                {/* <!--end::Link--> */}
              </li>
              {/* <!--end::Item--> */}
              {/* <!--begin::Item--> */}
              <li class="nav-item mb-3 me-3 me-lg-6">
                {/* <!--begin::Link--> */}
                <a class="nav-link btn btn-outline btn-flex btn-color-muted btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2" id="kt_stats_widget_16_tab_link_2" data-bs-toggle="pill" href="#kt_stats_widget_16_tab_2">
                  {/* <!--begin::Icon--> */}
                  <div class="nav-icon mb-3">
                    <i class="fonticon-bank fs-1 p-0"></i>
                  </div>
                  {/* <!--end::Icon--> */}
                  {/* <!--begin::Title--> */}
                  <span class="nav-text text-gray-800 fw-bold fs-6 lh-1">Crypto</span>
                  {/* <!--end::Title--> */}
                  {/* <!--begin::Bullet--> */}
                  <span class="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
                  {/* <!--end::Bullet--> */}
                </a>
                {/* <!--end::Link--> */}
              </li>
              {/* <!--end::Item--> */}
              {/* <!--begin::Item--> */}
              <li class="nav-item mb-3 me-3 me-lg-6">
                {/* <!--begin::Link--> */}
                <a class="nav-link btn btn-outline btn-flex btn-color-muted btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2" id="kt_stats_widget_16_tab_link_3" data-bs-toggle="pill" href="#kt_stats_widget_16_tab_3">
                  {/* <!--begin::Icon--> */}
                  <div class="nav-icon mb-3">
                    <i class="fonticon-like-1 fs-1 p-0"></i>
                  </div>
                  {/* <!--end::Icon--> */}
                  {/* <!--begin::Title--> */}
                  <span class="nav-text text-gray-800 fw-bold fs-6 lh-1">Social</span>
                  {/* <!--end::Title--> */}
                  {/* <!--begin::Bullet--> */}
                  <span class="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
                  {/* <!--end::Bullet--> */}
                </a>
                {/* <!--end::Link--> */}
              </li>
              {/* <!--end::Item--> */}
              {/* <!--begin::Item--> */}
              <li class="nav-item mb-3 me-3 me-lg-6">
                {/* <!--begin::Link--> */}
                <a class="nav-link btn btn-outline btn-flex btn-color-muted btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2" id="kt_stats_widget_16_tab_link_4" data-bs-toggle="pill" href="#kt_stats_widget_16_tab_4">
                  {/* <!--begin::Icon--> */}
                  <div class="nav-icon mb-3">
                    <i class="fonticon-remote-control fs-1 p-0"></i>
                  </div>
                  {/* <!--end::Icon--> */}
                  {/* <!--begin::Title--> */}
                  <span class="nav-text text-gray-800 fw-bold fs-6 lh-1">Mobile</span>
                  {/* <!--end::Title--> */}
                  {/* <!--begin::Bullet--> */}
                  <span class="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
                  {/* <!--end::Bullet--> */}
                </a>
                {/* <!--end::Link--> */}
              </li>
              {/* <!--end::Item--> */}
              {/* <!--begin::Item--> */}
              <li class="nav-item mb-3 me-3 me-lg-6">
                {/* <!--begin::Link--> */}
                <a class="nav-link btn btn-outline btn-flex btn-color-muted btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2" id="kt_stats_widget_16_tab_link_5" data-bs-toggle="pill" href="#kt_stats_widget_16_tab_5">
                  {/* <!--begin::Icon--> */}
                  <div class="nav-icon mb-3">
                    <i class="fonticon-telegram fs-1 p-0"></i>
                  </div>
                  {/* <!--end::Icon--> */}
                  {/* <!--begin::Title--> */}
                  <span class="nav-text text-gray-800 fw-bold fs-6 lh-1">Others</span>
                  {/* <!--end::Title--> */}
                  {/* <!--begin::Bullet--> */}
                  <span class="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
                  {/* <!--end::Bullet--> */}
                </a>
                {/* <!--end::Link--> */}
              </li>
              {/* <!--end::Item--> */}
            </ul>
            {/* <!--end::Nav--> */}
            {/* <!--begin::Tab Content--> */}
            <div class="tab-content">
              {/* <!--begin::Tap pane--> */}
              <div class="tab-pane fade show active" id="kt_stats_widget_16_tab_1">
                {/* <!--begin::Table container--> */}
                <div class="table-responsive">
                  {/* <!--begin::Table--> */}
                  <table class="table table-row-dashed align-middle gs-0 gy-3 my-0">
                    {/* <!--begin::Table head--> */}
                    <thead>
                      <tr class="fs-7 fw-bold text-gray-400 border-bottom-0">
                        <th class="p-0 pb-3 min-w-150px text-start">AUTHOR</th>
                        <th class="p-0 pb-3 min-w-100px text-end pe-13">CONV.</th>
                        <th class="p-0 pb-3 w-125px text-end pe-7">CHART</th>
                        <th class="p-0 pb-3 w-50px text-end">VIEW</th>
                      </tr>
                    </thead>
                    {/* <!--end::Table head--> */}
                    {/* <!--begin::Table body--> */}
                    <tbody>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="symbol symbol-circle symbol-50px me-3">
                              <img src="assets/media/avatars/300-3.jpg" class="" alt="" />
                            </div>
                            <div class="d-flex justify-content-start flex-column">
                              <a href="../../demo1/dist/pages/user-profile/overview.html" class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Guy Hawkins</a>
                              <span class="text-gray-400 fw-semibold d-block fs-7">Haiti</span>
                            </div>
                          </div>
                        </td>
                        <td class="text-end pe-13">
                          <span class="text-gray-600 fw-bold fs-6">78.34%</span>
                        </td>
                        <td class="text-end pe-0">
                          <div id="kt_table_widget_16_chart_1_1" class="h-50px mt-n8 pe-7" data-kt-chart-color="success"></div>
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                            {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr001.svg--> */}
                            <span class="svg-icon svg-icon-5 svg-icon-gray-700">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/* <!--end::Svg Icon--> */}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="symbol symbol-circle symbol-50px me-3">
                              <img src="assets/media/avatars/300-2.jpg" class="" alt="" />
                            </div>
                            <div class="d-flex justify-content-start flex-column">
                              <a href="../../demo1/dist/pages/user-profile/overview.html" class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Jane Cooper</a>
                              <span class="text-gray-400 fw-semibold d-block fs-7">Monaco</span>
                            </div>
                          </div>
                        </td>
                        <td class="text-end pe-13">
                          <span class="text-gray-600 fw-bold fs-6">63.83%</span>
                        </td>
                        <td class="text-end pe-0">
                          <div id="kt_table_widget_16_chart_1_2" class="h-50px mt-n8 pe-7" data-kt-chart-color="danger"></div>
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                            {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr001.svg--> */}
                            <span class="svg-icon svg-icon-5 svg-icon-gray-700">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/* <!--end::Svg Icon--> */}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="symbol symbol-circle symbol-50px me-3">
                              <img src="assets/media/avatars/300-9.jpg" class="" alt="" />
                            </div>
                            <div class="d-flex justify-content-start flex-column">
                              <a href="../../demo1/dist/pages/user-profile/overview.html" class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Jacob Jones</a>
                              <span class="text-gray-400 fw-semibold d-block fs-7">Poland</span>
                            </div>
                          </div>
                        </td>
                        <td class="text-end pe-13">
                          <span class="text-gray-600 fw-bold fs-6">92.56%</span>
                        </td>
                        <td class="text-end pe-0">
                          <div id="kt_table_widget_16_chart_1_3" class="h-50px mt-n8 pe-7" data-kt-chart-color="success"></div>
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                            {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr001.svg--> */}
                            <span class="svg-icon svg-icon-5 svg-icon-gray-700">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/* <!--end::Svg Icon--> */}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="symbol symbol-circle symbol-50px me-3">
                              <img src="assets/media/avatars/300-7.jpg" class="" alt="" />
                            </div>
                            <div class="d-flex justify-content-start flex-column">
                              <a href="../../demo1/dist/pages/user-profile/overview.html" class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Cody Fishers</a>
                              <span class="text-gray-400 fw-semibold d-block fs-7">Mexico</span>
                            </div>
                          </div>
                        </td>
                        <td class="text-end pe-13">
                          <span class="text-gray-600 fw-bold fs-6">63.08%</span>
                        </td>
                        <td class="text-end pe-0">
                          <div id="kt_table_widget_16_chart_1_4" class="h-50px mt-n8 pe-7" data-kt-chart-color="success"></div>
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                            {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr001.svg--> */}
                            <span class="svg-icon svg-icon-5 svg-icon-gray-700">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/* <!--end::Svg Icon--> */}
                          </a>
                        </td>
                      </tr>
                    </tbody>
                    {/* <!--end::Table body--> */}
                  </table>
                  {/* <!--end::Table--> */}
                </div>
                {/* <!--end::Table container--> */}
              </div>
              {/* <!--end::Tap pane--> */}
              {/* <!--begin::Tap pane--> */}
              <div class="tab-pane fade" id="kt_stats_widget_16_tab_2">
                {/* <!--begin::Table container--> */}
                <div class="table-responsive">
                  {/* <!--begin::Table--> */}
                  <table class="table table-row-dashed align-middle gs-0 gy-3 my-0">
                    {/* <!--begin::Table head--> */}
                    <thead>
                      <tr class="fs-7 fw-bold text-gray-400 border-bottom-0">
                        <th class="p-0 pb-3 min-w-150px text-start">AUTHOR</th>
                        <th class="p-0 pb-3 min-w-100px text-end pe-13">CONV.</th>
                        <th class="p-0 pb-3 w-125px text-end pe-7">CHART</th>
                        <th class="p-0 pb-3 w-50px text-end">VIEW</th>
                      </tr>
                    </thead>
                    {/* <!--end::Table head--> */}
                    {/* <!--begin::Table body--> */}
                    <tbody>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="symbol symbol-circle symbol-50px me-3">
                              <img src="assets/media/avatars/300-25.jpg" class="" alt="" />
                            </div>
                            <div class="d-flex justify-content-start flex-column">
                              <a href="../../demo1/dist/pages/user-profile/overview.html" class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Brooklyn Simmons</a>
                              <span class="text-gray-400 fw-semibold d-block fs-7">Poland</span>
                            </div>
                          </div>
                        </td>
                        <td class="text-end pe-13">
                          <span class="text-gray-600 fw-bold fs-6">85.23%</span>
                        </td>
                        <td class="text-end pe-0">
                          <div id="kt_table_widget_16_chart_2_1" class="h-50px mt-n8 pe-7" data-kt-chart-color="success"></div>
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                            {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr001.svg--> */}
                            <span class="svg-icon svg-icon-5 svg-icon-gray-700">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/* <!--end::Svg Icon--> */}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="symbol symbol-circle symbol-50px me-3">
                              <img src="assets/media/avatars/300-24.jpg" class="" alt="" />
                            </div>
                            <div class="d-flex justify-content-start flex-column">
                              <a href="../../demo1/dist/pages/user-profile/overview.html" class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Esther Howard</a>
                              <span class="text-gray-400 fw-semibold d-block fs-7">Mexico</span>
                            </div>
                          </div>
                        </td>
                        <td class="text-end pe-13">
                          <span class="text-gray-600 fw-bold fs-6">74.83%</span>
                        </td>
                        <td class="text-end pe-0">
                          <div id="kt_table_widget_16_chart_2_2" class="h-50px mt-n8 pe-7" data-kt-chart-color="danger"></div>
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                            {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr001.svg--> */}
                            <span class="svg-icon svg-icon-5 svg-icon-gray-700">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/* <!--end::Svg Icon--> */}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="symbol symbol-circle symbol-50px me-3">
                              <img src="assets/media/avatars/300-20.jpg" class="" alt="" />
                            </div>
                            <div class="d-flex justify-content-start flex-column">
                              <a href="../../demo1/dist/pages/user-profile/overview.html" class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Annette Black</a>
                              <span class="text-gray-400 fw-semibold d-block fs-7">Haiti</span>
                            </div>
                          </div>
                        </td>
                        <td class="text-end pe-13">
                          <span class="text-gray-600 fw-bold fs-6">90.06%</span>
                        </td>
                        <td class="text-end pe-0">
                          <div id="kt_table_widget_16_chart_2_3" class="h-50px mt-n8 pe-7" data-kt-chart-color="success"></div>
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                            {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr001.svg--> */}
                            <span class="svg-icon svg-icon-5 svg-icon-gray-700">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/* <!--end::Svg Icon--> */}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="symbol symbol-circle symbol-50px me-3">
                              <img src="assets/media/avatars/300-17.jpg" class="" alt="" />
                            </div>
                            <div class="d-flex justify-content-start flex-column">
                              <a href="../../demo1/dist/pages/user-profile/overview.html" class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Marvin McKinney</a>
                              <span class="text-gray-400 fw-semibold d-block fs-7">Monaco</span>
                            </div>
                          </div>
                        </td>
                        <td class="text-end pe-13">
                          <span class="text-gray-600 fw-bold fs-6">54.08%</span>
                        </td>
                        <td class="text-end pe-0">
                          <div id="kt_table_widget_16_chart_2_4" class="h-50px mt-n8 pe-7" data-kt-chart-color="success"></div>
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                            {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr001.svg--> */}
                            <span class="svg-icon svg-icon-5 svg-icon-gray-700">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/* <!--end::Svg Icon--> */}
                          </a>
                        </td>
                      </tr>
                    </tbody>
                    {/* <!--end::Table body--> */}
                  </table>
                  {/* <!--end::Table--> */}
                </div>
                {/* <!--end::Table container--> */}
              </div>
              {/* <!--end::Tap pane--> */}
              {/* <!--begin::Tap pane--> */}
              <div class="tab-pane fade" id="kt_stats_widget_16_tab_3">
                {/* <!--begin::Table container--> */}
                <div class="table-responsive">
                  {/* <!--begin::Table--> */}
                  <table class="table table-row-dashed align-middle gs-0 gy-3 my-0">
                    {/* <!--begin::Table head--> */}
                    <thead>
                      <tr class="fs-7 fw-bold text-gray-400 border-bottom-0">
                        <th class="p-0 pb-3 min-w-150px text-start">AUTHOR</th>
                        <th class="p-0 pb-3 min-w-100px text-end pe-13">CONV.</th>
                        <th class="p-0 pb-3 w-125px text-end pe-7">CHART</th>
                        <th class="p-0 pb-3 w-50px text-end">VIEW</th>
                      </tr>
                    </thead>
                    {/* <!--end::Table head--> */}
                    {/* <!--begin::Table body--> */}
                    <tbody>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="symbol symbol-circle symbol-50px me-3">
                              <img src="assets/media/avatars/300-11.jpg" class="" alt="" />
                            </div>
                            <div class="d-flex justify-content-start flex-column">
                              <a href="../../demo1/dist/pages/user-profile/overview.html" class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Jacob Jones</a>
                              <span class="text-gray-400 fw-semibold d-block fs-7">New York</span>
                            </div>
                          </div>
                        </td>
                        <td class="text-end pe-13">
                          <span class="text-gray-600 fw-bold fs-6">52.34%</span>
                        </td>
                        <td class="text-end pe-0">
                          <div id="kt_table_widget_16_chart_3_1" class="h-50px mt-n8 pe-7" data-kt-chart-color="success"></div>
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                            {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr001.svg--> */}
                            <span class="svg-icon svg-icon-5 svg-icon-gray-700">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/* <!--end::Svg Icon--> */}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="symbol symbol-circle symbol-50px me-3">
                              <img src="assets/media/avatars/300-23.jpg" class="" alt="" />
                            </div>
                            <div class="d-flex justify-content-start flex-column">
                              <a href="../../demo1/dist/pages/user-profile/overview.html" class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Ronald Richards</a>
                              <span class="text-gray-400 fw-semibold d-block fs-7">Madrid</span>
                            </div>
                          </div>
                        </td>
                        <td class="text-end pe-13">
                          <span class="text-gray-600 fw-bold fs-6">77.65%</span>
                        </td>
                        <td class="text-end pe-0">
                          <div id="kt_table_widget_16_chart_3_2" class="h-50px mt-n8 pe-7" data-kt-chart-color="danger"></div>
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                            {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr001.svg--> */}
                            <span class="svg-icon svg-icon-5 svg-icon-gray-700">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/* <!--end::Svg Icon--> */}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="symbol symbol-circle symbol-50px me-3">
                              <img src="assets/media/avatars/300-4.jpg" class="" alt="" />
                            </div>
                            <div class="d-flex justify-content-start flex-column">
                              <a href="../../demo1/dist/pages/user-profile/overview.html" class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Leslie Alexander</a>
                              <span class="text-gray-400 fw-semibold d-block fs-7">Pune</span>
                            </div>
                          </div>
                        </td>
                        <td class="text-end pe-13">
                          <span class="text-gray-600 fw-bold fs-6">82.47%</span>
                        </td>
                        <td class="text-end pe-0">
                          <div id="kt_table_widget_16_chart_3_3" class="h-50px mt-n8 pe-7" data-kt-chart-color="success"></div>
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                            {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr001.svg--> */}
                            <span class="svg-icon svg-icon-5 svg-icon-gray-700">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/* <!--end::Svg Icon--> */}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="symbol symbol-circle symbol-50px me-3">
                              <img src="assets/media/avatars/300-1.jpg" class="" alt="" />
                            </div>
                            <div class="d-flex justify-content-start flex-column">
                              <a href="../../demo1/dist/pages/user-profile/overview.html" class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Courtney Henry</a>
                              <span class="text-gray-400 fw-semibold d-block fs-7">Mexico</span>
                            </div>
                          </div>
                        </td>
                        <td class="text-end pe-13">
                          <span class="text-gray-600 fw-bold fs-6">67.84%</span>
                        </td>
                        <td class="text-end pe-0">
                          <div id="kt_table_widget_16_chart_3_4" class="h-50px mt-n8 pe-7" data-kt-chart-color="success"></div>
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                            {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr001.svg--> */}
                            <span class="svg-icon svg-icon-5 svg-icon-gray-700">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/* <!--end::Svg Icon--> */}
                          </a>
                        </td>
                      </tr>
                    </tbody>
                    {/* <!--end::Table body--> */}
                  </table>
                  {/* <!--end::Table--> */}
                </div>
                {/* <!--end::Table container--> */}
              </div>
              {/* <!--end::Tap pane--> */}
              {/* <!--begin::Tap pane--> */}
              <div class="tab-pane fade" id="kt_stats_widget_16_tab_4">
                {/* <!--begin::Table container--> */}
                <div class="table-responsive">
                  {/* <!--begin::Table--> */}
                  <table class="table table-row-dashed align-middle gs-0 gy-3 my-0">
                    {/* <!--begin::Table head--> */}
                    <thead>
                      <tr class="fs-7 fw-bold text-gray-400 border-bottom-0">
                        <th class="p-0 pb-3 min-w-150px text-start">AUTHOR</th>
                        <th class="p-0 pb-3 min-w-100px text-end pe-13">CONV.</th>
                        <th class="p-0 pb-3 w-125px text-end pe-7">CHART</th>
                        <th class="p-0 pb-3 w-50px text-end">VIEW</th>
                      </tr>
                    </thead>
                    {/* <!--end::Table head--> */}
                    {/* <!--begin::Table body--> */}
                    <tbody>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="symbol symbol-circle symbol-50px me-3">
                              <img src="assets/media/avatars/300-12.jpg" class="" alt="" />
                            </div>
                            <div class="d-flex justify-content-start flex-column">
                              <a href="../../demo1/dist/pages/user-profile/overview.html" class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Arlene McCoy</a>
                              <span class="text-gray-400 fw-semibold d-block fs-7">London</span>
                            </div>
                          </div>
                        </td>
                        <td class="text-end pe-13">
                          <span class="text-gray-600 fw-bold fs-6">53.44%</span>
                        </td>
                        <td class="text-end pe-0">
                          <div id="kt_table_widget_16_chart_4_1" class="h-50px mt-n8 pe-7" data-kt-chart-color="success"></div>
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                            {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr001.svg--> */}
                            <span class="svg-icon svg-icon-5 svg-icon-gray-700">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/* <!--end::Svg Icon--> */}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="symbol symbol-circle symbol-50px me-3">
                              <img src="assets/media/avatars/300-21.jpg" class="" alt="" />
                            </div>
                            <div class="d-flex justify-content-start flex-column">
                              <a href="../../demo1/dist/pages/user-profile/overview.html" class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Marvin McKinneyr</a>
                              <span class="text-gray-400 fw-semibold d-block fs-7">Monaco</span>
                            </div>
                          </div>
                        </td>
                        <td class="text-end pe-13">
                          <span class="text-gray-600 fw-bold fs-6">74.64%</span>
                        </td>
                        <td class="text-end pe-0">
                          <div id="kt_table_widget_16_chart_4_2" class="h-50px mt-n8 pe-7" data-kt-chart-color="danger"></div>
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                            {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr001.svg--> */}
                            <span class="svg-icon svg-icon-5 svg-icon-gray-700">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/* <!--end::Svg Icon--> */}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="symbol symbol-circle symbol-50px me-3">
                              <img src="assets/media/avatars/300-30.jpg" class="" alt="" />
                            </div>
                            <div class="d-flex justify-content-start flex-column">
                              <a href="../../demo1/dist/pages/user-profile/overview.html" class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Jacob Jones</a>
                              <span class="text-gray-400 fw-semibold d-block fs-7">PManila</span>
                            </div>
                          </div>
                        </td>
                        <td class="text-end pe-13">
                          <span class="text-gray-600 fw-bold fs-6">88.56%</span>
                        </td>
                        <td class="text-end pe-0">
                          <div id="kt_table_widget_16_chart_4_3" class="h-50px mt-n8 pe-7" data-kt-chart-color="success"></div>
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                            {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr001.svg--> */}
                            <span class="svg-icon svg-icon-5 svg-icon-gray-700">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/* <!--end::Svg Icon--> */}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="symbol symbol-circle symbol-50px me-3">
                              <img src="assets/media/avatars/300-14.jpg" class="" alt="" />
                            </div>
                            <div class="d-flex justify-content-start flex-column">
                              <a href="../../demo1/dist/pages/user-profile/overview.html" class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Esther Howard</a>
                              <span class="text-gray-400 fw-semibold d-block fs-7">Iceland</span>
                            </div>
                          </div>
                        </td>
                        <td class="text-end pe-13">
                          <span class="text-gray-600 fw-bold fs-6">63.16%</span>
                        </td>
                        <td class="text-end pe-0">
                          <div id="kt_table_widget_16_chart_4_4" class="h-50px mt-n8 pe-7" data-kt-chart-color="success"></div>
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                            {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr001.svg--> */}
                            <span class="svg-icon svg-icon-5 svg-icon-gray-700">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/* <!--end::Svg Icon--> */}
                          </a>
                        </td>
                      </tr>
                    </tbody>
                    {/* <!--end::Table body--> */}
                  </table>
                  {/* <!--end::Table--> */}
                </div>
                {/* <!--end::Table container--> */}
              </div>
              {/* <!--end::Tap pane--> */}
              {/* <!--begin::Tap pane--> */}
              <div class="tab-pane fade" id="kt_stats_widget_16_tab_5">
                {/* <!--begin::Table container--> */}
                <div class="table-responsive">
                  {/* <!--begin::Table--> */}
                  <table class="table table-row-dashed align-middle gs-0 gy-3 my-0">
                    {/* <!--begin::Table head--> */}
                    <thead>
                      <tr class="fs-7 fw-bold text-gray-400 border-bottom-0">
                        <th class="p-0 pb-3 min-w-150px text-start">AUTHOR</th>
                        <th class="p-0 pb-3 min-w-100px text-end pe-13">CONV.</th>
                        <th class="p-0 pb-3 w-125px text-end pe-7">CHART</th>
                        <th class="p-0 pb-3 w-50px text-end">VIEW</th>
                      </tr>
                    </thead>
                    {/* <!--end::Table head--> */}
                    {/* <!--begin::Table body--> */}
                    <tbody>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="symbol symbol-circle symbol-50px me-3">
                              <img src="assets/media/avatars/300-6.jpg" class="" alt="" />
                            </div>
                            <div class="d-flex justify-content-start flex-column">
                              <a href="../../demo1/dist/pages/user-profile/overview.html" class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Jane Cooper</a>
                              <span class="text-gray-400 fw-semibold d-block fs-7">Haiti</span>
                            </div>
                          </div>
                        </td>
                        <td class="text-end pe-13">
                          <span class="text-gray-600 fw-bold fs-6">68.54%</span>
                        </td>
                        <td class="text-end pe-0">
                          <div id="kt_table_widget_16_chart_5_1" class="h-50px mt-n8 pe-7" data-kt-chart-color="success"></div>
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                            {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr001.svg--> */}
                            <span class="svg-icon svg-icon-5 svg-icon-gray-700">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/* <!--end::Svg Icon--> */}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="symbol symbol-circle symbol-50px me-3">
                              <img src="assets/media/avatars/300-10.jpg" class="" alt="" />
                            </div>
                            <div class="d-flex justify-content-start flex-column">
                              <a href="../../demo1/dist/pages/user-profile/overview.html" class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Esther Howard</a>
                              <span class="text-gray-400 fw-semibold d-block fs-7">Kiribati</span>
                            </div>
                          </div>
                        </td>
                        <td class="text-end pe-13">
                          <span class="text-gray-600 fw-bold fs-6">55.83%</span>
                        </td>
                        <td class="text-end pe-0">
                          <div id="kt_table_widget_16_chart_5_2" class="h-50px mt-n8 pe-7" data-kt-chart-color="danger"></div>
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                            {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr001.svg--> */}
                            <span class="svg-icon svg-icon-5 svg-icon-gray-700">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/* <!--end::Svg Icon--> */}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="symbol symbol-circle symbol-50px me-3">
                              <img src="assets/media/avatars/300-9.jpg" class="" alt="" />
                            </div>
                            <div class="d-flex justify-content-start flex-column">
                              <a href="../../demo1/dist/pages/user-profile/overview.html" class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Jacob Jones</a>
                              <span class="text-gray-400 fw-semibold d-block fs-7">Poland</span>
                            </div>
                          </div>
                        </td>
                        <td class="text-end pe-13">
                          <span class="text-gray-600 fw-bold fs-6">93.46%</span>
                        </td>
                        <td class="text-end pe-0">
                          <div id="kt_table_widget_16_chart_5_3" class="h-50px mt-n8 pe-7" data-kt-chart-color="success"></div>
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                            {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr001.svg--> */}
                            <span class="svg-icon svg-icon-5 svg-icon-gray-700">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/* <!--end::Svg Icon--> */}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="symbol symbol-circle symbol-50px me-3">
                              <img src="assets/media/avatars/300-3.jpg" class="" alt="" />
                            </div>
                            <div class="d-flex justify-content-start flex-column">
                              <a href="../../demo1/dist/pages/user-profile/overview.html" class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Ralph Edwards</a>
                              <span class="text-gray-400 fw-semibold d-block fs-7">Mexico</span>
                            </div>
                          </div>
                        </td>
                        <td class="text-end pe-13">
                          <span class="text-gray-600 fw-bold fs-6">64.48%</span>
                        </td>
                        <td class="text-end pe-0">
                          <div id="kt_table_widget_16_chart_5_4" class="h-50px mt-n8 pe-7" data-kt-chart-color="success"></div>
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                            {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr001.svg--> */}
                            <span class="svg-icon svg-icon-5 svg-icon-gray-700">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z" fill="currentColor" />
                                <path opacity="0.3" d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/* <!--end::Svg Icon--> */}
                          </a>
                        </td>
                      </tr>
                    </tbody>
                    {/* <!--end::Table body--> */}
                  </table>
                  {/* <!--end::Table--> */}
                </div>
                {/* <!--end::Table container--> */}
              </div>
              {/* <!--end::Tap pane--> */}
              {/* <!--end::Table container--> */}
            </div>
            {/* <!--end::Tab Content--> */}
          </div>
          {/* <!--end: Card Body--> */}
        </div>
        {/* <!--end::Tables widget 16--> */}
      </div>
      {/* <!--end::Col--> */}
    </div>
    {/* <!--end::Row--> */}

  </div >

  );
}

export default Dashboard;
