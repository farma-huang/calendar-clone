import { init } from "@rematch/core";
import * as models from "./common/models";

const store = init({ models });

export default store;