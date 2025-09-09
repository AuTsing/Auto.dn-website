import { defineConfig } from 'vitepress';

export default defineConfig({
    title: 'Auto.dn | 基于 Deno 实现的自动化平台',
    description: '基于 Deno 实现的自动化平台',
    themeConfig: {
        siteTitle: 'Auto.dn',
        nav: [
            { text: '指南', link: '/guide/what-is-denofa' },
            {
                text: 'API',
                items: [
                    { text: 'Autodn API', link: '/api/' },
                    { text: 'Deno API', link: 'https://docs.deno.com/api/deno/all_symbols' },
                    { text: 'Web API', link: 'https://docs.deno.com/api/web/all_symbols' },
                    { text: 'Node API', link: 'https://docs.deno.com/api/node/all_symbols' },
                ],
            },
            {
                text: '下载',
                items: [
                    { text: 'Github', link: 'https://github.com/AuTsing/Auto.dn-release/releases' },
                    { text: '百度网盘', link: '/404.html' },
                    { text: '夸克网盘', link: '/404.html' },
                ],
            },
            {
                text: '社区资源',
                items: [
                    { text: 'node.js', link: 'https://nodejs.org/zh-cn' },
                    { text: 'npm', link: 'https://www.npmjs.com/' },
                    { text: 'jsr', link: 'https://jsr.io/' },
                ],
            },
        ],
        sidebar: [
            {
                text: '指南',
                items: [
                    { text: 'Auto.dn 是什么？', link: '/guide/what-is-denofa' },
                    { text: '快速开始', link: '/guide/quick-start' },
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
        logo: '/logo.svg',
        search: {
            provider: 'local',
        },
    },
    markdown: {
        linkify: false,
    },
    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
});
