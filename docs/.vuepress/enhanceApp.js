// import Vue from 'vue';
export default ({
  router
}) => {
  router.beforeEach((to, from, next) => {
    // setTimeout(() => {
      // let tables = document.querySelectorAll('#app > .theme-container > .page > .content > table');
      // tables && Array.from(tables).forEach(table =>{
      //     table.outerHTML = `<div class="table">${table.outerHTML}</div>`;
      // });
      // this.$nextTick(()=>{
      console.log("hello vue~", $.fancybox.getInstance());
      const fancyInstance = $.fancybox.getInstance()
      if (fancyInstance && fancyInstance.isVisible) {
        $.fancybox.close()
        next();
      }
      // $.fancybox.close()
      // })
    // })
    next();
  })
};
