import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../Pages/SelectedTemplate/selectedTemplateStore";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function Resume() {
  const dispatch = useDispatch();
  const templates = useSelector((state) => state.templates);
  console.log(templates);
  const navigate = useNavigate();
  const selectTemplate = (doc) => {
    console.log(doc);
    dispatch(add(doc));
    navigate("/resume/contact");
  };
  return (
    <section style={{ marginTop: "2.5rem", marginBottom: "2.5rem" }}>
      <Container maxWidth="lg">
        <Grid container style={{ margin: 0 }} justifyContent="space-between">
          {templates.map((template) => {
            return (
              <Grid
                item
                xs={6}
                sm={6}
                md={6}
                lg={6}
                style={{ padding: "0" }}
                textAlign="center"
              >
                <Paper elevation={0} style={{ width: "100%", height: "100%" }}>
                  <img
                    src={template.image}
                    alt=""
                    style={{ width: "80%", height: "65%", margin: "auto" }}
                  />
                  <Button
                    variant="text"
                    onClick={() => selectTemplate(template.doc)}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          lg: 18,
                          md: 18,
                          sm: 18,
                          xs: 12,
                        },
                        fontWeight: {
                          lg: 400,
                          md: 400,
                          sm: 400,
                          xs: 400,
                        },
                        textAlign: "center",
                        pt: "12px",
                      }}
                    >
                      {template.name}
                    </Typography>
                  </Button>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </section>
  );
}

export default Resume;
