var XLSX = require("xlsx");
const express = require("express"),
  app = express(),
  cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const PORT = process.env.PORT || 8080;
const workbook = XLSX.readFile("Info.xlsx");
app.get("/", (req, res) => {
  const categories = workbook.SheetNames;
  res.json(categories);
});

app.get("/:catName", (req, res) => {
  const catName = req.params.catName;
  const makes = [];
  let uniqueMakes = [];
  for (const mk in workbook.Sheets[catName]) {
    if (mk.startsWith("A")) {
      makes.push(workbook.Sheets[catName][mk].v);
    }
  }
  uniqueMakes = [...new Set(makes)];
  uniqueMakes.shift();
  res.json(uniqueMakes);
});
app.get("/:catName/:makeName", (req, res) => {
  const { makeName, catName } = req.params;
  const models = [];
  let uniqueModels = [];
  const worksheet = workbook.Sheets[catName];
  for (const mk in workbook.Sheets[catName]) {
    if (
      worksheet[mk].v &&
      String(worksheet[mk].v).trim().toUpperCase() === makeName.toUpperCase()
    ) {
      console.log(worksheet["B" + mk.substring(1, 3)]);
      models.push(
        String(worksheet["B" + mk.substring(1, 3)].v)
          .trim()
          .toUpperCase()
          .split(" ")
          .join(",")
          .split("/")
          .join(",")
          .split(",")[0]
      );
    }
  }

  uniqueModels = [...new Set(models)];
  res.json(uniqueModels);
});

app.get("/:catName/:makeName/:modelName", (req, res) => {
  console.log(req.params);
  const { catName, makeName, modelName } = req.params;
  const products = [];
  let uniqueProducts = [];
  const worksheet = workbook.Sheets[catName];
  for (const mk in workbook.Sheets[catName]) {
    if (
      worksheet[mk].v &&
      String(worksheet[mk].v).trim().toUpperCase() === makeName.toUpperCase()
    ) {
      if (
        worksheet["B" + mk.substring(1, 3)].v &&
        String(worksheet["B" + mk.substring(1, 3)].v)
          .trim()
          .toUpperCase() === modelName.toUpperCase()
      ) {
        products.push({
          year: String(worksheet["C" + mk.substring(1, 3)].v)
            .trim()
            .toUpperCase()
            .split(" ")
            .join(",")
            .split("/")
            .join(",")
            .split(",")[0],
          price:
            worksheet["H" + mk.substring(1, 3)] && worksheet["H1"].v === "price"
              ? String(worksheet["H" + mk.substring(1, 3)].v)
                  .trim()
                  .toUpperCase()
                  .split(" ")
                  .join(",")
                  .split("/")
                  .join(",")
                  .split(",")[0]
              : null,
          img: worksheet["G" + mk.substring(1, 3)]
            ? String(worksheet["G" + mk.substring(1, 3)].v)
                .trim()
                .toUpperCase()
                .split(" ")
                .join(",")
                .split("/")
                .join(",")
                .split(",")[0]
            : null,
          qfpp: worksheet["F" + mk.substring(1, 3)]
            ? String(worksheet["F" + mk.substring(1, 3)].v)
                .trim()
                .toUpperCase()
                .split(" ")
                .join(",")
                .split("/")
                .join(",")
                .split(",")[0]
            : null,
        });
      }
    }
  }
  uniqueProducts = [...new Set(products)];
  res.json(uniqueProducts);
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
