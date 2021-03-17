import React, { useEffect, useState } from "react";
import { getSelectionElements, postResult } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import ElementCard from "../components/ElementSelectionComponent";
import ResultComponent from "../components/ResultComponent";
import { elementsArray as PSR_EL } from "../language_EN";

const { paper, rock, scissors } = { ...PSR_EL };

function PRSMain() {
  const state = useSelector((state) => state); // da bismo pristupili state-u
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSelectionElements({ display: "console" }));
  }, []);

  let [firstPlayer, setFirstPlayer] = useState("");
  let [secondPlayer, setSecondPlayer] = useState("");
  let [show, setShow] = useState(false);

  useEffect(() => {
    showResult();
  }, [secondPlayer]);

  const showResult = () => {
    if (secondPlayer !== "") setShow(true);

    console.log("Player first show result", firstPlayer);
    console.log("Player second show result", secondPlayer);
  };

  const resultComponentRender = () => {
    return (
      <ResultComponent
        firstPlayer={firstPlayer}
        secondPlayer={secondPlayer}
      ></ResultComponent>
    );
  };

  function determineWinner(value) {
    if (firstPlayer === "") {
      setFirstPlayer(value);
    } else setSecondPlayer(value);
  }

  function check() {
    console.log("Player first", firstPlayer);
    console.log("Player second", secondPlayer);
  }

  function newGame() {
    setShow(false);
    setFirstPlayer("");
    setSecondPlayer("");
  }

  function itemsReturn() {
    return (
      <>
        <ElementCard
          name={paper.name}
          key={paper.value}
          callback={() => determineWinner(paper.value)}
        ></ElementCard>
        <ElementCard
          name={rock.name}
          key={rock.value}
          callback={() => determineWinner(rock.value)}
        ></ElementCard>
        <ElementCard
          name={scissors.name}
          key={scissors.value}
          callback={() => determineWinner(scissors.value)}
        ></ElementCard>
      </>
    );
  }

  function PRS() {
    if (state.loading && !isNaN(state.items.paper.name))
      return <h1>Loading</h1>;
    else
      return (
        <div>
          {itemsReturn()}
          <button onClick={() => check()}>Check</button>
          <button onClick={() => newGame()}>New game</button>
          {show && resultComponentRender()}
        </div>
      );
  }

  // function SelectElement() {
  //   const dispatch = useDispatch();
  //   // const state = useSelector((state) => state); // da bismo pristupili state-u

  //   let [firstPlayer, setFirstPlayer] = useState("");
  //   let [secondPlayer, setSecondPlayer] = useState("");

  //   let save = (e) => {
  //     e.preventDefault();

  //     /* console.log(description);
  //   console.log(date); */
  //     dispatch(postResult({ description, date }));
  //   };

  //   const logState = () => {
  //     console.log("State value:", state);
  //   };

  //   const renderTodos = () => {
  //     return (
  //       <fieldset>
  //         <legend>Todo add</legend>
  //         <form method="post" onSubmit={save}>
  //           Description{" "}
  //           <input
  //             type="text"
  //             name="description"
  //             onChange={(event) => setDescription(event.target.value)}
  //           />
  //           <br />
  //           <br />
  //           Date{" "}
  //           <input
  //             type="text"
  //             name="dateEntered"
  //             onChange={(event) => setDate(event.target.value)}
  //           />
  //           <br />
  //           <br />
  //           <input type="submit" value="Save" />
  //         </form>
  //         <button onClick={logState}> Log state</button>
  //       </fieldset>
  //     );
  //   };

  //   return <div>{renderTodos()}</div>;
  // }

  return (
    <>
      <PRS />
    </>
  );
}

export default PRSMain;
