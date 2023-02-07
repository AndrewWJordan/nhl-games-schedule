import React, { useCallback } from "react";
import { Container, Typography, Grid } from "@mui/material";
import useFetch from "./../../hooks/useFetch";
import GameCard from "./../../Components/GameCard";
import axios from "axios";

export default function App() {
  const dateObj = new Date();
  const today = `${dateObj.getFullYear()}-${dateObj.getMonth() +
    1}-${dateObj.getDate()}`;
  const fetchData = useCallback(() => {
    return axios.get(
      `https://statsapi.web.nhl.com/api/v1/schedule?date=${today}`
    );
  }, [today]);

  const { isLoading, data, error } = useFetch(fetchData);
  const { dates: [{ date, games } = { date: "", games: [] }] = [] } = data;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>There was an issue gathering the information</p>;
  }

  return (
    <Container maxWidth="lg" align="center">
      <Typography variant="h1" gutterBottom>
        <img src="images/nhl.png" alt="NHL logo" />
        NHL Game Schedule
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        {data.totalGames} Games | {date}
      </Typography>

      {games.length > 0 && (
        <Grid container spacing={2} zeroMinWidth>
          {games.map((game) => (
            <Grid item xs={12} sm={6} lg={4} key={game.gamePk}>
              <GameCard game={game} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
