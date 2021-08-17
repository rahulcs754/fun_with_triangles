import "./styles.css";

function firstScriptRun() {
  const allBox = document.querySelectorAll(".container");

  allBox[0].style.display = "block";
}

setTimeout(function () {
  firstScriptRun();
}, 2000);

function hideAllBox() {
  const allBox = document.querySelectorAll(".container");

  allBox.forEach((element) => {
    element.style.display = "none";
  });
}

function removelistall() {
  const alllink = document.querySelectorAll(".list");

  alllink.forEach((element) => {
    element.classList.remove("active");
  });
}

/* Quiq code start */

// ans of question
const correctAnswers = [
  "Equilateral triangle",
  "one right angle",
  "12, 16, 20",
  "a + b + c",
  "no"
];

function calculateScore() {
  const output = document.querySelector("#resultQuiz");
  const quizform = document.querySelector("#quizForm");
  const formResults = new FormData(quizform);
  let score = 0;
  let index = 0;
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }

  output.innerText = "The score is " + score;
}
/*Quiz code end */

/* is traingle start */

function checkTriangleHandle() {
  const angelOne = document.querySelector("#angles1");
  const angelTwo = document.querySelector("#angles2");
  const angelThree = document.querySelector("#angles3");
  const resultBox = document.querySelector("#resultAng");

  if (
    angelOne.value !== "" &&
    angelTwo.value !== "" &&
    angelThree.value !== ""
  ) {
    const sum =
      Number(angelOne.value) +
      Number(angelTwo.value) +
      Number(angelThree.value);

    if (sum === 180) {
      resultBox.innerText = "It is triangle 🛆";
    } else {
      resultBox.innerText = "It is not triangle 🛆";
    }
  } else {
    alert("Please Enter all value");
  }
}
/* is traingle start */

/* Hypotenuse start */

function hypoCalculateHandler() {
  const base = document.querySelector("#hypoInput1");
  const height = document.querySelector("#hypoInput2");
  const resultHypoBox = document.querySelector("#resultOfHy");

  if (base.value !== "" && height.value !== "") {
    const acal =
      Number(base.value) * Number(base.value) +
      Number(height.value) * Number(height.value);
    const finalResult = Math.sqrt(acal);

    resultHypoBox.innerText = "The length of hypotenuse is " + finalResult;
  } else {
    alert("Please Enter both input value");
  }
}

/*Hypotenuse end*/

