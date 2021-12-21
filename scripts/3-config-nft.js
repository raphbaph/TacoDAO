import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x56e4e70819F40A8E62280F95B5D887035B0A15a0",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Super delish TACO Archetype",
        description: "No access to TacoDAO without Tacos!",
        image: readFileSync("scripts/assets/taco.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()