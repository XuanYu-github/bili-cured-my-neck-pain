// 等待某个元素加载完成
export function waitUntilElementReady(selector: string): Promise<Element> {
    return new Promise((resolve, reject) => {
        const maxTries = 100;
        let trys = 0;
        function _checkReady() {
            const el = document.querySelector(selector);
            if (el) {
                resolve(el);
                return;
            }
            if (trys++ > maxTries) {
                reject(new Error(`Element ${selector} not found after waiting.`));
                return;
            }
            setTimeout(_checkReady, 300);
        }
        _checkReady();
    })
};

// 将字符串转换为dom添加到元素前
export function insertHtmlBeforeElement(element: Element, html: string) {
    const range = document.createRange();
    const frag = range.createContextualFragment(html);
    element.parentElement?.insertBefore(frag, element);
}

// 打印日志
export function log(message: string) {
    console.log(`[B站治好了我的颈椎病] ${message}`);
}
