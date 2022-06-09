import react from "react";
import "./styles.css";
import { useState } from "react";

function Palindrome() {
  const [msg, setMsg] = useState("");
  function show(e) {
    e.preventDefault();
    var a = e.target.value;
    a = a.replaceAll("-", "");
    var sp = a.split("");
    var rev = sp.reverse();
    var ans = rev.join("");

    if (ans === a) {
      setMsg("IS palindrome 😊😊😊😊 ");
    } else {
      setMsg("IS not a palindrome 😥😥 !");
    }
  }
  return (
    <div>
      <h1> Palindrome Birthday! </h1>

      <h3> Enter your birthday date: </h3>
      <br />

      <center>
        <input type="date" onChange={show} />
      </center>
      <br />
      <h3 id="col"> {msg} </h3>
    </div>
  );
}
export default Palindrome;
