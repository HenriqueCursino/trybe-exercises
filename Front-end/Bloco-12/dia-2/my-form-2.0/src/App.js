import './App.css';

function App() {
  return (
    <fieldset>
      <label for='name'>
        Nome:
        <input type='text' maxLength='40' id='name' required></input>
      </label>

      <br />

      <label for='email'>
        Email:
        <input type='text' maxLength='50' id='email' required></input>
      </label>

      <br />

      <label>
        <input></input>
      </label>

    </fieldset>
  );
}

export default App;
