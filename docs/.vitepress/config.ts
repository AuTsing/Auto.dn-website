import { defineConfig } from 'vitepress';

export default defineConfig({
    title: '小恐龙 Denofa | 基于 Deno 实现的自动化平台',
    description: '基于 Deno 实现的自动化平台',
    themeConfig: {
        siteTitle: '小恐龙',
        nav: [
            { text: '开始', link: '/guide/introduction' },
            { text: 'API', link: '/api/' },
            {
                text: '下载',
                items: [
                    { text: 'Github', link: 'https://github.com/AuTsing/denofa_release/releases' },
                    { text: '百度网盘', link: 'https://github.com/AuTsing/denofa_release/releases' },
                    { text: '夸克网盘', link: 'https://github.com/AuTsing/denofa_release/releases' },
                ],
            },
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
                    { text: 'UISelector UI选择器', link: '/api/ui_selector' },
                ],
            },
        ],
        logo: '/favicon.ico',
        search: {
            provider: 'local',
        },
    },
    markdown: {
        linkify: false,
    },
    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
});
