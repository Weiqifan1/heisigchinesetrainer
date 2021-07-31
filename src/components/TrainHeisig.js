import HeisigEntryInfo from './HeisigEntryInfo';

function TrainHeisig(props){
    return <div> 
        <p> her er TrainHeisig</p>
        <HeisigEntryInfo heisigItem={props.heisigCorpus[0]}> </HeisigEntryInfo>
    </div>
}

export default TrainHeisig;