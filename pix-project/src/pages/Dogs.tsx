import { useFetchBreedsQuery } from "../features/dogs/dogsApiSlice";
import {
  Card,
  Box,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
export default function Dogs() {
  const [numDogs, setNumDogs] = useState(10);
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box>
          <InputLabel id="dog-select">Dogs to fetch</InputLabel>
          <Select
            labelId="dog-select"
            value={numDogs}
            onChange={(e) => setNumDogs(Number(e.target.value))}
          >
            <MenuItem value="5">5</MenuItem>
            <MenuItem value="10">10</MenuItem>
            <MenuItem value="15">15</MenuItem>
            <MenuItem value="150">150</MenuItem>
          </Select>
        </Box>

        <Box>
          {isFetching ? (
            <Typography variant="h3" color="white">
              LOADING DOGS
            </Typography>
          ) : (
            <Box>
              <Typography variant="h4" color="white">
                {" "}
                Number of dogs fetched: {data.length}
              </Typography>
              <Box>
                {data.map((breed) => (
                  <Card sx={{ maxWidth: 375, m: 2 }}>
                    <CardMedia
                      component="img"
                      image={breed.image.url}
                      alt={breed.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {breed.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {breed.temperament}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                ))}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}
