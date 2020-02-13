import React from "react";
import './NavigationItems.css'
import NavigationItem from '../../components/NavigationItem/NavigationItem';

const navigationItems = (props) => {
    let navigationItems = [];
    props.birdsData.map((taskName, index) =>  {
       return navigationItems.push(<NavigationItem active = {props.active} id={index} key={index} taskName={taskName.taskName}/>)
    });


    return (
        <div className={'NavigationItems'}>
            {navigationItems}
        </div>
    )
};

export default navigationItems;