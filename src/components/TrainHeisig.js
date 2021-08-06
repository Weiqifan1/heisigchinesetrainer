import HeisigEntryInfo from './HeisigEntryInfo';
import getHeisigItemToDisplay from '../repetitionLogic/basicLogic';
import React, {useState} from "react";

function TrainHeisig(props){
    const [currentItem, setCurrentItem] = useState(props.heisigCorpus[0]);

    const clickHandler = () => {
        var itemToSave = getHeisigItemToDisplay(props.heisigCorpus);
        setCurrentItem(itemToSave);
    }

    return <div> 
        <p> her er trainHeisig</p>
        <button onClick={clickHandler}> newHeisig </button>
        <HeisigEntryInfo heisigItem={currentItem}> </HeisigEntryInfo>
    </div>

}

export default TrainHeisig;