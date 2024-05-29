import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import LoadingModal from './Elements/LoadingModal';
import Navigation from '../Navigation';


function TrainAI() {
	const [files, setFiles] = useState([]);
	const [savedFiles, setSavedFiles] = useState([]);
	const [showLoadingModal, setShowLoadingModal] = useState(false);
	const fileInputRef = useRef(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(10);
	const [totalPages, setTotalPages] = useState(1);
	const [isUploading, setIsUploading] = useState(false);

	useEffect(() => {
		const fetchDocuments = async () => {
			try {
				const response = await fetch(`http://localhost:8000/documents`);
				const result = await response.json();
				setSavedFiles(result);
				setTotalPages(Math.ceil(result.length / itemsPerPage));
			} catch (error) {
				console.log(error);
			}
		};

		fetchDocuments();
	}, [itemsPerPage]);

	const handleFileUpload = (event) => {
		const selectedFiles = Array.from(event.target.files);
		setFiles(selectedFiles);
	};

	const handleTrain = async () => {
		try {
			setShowLoadingModal(true);
			const trainResponse = await fetch('http://localhost:8000/import-database', {
				method: 'POST',
				mode: 'no-cors',
			});

			if (!trainResponse.ok) {
				throw new Error(`HTTP error ${trainResponse.status}`);
			}

			setShowLoadingModal(false);
		} catch (error) {
			console.error('Error during upload and training:', error);
			setShowLoadingModal(false);
		}
	};

	const handleUpload = async () => {
		try {
			setIsUploading(true);
			const formData = new FormData();
			files.forEach((file) => {
				formData.append('file', file);
			});
			const uploadResponse = await fetch('http://localhost:8000/upload', {
				method: 'POST',
				body: formData,
				mode: 'no-cors',
			});

			if (!uploadResponse.ok) {
				throw new Error(`HTTP error ${uploadResponse.status}`);
			}

			setShowLoadingModal(true);
			const trainResponse = await fetch('http://localhost:8000/import-database', {
				method: 'POST',
				mode: 'no-cors',
			});

			if (!trainResponse.ok) {
				throw new Error(`HTTP error ${trainResponse.status}`);
			}

			setShowLoadingModal(false);
		} catch (error) {
			console.error('Error during upload and training:', error);
			setShowLoadingModal(false);
		}
	};

	const handleDropzoneClick = () => {
		fileInputRef.current.click();
	};

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const populateSavedFiles = () => {
		const indexOfLastItem = currentPage * itemsPerPage;
		const indexOfFirstItem = indexOfLastItem - itemsPerPage;
		const currentItems = savedFiles.slice(indexOfFirstItem, indexOfLastItem);

		return (
			<div>
				{currentItems.map((savedFile, index) => (
					<>
						{/* <!--begin::Item--> */}
						<div className="d-flex flex-stack">
							{/* <!--begin::Symbol--> */}
							<div className="symbol symbol-40px me-4">
								<div className="symbol-label fs-2 fw-semibold bg-success text-inverse-success">{savedFile[0]}</div>
							</div>
							{/* <!--end::Symbol--> */}
							{/* <!--begin::Section--> */}
							<div className="d-flex align-items-center flex-row-fluid flex-wrap">
								{/* <!--begin:Author--> */}
								<div className="flex-grow-1 me-2">
									<p className="text-gray-800 text-hover-primary fs-6 fw-bold">{savedFile}</p>
								</div>
								{/* <!--end:Author--> */}
								{/* <!--begin::Actions--> */}
							</div>
							{/* <!--end::Section--> */}
						</div>
						{/* <!--end::Item--> */}
						{/* <!--begin::Separator--> */}
						<div className="separator separator-dashed my-4"></div>
						{/* <!--end::Separator--> */}
					</>
				))}
				<div className="pagination">
					{Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
						<button
							key={pageNumber}
							className={`page-link ${currentPage === pageNumber ? 'active' : ''}`}
							onClick={() => handlePageChange(pageNumber)}
						>
							{pageNumber}
						</button>
					))}
				</div>
			</div>
		);
	};
	return (
		<>


			<div className="row">
				{/* <!--begin::Media--> */}
				<div className="col-md-6">
					<div className="card card-flush py-4">
						{/* <!--begin::Card header--> */}
						<div className="card-header">
							<div className="card-title">
								<h2>Media</h2>
							</div>
						</div>
						{/* <!--end::Card header--> */}
						{/* <!--begin::Card body--> */}
						<div className="card-body pt-0">
							{/* <!--begin::Input group--> */}
							<div className="fv-row mb-2">
								{/* <!--begin::Dropzone--> */}
								<div className="dropzone" id="kt_ecommerce_add_product_media" onClick={handleDropzoneClick}>
									{/* <!--begin::Message--> */}
									<div className="dz-message needsclick">
										{/* <!--begin::Icon--> */}
										<i className="bi bi-file-earmark-arrow-up text-primary fs-3x"></i>
										{/* <!--end::Icon--> */}
										{/* <!--begin::Info--> */}
										<div className="ms-4">
											<h3 className="fs-5 fw-bold text-gray-900 mb-1">Drop files here or click to upload.</h3>
											<span className="fs-7 fw-semibold text-gray-400">Upload up to 10 files</span>
											{/* Display selected file names */}
											{files.length > 0 && (
												<div className="mt-2">
													<span className="fw-semibold text-gray-700">Selected files:</span>
													<ul className="list-unstyled mb-0">
														{files.map((file, index) => (
															<li key={index}>{file.name}</li>
														))}
													</ul>
												</div>
											)}
										</div>
										{/* <!--end::Info--> */}
									</div>
									{/* <!--end::Message--> */}
									{/* <!--begin::Input--> */}
									<input type="file" className="dz-input" multiple ref={fileInputRef} onChange={handleFileUpload} style={{ display: 'none' }} />
									{/* <!--end::Input--> */}
								</div>
								{/* <!--end::Dropzone--> */}
							</div>
							{/* <!--end::Input group--> */}
							{/* <!--begin::Description--> */}
							<div className="text-muted fs-7">Set the product media gallery.</div>
							{/* <!--end::Description--> */}
							{/* <!--begin::Actions--> */}
							<div className="d-flex justify-content-end mt-4">
								<button className="btn btn-primary me-3" onClick={handleUpload}>
									Upload
								</button>
								<button className="btn btn-primary" onClick={handleTrain}>
									Train AI
								</button>
							</div>
							{/* <!--end::Actions--> */}
						</div>
						{/* <!--end::Card body--> */}
					</div>
				</div>

				{/* <!--begin::List widget 20--> */}
				<div className="col-md-6">
					<div className="card h-xl-100">
						{/* <!--begin::Header--> */}
						<div className="card-header border-0 pt-5">
							<h3 className="card-title align-items-start flex-column">
								<span className="card-label fw-bold text-dark">Trained Documents</span>
								<span className="text-muted mt-1 fw-semibold fs-7">Documents</span>
							</h3>
						</div>
						{/* <!--end::Header--> */}
						{/* <!--begin::Body--> */}
						<div className="card-body pt-6">
							{populateSavedFiles()}
						</div>
						{/* <!--end::Body--> */}
					</div>
				</div>
			</div>
			{/* <!--end::List widget 20--> */}
			{/* <!--end::Media--> */}
			{/* Render the loading modal if showLoadingModal is true */}
			{showLoadingModal && <LoadingModal />}
		</>
	);
}

export default TrainAI;