<template>
	<div class="login">
		<div class="loginHeader">
			<i @click="goBack" class="fa fa-chevron-left"></i>
			<span class="tit">快速登录</span>
			<i class="right"></i>
		</div>
		<div class="cont">
			<ul>
				<li class="telli">
					<input type="text" placeholder="手机号" v-model="phonenumber" class="tel">
				</li>
				<li class="pwdli">
					<input type="password" placeholder="密码" v-model="pwd" class="pwd">
				</li>
				<span class="warm" v-if="isshow">账号或密码错误</span>
			</ul>
			<div class="button" @click="login">
				登录
			</div>
			<div class="bottom">
				<span>忘记密码</span><router-link to="/registe"><span>注册</span></router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"login",
		data(){
			return{
				phonenumber:"",
				pwd:"",
				isshow:false
			}
		},
		methods:{
			login(){
				if( this.phonenumber == localStorage.username && this.pwd == localStorage.pwd ){
					this.$router.push("/")
				}else{
					this.isshow = true
				}
			},
			goBack(){
		      window.history.length > 1
		        ? this.$router.go(-1)
		        : this.$router.push('/')
		    }
		}
	}
</script>

<style scoped>
	*{
		box-sizing: border-box;
	}
	body{
		background: #fff;
	}
	.loginHeader{
		height:.44rem;
		padding:0 10px;
		display:flex;
		justify-content:space-between;
		align-items:center;
		border-bottom: 1px solid #e8e8e8;
		box-shadow: 0 2px 3px rgba(0,0,0,.12);
	}
	.tit{
		font-size:.16rem;
	}
	.right{
		width:16px;
		height:16px;
	}
	.cont{
		margin-top:.46rem;
	    padding: 0 .24rem .24rem;
	    height: 100%;
	    background: #fff;
	}
	.cont li,.button,.bottom{
		width:100%;
		height:.5rem;
	}
	.cont li{
		padding:0 .12rem;
		border: .01rem solid #000;
		margin:.12rem 0 .24rem;
	}
	input{
		border:0;
		width:100%;
		height:100%;
		padding:0 .12rem;
	}
	.button{
		margin-top:.36rem;
		font-size:18px;
		text-align:center;
		line-height:.5rem;
		color:#fff;
		background:#000;
		border-radius: 3px;
	}
	.bottom,.bottom>a{
		font-size:.16rem;
		color:#999;
		display:flex;
		justify-content:space-between;
		align-items:center;
	}
	.warm{
		color:red;
		font-size:.18rem;
	}
</style>