<!-- 登录页面------------------------------------------------------ -->
<template>
    <div class="content_warp">
        <div class="content">
            <!-- 图片 -->
            
            <!-- 登录 -->
            <div class="entry">
                <div class="login">
                    <div class="login_main">
                        <div class="logo">
                            <img src="@/assets/login_head_logo.jpg" class="logo_img">
                        </div>
                        <!-- 已注册用户准备登录 -->
                        <div class="ready_login">
                            <div class="noLogin_text">立即注册</div>
                            <p class="input_tip" v-if="tipText">{{ tipText }}</p>
                            <div class="clound_input">
                                <div class="phone_login">
                                    <i class="iconfont icon-shouji"></i>
                                    <div class="area">
                                        <span class="area_selected">{{ areaNum }}</span>
                                        <div class="area_select">
                                            <i class="iconfont icon-jiantou2"
                                                @mousedown="areaSelect"
                                            ></i>
                                        </div>
                                    </div>
                                    <input class="phone" placeholder="请输入手机号码" v-model="phoneNumber"></input>
                                    <div class="areas_box" v-if="isAreaBox == true">
                                        <div class="box_header">
                                            <i class="iconfont icon-ic_search24px"></i>
                                            <input type="text" 
                                                placeholder="请输入所在国家或地区中文名称" 
                                                class="box_input"
                                                v-model="searchArea"
                                            >
                                        </div>
                                       <ul class="areas_list">
                                        <li class="areas_item"
                                            v-for="(area,area_index) of areasList"
                                            :key="area_index"
                                            @mousedown="areaSelected(area)"
                                            :class="area.id == matchIndex ? 'areas_item_blue' : 'areas_item'"
                                        >
                                        <!-- v-show="area.id == matchIndex" -->
                                            <span class="area_name">{{ area.name }}</span>
                                            <span class="area_num">{{ area.num }}</span>
                                        </li>
                                       </ul> 
                                    </div>
                                </div>
                                <div class="pwd_login">
                                    <i class="iconfont icon-lock"></i>
                                    <input class="pwd" placeholder="请输入登录密码" v-model="password"></input>
                                </div>
                            </div>
                            <div class="third_agree">
                                <div class="agree_p1">
                                    <p class="p1">登录
                                        <span>金蝶云账号</span>
                                        将获得以下权限
                                    </p>
                                    <div class="icon">
                                        <i class="iconfont icon-jiantou2"
                                            @mousedown="details"
                                        ></i>
                                    </div>
                                </div>
                                <p class="agree_p2" v-if="isDetails == true">您的昵称、手机号、邮箱、企业产品信息</p>
                                <div class="agree_p3">
                                    <p class="p3">
                                        <input type="checkbox" 
                                            class="p3_check" 
                                            v-model="checkbox"
                                        >
                                        我同意
                                        <span>《金蝶中国用户使用协议》</span>
                                        和
                                        <span>《金蝶中国隐私政策》</span>
                                    </p>
                                </div>
                            </div>
                            <div class="forget_pwd">忘记密码</div>
                            <div class="login_button" 
                                @mousedown="check" 
                                :class="isBlue == true ? 'login_button_blue' : 'login_button'"
                            >授权并登录</div>
                            <div class="login_ways">
                                <div class="way_text">短信登录</div>
                                <div class="way_email">邮箱登录</div>
                                <div class="way_username">短信登录</div>
                            </div>
                        </div>
                    </div>
                    <div class="login_bottom">
                        <div class="logos">
                            <i class="iconfont icon-weibo"></i>
                            <i class="iconfont icon-weibo"></i>
                            <i class="iconfont icon-weibo"></i>
                            <i class="iconfont icon-weibo"></i>
                            <i class="iconfont icon-weibo"></i>
                        </div>
                        <p class="bottom_p1">
                            <a href="#" class="p2_text">用户协议 </a>
                            <span>|</span>
                            <a href="#" class="p2_text"> 隐私政策</a>
                        </p>
                        <p class="bottom_p2">
                            <i class="iconfont icon-weibo"></i>
                            <i class="iconfont icon-weibo"></i>
                            <a href="#" class="p3_text">粤ICP备05041751号</a>
                            <a href="#" class="p3_text">粤公网安备 44030502002324号</a>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { nextTick, onUpdated ,ref } from 'vue';

    // 区域选择---------------------------
    let isAreaBox = ref(false);
    let countArea = ref(0);
    const areaSelect = () => {
        countArea.value++
        if(countArea.value % 2 == 0){
            isAreaBox.value = false;
        }else{
            isAreaBox.value = true;
        }    
    }
    const areasList = ref([
        {
            id:'1',
            name:'中国',
            num:'+86',
        },
        {
            id:'2',
            name:'中国香港特别行政区',
            num:'+852',
        },
        {
            id:'3',
            name:'中国台湾',
            num:'+886',
        },
        {
            id:'4',
            name:'中国澳门特别行政区',
            num:'+853',
        },
        {
            id:'5',
            name:'美国',
            num:'+1',
        },
        {
            id:'6',
            name:'马来西亚',
            num:'+60',
        },
        {
            id:'7',
            name:'新加坡',
            num:'+65',
        },
        {
            id:'8',
            name:'阿富汗',
            num:'+93',
        },
    ])

    // 区域选中
    let areaNum = ref(+86);
    const areaSelected = (area) => {
        areaNum.value = area.num;
        isAreaBox.value = false;
    }

    // 区域搜索
    let searchArea = ref('');
    let matchItem = ref('');
    let matchIndex = ref('');
    onUpdated(async() => {
        await nextTick();
        matchItem.value = areasList.value.find(area => area.name == searchArea.value);
        matchIndex.value = matchItem.value.id;
    })
    

    // 权限展示--------------
    let isDetails = ref(false);
    let countDetails = ref(0);
    const details = () => {
        countDetails.value++
        if(countDetails.value % 2 == 0){
            isDetails.value = false;
        }else{
            isDetails.value = true;
        }    
    }

    // 检查手机号码和密码是否正确-----------------
    let tipText = ref('');
    let phoneNumber = ref('');
    let password = ref('');
    let isRightPhone = ref(false);
    let isRightPwd = ref(false);
    let checkbox = ref(false)
    let isBlue = ref(false);
    const check = () => {
        // /^[1][3-9][0-9]{9}$/   注:以数字1开头，第二位是3到9的数字，后面跟着9个数字，
        const phoneReg = /^[1][3-9][0-9]{9}$/;
        if(!phoneReg.test(phoneNumber.value)){
            isRightPhone.value = false;
        }else{
            isRightPhone.value = true;
        }

        // ^[a-zA-Z]\w{5,17}$  注：正确格式为：以字母开头，长度在6~18之间，只能包含字符、数字和下划线。
        const pwdReg = /^[a-zA-Z]\w{5,17}$/;
        if(!pwdReg.test(password.value)){
            isRightPwd.value = false;
        }else{
            isRightPwd.value = true;
        }

        if(isRightPhone.value === false &&  isRightPwd.value === false){
            tipText.value = "手机号和密码输入有误";
        } else if(isRightPhone.value === true &&  isRightPwd.value === false){
            tipText.value = "密码输入有误";
        } else if(isRightPhone.value === false &&  isRightPwd.value === true){
            tipText.value = "手机号输入有误";
        } else if(isRightPhone.value === true &&  isRightPwd.value === true){
            tipText.value = " ";
            console.log("账号：" + phoneNumber.value + " 密码：" + password.value + "  登录成功！")
        }


        // 授权并登录按钮----------------
        if(phoneNumber.value !== '' && password.value !== '' && checkbox.value == true){
            isBlue.value = true;
        }else{
            isBlue.value = false;
        }
        console.log("是否蓝色"+isBlue.value)

    }
   

    

