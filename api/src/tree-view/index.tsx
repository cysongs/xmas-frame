import { Button, FrameHandler } from "frog";
import { Box } from "../ui";
import { TreeBackground } from "./TreeBackground";
import { PlainTree } from "./PlainTree";
import { Ornament } from "./Ornament";
import { BlankInput } from "hono/types";
import PATH from "../routes/path";
import { getTree } from "../contracts/tree";
import { genPath } from "../utils/genPath";
import {EnvState} from "../../index";

const TreeMain: FrameHandler<EnvState, "/", BlankInput> = async (c) => {
  const { deriveState, req } = c;
  const treeId = req.param("id")!;
  if (isNaN(Number(treeId))) throw new Error();

  const { tree } = await deriveState(async (prev) => {
    const treeContract = getTree();
    const tree = await treeContract.getTree(treeId);
    prev.tree.owner = tree.owner;
    prev.tree.ornamentCount = Number(tree.ornamentCount);
    prev.tree.bgId = Number(tree.bgId);
    prev.tree.ornamentIds = tree.ornamentIds.map(Number);
    prev.tree.adorners = tree.adorners;
    prev.tree.minted = tree.minted;
  });

  return c.res({
    imageAspectRatio: "1:1",
    image: (
      <Box
        grow
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        background="background200"
        position="relative"
      >
        <TreeBackground no={Number(tree.bgId)} />
        <PlainTree />

        {tree.ornamentIds?.map((oId, i) => {
          return oId > 0 ? <Ornament position={i} itemId={oId} /> : null;
        })}
      </Box>
    ),
    intents: [
      <Button action={PATH.CREATE_TREE}>Create Tree 🎄</Button>,
      <Button action={genPath(PATH.DECORATE, { id: treeId })}>
        Decorate Tree ⭐️
      </Button>,
      <Button action={PATH.HOME}>🏠</Button>,
    ],
  });
};

export default TreeMain;
