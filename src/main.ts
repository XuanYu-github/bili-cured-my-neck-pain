/// <reference path="./global.d.ts" />

import rotateHtml from './htmls/ctrl-rotate.html';
import rotateScript from './scripts/ctrl-rotate.ts';
import {
    waitUntilElementReady,
    insertHtmlBeforeElement,
    log
} from './utils.ts';


async function main() {
    const pipBtn = await waitUntilElementReady('.bpx-player-ctrl-btn.bpx-player-ctrl-pip');
    const beginTime = Date.now();

    insertHtmlBeforeElement(pipBtn, rotateHtml);
    rotateScript.onLoad();

    log(`${__VERSION__} 已加载，耗时 ${Date.now() - beginTime} ms`);
}

main();