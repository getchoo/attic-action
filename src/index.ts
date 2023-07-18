import { install } from "./stages/install";
import { configure } from "./stages/configure";
import { push } from "./stages/push";
import { getState, saveState } from "@actions/core";

const isPost = !!getState("isPost");

if (!isPost) {
  saveState("isPost", "true");
  install();
  configure();
} else {
  push();
}
