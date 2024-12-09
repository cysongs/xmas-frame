import { serveStatic } from "@hono/node-server/serve-static";
import { Env, Frog } from "frog";
import { vars } from "../src/ui";
import { devtools } from "frog/dev";
import TreeMain from "../src/tree-view";
import CreateTree from "../src/create-tree";
import PATH from "../src/routes/path";
import CreateTx from "../src/create-tree/createTx";
import DecorateTree from "../src/decorate";
import HomePage from "../src/main/main";
import DecorateConfirm from "../src/decorate/confirm";
import AdornTx from "../src/decorate/adornTx";
import { handle } from "frog/next";
import { neynar } from "frog/hubs";

export interface State {
  temp: string;
  tree: {
    owner: string | null;
    ornamentCount: number | null;
    bgId: number | null;
    ornamentIds: number[] | null;
    adorners: string[] | null;
    minted: boolean | null;
  };
  create: { bgId: number; nextTreeId: number };
  decorate: {
    ornId: number;
    page: number;
  };
}

export type EnvState = Env & { State: State };
export const app = new Frog<{ State: State }>({
  basePath: "/",
  // browserLocation: "/:path",
  // Supply a Hub to enable frame verification.
  hub: neynar({ apiKey: "NEYNAR_FROG_FM" }),
  title: "X-MAS Frame",
  ui: { vars },
  initialState: {
    temp: "",
    tree: {
      owner: null,
      ornamentCount: null,
      bgId: null,
      ornamentIds: null,
      adorners: null,
      minted: null,
    },
    create: {
      bgId: 0,
      nextTreeId: 0,
    },
    decorate: {
      ornId: 0,
      page: 0,
    },
  },
});

app.use('/*', serveStatic({ root: './public' }));
app.frame(PATH.HOME, HomePage);
app.frame(PATH.TREE_HOME, TreeMain);
app.frame(PATH.DECORATE, DecorateTree);
app.frame(PATH.DECORATE_CONFIRM, DecorateConfirm);
app.frame(PATH.CREATE_TREE, CreateTree);

app.transaction(PATH.CREATE_TREE_TX, CreateTx);
app.transaction(PATH.DECORATE_TX, AdornTx);

// @ts-ignore
const isEdgeFunction = typeof EdgeFunction !== "undefined";
// @ts-ignore
const isProduction = isEdgeFunction || import.meta.env?.MODE !== "development" || process.env.IS_PRODUCTION === "true";
// devtools 설정
if (!isProduction) devtools(app, { serveStatic });
else devtools(app, { assetsPath: '/.frog' })

export const GET = handle(app);
export const POST = handle(app);
