<template>
  <div class="details container">
      <!-- 回到首页 -->
      <router-link to="/" class="btn btn-default">返回</router-link>
   <h1 class="page-header">{{customer.name}}
       <span class="pull-right">
           <!--v-bind:to为跳转时，将id传到编辑页面 -->
           <router-link class="btn btn-primary" v-bind:to="'/edit/'+customer.id" >
           编辑
           </router-link>
           <!-- 删除对应id的数据 -->
           <button class="btn btn-danger" @click="deleteCustomer(customer.id)">
               删除
           </button>
       </span>
   </h1>
   <ul class="list-list-group">
       <li class="list-group-item"><span class="glyphicon glyphicon-asterisk">{{customer.phone}}</span></li>
       <li class="list-group-item"><span class="glyphicon glyphicon-plus">{{customer.email}}</span></li>
   </ul>

   <ul class="list-list-group">
       <li class="list-group-item"><span class="glyphicon glyphicon-asterisk">{{customer.education}}</span></li>
       <li class="list-group-item"><span class="glyphicon glyphicon-plus">{{customer.graduationschool}}</span></li>
   </ul>

   <ul class="list-list-group">
       <li class="list-group-item"><span class="glyphicon glyphicon-asterisk">{{customer.profession}}</span></li>
       <li class="list-group-item"><span class="glyphicon glyphicon-plus">{{customer.profile}}</span></li>
   </ul>
  </div>
</template>

<script>
export default {
  name: 'cumstomerdetails',
 data() {
     return {
         customer:""
     }
 },
methods:{
    // id为前面传过来的id，然后发送请求至后端数据库
    fetchCustomers(id) {
      this.$http.get("http://localhost:3000/users/"+id)
      .then((response)=>{
        // console.log(response);
        // 将接受到的数据赋值给customer，这样在数据模型中就有数据
        this.customer= response.data;
      })
    },
    // 删除id的数据
    deleteCustomer(id){
    // 将id发送至后端数据库删除
    this.$http.delete("http://localhost:3000/users/"+id)
    .then((reaponse)=>{
        // 如果删除成功，则跳转首页，将alert的值传到首页使用
        this.$router.push({path:"/",query:{alert:"用户删除成功！"}});
    })
}
},

// 挂载前请求到前面传过来的id
created() {
    this.fetchCustomers(this.$route.params.id);
}
}
</script>
<style scoped>

</style>
