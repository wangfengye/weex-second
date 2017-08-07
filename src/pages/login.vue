<template>
    <div class="wrapper">
        <div class="content">
            <image :src="image" class="image" resize="cover" />
            <input type="text" maxlength="12" autofocus="true" class="input" placeholder="账号" v-model="username" />
            <input type="password" maxlength="20" class="input" placeholder="密码" v-model="password" />
            <text @click="login" class="button">登录</text>
        </div>
    </div>
</template>

<script>
const modal = weex.requireModule('modal');

export default {

    data() {
        return {
            image: 'https://ws1.sinaimg.cn/large/610dc034ly1fgj7jho031j20u011itci.jpg',
            username: '',
            password: '',
        }
    },
    methods: {
        login() {
            if (this.username == "test" && this.password == "123456") {
                modal.toast({ message: this.username + "! welcome", duration: 1 });
            } else {
                modal.toast({ message: "账号或密码错误", duration: 2 });
            }
        },

    }

}

</script>


<style>
.wrapper {
    flex-direction: flex;
    /* 主轴方向 */
    flex-wrap: nowrap;
    justify-content: space-around;
    /* 主轴对齐方式 */
    align-items: center;
    /* 交叉轴对齐方式 */
    display: flex;
    margin: 0px;
    height: 1220px;
    background: linear-gradient(skyblue, whitesmoke);
}

.content {
    flex-direction: flex;
    /* 主轴方向 */
    flex-wrap: nowrap;
    justify-content: space-around;
    /* 主轴对齐方式 */
    align-items: center;
    /* 交叉轴对齐方式 */
    display: flex;
    height: 1000px;
}

.image {
    width: 360px;
    height: 360px;
    border-radius: 180px;
    background-color: gold;
}

.input {
    width: 640px;
    height: 80px;
    line-height: 80px;
    padding: 16px;
    border-width: 1px;
    border-color: gray;
    border-radius: 10px;
}

.button {
    width: 360px;
    height: 80px;
    line-height: 80px;
    background-color: #73D0F4;
    color: white;
    border-radius: 10px;
    text-align: center;
    font-size: 40px;
}
</style>