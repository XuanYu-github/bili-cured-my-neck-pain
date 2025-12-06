declare module "*.html" {
    const content: string;
    export default content;
}

// 编译器注入的版本号
declare const __VERSION__: string