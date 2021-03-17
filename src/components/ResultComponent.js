import React from "react";
import { PSR, elementsArray as PSR_EL } from "../language_EN";

const { paper, rock, scissors } = { ...PSR_EL };

const determineRules = (firstPlayer, secondPlayer) => {
  switch (true) {
    case firstPlayer === secondPlayer &&
      firstPlayer !== "" &&
      secondPlayer !== "":
      return PSR.DRAW;
    case firstPlayer === paper.value && secondPlayer === rock.value:
      return PSR.FIRST_PLAYER_WON;
    case firstPlayer === rock.value && secondPlayer === paper.value:
      return PSR.SECOND_PLAYER_WON;
    case firstPlayer === paper.value && secondPlayer === scissors.value:
      return PSR.SECOND_PLAYER_WON;
    case firstPlayer === scissors.value && secondPlayer === paper.value:
      return PSR.FIRST_PLAYER_WON;
    case firstPlayer === rock.value && secondPlayer === scissors.value:
      return PSR.FIRST_PLAYER_WON;
    case firstPlayer === scissors.value && secondPlayer === rock.value:
      return PSR.SECOND_PLAYER_WON;
  }
};

function ResultComponent({ firstPlayer, secondPlayer }) {
  let result = determineRules(firstPlayer, secondPlayer);
  return <div>{result}</div>;
}
export default ResultComponent;
