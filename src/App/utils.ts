export const randomColor = (arr: Array<any>, key: number) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const object = arr[randomIndex];
  return object[key];
};

export const appColors: Array<any> = [
  {
    1: "#b190ba",
    2: "#e8b595",
  },
  {
    1: "#bc1b68",
    2: "#d3989b",
  },
  {
    1: "#6d90b9",
    2: "#bbc7dc",
  },
  {
    1: "#87a3a3",
    2: "#ac8d9a",
  },
  {
    1: "#12b3eb",
    2: "#5460f9",
  },
  {
    1: "#82f4b1",
    2: "#30c67c",
  },
  {
    1: "#beb15b",
    2: "#d5cfac",
  },
  {
    1: "#ffd78a",
    2: "#f4762d",
  },
  {
    1: "#f4e900",
    2: "#60b6f1",
  },
  {
    1: "#145277",
    2: "#83d0cb",
  },
];

export const checkContainer = (focus: number) => {
  if (focus === 1) {
    return "translateY(-245px)";
  }
  if (focus === 2) {
    return "translateY(-210px)";
  }
  if (focus === 3) {
    return "translateY(-207px)";
  }
  if (focus === 4) {
    return "translateY(-167px)";
  }
};

// SVG site ---> https://www.svgrepo.com/
