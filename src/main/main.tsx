import PATH from "../routes/path.js";
import { Button, FrameHandler } from "frog";
import { BlankInput } from "hono/types";
import { Image } from "../ui.js";
import { genPath } from "../utils/genPath.js";
import {EnvState} from "../../api";

const HomePage: FrameHandler<EnvState, typeof PATH.HOME, BlankInput> = async (
  c
) => {
  return c.res({
    imageAspectRatio: "1.91:1",
    image: <Image src="/static/tree.png" width="100%" height="100%" />,
    /*image: (
      // <Box
      //   grow
      //   flexDirection="column"
      //   alignItems="center"
      //   justifyContent="center"
      //   background="background200"
      //   position="relative"
      // ></Box>
      <Image src="https://xmas-frame-nu.vercel.app/static/cover.png" width="100%" height="100%" />
    ),*/
    intents: [
      <Button action={genPath(PATH.TREE_HOME, { id: "1" })}>Example</Button>,
      <Button action={PATH.CREATE_TREE}>Create Tree</Button>,
    ],
  });
};
export default HomePage;
