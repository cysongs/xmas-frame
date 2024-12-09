import PATH from "../routes/path.js";
import { Button, FrameHandler } from "frog";
import { BlankInput } from "hono/types";
import { Box, Text } from "../ui.js";
import { CONFIGS } from "../configs.js";
import { TreeSelector } from "./TreeSelector.js";
import { genPath } from "../utils/genPath.js";
import { getTree } from "../contracts/tree.js";
import {EnvState} from "../../main";

const CreateTree: FrameHandler<
  EnvState,
  typeof PATH.CREATE_TREE,
  BlankInput
> = async (c) => {
  const { buttonValue, deriveState } = c;
  const { create } = await deriveState(async (prev) => {
    prev.create.nextTreeId = Number(await getTree().nextTreeId());
    if (buttonValue === "l") {
      prev.create.bgId = Math.max(prev.create.bgId - 1, 0);
    }
    if (buttonValue === "r") {
      prev.create.bgId = Math.min(prev.create.bgId + 1, CONFIGS.bgCount);
    }
  });

  const host =
    typeof window !== "undefined"
      ? window.location.origin
      : "http://localhost:5173";
  const postUrl = `${host}${genPath(PATH.TREE_HOME, { id: 1 })}`;

  return c.res({
    imageAspectRatio: "1:1",
    image: (
      <Box
        grow
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        background="xgreen"
        position="relative"
      >
        <TreeSelector no={create.bgId} />
        <Box position="absolute" top="36" fontWeight="700">
          <Text color="text" size="20">
            Create My Tree 🎄
          </Text>
        </Box>
        <Box position="absolute" bottom="16" fontWeight="700">
          <Text color="text" size="16">
            {create.bgId + 1} / {CONFIGS.bgCount + 1}
          </Text>
        </Box>
      </Box>
    ),
    intents: c.transactionId
      ? [
          <Button.Link href={`https://warpcast.com/~/compose?text=${postUrl}`}>
            Post
          </Button.Link>,
          <Button action={genPath(PATH.TREE_HOME, { id: create.nextTreeId })}>
            View My Tree 🎄
          </Button>,
        ]
      : [
          <Button value="l">⬅️</Button>,
          //   <Button.Signature target={"/create/tx/" + create.bgId}>
          <Button.Transaction
            target={genPath(PATH.CREATE_TREE_TX, { bgId: create.bgId })}
          >
            Create
          </Button.Transaction>,
          <Button value="r">➡️</Button>,
          <Button action={PATH.HOME}>🏠</Button>,
        ],
  });
};

export default CreateTree;
