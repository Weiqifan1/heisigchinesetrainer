import HeisigEntryInfo from './HeisigEntryInfo';
import getHeisigItemToDisplay from '../repetitionLogic/basicLogic';
import React, {useState} from "react";

function TrainHeisig(props){
    const[currentCorpus, setCurrentCorpus] = useState(props.heisigCorpus);
    const [currentItem, setCurrentItem] = useState(getHeisigItemToDisplay(currentCorpus));

    const clickHandlerKnowCharacter = () => {
        var itemToShow = getHeisigItemToDisplay(props.heisigCorpus);
        setCurrentItem(itemToShow);
    }

    const clickHandlerDontKnowCharacter = () => {
        var changedItem = currentItem;
        changedItem.repetitionNumber = changedItem.repetitionNumber * 10;

        setCurrentCorpus((previousCorpus) => {
            return {...previousCorpus, changedItem};
        });

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