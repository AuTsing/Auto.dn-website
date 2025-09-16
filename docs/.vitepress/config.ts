import { defineConfig, DefaultTheme } from 'vitepress';
import typedocSidebar from '../api/typedoc-sidebar.json';

function genApiSidebar(): DefaultTheme.SidebarItem[] {
    const sidebarItems = Array.from(typedocSidebar[0].items) as DefaultTheme.SidebarItem[];
    sidebarItems[0].text = 'Autodn 分类';
    sidebarItems[0].collapsed = false;
    sidebarItems.unshift({ text: 'Autodn API', link: '/api/' });
    return sidebarItems;
}

export default defineConfig({
    title: 'Auto.dn | 基于 Deno 实现的自动化平台',
    description: '基于 Deno 实现的自动化平台',
    themeConfig: {
        siteTitle: 'Auto.dn',
        nav: [
            { text: '指南', link: '/guide/what-is-autodn' },
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
                    {
                        text: 'Github',
                        link: 'https://github.com/AuTsing/Auto.dn-release/releases/latest/download/Autodn.apk',
                    },
                    {
                        text: 'Github(加速1)',
                        link: 'https://ghfast.top/https://github.com/AuTsing/Auto.dn-release/releases/latest/download/Autodn.apk',
                    },
                    {
                        text: 'Github(加速2)',
                        link: 'https://gh-proxy.com/https://github.com/AuTsing/Auto.dn-release/releases/latest/download/Autodn.apk',
                    },
                    { text: 'Github发布页', link: 'https://github.com/AuTsing/Auto.dn-release/releases' },
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
                    { text: 'Auto.dn 是什么？', link: '/guide/what-is-autodn' },
                    { text: '快速开始', link: '/guide/quick-start' },
                    { text: '安装应用', link: '/guide/install-app' },
                ],
            },
            {
                text: 'API 文档',
                items: genApiSidebar(),
            },
            {
                text: '更新日志',
                items: [
                    { text: 'App 应用程序', link: '/changelog/app' },
                    { text: 'Core 核心', link: '/changelog/core' },
                    { text: 'Extension 扩展', link: '/changelog/extension' },
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
