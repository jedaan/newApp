import React from "react";

class SideNavigator extends React.Component {

    render() {
        return (
            <div className="floating-menu">
                <h3>Floating Menu</h3>
                <a href="/css/">CSS</a>
                <a href="/html/">HTML</a>
                <a href="/coldfusion/">ColdFusion</a>
                <a href="/database/">Database</a>
            </div>
        );
    }
}

export default SideNavigator;
