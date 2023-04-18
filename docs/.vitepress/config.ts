import { defineConfig } from 'vitepress';

export default defineConfig({
    title: 'Denort',
    description: 'Doc of Denort',
    themeConfig: {
        siteTitle: 'Denort',
        nav: [
            { text: '开始', link: '/guide/introduction' },
            { text: 'API 文档', link: '/api/' },
            { text: '关于', link: '/about' },
        ],
        sidebar: [
            {
                text: '开始',
                items: [
                    { text: '简介', link: '/guide/introduction' },
                    { text: '快速上手', link: '/guide/quick-start' },
                ],
            },
            {
                text: 'API 文档',
                items: [
                    { text: 'io 输入输出', link: '/api/io' },
                    { text: 'finger 手指', link: '/api/finger' },
                    { text: 'Rect 矩形', link: '/api/rect' },
                    { text: 'UIObject UI对象', link: '/api/ui_object' },
                ],
            },
        ],
        logo: '/favicon.ico',
    },
    markdown: {
        linkify: false,
    },
    head: [['link', { rel: 'icon', href: '/logo.svg' }]],
});
