import React, { Component } from 'react';
import "./NavBar.css";
import Grid from '@material-ui/core/Grid';
import fblogo from "../../images/logo.png";
import home from "../../images/home.svg";
import page from "../../images/pages.svg";
import watch from "../../images/watch.svg";
import market from "../../images/market.svg";
import group from "../../images/groups.svg";
import { Avatar } from '@material-ui/core';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
  //  state = {  }
    render() { 
        return ( 
        <div>
            <Grid container className="navbar_main">
                <Grid item xs={3}>
                    <div className="navbar_leftbarx">
                        <img className="navbar_logo" src={fblogo} width="35px"/>
                        <input className="navbar_search" type="text" placeholder="Search foodie club" />
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="navbar_container">
                        <div className="navbar_tabs actives">
                            <img src={home} height="35px" width="35px" />
                        </div>
                        <div className="navbar_container">
                            <img src={page} height="35px" width="35px" />
                        </div>
                        <div className="navbar_container">
                            <img src={watch} height="35px" width="35px" />
                        </div>
                        <div className="navbar_container">
                            <img src={market} height="35px" width="35px" />
                        </div>
                        <div className="navbar_container">
                            <img src={group} height="35px" width="35px" />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div className="navbar_right">
                        <div className="navbar_righttab">
                        <Avatar className="navbar_rightimg" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ffavpng.com%2Fpng_view%2Fprofile-transparent-user-profile-avatar-png%2FvXNy4WRv&psig=AOvVaw0e73UdUBXVQqe9uo_YkQ1Q&ust=1683556165534000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMjS6su14_4CFQAAAAAdAAAAABAF" />
                        <div className="navbar_profilename">Anne</div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
         );
    }
}
 
export default NavBar;