/* area of triagle */
function calCulateHandler() {
  const firstSide = document.querySelector("#firstSide");
  const twoSide = document.querySelector("#twoSide");
  const threeSide = document.querySelector("#threeSide");
  const resultContainer = document.querySelector("#resultAreaT");

  if (
    firstSide.value !== "" &&
    twoSide.value !== "" &&
    threeSide.value !== ""
  ) {
    if (
      firstSide.value + twoSide.value > threeSide.value &&
      twoSide.value + threeSide.value > firstSide.value &&
      firstSide.value + threeSide.value > twoSide.value
    ) {
      const semiPerimeter =
        (firstSide.value + twoSide.value + threeSide.value) / 2;

      const result = Math.sqrt(
        semiPerimeter *
          (semiPerimeter - firstSide.value) *
          (semiPerimeter - twoSide.value) *
          (semiPerimeter - threeSide.value)
      ).toFixed(4);
      resultContainer.innerText = `Area of a triangle is ${result} `;
    } else {
      resultContainer.innerText =
        "Enter valid side lengths such that each side lengths";
    }
  } else {
    alert("Please enter all  value");
  }
}
/* end of area triangle */
export default function App() {
  //link click active tab
  const handleClick = (e) => {
    //hide all box
    hideAllBox();
    //remove list all active class
    removelistall();
    //show only select box
    const selectBox = e.target.getAttribute("data-value");
    // split string into two array element and get first one\
    const boxSelect = selectBox.split("-")[0];
    //console.log("#" + boxSelect + "-tab");
    document.querySelector("#" + boxSelect).style.display = "block";
  };

  return (
    <>
      <header>
        <h2>World of Triangles</h2>
      </header>
      <nav>
        <li
          className="list active"
          data-value="quizBox-tab"
          onClick={handleClick}
        >
          Quiz
        </li>
        <li className="list" data-value="isTriBox-tab" onClick={handleClick}>
          Is Triangle?
        </li>
        <li className="list" data-value="hyPotBox-tab" onClick={handleClick}>
          Hypotenuse
        </li>
        <li
          className="list"
          data-value="areaOfTrinBox-tab"
          onClick={handleClick}
        >
          Area of Triangle
        </li>
      </nav>

      <div className="container" id="quizBox">
        <h2>Quiz on triangles</h2>
        <p>For each correct answer you will get 1 point</p>
        <form id="quizForm">
          <ul>
            <li>
              <p>Which of the following triangles are always similar?</p>
              <p>
                <label>
                  <input
                    type="radio"
                    name="question5"
                    value="Equilateral triangle"
                  />
                  Equilateral triangle
                </label>

                <label>
                  <input
                    type="radio"
                    name="question5"
                    value="Isosceles triangle"
                  />
                  Isosceles triangle
                </label>
              </p>
            </li>
            <li>
              <p>A triangle can have?</p>
              <p>
                <label>
                  <input
                    type="radio"
                    name="question3"
                    value="one right angle"
                  />
                  one right angle
                </label>
                <label>
                  <input
                    type="radio"
                    name="question3"
                    value="two right angles"
                  />
                  two right angles
                </label>
              </p>
            </li>
            <li>
              <p>Which of the following can form a right angled triangle?</p>
              <p>
                <label>
                  <input type="radio" name="question4" value="14, 15, 26" />
                  14, 15, 26
                </label>
                <label>
                  <input type="radio" name="question4" value="12, 16, 20" />
                  12, 16, 20
                </label>
              </p>
            </li>

            <li>
              <p>The perimeter of scalene triangle with sides a, b, c is</p>
              <p>
                {" "}
                <label>
                  <input type="radio" name="question8" value="a + b + c" />a + b
                  + c
                </label>
                <label>
                  <input type="radio" name="question8" value="2a" />
                  2a
                </label>
                <label>
                  <input type="radio" name="question8" value="None of these" />
                  None of these
                </label>
              </p>
            </li>

            <li>
              <p>A scalene triangle has ___ lines of symmetry</p>
              <p>
                <label>
                  <input type="radio" name="question9" value="two" />
                  two
                </label>
                <label>
                  <input type="radio" name="question9" value="no" />
                  no
                </label>
                <label>
                  <input type="radio" name="question9" value="15" />
                  15
                </label>
              </p>
            </li>
          </ul>
        </form>
        <button onClick={calculateScore}> Submit Answer </button>

        <span id="resultQuiz"></span>
      </div>

      <div className="container" id="isTriBox">
        <h2>Angles of triangles</h2>

        <ul>
          <li>
            <p>Angles 1 </p>
            <p>
              <input type="number" id="angles1" />
            </p>
          </li>
          <li>
            <p>Angles 2</p>
            <p>
              <input type="number" id="angles2" />
            </p>
          </li>
          <li>
            <p>Angles 3</p>
            <p>
              <input type="number" id="angles3" />
            </p>
          </li>

          <li>
            <button onClick={checkTriangleHandle}>is Triangle</button>
          </li>
          <li>
            <span id="resultAng"> </span>
          </li>
        </ul>
      </div>

      <div className="container" id="hyPotBox">
        <h2>Calculate Hypotenuse of a triangle</h2>
        <ul>
          <li>
            <p>Enter base value (a) =</p>
            <p>
              <input type="number" id="hypoInput1" />
            </p>
          </li>
          <li>
            <p>Enter height value (b) =</p>
            <p>
              <input type="number" id="hypoInput2" />
            </p>
          </li>
          <li>
            <button onClick={hypoCalculateHandler}>Calculate hypotenuse</button>
          </li>
          <li>
            <h3>Hypotenuse formula</h3>
            <p>√(base² + height²)</p>
          </li>
          <li>
            <strong id="resultOfHy"></strong>
          </li>
        </ul>
      </div>

      <div className="container" id="areaOfTrinBox">
        <h2>Calculate Area of a triangle</h2>
        <ul>
          <li>
            <p>Enter first side of a triangle</p>
            <p>
              <input type="number" id="firstSide" />
            </p>
          </li>
          <li>
            <p>Enter second side of a triangle</p>
            <p>
              <input type="number" id="twoSide" />
            </p>
          </li>
          <li>
            <p>Enter third side of a triangle</p>
            <p>
              <input type="number" id="threeSide" />
            </p>
          </li>

          <li>
            <button onClick={calCulateHandler}>Calculate</button>
          </li>
          <li>
            <strong id="resultAreaT"></strong>
          </li>
        </ul>
      </div>
    </>
  );
}
