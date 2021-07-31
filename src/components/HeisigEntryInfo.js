function HeisigEntryInfo(props) {
    return <div> 
        <div> heisigEntry </div>
        <div> {props.heisigItem.number} </div>
        <div> {props.heisigItem.character}</div>
        <div> {props.heisigItem.word}</div> 
        <div> {props.heisigItem.memo} </div>
        </div>;
}

export default HeisigEntryInfo;