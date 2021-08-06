import HeisigEntryInfo from './HeisigEntryInfo';
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


    //returns the appropriate heisig item to be displayed
    function getHeisigItemToDisplay(heisigObjects){
        //to begin with, simply choose the character with the lowest number
        //eg. lowest repetition first, then lowest heisig number
        //////first first, choose one at random
        var lengthOfCorpus = heisigObjects.length;
        if (lengthOfCorpus < 1){
            return null;
        }
        var indexToChoose = getRandomInt(0, lengthOfCorpus-1);
        var heisigItemToReturn = heisigObjects[indexToChoose];
        return heisigItemToReturn;
    }

    /**
     * Returns a random integer between min (inclusive) and max (inclusive).
     * The value is no lower than min (or the next integer greater than min
     * if min isn't an integer) and no greater than max (or the next integer
     * lower than max if max isn't an integer).
     * Using Math.round() will give you a non-uniform distribution!
     */
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

export default TrainHeisig;