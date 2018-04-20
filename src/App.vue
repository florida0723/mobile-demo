<template>
  <div id="app">
    <van-swipe :autoplay="3000">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
    </van-swipe>

    <van-cell-group class="item-list">
      <van-cell is-link icon="points" title="我的积分" />
      <van-cell is-link icon="gift" title="我收到的礼物" />
    </van-cell-group>

    <van-goods-action>
      <van-goods-action-mini-btn icon="chat" @click="sorry">
        客服
      </van-goods-action-mini-btn>
      <van-goods-action-mini-btn icon="cart" @click="sorry">
        购物车
      </van-goods-action-mini-btn>
      <van-goods-action-big-btn @click="sorry">
        加入购物车
      </van-goods-action-big-btn>
      <van-goods-action-big-btn primary @click="sorry">
        立即购买
      </van-goods-action-big-btn>
    </van-goods-action>
  </div>
</template>

<script>
// import { Cell, CellGroup, Icon } from 'vant';
export default {
  methods: {
    sorry: function() {
      alert(111);
    }
  }
};
</script>

<style>
body {
  background-color: #f8f8f8;
}

.van-cell__title .van-icon {
  font-size: 18px;
}
</style>
