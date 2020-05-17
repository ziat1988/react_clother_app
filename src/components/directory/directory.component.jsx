import React from "react";
import "./directory.style.scss";
import MenuItem from "../menu-item/menu-item.component";
import sections from "./data.js";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: sections
    };
  }

  render() {
    console.log("trong directory:", this.props);
    return (
      <div className="directory-menu">
        {/*   {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
 */}

        {this.state.sections.map(({ id, ...resParams }) => (
          <MenuItem key={id} {...resParams} />
        ))}
      </div>
    );
  }
}

export default Directory;
