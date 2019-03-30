import { h, render } from "@atomico/core";

function App(props) {
  return (
    <div shadowDom>
      <style>{`
      span{display:inline-block;animation:pulso .5s ease alternate infinite}
      @keyframes pulso{
        0%{
          transform: scale(1.2)
        }
        100%{
          transform: scale(.8)
        }
      }
     `}</style>
      <h1>
        Atomico <span>❤️</span> Parcel
      </h1>
    </div>
  );
}

render(
  <host shadowDom>
    <style>{`
    @import url('https://fonts.googleapis.com/css?family=Muli:400,900');
    :host{
      width:100%;
      height:100%;
      display:flex;
      justify-content:center;
      align-items:center;
      font-family: 'Muli', sans-serif;
      color:white;
    }
    `}</style>
    <App />
  </host>,
  document.querySelector("#app")
);
