import { CONFIGS } from "../configs.js";
import { JsonRpcProvider } from "ethers";
import { XmasTree__factory } from "../typechain/index.js";

export const getTree = () => {
  return XmasTree__factory.connect(
    CONFIGS.envs[CONFIGS.env].contracts.tree,
    new JsonRpcProvider(CONFIGS.envs[CONFIGS.env].rpcUrl)
  );
};
