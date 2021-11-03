<template>
  <view class="my-user-index__wrapper">
    <scroll-view :scroll-y="true" class="my-userIndex__scroll-wrapper">
      <view class="user-navbar__wrapper">
        <nut-icon name="horizontal"></nut-icon>
        <nut-icon name="search"></nut-icon>
      </view>
      <userInfo :data="userAccount.profile" />
      <userLike :data="userLike" />
      <view class="user-tab-wrapper">
        <view class="tab-item active">创建歌单</view>
        <view class="tab-item">收藏歌单</view>
        <view class="tab-item">歌单助手</view>
      </view>
      <common-card :showAll="false" class="special-card" :hasMargin="false" v-if="Object.keys(userPlayList).length !== 0">
        <template #title>
          <view class="user-create-playlist__header">
            <text class="user-create-playlist__title">{{ `创建歌单(${userPlayList.length}个)` }}</text>
            <view class="user-create-playlist__right">
              <nut-icon name="add"></nut-icon>
              <nut-icon name="more-x"></nut-icon>
            </view>
          </view>
        </template>
        <template #content>
          <play-list-item v-for="item in userPlayList" :key="item.id" :data="item">
            <template #footer></template>
          </play-list-item>
        </template>
      </common-card>
      <common-card :showAll="false" class="special-card" :hasMargin="false" v-if="Object.keys(userCollectionList).length !== 0">
        <template #title>
          <view class="user-create-playlist__header">
            <text class="user-create-playlist__title">{{ `创建歌单(${userCollectionList.length}个)` }}</text>
            <view class="user-create-playlist__right">
              <nut-icon name="add"></nut-icon>
              <nut-icon name="more-x"></nut-icon>
            </view>
          </view>
        </template>
        <template #content>
          <play-list-item v-for="item in userCollectionList" :key="item.id" :data="item">
            <template #footer></template>
          </play-list-item>
        </template>
      </common-card>
    </scroll-view>
    <Player />
  </view>
</template>

<script>
import userLike from '../../components/user/userLike.vue'
import userInfo from '../../components/user/userInfo.vue'
import commonCard from '../../components/card/commonCard.vue'
import playListItem from '../../components/card/playListItem.vue'
export default {
  components: { userInfo, userLike, commonCard, playListItem },
  data() {
    return {
      userAccount: {
        profile: {}
      },
      userId: '',
      userLike: {},
      userPlayList: {}, //用户创建歌单
      userCollectionList: {} // 用户收藏歌单
    }
  },
  async created() {
    await this.getUserAccount()
    await this.getUserLick()
    await this.getUserPlayList()
  },
  methods: {
    async getUserAccount() {
      const res = await this.$ajax.get('/user/account')
      this.userAccount = res
      this.userId = res.profile.userId
    },
    async getUserLick() {
      const res = await this.$ajax.get('/likelist', {
        uid: this.userId
      })
      this.userLike = res
    },
    async getUserPlayList() {
      const res = await this.$ajax.get('/user/playlist', {
        uid: this.userId
      })

      this.userPlayList = res.playlist.filter(i => i.ordered == false && i.specialType !== 5)
      this.userCollectionList = res.playlist.filter(i => i.ordered == true)
      this.userLike.coverImgUrl = res.playlist.filter(i => i.specialType == 5)[0].coverImgUrl
    }
  }
}
</script>
<style lang="scss">
.my-user-index__wrapper {
  padding: 0 10px;
  height: calc(100vh - 50px);
}
.my-userIndex__scroll-wrapper {
  height: calc(100vh - 110px);
  padding-bottom: 10px;
  .special-card {
    background-color: #eee;
  }
}
.user-navbar__wrapper {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  height: 30px;
}
.user-tab-wrapper {
  display: flex;
  padding: 10px;
  justify-content: space-between;
  .tab-item {
    font-size: 16px;
    color: #8b8b8b;
    &:nth-child(2) {
      padding: 0 20px;
      border-right: 1px solid rgba($color: #000000, $alpha: 0.2);
      border-left: 1px solid rgba($color: #000000, $alpha: 0.2);
    }
  }
  .active {
    color: #000;
    font-weight: bolder;
  }
}
.user-create-playlist__header {
  display: flex;
  align-items: center;
  padding: 10px;
  .user-create-playlist__title {
    font-size: 14px;
    color: #8d8d8d;
  }
  .user-create-playlist__right {
    margin-left: auto;
    align-self: center;
    color: #8d8d8d;
    .nut-icon {
      padding: 0 10px;
    }
    .right__image {
      width: auto;
      height: 20px;
      margin-left: 10px;
      vertical-align: baseline;
    }
  }
}
</style>
