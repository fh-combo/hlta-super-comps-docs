import Vue from 'vue';
export default ({
  router
}) => {
  router.beforeEach((to, from, next) => {
    next();
    setTimeout(() => {
      // let tables = document.querySelectorAll('#app > .theme-container > .page > .content > table');
      // tables && Array.from(tables).forEach(table =>{
      //     table.outerHTML = `<div class="table">${table.outerHTML}</div>`;
      // });
      // this.$nextTick(()=>{
      console.log("hello vue~", $.fancybox);
      $.fancybox.close()
      // })
    })
  })
};
