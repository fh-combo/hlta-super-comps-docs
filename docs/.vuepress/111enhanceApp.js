// import Vue from 'vue';
// export default ({
//   router
// }) => {
//   router.beforeEach((to, from, next) => {
//     // setTimeout(() => {
//       // let tables = document.querySelectorAll('#app > .theme-container > .page > .content > table');
//       // tables && Array.from(tables).forEach(table =>{
//       //     table.outerHTML = `<div class="table">${table.outerHTML}</div>`;
//       // });
//       // this.$nextTick(()=>{
//       console.log("hello vue~", $.fancybox.getInstance());
//       const fancyInstance = $.fancybox.getInstance()
//       if (fancyInstance && fancyInstance.isVisible) {
//         $.fancybox.close()
//         next();
//       }
//       // $.fancybox.close()
//       // })
//     // })
//     next();
//   })
// };
export default function (context) {
  const {
    router,
    siteData: {
      pages,
      themeConfig = {}
    }
  } = context;

  router.beforeEach(handleRedirects);

  function handleRedirects(to, from, next) {
    const numPages = pages.length;

    for (let i = 0; i < numPages; i++) {
      const {
        path,
        frontmatter
      } = pages[i];

      if (path === to.path && frontmatter.redirect) {
        if (from.path === frontmatter.redirect) {
          next(false);
        } else {
          next(); // <--- omitting passed target
        }

        return;
      }
    }

    const redirections = themeConfig.redirect || {};
    if (redirections.hasOwnProperty(to.path)) {
      next(); // <--- omitting passed target
      return;
    }
    const fancyInstance = $.fancybox.getInstance()
    if (fancyInstance && fancyInstance.isVisible) {
      $.fancybox.close()
    }

    next();


  }
}
