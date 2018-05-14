<template>
	<div class="registe">
		<div class="registeHeader">
			<i @click="goBack" class="fa fa-chevron-left"></i>
			<span class="tit">快速注册</span>
			<i class="right"></i>
		</div>
		<div class="cont">
				<ul>
					<li class="telli">
						<input @blur="sureTel" type="text" placeholder="请输入手机号" v-model="phonenumber" class="tel">
						<span class="warm" v-if="phonenumberwarmshow">请输入正确的手机号</span>
					</li>
					<li class="pwdli">
						<input type="text" placeholder="输入密码" v-model="pwd" class="pwd">
					</li>
					<li class="pwdli">
						<input @blur="surePwd" type="text" placeholder="请确认密码" v-model="surepwd" class="surepwd">
						<span class="warm" v-if="pwdwarmshow">请保持两次密码一致</span>
					</li>
				</ul>
				<div class="button" @click="regist">
					注册
				</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'registe',
		methods:{
			goBack(){
		      window.history.length > 1
		        ? this.$router.go(-1)
		        : this.$router.push('/')
		    },
			sureTel(){
				var reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
				if( reg.test( this.phonenumber ) ){
					this.suretel = true
					this.phonenumberwarmshow = false
				}else{
					this.phonenumberwarmshow = true
				}
			},
			surePwd(){
				if( this.pwd && this.pwd === this.surepwd ){
					this.surepwdb = true
					this.pwdwarmshow = false
				}else{
					this.pwdwarmshow = true
				}
			},
			regist(){
				if( this.suretel && this.surepwdb ){
					localStorage.username = this.phonenumber
					localStorage.pwd = this.pwd
					this.$router.push("login")
				}
			}
		},
		data(){
			return{
				phonenumber:"",
				pwd:"",
				surepwd:"",
				suretel: false,
				surepwdb: false,
				phonenumberwarmshow:false,
				pwdwarmshow:false
			}
		}	}
</script>

<style scoped>
	*{
		box-sizing: border-box;
	}
	.registeHeader{
		height:.44rem;
		background:#000;
		color:#fff;
		padding:0 10px;
		display:flex;
		justify-content:space-between;
		align-items:center;
	}
	.right{
		width:16px;
		height:16px;
	}
	.tit{
		font-size:.16rem;
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
		display:block;
		font-size:.16rem;
		line-height:.24rem;
		color:red;
	}
</style>