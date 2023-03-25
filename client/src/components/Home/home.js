import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import image1 from "../../images/step1.png";
import image2 from "../../images/step2.png";
import image3 from "../../images/step3.png";
import { add } from "../Templates/resumestore";
import * as api from "../../api/api";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import CardContent from "@mui/material/CardContent";
import BuildIcon from "@mui/icons-material/Build";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import EditIcon from "@mui/icons-material/Edit";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const { data } = await api.getTemplatesApi();
      console.log(JSON.stringify(data));
      dispatch(add(data));
    })();
  }, []);
  return (
    <>
      <div>
        <Container maxWidth="xl">
          <Grid
            container
            spacing={2}
            justifyContent="center"
            style={{ margin: 0 }}
          >
            <Grid
              item
              xs={10}
              sm={5}
              md={5}
              lg={6}
              alignSelf="center"
              style={{ padding: 0 }}
            >
              <Typography
                sx={{
                  typography: { lg: "h3", md: "h4", sm: "h5", xs: "h6" },
                  fontSize: "800",
                }}
                component="h4"
              >
                Carve your Resume from professional templates.
              </Typography>
              <Typography
                sx={{
                  typography: { lg: "h4", md: "h4", sm: "h5", xs: "h5" },
                  fontSize: "900",
                }}
                component="h4"
              >
                Free to use. Developed by professionals.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Resume writing can be stressful, confusing, and time-consuming
                if you do it all on your own. With our Resume Maker, it’s quick,
                pain-free, and effective.
              </Typography>
            </Grid>
            <Grid item xs={10} sm={5} md={5} lg={5} style={{ padding: 0 }}>
              <div style={{ width: "100%", height: "100%" }}>
                <img
                  src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@2x.png"
                  alt="img"
                  style={{ width: "90%", height: "90%" }}
                />
              </div>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="md">
          <Typography
            sx={{
              fontSize: {
                lg: 35,
                md: 35,
                sm: 25,
                xs: 20,
              },
              fontWeight: {
                lg: 500,
                md: 500,
                sm: 500,
                xs: 500,
              },
              textAlign: "center",
              mt: "15px",
              mb: "40px",
            }}
          >
            Just four simple steps to download your resume:
          </Typography>
          <Grid container style={{ margin: 0 }} justifyContent="space-between">
            <Grid
              item
              xs={3}
              sm={3}
              md={3}
              lg={3}
              style={{ padding: "0" }}
              textAlign="center"
            >
              <Paper elevation={0} style={{ width: "100%", height: "100%" }}>
                <img
                  src={image1}
                  alt=""
                  style={{ width: "80%", height: "65%", margin: "auto" }}
                />
                <Typography
                  sx={{
                    fontSize: {
                      lg: 18,
                      md: 18,
                      sm: 18,
                      xs: 15,
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
                  Pick Template
                </Typography>
              </Paper>
            </Grid>
            <Grid
              item
              xs={1}
              sm={1}
              md={1}
              lg={1}
              style={{ padding: "0" }}
              alignSelf="center"
              textAlign="center"
            >
              <Paper
                elevation={0}
                style={{ width: "100%", height: "100%" }}
                textAlign="center"
              >
                <DoubleArrowIcon />
              </Paper>
            </Grid>
            <Grid
              item
              xs={3}
              sm={3}
              md={3}
              lg={3}
              style={{ padding: "0" }}
              textAlign="center"
            >
              <Paper elevation={0} style={{ width: "100%", height: "100%" }}>
                <img
                  src={image2}
                  alt=""
                  style={{ width: "80%", height: "65%", margin: "auto" }}
                />
                <Typography
                  sx={{
                    fontSize: {
                      lg: 18,
                      md: 18,
                      sm: 18,
                      xs: 15,
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
                  Edit It
                </Typography>
              </Paper>
            </Grid>
            <Grid
              item
              xs={1}
              sm={1}
              md={1}
              lg={1}
              style={{ padding: "0" }}
              alignSelf="center"
              textAlign="center"
            >
              <Paper
                elevation={0}
                style={{ width: "100%", height: "100%" }}
                textAlign="center"
              >
                <DoubleArrowIcon />
              </Paper>
            </Grid>
            <Grid
              item
              xs={3}
              sm={3}
              md={3}
              lg={3}
              style={{ padding: "0" }}
              textAlign="center"
            >
              <Paper elevation={0} style={{ width: "100%", height: "100%" }}>
                <img
                  src={image3}
                  alt=""
                  style={{ width: "80%", height: "65%", margin: "auto" }}
                />
                <Typography
                  sx={{
                    fontSize: {
                      lg: 18,
                      md: 18,
                      sm: 18,
                      xs: 15,
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
                  Download
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="lg" sx={{ pt: "1.5rem", pb: "2rem" }}>
          <Typography
            sx={{
              fontSize: {
                lg: 35,
                md: 35,
                sm: 25,
                xs: 20,
              },
              fontWeight: 600,
              textAlign: "center",
              mb: "30px",
            }}
          >
            What are the benefits of Carve Resume Builder?
          </Typography>
          <Grid container>
            <Grid item xs={12} sm={4} md={4} lg={4} sx={{ display: "flex" }}>
              <BuildIcon />
              <CardContent sx={{ pt: "0" }}>
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 500,
                    mb: "0",
                  }}
                  color="#212121"
                  gutterBottom
                >
                  Cover Letter Builder
                </Typography>
                <Typography variant="body1" component="body1">
                  Generate a cover letter using a template matching your resume
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} sx={{ display: "flex" }}>
              <FormatListBulletedIcon />
              <CardContent sx={{ pt: "0" }}>
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 500,
                    mb: "0",
                  }}
                  color="#212121"
                  gutterBottom
                >
                  Best Resume Templates
                </Typography>
                <Typography variant="body1" component="body1">
                  Our templates were all designed by Certified Career Experts.
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} sx={{ display: "flex" }}>
              <EditIcon />
              <CardContent sx={{ pt: "0" }}>
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 500,
                    mb: "0",
                  }}
                  color="#212121"
                >
                  Flexible Text Editor
                </Typography>
                <Typography variant="body1" component="body1">
                  You will have access to the best text editor available.
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Home;
