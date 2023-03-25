import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { jsPDF } from "jspdf";
import axios from "axios";
import html2canvas from "html2canvas";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const FinalResume = () => {
  const details = useSelector((state) => state.details);
  const exps = useSelector((state) => state.work);
  const edus = useSelector((state) => state.education);
  const skills = useSelector((state) => state.skill);
  const projects = useSelector((state) => state.project);
  const languages = useSelector((state) => state.language);
  const interests = useSelector((state) => state.interest);
  const template = useSelector((state) => state.selectedTemplate);

  const [html, setHtml] = useState("");
  const parentRef = useRef(null);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`${template}`);
      const result = eval("`" + data + "`");
      setHtml(result);
    })();
    console.log("effect");
  }, []);

  const downloadPDF = () => {
    // const input = document.getElementById("resumeCont");
    // console.log(input);
    // html2canvas(input, { scale: "2" }).then((canvas) => {
    //   var wid;
    //   var hgt;
    //   var img = canvas.toDataURL(
    //     "image/png",
    //     (wid = canvas.width),
    //     (hgt = canvas.height)
    //   ); //image data of canvas
    //   var hratio = hgt / wid;
    //   var doc = new jsPDF({
    //     orientation: "p",
    //   });
    //   var width = doc.internal.pageSize.width;
    //   var height = doc.internal.pageSize.height;
    //   // height = width * hratio;
    //   doc.addImage(img, "JPEG", 0, 0, width, height * hgt);
    //   doc.save("AssetComparison.pdf");
    // });

    const input = parentRef.current.querySelector(".resumeCont");
    // const width = input.offsetWidth;
    // const height = input.offsetHeight;
    // console.log(width);
    // console.log(height);
    const pdfWidth = 210; // A4 width in mm
    const pdfHeight = 297; // A4 height in mm
    const margin = 5;
    html2canvas(input, { scale: "2" }).then((canvas) => {
      console.log("inside");
      var image = canvas.toDataURL("image/jpeg");
      // var doc = new jsPDF("p", "px", "a4"); // using defaults: orientation=portrait, unit=mm, size=A4
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [pdfWidth, pdfHeight],
      });
      // var width = doc.internal.pageSize.getWidth();
      // var height = doc.internal.pageSize.getHeight();
      // doc.width = "300";
      // doc.height = "300";
      // console.log(`${height} ${width}`);
      doc.addImage(
        image,
        "JPEG",
        margin,
        margin,
        pdfWidth - 2 * margin,
        pdfHeight - 2 * margin
      );
      doc.save("myPage.pdf");
    });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {html ? (
          <>
            <div
              ref={parentRef}
              dangerouslySetInnerHTML={{
                __html: html,
              }}
            />
            <div style={{ textAlign: "center" }}>
              <Button
                variant="contained"
                style={{ marginTop: "20px", marginBottom: "20px" }}
                onClick={downloadPDF}
              >
                Download
              </Button>
            </div>
          </>
        ) : (
          <Box
            sx={{ display: "flex", justifyContent: "center", height: "80vh" }}
          >
            <CircularProgress />
          </Box>
        )}
      </div>
    </>
  );
};

export default FinalResume;
