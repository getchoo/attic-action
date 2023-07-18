import { install } from "./stages/install";
import { configure } from "./stages/configure";
import { push } from "./stages/push";
import { getState, saveState } from "@actions/core";

const isPost = !!getState("isPost");

if (!isPost) {
  saveState("isPost", "true");
  await install();
  await configure();
} else {
  await push();
}
