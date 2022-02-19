import { rest } from "msw";

export const handlers = [
  rest.get(process.env.REACT_APP_API_URL, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: "Pepe",
          image: "unafoto",
          velocity: "3",
          resistence: "7",
          creation: "2019",
        },
        {
          id: 2,
          name: "Pipo",
          image: "unafoto",
          velocity: "3",
          resistence: "7",
          creation: "2020",
        },
        {
          id: 3,
          name: "Pupe",
          image: "unafoto",
          velocity: "3",
          resistence: "7",
          creation: "2010",
        },
      ])
    );
  }),
];
