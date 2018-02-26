<template>
	<div class="page">
		<!-- <scroller class="list" ref="view_scroller"
				:on-infinite="infinite"
				:snapping="true"
				style="height: 10rem">
			<div v-for="n in items" :key="n" class="item">
				<img :src=" `./dist/6067/file${n%18+1}.png` " alt=""
					style="width: 1.48rem; height: 1.48rem">
			</div>
			<div style="height:1px"></div>
		</scroller> -->
    <div class="list">
        <div v-for="g in group" :key="g" class="row">
          <span v-for="n in g" :key="n" class="item">
            <img :src=" `./dist/6067/file${n%18+1}.png` " alt=""
              style="width: 1.48rem; height: 1.48rem">
          </span>
        </div>
        <div class="spinner" v-show="isPadding">

        </div>
    </div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      isPadding: false,
      items: [],
      group: []
    };
  },
  mounted() {
    var self = this;
    for (let i = 1; i <= 50; i++) {
      this.items.push(i + 1);
    }
    this.len = 10;
    let t = [[]], c = 0;
      this.items.forEach(n=> {
        if (t[c].length<=4) {
          t[c].push(n);
        } else {
          t[++c] = [n];
        }
      });
    this.group = t;

    var timer, isDone;
    document.body.onscroll = function(evnet) {
      if (this.isPadding) return;
      var scrollTop = document.documentElement.scrollTop;
      if (scrollTop+100 >= document.documentElement.clientHeight - window.innerHeight) {
        this.isPadding = true;
        infinite();
      }
    };

    function infinite() {
      setTimeout(function() {
        // for (let i=0; i< 5; i++) {
        //   self.items.push(self.len);
        //   self.len++;
        // }
        self.group.push([self.len, self.len+1, self.len+2, self.len+3, self.len+4]);
        self.len+=5;
        this.isPadding = false;
      },1000);
    }

    // setTimeout(function() {
    //   var spinner = document.querySelector(".loading-layer .spinner-holder .spinner");
    //   spinner.style.width = "0.64rem";
    //   spinner.style.height = "0.64rem";
    // }, 100);
  },
  methods: {
    refresh(done) {
      setTimeout(() => {
        done();
      }, 1000);
    },
    infinite(done) {
      var self = this;
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
.page { background-color: transparent; height: auto; }
.loading-layer { height: 2.1rem !important; }
.list {
  margin: 0 auto;
  width: 96%;
  .row {
    width: 100%;
    height: 2.1rem;
  }

  .item {
    display: inline-block;
    width: 20%;
    height: 2.1rem;
  }
}
.spinner { height: 2.1rem; }
</style>