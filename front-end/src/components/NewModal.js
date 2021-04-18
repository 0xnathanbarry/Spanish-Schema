import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  FormControl,
  InputLabel,
  Select,
  Grid,
  Button,
} from "@material-ui/core";
import axios from "axios";
import translate from "translate";

translate.engine = "google";
translate.key = "";

export default function NewModal({ openNew, setOpenNew }) {
  const url = "http://localhost:5000/posts";

  const [data, setData] = useState({
    phrase: "",
    word: '', 
    defintion: "",
    context: "",
    meaning: "new",
  });

  const [translation, setTranslation] = useState("");

  const handleChange = (event) => {
    const newData = { ...data };
    newData[event.target.id] = event.target.value;
    setData(newData);
    translate(data.phrase, { from: "es" }).then((data) => setTranslation(data));
  };

  const submitData = (event) => {
    event.preventDefault();
    const words = data.phrase.split(' ')
    console.log(words);
    
    for (let i = 0; i < words.length; i++) {
      axios
        .post(url, {
          word: words[i],
          definition: data.definition,
          context: [data.context],
          meaning: [data.meaning],
        })
        .then((res) => {
          console.log(res.data);
        });
    }
  };

  return (
    <Dialog open={openNew} onClose={() => setOpenNew(false)}>
      <DialogTitle>Add New Word/Phrase</DialogTitle>
      <DialogContent>
        <form onSubmit={(event) => submitData(event)}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                id="phrase"
                onChange={(event) => handleChange(event)}
                required
                label="Word/Phrase"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="definition"
                onChange={(event) => handleChange(event)}
                InputProps={{ readOnly: true }}
                variant="outlined"
                defaultValue={translation}
                rows={2}
                multiline
                fullWidth
              />
            </Grid>
            <Grid item>
              <Button variant="outlined" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
}
