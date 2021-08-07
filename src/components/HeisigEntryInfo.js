import React, {useState} from "react";

function HeisigEntryInfo(props) {

    return <div>
        <div> {props.heisigItem.number} </div>
        <div> {props.heisigItem.character}</div>
        <div> {props.heisigItem.word}</div>
        <div> {props.heisigItem.repetitionNumber} </div>
        <div> {props.heisigItem.memo} </div>
        </div>;
}

export default HeisigEntryInfo;