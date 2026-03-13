// @ts-nocheck
"use strict";

function CounterButton() {
  const [count, setCount] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    className: "d-flex mt-2 flex-row justify-content-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-light mb-0 text-center"
  }, "Count: ", count), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-danger btn-sm",
    onClick: () => setCount(count + 1)
  }, "Increment"));
}

// class Character {
//   constructor(name, hitPoints, armorClass) {
//     this.name = name;
//     this.hitPoints = hitPoints;
//     this.armorClass = armorClass;
//     this.maxHitPoints = hitPoints;
//   }
//   takeDamage(damage) {
//     this.hitPoints = damage >= this.hitPoints ? 0 : this.hitPoints - damage;
//   }
//   takePotion(healing) {
//     this.hitPoints = Math.min(healing + this.hitPoints, this.maxHitPoints);
//   }
// }

// const characters = [
//   new Character("Vargus", 17, 13),
//   new Character("Ezmerelda", 23, 17),
//   new Character("Conan", 50, 15),
// ];

// class PartyList extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     console.log(this.props.party);
//     return (
//       // React.createElement("div", { className: "row" },
//       // 	this.props.party.map((member, i) => React.createElement(PartyMember, { key: i, ...member }))
//       // )
//       <div className="row">
//         {this.props.party.map((member, i) => (
//           <PartyMember {...member} key={i} />
//         ))}
//       </div>
//     );
//   }
// }

// class PartyMember extends React.Component {
//   constructor(props) {
//     super(props);
//     this.hitPoints = this.props.hitPoints;
//   }
//   nameColor() {
//     return this.hitPoints > this.props.hitPoints / 2
//       ? "text-white"
//       : this.hitPoints > 0
//         ? "text-warning"
//         : "text-danger";
//   }
//   render() {
//     return (
//       <div className="col-4">
//         <figure className="figure my-2">
//           <img
//             src={`images/${this.props.name}.png`}
//             className="figure-img img-fluid rounded-top-pill"
//           />
//           <figcaption className="figcaption row">
//             <a
//               className={`${this.nameColor()} fs-4 btn`}
//               href="#"
//               data-bs-toggle="collapse"
//               data-bs-target={`#${this.props.name}Data`}
//             >
//               {this.props.name}
//             </a>
//           </figcaption>
//           <div
//             className="collapse bg-white rounded-pill text-center fs-6"
//             id={`${this.props.name}Data`}
//           >
//             <i>Hit Points: {this.hitPoints}</i>
//             <br />
//             <b>Armor Class: {this.props.armorClass}</b>
//             <button
//               className="btn btn-danger btn-sm ms-2"
//               onClick={() => {
//                 this.hitPoints = this.hitPoints < 7 ? 0 : this.hitPoints - 7;
//                 this.setState({});
//               }}
//             >
//               Attack Me!
//             </button>
//           </div>
//         </figure>
//       </div>
//     );
//   }
// }

(function start() {
  const root = ReactDOM.createRoot(document.getElementById("inject"));
  root.render(/*#__PURE__*/React.createElement(CounterButton, null));
})();
