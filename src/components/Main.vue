<template>
  <main>
    <div class="main__container">
      <!-- MAIN TITLE STARTS HERE -->

      <div class="main__title">
        <img src="../assets/hello.svg" alt="hello" />
        <div class="main__greeting">
          <h1>Hello,</h1>
          <p>Welcome to your admin dashboard</p>
        </div>
      </div>

      <!-- MAIN TITLE ENDS HERE -->

      <!-- MAIN CARDS STARTS HERE -->
      <div class="main__cards">
        <div class="card">
          <i class="fa fa-user-o fa-2x text-lightblue" aria-hidden="true"></i>
          <div class="card_inner">
            <p class="text-primary-p">Number of Subscribers</p>
            <span class="font-bold text-title">578</span>
          </div>
        </div>

        <div class="card">
          <i class="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
          <div class="card_inner">
            <p class="text-primary-p">Times of Watching</p>
            <span class="font-bold text-title">2467</span>
          </div>
        </div>

        <div class="card">
          <i
            class="fa fa-video-camera fa-2x text-yellow"
            aria-hidden="true"
          ></i>
          <div class="card_inner">
            <p class="text-primary-p">Number of Videos</p>
            <span class="font-bold text-title">340</span>
          </div>
        </div>

        <div class="card">
          <i class="fa fa-thumbs-up fa-2x text-green" aria-hidden="true"></i>
          <div class="card_inner">
            <p class="text-primary-p">Number of Likes</p>
            <span class="font-bold text-title">645</span>
          </div>
        </div>
      </div>
      <!-- MAIN CARDS ENDS HERE -->

      <!-- CHARTS STARTS HERE -->
      <div class="charts">
        <div class="charts__left">
          <div class="charts__left__title">
            <div>
              <h1>Daily Reports</h1>
              <p>London, UK</p>
            </div>
            <!-- <i class="fa fa-usd" aria-hidden="true"></i> -->
            <ToggleBtn />
          </div>
          <Chart />
        </div>

        <div class="charts__right">
          <div class="charts__right__title">
            <div>
              <h1>Stats Reports</h1>
              <p>London, UK</p>
            </div>
            <i class="fa fa-gbp" aria-hidden="true"></i>
          </div>

          <div class="charts__right__cards">
            <div class="card1">
              <h1>Income</h1>
              <p>£75,300</p>
            </div>

            <div class="card2">
              <h1>Sales</h1>
              <p>£124,200</p>
            </div>

            <div class="card3">
              <h1>Users</h1>
              <p>3900</p>
            </div>

            <div class="card4">
              <h1>Orders</h1>
              <p>1881</p>
            </div>
          </div>
        </div>
      </div>
      <!-- CHARTS ENDS HERE -->
    </div>
  </main>
</template>

<script>
import ToggleBtn from "./ToggleBtn.vue";
import Chart from "./Chart.vue";

export default {
  name: "Main",
  components: {
    Chart,
    ToggleBtn
  },
};
</script>
<style scoped>
main {
  background: #f3f4f6;
  grid-area: main;
  overflow-y: auto;
}

.main__container {
  padding: 20px 35px;
}

.main__title {
  display: flex;
  align-items: center;
}

.main__title > img {
  max-height: 100px;
  object-fit: contain;
  margin-right: 20px;
}

.main__greeting > h1 {
  font-size: 24px;
  color: #2e4a66;
  margin-bottom: 5px;
}

.main__greeting > p {
  font-size: 14px;
  font-weight: 700;
  color: #a5aaad;
}

.main__cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  margin: 20px 0;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 70px;
  padding: 25px;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 5px 5px 13px #ededed, -5px -5px 13px #ffffff;
}

.card_inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card_inner > span {
  font-size: 25px;
}

.charts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 50px;
}

.charts__left {
  padding: 25px;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 5px 5px 13px #ededed, -5px -5px 13px #ffffff;
}

.charts__left__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.charts__left__title > div > h1 {
  font-size: 24px;
  color: #2e4a66;
  margin-bottom: 5px;
}

.charts__left__title > div > p {
  font-size: 14px;
  font-weight: 700;
  color: #a5aaad;
}

.charts__left__title > i {
  color: #ffffff;
  font-size: 20px;
  background: #ffc100;
  border-radius: 200px 0px 200px 200px;
  -moz-border-radius: 200px 0px 200px 200px;
  -webkit-border-radius: 200px 0px 200px 200px;
  border: 0px solid #000000;
  padding: 15px;
}

.charts__right {
  padding: 25px;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 5px 5px 13px #ededed, -5px -5px 13px #ffffff;
}

.charts__right__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.charts__right__title > div > h1 {
  font-size: 24px;
  color: #2e4a66;
  margin-bottom: 5px;
}

.charts__right__title > div > p {
  font-size: 14px;
  font-weight: 700;
  color: #a5aaad;
}

.charts__right__title > i {
  color: #ffffff;
  font-size: 20px;
  background: #39447a;
  border-radius: 200px 0px 200px 200px;
  -moz-border-radius: 200px 0px 200px 200px;
  -webkit-border-radius: 200px 0px 200px 200px;
  border: 0px solid #000000;
  padding: 15px;
}

.charts__right__cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 30px;
}

.card1 {
  background: #d1ecf1;
  color: #35a4ba;
  text-align: center;
  padding: 25px;
  border-radius: 5px;
  font-size: 14px;
}

.card2 {
  background: #d2f9ee;
  color: #38e1b0;
  text-align: center;
  padding: 25px;
  border-radius: 5px;
  font-size: 14px;
}

.card3 {
  background: #d6d8d9;
  color: #3a3e41;
  text-align: center;
  padding: 25px;
  border-radius: 5px;
  font-size: 14px;
}

.card4 {
  background: #fddcdf;
  color: #f65a6f;
  text-align: center;
  padding: 25px;
  border-radius: 5px;
  font-size: 14px;
}

@media only screen and (max-width: 855px) {
  .main__cards {
    grid-template-columns: 1fr;
    gap: 10px;
    margin-bottom: 0;
  }

  .charts {
    grid-template-columns: 1fr;
    margin-top: 30px;
  }
}
</style>
