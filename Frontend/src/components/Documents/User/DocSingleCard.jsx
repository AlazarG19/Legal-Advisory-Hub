import { Link } from "react-router-dom";

import { useState } from "react";
import DocModal from "./DocModal";
import PdfToImage from "./PdfToImage";

const DocSingleCard = ({ Doc }) => {
  const [showModal, setShowModal] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const handleShowModal = () => {
    setShowModal(true);
    setLikeCount((prevCount) => prevCount + 1); // Increment the like count
  };

  return (
    <div className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl">
      <h4 className="my-2 text-gray-500">{Doc.path}</h4>
      <div className="flex justify-start items-center gap-x-2">
        <h2 className="my-1">{Doc.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <h2 className="my-1">{Doc.path}</h2>
      </div>
      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <button
          className="text-3xl text-blue-800 hover:text-black cursor-pointer"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/Docs/details/${Doc._id}`}></Link>
        <Link to={`/Docs/edit/${Doc._id}`}></Link>
        <Link to={`/Docs/delete/${Doc._id}`}></Link>
      </div>
      {Doc.path && <PdfToImage documentPath={Doc.path} />}
      {showModal && <DocModal Doc={Doc} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default DocSingleCard;
