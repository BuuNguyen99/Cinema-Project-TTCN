import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function SearchPage() {
  const listSearch =
    useSelector((state) => state.reducerMovie.searchMovie) || [];
  console.log(listSearch);
  let notify = "";
  if (listSearch) {
    notify =
      listSearch.length > 0
        ? `${listSearch.length} kết quả được tìm thấy!`
        : "Không tìm thấy kết quả nào!";
  }
  return (
    <div style={{ minHeight: "70vh" }} className="container my-4">
      <p>{notify}</p>
      <div className="row">{listSearch && showSearchList(listSearch)}</div>
    </div>
  );
}

const showSearchList = (listSearch) => {
  if (listSearch.length > 0) {
    const list = listSearch.map((item, index) => {
      return (
        <div key={index} className="col-md-4 p-2">
          <div className="card">
            <img
              className="card-img-top"
              src={item.image}
              alt="Card"
              style={{ width: "100%" }}
            />
            <div className="card-body">
              <Link to="search">
                <h6 className="card-title">{item.name}</h6>
                <p className="card-text text-left">Diễn viên: {item.author}</p>
              </Link>
            </div>
          </div>
        </div>
      );
    });
    return list;
  }
};

export default React.memo(SearchPage);
