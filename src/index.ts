import compat from "core-js-compat";

import { build } from "./build";
const { list, targets } = compat({
  targets:
    "> 0.2%, chrome >= 71, firefox >= 62, edge >= 79, safari >= 13, ios_saf >= 13, not dead",
});

build({ list, targets });
