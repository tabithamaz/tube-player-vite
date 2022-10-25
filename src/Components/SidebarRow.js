import React from "react";
import "./SidebarRow.css";
import HomeIcon from "@material-ui/icons/Home";
function SidebarRow({ selected,Icon,title }) {
  return (
    <div className="sidebarRow">
      <Icon className={'sidebarRow_icon ${selected && "selected"}'} />
      <h2 className="sidebarRow_title">{title} </h2>
    </div>
  );
}
export default SidebarRow;
