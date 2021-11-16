import React from "react";
import Die from "../components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import { blueGrey } from "@mui/material/colors";
import { Button, Box, Typography } from "@mui/material";

import { useAppSelector } from "../reduxStore/hooks";

interface Dice {
  id: string;
  value: number;
  isHeld: boolean;
}

export default function Tenzies() {
  const user = useAppSelector((state) => state.user.user);

  const [dice, setDice] = React.useState<Dice[]>(allNewDice());
  const [tenzies, setTenzies] = React.useState<boolean>(false);

  React.useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [dice]);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function rollDice() {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      setTenzies(false);
      setDice(allNewDice());
    }
  }

  function holdDice(id: string) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    <Box
      sx={{
        bgcolor: blueGrey[500],
        height: "400px",
        maxWidth: "800px",
        borderRadius: 5,
        p: 3,
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {tenzies && <Confetti />}
      <h1 className="title">{user.name}'s Game of Tenzies</h1>
      {tenzies ? (
        <Typography variant="h2">{user.winSlogan}</Typography>
      ) : (
        <p className="instructions">
          Hello {user.name} Roll until all dice are the same. Click each die to
          freeze it at its current value between rolls.
        </p>
      )}
      <Box
        sx={{
          display: "grid",
          gridTemplate: "auto auto/ repeat(5, 1fr)",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
          mb: 1,
          color: blueGrey[800],
        }}
      >
        {diceElements}
      </Box>
      <Button variant="contained" disableElevation onClick={rollDice}>
        {tenzies ? "New Game" : "Roll"}
      </Button>
    </Box>
  );
}
