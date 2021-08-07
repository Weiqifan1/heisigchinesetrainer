import HeisigEntryInfo from './HeisigEntryInfo';
import getHeisigItemToDisplay from '../repetitionLogic/basicLogic';
import React, {useState} from "react";

function TrainHeisig(props){
    const [currentItem, setCurrentItem] = useState(props.heisigCorpus[0]);

    const clickHandlerKnowCharacter = () => {
        var itemToShow = getHeisigItemToDisplay(props.heisigCorpus);
        setCurrentItem(itemToShow);
    }

    const clickHandlerDontKnowCharacter = () => {
        var itemToShow = getHeisigItemToDisplay(props.heisigCorpus);
        setCurrentItem(itemToShow);
    }

    return <div>
        <p> her er trainHeisig</p>
        <button onClick={clickHandlerKnowCharacter}> know </button>
        <button onClick={clickHandlerDontKnowCharacter}> dontKnow </button>
        <HeisigEntryInfo heisigItem={currentItem}> </HeisigEntryInfo>
    </div>

}

export default TrainHeisig;