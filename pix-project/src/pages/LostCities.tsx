import { Container } from "@mui/material";
import { orange } from "@mui/material/colors";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Expeditions } from "../models/Expeditions.enum";
import CardInterface from "../models/CardInterface.model";
import CardField from "../components/CardField";
import DiscardField from "../components/DiscardField";
import { useState } from "react";
import { ExpeditionMapType } from "../models/ExpeditionMapType.model";
import { useAppSelector } from "../app/hooks";
const hand: CardInterface[] = [
  {
    id: 0,
    value: 4,
    expedition: Expeditions.DESERT,
    isWager: false,
    chosen: false,
  },
  {
    id: 1,
    value: 2,
    expedition: Expeditions.GRASSLAND,
    isWager: false,
    chosen: false,
  },
  {
    id: 2,
    value: 7,
    expedition: Expeditions.OCEAN,
    isWager: false,
    chosen: false,
  },
  {
    id: 3,
    value: 9,
    expedition: Expeditions.TUNDRA,
    isWager: false,
    chosen: false,
  },
  {
    id: 4,
    value: 10,
    expedition: Expeditions.VOLCANIC,
    isWager: false,
    chosen: false,
  },
  {
    id: 5,
    value: 2,
    expedition: Expeditions.OCEAN,
    isWager: false,
    chosen: false,
  },
  {
    id: 6,
    value: 0,
    expedition: Expeditions.VOLCANIC,
    isWager: true,
    chosen: false,
  },
  {
    id: 7,
    value: 0,
    expedition: Expeditions.OCEAN,
    isWager: true,
    chosen: false,
  },
  {
    id: 8,
    value: 0,
    expedition: Expeditions.OCEAN,
    isWager: true,
    chosen: false,
  },
];
const DiscardExpeditionMap: ExpeditionMapType = {
  0: [],
  1: [],
  2: [],
  3: [],
  4: [],
};
// const PlayerExpeditionMap: ExpeditionMapType = {
//   0: [],
//   1: [],
//   2: [],
//   3: [],
//   4: [],
// };

export default function LostCities() {
  const userState = useAppSelector((state) => state.name.user);

  const [handState, setHandState] = useState<CardInterface[]>(hand);

  const [discardState, setDiscardState] =
    useState<ExpeditionMapType>(DiscardExpeditionMap);
  const [chosenCard, setChosenCard] = useState<CardInterface | null>(null);

  function handleCardPick(id: Number): void {
    unSelectChosenCard();
    const chosenCard = handState.find((card) => card.id === id);
    if (chosenCard !== undefined) {
      setChosenCard(chosenCard);
      setHandState((prevHand) =>
        prevHand.map((card) =>
          card.id === id ? { ...card, chosen: true } : card
        )
      );
    } else {
      throw new Error("Card not found");
    }
  }

  function unSelectChosenCard(): void {
    setChosenCard(null);
    setHandState((prevHand) =>
      prevHand.map((card) => ({ ...card, chosen: false }))
    );
  }

  function discardFromHand(id: Number): void {
    setHandState((prevHand) => {
      return prevHand.filter((card) => card.id !== id);
    });
  }

  function addToDiscard(): void {
    if (chosenCard) {
      const prevDiscard = discardState;
      prevDiscard[chosenCard.expedition].push(chosenCard);
      setDiscardState(prevDiscard);
      discardFromHand(chosenCard.id);
      unSelectChosenCard();
    }

    return;
  }

  return (
    <>
      <Box
        sx={{
          bgcolor: "#2f586a",
          borderRadius: "25px",
          overflow: "hidden",
          height: "80vh",
          maxWidth: "md",
          margin: "auto",
          boxShadow: "-17px 17px 41px #254553,17px -17px 41px #396b81",
        }}
      >
        <Container
          sx={{
            p: 2,
            height: "80vh",
            maxWidth: "md",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              maxWidth: "sm",
              bgcolor: orange[100],
              p: 1,
              borderRadius: "10px",
              my: 0.5,
              color: "maroon",
            }}
          >
            {userState.opponentName}
          </Box>
          <DiscardField cardMap={discardState} />
          {/* <ExpeditionField cardMap={handState} /> */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            {chosenCard === null ? (
              <Button variant="outlined" disabled>
                Add to Expedition
              </Button>
            ) : (
              <Button variant="contained">Add to Expedition</Button>
            )}
            {chosenCard === null ? (
              <Button variant="outlined" disabled>
                Discard
              </Button>
            ) : (
              <Button
                color="secondary"
                variant="contained"
                onClick={() => addToDiscard()}
              >
                Discard
              </Button>
            )}
            {chosenCard !== null ? (
              <Button onClick={() => unSelectChosenCard()} variant="outlined">
                Clear Chosen
              </Button>
            ) : null}
          </Box>
          <CardField cardList={handState} handleCardPick={handleCardPick} />
        </Container>
      </Box>
    </>
  );
}
