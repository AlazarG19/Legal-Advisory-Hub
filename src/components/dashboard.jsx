import React from "react";
import Aside from "./Aside";
import Content from "./Content";
import Header from "./Header";
import Documents from "./Documents";
const Dashboard = () => {
  return (
    <div>
      <>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        --&gt;
        <base href="." />
        <title>
          Keen - Multi-demo Bootstrap 5 HTML Admin Dashboard Template by
          Keenthemes
        </title>
        <link
          href="assets/img/plugins.bundle.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="assets/img/style.bundle.css"
          rel="stylesheet"
          type="text/css"
        />
        <style
          type="text/css"
          id="operaUserStyle"
          dangerouslySetInnerHTML={{ __html: "" }}
        />
        <style
          id="apexcharts-css"
          dangerouslySetInnerHTML={{
            __html:
              '@keyframes opaque {\n  0% {\n      opacity: 0\n  }\n\n  to {\n      opacity: 1\n  }\n}\n\n@keyframes resizeanim {\n  0%,to {\n      opacity: 0\n  }\n}\n\n.apexcharts-canvas {\n  position: relative;\n  user-select: none\n}\n\n.apexcharts-canvas ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 6px\n}\n\n.apexcharts-canvas ::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0,0,0,.5);\n  box-shadow: 0 0 1px rgba(255,255,255,.5);\n  -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5)\n}\n\n.apexcharts-inner {\n  position: relative\n}\n\n.apexcharts-text tspan {\n  font-family: inherit\n}\n\n.legend-mouseover-inactive {\n  transition: .15s ease all;\n  opacity: .2\n}\n\n.apexcharts-series-collapsed {\n  opacity: 0\n}\n\n.apexcharts-tooltip {\n  border-radius: 5px;\n  box-shadow: 2px 2px 6px -4px #999;\n  cursor: default;\n  font-size: 14px;\n  left: 62px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 20px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  white-space: nowrap;\n  z-index: 12;\n  transition: .15s ease all\n}\n\n.apexcharts-tooltip.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-tooltip.apexcharts-theme-light {\n  border: 1px solid #e3e3e3;\n  background: rgba(255,255,255,.96)\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark {\n  color: #fff;\n  background: rgba(30,30,30,.8)\n}\n\n.apexcharts-tooltip * {\n  font-family: inherit\n}\n\n.apexcharts-tooltip-title {\n  padding: 6px;\n  font-size: 15px;\n  margin-bottom: 4px\n}\n\n.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {\n  background: #eceff1;\n  border-bottom: 1px solid #ddd\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {\n  background: rgba(0,0,0,.7);\n  border-bottom: 1px solid #333\n}\n\n.apexcharts-tooltip-text-goals-value,.apexcharts-tooltip-text-y-value,.apexcharts-tooltip-text-z-value {\n  display: inline-block;\n  margin-left: 5px;\n  font-weight: 600\n}\n\n.apexcharts-tooltip-text-goals-label:empty,.apexcharts-tooltip-text-goals-value:empty,.apexcharts-tooltip-text-y-label:empty,.apexcharts-tooltip-text-y-value:empty,.apexcharts-tooltip-text-z-value:empty,.apexcharts-tooltip-title:empty {\n  display: none\n}\n\n.apexcharts-tooltip-text-goals-label,.apexcharts-tooltip-text-goals-value {\n  padding: 6px 0 5px\n}\n\n.apexcharts-tooltip-goals-group,.apexcharts-tooltip-text-goals-label,.apexcharts-tooltip-text-goals-value {\n  display: flex\n}\n\n.apexcharts-tooltip-text-goals-label:not(:empty),.apexcharts-tooltip-text-goals-value:not(:empty) {\n  margin-top: -6px\n}\n\n.apexcharts-tooltip-marker {\n  width: 12px;\n  height: 12px;\n  position: relative;\n  top: 0;\n  margin-right: 10px;\n  border-radius: 50%\n}\n\n.apexcharts-tooltip-series-group {\n  padding: 0 10px;\n  display: none;\n  text-align: left;\n  justify-content: left;\n  align-items: center\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {\n  opacity: 1\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active,.apexcharts-tooltip-series-group:last-child {\n  padding-bottom: 4px\n}\n\n.apexcharts-tooltip-series-group-hidden {\n  opacity: 0;\n  height: 0;\n  line-height: 0;\n  padding: 0!important\n}\n\n.apexcharts-tooltip-y-group {\n  padding: 6px 0 5px\n}\n\n.apexcharts-custom-tooltip,.apexcharts-tooltip-box {\n  padding: 4px 8px\n}\n\n.apexcharts-tooltip-boxPlot {\n  display: flex;\n  flex-direction: column-reverse\n}\n\n.apexcharts-tooltip-box>div {\n  margin: 4px 0\n}\n\n.apexcharts-tooltip-box span.value {\n  font-weight: 700\n}\n\n.apexcharts-tooltip-rangebar {\n  padding: 5px 8px\n}\n\n.apexcharts-tooltip-rangebar .category {\n  font-weight: 600;\n  color: #777\n}\n\n.apexcharts-tooltip-rangebar .series-name {\n  font-weight: 700;\n  display: block;\n  margin-bottom: 5px\n}\n\n.apexcharts-xaxistooltip,.apexcharts-yaxistooltip {\n  opacity: 0;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #eceff1;\n  border: 1px solid #90a4ae\n}\n\n.apexcharts-xaxistooltip {\n  padding: 9px 10px;\n  transition: .15s ease all\n}\n\n.apexcharts-xaxistooltip.apexcharts-theme-dark {\n  background: rgba(0,0,0,.7);\n  border: 1px solid rgba(0,0,0,.5);\n  color: #fff\n}\n\n.apexcharts-xaxistooltip:after,.apexcharts-xaxistooltip:before {\n  left: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none\n}\n\n.apexcharts-xaxistooltip:after {\n  border-color: transparent;\n  border-width: 6px;\n  margin-left: -6px\n}\n\n.apexcharts-xaxistooltip:before {\n  border-color: transparent;\n  border-width: 7px;\n  margin-left: -7px\n}\n\n.apexcharts-xaxistooltip-bottom:after,.apexcharts-xaxistooltip-bottom:before {\n  bottom: 100%\n}\n\n.apexcharts-xaxistooltip-top:after,.apexcharts-xaxistooltip-top:before {\n  top: 100%\n}\n\n.apexcharts-xaxistooltip-bottom:after {\n  border-bottom-color: #eceff1\n}\n\n.apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #90a4ae\n}\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after,.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {\n  border-bottom-color: rgba(0,0,0,.5)\n}\n\n.apexcharts-xaxistooltip-top:after {\n  border-top-color: #eceff1\n}\n\n.apexcharts-xaxistooltip-top:before {\n  border-top-color: #90a4ae\n}\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:after,.apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {\n  border-top-color: rgba(0,0,0,.5)\n}\n\n.apexcharts-xaxistooltip.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-yaxistooltip {\n  padding: 4px 10px\n}\n\n.apexcharts-yaxistooltip.apexcharts-theme-dark {\n  background: rgba(0,0,0,.7);\n  border: 1px solid rgba(0,0,0,.5);\n  color: #fff\n}\n\n.apexcharts-yaxistooltip:after,.apexcharts-yaxistooltip:before {\n  top: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none\n}\n\n.apexcharts-yaxistooltip:after {\n  border-color: transparent;\n  border-width: 6px;\n  margin-top: -6px\n}\n\n.apexcharts-yaxistooltip:before {\n  border-color: transparent;\n  border-width: 7px;\n  margin-top: -7px\n}\n\n.apexcharts-yaxistooltip-left:after,.apexcharts-yaxistooltip-left:before {\n  left: 100%\n}\n\n.apexcharts-yaxistooltip-right:after,.apexcharts-yaxistooltip-right:before {\n  right: 100%\n}\n\n.apexcharts-yaxistooltip-left:after {\n  border-left-color: #eceff1\n}\n\n.apexcharts-yaxistooltip-left:before {\n  border-left-color: #90a4ae\n}\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:after,.apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {\n  border-left-color: rgba(0,0,0,.5)\n}\n\n.apexcharts-yaxistooltip-right:after {\n  border-right-color: #eceff1\n}\n\n.apexcharts-yaxistooltip-right:before {\n  border-right-color: #90a4ae\n}\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:after,.apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {\n  border-right-color: rgba(0,0,0,.5)\n}\n\n.apexcharts-yaxistooltip.apexcharts-active {\n  opacity: 1\n}\n\n.apexcharts-yaxistooltip-hidden {\n  display: none\n}\n\n.apexcharts-xcrosshairs,.apexcharts-ycrosshairs {\n  pointer-events: none;\n  opacity: 0;\n  transition: .15s ease all\n}\n\n.apexcharts-xcrosshairs.apexcharts-active,.apexcharts-ycrosshairs.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-ycrosshairs-hidden {\n  opacity: 0\n}\n\n.apexcharts-selection-rect {\n  cursor: move\n}\n\n.svg_select_boundingRect,.svg_select_points_rot {\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden\n}\n\n.apexcharts-selection-rect+g .svg_select_boundingRect,.apexcharts-selection-rect+g .svg_select_points_rot {\n  opacity: 0;\n  visibility: hidden\n}\n\n.apexcharts-selection-rect+g .svg_select_points_l,.apexcharts-selection-rect+g .svg_select_points_r {\n  cursor: ew-resize;\n  opacity: 1;\n  visibility: visible\n}\n\n.svg_select_points {\n  fill: #efefef;\n  stroke: #333;\n  rx: 2\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-zoom {\n  cursor: crosshair\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-pan {\n  cursor: move\n}\n\n.apexcharts-menu-icon,.apexcharts-pan-icon,.apexcharts-reset-icon,.apexcharts-selection-icon,.apexcharts-toolbar-custom-icon,.apexcharts-zoom-icon,.apexcharts-zoomin-icon,.apexcharts-zoomout-icon {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  line-height: 24px;\n  color: #6e8192;\n  text-align: center\n}\n\n.apexcharts-menu-icon svg,.apexcharts-reset-icon svg,.apexcharts-zoom-icon svg,.apexcharts-zoomin-icon svg,.apexcharts-zoomout-icon svg {\n  fill: #6e8192\n}\n\n.apexcharts-selection-icon svg {\n  fill: #444;\n  transform: scale(.76)\n}\n\n.apexcharts-theme-dark .apexcharts-menu-icon svg,.apexcharts-theme-dark .apexcharts-pan-icon svg,.apexcharts-theme-dark .apexcharts-reset-icon svg,.apexcharts-theme-dark .apexcharts-selection-icon svg,.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg,.apexcharts-theme-dark .apexcharts-zoom-icon svg,.apexcharts-theme-dark .apexcharts-zoomin-icon svg,.apexcharts-theme-dark .apexcharts-zoomout-icon svg {\n  fill: #f3f4f5\n}\n\n.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg,.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg {\n  fill: #008ffb\n}\n\n.apexcharts-theme-light .apexcharts-menu-icon:hover svg,.apexcharts-theme-light .apexcharts-reset-icon:hover svg,.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg {\n  fill: #333\n}\n\n.apexcharts-menu-icon,.apexcharts-selection-icon {\n  position: relative\n}\n\n.apexcharts-reset-icon {\n  margin-left: 5px\n}\n\n.apexcharts-menu-icon,.apexcharts-reset-icon,.apexcharts-zoom-icon {\n  transform: scale(.85)\n}\n\n.apexcharts-zoomin-icon,.apexcharts-zoomout-icon {\n  transform: scale(.7)\n}\n\n.apexcharts-zoomout-icon {\n  margin-right: 3px\n}\n\n.apexcharts-pan-icon {\n  transform: scale(.62);\n  position: relative;\n  left: 1px;\n  top: 0\n}\n\n.apexcharts-pan-icon svg {\n  fill: #fff;\n  stroke: #6e8192;\n  stroke-width: 2\n}\n\n.apexcharts-pan-icon.apexcharts-selected svg {\n  stroke: #008ffb\n}\n\n.apexcharts-pan-icon:not(.apexcharts-selected):hover svg {\n  stroke: #333\n}\n\n.apexcharts-toolbar {\n  position: absolute;\n  z-index: 11;\n  max-width: 176px;\n  text-align: right;\n  border-radius: 3px;\n  padding: 0 6px 2px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center\n}\n\n.apexcharts-menu {\n  background: #fff;\n  position: absolute;\n  top: 100%;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 3px;\n  right: 10px;\n  opacity: 0;\n  min-width: 110px;\n  transition: .15s ease all;\n  pointer-events: none\n}\n\n.apexcharts-menu.apexcharts-menu-open {\n  opacity: 1;\n  pointer-events: all;\n  transition: .15s ease all\n}\n\n.apexcharts-menu-item {\n  padding: 6px 7px;\n  font-size: 12px;\n  cursor: pointer\n}\n\n.apexcharts-theme-light .apexcharts-menu-item:hover {\n  background: #eee\n}\n\n.apexcharts-theme-dark .apexcharts-menu {\n  background: rgba(0,0,0,.7);\n  color: #fff\n}\n\n@media screen and (min-width:768px) {\n  .apexcharts-canvas:hover .apexcharts-toolbar {\n      opacity: 1\n  }\n}\n\n.apexcharts-canvas .apexcharts-element-hidden,.apexcharts-datalabel.apexcharts-element-hidden,.apexcharts-hide .apexcharts-series-points {\n  opacity: 0\n}\n\n.apexcharts-datalabel,.apexcharts-datalabel-label,.apexcharts-datalabel-value,.apexcharts-datalabels,.apexcharts-pie-label {\n  cursor: default;\n  pointer-events: none\n}\n\n.apexcharts-pie-label-delay {\n  opacity: 0;\n  animation-name: opaque;\n  animation-duration: .3s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease\n}\n\n.apexcharts-annotation-rect,.apexcharts-area-series .apexcharts-area,.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,.apexcharts-gridline,.apexcharts-line,.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,.apexcharts-point-annotation-label,.apexcharts-radar-series path,.apexcharts-radar-series polygon,.apexcharts-toolbar svg,.apexcharts-tooltip .apexcharts-marker,.apexcharts-xaxis-annotation-label,.apexcharts-yaxis-annotation-label,.apexcharts-zoom-rect {\n  pointer-events: none\n}\n\n.apexcharts-marker {\n  transition: .15s ease all\n}\n\n.resize-triggers {\n  animation: 1ms resizeanim;\n  visibility: hidden;\n  opacity: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden\n}\n\n.contract-trigger:before,.resize-triggers,.resize-triggers>div {\n  content: " ";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0\n}\n\n.resize-triggers>div {\n  height: 100%;\n  width: 100%;\n  background: #eee;\n  overflow: auto\n}\n\n.contract-trigger:before {\n  overflow: hidden;\n  width: 200%;\n  height: 200%\n}',
          }}
        />
        <div
          className="d-flex flex-column flex-root app-root"
          id="kt_app_root"
          style={{ display: "flex" }}
        >
          <div
            className="app-page flex-column flex-column-fluid"
            id="kt_app_page"
          >
            <Header />

            <div
              className="app-wrapper flex-column flex-row-fluid"
              id="kt_app_wrapper"
            >
              <div
                id="kt_app_sidebar"
                className="app-sidebar flex-column"
                data-kt-drawer="true"
                data-kt-drawer-name="app-sidebar"
                data-kt-drawer-activate="{default: true, lg: false}"
                data-kt-drawer-overlay="true"
                data-kt-drawer-width="225px"
                data-kt-drawer-direction="start"
                data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle"
              >
                <div className="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
                  <a href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html">
                    <img
                      alt="Logo"
                      src="assets/img/default-dark.svg"
                      className="h-30px app-sidebar-logo-default"
                    />
                  </a>
                  <div
                    id="kt_app_sidebar_toggle"
                    className="app-sidebar-toggle btn btn-icon btn-sm h-30px w-30px rotate"
                    data-kt-toggle="true"
                    data-kt-toggle-state="active"
                    data-kt-toggle-target="body"
                    data-kt-toggle-name="app-sidebar-minimize"
                  >
                    <span className="svg-icon svg-icon-2 rotate-180">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z"
                          fill="currentColor"
                        />
                        <path
                          d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="app-sidebar-menu overflow-hidden flex-column-fluid">
                  <div
                    id="kt_app_sidebar_menu_wrapper"
                    className="app-sidebar-wrapper hover-scroll-overlay-y my-5"
                    data-kt-scroll="true"
                    data-kt-scroll-activate="true"
                    data-kt-scroll-height="auto"
                    data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer"
                    data-kt-scroll-wrappers="#kt_app_sidebar_menu"
                    data-kt-scroll-offset="5px"
                    style={{ height: 707 }}
                  >
                    <Aside />
                  </div>
                </div>
              </div>
              <div
                className="app-main flex-column flex-row-fluid"
                id="kt_app_main"
              >
                <div
                  className="d-flex flex-column flex-column-fluid"
                  style={{
                    width: "84%",
                    position: "absolute",
                    left: "259px",
                    top: "104px",
                  }}
                >
                  <Content />
                </div>
                <div id="kt_app_footer" className="app-footer">
                  <div className="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
                    <div className="text-dark order-2 order-md-1">
                      <span className="text-muted fw-semibold me-1">2023©</span>
                      <a
                        href="https://keenthemes.com/"
                        target="_blank"
                        className="text-gray-800 text-hover-primary"
                      >
                        Keenthemes
                      </a>
                    </div>
                    <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                      <li className="menu-item">
                        <a
                          href="https://keenthemes.com/"
                          target="_blank"
                          className="menu-link px-2"
                        >
                          About
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="https://devs.keenthemes.com/"
                          target="_blank"
                          className="menu-link px-2"
                        >
                          Support
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="https://themes.getbootstrap.com/product/keen-the-ultimate-bootstrap-admin-theme/"
                          target="_blank"
                          className="menu-link px-2"
                        >
                          Purchase
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="kt_activities"
          className="bg-body drawer drawer-end"
          data-kt-drawer="true"
          data-kt-drawer-name="activities"
          data-kt-drawer-activate="true"
          data-kt-drawer-overlay="true"
          data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
          data-kt-drawer-direction="end"
          data-kt-drawer-toggle="#kt_activities_toggle"
          data-kt-drawer-close="#kt_activities_close"
          style={{ width: "900px !important" }}
        >
          <div className="card shadow-none border-0 rounded-0">
            <div className="card-header" id="kt_activities_header">
              <h3 className="card-title fw-bold text-dark">Activity Logs</h3>
              <div className="card-toolbar">
                <button
                  type="button"
                  className="btn btn-sm btn-icon btn-active-light-primary me-n5"
                  id="kt_activities_close"
                >
                  <span className="svg-icon svg-icon-1">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.5"
                        x={6}
                        y="17.3137"
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(-45 6 17.3137)"
                        fill="currentColor"
                      />
                      <rect
                        x="7.41422"
                        y={6}
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(45 7.41422 6)"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div
              className="card-body position-relative"
              id="kt_activities_body"
            >
              <div
                id="kt_activities_scroll"
                className="position-relative scroll-y me-n5 pe-5"
                data-kt-scroll="true"
                data-kt-scroll-height="auto"
                data-kt-scroll-wrappers="#kt_activities_body"
                data-kt-scroll-dependencies="#kt_activities_header, #kt_activities_footer"
                data-kt-scroll-offset="5px"
                style={{ height: 678 }}
              >
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-line w-40px" />
                    <div className="timeline-icon symbol symbol-circle symbol-40px me-4">
                      <div className="symbol-label bg-light">
                        <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M2 4V16C2 16.6 2.4 17 3 17H13L16.6 20.6C17.1 21.1 18 20.8 18 20V17H21C21.6 17 22 16.6 22 16V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4Z"
                              fill="currentColor"
                            />
                            <path
                              d="M18 9H6C5.4 9 5 8.6 5 8C5 7.4 5.4 7 6 7H18C18.6 7 19 7.4 19 8C19 8.6 18.6 9 18 9ZM16 12C16 11.4 15.6 11 15 11H6C5.4 11 5 11.4 5 12C5 12.6 5.4 13 6 13H15C15.6 13 16 12.6 16 12Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="timeline-content mb-10 mt-n1">
                      <div className="pe-3 mb-5">
                        <div className="fs-5 fw-semibold mb-2">
                          There are 2 new tasks for you in “AirPlus Mobile App”
                          project:
                        </div>
                        <div className="d-flex align-items-center mt-1 fs-6">
                          <div className="text-muted me-2 fs-7">
                            Added at 4:23 PM by
                          </div>
                          <div
                            className="symbol symbol-circle symbol-25px"
                            data-bs-toggle="tooltip"
                            data-bs-boundary="window"
                            data-bs-placement="top"
                            aria-label="Nina Nilson"
                            data-bs-original-title="Nina Nilson"
                            data-kt-initialized={1}
                          >
                            <img src="assets/img/300-14.jpg" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="overflow-auto pb-5">
                        <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5">
                          <a
                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/apps/projects/project.html"
                            className="fs-5 text-dark text-hover-primary fw-semibold w-375px min-w-200px"
                          >
                            Meeting with customer
                          </a>
                          <div className="min-w-175px pe-2">
                            <span className="badge badge-light text-muted">
                              Application Design
                            </span>
                          </div>
                          <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2">
                            <div className="symbol symbol-circle symbol-25px">
                              <img src="assets/img/300-2.jpg" alt="img" />
                            </div>
                            <div className="symbol symbol-circle symbol-25px">
                              <img src="assets/img/300-14.jpg" alt="img" />
                            </div>
                            <div className="symbol symbol-circle symbol-25px">
                              <div className="symbol-label fs-8 fw-semibold bg-primary text-inverse-primary">
                                A
                              </div>
                            </div>
                          </div>
                          <div className="min-w-125px pe-2">
                            <span className="badge badge-light-primary">
                              In Progress
                            </span>
                          </div>
                          <a
                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/apps/projects/project.html"
                            className="btn btn-sm btn-light btn-active-light-primary"
                          >
                            View
                          </a>
                        </div>
                        <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-0">
                          <a
                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/apps/projects/project.html"
                            className="fs-5 text-dark text-hover-primary fw-semibold w-375px min-w-200px"
                          >
                            Project Delivery Preparation
                          </a>
                          <div className="min-w-175px">
                            <span className="badge badge-light text-muted">
                              CRM System Development
                            </span>
                          </div>
                          <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px">
                            <div className="symbol symbol-circle symbol-25px">
                              <img src="assets/img/300-20.jpg" alt="img" />
                            </div>
                            <div className="symbol symbol-circle symbol-25px">
                              <div className="symbol-label fs-8 fw-semibold bg-success text-inverse-primary">
                                B
                              </div>
                            </div>
                          </div>
                          <div className="min-w-125px">
                            <span className="badge badge-light-success">
                              Completed
                            </span>
                          </div>
                          <a
                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/apps/projects/project.html"
                            className="btn btn-sm btn-light btn-active-light-primary"
                          >
                            View
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-line w-40px" />
                    <div className="timeline-icon symbol symbol-circle symbol-40px">
                      <div className="symbol-label bg-light">
                        <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M5.78001 21.115L3.28001 21.949C3.10897 22.0059 2.92548 22.0141 2.75004 21.9727C2.57461 21.9312 2.41416 21.8418 2.28669 21.7144C2.15923 21.5869 2.06975 21.4264 2.0283 21.251C1.98685 21.0755 1.99507 20.892 2.05201 20.7209L2.886 18.2209L7.22801 13.879L10.128 16.774L5.78001 21.115Z"
                              fill="currentColor"
                            />
                            <path
                              d="M21.7 8.08899L15.911 2.30005C15.8161 2.2049 15.7033 2.12939 15.5792 2.07788C15.455 2.02637 15.3219 1.99988 15.1875 1.99988C15.0531 1.99988 14.92 2.02637 14.7958 2.07788C14.6717 2.12939 14.5589 2.2049 14.464 2.30005L13.74 3.02295C13.548 3.21498 13.4402 3.4754 13.4402 3.74695C13.4402 4.01849 13.548 4.27892 13.74 4.47095L14.464 5.19397L11.303 8.35498C10.1615 7.80702 8.87825 7.62639 7.62985 7.83789C6.38145 8.04939 5.2293 8.64265 4.332 9.53601C4.14026 9.72817 4.03256 9.98855 4.03256 10.26C4.03256 10.5315 4.14026 10.7918 4.332 10.984L13.016 19.667C13.208 19.859 13.4684 19.9668 13.74 19.9668C14.0115 19.9668 14.272 19.859 14.464 19.667C15.3575 18.77 15.9509 17.618 16.1624 16.3698C16.374 15.1215 16.1932 13.8383 15.645 12.697L18.806 9.53601L19.529 10.26C19.721 10.452 19.9814 10.5598 20.253 10.5598C20.5245 10.5598 20.785 10.452 20.977 10.26L21.7 9.53601C21.7952 9.44108 21.8706 9.32825 21.9221 9.2041C21.9737 9.07995 22.0002 8.94691 22.0002 8.8125C22.0002 8.67809 21.9737 8.54505 21.9221 8.4209C21.8706 8.29675 21.7952 8.18392 21.7 8.08899Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="timeline-content mb-10 mt-n2">
                      <div className="overflow-auto pe-3">
                        <div className="fs-5 fw-semibold mb-2">
                          Invitation for crafting engaging designs that speak
                          human workshop
                        </div>
                        <div className="d-flex align-items-center mt-1 fs-6">
                          <div className="text-muted me-2 fs-7">
                            Sent at 4:23 PM by
                          </div>
                          <div
                            className="symbol symbol-circle symbol-25px"
                            data-bs-toggle="tooltip"
                            data-bs-boundary="window"
                            data-bs-placement="top"
                            aria-label="Alan Nilson"
                            data-bs-original-title="Alan Nilson"
                            data-kt-initialized={1}
                          >
                            <img src="assets/img/300-1.jpg" alt="img" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-line w-40px" />
                    <div className="timeline-icon symbol symbol-circle symbol-40px">
                      <div className="symbol-label bg-light">
                        <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.2166 8.50002L10.5166 7.80007C10.1166 7.40007 10.1166 6.80005 10.5166 6.40005L13.4166 3.50002C15.5166 1.40002 18.9166 1.50005 20.8166 3.90005C22.5166 5.90005 22.2166 8.90007 20.3166 10.8001L17.5166 13.6C17.1166 14 16.5166 14 16.1166 13.6L15.4166 12.9C15.0166 12.5 15.0166 11.9 15.4166 11.5L18.3166 8.6C19.2166 7.7 19.1166 6.30002 18.0166 5.50002C17.2166 4.90002 16.0166 5.10007 15.3166 5.80007L12.4166 8.69997C12.2166 8.89997 11.6166 8.90002 11.2166 8.50002ZM11.2166 15.6L8.51659 18.3001C7.81659 19.0001 6.71658 19.2 5.81658 18.6C4.81658 17.9 4.71659 16.4 5.51659 15.5L8.31658 12.7C8.71658 12.3 8.71658 11.7001 8.31658 11.3001L7.6166 10.6C7.2166 10.2 6.6166 10.2 6.2166 10.6L3.6166 13.2C1.7166 15.1 1.4166 18.1 3.1166 20.1C5.0166 22.4 8.51659 22.5 10.5166 20.5L13.3166 17.7C13.7166 17.3 13.7166 16.7001 13.3166 16.3001L12.6166 15.6C12.3166 15.2 11.6166 15.2 11.2166 15.6Z"
                              fill="currentColor"
                            />
                            <path
                              opacity="0.3"
                              d="M5.0166 9L2.81659 8.40002C2.31659 8.30002 2.0166 7.79995 2.1166 7.19995L2.31659 5.90002C2.41659 5.20002 3.21659 4.89995 3.81659 5.19995L6.0166 6.40002C6.4166 6.60002 6.6166 7.09998 6.5166 7.59998L6.31659 8.30005C6.11659 8.80005 5.5166 9.1 5.0166 9ZM8.41659 5.69995H8.6166C9.1166 5.69995 9.5166 5.30005 9.5166 4.80005L9.6166 3.09998C9.6166 2.49998 9.2166 2 8.5166 2H7.81659C7.21659 2 6.71659 2.59995 6.91659 3.19995L7.31659 4.90002C7.41659 5.40002 7.91659 5.69995 8.41659 5.69995ZM14.6166 18.2L15.1166 21.3C15.2166 21.8 15.7166 22.2 16.2166 22L17.6166 21.6C18.1166 21.4 18.4166 20.8 18.1166 20.3L16.7166 17.5C16.5166 17.1 16.1166 16.9 15.7166 17L15.2166 17.1C14.8166 17.3 14.5166 17.7 14.6166 18.2ZM18.4166 16.3L19.8166 17.2C20.2166 17.5 20.8166 17.3 21.0166 16.8L21.3166 15.9C21.5166 15.4 21.1166 14.8 20.5166 14.8H18.8166C18.0166 14.8 17.7166 15.9 18.4166 16.3Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="timeline-content mb-10 mt-n1">
                      <div className="mb-5 pe-3">
                        <a
                          href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                          className="fs-5 fw-semibold text-gray-800 text-hover-primary mb-2"
                        >
                          3 New Incoming Project Files:
                        </a>
                        <div className="d-flex align-items-center mt-1 fs-6">
                          <div className="text-muted me-2 fs-7">
                            Sent at 10:30 PM by
                          </div>
                          <div
                            className="symbol symbol-circle symbol-25px"
                            data-bs-toggle="tooltip"
                            data-bs-boundary="window"
                            data-bs-placement="top"
                            aria-label="Jan Hummer"
                            data-bs-original-title="Jan Hummer"
                            data-kt-initialized={1}
                          >
                            <img src="assets/img/300-23.jpg" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="overflow-auto pb-5">
                        <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                          <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                            <img
                              alt=""
                              className="w-30px me-3"
                              src="assets/img/pdf.svg"
                            />
                            <div className="ms-1 fw-semibold">
                              <a
                                href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/apps/projects/project.html"
                                className="fs-6 text-hover-primary fw-bold"
                              >
                                Finance KPI App Guidelines
                              </a>
                              <div className="text-gray-400">1.9mb</div>
                            </div>
                          </div>
                          <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                            <img
                              alt="../../demo1/dist/apps/projects/project.html"
                              className="w-30px me-3"
                              src="assets/img/doc.svg"
                            />
                            <div className="ms-1 fw-semibold">
                              <a
                                href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                className="fs-6 text-hover-primary fw-bold"
                              >
                                Client UAT Testing Results
                              </a>
                              <div className="text-gray-400">18kb</div>
                            </div>
                          </div>
                          <div className="d-flex flex-aligns-center">
                            <img
                              alt="../../demo1/dist/apps/projects/project.html"
                              className="w-30px me-3"
                              src="assets/img/css.svg"
                            />
                            <div className="ms-1 fw-semibold">
                              <a
                                href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                className="fs-6 text-hover-primary fw-bold"
                              >
                                Finance Reports
                              </a>
                              <div className="text-gray-400">20mb</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-line w-40px" />
                    <div className="timeline-icon symbol symbol-circle symbol-40px">
                      <div className="symbol-label bg-light">
                        <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                              fill="currentColor"
                            />
                            <path
                              d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="timeline-content mb-10 mt-n1">
                      <div className="pe-3 mb-5">
                        <div className="fs-5 fw-semibold mb-2">
                          Task
                          <a
                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                            className="text-primary fw-bold me-1"
                          >
                            #45890
                          </a>
                          merged with
                          <a
                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                            className="text-primary fw-bold me-1"
                          >
                            #45890
                          </a>
                          in “Ads Pro Admin Dashboard project:
                        </div>
                        <div className="d-flex align-items-center mt-1 fs-6">
                          <div className="text-muted me-2 fs-7">
                            Initiated at 4:23 PM by
                          </div>
                          <div
                            className="symbol symbol-circle symbol-25px"
                            data-bs-toggle="tooltip"
                            data-bs-boundary="window"
                            data-bs-placement="top"
                            aria-label="Nina Nilson"
                            data-bs-original-title="Nina Nilson"
                            data-kt-initialized={1}
                          >
                            <img src="assets/img/300-14.jpg" alt="img" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-line w-40px" />
                    <div className="timeline-icon symbol symbol-circle symbol-40px">
                      <div className="symbol-label bg-light">
                        <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                              fill="currentColor"
                            />
                            <path
                              d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="timeline-content mb-10 mt-n1">
                      <div className="pe-3 mb-5">
                        <div className="fs-5 fw-semibold mb-2">
                          3 new application design concepts added:
                        </div>
                        <div className="d-flex align-items-center mt-1 fs-6">
                          <div className="text-muted me-2 fs-7">
                            Created at 4:23 PM by
                          </div>
                          <div
                            className="symbol symbol-circle symbol-25px"
                            data-bs-toggle="tooltip"
                            data-bs-boundary="window"
                            data-bs-placement="top"
                            aria-label="Marcus Dotson"
                            data-bs-original-title="Marcus Dotson"
                            data-kt-initialized={1}
                          >
                            <img src="assets/img/300-2.jpg" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="overflow-auto pb-5">
                        <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                          <div className="overlay me-10">
                            <div className="overlay-wrapper">
                              <img
                                alt="img"
                                className="rounded w-150px"
                                src="assets/img/img-29.jpg"
                              />
                            </div>
                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                              <a
                                href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                className="btn btn-sm btn-primary btn-shadow"
                              >
                                Explore
                              </a>
                            </div>
                          </div>
                          <div className="overlay me-10">
                            <div className="overlay-wrapper">
                              <img
                                alt="img"
                                className="rounded w-150px"
                                src="assets/img/img-31.jpg"
                              />
                            </div>
                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                              <a
                                href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                className="btn btn-sm btn-primary btn-shadow"
                              >
                                Explore
                              </a>
                            </div>
                          </div>
                          <div className="overlay">
                            <div className="overlay-wrapper">
                              <img
                                alt="img"
                                className="rounded w-150px"
                                src="assets/img/img-40(1).jpg"
                              />
                            </div>
                            <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                              <a
                                href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                className="btn btn-sm btn-primary btn-shadow"
                              >
                                Explore
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-line w-40px" />
                    <div className="timeline-icon symbol symbol-circle symbol-40px">
                      <div className="symbol-label bg-light">
                        <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z"
                              fill="currentColor"
                            />
                            <path
                              opacity="0.3"
                              d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="timeline-content mb-10 mt-n1">
                      <div className="pe-3 mb-5">
                        <div className="fs-5 fw-semibold mb-2">
                          New case
                          <a
                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                            className="text-primary fw-bold me-1"
                          >
                            #67890
                          </a>
                          is assigned to you in Multi-platform Database Design
                          project
                        </div>
                        <div className="overflow-auto pb-5">
                          <div className="d-flex align-items-center mt-1 fs-6">
                            <div className="text-muted me-2 fs-7">
                              Added at 4:23 PM by
                            </div>
                            <a
                              href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                              className="text-primary fw-bold me-1"
                            >
                              Alice Tan
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-line w-40px" />
                    <div className="timeline-icon symbol symbol-circle symbol-40px">
                      <div className="symbol-label bg-light">
                        <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                              fill="currentColor"
                            />
                            <path
                              d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="timeline-content mb-10 mt-n1">
                      <div className="pe-3 mb-5">
                        <div className="fs-5 fw-semibold mb-2">
                          You have received a new order:
                        </div>
                        <div className="d-flex align-items-center mt-1 fs-6">
                          <div className="text-muted me-2 fs-7">
                            Placed at 5:05 AM by
                          </div>
                          <div
                            className="symbol symbol-circle symbol-25px"
                            data-bs-toggle="tooltip"
                            data-bs-boundary="window"
                            data-bs-placement="top"
                            aria-label="Robert Rich"
                            data-bs-original-title="Robert Rich"
                            data-kt-initialized={1}
                          >
                            <img src="assets/img/300-4.jpg" alt="img" />
                          </div>
                        </div>
                      </div>
                      <div className="overflow-auto pb-5">
                        <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed min-w-lg-600px flex-shrink-0 p-6">
                          <span className="svg-icon svg-icon-2tx svg-icon-primary me-4">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.3"
                                d="M19.0687 17.9688H11.0687C10.4687 17.9688 10.0687 18.3687 10.0687 18.9688V19.9688C10.0687 20.5687 10.4687 20.9688 11.0687 20.9688H19.0687C19.6687 20.9688 20.0687 20.5687 20.0687 19.9688V18.9688C20.0687 18.3687 19.6687 17.9688 19.0687 17.9688Z"
                                fill="currentColor"
                              />
                              <path
                                d="M4.06875 17.9688C3.86875 17.9688 3.66874 17.8688 3.46874 17.7688C2.96874 17.4688 2.86875 16.8688 3.16875 16.3688L6.76874 10.9688L3.16875 5.56876C2.86875 5.06876 2.96874 4.46873 3.46874 4.16873C3.96874 3.86873 4.56875 3.96878 4.86875 4.46878L8.86875 10.4688C9.06875 10.7688 9.06875 11.2688 8.86875 11.5688L4.86875 17.5688C4.66875 17.7688 4.36875 17.9688 4.06875 17.9688Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          <div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
                            <div className="mb-3 mb-md-0 fw-semibold">
                              <h4 className="text-gray-900 fw-bold">
                                Database Backup Process Completed!
                              </h4>
                              <div className="fs-6 text-gray-700 pe-7">
                                Login into Admin Dashboard to make sure the data
                                integrity is OK
                              </div>
                            </div>
                            <a
                              href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                              className="btn btn-primary px-6 align-self-center text-nowrap"
                            >
                              Proceed
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-line w-40px" />
                    <div className="timeline-icon symbol symbol-circle symbol-40px">
                      <div className="symbol-label bg-light">
                        <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z"
                              fill="currentColor"
                            />
                            <path
                              opacity="0.3"
                              d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z"
                              fill="currentColor"
                            />
                            <path
                              opacity="0.3"
                              d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="timeline-content mt-n1">
                      <div className="pe-3 mb-5">
                        <div className="fs-5 fw-semibold mb-2">
                          New order
                          <a
                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                            className="text-primary fw-bold me-1"
                          >
                            #67890
                          </a>
                          is placed for Workshow Planning &amp; Budget
                          Estimation
                        </div>
                        <div className="d-flex align-items-center mt-1 fs-6">
                          <div className="text-muted me-2 fs-7">
                            Placed at 4:23 PM by
                          </div>
                          <a
                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                            className="text-primary fw-bold me-1"
                          >
                            Jimmy Bold
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card-footer py-5 text-center"
              id="kt_activities_footer"
            >
              <a
                href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/pages/user-profile/activity.html"
                className="btn btn-bg-body text-primary"
              >
                View All Activities
                <span className="svg-icon svg-icon-3 svg-icon-primary">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      opacity="0.5"
                      x={18}
                      y={13}
                      width={13}
                      height={2}
                      rx={1}
                      transform="rotate(-180 18 13)"
                      fill="currentColor"
                    />
                    <path
                      d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div
          id="kt_drawer_chat"
          className="bg-body drawer drawer-end"
          data-kt-drawer="true"
          data-kt-drawer-name="chat"
          data-kt-drawer-activate="true"
          data-kt-drawer-overlay="true"
          data-kt-drawer-width="{default:'300px', 'md': '500px'}"
          data-kt-drawer-direction="end"
          data-kt-drawer-toggle="#kt_drawer_chat_toggle"
          data-kt-drawer-close="#kt_drawer_chat_close"
          style={{ width: "500px !important" }}
        >
          <div
            className="card w-100 rounded-0 border-0"
            id="kt_drawer_chat_messenger"
          >
            <div
              className="card-header pe-5"
              id="kt_drawer_chat_messenger_header"
            >
              <div className="card-title">
                <div className="d-flex justify-content-center flex-column me-3">
                  <a
                    href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                    className="fs-4 fw-bold text-gray-900 text-hover-primary me-1 mb-2 lh-1"
                  >
                    Brian Cox
                  </a>
                  <div className="mb-0 lh-1">
                    <span className="badge badge-success badge-circle w-10px h-10px me-1" />
                    <span className="fs-7 fw-semibold text-muted">Active</span>
                  </div>
                </div>
              </div>
              <div className="card-toolbar">
                <div className="me-2">
                  <button
                    className="btn btn-sm btn-icon btn-active-light-primary"
                    data-kt-menu-trigger="click"
                    data-kt-menu-placement="bottom-end"
                  >
                    <i className="bi bi-three-dots fs-3" />
                  </button>
                  <div
                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                    data-kt-menu="true"
                  >
                    <div className="menu-item px-3">
                      <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                        Contacts
                      </div>
                    </div>
                    <div className="menu-item px-3">
                      <a
                        href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                        className="menu-link px-3"
                        data-bs-toggle="modal"
                        data-bs-target="#kt_modal_users_search"
                      >
                        Add Contact
                      </a>
                    </div>
                    <div className="menu-item px-3">
                      <a
                        href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                        className="menu-link flex-stack px-3"
                        data-bs-toggle="modal"
                        data-bs-target="#kt_modal_invite_friends"
                      >
                        Invite Contacts
                        <i
                          className="fas fa-exclamation-circle ms-2 fs-7"
                          data-bs-toggle="tooltip"
                          aria-label="Specify a contact email to send an invitation"
                          data-bs-original-title="Specify a contact email to send an invitation"
                          data-kt-initialized={1}
                        />
                      </a>
                    </div>
                    <div
                      className="menu-item px-3"
                      data-kt-menu-trigger="hover"
                      data-kt-menu-placement="right-start"
                    >
                      <a
                        href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                        className="menu-link px-3"
                      >
                        <span className="menu-title">Groups</span>
                        <span className="menu-arrow" />
                      </a>
                      <div className="menu-sub menu-sub-dropdown w-175px py-4">
                        <div className="menu-item px-3">
                          <a
                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                            className="menu-link px-3"
                            data-bs-toggle="tooltip"
                            data-bs-original-title="Coming soon"
                            data-kt-initialized={1}
                          >
                            Create Group
                          </a>
                        </div>
                        <div className="menu-item px-3">
                          <a
                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                            className="menu-link px-3"
                            data-bs-toggle="tooltip"
                            data-bs-original-title="Coming soon"
                            data-kt-initialized={1}
                          >
                            Invite Members
                          </a>
                        </div>
                        <div className="menu-item px-3">
                          <a
                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                            className="menu-link px-3"
                            data-bs-toggle="tooltip"
                            data-bs-original-title="Coming soon"
                            data-kt-initialized={1}
                          >
                            Settings
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="menu-item px-3 my-1">
                      <a
                        href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                        className="menu-link px-3"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Coming soon"
                        data-kt-initialized={1}
                      >
                        Settings
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="btn btn-sm btn-icon btn-active-light-primary"
                  id="kt_drawer_chat_close"
                >
                  <span className="svg-icon svg-icon-2">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.5"
                        x={6}
                        y="17.3137"
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(-45 6 17.3137)"
                        fill="currentColor"
                      />
                      <rect
                        x="7.41422"
                        y={6}
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(45 7.41422 6)"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="card-body" id="kt_drawer_chat_messenger_body">
              <div
                className="scroll-y me-n5 pe-5"
                data-kt-element="messages"
                data-kt-scroll="true"
                data-kt-scroll-activate="true"
                data-kt-scroll-height="auto"
                data-kt-scroll-dependencies="#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer"
                data-kt-scroll-wrappers="#kt_drawer_chat_messenger_body"
                data-kt-scroll-offset="0px"
                style={{ height: 624 }}
              >
                <div className="d-flex justify-content-start mb-10">
                  <div className="d-flex flex-column align-items-start">
                    <div className="d-flex align-items-center mb-2">
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/img/300-25.jpg" />
                      </div>
                      <div className="ms-3">
                        <a
                          href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                        >
                          Brian Cox
                        </a>
                        <span className="text-muted fs-7 mb-1">2 mins</span>
                      </div>
                    </div>
                    <div
                      className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start"
                      data-kt-element="message-text"
                    >
                      How likely are you to recommend our company to your
                      friends and family ?
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-10">
                  <div className="d-flex flex-column align-items-end">
                    <div className="d-flex align-items-center mb-2">
                      <div className="me-3">
                        <span className="text-muted fs-7 mb-1">5 mins</span>
                        <a
                          href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                        >
                          You
                        </a>
                      </div>
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/img/300-1.jpg" />
                      </div>
                    </div>
                    <div
                      className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end"
                      data-kt-element="message-text"
                    >
                      Hey there, we’re just writing to let you know that you’ve
                      been subscribed to a repository on GitHub.
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-start mb-10">
                  <div className="d-flex flex-column align-items-start">
                    <div className="d-flex align-items-center mb-2">
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/img/300-25.jpg" />
                      </div>
                      <div className="ms-3">
                        <a
                          href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                        >
                          Brian Cox
                        </a>
                        <span className="text-muted fs-7 mb-1">1 Hour</span>
                      </div>
                    </div>
                    <div
                      className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start"
                      data-kt-element="message-text"
                    >
                      Ok, Understood!
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-10">
                  <div className="d-flex flex-column align-items-end">
                    <div className="d-flex align-items-center mb-2">
                      <div className="me-3">
                        <span className="text-muted fs-7 mb-1">2 Hours</span>
                        <a
                          href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                        >
                          You
                        </a>
                      </div>
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/img/300-1.jpg" />
                      </div>
                    </div>
                    <div
                      className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end"
                      data-kt-element="message-text"
                    >
                      You’ll receive notifications for all issues, pull
                      requests!
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-start mb-10">
                  <div className="d-flex flex-column align-items-start">
                    <div className="d-flex align-items-center mb-2">
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/img/300-25.jpg" />
                      </div>
                      <div className="ms-3">
                        <a
                          href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                        >
                          Brian Cox
                        </a>
                        <span className="text-muted fs-7 mb-1">3 Hours</span>
                      </div>
                    </div>
                    <div
                      className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start"
                      data-kt-element="message-text"
                    >
                      You can unwatch this repository immediately by clicking
                      here:
                      <a href="https://keenthemes.com/">Keenthemes.com</a>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-10">
                  <div className="d-flex flex-column align-items-end">
                    <div className="d-flex align-items-center mb-2">
                      <div className="me-3">
                        <span className="text-muted fs-7 mb-1">4 Hours</span>
                        <a
                          href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                        >
                          You
                        </a>
                      </div>
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/img/300-1.jpg" />
                      </div>
                    </div>
                    <div
                      className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end"
                      data-kt-element="message-text"
                    >
                      Most purchased Business courses during this sale!
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-start mb-10">
                  <div className="d-flex flex-column align-items-start">
                    <div className="d-flex align-items-center mb-2">
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/img/300-25.jpg" />
                      </div>
                      <div className="ms-3">
                        <a
                          href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                        >
                          Brian Cox
                        </a>
                        <span className="text-muted fs-7 mb-1">5 Hours</span>
                      </div>
                    </div>
                    <div
                      className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start"
                      data-kt-element="message-text"
                    >
                      Company BBQ to celebrate the last quater achievements and
                      goals. Food and drinks provided
                    </div>
                  </div>
                </div>
                <div
                  className="d-flex justify-content-end mb-10 d-none"
                  data-kt-element="template-out"
                >
                  <div className="d-flex flex-column align-items-end">
                    <div className="d-flex align-items-center mb-2">
                      <div className="me-3">
                        <span className="text-muted fs-7 mb-1">Just now</span>
                        <a
                          href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                        >
                          You
                        </a>
                      </div>
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/img/300-1.jpg" />
                      </div>
                    </div>
                    <div
                      className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end"
                      data-kt-element="message-text"
                    />
                  </div>
                </div>
                <div
                  className="d-flex justify-content-start mb-10 d-none"
                  data-kt-element="template-in"
                >
                  <div className="d-flex flex-column align-items-start">
                    <div className="d-flex align-items-center mb-2">
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/img/300-25.jpg" />
                      </div>
                      <div className="ms-3">
                        <a
                          href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                        >
                          Brian Cox
                        </a>
                        <span className="text-muted fs-7 mb-1">Just now</span>
                      </div>
                    </div>
                    <div
                      className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start"
                      data-kt-element="message-text"
                    >
                      Right before vacation season we have the next Big Deal for
                      you.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card-footer pt-4"
              id="kt_drawer_chat_messenger_footer"
            >
              <textarea
                className="form-control form-control-flush mb-3"
                rows={1}
                data-kt-element="input"
                placeholder="Type a message"
                defaultValue={""}
              />
              <div className="d-flex flex-stack">
                <div className="d-flex align-items-center me-2">
                  <button
                    className="btn btn-sm btn-icon btn-active-light-primary me-1"
                    type="button"
                    data-bs-toggle="tooltip"
                    aria-label="Coming soon"
                    data-bs-original-title="Coming soon"
                    data-kt-initialized={1}
                  >
                    <i className="bi bi-paperclip fs-3" />
                  </button>
                  <button
                    className="btn btn-sm btn-icon btn-active-light-primary me-1"
                    type="button"
                    data-bs-toggle="tooltip"
                    aria-label="Coming soon"
                    data-bs-original-title="Coming soon"
                    data-kt-initialized={1}
                  >
                    <i className="bi bi-upload fs-3" />
                  </button>
                </div>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-kt-element="send"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          id="kt_shopping_cart"
          className="bg-body drawer drawer-end"
          data-kt-drawer="true"
          data-kt-drawer-name="cart"
          data-kt-drawer-activate="true"
          data-kt-drawer-overlay="true"
          data-kt-drawer-width="{default:'300px', 'md': '500px'}"
          data-kt-drawer-direction="end"
          data-kt-drawer-toggle="#kt_drawer_shopping_cart_toggle"
          data-kt-drawer-close="#kt_drawer_shopping_cart_close"
          style={{ width: "500px !important" }}
        >
          <div className="card card-flush w-100 rounded-0">
            <div className="card-header">
              <h3 className="card-title text-gray-900 fw-bold">
                Shopping Cart
              </h3>
              <div className="card-toolbar">
                <div
                  className="btn btn-sm btn-icon btn-active-light-primary"
                  id="kt_drawer_shopping_cart_close"
                >
                  <span className="svg-icon svg-icon-2">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.5"
                        x={6}
                        y="17.3137"
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(-45 6 17.3137)"
                        fill="currentColor"
                      />
                      <rect
                        x="7.41422"
                        y={6}
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(45 7.41422 6)"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="card-body hover-scroll-overlay-y h-400px pt-5">
              <div className="d-flex flex-stack">
                <div className="d-flex flex-column me-3">
                  <div className="mb-3">
                    <a
                      href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/apps/ecommerce/sales/details.html"
                      className="text-gray-800 text-hover-primary fs-4 fw-bold"
                    >
                      Iblender
                    </a>
                    <span className="text-gray-400 fw-semibold d-block">
                      The best kitchen gadget in 2022
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="fw-bold text-gray-800 fs-5">$ 350</span>
                    <span className="text-muted mx-2">for</span>
                    <span className="fw-bold text-gray-800 fs-5 me-3">5</span>
                    <a
                      href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                      className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                    >
                      <span className="svg-icon svg-icon-4">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="4.36396"
                            y="11.364"
                            width={16}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </a>
                    <a
                      href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                      className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                    >
                      <span className="svg-icon svg-icon-4">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.5"
                            x="11.364"
                            y="20.364"
                            width={16}
                            height={2}
                            rx={1}
                            transform="rotate(-90 11.364 20.364)"
                            fill="currentColor"
                          />
                          <rect
                            x="4.36396"
                            y="11.364"
                            width={16}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                  <img src="assets/img/img-1.jpg" alt="" />
                </div>
              </div>
              <div className="separator separator-dashed my-6" />
              <div className="d-flex flex-stack">
                <div className="d-flex flex-column me-3">
                  <div className="mb-3">
                    <a
                      href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/apps/ecommerce/sales/details.html"
                      className="text-gray-800 text-hover-primary fs-4 fw-bold"
                    >
                      SmartCleaner
                    </a>
                    <span className="text-gray-400 fw-semibold d-block">
                      Smart tool for cooking
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="fw-bold text-gray-800 fs-5">$ 650</span>
                    <span className="text-muted mx-2">for</span>
                    <span className="fw-bold text-gray-800 fs-5 me-3">4</span>
                    <a
                      href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                      className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                    >
                      <span className="svg-icon svg-icon-4">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="4.36396"
                            y="11.364"
                            width={16}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </a>
                    <a
                      href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                      className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                    >
                      <span className="svg-icon svg-icon-4">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.5"
                            x="11.364"
                            y="20.364"
                            width={16}
                            height={2}
                            rx={1}
                            transform="rotate(-90 11.364 20.364)"
                            fill="currentColor"
                          />
                          <rect
                            x="4.36396"
                            y="11.364"
                            width={16}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                  <img src="assets/img/img-3.jpg" alt="" />
                </div>
              </div>
              <div className="separator separator-dashed my-6" />
              <div className="d-flex flex-stack">
                <div className="d-flex flex-column me-3">
                  <div className="mb-3">
                    <a
                      href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/apps/ecommerce/sales/details.html"
                      className="text-gray-800 text-hover-primary fs-4 fw-bold"
                    >
                      CameraMaxr
                    </a>
                    <span className="text-gray-400 fw-semibold d-block">
                      Professional camera for edge
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="fw-bold text-gray-800 fs-5">$ 150</span>
                    <span className="text-muted mx-2">for</span>
                    <span className="fw-bold text-gray-800 fs-5 me-3">3</span>
                    <a
                      href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                      className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                    >
                      <span className="svg-icon svg-icon-4">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="4.36396"
                            y="11.364"
                            width={16}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </a>
                    <a
                      href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                      className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                    >
                      <span className="svg-icon svg-icon-4">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.5"
                            x="11.364"
                            y="20.364"
                            width={16}
                            height={2}
                            rx={1}
                            transform="rotate(-90 11.364 20.364)"
                            fill="currentColor"
                          />
                          <rect
                            x="4.36396"
                            y="11.364"
                            width={16}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                  <img src="assets/img/img-8.jpg" alt="" />
                </div>
              </div>
              <div className="separator separator-dashed my-6" />
              <div className="d-flex flex-stack">
                <div className="d-flex flex-column me-3">
                  <div className="mb-3">
                    <a
                      href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/apps/ecommerce/sales/details.html"
                      className="text-gray-800 text-hover-primary fs-4 fw-bold"
                    >
                      $D Printer
                    </a>
                    <span className="text-gray-400 fw-semibold d-block">
                      Manfactoring unique objekts
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="fw-bold text-gray-800 fs-5">$ 1450</span>
                    <span className="text-muted mx-2">for</span>
                    <span className="fw-bold text-gray-800 fs-5 me-3">7</span>
                    <a
                      href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                      className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                    >
                      <span className="svg-icon svg-icon-4">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="4.36396"
                            y="11.364"
                            width={16}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </a>
                    <a
                      href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                      className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                    >
                      <span className="svg-icon svg-icon-4">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.5"
                            x="11.364"
                            y="20.364"
                            width={16}
                            height={2}
                            rx={1}
                            transform="rotate(-90 11.364 20.364)"
                            fill="currentColor"
                          />
                          <rect
                            x="4.36396"
                            y="11.364"
                            width={16}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                  <img src="assets/img/img-26.jpg" alt="" />
                </div>
              </div>
              <div className="separator separator-dashed my-6" />
              <div className="d-flex flex-stack">
                <div className="d-flex flex-column me-3">
                  <div className="mb-3">
                    <a
                      href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/apps/ecommerce/sales/details.html"
                      className="text-gray-800 text-hover-primary fs-4 fw-bold"
                    >
                      MotionWire
                    </a>
                    <span className="text-gray-400 fw-semibold d-block">
                      Perfect animation tool
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="fw-bold text-gray-800 fs-5">$ 650</span>
                    <span className="text-muted mx-2">for</span>
                    <span className="fw-bold text-gray-800 fs-5 me-3">7</span>
                    <a
                      href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                      className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                    >
                      <span className="svg-icon svg-icon-4">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="4.36396"
                            y="11.364"
                            width={16}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </a>
                    <a
                      href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                      className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                    >
                      <span className="svg-icon svg-icon-4">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.5"
                            x="11.364"
                            y="20.364"
                            width={16}
                            height={2}
                            rx={1}
                            transform="rotate(-90 11.364 20.364)"
                            fill="currentColor"
                          />
                          <rect
                            x="4.36396"
                            y="11.364"
                            width={16}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                  <img src="assets/img/img-21.jpg" alt="" />
                </div>
              </div>
              <div className="separator separator-dashed my-6" />
              <div className="d-flex flex-stack">
                <div className="d-flex flex-column me-3">
                  <div className="mb-3">
                    <a
                      href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/apps/ecommerce/sales/details.html"
                      className="text-gray-800 text-hover-primary fs-4 fw-bold"
                    >
                      Samsung
                    </a>
                    <span className="text-gray-400 fw-semibold d-block">
                      Profile info,Timeline etc
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="fw-bold text-gray-800 fs-5">$ 720</span>
                    <span className="text-muted mx-2">for</span>
                    <span className="fw-bold text-gray-800 fs-5 me-3">6</span>
                    <a
                      href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                      className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                    >
                      <span className="svg-icon svg-icon-4">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="4.36396"
                            y="11.364"
                            width={16}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </a>
                    <a
                      href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                      className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                    >
                      <span className="svg-icon svg-icon-4">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.5"
                            x="11.364"
                            y="20.364"
                            width={16}
                            height={2}
                            rx={1}
                            transform="rotate(-90 11.364 20.364)"
                            fill="currentColor"
                          />
                          <rect
                            x="4.36396"
                            y="11.364"
                            width={16}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                  <img src="assets/img/img-34.jpg" alt="" />
                </div>
              </div>
              <div className="separator separator-dashed my-6" />
              <div className="d-flex flex-stack">
                <div className="d-flex flex-column me-3">
                  <div className="mb-3">
                    <a
                      href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/apps/ecommerce/sales/details.html"
                      className="text-gray-800 text-hover-primary fs-4 fw-bold"
                    >
                      $D Printer
                    </a>
                    <span className="text-gray-400 fw-semibold d-block">
                      Manfactoring unique objekts
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="fw-bold text-gray-800 fs-5">$ 430</span>
                    <span className="text-muted mx-2">for</span>
                    <span className="fw-bold text-gray-800 fs-5 me-3">8</span>
                    <a
                      href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                      className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                    >
                      <span className="svg-icon svg-icon-4">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="4.36396"
                            y="11.364"
                            width={16}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </a>
                    <a
                      href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                      className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                    >
                      <span className="svg-icon svg-icon-4">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.5"
                            x="11.364"
                            y="20.364"
                            width={16}
                            height={2}
                            rx={1}
                            transform="rotate(-90 11.364 20.364)"
                            fill="currentColor"
                          />
                          <rect
                            x="4.36396"
                            y="11.364"
                            width={16}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                  <img src="assets/img/img-27.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="d-flex flex-stack">
                <span className="fw-bold text-gray-600">Total</span>
                <span className="text-gray-800 fw-bolder fs-5">$ 1840.00</span>
              </div>
              <div className="d-flex flex-stack">
                <span className="fw-bold text-gray-600">Sub total</span>
                <span className="text-primary fw-bolder fs-5">$ 246.35</span>
              </div>
              <div className="d-flex justify-content-end mt-9">
                <a
                  href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                  className="btn btn-primary d-flex justify-content-end"
                >
                  Pleace Order
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          id="kt_engage_demos"
          className="bg-body drawer drawer-end"
          data-kt-drawer="true"
          data-kt-drawer-name="explore"
          data-kt-drawer-activate="true"
          data-kt-drawer-overlay="true"
          data-kt-drawer-width="{default:'350px', 'lg': '475px'}"
          data-kt-drawer-direction="end"
          data-kt-drawer-toggle="#kt_engage_demos_toggle"
          data-kt-drawer-close="#kt_engage_demos_close"
          style={{ width: "475px !important" }}
        >
          <div className="card shadow-none rounded-0 w-100">
            <div className="card-header" id="kt_engage_demos_header">
              <h3 className="card-title fw-bold text-gray-700">Demos</h3>
              <div className="card-toolbar">
                <button
                  type="button"
                  className="btn btn-sm btn-icon btn-active-color-primary h-40px w-40px me-n6"
                  id="kt_engage_demos_close"
                >
                  <span className="svg-icon svg-icon-2">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.5"
                        x={6}
                        y="17.3137"
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(-45 6 17.3137)"
                        fill="currentColor"
                      />
                      <rect
                        x="7.41422"
                        y={6}
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(45 7.41422 6)"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="card-body" id="kt_engage_demos_body">
              <div
                id="kt_explore_scroll"
                className="scroll-y me-n5 pe-5"
                data-kt-scroll="true"
                data-kt-scroll-height="auto"
                data-kt-scroll-wrappers="#kt_engage_demos_body"
                data-kt-scroll-dependencies="#kt_engage_demos_header"
                data-kt-scroll-offset="5px"
                style={{ height: 753 }}
              >
                <div className="mb-0">
                  <div className="mb-7">
                    <div className="d-flex flex-stack">
                      <h3 className="mb-0">Keen Licenses</h3>
                      <a
                        href="https://themes.getbootstrap.com/licenses/"
                        className="fw-semibold"
                        target="_blank"
                      >
                        License FAQs
                      </a>
                    </div>
                  </div>
                  <div className="rounded border border-dashed border-gray-300 py-4 px-6 mb-5">
                    <div className="d-flex flex-stack">
                      <div className="d-flex flex-column">
                        <div className="d-flex align-items-center mb-1">
                          <div className="fs-6 fw-semibold text-gray-800 fw-semibold mb-0 me-1">
                            Standard License
                          </div>
                          <i
                            className="text-gray-400 fas fa-exclamation-circle ms-1 fs-7"
                            data-bs-toggle="popover"
                            data-bs-custom-class="popover-inverse"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            data-bs-content="Use, by you or one client in a single site which end users are not charged for"
                            data-kt-initialized={1}
                          />
                        </div>
                        <div className="fs-7 text-muted">
                          For single site used by you or one client
                        </div>
                      </div>
                      <div className="text-nowrap">
                        <span className="text-muted fs-7 fw-semibold me-n1">
                          $
                        </span>
                        <span className="text-dark fs-1 fw-bold">49</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded border border-dashed border-gray-300 py-4 px-6 mb-5">
                    <div className="d-flex flex-stack">
                      <div className="d-flex flex-column">
                        <div className="d-flex align-items-center mb-1">
                          <div className="fs-6 fw-semibold text-gray-800 fw-semibold mb-0 me-1">
                            Multisite License
                          </div>
                          <i
                            className="text-gray-400 fas fa-exclamation-circle ms-1 fs-7"
                            data-bs-toggle="popover"
                            data-bs-custom-class="popover-inverse"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            data-bs-content="Use, by you or one client, in a single site which end users can be charged for."
                            data-kt-initialized={1}
                          />
                        </div>
                        <div className="fs-7 text-muted">
                          For unlimited sites used by you or one client
                        </div>
                      </div>
                      <div className="text-nowrap">
                        <span className="text-muted fs-7 fw-semibold me-n1">
                          $
                        </span>
                        <span className="text-dark fs-1 fw-bold">129</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded border border-dashed border-gray-300 py-4 px-6 mb-5">
                    <div className="d-flex flex-stack">
                      <div className="d-flex flex-column">
                        <div className="d-flex align-items-center mb-1">
                          <div className="fs-6 fw-semibold text-gray-800 fw-semibold mb-0 me-1">
                            Extended License
                          </div>
                          <i
                            className="text-gray-400 fas fa-exclamation-circle ms-1 fs-7"
                            data-bs-toggle="popover"
                            data-bs-custom-class="popover-inverse"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            data-bs-content="Use, by you or one client, in a single site which end users can be charged for."
                            data-kt-initialized={1}
                          />
                        </div>
                        <div className="fs-7 text-muted">
                          For single SaaS app with paying users
                        </div>
                      </div>
                      <div className="text-nowrap">
                        <span className="text-muted fs-7 fw-semibold me-n1">
                          $
                        </span>
                        <span className="text-dark fs-1 fw-bold">429</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded border border-dashed border-gray-300 py-4 px-6 mb-5">
                    <div className="d-flex flex-stack">
                      <div className="d-flex flex-column">
                        <div className="d-flex align-items-center mb-1">
                          <div className="fs-6 fw-semibold text-gray-800 fw-semibold mb-0 me-1">
                            Custom License
                          </div>
                        </div>
                        <div className="fs-7 text-muted">
                          Reach us for custom license offers.
                        </div>
                      </div>
                      <div className="text-nowrap">
                        <a
                          href="https://keenthemes.com/contact"
                          className="btn btn-sm btn-success"
                          target="_blank"
                        >
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://themes.getbootstrap.com/product/keen-the-ultimate-bootstrap-admin-theme/"
                    className="btn btn-primary fw-bold mb-15 w-100"
                  >
                    Buy Now
                  </a>
                  <div className="mb-0">
                    <h3 className="fw-bold text-center mb-6">9 Keen Demos</h3>
                    <div className="row g-5">
                      <div className="col-6">
                        <div className="overlay overflow-hidden position-relative border border-4 border-success rounded">
                          <div className="overlay-wrapper">
                            <img
                              src="assets/img/light-ltr.png"
                              alt="demo"
                              className="w-100"
                            />
                          </div>
                          <div className="overlay-layer bg-dark bg-opacity-10">
                            <a
                              href="https://preview.keenthemes.com/keen/demo1/index.html"
                              className="btn btn-sm btn-success shadow"
                            >
                              Demo 1
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                          <div className="overlay-wrapper">
                            <img
                              src="assets/img/light-ltr(1).png"
                              alt="demo"
                              className="w-100"
                            />
                          </div>
                          <div className="overlay-layer bg-dark bg-opacity-10">
                            <a
                              href="https://preview.keenthemes.com/keen/demo2/index.html"
                              className="btn btn-sm btn-success shadow"
                            >
                              Demo 2
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                          <div className="overlay-wrapper">
                            <img
                              src="assets/img/light-ltr(2).png"
                              alt="demo"
                              className="w-100"
                            />
                          </div>
                          <div className="overlay-layer bg-dark bg-opacity-10">
                            <a
                              href="https://preview.keenthemes.com/keen/demo3/index.html"
                              className="btn btn-sm btn-success shadow"
                            >
                              Demo 3
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                          <div className="overlay-wrapper">
                            <img
                              src="assets/img/light-ltr(3).png"
                              alt="demo"
                              className="w-100"
                            />
                          </div>
                          <div className="overlay-layer bg-dark bg-opacity-10">
                            <a
                              href="https://preview.keenthemes.com/keen/demo4/index.html"
                              className="btn btn-sm btn-success shadow"
                            >
                              Demo 4
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                          <div className="overlay-wrapper">
                            <img
                              src="assets/img/light-ltr(4).png"
                              alt="demo"
                              className="w-100"
                            />
                          </div>
                          <div className="overlay-layer bg-dark bg-opacity-10">
                            <a
                              href="https://preview.keenthemes.com/keen/demo5/index.html"
                              className="btn btn-sm btn-success shadow"
                            >
                              Demo 5
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                          <div className="overlay-wrapper">
                            <img
                              src="assets/img/light-ltr(5).png"
                              alt="demo"
                              className="w-100"
                            />
                          </div>
                          <div className="overlay-layer bg-dark bg-opacity-10">
                            <a
                              href="https://preview.keenthemes.com/keen/demo6/index.html"
                              className="btn btn-sm btn-success shadow"
                            >
                              Demo 6
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                          <div className="overlay-wrapper">
                            <img
                              src="assets/img/light-ltr(6).png"
                              alt="demo"
                              className="w-100"
                            />
                          </div>
                          <div className="overlay-layer bg-dark bg-opacity-10">
                            <a
                              href="https://preview.keenthemes.com/keen/demo7/index.html"
                              className="btn btn-sm btn-success shadow"
                            >
                              Demo 7
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                          <div className="overlay-wrapper">
                            <img
                              src="assets/img/light-ltr(7).png"
                              alt="demo"
                              className="w-100"
                            />
                          </div>
                          <div className="overlay-layer bg-dark bg-opacity-10">
                            <a
                              href="https://preview.keenthemes.com/keen/demo8/index.html"
                              className="btn btn-sm btn-success shadow"
                            >
                              Demo 8
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                          <div className="overlay-wrapper">
                            <img
                              src="assets/img/light-ltr(8).png"
                              alt="demo"
                              className="w-100"
                            />
                          </div>
                          <div className="overlay-layer bg-dark bg-opacity-10">
                            <a
                              href="https://preview.keenthemes.com/keen/demo9/index.html"
                              className="btn btn-sm btn-success shadow"
                            >
                              Demo 9
                            </a>
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
        <div
          id="kt_help"
          className="bg-body drawer drawer-end"
          data-kt-drawer="true"
          data-kt-drawer-name="help"
          data-kt-drawer-activate="true"
          data-kt-drawer-overlay="true"
          data-kt-drawer-width="{default:'350px', 'md': '525px'}"
          data-kt-drawer-direction="end"
          data-kt-drawer-toggle="#kt_help_toggle"
          data-kt-drawer-close="#kt_help_close"
          style={{ width: "525px !important" }}
        >
          <div className="card shadow-none rounded-0 w-100">
            <div className="card-header" id="kt_help_header">
              <h5 className="card-title fw-semibold text-gray-600">
                Learn &amp; Get Inspired
              </h5>
              <div className="card-toolbar">
                <button
                  type="button"
                  className="btn btn-sm btn-icon explore-btn-dismiss me-n5"
                  id="kt_help_close"
                >
                  <span className="svg-icon svg-icon-2">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.5"
                        x={6}
                        y="17.3137"
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(-45 6 17.3137)"
                        fill="currentColor"
                      />
                      <rect
                        x="7.41422"
                        y={6}
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(45 7.41422 6)"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="card-body" id="kt_help_body">
              <div
                id="kt_help_scroll"
                className="hover-scroll-overlay-y"
                data-kt-scroll="true"
                data-kt-scroll-height="auto"
                data-kt-scroll-wrappers="#kt_help_body"
                data-kt-scroll-dependencies="#kt_help_header"
                data-kt-scroll-offset="5px"
                style={{ height: 753 }}
              >
                <div className="rounded border border-dashed border-gray-300 p-6 p-lg-8 mb-10">
                  <h2 className="fw-bold mb-5">
                    Support at
                    <a href="https://devs.keenthemes.com/" className="">
                      devs.keenthemes.com
                    </a>
                  </h2>
                  <div className="fs-5 fw-semibold mb-5">
                    <span className="text-gray-500">
                      Join our developers community to find answer to your
                      question and help others.
                    </span>
                    <a
                      className="explore-link d-none"
                      href="https://keenthemes.com/licensing"
                    >
                      FAQs
                    </a>
                  </div>
                  <a
                    href="https://devs.keenthemes.com/"
                    className="btn btn-lg explore-btn-primary w-100"
                  >
                    Get Support
                  </a>
                </div>
                <a
                  href="https://preview.keenthemes.com/html/keen/docs"
                  className="parent-hover d-flex align-items-center mb-7"
                >
                  <div className="d-flex flex-center w-50px h-50px w-lg-75px h-lg-75px flex-shrink-0 rounded bg-light-warning">
                    <span className="svg-icon svg-icon-warning svg-icon-2x svg-icon-lg-3x">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.3"
                          d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                          fill="currentColor"
                        />
                        <path
                          d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="d-flex flex-stack flex-grow-1 ms-4 ms-lg-6">
                    <div className="d-flex flex-column me-2 me-lg-5">
                      <div className="text-dark parent-hover-primary fw-bold fs-6 fs-lg-4 mb-1">
                        Documentation
                      </div>
                      <div className="text-muted fw-semibold fs-7 fs-lg-6">
                        From guides and how-tos, to live demos and code examples
                        to get started right away.
                      </div>
                    </div>
                    <span className="svg-icon svg-icon-gray-400 svg-icon-2">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          opacity="0.5"
                          x={18}
                          y={13}
                          width={13}
                          height={2}
                          rx={1}
                          transform="rotate(-180 18 13)"
                          fill="currentColor"
                        />
                        <path
                          d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                </a>
                <a
                  href="https://preview.keenthemes.com/html/keen/docs//base/utilities"
                  className="parent-hover d-flex align-items-center mb-7"
                >
                  <div className="d-flex flex-center w-50px h-50px w-lg-75px h-lg-75px flex-shrink-0 rounded bg-light-primary">
                    <span className="svg-icon svg-icon-primary svg-icon-2x svg-icon-lg-3x">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 9V11C21 11.6 20.6 12 20 12H14V8H20C20.6 8 21 8.4 21 9ZM10 8H4C3.4 8 3 8.4 3 9V11C3 11.6 3.4 12 4 12H10V8Z"
                          fill="currentColor"
                        />
                        <path
                          d="M15 2C13.3 2 12 3.3 12 5V8H15C16.7 8 18 6.7 18 5C18 3.3 16.7 2 15 2Z"
                          fill="currentColor"
                        />
                        <path
                          opacity="0.3"
                          d="M9 2C10.7 2 12 3.3 12 5V8H9C7.3 8 6 6.7 6 5C6 3.3 7.3 2 9 2ZM4 12V21C4 21.6 4.4 22 5 22H10V12H4ZM20 12V21C20 21.6 19.6 22 19 22H14V12H20Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="d-flex flex-stack flex-grow-1 ms-4 ms-lg-6">
                    <div className="d-flex flex-column me-2 me-lg-5">
                      <div className="text-dark parent-hover-primary fw-bold fs-6 fs-lg-4 mb-1">
                        Plugins &amp; Components
                      </div>
                      <div className="text-muted fw-semibold fs-7 fs-lg-6">
                        Check out our 300+ in-house components and customized
                        3rd-party plugins.
                      </div>
                    </div>
                    <span className="svg-icon svg-icon-gray-400 svg-icon-2">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          opacity="0.5"
                          x={18}
                          y={13}
                          width={13}
                          height={2}
                          rx={1}
                          transform="rotate(-180 18 13)"
                          fill="currentColor"
                        />
                        <path
                          d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                </a>
                <a
                  href="https://preview.keenthemes.com/keen/demo1/layout-builder.html"
                  className="parent-hover d-flex align-items-center mb-7"
                >
                  <div className="d-flex flex-center w-50px h-50px w-lg-75px h-lg-75px flex-shrink-0 rounded bg-light-info">
                    <span className="svg-icon svg-icon-info svg-icon-2x svg-icon-lg-3x">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.3"
                          d="M22 19V17C22 16.4 21.6 16 21 16H8V3C8 2.4 7.6 2 7 2H5C4.4 2 4 2.4 4 3V19C4 19.6 4.4 20 5 20H21C21.6 20 22 19.6 22 19Z"
                          fill="currentColor"
                        />
                        <path
                          d="M20 5V21C20 21.6 19.6 22 19 22H17C16.4 22 16 21.6 16 21V8H8V4H19C19.6 4 20 4.4 20 5ZM3 8H4V4H3C2.4 4 2 4.4 2 5V7C2 7.6 2.4 8 3 8Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="d-flex flex-stack flex-grow-1 ms-4 ms-lg-6">
                    <div className="d-flex flex-column me-2 me-lg-5">
                      <div className="text-dark parent-hover-primary fw-bold fs-6 fs-lg-4 mb-1">
                        Layout Builder
                      </div>
                      <div className="text-muted fw-semibold fs-7 fs-lg-6">
                        Build your layout, preview it and export the HTML for
                        server side integration.
                      </div>
                    </div>
                    <span className="svg-icon svg-icon-gray-400 svg-icon-2">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          opacity="0.5"
                          x={18}
                          y={13}
                          width={13}
                          height={2}
                          rx={1}
                          transform="rotate(-180 18 13)"
                          fill="currentColor"
                        />
                        <path
                          d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                </a>
                <a
                  href="https://preview.keenthemes.com/html/keen/docs/getting-started/changelog"
                  className="parent-hover d-flex align-items-center mb-7"
                >
                  <div className="d-flex flex-center w-50px h-50px w-lg-75px h-lg-75px flex-shrink-0 rounded bg-light-danger">
                    <span className="svg-icon svg-icon-danger svg-icon-2x svg-icon-lg-3x">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 9V8C13 7.4 13.4 7 14 7H15C16.7 7 18 5.7 18 4V3C18 2.4 17.6 2 17 2C16.4 2 16 2.4 16 3V4C16 4.6 15.6 5 15 5H14C12.3 5 11 6.3 11 8V9H13Z"
                          fill="currentColor"
                        />
                        <path
                          opacity="0.3"
                          d="M21 22H3C2.4 22 2 21.6 2 21V10C2 9.4 2.4 9 3 9H21C21.6 9 22 9.4 22 10V21C22 21.6 21.6 22 21 22ZM5 12C4.4 12 4 12.4 4 13C4 13.6 4.4 14 5 14C5.6 14 6 13.6 6 13C6 12.4 5.6 12 5 12ZM8 12C7.4 12 7 12.4 7 13C7 13.6 7.4 14 8 14C8.6 14 9 13.6 9 13C9 12.4 8.6 12 8 12ZM11 12C10.4 12 10 12.4 10 13C10 13.6 10.4 14 11 14C11.6 14 12 13.6 12 13C12 12.4 11.6 12 11 12ZM14 12C13.4 12 13 12.4 13 13C13 13.6 13.4 14 14 14C14.6 14 15 13.6 15 13C15 12.4 14.6 12 14 12ZM9 15C8.4 15 8 15.4 8 16C8 16.6 8.4 17 9 17C9.6 17 10 16.6 10 16C10 15.4 9.6 15 9 15ZM12 15C11.4 15 11 15.4 11 16C11 16.6 11.4 17 12 17C12.6 17 13 16.6 13 16C13 15.4 12.6 15 12 15ZM15 15C14.4 15 14 15.4 14 16C14 16.6 14.4 17 15 17C15.6 17 16 16.6 16 16C16 15.4 15.6 15 15 15ZM19 18C18.4 18 18 18.4 18 19C18 19.6 18.4 20 19 20C19.6 20 20 19.6 20 19C20 18.4 19.6 18 19 18ZM7 19C7 18.4 6.6 18 6 18H5C4.4 18 4 18.4 4 19C4 19.6 4.4 20 5 20H6C6.6 20 7 19.6 7 19ZM7 16C7 15.4 6.6 15 6 15H5C4.4 15 4 15.4 4 16C4 16.6 4.4 17 5 17H6C6.6 17 7 16.6 7 16ZM17 14H19C19.6 14 20 13.6 20 13C20 12.4 19.6 12 19 12H17C16.4 12 16 12.4 16 13C16 13.6 16.4 14 17 14ZM18 17H19C19.6 17 20 16.6 20 16C20 15.4 19.6 15 19 15H18C17.4 15 17 15.4 17 16C17 16.6 17.4 17 18 17ZM17 19C17 18.4 16.6 18 16 18H9C8.4 18 8 18.4 8 19C8 19.6 8.4 20 9 20H16C16.6 20 17 19.6 17 19Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="d-flex flex-stack flex-grow-1 ms-4 ms-lg-6">
                    <div className="d-flex flex-column me-2 me-lg-5">
                      <div className="text-dark parent-hover-primary fw-bold fs-6 fs-lg-4 mb-1">
                        What's New ?
                      </div>
                      <div className="text-muted fw-semibold fs-7 fs-lg-6">
                        Latest features and improvements added with our users
                        feedback in mind.
                      </div>
                    </div>
                    <span className="svg-icon svg-icon-gray-400 svg-icon-2">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          opacity="0.5"
                          x={18}
                          y={13}
                          width={13}
                          height={2}
                          rx={1}
                          transform="rotate(-180 18 13)"
                          fill="currentColor"
                        />
                        <path
                          d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="engage-toolbar d-flex position-fixed px-5 fw-bold zindex-2 top-50 end-0 transform-90 mt-5 mt-lg-20 gap-2">
          <button
            id="kt_engage_demos_toggle"
            className="engage-demos-toggle engage-btn btn shadow-sm fs-6 px-4 rounded-top-0"
            data-bs-toggle="tooltip"
            data-bs-custom-class="tooltip-inverse"
            data-bs-placement="left"
            data-bs-dismiss="click"
            data-bs-trigger="hover"
            data-bs-original-title="Check out 9 more demos"
            data-kt-initialized={1}
          >
            <span id="kt_engage_demos_label">Demos</span>
          </button>
          <button
            id="kt_help_toggle"
            className="engage-help-toggle btn engage-btn shadow-sm px-5 rounded-top-0"
            data-bs-toggle="tooltip"
            data-bs-custom-class="tooltip-inverse"
            data-bs-placement="left"
            data-bs-dismiss="click"
            data-bs-trigger="hover"
            data-bs-original-title="Learn & Get Inspired"
            data-kt-initialized={1}
          >
            Help
          </button>
        </div>
        <div id="kt_scrolltop" className="scrolltop" data-kt-scrolltop="true">
          <span className="svg-icon">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.5"
                x={13}
                y={6}
                width={13}
                height={2}
                rx={1}
                transform="rotate(90 13 6)"
                fill="currentColor"
              />
              <path
                d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>
        <div
          className="modal fade"
          id="kt_modal_upgrade_plan"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content rounded">
              <div className="modal-header justify-content-end border-0 pb-0">
                <div
                  className="btn btn-sm btn-icon btn-active-color-primary"
                  data-bs-dismiss="modal"
                >
                  <span className="svg-icon svg-icon-1">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.5"
                        x={6}
                        y="17.3137"
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(-45 6 17.3137)"
                        fill="currentColor"
                      />
                      <rect
                        x="7.41422"
                        y={6}
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(45 7.41422 6)"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="modal-body pt-0 pb-15 px-5 px-xl-20">
                <div className="mb-13 text-center">
                  <h1 className="mb-3">Upgrade a Plan</h1>
                  <div className="text-muted fw-semibold fs-5">
                    If you need more info, please check
                    <a
                      href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                      className="link-primary fw-bold"
                    >
                      Pricing Guidelines
                    </a>
                    .
                  </div>
                </div>
                <div className="d-flex flex-column">
                  <div
                    className="nav-group nav-group-outline mx-auto"
                    data-kt-buttons="true"
                    data-kt-initialized={1}
                  >
                    <button
                      className="btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3 me-2 active"
                      data-kt-plan="month"
                    >
                      Monthly
                    </button>
                    <button
                      className="btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3"
                      data-kt-plan="annual"
                    >
                      Annual
                    </button>
                  </div>
                  <div className="row mt-10">
                    <div className="col-lg-6 mb-10 mb-lg-0">
                      <div className="nav flex-column" role="tablist">
                        <label
                          className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 active mb-6"
                          data-bs-toggle="tab"
                          data-bs-target="#kt_upgrade_plan_startup"
                          aria-selected="true"
                          role="tab"
                        >
                          <div className="d-flex align-items-center me-2">
                            <div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="plan"
                                defaultChecked="checked"
                                defaultValue="startup"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <div className="d-flex align-items-center fs-2 fw-bold flex-wrap">
                                Startup
                              </div>
                              <div className="fw-semibold opacity-75">
                                Best for startups
                              </div>
                            </div>
                          </div>
                          <div className="ms-5">
                            <span className="mb-2">$</span>
                            <span
                              className="fs-3x fw-bold"
                              data-kt-plan-price-month={39}
                              data-kt-plan-price-annual={399}
                            >
                              39
                            </span>
                            <span className="fs-7 opacity-50">
                              /<span data-kt-element="period">Mon</span>
                            </span>
                          </div>
                        </label>
                        <label
                          className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6"
                          data-bs-toggle="tab"
                          data-bs-target="#kt_upgrade_plan_advanced"
                          aria-selected="false"
                          tabIndex={-1}
                          role="tab"
                        >
                          <div className="d-flex align-items-center me-2">
                            <div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="plan"
                                defaultValue="advanced"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <div className="d-flex align-items-center fs-2 fw-bold flex-wrap">
                                Advanced
                              </div>
                              <div className="fw-semibold opacity-75">
                                Best for 100+ team size
                              </div>
                            </div>
                          </div>
                          <div className="ms-5">
                            <span className="mb-2">$</span>
                            <span
                              className="fs-3x fw-bold"
                              data-kt-plan-price-month={339}
                              data-kt-plan-price-annual={3399}
                            >
                              339
                            </span>
                            <span className="fs-7 opacity-50">
                              /<span data-kt-element="period">Mon</span>
                            </span>
                          </div>
                        </label>
                        <label
                          className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6"
                          data-bs-toggle="tab"
                          data-bs-target="#kt_upgrade_plan_enterprise"
                          aria-selected="false"
                          tabIndex={-1}
                          role="tab"
                        >
                          <div className="d-flex align-items-center me-2">
                            <div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="plan"
                                defaultValue="enterprise"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <div className="d-flex align-items-center fs-2 fw-bold flex-wrap">
                                Enterprise
                                <span className="badge badge-light-success ms-2 py-2 px-3 fs-7">
                                  Popular
                                </span>
                              </div>
                              <div className="fw-semibold opacity-75">
                                Best value for 1000+ team
                              </div>
                            </div>
                          </div>
                          <div className="ms-5">
                            <span className="mb-2">$</span>
                            <span
                              className="fs-3x fw-bold"
                              data-kt-plan-price-month={999}
                              data-kt-plan-price-annual={9999}
                            >
                              999
                            </span>
                            <span className="fs-7 opacity-50">
                              /<span data-kt-element="period">Mon</span>
                            </span>
                          </div>
                        </label>
                        <label
                          className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6"
                          data-bs-toggle="tab"
                          data-bs-target="#kt_upgrade_plan_custom"
                          aria-selected="false"
                          tabIndex={-1}
                          role="tab"
                        >
                          <div className="d-flex align-items-center me-2">
                            <div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="plan"
                                defaultValue="custom"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <div className="d-flex align-items-center fs-2 fw-bold flex-wrap">
                                Custom
                              </div>
                              <div className="fw-semibold opacity-75">
                                Requet a custom license
                              </div>
                            </div>
                          </div>
                          <div className="ms-5">
                            <a
                              href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                              className="btn btn-sm btn-success"
                            >
                              Contact Us
                            </a>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="tab-content rounded h-100 bg-light p-10">
                        <div
                          className="tab-pane fade show active"
                          id="kt_upgrade_plan_startup"
                          role="tabpanel"
                        >
                          <div className="pb-5">
                            <h2 className="fw-bold text-dark">
                              What’s in Startup Plan?
                            </h2>
                            <div className="text-muted fw-semibold">
                              Optimal for 10+ team size and new startup
                            </div>
                          </div>
                          <div className="pt-1">
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Up to 10 Active Users
                              </span>
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Up to 30 Project Integrations
                              </span>
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Analytics Module
                              </span>
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-muted flex-grow-1">
                                Finance Module
                              </span>
                              <span className="svg-icon svg-icon-1">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <rect
                                    x={7}
                                    y="15.3137"
                                    width={12}
                                    height={2}
                                    rx={1}
                                    transform="rotate(-45 7 15.3137)"
                                    fill="currentColor"
                                  />
                                  <rect
                                    x="8.41422"
                                    y={7}
                                    width={12}
                                    height={2}
                                    rx={1}
                                    transform="rotate(45 8.41422 7)"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-muted flex-grow-1">
                                Accounting Module
                              </span>
                              <span className="svg-icon svg-icon-1">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <rect
                                    x={7}
                                    y="15.3137"
                                    width={12}
                                    height={2}
                                    rx={1}
                                    transform="rotate(-45 7 15.3137)"
                                    fill="currentColor"
                                  />
                                  <rect
                                    x="8.41422"
                                    y={7}
                                    width={12}
                                    height={2}
                                    rx={1}
                                    transform="rotate(45 8.41422 7)"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-muted flex-grow-1">
                                Network Platform
                              </span>
                              <span className="svg-icon svg-icon-1">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <rect
                                    x={7}
                                    y="15.3137"
                                    width={12}
                                    height={2}
                                    rx={1}
                                    transform="rotate(-45 7 15.3137)"
                                    fill="currentColor"
                                  />
                                  <rect
                                    x="8.41422"
                                    y={7}
                                    width={12}
                                    height={2}
                                    rx={1}
                                    transform="rotate(45 8.41422 7)"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="d-flex align-items-center">
                              <span className="fw-semibold fs-5 text-muted flex-grow-1">
                                Unlimited Cloud Space
                              </span>
                              <span className="svg-icon svg-icon-1">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <rect
                                    x={7}
                                    y="15.3137"
                                    width={12}
                                    height={2}
                                    rx={1}
                                    transform="rotate(-45 7 15.3137)"
                                    fill="currentColor"
                                  />
                                  <rect
                                    x="8.41422"
                                    y={7}
                                    width={12}
                                    height={2}
                                    rx={1}
                                    transform="rotate(45 8.41422 7)"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="kt_upgrade_plan_advanced"
                          role="tabpanel"
                        >
                          <div className="pb-5">
                            <h2 className="fw-bold text-dark">
                              What’s in Startup Plan?
                            </h2>
                            <div className="text-muted fw-semibold">
                              Optimal for 100+ team size and grown company
                            </div>
                          </div>
                          <div className="pt-1">
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Up to 10 Active Users
                              </span>
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Up to 30 Project Integrations
                              </span>
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Analytics Module
                              </span>
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Finance Module
                              </span>
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Accounting Module
                              </span>
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-muted flex-grow-1">
                                Network Platform
                              </span>
                              <span className="svg-icon svg-icon-1">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <rect
                                    x={7}
                                    y="15.3137"
                                    width={12}
                                    height={2}
                                    rx={1}
                                    transform="rotate(-45 7 15.3137)"
                                    fill="currentColor"
                                  />
                                  <rect
                                    x="8.41422"
                                    y={7}
                                    width={12}
                                    height={2}
                                    rx={1}
                                    transform="rotate(45 8.41422 7)"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="d-flex align-items-center">
                              <span className="fw-semibold fs-5 text-muted flex-grow-1">
                                Unlimited Cloud Space
                              </span>
                              <span className="svg-icon svg-icon-1">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <rect
                                    x={7}
                                    y="15.3137"
                                    width={12}
                                    height={2}
                                    rx={1}
                                    transform="rotate(-45 7 15.3137)"
                                    fill="currentColor"
                                  />
                                  <rect
                                    x="8.41422"
                                    y={7}
                                    width={12}
                                    height={2}
                                    rx={1}
                                    transform="rotate(45 8.41422 7)"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="kt_upgrade_plan_enterprise"
                          role="tabpanel"
                        >
                          <div className="pb-5">
                            <h2 className="fw-bold text-dark">
                              What’s in Startup Plan?
                            </h2>
                            <div className="text-muted fw-semibold">
                              Optimal for 1000+ team and enterpise
                            </div>
                          </div>
                          <div className="pt-1">
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Up to 10 Active Users
                              </span>
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Up to 30 Project Integrations
                              </span>
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Analytics Module
                              </span>
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Finance Module
                              </span>
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Accounting Module
                              </span>
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Network Platform
                              </span>
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="d-flex align-items-center">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Unlimited Cloud Space
                              </span>
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="kt_upgrade_plan_custom"
                          role="tabpanel"
                        >
                          <div className="pb-5">
                            <h2 className="fw-bold text-dark">
                              What’s in Startup Plan?
                            </h2>
                            <div className="text-muted fw-semibold">
                              Optimal for corporations
                            </div>
                          </div>
                          <div className="pt-1">
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Unlimited Users
                              </span>
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Unlimited Project Integrations
                              </span>
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Analytics Module
                              </span>
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Finance Module
                              </span>
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Accounting Module
                              </span>
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="d-flex align-items-center mb-7">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Network Platform
                              </span>
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="d-flex align-items-center">
                              <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                                Unlimited Cloud Space
                              </span>
                              <span className="svg-icon svg-icon-1 svg-icon-success">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.3"
                                    x={2}
                                    y={2}
                                    width={20}
                                    height={20}
                                    rx={10}
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-center flex-row-fluid pt-12">
                  <button
                    type="reset"
                    className="btn btn-light me-3"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    id="kt_modal_upgrade_plan_btn"
                  >
                    <span className="indicator-label">Upgrade Plan</span>
                    <span className="indicator-progress">
                      Please wait...
                      <span className="spinner-border spinner-border-sm align-middle ms-2" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="kt_modal_create_campaign"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen p-9">
            <div className="modal-content modal-rounded">
              <div className="modal-header py-7 d-flex justify-content-between">
                <h2>Create Campaign</h2>
                <div
                  className="btn btn-sm btn-icon btn-active-color-primary"
                  data-bs-dismiss="modal"
                >
                  <span className="svg-icon svg-icon-1">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.5"
                        x={6}
                        y="17.3137"
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(-45 6 17.3137)"
                        fill="currentColor"
                      />
                      <rect
                        x="7.41422"
                        y={6}
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(45 7.41422 6)"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="modal-body scroll-y m-5">
                <div
                  className="stepper stepper-links d-flex flex-column"
                  id="kt_modal_create_campaign_stepper"
                  data-kt-stepper="true"
                >
                  <div className="stepper-nav justify-content-center py-2">
                    <div
                      className="stepper-item me-5 me-md-15 current"
                      data-kt-stepper-element="nav"
                    >
                      <h3 className="stepper-title">Campaign Details</h3>
                    </div>
                    <div
                      className="stepper-item me-5 me-md-15"
                      data-kt-stepper-element="nav"
                    >
                      <h3 className="stepper-title">Creative Uploads</h3>
                    </div>
                    <div
                      className="stepper-item me-5 me-md-15"
                      data-kt-stepper-element="nav"
                    >
                      <h3 className="stepper-title">Audiences</h3>
                    </div>
                    <div
                      className="stepper-item me-5 me-md-15"
                      data-kt-stepper-element="nav"
                    >
                      <h3 className="stepper-title">Budget Estimates</h3>
                    </div>
                    <div className="stepper-item" data-kt-stepper-element="nav">
                      <h3 className="stepper-title">Completed</h3>
                    </div>
                  </div>
                  <form
                    className="mx-auto w-100 mw-600px pt-15 pb-10 fv-plugins-bootstrap5 fv-plugins-framework"
                    noValidate="novalidate"
                    id="kt_modal_create_campaign_stepper_form"
                  >
                    <div className="current" data-kt-stepper-element="content">
                      <div className="w-100">
                        <div className="pb-10 pb-lg-15">
                          <h2 className="fw-bold d-flex align-items-center text-dark">
                            Setup Campaign Details
                            <i
                              className="fas fa-exclamation-circle ms-2 fs-7"
                              data-bs-toggle="tooltip"
                              aria-label="Campaign name will be used as reference within your campaign reports"
                              data-bs-original-title="Campaign name will be used as reference within your campaign reports"
                              data-kt-initialized={1}
                            />
                          </h2>
                          <div className="text-muted fw-semibold fs-6">
                            If you need more info, please check out
                            <a
                              href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                              className="link-primary fw-bold"
                            >
                              Help Page
                            </a>
                            .
                          </div>
                        </div>
                        <div className="mb-10 fv-row fv-plugins-icon-container">
                          <label className="required form-label mb-3">
                            Campaign Name
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg form-control-solid"
                            name="campaign_name"
                            placeholder=""
                            defaultValue=""
                          />
                          <div className="fv-plugins-message-container invalid-feedback" />
                        </div>
                        <div className="fv-row mb-10 fv-plugins-icon-container">
                          <label className="d-block fw-semibold fs-6 mb-5">
                            <span className="required">Company Logo</span>
                            <i
                              className="fas fa-exclamation-circle ms-2 fs-7"
                              data-bs-toggle="tooltip"
                              aria-label="E.g. Select a logo to represent the company that's running the campaign."
                              data-bs-original-title="E.g. Select a logo to represent the company that's running the campaign."
                              data-kt-initialized={1}
                            />
                          </label>
                          <style
                            dangerouslySetInnerHTML={{
                              __html:
                                ".image-input-placeholder { background-image: url('assets/img/media/svg/files/blank-image.svg'); } [data-bs-theme=\"dark\"] .image-input-placeholder { background-image: url('assets/img/media/svg/files/blank-image-dark.svg'); }",
                            }}
                          />
                          <div
                            className="image-input image-input-empty image-input-outline image-input-placeholder"
                            data-kt-image-input="true"
                          >
                            <div className="image-input-wrapper w-125px h-125px" />
                            <label
                              className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                              data-kt-image-input-action="change"
                              data-bs-toggle="tooltip"
                              aria-label="Change avatar"
                              data-bs-original-title="Change avatar"
                              data-kt-initialized={1}
                            >
                              <i className="bi bi-pencil-fill fs-7" />
                              <input
                                type="file"
                                name="avatar"
                                accept=".png, .jpg, .jpeg"
                              />
                              <input type="hidden" name="avatar_remove" />
                            </label>
                            <span
                              className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                              data-kt-image-input-action="cancel"
                              data-bs-toggle="tooltip"
                              aria-label="Cancel avatar"
                              data-bs-original-title="Cancel avatar"
                              data-kt-initialized={1}
                            >
                              <i className="bi bi-x fs-2" />
                            </span>
                            <span
                              className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                              data-kt-image-input-action="remove"
                              data-bs-toggle="tooltip"
                              aria-label="Remove avatar"
                              data-bs-original-title="Remove avatar"
                              data-kt-initialized={1}
                            >
                              <i className="bi bi-x fs-2" />
                            </span>
                          </div>
                          <div className="form-text">
                            Allowed file types: png, jpg, jpeg.
                          </div>
                          <div className="fv-plugins-message-container invalid-feedback" />
                        </div>
                        <div className="mb-10">
                          <label className="required fw-semibold fs-6 mb-5">
                            Campaign Goal
                          </label>
                          <div className="d-flex fv-row">
                            <div className="form-check form-check-custom form-check-solid">
                              <input
                                className="form-check-input me-3"
                                name="user_role"
                                type="radio"
                                defaultValue={0}
                                id="kt_modal_update_role_option_0"
                                defaultChecked="checked"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="kt_modal_update_role_option_0"
                              >
                                <div className="fw-bold text-gray-800">
                                  Get more visitors
                                </div>
                                <div className="text-gray-600">
                                  Increase impression traffic onto the platform
                                </div>
                              </label>
                            </div>
                          </div>
                          <div className="separator separator-dashed my-5" />
                          <div className="d-flex fv-row">
                            <div className="form-check form-check-custom form-check-solid">
                              <input
                                className="form-check-input me-3"
                                name="user_role"
                                type="radio"
                                defaultValue={1}
                                id="kt_modal_update_role_option_1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="kt_modal_update_role_option_1"
                              >
                                <div className="fw-bold text-gray-800">
                                  Get more messages on chat
                                </div>
                                <div className="text-gray-600">
                                  Increase community interaction and
                                  communication
                                </div>
                              </label>
                            </div>
                          </div>
                          <div className="separator separator-dashed my-5" />
                          <div className="d-flex fv-row">
                            <div className="form-check form-check-custom form-check-solid">
                              <input
                                className="form-check-input me-3"
                                name="user_role"
                                type="radio"
                                defaultValue={2}
                                id="kt_modal_update_role_option_2"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="kt_modal_update_role_option_2"
                              >
                                <div className="fw-bold text-gray-800">
                                  Get more calls
                                </div>
                                <div className="text-gray-600">
                                  Boost telecommunication feedback to provide
                                  precise and accurate information
                                </div>
                              </label>
                            </div>
                          </div>
                          <div className="separator separator-dashed my-5" />
                          <div className="d-flex fv-row">
                            <div className="form-check form-check-custom form-check-solid">
                              <input
                                className="form-check-input me-3"
                                name="user_role"
                                type="radio"
                                defaultValue={3}
                                id="kt_modal_update_role_option_3"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="kt_modal_update_role_option_3"
                              >
                                <div className="fw-bold text-gray-800">
                                  Get more likes
                                </div>
                                <div className="text-gray-600">
                                  Increase positive interactivity on social
                                  media platforms
                                </div>
                              </label>
                            </div>
                          </div>
                          <div className="separator separator-dashed my-5" />
                          <div className="d-flex fv-row">
                            <div className="form-check form-check-custom form-check-solid">
                              <input
                                className="form-check-input me-3"
                                name="user_role"
                                type="radio"
                                defaultValue={4}
                                id="kt_modal_update_role_option_4"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="kt_modal_update_role_option_4"
                              >
                                <div className="fw-bold text-gray-800">
                                  Lead generation
                                </div>
                                <div className="text-gray-600">
                                  Collect contact information for potential
                                  customers
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-kt-stepper-element="content">
                      <div className="w-100">
                        <div className="pb-10 pb-lg-12">
                          <h1 className="fw-bold text-dark">Upload Files</h1>
                          <div className="text-muted fw-semibold fs-4">
                            If you need more info, please check
                            <a
                              href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                              className="link-primary"
                            >
                              Campaign Guidelines
                            </a>
                          </div>
                        </div>
                        <div className="fv-row mb-10">
                          <div
                            className="dropzone dz-clickable"
                            id="kt_modal_create_campaign_files_upload"
                          >
                            <div className="dz-message needsclick">
                              <span className="svg-icon svg-icon-3hx svg-icon-primary">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    opacity="0.3"
                                    d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM14.5 12L12.7 9.3C12.3 8.9 11.7 8.9 11.3 9.3L10 12H11.5V17C11.5 17.6 11.4 18 12 18C12.6 18 12.5 17.6 12.5 17V12H14.5Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M13 11.5V17.9355C13 18.2742 12.6 19 12 19C11.4 19 11 18.2742 11 17.9355V11.5H13Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M8.2575 11.4411C7.82942 11.8015 8.08434 12.5 8.64398 12.5H15.356C15.9157 12.5 16.1706 11.8015 15.7425 11.4411L12.4375 8.65789C12.1875 8.44737 11.8125 8.44737 11.5625 8.65789L8.2575 11.4411Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <div className="ms-4">
                                <h3 className="dfs-3 fw-bold text-gray-900 mb-1">
                                  Drop campaign files here or click to upload.
                                </h3>
                                <span className="fw-semibold fs-4 text-muted">
                                  Upload up to 10 files
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-10">
                          <label className="fs-6 fw-semibold mb-2">
                            Uploaded File
                          </label>
                          <div className="mh-300px scroll-y me-n7 pe-7">
                            <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                              <div className="d-flex align-items-center">
                                <div className="symbol symbol-35px">
                                  <img src="assets/img/pdf.svg" alt="icon" />
                                </div>
                                <div className="ms-6">
                                  <a
                                    href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                  >
                                    Product Specifications
                                  </a>
                                  <div className="fw-semibold text-muted">
                                    230kb
                                  </div>
                                </div>
                              </div>
                              <div className="min-w-100px">
                                <select
                                  className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                                  data-control="select2"
                                  data-hide-search="true"
                                  data-placeholder="Edit"
                                  data-select2-id="select2-data-10-1b7t"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  data-kt-initialized={1}
                                >
                                  <option data-select2-id="select2-data-12-ot2c" />
                                  <option value={1}>Remove</option>
                                  <option value={2}>Modify</option>
                                  <option value={3}>Select</option>
                                </select>
                                <span
                                  className="select2 select2-container select2-container--bootstrap5"
                                  dir="ltr"
                                  data-select2-id="select2-data-11-yonu"
                                  style={{ width: "100%" }}
                                >
                                  <span className="selection">
                                    <span
                                      className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                      role="combobox"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      tabIndex={0}
                                      aria-disabled="false"
                                      aria-labelledby="select2-kjql-container"
                                      aria-controls="select2-kjql-container"
                                    >
                                      <span
                                        className="select2-selection__rendered"
                                        id="select2-kjql-container"
                                        role="textbox"
                                        aria-readonly="true"
                                        title="Edit"
                                      >
                                        <span className="select2-selection__placeholder">
                                          Edit
                                        </span>
                                      </span>
                                      <span
                                        className="select2-selection__arrow"
                                        role="presentation"
                                      >
                                        <b role="presentation" />
                                      </span>
                                    </span>
                                  </span>
                                  <span
                                    className="dropdown-wrapper"
                                    aria-hidden="true"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                              <div className="d-flex align-items-center">
                                <div className="symbol symbol-35px">
                                  <img src="assets/img/tif.svg" alt="icon" />
                                </div>
                                <div className="ms-6">
                                  <a
                                    href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                  >
                                    Campaign Creative Poster
                                  </a>
                                  <div className="fw-semibold text-muted">
                                    2.4mb
                                  </div>
                                </div>
                              </div>
                              <div className="min-w-100px">
                                <select
                                  className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                                  data-control="select2"
                                  data-hide-search="true"
                                  data-placeholder="Edit"
                                  data-select2-id="select2-data-13-i2el"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  data-kt-initialized={1}
                                >
                                  <option data-select2-id="select2-data-15-bczn" />
                                  <option value={1}>Remove</option>
                                  <option value={2}>Modify</option>
                                  <option value={3}>Select</option>
                                </select>
                                <span
                                  className="select2 select2-container select2-container--bootstrap5"
                                  dir="ltr"
                                  data-select2-id="select2-data-14-mzvh"
                                  style={{ width: "100%" }}
                                >
                                  <span className="selection">
                                    <span
                                      className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                      role="combobox"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      tabIndex={0}
                                      aria-disabled="false"
                                      aria-labelledby="select2-jsrb-container"
                                      aria-controls="select2-jsrb-container"
                                    >
                                      <span
                                        className="select2-selection__rendered"
                                        id="select2-jsrb-container"
                                        role="textbox"
                                        aria-readonly="true"
                                        title="Edit"
                                      >
                                        <span className="select2-selection__placeholder">
                                          Edit
                                        </span>
                                      </span>
                                      <span
                                        className="select2-selection__arrow"
                                        role="presentation"
                                      >
                                        <b role="presentation" />
                                      </span>
                                    </span>
                                  </span>
                                  <span
                                    className="dropdown-wrapper"
                                    aria-hidden="true"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                              <div className="d-flex align-items-center">
                                <div className="symbol symbol-35px">
                                  <img
                                    src="assets/img/folder-document.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="ms-6">
                                  <a
                                    href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                  >
                                    Campaign Landing Page Source
                                  </a>
                                  <div className="fw-semibold text-muted">
                                    1.12mb
                                  </div>
                                </div>
                              </div>
                              <div className="min-w-100px">
                                <select
                                  className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                                  data-control="select2"
                                  data-hide-search="true"
                                  data-placeholder="Edit"
                                  data-select2-id="select2-data-16-t7un"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  data-kt-initialized={1}
                                >
                                  <option data-select2-id="select2-data-18-75eq" />
                                  <option value={1}>Remove</option>
                                  <option value={2}>Modify</option>
                                  <option value={3}>Select</option>
                                </select>
                                <span
                                  className="select2 select2-container select2-container--bootstrap5"
                                  dir="ltr"
                                  data-select2-id="select2-data-17-2xpt"
                                  style={{ width: "100%" }}
                                >
                                  <span className="selection">
                                    <span
                                      className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                      role="combobox"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      tabIndex={0}
                                      aria-disabled="false"
                                      aria-labelledby="select2-cg8p-container"
                                      aria-controls="select2-cg8p-container"
                                    >
                                      <span
                                        className="select2-selection__rendered"
                                        id="select2-cg8p-container"
                                        role="textbox"
                                        aria-readonly="true"
                                        title="Edit"
                                      >
                                        <span className="select2-selection__placeholder">
                                          Edit
                                        </span>
                                      </span>
                                      <span
                                        className="select2-selection__arrow"
                                        role="presentation"
                                      >
                                        <b role="presentation" />
                                      </span>
                                    </span>
                                  </span>
                                  <span
                                    className="dropdown-wrapper"
                                    aria-hidden="true"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                              <div className="d-flex align-items-center">
                                <div className="symbol symbol-35px">
                                  <img src="assets/img/css.svg" alt="icon" />
                                </div>
                                <div className="ms-6">
                                  <a
                                    href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                  >
                                    Landing Page Styling
                                  </a>
                                  <div className="fw-semibold text-muted">
                                    85kb
                                  </div>
                                </div>
                              </div>
                              <div className="min-w-100px">
                                <select
                                  className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                                  data-control="select2"
                                  data-hide-search="true"
                                  data-placeholder="Edit"
                                  data-select2-id="select2-data-19-vi8m"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  data-kt-initialized={1}
                                >
                                  <option data-select2-id="select2-data-21-a5cu" />
                                  <option value={1}>Remove</option>
                                  <option value={2}>Modify</option>
                                  <option value={3}>Select</option>
                                </select>
                                <span
                                  className="select2 select2-container select2-container--bootstrap5"
                                  dir="ltr"
                                  data-select2-id="select2-data-20-dh5i"
                                  style={{ width: "100%" }}
                                >
                                  <span className="selection">
                                    <span
                                      className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                      role="combobox"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      tabIndex={0}
                                      aria-disabled="false"
                                      aria-labelledby="select2-mv9u-container"
                                      aria-controls="select2-mv9u-container"
                                    >
                                      <span
                                        className="select2-selection__rendered"
                                        id="select2-mv9u-container"
                                        role="textbox"
                                        aria-readonly="true"
                                        title="Edit"
                                      >
                                        <span className="select2-selection__placeholder">
                                          Edit
                                        </span>
                                      </span>
                                      <span
                                        className="select2-selection__arrow"
                                        role="presentation"
                                      >
                                        <b role="presentation" />
                                      </span>
                                    </span>
                                  </span>
                                  <span
                                    className="dropdown-wrapper"
                                    aria-hidden="true"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                              <div className="d-flex align-items-center">
                                <div className="symbol symbol-35px">
                                  <img src="assets/img/ai.svg" alt="icon" />
                                </div>
                                <div className="ms-6">
                                  <a
                                    href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                  >
                                    Design Source Files
                                  </a>
                                  <div className="fw-semibold text-muted">
                                    48mb
                                  </div>
                                </div>
                              </div>
                              <div className="min-w-100px">
                                <select
                                  className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                                  data-control="select2"
                                  data-hide-search="true"
                                  data-placeholder="Edit"
                                  data-select2-id="select2-data-22-65fx"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  data-kt-initialized={1}
                                >
                                  <option data-select2-id="select2-data-24-os6a" />
                                  <option value={1}>Remove</option>
                                  <option value={2}>Modify</option>
                                  <option value={3}>Select</option>
                                </select>
                                <span
                                  className="select2 select2-container select2-container--bootstrap5"
                                  dir="ltr"
                                  data-select2-id="select2-data-23-vsvy"
                                  style={{ width: "100%" }}
                                >
                                  <span className="selection">
                                    <span
                                      className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                      role="combobox"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      tabIndex={0}
                                      aria-disabled="false"
                                      aria-labelledby="select2-o6ct-container"
                                      aria-controls="select2-o6ct-container"
                                    >
                                      <span
                                        className="select2-selection__rendered"
                                        id="select2-o6ct-container"
                                        role="textbox"
                                        aria-readonly="true"
                                        title="Edit"
                                      >
                                        <span className="select2-selection__placeholder">
                                          Edit
                                        </span>
                                      </span>
                                      <span
                                        className="select2-selection__arrow"
                                        role="presentation"
                                      >
                                        <b role="presentation" />
                                      </span>
                                    </span>
                                  </span>
                                  <span
                                    className="dropdown-wrapper"
                                    aria-hidden="true"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="d-flex flex-stack py-4">
                              <div className="d-flex align-items-center">
                                <div className="symbol symbol-35px">
                                  <img src="assets/img/doc.svg" alt="icon" />
                                </div>
                                <div className="ms-6">
                                  <a
                                    href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                    className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                  >
                                    Campaign Plan Document
                                  </a>
                                  <div className="fw-semibold text-muted">
                                    27kb
                                  </div>
                                </div>
                              </div>
                              <div className="min-w-100px">
                                <select
                                  className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                                  data-control="select2"
                                  data-hide-search="true"
                                  data-placeholder="Edit"
                                  data-select2-id="select2-data-25-chep"
                                  tabIndex={-1}
                                  aria-hidden="true"
                                  data-kt-initialized={1}
                                >
                                  <option data-select2-id="select2-data-27-quux" />
                                  <option value={1}>Remove</option>
                                  <option value={2}>Modify</option>
                                  <option value={3}>Select</option>
                                </select>
                                <span
                                  className="select2 select2-container select2-container--bootstrap5"
                                  dir="ltr"
                                  data-select2-id="select2-data-26-g753"
                                  style={{ width: "100%" }}
                                >
                                  <span className="selection">
                                    <span
                                      className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                      role="combobox"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      tabIndex={0}
                                      aria-disabled="false"
                                      aria-labelledby="select2-2vi3-container"
                                      aria-controls="select2-2vi3-container"
                                    >
                                      <span
                                        className="select2-selection__rendered"
                                        id="select2-2vi3-container"
                                        role="textbox"
                                        aria-readonly="true"
                                        title="Edit"
                                      >
                                        <span className="select2-selection__placeholder">
                                          Edit
                                        </span>
                                      </span>
                                      <span
                                        className="select2-selection__arrow"
                                        role="presentation"
                                      >
                                        <b role="presentation" />
                                      </span>
                                    </span>
                                  </span>
                                  <span
                                    className="dropdown-wrapper"
                                    aria-hidden="true"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-kt-stepper-element="content">
                      <div className="w-100">
                        <div className="pb-10 pb-lg-12">
                          <h1 className="fw-bold text-dark">
                            Configure Audiences
                          </h1>
                          <div className="text-muted fw-semibold fs-4">
                            If you need more info, please check
                            <a
                              href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                              className="link-primary"
                            >
                              Campaign Guidelines
                            </a>
                          </div>
                        </div>
                        <div className="fv-row mb-10">
                          <label className="fs-6 fw-semibold mb-2">
                            Gender
                            <i
                              className="fas fa-exclamation-circle ms-2 fs-7"
                              data-bs-toggle="tooltip"
                              aria-label="Show your ads to either men or women, or select 'All' for both"
                              data-bs-original-title="Show your ads to either men or women, or select 'All' for both"
                              data-kt-initialized={1}
                            />
                          </label>
                          <div
                            className="row g-9"
                            data-kt-buttons="true"
                            data-kt-buttons-target="[data-kt-button='true']"
                            data-kt-initialized={1}
                          >
                            <div className="col">
                              <label
                                className="btn btn-outline btn-outline-dashed btn-active-light-primary active d-flex text-start p-6"
                                data-kt-button="true"
                              >
                                <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="campaign_gender"
                                    defaultValue={1}
                                    defaultChecked="checked"
                                  />
                                </span>
                                <span className="ms-5">
                                  <span className="fs-4 fw-bold text-gray-800 d-block">
                                    All
                                  </span>
                                </span>
                              </label>
                            </div>
                            <div className="col">
                              <label
                                className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6"
                                data-kt-button="true"
                              >
                                <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="campaign_gender"
                                    defaultValue={2}
                                  />
                                </span>
                                <span className="ms-5">
                                  <span className="fs-4 fw-bold text-gray-800 d-block">
                                    Male
                                  </span>
                                </span>
                              </label>
                            </div>
                            <div className="col">
                              <label
                                className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6"
                                data-kt-button="true"
                              >
                                <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="campaign_gender"
                                    defaultValue={3}
                                  />
                                </span>
                                <span className="ms-5">
                                  <span className="fs-4 fw-bold text-gray-800 d-block">
                                    Female
                                  </span>
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="fv-row mb-10">
                          <label className="fs-6 fw-semibold mb-2">
                            Age
                            <i
                              className="fas fa-exclamation-circle ms-2 fs-7"
                              data-bs-toggle="tooltip"
                              aria-label="Select the minimum and maximum age of the people who will find your ad relevant."
                              data-bs-original-title="Select the minimum and maximum age of the people who will find your ad relevant."
                              data-kt-initialized={1}
                            />
                          </label>
                          <div className="d-flex flex-stack">
                            <div
                              id="kt_modal_create_campaign_age_min"
                              className="fs-7 fw-semibold text-muted"
                            >
                              18
                            </div>
                            <div
                              id="kt_modal_create_campaign_age_slider"
                              className="noUi-sm w-100 ms-5 me-8 noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr"
                            >
                              <div className="noUi-base">
                                <div className="noUi-connects">
                                  <div
                                    className="noUi-connect"
                                    style={{
                                      transform:
                                        "translate(7.46269%, 0px) scale(0.328358, 1)",
                                    }}
                                  />
                                </div>
                                <div
                                  className="noUi-origin"
                                  style={{
                                    transform: "translate(-92.5373%, 0px)",
                                    zIndex: 5,
                                  }}
                                >
                                  <div
                                    className="noUi-handle noUi-handle-lower"
                                    data-handle={0}
                                    tabIndex={0}
                                    role="slider"
                                    aria-orientation="horizontal"
                                    aria-valuemin={13.0}
                                    aria-valuemax={40.0}
                                    aria-valuenow={18.0}
                                    aria-valuetext={18.0}
                                  >
                                    <div className="noUi-touch-area" />
                                  </div>
                                </div>
                                <div
                                  className="noUi-origin"
                                  style={{
                                    transform: "translate(-59.7015%, 0px)",
                                    zIndex: 6,
                                  }}
                                >
                                  <div
                                    className="noUi-handle noUi-handle-upper"
                                    data-handle={1}
                                    tabIndex={0}
                                    role="slider"
                                    aria-orientation="horizontal"
                                    aria-valuemin={18.0}
                                    aria-valuemax={80.0}
                                    aria-valuenow={40.0}
                                    aria-valuetext={40.0}
                                  >
                                    <div className="noUi-touch-area" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              id="kt_modal_create_campaign_age_max"
                              className="fs-7 fw-semibold text-muted"
                            >
                              40
                            </div>
                          </div>
                        </div>
                        <div className="fv-row mb-10">
                          <label className="fs-6 fw-semibold mb-2">
                            Location
                            <i
                              className="fas fa-exclamation-circle ms-2 fs-7"
                              data-bs-toggle="tooltip"
                              aria-label="Enter one or more location points for more specific targeting."
                              data-bs-original-title="Enter one or more location points for more specific targeting."
                              data-kt-initialized={1}
                            />
                          </label>
                          <tags
                            className="tagify form-control d-flex align-items-center"
                            tabIndex={-1}
                          >
                            <tag
                              title="Argentina"
                              contentEditable="false"
                              spellCheck="false"
                              className="tagify__tag "
                              value="Argentina"
                              code="AR"
                            >
                              <x
                                title="remove tag"
                                className="tagify__tag__removeBtn"
                              />
                              <div className="d-flex align-items-center">
                                <img
                                  className="w-25px rounded-circle me-2"
                                  src="assets/img/argentina.svg"
                                />
                                <span className="tagify__tag-text">
                                  Argentina
                                </span>
                              </div>
                            </tag>
                            <tag
                              title="Australia"
                              contentEditable="false"
                              spellCheck="false"
                              className="tagify__tag "
                              value="Australia"
                              code="AU"
                            >
                              <x
                                title="remove tag"
                                className="tagify__tag__removeBtn"
                              />
                              <div className="d-flex align-items-center">
                                <img
                                  className="w-25px rounded-circle me-2"
                                  src="assets/img/australia.svg"
                                />
                                <span className="tagify__tag-text">
                                  Australia
                                </span>
                              </div>
                            </tag>
                            <span
                              contentEditable=""
                              tabIndex={0}
                              data-placeholder="​"
                              aria-placeholder=""
                              className="tagify__input"
                              role="textbox"
                              aria-autocomplete="both"
                              aria-multiline="false"
                            />
                            ​
                          </tags>
                          <input
                            className="form-control d-flex align-items-center"
                            defaultValue=""
                            id="kt_modal_create_campaign_location"
                            data-kt-flags-path="assets/img/media/flags/"
                            tabIndex={-1}
                          />
                        </div>
                      </div>
                    </div>
                    <div data-kt-stepper-element="content">
                      <div className="w-100">
                        <div className="pb-10 pb-lg-12">
                          <h1 className="fw-bold text-dark">
                            Budget Estimates
                          </h1>
                          <div className="text-muted fw-semibold fs-4">
                            If you need more info, please check
                            <a
                              href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                              className="link-primary"
                            >
                              Campaign Guidelines
                            </a>
                          </div>
                        </div>
                        <div className="fv-row mb-10">
                          <label className="fs-6 fw-semibold mb-2">
                            Campaign Duration
                            <i
                              className="fas fa-exclamation-circle ms-2 fs-7"
                              data-bs-toggle="tooltip"
                              aria-label="Choose how long you want your ad to run for"
                              data-bs-original-title="Choose how long you want your ad to run for"
                              data-kt-initialized={1}
                            />
                          </label>
                          <div className="d-flex gap-9 mb-7">
                            <button
                              type="button"
                              className="btn btn-outline btn-outline-dashed btn-active-light-primary active"
                              id="kt_modal_create_campaign_duration_all"
                            >
                              Continuous duration
                              <br />
                              <span className="fs-7">
                                Your ad will run continuously for a daily
                                budget.
                              </span>
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline btn-outline-dashed btn-active-light-primary btn-outline-default"
                              id="kt_modal_create_campaign_duration_fixed"
                            >
                              Fixed duration
                              <br />
                              <span className="fs-7">
                                Your ad will run on the specified dates only.
                              </span>
                            </button>
                          </div>
                          <input
                            className="form-control form-control-solid d-none flatpickr-input"
                            placeholder="Pick date & time"
                            id="kt_modal_create_campaign_datepicker"
                            type="hidden"
                          />
                          <input
                            className="form-control form-control-solid d-none form-control input"
                            placeholder="Pick date & time"
                            tabIndex={0}
                            type="text"
                            readOnly="readonly"
                          />
                        </div>
                        <div className="fv-row mb-10">
                          <label className="fs-6 fw-semibold mb-2">
                            Daily Budget
                            <i
                              className="fas fa-exclamation-circle ms-2 fs-7"
                              data-bs-toggle="tooltip"
                              aria-label="Choose the budget allocated for each day. Higher budget will generate better results"
                              data-bs-original-title="Choose the budget allocated for each day. Higher budget will generate better results"
                              data-kt-initialized={1}
                            />
                          </label>
                          <div className="d-flex flex-column text-center">
                            <div className="d-flex align-items-start justify-content-center mb-7">
                              <span className="fw-bold fs-4 mt-1 me-2">$</span>
                              <span
                                className="fw-bold fs-3x"
                                id="kt_modal_create_campaign_budget_label"
                              >
                                5
                              </span>
                              <span className="fw-bold fs-3x">.00</span>
                            </div>
                            <div
                              id="kt_modal_create_campaign_budget_slider"
                              className="noUi-sm noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr"
                            >
                              <div className="noUi-base">
                                <div className="noUi-connects" />
                                <div
                                  className="noUi-origin"
                                  style={{
                                    transform: "translate(-99.1984%, 0px)",
                                    zIndex: 4,
                                  }}
                                >
                                  <div
                                    className="noUi-handle noUi-handle-lower"
                                    data-handle={0}
                                    tabIndex={0}
                                    role="slider"
                                    aria-orientation="horizontal"
                                    aria-valuemin={1.0}
                                    aria-valuemax={500.0}
                                    aria-valuenow={5.0}
                                    aria-valuetext={5.0}
                                  >
                                    <div className="noUi-touch-area" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-kt-stepper-element="content">
                      <div className="w-100">
                        <div className="pb-12 text-center">
                          <h1 className="fw-bold text-dark">
                            Campaign Created!
                          </h1>
                          <div className="fw-semibold text-muted fs-4">
                            You will receive an email with with the summary of
                            your newly created campaign!
                          </div>
                        </div>
                        <div className="d-flex flex-center pb-20">
                          <button
                            id="kt_modal_create_campaign_create_new"
                            type="button"
                            className="btn btn-lg btn-light me-3"
                            data-kt-element="complete-start"
                          >
                            Create New Campaign
                          </button>
                          <a
                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html"
                            className="btn btn-lg btn-primary"
                            data-bs-toggle="tooltip"
                            data-bs-original-title="Coming Soon"
                            data-kt-initialized={1}
                          >
                            View Campaign
                          </a>
                        </div>
                        <div className="text-center px-4">
                          <img
                            src="assets/img/9.png"
                            alt=""
                            className="mww-100 mh-350px"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-stack pt-10">
                      <div className="me-2">
                        <button
                          type="button"
                          className="btn btn-lg btn-light-primary me-3"
                          data-kt-stepper-action="previous"
                        >
                          <span className="svg-icon svg-icon-3 me-1">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                opacity="0.5"
                                x={6}
                                y={11}
                                width={13}
                                height={2}
                                rx={1}
                                fill="currentColor"
                              />
                              <path
                                d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          Back
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="btn btn-lg btn-primary"
                          data-kt-stepper-action="submit"
                        >
                          <span className="indicator-label">
                            Submit
                            <span className="svg-icon svg-icon-3 ms-2 me-0">
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  opacity="0.5"
                                  x={18}
                                  y={13}
                                  width={13}
                                  height={2}
                                  rx={1}
                                  transform="rotate(-180 18 13)"
                                  fill="currentColor"
                                />
                                <path
                                  d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </span>
                          <span className="indicator-progress">
                            Please wait...
                            <span className="spinner-border spinner-border-sm align-middle ms-2" />
                          </span>
                        </button>
                        <button
                          type="button"
                          className="btn btn-lg btn-primary"
                          data-kt-stepper-action="next"
                        >
                          Continue
                          <span className="svg-icon svg-icon-3 ms-1 me-0">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                opacity="0.5"
                                x={18}
                                y={13}
                                width={13}
                                height={2}
                                rx={1}
                                transform="rotate(-180 18 13)"
                                fill="currentColor"
                              />
                              <path
                                d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="kt_modal_users_search"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered mw-650px">
            <div className="modal-content">
              <div className="modal-header pb-0 border-0 justify-content-end">
                <div
                  className="btn btn-sm btn-icon btn-active-color-primary"
                  data-bs-dismiss="modal"
                >
                  <span className="svg-icon svg-icon-1">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.5"
                        x={6}
                        y="17.3137"
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(-45 6 17.3137)"
                        fill="currentColor"
                      />
                      <rect
                        x="7.41422"
                        y={6}
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(45 7.41422 6)"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
                <div className="text-center mb-13">
                  <h1 className="mb-3">Search Users</h1>
                  <div className="text-muted fw-semibold fs-5">
                    Invite Collaborators To Your Project
                  </div>
                </div>
                <div
                  id="kt_modal_users_search_handler"
                  data-kt-search-keypress="true"
                  data-kt-search-min-length={2}
                  data-kt-search-enter="enter"
                  data-kt-search-layout="inline"
                  data-kt-search="true"
                >
                  <form
                    data-kt-search-element="form"
                    className="w-100 position-relative mb-5"
                    autoComplete="off"
                  >
                    <input type="hidden" />
                    <span className="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          opacity="0.5"
                          x="17.0365"
                          y="15.1223"
                          width="8.15546"
                          height={2}
                          rx={1}
                          transform="rotate(45 17.0365 15.1223)"
                          fill="currentColor"
                        />
                        <path
                          d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <input
                      type="text"
                      className="form-control form-control-lg form-control-solid px-15"
                      name="search"
                      defaultValue=""
                      placeholder="Search by username, full name or email..."
                      data-kt-search-element="input"
                    />
                    <span
                      className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5"
                      data-kt-search-element="spinner"
                    >
                      <span className="spinner-border h-15px w-15px align-middle text-muted" />
                    </span>
                    <span
                      className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 me-5 d-none"
                      data-kt-search-element="clear"
                    >
                      <span className="svg-icon svg-icon-2 svg-icon-lg-1 me-0">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.5"
                            x={6}
                            y="17.3137"
                            width={16}
                            height={2}
                            rx={1}
                            transform="rotate(-45 6 17.3137)"
                            fill="currentColor"
                          />
                          <rect
                            x="7.41422"
                            y={6}
                            width={16}
                            height={2}
                            rx={1}
                            transform="rotate(45 7.41422 6)"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </span>
                  </form>
                  <div className="py-5">
                    <div data-kt-search-element="suggestions">
                      <h3 className="fw-semibold mb-5">Recently searched:</h3>
                      <div className="mh-375px scroll-y me-n7 pe-7">
                        <a
                          href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                          className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                        >
                          <div className="symbol symbol-35px symbol-circle me-5">
                            <img alt="Pic" src="assets/img/300-6.jpg" />
                          </div>
                          <div className="fw-semibold">
                            <span className="fs-6 text-gray-800 me-2">
                              Emma Smith
                            </span>
                            <span className="badge badge-light">
                              Art Director
                            </span>
                          </div>
                        </a>
                        <a
                          href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                          className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                        >
                          <div className="symbol symbol-35px symbol-circle me-5">
                            <span className="symbol-label bg-light-danger text-danger fw-semibold">
                              M
                            </span>
                          </div>
                          <div className="fw-semibold">
                            <span className="fs-6 text-gray-800 me-2">
                              Melody Macy
                            </span>
                            <span className="badge badge-light">
                              Marketing Analytic
                            </span>
                          </div>
                        </a>
                        <a
                          href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                          className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                        >
                          <div className="symbol symbol-35px symbol-circle me-5">
                            <img alt="Pic" src="assets/img/300-1.jpg" />
                          </div>
                          <div className="fw-semibold">
                            <span className="fs-6 text-gray-800 me-2">
                              Max Smith
                            </span>
                            <span className="badge badge-light">
                              Software Enginer
                            </span>
                          </div>
                        </a>
                        <a
                          href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                          className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                        >
                          <div className="symbol symbol-35px symbol-circle me-5">
                            <img alt="Pic" src="assets/img/300-5.jpg" />
                          </div>
                          <div className="fw-semibold">
                            <span className="fs-6 text-gray-800 me-2">
                              Sean Bean
                            </span>
                            <span className="badge badge-light">
                              Web Developer
                            </span>
                          </div>
                        </a>
                        <a
                          href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                          className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                        >
                          <div className="symbol symbol-35px symbol-circle me-5">
                            <img alt="Pic" src="assets/img/300-25.jpg" />
                          </div>
                          <div className="fw-semibold">
                            <span className="fs-6 text-gray-800 me-2">
                              Brian Cox
                            </span>
                            <span className="badge badge-light">
                              UI/UX Designer
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div data-kt-search-element="results" className="d-none">
                      <div className="mh-375px scroll-y me-n7 pe-7">
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={0}
                        >
                          <div className="d-flex align-items-center">
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='0']"
                                defaultValue={0}
                              />
                            </label>
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="assets/img/300-6.jpg" />
                            </div>
                            <div className="ms-5">
                              <a
                                href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Emma Smith
                              </a>
                              <div className="fw-semibold text-muted">
                                smith@kpmg.com
                              </div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                              data-control="select2"
                              data-hide-search="true"
                              data-select2-id="select2-data-28-doqp"
                              tabIndex={-1}
                              aria-hidden="true"
                              data-kt-initialized={1}
                            >
                              <option value={1}>Guest</option>
                              <option
                                value={2}
                                selected="selected"
                                data-select2-id="select2-data-30-qrhm"
                              >
                                Owner
                              </option>
                              <option value={3}>Can Edit</option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--bootstrap5"
                              dir="ltr"
                              data-select2-id="select2-data-29-s9wt"
                              style={{ width: "100%" }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabIndex={0}
                                  aria-disabled="false"
                                  aria-labelledby="select2-g8j8-container"
                                  aria-controls="select2-g8j8-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-g8j8-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="Owner"
                                  >
                                    Owner
                                  </span>
                                  <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                  >
                                    <b role="presentation" />
                                  </span>
                                </span>
                              </span>
                              <span
                                className="dropdown-wrapper"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={1}
                        >
                          <div className="d-flex align-items-center">
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='1']"
                                defaultValue={1}
                              />
                            </label>
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                M
                              </span>
                            </div>
                            <div className="ms-5">
                              <a
                                href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Melody Macy
                              </a>
                              <div className="fw-semibold text-muted">
                                melody@altbox.com
                              </div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                              data-control="select2"
                              data-hide-search="true"
                              data-select2-id="select2-data-31-p0z1"
                              tabIndex={-1}
                              aria-hidden="true"
                              data-kt-initialized={1}
                            >
                              <option
                                value={1}
                                selected="selected"
                                data-select2-id="select2-data-33-r0jz"
                              >
                                Guest
                              </option>
                              <option value={2}>Owner</option>
                              <option value={3}>Can Edit</option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--bootstrap5"
                              dir="ltr"
                              data-select2-id="select2-data-32-tfbq"
                              style={{ width: "100%" }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabIndex={0}
                                  aria-disabled="false"
                                  aria-labelledby="select2-yjf0-container"
                                  aria-controls="select2-yjf0-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-yjf0-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="Guest"
                                  >
                                    Guest
                                  </span>
                                  <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                  >
                                    <b role="presentation" />
                                  </span>
                                </span>
                              </span>
                              <span
                                className="dropdown-wrapper"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={2}
                        >
                          <div className="d-flex align-items-center">
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='2']"
                                defaultValue={2}
                              />
                            </label>
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="assets/img/300-1.jpg" />
                            </div>
                            <div className="ms-5">
                              <a
                                href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Max Smith
                              </a>
                              <div className="fw-semibold text-muted">
                                max@kt.com
                              </div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                              data-control="select2"
                              data-hide-search="true"
                              data-select2-id="select2-data-34-2qzb"
                              tabIndex={-1}
                              aria-hidden="true"
                              data-kt-initialized={1}
                            >
                              <option value={1}>Guest</option>
                              <option value={2}>Owner</option>
                              <option
                                value={3}
                                selected="selected"
                                data-select2-id="select2-data-36-3qbq"
                              >
                                Can Edit
                              </option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--bootstrap5"
                              dir="ltr"
                              data-select2-id="select2-data-35-6mg1"
                              style={{ width: "100%" }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabIndex={0}
                                  aria-disabled="false"
                                  aria-labelledby="select2-s2c7-container"
                                  aria-controls="select2-s2c7-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-s2c7-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="Can Edit"
                                  >
                                    Can Edit
                                  </span>
                                  <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                  >
                                    <b role="presentation" />
                                  </span>
                                </span>
                              </span>
                              <span
                                className="dropdown-wrapper"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={3}
                        >
                          <div className="d-flex align-items-center">
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='3']"
                                defaultValue={3}
                              />
                            </label>
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="assets/img/300-5.jpg" />
                            </div>
                            <div className="ms-5">
                              <a
                                href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Sean Bean
                              </a>
                              <div className="fw-semibold text-muted">
                                sean@dellito.com
                              </div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                              data-control="select2"
                              data-hide-search="true"
                              data-select2-id="select2-data-37-eh6s"
                              tabIndex={-1}
                              aria-hidden="true"
                              data-kt-initialized={1}
                            >
                              <option value={1}>Guest</option>
                              <option
                                value={2}
                                selected="selected"
                                data-select2-id="select2-data-39-7w1o"
                              >
                                Owner
                              </option>
                              <option value={3}>Can Edit</option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--bootstrap5"
                              dir="ltr"
                              data-select2-id="select2-data-38-8bmp"
                              style={{ width: "100%" }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabIndex={0}
                                  aria-disabled="false"
                                  aria-labelledby="select2-nw32-container"
                                  aria-controls="select2-nw32-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-nw32-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="Owner"
                                  >
                                    Owner
                                  </span>
                                  <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                  >
                                    <b role="presentation" />
                                  </span>
                                </span>
                              </span>
                              <span
                                className="dropdown-wrapper"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={4}
                        >
                          <div className="d-flex align-items-center">
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='4']"
                                defaultValue={4}
                              />
                            </label>
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="assets/img/300-25.jpg" />
                            </div>
                            <div className="ms-5">
                              <a
                                href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Brian Cox
                              </a>
                              <div className="fw-semibold text-muted">
                                brian@exchange.com
                              </div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                              data-control="select2"
                              data-hide-search="true"
                              data-select2-id="select2-data-40-xsnv"
                              tabIndex={-1}
                              aria-hidden="true"
                              data-kt-initialized={1}
                            >
                              <option value={1}>Guest</option>
                              <option value={2}>Owner</option>
                              <option
                                value={3}
                                selected="selected"
                                data-select2-id="select2-data-42-d5jq"
                              >
                                Can Edit
                              </option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--bootstrap5"
                              dir="ltr"
                              data-select2-id="select2-data-41-75eh"
                              style={{ width: "100%" }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabIndex={0}
                                  aria-disabled="false"
                                  aria-labelledby="select2-8rv7-container"
                                  aria-controls="select2-8rv7-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-8rv7-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="Can Edit"
                                  >
                                    Can Edit
                                  </span>
                                  <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                  >
                                    <b role="presentation" />
                                  </span>
                                </span>
                              </span>
                              <span
                                className="dropdown-wrapper"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={5}
                        >
                          <div className="d-flex align-items-center">
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='5']"
                                defaultValue={5}
                              />
                            </label>
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-warning text-warning fw-semibold">
                                C
                              </span>
                            </div>
                            <div className="ms-5">
                              <a
                                href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Mikaela Collins
                              </a>
                              <div className="fw-semibold text-muted">
                                mik@pex.com
                              </div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                              data-control="select2"
                              data-hide-search="true"
                              data-select2-id="select2-data-43-41sc"
                              tabIndex={-1}
                              aria-hidden="true"
                              data-kt-initialized={1}
                            >
                              <option value={1}>Guest</option>
                              <option
                                value={2}
                                selected="selected"
                                data-select2-id="select2-data-45-i9pa"
                              >
                                Owner
                              </option>
                              <option value={3}>Can Edit</option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--bootstrap5"
                              dir="ltr"
                              data-select2-id="select2-data-44-bq5g"
                              style={{ width: "100%" }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabIndex={0}
                                  aria-disabled="false"
                                  aria-labelledby="select2-awea-container"
                                  aria-controls="select2-awea-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-awea-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="Owner"
                                  >
                                    Owner
                                  </span>
                                  <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                  >
                                    <b role="presentation" />
                                  </span>
                                </span>
                              </span>
                              <span
                                className="dropdown-wrapper"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={6}
                        >
                          <div className="d-flex align-items-center">
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='6']"
                                defaultValue={6}
                              />
                            </label>
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="assets/img/300-9.jpg" />
                            </div>
                            <div className="ms-5">
                              <a
                                href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Francis Mitcham
                              </a>
                              <div className="fw-semibold text-muted">
                                f.mit@kpmg.com
                              </div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                              data-control="select2"
                              data-hide-search="true"
                              data-select2-id="select2-data-46-ecph"
                              tabIndex={-1}
                              aria-hidden="true"
                              data-kt-initialized={1}
                            >
                              <option value={1}>Guest</option>
                              <option value={2}>Owner</option>
                              <option
                                value={3}
                                selected="selected"
                                data-select2-id="select2-data-48-xppz"
                              >
                                Can Edit
                              </option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--bootstrap5"
                              dir="ltr"
                              data-select2-id="select2-data-47-psjs"
                              style={{ width: "100%" }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabIndex={0}
                                  aria-disabled="false"
                                  aria-labelledby="select2-1dql-container"
                                  aria-controls="select2-1dql-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-1dql-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="Can Edit"
                                  >
                                    Can Edit
                                  </span>
                                  <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                  >
                                    <b role="presentation" />
                                  </span>
                                </span>
                              </span>
                              <span
                                className="dropdown-wrapper"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={7}
                        >
                          <div className="d-flex align-items-center">
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='7']"
                                defaultValue={7}
                              />
                            </label>
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                O
                              </span>
                            </div>
                            <div className="ms-5">
                              <a
                                href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Olivia Wild
                              </a>
                              <div className="fw-semibold text-muted">
                                olivia@corpmail.com
                              </div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                              data-control="select2"
                              data-hide-search="true"
                              data-select2-id="select2-data-49-6nx9"
                              tabIndex={-1}
                              aria-hidden="true"
                              data-kt-initialized={1}
                            >
                              <option value={1}>Guest</option>
                              <option
                                value={2}
                                selected="selected"
                                data-select2-id="select2-data-51-m10d"
                              >
                                Owner
                              </option>
                              <option value={3}>Can Edit</option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--bootstrap5"
                              dir="ltr"
                              data-select2-id="select2-data-50-ty15"
                              style={{ width: "100%" }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabIndex={0}
                                  aria-disabled="false"
                                  aria-labelledby="select2-6hrq-container"
                                  aria-controls="select2-6hrq-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-6hrq-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="Owner"
                                  >
                                    Owner
                                  </span>
                                  <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                  >
                                    <b role="presentation" />
                                  </span>
                                </span>
                              </span>
                              <span
                                className="dropdown-wrapper"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={8}
                        >
                          <div className="d-flex align-items-center">
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='8']"
                                defaultValue={8}
                              />
                            </label>
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-primary text-primary fw-semibold">
                                N
                              </span>
                            </div>
                            <div className="ms-5">
                              <a
                                href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Neil Owen
                              </a>
                              <div className="fw-semibold text-muted">
                                owen.neil@gmail.com
                              </div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                              data-control="select2"
                              data-hide-search="true"
                              data-select2-id="select2-data-52-9i1e"
                              tabIndex={-1}
                              aria-hidden="true"
                              data-kt-initialized={1}
                            >
                              <option
                                value={1}
                                selected="selected"
                                data-select2-id="select2-data-54-0hlq"
                              >
                                Guest
                              </option>
                              <option value={2}>Owner</option>
                              <option value={3}>Can Edit</option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--bootstrap5"
                              dir="ltr"
                              data-select2-id="select2-data-53-8dsn"
                              style={{ width: "100%" }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabIndex={0}
                                  aria-disabled="false"
                                  aria-labelledby="select2-pte7-container"
                                  aria-controls="select2-pte7-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-pte7-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="Guest"
                                  >
                                    Guest
                                  </span>
                                  <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                  >
                                    <b role="presentation" />
                                  </span>
                                </span>
                              </span>
                              <span
                                className="dropdown-wrapper"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={9}
                        >
                          <div className="d-flex align-items-center">
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='9']"
                                defaultValue={9}
                              />
                            </label>
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="assets/img/300-23.jpg" />
                            </div>
                            <div className="ms-5">
                              <a
                                href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Dan Wilson
                              </a>
                              <div className="fw-semibold text-muted">
                                dam@consilting.com
                              </div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                              data-control="select2"
                              data-hide-search="true"
                              data-select2-id="select2-data-55-dmv4"
                              tabIndex={-1}
                              aria-hidden="true"
                              data-kt-initialized={1}
                            >
                              <option value={1}>Guest</option>
                              <option value={2}>Owner</option>
                              <option
                                value={3}
                                selected="selected"
                                data-select2-id="select2-data-57-ftf2"
                              >
                                Can Edit
                              </option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--bootstrap5"
                              dir="ltr"
                              data-select2-id="select2-data-56-08bz"
                              style={{ width: "100%" }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabIndex={0}
                                  aria-disabled="false"
                                  aria-labelledby="select2-7bi3-container"
                                  aria-controls="select2-7bi3-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-7bi3-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="Can Edit"
                                  >
                                    Can Edit
                                  </span>
                                  <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                  >
                                    <b role="presentation" />
                                  </span>
                                </span>
                              </span>
                              <span
                                className="dropdown-wrapper"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={10}
                        >
                          <div className="d-flex align-items-center">
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='10']"
                                defaultValue={10}
                              />
                            </label>
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-danger text-danger fw-semibold">
                                E
                              </span>
                            </div>
                            <div className="ms-5">
                              <a
                                href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Emma Bold
                              </a>
                              <div className="fw-semibold text-muted">
                                emma@intenso.com
                              </div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                              data-control="select2"
                              data-hide-search="true"
                              data-select2-id="select2-data-58-sen5"
                              tabIndex={-1}
                              aria-hidden="true"
                              data-kt-initialized={1}
                            >
                              <option value={1}>Guest</option>
                              <option
                                value={2}
                                selected="selected"
                                data-select2-id="select2-data-60-a9hx"
                              >
                                Owner
                              </option>
                              <option value={3}>Can Edit</option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--bootstrap5"
                              dir="ltr"
                              data-select2-id="select2-data-59-47pk"
                              style={{ width: "100%" }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabIndex={0}
                                  aria-disabled="false"
                                  aria-labelledby="select2-9zev-container"
                                  aria-controls="select2-9zev-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-9zev-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="Owner"
                                  >
                                    Owner
                                  </span>
                                  <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                  >
                                    <b role="presentation" />
                                  </span>
                                </span>
                              </span>
                              <span
                                className="dropdown-wrapper"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={11}
                        >
                          <div className="d-flex align-items-center">
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='11']"
                                defaultValue={11}
                              />
                            </label>
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="assets/img/300-12.jpg" />
                            </div>
                            <div className="ms-5">
                              <a
                                href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Ana Crown
                              </a>
                              <div className="fw-semibold text-muted">
                                ana.cf@limtel.com
                              </div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                              data-control="select2"
                              data-hide-search="true"
                              data-select2-id="select2-data-61-l296"
                              tabIndex={-1}
                              aria-hidden="true"
                              data-kt-initialized={1}
                            >
                              <option
                                value={1}
                                selected="selected"
                                data-select2-id="select2-data-63-h312"
                              >
                                Guest
                              </option>
                              <option value={2}>Owner</option>
                              <option value={3}>Can Edit</option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--bootstrap5"
                              dir="ltr"
                              data-select2-id="select2-data-62-9d1s"
                              style={{ width: "100%" }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabIndex={0}
                                  aria-disabled="false"
                                  aria-labelledby="select2-pd93-container"
                                  aria-controls="select2-pd93-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-pd93-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="Guest"
                                  >
                                    Guest
                                  </span>
                                  <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                  >
                                    <b role="presentation" />
                                  </span>
                                </span>
                              </span>
                              <span
                                className="dropdown-wrapper"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={12}
                        >
                          <div className="d-flex align-items-center">
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='12']"
                                defaultValue={12}
                              />
                            </label>
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-info text-info fw-semibold">
                                A
                              </span>
                            </div>
                            <div className="ms-5">
                              <a
                                href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Robert Doe
                              </a>
                              <div className="fw-semibold text-muted">
                                robert@benko.com
                              </div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                              data-control="select2"
                              data-hide-search="true"
                              data-select2-id="select2-data-64-66kg"
                              tabIndex={-1}
                              aria-hidden="true"
                              data-kt-initialized={1}
                            >
                              <option value={1}>Guest</option>
                              <option value={2}>Owner</option>
                              <option
                                value={3}
                                selected="selected"
                                data-select2-id="select2-data-66-14g4"
                              >
                                Can Edit
                              </option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--bootstrap5"
                              dir="ltr"
                              data-select2-id="select2-data-65-5udq"
                              style={{ width: "100%" }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabIndex={0}
                                  aria-disabled="false"
                                  aria-labelledby="select2-ojcn-container"
                                  aria-controls="select2-ojcn-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-ojcn-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="Can Edit"
                                  >
                                    Can Edit
                                  </span>
                                  <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                  >
                                    <b role="presentation" />
                                  </span>
                                </span>
                              </span>
                              <span
                                className="dropdown-wrapper"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={13}
                        >
                          <div className="d-flex align-items-center">
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='13']"
                                defaultValue={13}
                              />
                            </label>
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="assets/img/300-13.jpg" />
                            </div>
                            <div className="ms-5">
                              <a
                                href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                John Miller
                              </a>
                              <div className="fw-semibold text-muted">
                                miller@mapple.com
                              </div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                              data-control="select2"
                              data-hide-search="true"
                              data-select2-id="select2-data-67-n27f"
                              tabIndex={-1}
                              aria-hidden="true"
                              data-kt-initialized={1}
                            >
                              <option value={1}>Guest</option>
                              <option value={2}>Owner</option>
                              <option
                                value={3}
                                selected="selected"
                                data-select2-id="select2-data-69-4tyg"
                              >
                                Can Edit
                              </option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--bootstrap5"
                              dir="ltr"
                              data-select2-id="select2-data-68-pycc"
                              style={{ width: "100%" }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabIndex={0}
                                  aria-disabled="false"
                                  aria-labelledby="select2-6f9a-container"
                                  aria-controls="select2-6f9a-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-6f9a-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="Can Edit"
                                  >
                                    Can Edit
                                  </span>
                                  <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                  >
                                    <b role="presentation" />
                                  </span>
                                </span>
                              </span>
                              <span
                                className="dropdown-wrapper"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={14}
                        >
                          <div className="d-flex align-items-center">
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='14']"
                                defaultValue={14}
                              />
                            </label>
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-success text-success fw-semibold">
                                L
                              </span>
                            </div>
                            <div className="ms-5">
                              <a
                                href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Lucy Kunic
                              </a>
                              <div className="fw-semibold text-muted">
                                lucy.m@fentech.com
                              </div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                              data-control="select2"
                              data-hide-search="true"
                              data-select2-id="select2-data-70-gm9y"
                              tabIndex={-1}
                              aria-hidden="true"
                              data-kt-initialized={1}
                            >
                              <option value={1}>Guest</option>
                              <option
                                value={2}
                                selected="selected"
                                data-select2-id="select2-data-72-30c9"
                              >
                                Owner
                              </option>
                              <option value={3}>Can Edit</option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--bootstrap5"
                              dir="ltr"
                              data-select2-id="select2-data-71-ocnh"
                              style={{ width: "100%" }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabIndex={0}
                                  aria-disabled="false"
                                  aria-labelledby="select2-6457-container"
                                  aria-controls="select2-6457-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-6457-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="Owner"
                                  >
                                    Owner
                                  </span>
                                  <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                  >
                                    <b role="presentation" />
                                  </span>
                                </span>
                              </span>
                              <span
                                className="dropdown-wrapper"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={15}
                        >
                          <div className="d-flex align-items-center">
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='15']"
                                defaultValue={15}
                              />
                            </label>
                            <div className="symbol symbol-35px symbol-circle">
                              <img alt="Pic" src="assets/img/300-21.jpg" />
                            </div>
                            <div className="ms-5">
                              <a
                                href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Ethan Wilder
                              </a>
                              <div className="fw-semibold text-muted">
                                ethan@loop.com.au
                              </div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                              data-control="select2"
                              data-hide-search="true"
                              data-select2-id="select2-data-73-64nu"
                              tabIndex={-1}
                              aria-hidden="true"
                              data-kt-initialized={1}
                            >
                              <option
                                value={1}
                                selected="selected"
                                data-select2-id="select2-data-75-he8w"
                              >
                                Guest
                              </option>
                              <option value={2}>Owner</option>
                              <option value={3}>Can Edit</option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--bootstrap5"
                              dir="ltr"
                              data-select2-id="select2-data-74-uupe"
                              style={{ width: "100%" }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabIndex={0}
                                  aria-disabled="false"
                                  aria-labelledby="select2-z9a7-container"
                                  aria-controls="select2-z9a7-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-z9a7-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="Guest"
                                  >
                                    Guest
                                  </span>
                                  <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                  >
                                    <b role="presentation" />
                                  </span>
                                </span>
                              </span>
                              <span
                                className="dropdown-wrapper"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="border-bottom border-gray-300 border-bottom-dashed" />
                        <div
                          className="rounded d-flex flex-stack bg-active-lighten p-4"
                          data-user-id={16}
                        >
                          <div className="d-flex align-items-center">
                            <label className="form-check form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="users"
                                data-kt-check="true"
                                data-kt-check-target="[data-user-id='16']"
                                defaultValue={16}
                              />
                            </label>
                            <div className="symbol symbol-35px symbol-circle">
                              <span className="symbol-label bg-light-warning text-warning fw-semibold">
                                C
                              </span>
                            </div>
                            <div className="ms-5">
                              <a
                                href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                              >
                                Mikaela Collins
                              </a>
                              <div className="fw-semibold text-muted">
                                mik@pex.com
                              </div>
                            </div>
                          </div>
                          <div className="ms-2 w-100px">
                            <select
                              className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                              data-control="select2"
                              data-hide-search="true"
                              data-select2-id="select2-data-76-d4z9"
                              tabIndex={-1}
                              aria-hidden="true"
                              data-kt-initialized={1}
                            >
                              <option value={1}>Guest</option>
                              <option value={2}>Owner</option>
                              <option
                                value={3}
                                selected="selected"
                                data-select2-id="select2-data-78-yyiv"
                              >
                                Can Edit
                              </option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--bootstrap5"
                              dir="ltr"
                              data-select2-id="select2-data-77-ixr1"
                              style={{ width: "100%" }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabIndex={0}
                                  aria-disabled="false"
                                  aria-labelledby="select2-k49f-container"
                                  aria-controls="select2-k49f-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-k49f-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="Can Edit"
                                  >
                                    Can Edit
                                  </span>
                                  <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                  >
                                    <b role="presentation" />
                                  </span>
                                </span>
                              </span>
                              <span
                                className="dropdown-wrapper"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-center mt-15">
                        <button
                          type="reset"
                          id="kt_modal_users_search_reset"
                          data-bs-dismiss="modal"
                          className="btn btn-active-light me-3"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          id="kt_modal_users_search_submit"
                          className="btn btn-primary"
                        >
                          Add Selected Users
                        </button>
                      </div>
                    </div>
                    <div
                      data-kt-search-element="empty"
                      className="text-center d-none"
                    >
                      <div className="fw-semibold py-10">
                        <div className="text-gray-600 fs-3 mb-2">
                          No users found
                        </div>
                        <div className="text-muted fs-6">
                          Try to search by username, full name or email...
                        </div>
                      </div>
                      <div className="text-center px-5">
                        <img
                          src="assets/img/1.png"
                          alt=""
                          className="w-100 h-200px h-sm-325px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="kt_modal_invite_friends"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog mw-650px">
            <div className="modal-content">
              <div className="modal-header pb-0 border-0 justify-content-end">
                <div
                  className="btn btn-sm btn-icon btn-active-color-primary"
                  data-bs-dismiss="modal"
                >
                  <span className="svg-icon svg-icon-1">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.5"
                        x={6}
                        y="17.3137"
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(-45 6 17.3137)"
                        fill="currentColor"
                      />
                      <rect
                        x="7.41422"
                        y={6}
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(45 7.41422 6)"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
                <div className="text-center mb-13">
                  <h1 className="mb-3">Invite a Friend</h1>
                  <div className="text-muted fw-semibold fs-5">
                    If you need more info, please check out
                    <a
                      href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                      className="link-primary fw-bold"
                    >
                      FAQ Page
                    </a>
                    .
                  </div>
                </div>
                <div className="btn btn-light-primary fw-bold w-100 mb-8">
                  <img
                    alt="Logo"
                    src="assets/img/google-icon.svg"
                    className="h-20px me-3"
                  />
                  Invite Gmail Contacts
                </div>
                <div className="separator d-flex flex-center mb-8">
                  <span className="text-uppercase bg-body fs-7 fw-semibold text-muted px-3">
                    or
                  </span>
                </div>
                <textarea
                  className="form-control form-control-solid mb-8"
                  rows={3}
                  placeholder="Type or paste emails here"
                  defaultValue={""}
                />
                <div className="mb-10">
                  <div className="fs-6 fw-semibold mb-2">Your Invitations</div>
                  <div className="mh-300px scroll-y me-n7 pe-7">
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/img/300-6.jpg" />
                        </div>
                        <div className="ms-5">
                          <a
                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Emma Smith
                          </a>
                          <div className="fw-semibold text-muted">
                            smith@kpmg.com
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                          data-select2-id="select2-data-79-vxt5"
                          tabIndex={-1}
                          aria-hidden="true"
                          data-kt-initialized={1}
                        >
                          <option value={1}>Guest</option>
                          <option
                            value={2}
                            selected="selected"
                            data-select2-id="select2-data-81-lnf4"
                          >
                            Owner
                          </option>
                          <option value={3}>Can Edit</option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--bootstrap5"
                          dir="ltr"
                          data-select2-id="select2-data-80-dj8d"
                          style={{ width: "100%" }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-140r-container"
                              aria-controls="select2-140r-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-140r-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Owner"
                              >
                                Owner
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation" />
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-danger text-danger fw-semibold">
                            M
                          </span>
                        </div>
                        <div className="ms-5">
                          <a
                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Melody Macy
                          </a>
                          <div className="fw-semibold text-muted">
                            melody@altbox.com
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                          data-select2-id="select2-data-82-psd6"
                          tabIndex={-1}
                          aria-hidden="true"
                          data-kt-initialized={1}
                        >
                          <option
                            value={1}
                            selected="selected"
                            data-select2-id="select2-data-84-zp18"
                          >
                            Guest
                          </option>
                          <option value={2}>Owner</option>
                          <option value={3}>Can Edit</option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--bootstrap5"
                          dir="ltr"
                          data-select2-id="select2-data-83-s5iw"
                          style={{ width: "100%" }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-kowt-container"
                              aria-controls="select2-kowt-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-kowt-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Guest"
                              >
                                Guest
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation" />
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/img/300-1.jpg" />
                        </div>
                        <div className="ms-5">
                          <a
                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Max Smith
                          </a>
                          <div className="fw-semibold text-muted">
                            max@kt.com
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                          data-select2-id="select2-data-85-8olo"
                          tabIndex={-1}
                          aria-hidden="true"
                          data-kt-initialized={1}
                        >
                          <option value={1}>Guest</option>
                          <option value={2}>Owner</option>
                          <option
                            value={3}
                            selected="selected"
                            data-select2-id="select2-data-87-ct7l"
                          >
                            Can Edit
                          </option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--bootstrap5"
                          dir="ltr"
                          data-select2-id="select2-data-86-pjw4"
                          style={{ width: "100%" }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-9wsx-container"
                              aria-controls="select2-9wsx-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-9wsx-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Can Edit"
                              >
                                Can Edit
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation" />
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/img/300-5.jpg" />
                        </div>
                        <div className="ms-5">
                          <a
                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Sean Bean
                          </a>
                          <div className="fw-semibold text-muted">
                            sean@dellito.com
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                          data-select2-id="select2-data-88-sm5y"
                          tabIndex={-1}
                          aria-hidden="true"
                          data-kt-initialized={1}
                        >
                          <option value={1}>Guest</option>
                          <option
                            value={2}
                            selected="selected"
                            data-select2-id="select2-data-90-r7mt"
                          >
                            Owner
                          </option>
                          <option value={3}>Can Edit</option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--bootstrap5"
                          dir="ltr"
                          data-select2-id="select2-data-89-ewtn"
                          style={{ width: "100%" }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-sevb-container"
                              aria-controls="select2-sevb-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-sevb-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Owner"
                              >
                                Owner
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation" />
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/img/300-25.jpg" />
                        </div>
                        <div className="ms-5">
                          <a
                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Brian Cox
                          </a>
                          <div className="fw-semibold text-muted">
                            brian@exchange.com
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                          data-select2-id="select2-data-91-vmh3"
                          tabIndex={-1}
                          aria-hidden="true"
                          data-kt-initialized={1}
                        >
                          <option value={1}>Guest</option>
                          <option value={2}>Owner</option>
                          <option
                            value={3}
                            selected="selected"
                            data-select2-id="select2-data-93-0kht"
                          >
                            Can Edit
                          </option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--bootstrap5"
                          dir="ltr"
                          data-select2-id="select2-data-92-pcvo"
                          style={{ width: "100%" }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-xyzl-container"
                              aria-controls="select2-xyzl-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-xyzl-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Can Edit"
                              >
                                Can Edit
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation" />
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-warning text-warning fw-semibold">
                            C
                          </span>
                        </div>
                        <div className="ms-5">
                          <a
                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Mikaela Collins
                          </a>
                          <div className="fw-semibold text-muted">
                            mik@pex.com
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                          data-select2-id="select2-data-94-yo4c"
                          tabIndex={-1}
                          aria-hidden="true"
                          data-kt-initialized={1}
                        >
                          <option value={1}>Guest</option>
                          <option
                            value={2}
                            selected="selected"
                            data-select2-id="select2-data-96-ux7a"
                          >
                            Owner
                          </option>
                          <option value={3}>Can Edit</option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--bootstrap5"
                          dir="ltr"
                          data-select2-id="select2-data-95-giq1"
                          style={{ width: "100%" }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-tlgt-container"
                              aria-controls="select2-tlgt-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-tlgt-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Owner"
                              >
                                Owner
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation" />
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/img/300-9.jpg" />
                        </div>
                        <div className="ms-5">
                          <a
                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Francis Mitcham
                          </a>
                          <div className="fw-semibold text-muted">
                            f.mit@kpmg.com
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                          data-select2-id="select2-data-97-0pdg"
                          tabIndex={-1}
                          aria-hidden="true"
                          data-kt-initialized={1}
                        >
                          <option value={1}>Guest</option>
                          <option value={2}>Owner</option>
                          <option
                            value={3}
                            selected="selected"
                            data-select2-id="select2-data-99-0hxt"
                          >
                            Can Edit
                          </option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--bootstrap5"
                          dir="ltr"
                          data-select2-id="select2-data-98-58k1"
                          style={{ width: "100%" }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-1luk-container"
                              aria-controls="select2-1luk-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-1luk-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Can Edit"
                              >
                                Can Edit
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation" />
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-danger text-danger fw-semibold">
                            O
                          </span>
                        </div>
                        <div className="ms-5">
                          <a
                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Olivia Wild
                          </a>
                          <div className="fw-semibold text-muted">
                            olivia@corpmail.com
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                          data-select2-id="select2-data-100-bw5r"
                          tabIndex={-1}
                          aria-hidden="true"
                          data-kt-initialized={1}
                        >
                          <option value={1}>Guest</option>
                          <option
                            value={2}
                            selected="selected"
                            data-select2-id="select2-data-102-ar88"
                          >
                            Owner
                          </option>
                          <option value={3}>Can Edit</option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--bootstrap5"
                          dir="ltr"
                          data-select2-id="select2-data-101-fbeh"
                          style={{ width: "100%" }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-tane-container"
                              aria-controls="select2-tane-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-tane-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Owner"
                              >
                                Owner
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation" />
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-primary text-primary fw-semibold">
                            N
                          </span>
                        </div>
                        <div className="ms-5">
                          <a
                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Neil Owen
                          </a>
                          <div className="fw-semibold text-muted">
                            owen.neil@gmail.com
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                          data-select2-id="select2-data-103-a2yq"
                          tabIndex={-1}
                          aria-hidden="true"
                          data-kt-initialized={1}
                        >
                          <option
                            value={1}
                            selected="selected"
                            data-select2-id="select2-data-105-7fvs"
                          >
                            Guest
                          </option>
                          <option value={2}>Owner</option>
                          <option value={3}>Can Edit</option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--bootstrap5"
                          dir="ltr"
                          data-select2-id="select2-data-104-3pxt"
                          style={{ width: "100%" }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-uf7s-container"
                              aria-controls="select2-uf7s-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-uf7s-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Guest"
                              >
                                Guest
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation" />
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/img/300-23.jpg" />
                        </div>
                        <div className="ms-5">
                          <a
                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Dan Wilson
                          </a>
                          <div className="fw-semibold text-muted">
                            dam@consilting.com
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                          data-select2-id="select2-data-106-q5gx"
                          tabIndex={-1}
                          aria-hidden="true"
                          data-kt-initialized={1}
                        >
                          <option value={1}>Guest</option>
                          <option value={2}>Owner</option>
                          <option
                            value={3}
                            selected="selected"
                            data-select2-id="select2-data-108-cn6s"
                          >
                            Can Edit
                          </option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--bootstrap5"
                          dir="ltr"
                          data-select2-id="select2-data-107-f5n3"
                          style={{ width: "100%" }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-5iiz-container"
                              aria-controls="select2-5iiz-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-5iiz-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Can Edit"
                              >
                                Can Edit
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation" />
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-danger text-danger fw-semibold">
                            E
                          </span>
                        </div>
                        <div className="ms-5">
                          <a
                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Emma Bold
                          </a>
                          <div className="fw-semibold text-muted">
                            emma@intenso.com
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                          data-select2-id="select2-data-109-x4ke"
                          tabIndex={-1}
                          aria-hidden="true"
                          data-kt-initialized={1}
                        >
                          <option value={1}>Guest</option>
                          <option
                            value={2}
                            selected="selected"
                            data-select2-id="select2-data-111-ta5s"
                          >
                            Owner
                          </option>
                          <option value={3}>Can Edit</option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--bootstrap5"
                          dir="ltr"
                          data-select2-id="select2-data-110-lnt3"
                          style={{ width: "100%" }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-ffdl-container"
                              aria-controls="select2-ffdl-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-ffdl-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Owner"
                              >
                                Owner
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation" />
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/img/300-12.jpg" />
                        </div>
                        <div className="ms-5">
                          <a
                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Ana Crown
                          </a>
                          <div className="fw-semibold text-muted">
                            ana.cf@limtel.com
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                          data-select2-id="select2-data-112-sim1"
                          tabIndex={-1}
                          aria-hidden="true"
                          data-kt-initialized={1}
                        >
                          <option
                            value={1}
                            selected="selected"
                            data-select2-id="select2-data-114-8lg2"
                          >
                            Guest
                          </option>
                          <option value={2}>Owner</option>
                          <option value={3}>Can Edit</option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--bootstrap5"
                          dir="ltr"
                          data-select2-id="select2-data-113-slwo"
                          style={{ width: "100%" }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-w9p5-container"
                              aria-controls="select2-w9p5-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-w9p5-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Guest"
                              >
                                Guest
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation" />
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-info text-info fw-semibold">
                            A
                          </span>
                        </div>
                        <div className="ms-5">
                          <a
                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Robert Doe
                          </a>
                          <div className="fw-semibold text-muted">
                            robert@benko.com
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                          data-select2-id="select2-data-115-vo07"
                          tabIndex={-1}
                          aria-hidden="true"
                          data-kt-initialized={1}
                        >
                          <option value={1}>Guest</option>
                          <option value={2}>Owner</option>
                          <option
                            value={3}
                            selected="selected"
                            data-select2-id="select2-data-117-ag1i"
                          >
                            Can Edit
                          </option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--bootstrap5"
                          dir="ltr"
                          data-select2-id="select2-data-116-8alo"
                          style={{ width: "100%" }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-8ka3-container"
                              aria-controls="select2-8ka3-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-8ka3-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Can Edit"
                              >
                                Can Edit
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation" />
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/img/300-13.jpg" />
                        </div>
                        <div className="ms-5">
                          <a
                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            John Miller
                          </a>
                          <div className="fw-semibold text-muted">
                            miller@mapple.com
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                          data-select2-id="select2-data-118-uzrz"
                          tabIndex={-1}
                          aria-hidden="true"
                          data-kt-initialized={1}
                        >
                          <option value={1}>Guest</option>
                          <option value={2}>Owner</option>
                          <option
                            value={3}
                            selected="selected"
                            data-select2-id="select2-data-120-bs62"
                          >
                            Can Edit
                          </option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--bootstrap5"
                          dir="ltr"
                          data-select2-id="select2-data-119-9heg"
                          style={{ width: "100%" }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-svvr-container"
                              aria-controls="select2-svvr-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-svvr-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Can Edit"
                              >
                                Can Edit
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation" />
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-35px symbol-circle">
                          <span className="symbol-label bg-light-success text-success fw-semibold">
                            L
                          </span>
                        </div>
                        <div className="ms-5">
                          <a
                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Lucy Kunic
                          </a>
                          <div className="fw-semibold text-muted">
                            lucy.m@fentech.com
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                          data-select2-id="select2-data-121-pkhu"
                          tabIndex={-1}
                          aria-hidden="true"
                          data-kt-initialized={1}
                        >
                          <option value={1}>Guest</option>
                          <option
                            value={2}
                            selected="selected"
                            data-select2-id="select2-data-123-7l14"
                          >
                            Owner
                          </option>
                          <option value={3}>Can Edit</option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--bootstrap5"
                          dir="ltr"
                          data-select2-id="select2-data-122-vi1k"
                          style={{ width: "100%" }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-tvlf-container"
                              aria-controls="select2-tvlf-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-tvlf-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Owner"
                              >
                                Owner
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation" />
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/img/300-21.jpg" />
                        </div>
                        <div className="ms-5">
                          <a
                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Ethan Wilder
                          </a>
                          <div className="fw-semibold text-muted">
                            ethan@loop.com.au
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                          data-select2-id="select2-data-124-du09"
                          tabIndex={-1}
                          aria-hidden="true"
                          data-kt-initialized={1}
                        >
                          <option
                            value={1}
                            selected="selected"
                            data-select2-id="select2-data-126-ez30"
                          >
                            Guest
                          </option>
                          <option value={2}>Owner</option>
                          <option value={3}>Can Edit</option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--bootstrap5"
                          dir="ltr"
                          data-select2-id="select2-data-125-0pke"
                          style={{ width: "100%" }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-nvgr-container"
                              aria-controls="select2-nvgr-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-nvgr-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Guest"
                              >
                                Guest
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation" />
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-stack py-4">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/img/300-25.jpg" />
                        </div>
                        <div className="ms-5">
                          <a
                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                          >
                            Brian Cox
                          </a>
                          <div className="fw-semibold text-muted">
                            brian@exchange.com
                          </div>
                        </div>
                      </div>
                      <div className="ms-2 w-100px">
                        <select
                          className="form-select form-select-solid form-select-sm select2-hidden-accessible"
                          data-control="select2"
                          data-dropdown-parent="#kt_modal_invite_friends"
                          data-hide-search="true"
                          data-select2-id="select2-data-127-1udk"
                          tabIndex={-1}
                          aria-hidden="true"
                          data-kt-initialized={1}
                        >
                          <option value={1}>Guest</option>
                          <option value={2}>Owner</option>
                          <option
                            value={3}
                            selected="selected"
                            data-select2-id="select2-data-129-9c6v"
                          >
                            Can Edit
                          </option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--bootstrap5"
                          dir="ltr"
                          data-select2-id="select2-data-128-qam2"
                          style={{ width: "100%" }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single form-select form-select-solid form-select-sm"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-v9pk-container"
                              aria-controls="select2-v9pk-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-v9pk-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Can Edit"
                              >
                                Can Edit
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation" />
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-stack">
                  <div className="me-5 fw-semibold">
                    <label className="fs-6">Adding Users by Team Members</label>
                    <div className="fs-7 text-muted">
                      If you need more info, please check budget planning
                    </div>
                  </div>
                  <label className="form-check form-switch form-check-custom form-check-solid">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue={1}
                      defaultChecked="checked"
                    />
                    <span className="form-check-label fw-semibold text-muted">
                      Allowed
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg
          id="SvgjsSvg1001"
          width={2}
          height={0}
          style={{
            overflow: "hidden",
            top: "-100%",
            left: "-100%",
            position: "absolute",
            opacity: 0,
          }}
        >
          <defs id="SvgjsDefs1002" />
          <polyline id="SvgjsPolyline1003" points="0,0" />
          <path
            id="SvgjsPath1004"
            d="M-1 297.1982222222222L-1 297.1982222222222C-1 297.1982222222222 36.50846354166667 297.1982222222222 36.50846354166667 297.1982222222222C36.50846354166667 297.1982222222222 73.01692708333334 297.1982222222222 73.01692708333334 297.1982222222222C73.01692708333334 297.1982222222222 109.525390625 297.1982222222222 109.525390625 297.1982222222222C109.525390625 297.1982222222222 146.03385416666669 297.1982222222222 146.03385416666669 297.1982222222222C146.03385416666669 297.1982222222222 182.54231770833334 297.1982222222222 182.54231770833334 297.1982222222222C182.54231770833334 297.1982222222222 219.05078125 297.1982222222222 219.05078125 297.1982222222222C219.05078125 297.1982222222222 255.55924479166669 297.1982222222222 255.55924479166669 297.1982222222222C255.55924479166669 297.1982222222222 292.06770833333337 297.1982222222222 292.06770833333337 297.1982222222222C292.06770833333337 297.1982222222222 328.576171875 297.1982222222222 328.576171875 297.1982222222222C328.576171875 297.1982222222222 365.0846354166667 297.1982222222222 365.0846354166667 297.1982222222222C365.0846354166667 297.1982222222222 401.59309895833337 297.1982222222222 401.59309895833337 297.1982222222222C401.59309895833337 297.1982222222222 438.1015625 297.1982222222222 438.1015625 297.1982222222222C438.1015625 297.1982222222222 474.6100260416667 297.1982222222222 474.6100260416667 297.1982222222222C474.6100260416667 297.1982222222222 511.11848958333337 297.1982222222222 511.11848958333337 297.1982222222222C511.11848958333337 297.1982222222222 547.626953125 297.1982222222222 547.626953125 297.1982222222222C547.626953125 297.1982222222222 584.1354166666667 297.1982222222222 584.1354166666667 297.1982222222222C584.1354166666667 297.1982222222222 620.6438802083334 297.1982222222222 620.6438802083334 297.1982222222222C620.6438802083334 297.1982222222222 657.15234375 297.1982222222222 657.15234375 297.1982222222222C657.15234375 297.1982222222222 657.15234375 297.1982222222222 657.15234375 297.1982222222222 "
          />
        </svg>
        <div className="daterangepicker ltr show-ranges opensleft">
          <div className="ranges">
            <ul>
              <li data-range-key="Today">Today</li>
              <li data-range-key="Yesterday">Yesterday</li>
              <li data-range-key="Last 7 Days">Last 7 Days</li>
              <li data-range-key="Last 30 Days">Last 30 Days</li>
              <li data-range-key="This Month">This Month</li>
              <li data-range-key="Last Month">Last Month</li>
              <li data-range-key="Custom Range">Custom Range</li>
            </ul>
          </div>
          <div className="drp-calendar left">
            <div className="calendar-table" />
            <div className="calendar-time" style={{ display: "none" }} />
          </div>
          <div className="drp-calendar right">
            <div className="calendar-table" />
            <div className="calendar-time" style={{ display: "none" }} />
          </div>
          <div className="drp-buttons">
            <span className="drp-selected" />
            <button className="cancelBtn btn btn-sm btn-default" type="button">
              Cancel
            </button>
            <button
              className="applyBtn btn btn-sm btn-primary"
              disabled="disabled"
              type="button"
            >
              Apply
            </button>{" "}
          </div>
        </div>
        <div className="daterangepicker ltr show-ranges opensleft">
          <div className="ranges">
            <ul>
              <li data-range-key="Today">Today</li>
              <li data-range-key="Yesterday">Yesterday</li>
              <li data-range-key="Last 7 Days">Last 7 Days</li>
              <li data-range-key="Last 30 Days">Last 30 Days</li>
              <li data-range-key="This Month">This Month</li>
              <li data-range-key="Last Month">Last Month</li>
              <li data-range-key="Custom Range">Custom Range</li>
            </ul>
          </div>
          <div className="drp-calendar left">
            <div className="calendar-table" />
            <div className="calendar-time" style={{ display: "none" }} />
          </div>
          <div className="drp-calendar right">
            <div className="calendar-table" />
            <div className="calendar-time" style={{ display: "none" }} />
          </div>
          <div className="drp-buttons">
            <span className="drp-selected" />
            <button className="cancelBtn btn btn-sm btn-default" type="button">
              Cancel
            </button>
            <button
              className="applyBtn btn btn-sm btn-primary"
              disabled="disabled"
              type="button"
            >
              Apply
            </button>{" "}
          </div>
        </div>
        <div
          className="flatpickr-calendar hasTime rangeMode animate"
          tabIndex={-1}
        >
          <div className="flatpickr-months">
            <span className="flatpickr-prev-month">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 17 17"
              >
                <g />
                <path d="M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z" />
              </svg>
            </span>
            <div className="flatpickr-month">
              <div className="flatpickr-current-month">
                <select
                  className="flatpickr-monthDropdown-months"
                  aria-label="Month"
                  tabIndex={-1}
                >
                  <option
                    className="flatpickr-monthDropdown-month"
                    value={0}
                    tabIndex={-1}
                  >
                    January
                  </option>
                  <option
                    className="flatpickr-monthDropdown-month"
                    value={1}
                    tabIndex={-1}
                  >
                    February
                  </option>
                  <option
                    className="flatpickr-monthDropdown-month"
                    value={2}
                    tabIndex={-1}
                  >
                    March
                  </option>
                  <option
                    className="flatpickr-monthDropdown-month"
                    value={3}
                    tabIndex={-1}
                  >
                    April
                  </option>
                  <option
                    className="flatpickr-monthDropdown-month"
                    value={4}
                    tabIndex={-1}
                  >
                    May
                  </option>
                  <option
                    className="flatpickr-monthDropdown-month"
                    value={5}
                    tabIndex={-1}
                  >
                    June
                  </option>
                  <option
                    className="flatpickr-monthDropdown-month"
                    value={6}
                    tabIndex={-1}
                  >
                    July
                  </option>
                  <option
                    className="flatpickr-monthDropdown-month"
                    value={7}
                    tabIndex={-1}
                  >
                    August
                  </option>
                  <option
                    className="flatpickr-monthDropdown-month"
                    value={8}
                    tabIndex={-1}
                  >
                    September
                  </option>
                  <option
                    className="flatpickr-monthDropdown-month"
                    value={9}
                    tabIndex={-1}
                  >
                    October
                  </option>
                  <option
                    className="flatpickr-monthDropdown-month"
                    value={10}
                    tabIndex={-1}
                  >
                    November
                  </option>
                  <option
                    className="flatpickr-monthDropdown-month"
                    value={11}
                    tabIndex={-1}
                  >
                    December
                  </option>
                </select>
                <div className="numInputWrapper">
                  <input
                    className="numInput cur-year"
                    type="number"
                    tabIndex={-1}
                    aria-label="Year"
                  />
                  <span className="arrowUp" />
                  <span className="arrowDown" />
                </div>
              </div>
            </div>
            <span className="flatpickr-next-month">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 17 17"
              >
                <g />
                <path d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z" />
              </svg>
            </span>
          </div>
          <div className="flatpickr-innerContainer">
            <div className="flatpickr-rContainer">
              <div className="flatpickr-weekdays">
                <div className="flatpickr-weekdaycontainer">
                  <span className="flatpickr-weekday">Sun</span>
                  <span className="flatpickr-weekday">Mon</span>
                  <span className="flatpickr-weekday">Tue</span>
                  <span className="flatpickr-weekday">Wed</span>
                  <span className="flatpickr-weekday">Thu</span>
                  <span className="flatpickr-weekday">Fri</span>
                  <span className="flatpickr-weekday">Sat</span>
                </div>
              </div>
              <div className="flatpickr-days" tabIndex={-1}>
                <div className="dayContainer">
                  <span
                    className="flatpickr-day prevMonthDay"
                    aria-label="February 25, 2024"
                    tabIndex={-1}
                  >
                    25
                  </span>
                  <span
                    className="flatpickr-day prevMonthDay"
                    aria-label="February 26, 2024"
                    tabIndex={-1}
                  >
                    26
                  </span>
                  <span
                    className="flatpickr-day prevMonthDay"
                    aria-label="February 27, 2024"
                    tabIndex={-1}
                  >
                    27
                  </span>
                  <span
                    className="flatpickr-day prevMonthDay"
                    aria-label="February 28, 2024"
                    tabIndex={-1}
                  >
                    28
                  </span>
                  <span
                    className="flatpickr-day prevMonthDay"
                    aria-label="February 29, 2024"
                    tabIndex={-1}
                  >
                    29
                  </span>
                  <span
                    className="flatpickr-day"
                    aria-label="March 1, 2024"
                    tabIndex={-1}
                  >
                    1
                  </span>
                  <span
                    className="flatpickr-day"
                    aria-label="March 2, 2024"
                    tabIndex={-1}
                  >
                    2
                  </span>
                  <span
                    className="flatpickr-day"
                    aria-label="March 3, 2024"
                    tabIndex={-1}
                  >
                    3
                  </span>
                  <span
                    className="flatpickr-day"
                    aria-label="March 4, 2024"
                    tabIndex={-1}
                  >
                    4
                  </span>
                  <span
                    className="flatpickr-day"
                    aria-label="March 5, 2024"
                    tabIndex={-1}
                  >
                    5
                  </span>
                  <span
                    className="flatpickr-day"
                    aria-label="March 6, 2024"
                    tabIndex={-1}
                  >
                    6
                  </span>
                  <span
                    className="flatpickr-day"
                    aria-label="March 7, 2024"
                    tabIndex={-1}
                  >
                    7
                  </span>
                  <span
                    className="flatpickr-day today"
                    aria-label="March 8, 2024"
                    aria-current="date"
                    tabIndex={-1}
                  >
                    8
                  </span>
                  <span
                    className="flatpickr-day"
                    aria-label="March 9, 2024"
                    tabIndex={-1}
                  >
                    9
                  </span>
                  <span
                    className="flatpickr-day"
                    aria-label="March 10, 2024"
                    tabIndex={-1}
                  >
                    10
                  </span>
                  <span
                    className="flatpickr-day"
                    aria-label="March 11, 2024"
                    tabIndex={-1}
                  >
                    11
                  </span>
                  <span
                    className="flatpickr-day"
                    aria-label="March 12, 2024"
                    tabIndex={-1}
                  >
                    12
                  </span>
                  <span
                    className="flatpickr-day"
                    aria-label="March 13, 2024"
                    tabIndex={-1}
                  >
                    13
                  </span>
                  <span
                    className="flatpickr-day"
                    aria-label="March 14, 2024"
                    tabIndex={-1}
                  >
                    14
                  </span>
                  <span
                    className="flatpickr-day"
                    aria-label="March 15, 2024"
                    tabIndex={-1}
                  >
                    15
                  </span>
                  <span
                    className="flatpickr-day"
                    aria-label="March 16, 2024"
                    tabIndex={-1}
                  >
                    16
                  </span>
                  <span
                    className="flatpickr-day"
                    aria-label="March 17, 2024"
                    tabIndex={-1}
                  >
                    17
                  </span>
                  <span
                    className="flatpickr-day"
                    aria-label="March 18, 2024"
                    tabIndex={-1}
                  >
                    18
                  </span>
                  <span
                    className="flatpickr-day"
                    aria-label="March 19, 2024"
                    tabIndex={-1}
                  >
                    19
                  </span>
                  <span
                    className="flatpickr-day"
                    aria-label="March 20, 2024"
                    tabIndex={-1}
                  >
                    20
                  </span>
                  <span
                    className="flatpickr-day"
                    aria-label="March 21, 2024"
                    tabIndex={-1}
                  >
                    21
                  </span>
                  <span
                    className="flatpickr-day"
                    aria-label="March 22, 2024"
                    tabIndex={-1}
                  >
                    22
                  </span>
                  <span
                    className="flatpickr-day"
                    aria-label="March 23, 2024"
                    tabIndex={-1}
                  >
                    23
                  </span>
                  <span
                    className="flatpickr-day"
                    aria-label="March 24, 2024"
                    tabIndex={-1}
                  >
                    24
                  </span>
                  <span
                    className="flatpickr-day"
                    aria-label="March 25, 2024"
                    tabIndex={-1}
                  >
                    25
                  </span>
                  <span
                    className="flatpickr-day"
                    aria-label="March 26, 2024"
                    tabIndex={-1}
                  >
                    26
                  </span>
                  <span
                    className="flatpickr-day"
                    aria-label="March 27, 2024"
                    tabIndex={-1}
                  >
                    27
                  </span>
                  <span
                    className="flatpickr-day"
                    aria-label="March 28, 2024"
                    tabIndex={-1}
                  >
                    28
                  </span>
                  <span
                    className="flatpickr-day"
                    aria-label="March 29, 2024"
                    tabIndex={-1}
                  >
                    29
                  </span>
                  <span
                    className="flatpickr-day"
                    aria-label="March 30, 2024"
                    tabIndex={-1}
                  >
                    30
                  </span>
                  <span
                    className="flatpickr-day"
                    aria-label="March 31, 2024"
                    tabIndex={-1}
                  >
                    31
                  </span>
                  <span
                    className="flatpickr-day nextMonthDay"
                    aria-label="April 1, 2024"
                    tabIndex={-1}
                  >
                    1
                  </span>
                  <span
                    className="flatpickr-day nextMonthDay"
                    aria-label="April 2, 2024"
                    tabIndex={-1}
                  >
                    2
                  </span>
                  <span
                    className="flatpickr-day nextMonthDay"
                    aria-label="April 3, 2024"
                    tabIndex={-1}
                  >
                    3
                  </span>
                  <span
                    className="flatpickr-day nextMonthDay"
                    aria-label="April 4, 2024"
                    tabIndex={-1}
                  >
                    4
                  </span>
                  <span
                    className="flatpickr-day nextMonthDay"
                    aria-label="April 5, 2024"
                    tabIndex={-1}
                  >
                    5
                  </span>
                  <span
                    className="flatpickr-day nextMonthDay"
                    aria-label="April 6, 2024"
                    tabIndex={-1}
                  >
                    6
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flatpickr-time" tabIndex={-1}>
            <div className="numInputWrapper">
              <input
                className="numInput flatpickr-hour"
                type="number"
                aria-label="Hour"
                tabIndex={-1}
                step={1}
                min={1}
                max={12}
                maxLength={2}
              />
              <span className="arrowUp" />
              <span className="arrowDown" />
            </div>
            <span className="flatpickr-time-separator">:</span>
            <div className="numInputWrapper">
              <input
                className="numInput flatpickr-minute"
                type="number"
                aria-label="Minute"
                tabIndex={-1}
                step={5}
                min={0}
                max={59}
                maxLength={2}
              />
              <span className="arrowUp" />
              <span className="arrowDown" />
            </div>
            <span
              className="flatpickr-am-pm"
              title="Click to toggle"
              tabIndex={-1}
            >
              PM
            </span>
          </div>
        </div>
        <input
          type="file"
          multiple="multiple"
          className="dz-hidden-input"
          tabIndex={-1}
          style={{
            visibility: "hidden",
            position: "absolute",
            top: 0,
            left: 0,
            height: 0,
            width: 0,
          }}
        />
      </>
    </div>
  );
};

export default Dashboard;
