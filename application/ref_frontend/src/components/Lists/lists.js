import React from "react";
import  "../../style/lists.css";
import ListBar from './ListBar';
import Category  from './Category'

const Lists = ({  }) => {
  return (
    <div className="list-page">
      <div className="list-title">
        <div className="title">
          <h1 className="listname-title">Fridge</h1>
        </div>
        <div className="searchBar">
          {/* <input name="name"></input> */}
        </div>
      </div>
      <div className='rowC'>
            {/* //sideline navbar list */}
            <ListBar />
            {/* //list divs */}
            <Category />
      </div>
    </div>
  );
};
export default Lists;