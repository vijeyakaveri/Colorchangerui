import React, { useState } from "react";
import Select from 'react-select';
const BGColor = () => {
var colors = [
{
 value: 1,
 label: "red"
 },

{
value: 2,
label: "green"
 },
 {
    value: 3,
    label: "yellow"
     },
     {
        value: 4,
        label: "blue"
         },
     {
 value: 5,
 label: "cyan"
 },
 ]

var [bgcolor, setbgcolor] = useState("");
const eventChange = (event) => {
setbgcolor(event.label);
 }
 return (
    <div>
        <style>
            {
                'body {background-color:' + bgcolor + ';'
            }
        </style>
        <Select options={colors} onChange={eventChange}></Select>
        <center>
            <h1>BG COLOR is {bgcolor}</h1>
        </center>
    </div>
)

}
export default BGColor;