</script>

<style lang="scss" scoped>
    
    /* 总体布局 */
    .content_warp, body{
        width: 100%;
        min-height: 100vh;
        background-color: antiquewhite;
        .content{
            width: 1080px;
            min-width: 800px;
            margin: 0 auto;
            min-height: 100vh;   
        }

        @media screen and (min-width: 1000px){
            .content{
                width: 1200px;
            }
        }
        @media screen and (min-width: 1280px){
            .content{
                width: 1460px;
            }
        }
        @media screen and (min-width: 1690px){
            .content{
                width: 1985px;
            }
        }
        a {
            text-decoration: none; 
            outline: none;	
            color: rgb(0, 0, 0);	
        }

    }

    .content_warp{
        .content{
            position: relative;
            overflow: hidden;
            background-image: url(@/assets/login_bg.jpg);
            background-size: cover;
            animation:frams 10s infinite;

            // 登录
            .entry{
                position: absolute;
                right: 0px;
                display: inline-block;
                width: 35%;
                // width: 450px;
                height: 100%;
                background-color: white;
                .login{
                    height: 70%;
                    margin: 10px 50px;
                    // background-color: rgba(173, 216, 230, 0.276);
                    .login_main{

                        // logo
                        .logo{
                            margin-bottom: 63px;
                            .logo_img{
                                width: 80%;
                                margin: 0 10% ;
                                margin-top: 37px;
                            }
                        }

                        // 已注册用户准备登录操作
                        .ready_login{
                            position: relative;

                            // 立即注册
                            .noLogin_text{
                                margin-top: 10px;
                                margin-left: 80%;
                                font-size: 12px;
                                line-height: 41px;
                                color: rgb(0, 133, 240);
                                cursor: pointer;
                            }
                            .noLogin_text:hover{
                                text-decoration: solid underline  rgb(0, 133, 240) 1px;
                            }

                            // 输入错误提示
                            .input_tip{
                                position: absolute;
                                color:red;
                                font-size: 14px;
                            }

                            // 输入手机号和密码
                            .clound_input{
                                position: relative;
                                .phone_login{
                                    width: 99%;
                                    border: 1px solid rgb(182, 193, 216);
                                    border-radius: 2px;
                                    margin-top: 27px;
                                    color: rgb(182, 193, 216);

                                    .icon-shouji{
                                        font-size: 23px;
                                        color: rgb(154, 154, 154);
                                        line-height: 40px;
                                        margin: 3px 0 3px 10px;
                                        display: inline-block;
                                    }
                                    .area{
                                        padding: 12px 0 12px 5px;
                                        width: 25%;
                                        display: inline-block;
                                        // margin-right: 10%;
                                        
                                        .area_selected{
                                            color: rgb(93, 93, 93);
                                            font-size: 14px;
                                            line-height: 20px;
                                            vertical-align: text-top;
                                            padding: 0 6%;
                                            display: inline-block;
                                        }
                                        .area_select{
                                            transform: rotate(0.25turn);
                                            display: inline-block;
                                            margin: 0 4%;
                                            .icon-jiantou2{
                                                color: rgb(182, 193, 216);
                                                line-height: 20px;
                                                vertical-align: text-top;
                                                cursor: pointer;
                                            }
                                        }
                                        
                                    }
                                    .phone{
                                        background:none;  
                                        outline:none;  
                                        border:0px;
                                        font-size: 14px;
                                        width: 55%;
                                        vertical-align: text-top;
                                    }
                                    .phone::-webkit-input-placeholder{
                                        font-size: 13px;
                                        color: rgb(182, 193, 216);
                                    }
                                }

                                // 区域选择框
                                .areas_box{
                                    position: absolute;
                                    top: 55px;
                                    left: -1px;
                                    width: 100%;
                                    height: 215px;
                                    border: 1px solid rgb(182, 193, 216);
                                    border-radius: 8px;
                                    background-color: white;
                                    z-index: 11;
                                    overflow: hidden;
                                    // color: rgb(182, 193, 216);
                                    .box_header{
                                        background-color: rgba(182, 193, 216, 0.119);
                                        margin: 10px 20px;
                                        border-radius: 4px;
                                        .icon-ic_search24px{
                                            margin: 0 10px;
                                            vertical-align: middle;
                                        }
                                        .box_input{
                                            background:none;  
                                            outline:none;  
                                            border:none;
                                            width: 80%;
                                            font-size: 13px;
                                            line-height: 30px;
                                            
                                        }
                                        .box_input::-webkit-input-placeholder{
                                            font-size: 12px;
                                            line-height: 30px;
                                            color: rgb(182, 193, 216);
                                        }
                                        
                                    }
                                    // ul
                                    .areas_list{
                                        overflow: scroll;
                                        height: 200px;
                                        // overflow: hidden;
                                        // li
                                        .areas_item{
                                            padding: 9px 20px;
                                            position: relative;
                                          
                                            .area_name{
                                                color: rgb(68, 68, 68);
                                                font-size: 12px;
                                                display: inline-block;
                                            }
                                            .area_num{
                                                color: rgb(68, 68, 68);
                                                font-size: 12px;
                                                display: inline-block;
                                                position: absolute;
                                                top: 12px;
                                                right: 20px;
                                            }
                                        }
                                        .areas_item:hover{
                                            background-color: rgba(27, 154, 238, 0.308);
                                        }
                                        .areas_item_blue{
                                            background-color: rgba(27, 154, 238, 0.308);
                                            // top: 0px;
                                        }
                                    }
                                }


                                .pwd_login{
                                    width: 99%;
                                    border: 1px solid rgb(182, 193, 216);
                                    border-radius: 2px;
                                    margin-top: 16px;
                                    color: rgb(182, 193, 216);

                                    .icon-lock{
                                        font-size: 23px;
                                        color: rgb(154, 154, 154);
                                        line-height: 40px;
                                        margin: 3px 0 3px 10px;
                                        display: inline-block;
                                    }
                                    .pwd{
                                        background:none;  
                                        outline:none;  
                                        border:0px;
                                        font-size: 14px;
                                        width: 80%;
                                        margin-left: 6px;
                                        vertical-align: text-top;
                                    }
                                    .pwd::-webkit-input-placeholder{
                                        font-size: 13px;
                                        color: rgb(182, 193, 216);
                                    }
                                }
                            }

                            // 三级权限
                            .third_agree{
                                margin-top: 19px;
                                .agree_p1{
                                    .p1{
                                        font-size: 12px;
                                        color: rgb(52, 62, 76);
                                        display: inline-block;
                                        line-height: 24px;
                                        span{
                                            font-size: 12px;
                                            color: rgb(35, 134, 238);
                                            cursor: pointer;
                                        }
                                    }
                                    .icon{
                                        transform: rotate(0.25turn);
                                        display: inline-block;
                                        .icon-jiantou2{
                                            color: rgb(52, 62, 76);
                                            cursor: pointer;
                                        }
                                    }
                                    
                                }
                                .agree_p2{
                                    font-size: 12px;
                                    color: rgb(153, 153, 153);
                                    margin-top: 2px;
                                    line-height: 20px;

                                }
                                .agree_p3{
                                    margin-top: 8px;
                                    padding-top: 17px;
                                    border-top: 1px dashed rgb(221, 221, 221);
                                    .p3{
                                        .p3_check{
                                            display: inline-block;
                                            vertical-align: text-top;
                                        }
                                        font-size: 12px;
                                        color: rgb(52, 62, 76);
                                        display: inline-block;
                                        line-height: 20px;
                                        span{
                                            font-size: 12px;
                                            color: rgb(35, 134, 238);
                                            cursor: pointer;
                                        }
                                        span:hover{
                                            text-decoration: solid underline  rgb(0, 133, 240) 1px;
                                        }
                                    }
                                }
                            }

                            // 忘记密码
                            .forget_pwd{
                                margin-top: 2px;
                                margin-left: 80%;
                                font-size: 12px;
                                line-height: 20px;
                                color: rgb(52, 62, 76);
                                cursor: pointer;
                            }
                            .forget_pwd:hover{
                                text-decoration: solid underline  rgb(0, 133, 240) 1px;
                                color: rgb(0, 133, 240);
                            }

                            // 授权并登录按钮
                            .login_button{
                                margin-top: 8px;
                                padding: 12px 0;
                                color: rgb(160, 176, 208);
                                font-size: 14px;
                                line-height: normal;
                                background-color: rgb(228, 232, 242);
                                border-radius: 4px;
                                text-align: center;
                            }
                            .login_button_blue{
                                background-color: rgb(0, 133, 240);
                                color: rgb(255, 255, 255);
                            }

                            // 登录方式
                            .login_ways{
                                margin: 32px 5px 10px 5px;
                                .way_text{
                                    color: rgb(74, 74, 74);
                                    font-size: 12px;
                                    line-height: 20px;
                                    display: inline-block;
                                    text-align: center;
                                    width: 33%;
                                    border-right: 1px solid rgb(204, 204, 204);
                                }
                                .way_text:hover{
                                    text-decoration: solid underline  rgb(0, 133, 240) 1px;
                                    color: rgb(0, 133, 240);
                                }
                                .way_email{
                                    color: rgb(74, 74, 74);
                                    font-size: 12px;
                                    line-height: 20px;
                                    display: inline-block;
                                    text-align: center;
                                    width: 33%;
                                    border-right: 1px solid rgb(204, 204, 204);
                                }
                                .way_email:hover{
                                    text-decoration: solid underline  rgb(0, 133, 240) 1px;
                                    color: rgb(0, 133, 240);
                                }
                                .way_username{
                                    color: rgb(74, 74, 74);
                                    font-size: 12px;
                                    line-height: 20px;
                                    display: inline-block;
                                    text-align: center;
                                    width: 33%;
                                }
                                .way_username:hover{
                                    text-decoration: solid underline  rgb(0, 133, 240) 1px;
                                    color: rgb(0, 133, 240);
                                }
                            }
                        }
                    }
                    .login_bottom{
                        margin-bottom: 10px;
                        .logos{
                            margin-top: 70px;
                            text-align: center;
                            .icon-weibo{
                                font-size: 30px;
                                padding: 0 10px;
                                color: rgb(168, 166, 166)
                            }
                            .icon-weibo:hover{
                                color: rgb(242, 127, 38);
                            }
                        }
                        .bottom_p1{
                            text-align: center;
                            margin-top: 20px;
                            .p2_text{
                                color: rgb(179, 187, 209);
                                font-size: 12px;
                            }
                            .p2_text:hover{
                                color: rgb(0, 133, 240);
                            }
                            span{
                                color: rgb(179, 187, 209);
                                font-size: 12px;
                            }
                        }
                        .bottom_p2{
                            margin-top: 7px;
                            text-align: center;
                            
                            .icon-weibo{
                                color: rgb(236, 135, 59);
                                padding: 0 2px;
                            }
                            .p3_text{
                                color: rgb(179, 187, 209);
                                font-size: 12px;
                                padding-left: 10px;
                                text-align: center;
                            }
                            .p3_text:hover{
                                color: rgb(0, 133, 240);
                            }
                        }
                    }
                }
            }
        }

        // 背景动画的切换
        @keyframes frams {
            50%{
                background-image: url("@/assets/login_bg2.jpg");
            }
            100%{
                background-image: url("@/assets/login_bg.jpg");
            }
        }
    }
    

</style>