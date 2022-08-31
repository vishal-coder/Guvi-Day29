import React from "react";
import { Dashboardcards } from "./Dashboard";

var data=[
    {
        header: "Default Card Example",
        class: "defaultCardHeader",
        content: "This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example."
    },
    {
        header: "Basic Card Example",
        class: "basicCardHeader",
        content: "The styling for this basic card example is created by using default Bootstrap utility classes. By using utility classes, the style of the card component can be easily modified with no need for any custom CSS!"
    },
    {
        header: "Dropdown Card Example",
        class: "dropdownCardHeader",
        content: "Dropdown menus can be placed in the card header in order to extend the functionality of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis icon in the card header can be clicked on in order to toggle a dropdown menu."
    },
    {
        header: "Collapsable Card Example",
        class: "collapseCardHeader",
        content: "This is a collapsable card example using Bootstrap's built in collapse functionality. Click on the card header to see the card body collapse and expand!"
    }
]

export function Cards() {
    return (
        <div className="body">
            <h1 className="cardsHeader">Cards</h1>
            <Dashboardcards />
            <div>
                <Card />
            </div>
        </div>
    );
}

function Card() {
    return (
        <div className="cardsWrapper">
            {data.map((value, index)=>{
                return(
                    <div className="cardItem">
                        <div key={index} className={value.class}>{value.header}</div>
                        <p>{value.content}</p>
                    </div>
                );
            })}
        </div>
    );
}
