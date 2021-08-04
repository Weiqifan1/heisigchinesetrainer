import logo from './logo.svg';
import './App.css';
import TrainHeisig from './components/TrainHeisig';

function App() {
  const heisigCorpus = [
    {traditionalCorpus: true, number: 1, character: '我', word: 'I,me', repetitionNumber: 8, memo: 'her er den text man skal huske tegnet paa'},
    {traditionalCorpus: true, number: 2, character: '你', word: 'you', repetitionNumber: 7, memo: 'her er den text man skal huske tegnet paa'},
    {traditionalCorpus: true, number: 3, character: '他', word: 'he', repetitionNumber: 5, memo: 'her er den text man skal huske tegnet paa'},
    {traditionalCorpus: true, number: 4, character: '她', word: 'she', repetitionNumber: 5, memo: 'her er den text man skal huske tegnet paa'},
    {traditionalCorpus: true, number: 5, character: '它', word: 'it', repetitionNumber: 4, memo: 'her er den text man skal huske tegnet paa'},
    {traditionalCorpus: true, number: 6, character: '們', word: 'plural', repetitionNumber: 3, memo: 'her er den text man skal huske tegnet paa'}
    
  ];
  return (  
    <div className="App">
      
      <div> 
        <p> start projektet</p>
        <TrainHeisig heisigCorpus={heisigCorpus}> </TrainHeisig>
      </div>
    
    </div>
  );
}

export default App;
