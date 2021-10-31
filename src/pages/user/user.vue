<template>
  <view class="my-user-index__wrapper">
    <userInfo :data="userAccount.profile" />
  </view>
</template>

<script>
import userInfo from '../../components/user/userInfo.vue'
export default {
  components: { userInfo },
  data() {
    return {
      userAccount: {
        profile: {}
      },
      userId: ''
    }
  },
  async created() {
    await this.getUserAccount()
    await this.getUserLick()
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
    }
  }
}
</script>
<style lang="scss">
.my-user-index__wrapper {
  padding: 10px;
}
</style>
