import { ref, getDownloadURL, listAll, list } from "firebase/storage";
import storage from "../firebase.js";
import templates from "../models/templates.js";
import mongoose from "mongoose";

let info = {};
const Ref = ref(storage, "data");

const alldata = async (request, response, next) => {
  console.log("in collect");
  //   return new Promise((resolve, reject) => {
  listAll(Ref).then((res) => {
    const folders = res.prefixes.map((folderRef) => listAll(folderRef));
    Promise.all(folders).then(async (res) => {
      for (let i = 0; i < res.length; i++) {
        const item = res[i].items.map((itemRef) => getDownloadURL(itemRef));
        await Promise.all(item).then(async (result) => {
          // console.log(result);
          result.forEach((itemURL) => {
            if (itemURL.search("html") === -1) {
              info.image = itemURL;
            } else {
              info.doc = itemURL;
              info.name = itemURL.match(/\d%2F(.*?).html/)[1];
            }
          });
          // console.log(info);
          // const check = await templates.deleteMany({});
          let checkTemplate =
            (await templates.findOne({ name: info.name }).count()) > 0;
          // console.log(`${info.name}: ${checkTemplate}`);
          if (!checkTemplate) {
            const newList = await new templates({
              ...info,
            });
            try {
              newList.save();
            } catch (error) {
              console.log(error);
            }
          }
        });
      }
      next();
    });
  });
  //   });
};

export default alldata;
