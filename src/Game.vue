<template>
	<div class="page">
		<!-- <h1>Game</h1> -->
		<!-- <div class="list"> -->
		<scroller class="list" ref="view_scroller"
				:on-infinite="infinite"
				:snapping="true"
				style="height: 10rem">
			<!--  -->
			<div v-for="n in items" :key="n" class="item">
				<img :src=" `./dist/6067/file${n%18+1}.png` " alt=""
					style="width: 1.48rem; height: 1.48rem">
			</div>
			<div style="height:1px"></div>
		</scroller>
		<!-- </div> -->
	</div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  mounted() {
    for (let i = 1; i <= 10; i++) {
      this.items.push(i + 1);
    }
    this.len = 10;

    setTimeout(function() {
      var spinner = document.querySelector(".loading-layer .spinner-holder .spinner");
      spinner.style.width = "0.64rem";
      spinner.style.height = "0.64rem";
    }, 100);
  },
  methods: {
    refresh(done) {
      setTimeout(() => {
        done();
      }, 1000);
    },
    infinite(done) {
      var self = this;
      console.log("infinite");
      if (this.len >= 20) {
        setTimeout(() => {
          done(true);
        }, 1000);
        return;
      }

      setTimeout(() => {
        self.items.push(this.len);
        this.len++;
        setTimeout(done, 100);
      }, 1000);
    }
  }
};
</script>

<style scoped lang="scss">
.page { background-color: transparent }
.loading-layer { height: 2.1rem !important; }
.list {
  margin: 0 auto;
  width: 96%;
  .item {
    // display: inline-block;
    width: 20%;
    height: 2.1rem;
  }
}
</style>