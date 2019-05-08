<template>
  <div class="add container">
      <!-- v-if判断alert是否有值，如果有值，则显示弹窗。 v-bind:message="alert"为将alert的值传到Alert页面 -->
      <Alert v-if="alert" v-bind:message="alert"></Alert>
      <h1 class="page-header">添加用户</h1>
      <!--@submit为提交事件 -->
      <form @submit="addCustomer">
          <div class="well">
              <h4>用户信息</h4>
              <div class="form-group">
                  <label for="">姓名</label>
                  <input type="text" class="form-control" placeholder="name" v-model="customer.name">
              </div>
              <div class="form-group">
                  <label for="">电话</label>
                  <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
              </div>
              <div class="form-group">
                  <label for="">邮箱</label>
                  <input type="text" class="form-control" placeholder="email" v-model="customer.email">
              </div>
              <div class="form-group">
                  <label for="">学历</label>
                  <input type="text" class="form-control" placeholder="education" v-model="customer.education">
              </div>
              <div class="form-group">
                  <label for="">毕业学校</label>
                  <input type="text" class="form-control" placeholder="graduationschool" v-model="customer.graduationschool">
              </div>
              <div class="form-group">
                  <label for="">职业</label>
                  <input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
              </div>
              <div class="form-group">
                  <label for="">个人简介</label>
                  <!-- <input type="text" class="form-control" placeholder="profile" v-model="customer.profile"> -->
                  <textarea class="form-control" rows="10" v-model="customer.profile"></textarea>
              </div>
              <button type="submit" class="btn btn-primary">添加</button>
          </div>
      </form>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'add',
 data() {
     return {
         customer:{},
         alert:""
     }
 },
 methods:{
     addCustomer(e){
        //  如果其中一个内容为空，则提示请填写对应的信息，如果不为空，则将输入的内容发生至后端服务器保存
        if(!this.customer.name || !this.customer.phone || !this.customer.email) {
            // console.log("请添加对应的信息");
            this.alert = "请填写对应的信息"
        }else{
            let newCustomer = {
                name:this.customer.name,
                phone:this.customer.phone,
                email:this.customer.email,
                education:this.customer.education,
                graduationschool:this.customer.graduationschool,
                profession:this.customer.profession,
                profile:this.customer.profile
            }
            // 将输入的内容发生至后端服务器保存
            this.$http.post("http://localhost:3000/users",newCustomer)
            .then((response)=>{
                // 发生成功则跳转至首页，将alert的值通信
                this.$router.push({path:"/",query:{alert:"用户信息添加成功"}});
            })
             e.preventDefault();
        }
         e.preventDefault();
         
     }
 },
 components:{
     Alert
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
