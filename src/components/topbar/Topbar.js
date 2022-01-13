import React from "react";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

function Topbar() {
  return (
    <div className="container-fluid topbar">
      <div className="row">
        <div className="col-md-3">
          <div className="topbarLeft">
            <span className="logo">Foreigner</span>
          </div>
        </div>
        <div className="col-md-5">
          <div className="topbarCenter">
            <div className="searchbar">
              <Search className="searchIcon" />
              <input
                placeholder="Search for friend, post or videos "
                className="searchInput"
              />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="topbarRight">
            <div className="topbarLinks">
              <span className="topbarLink">Homepage</span>
              <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
              <div className="topbarIconItem">
                <Person />
                <span className="topbarIconBadge"> 1</span>
              </div>
              <div className="topbarIconItem">
                <Chat />
                <span className="topbarIconBadge"> 1</span>
              </div>
              <div className="topbarIconItem">
                <Notifications/>
                <span className="topbarIconBadge"> 1</span>
              </div>
            </div>
            <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
