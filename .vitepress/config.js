const { getPosts, generatePaginationPages } = require('./theme/serverUtils')

async function config() {
    const pageSize = 10 //分页大小
    await generatePaginationPages(pageSize)
    return {
        title: 'hassan',
        base:'/',
        description: 'vitepress,blog,blog-theme',
        themeConfig: {
            posts: await getPosts(),
            pageSize: pageSize,
            website: 'https://github.com/hs-hanshun', //copyright link
            // 评论的仓库地址
            comment: {
                repo: 'hs-hanshun.github.io',
                themes: 'github-light',
                issueTerm: 'pathname'
            },
            nav: [
                { text: 'Home', link: '/' },
                { text: 'Archives', link: '/pages/archives' },
                { text: 'Tags', link: '/pages/tags' },
                { text: 'About', link: '/pages/about' }
                // { text: 'Airene', link: 'http://airene.net' }  -- External link test
            ]
        },
        srcExclude: ['README.md'] // exclude the README.md , needn't to compiler
        /*
        vite: {
            build: { minify: false }
        },
        optimizeDeps: {
            keepNames: true
        }
        */
    }
}

module.exports = config()
