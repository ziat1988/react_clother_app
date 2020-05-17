import React from "react";
import "./preview-collection.style.scss";
import CollectionItem from "../collection-item/collection-item.component";

/**
 * TODO: performance concern khi function items.filter... luon chay khi component duoc render
 *
 */
const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otheritemProps }) => (
          <CollectionItem key={id} {...otheritemProps} />
        ))}
    </div>
  </div>
);
export default CollectionPreview;
