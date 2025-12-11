/// <reference path="./global.d.ts" />

import rotateHtml from './htmls/ctrl-rotate.html';
import rotateScript from './scripts/ctrl-rotate.ts';
import {
    waitUntilElementReady,
    insertHtmlAfterElement,
    printVersion
} from './utils.ts';


async function main() {
    const settingBtn = await waitUntilElementReady('.bpx-player-ctrl-btn.bpx-player-ctrl-setting');
    const beginTime = performance.now();

    insertHtmlAfterElement(settingBtn, rotateHtml);
    rotateScript.onLoad();

    const cost = (performance.now() - beginTime).toFixed(1);

    printVersion(__VERSION__, cost);
}

main();