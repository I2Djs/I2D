import svgLayer from "./modules/svg.js";
import canvasAPI from "./modules/canvas.js";
import webglLayer from "./modules/webgl.js";
import geometry from "./modules/geometry.js";
import color from "./modules/colorMap.js";
import path from "./modules/path.js";
import queue from "./modules/queue.js";
import ease from "./modules/ease.js";
import chain from "./modules/chain.js";
import behaviour from "./modules/behaviour.js";
import * as blur from "./modules/utilities";

console.log(blur);

const pathIns = path.instance;
const canvasLayer = canvasAPI.canvasLayer;
const canvasNodeLayer = canvasAPI.canvasNodeLayer;
export { svgLayer };
export { canvasLayer };
export { canvasNodeLayer };
export { webglLayer };
export { geometry };
export { color };
export { pathIns as Path };
export { queue };
export { ease };
export { chain };
export { behaviour };
