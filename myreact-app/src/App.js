//ANALIZ
// REACT kullanarak ornegi verilen basit bir web sayfasi olusturmaK. 
//YAPILACAKLAR
//APP.js de fonksiyonun ici silindi.
//isteilen metin html taglari kullanilarak olusturuldu.


import './App.css';

function App() {
  return (
    <div className="App">
     <h3><strong>Input Format</strong></h3>
     <p>First line contains <strong><i>N.N</i></strong> lines follow, each having a PAN number. </p>
     <h3><strong>Constraints</strong></h3>
     <ul>
    <li><strong>1 {"≥"} <i>N</i> {"≥"} 10</strong></li>
    <li>Each char is an uppercase letter, i.e., <strong><i>char ∈ ['A', 'Z']</i></strong>.</li>
    <li>Each digit lies between 0 and 9, i.e., <strong><i>digit</i> ∈ [0,9]</strong>. </li>
    <li>The lenght of the PAN number is always 10, i.e., <strong><i>lenght (PAN)</i> = 10</strong> </li>
    <li>Every character in PAN is either char or digit satisfying the above constraints. </li>
   </ul>
     <h3><strong>Output Format</strong></h3>
     <p>For every PAN number listed, print YES it is valid, and NO if it isn't. </p>
    </div>
  );
}

export default App;
