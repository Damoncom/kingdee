<!-- 首页--------------------------------------------------------- -->
<template>
    <div class="content_warp">
        <div class="content">
            <!-- <div class="header_top">

            </div> -->
            <div class="header_content">

                <!-- 金蝶logo -->
                <img  class="header_logo" src="@/assets/logohei.gif" alt="">

                <!-- 导航栏 -->
                <div class="header_nav" @mouseover="hoverNav">
                    <ul class="header_nav_list"
                        @mouseover="navListEventAgent"
                        @mouseleave="notHoverNav"
                    >
                        <li class="header_nav_item"
                            v-for="(item,index) of navData"

                            :key="index">
                            <!-- 一级导航栏 -->
                            <a  class="nav_item_text"
                                :href="item.href"
                                :data-name="item.name"
                                :data-index="index"
                            >{{ item.name }}
                                <div class="line"></div> 
                            </a>
                            <!-- <div class="line"></div>  -->

                            <!-- 二级导航栏 type1 -->
                            <div class="header_nav_sec_type1"
                                 v-show="item.type == 1 && headerNavShow == true && navActiveIndex == index"
                            >
                            <!-- v-if="item.type == 1 && headerNavShow == true"  -->
                                <ul class="header_nav_sec_left" @mouseover="navSecEventAgent">
                                    <li class="header_sec_left_item"
                                        v-for="(secLeftItem,secLeftIndex) of item.sec_left_Data"
                                        :key="secLeftIndex"
                                        >
                                        <a class="left_item_text"
                                            :href="secLeftItem.href"
                                            :data-name="secLeftItem.name"
                                            :data-index="secLeftIndex"
                                        >{{ secLeftItem.name }}</a>

                                        <!-- 三级导航栏 -->
                                        <ul class="header_nav_sec_right"  
                                            v-show="secActiveIndex == secLeftIndex"
                                            >
                                            <div class="header_sec_left_item_title_text">{{ secLeftItem.titleText }}</div>
                                            <!-- 三级导航栏的项目 -->
                                            <div class="header_sec_right_item_box">
                                                <li class="header_sec_right_item"
                                                    v-for="(secRightItem,secRightIndex) of secLeftItem.sec_right_Data"
                                                    :key="secRightIndex"
                                                    >
                                                    <div class="header_sec_right_item_text">
                                                        <img :src="secRightItem.supply" class="right_item_icon"></img>
                                                        <div class="right_item_text">
                                                            <a  class="right_item_title_text"
                                                                :href="secRightItem.href"
                                                            >{{ secRightItem.name }}</a>
                                                            <div class="right_item_description_text">{{ secRightItem.description }}</div>
                                                        </div>
                                                        
                                                    </div>
                                                </li>
                                            </div>
                                            
                                            <!-- 三级导航栏的更多推荐 type1-->
                                            <div class="header_sec_right_more_text">
                                                <div class="right_item_more_text" v-if="!!secLeftItem.moreText">{{ secLeftItem.moreText }}
                                                    <a :href="secLeftItem.img_href">
                                                        <img :src="secLeftItem.img" class="right_item_more_img">
                                                    </a>
                                                    <a :href="secLeftItem.img_href" v-if="!!secLeftItem.bottomText">{{ secLeftItem.bottomText }}</a>
                                                </div>
                                            </div>        
                                        </ul>
                                    </li>
                                    <!-- 查看更多产品消息 -->
                                    <div class="left_item_more" v-if="index == 0">
                                        <a href="#" class="left_item_more_href">查看所有产品 ></a>
                                        <p class="left_item_more_text">销售热线: 4008-830-830</p>
                                    </div>
                                </ul>
                                <!-- 三级导航栏的更多推荐 type2-->
                                <div class="right_item_more_text2" v-if="!!item.moreText">{{ item.moreText }}
                                    <a :href="item.img_href">
                                        <img :src="item.img">
                                    </a>  
                                    <a :href="item.img_href" v-if="!!item.bottomText">{{ item.bottomText }}</a>
                                </div>
                            </div>
                            <!-- 二级导航栏 type2-->
                            <div class="header_nav_sec_type2"
                                 v-show="item.type == 2 && headerNavShow == true && navActiveIndex == index"
                            >
                            <!-- v-if="item.type == 2 && headerNavShow == true"ƒ -->
                                <ul class="header_nav_sec_left" @mouseover="navSecEventAgent">
                                    <li class="header_sec_left_item"
                                        v-for="(secLeftItem,secLeftIndex) of item.sec_left_Data"
                                        :key="secLeftIndex"
                                        >
                                        <a class="left_item_text"
                                            :href="secLeftItem.href"
                                            :data-name="secLeftItem.name"
                                            :data-index="secLeftIndex"
                                        >{{ secLeftItem.name }}</a>

                                        <!-- 三级导航栏 -->
                                        <ul class="header_nav_sec_right"  
                                            v-show="secActiveIndex == secLeftIndex"
                                            >
                                            <!-- 三级导航栏的项目 -->
                                            <li class="header_sec_right_item"
                                                v-for="(secRightItem,secRightIndex) of secLeftItem.sec_right_Data"
                                                :key="secRightIndex"
                                                >
                                                <div class="header_sec_right_item_text">
                                                    <a  class="right_item_title__text"
                                                        :href="secRightItem.href"
                                                    >{{ secRightItem.name }}</a>
                                                    <div class="right_item_description_text">{{ secRightItem.description }}</div>
                                                    <i :src="secRightItem.relay" class="right_item_icon"></i>
                                                </div>
                                            </li>
                                            <!-- 三级导航栏的更多推荐 type1-->
                                            <div class="header_sec_right_more_text">
                                                <div class="right_item_more_text" v-if="!!secLeftItem.moreText">{{ secLeftItem.moreText }}
                                                    <a :href="secLeftItem.img_href">
                                                        <img :src="secLeftItem.img">
                                                    </a>
                                                    <a :href="secLeftItem.img_href" v-if="!!secLeftItem.bottomText">{{ secLeftItem.bottomText }}</a>
                                                </div>
                                            </div>        
                                        </ul>
                                    </li>
                                </ul>
                                <!-- 三级导航栏的更多推荐 type2-->
                                <div class="right_item_more_text2" v-if="!!item.moreText">{{ item.moreText }}
                                    <a :href="item.img_href">
                                        <img :src="item.img">
                                    </a>  
                                    <a :href="item.img_href" v-if="!!item.bottomText">{{ item.bottomText }}</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="header_right">
                    <!-- 语言选择、登录、注册  -->
                    <div class="header_phone">
                        <div class="header_language_left"
                            @mouseleave="mouseLeaveRegion">
                            <img src="@/assets/earth.svg" alt="language_logo"   @mouseover="mouseOverRegion">
                            <div class="region"  :class=" showRegion ? 'region_hover' : '' "  >
                                <a href="#">简体中文</a>
                                <a href="#">繁体中文</a>
                                <a href="#">English</a>
                            </div>
                        </div>
                        <div class="header_loginAndregister_right">
                            <a href="#" class="header_login_right">
                                登录 
                            </a>
                            <span>|</span>
                            <a href="#" class="header_login_right">
                                注册
                            </a>                      
                        </div>
                    </div>
                    <!-- 购买 -->
                    <div class="header_buy">
                        <img src="@/assets/phone.svg" alt="call" class="icon">
                        <p class="header_buy_call_number">4008-830-830</p>
                        <a href="#" class="header_buy_button">申请体验</a>
                    </div>
                    <!-- 搜索 -->
                    <a href="#" class="header_search">
                        <img src="@/assets/magnifier.svg" alt="">
                    </a>
                </div>

            </div>   
        </div>
    </div>
    
</template>


<script setup>
import { ref } from 'vue'
import '../style.css'
import plan from '@/assets/myqcloud_plan.jpg'
import staff from '@/assets/myqcloud_staff.jpg'
import goout from '@/assets/myqcloud_goout.jpg'
import relay from '@/assets/relay.svg'
import supply from '@/assets/supply_chain.svg'
import { Icon } from 'vant'

   
    // 语言选择、登录、注册  
    const showRegion = ref(false);
    const mouseOverRegion = () => {
        showRegion.value = true;
    };
    const mouseLeaveRegion = () => {
        showRegion.value = false;
        // console.log("🚀 ~ mouseLeaveRegion ~ mouseLeaveRegion:", mouseLeaveRegion);
    };

    // 导航栏数据
    const navData = [
        {
            id:'1',
            name:'产品',
            type:'1',
            sec_left_Data:[
                {
                    id:'1-1',
                    name:'业务领域',
                    href:'#',
                    titleText:'业务领域',
                    sec_right_Data:[
                        {
                            id:'1-1-1',
                            name:'财务云',
                            href:'#',
                            description:'财务和业务高效协同，支撑业务敏捷创新',
                            supply:supply
                        },
                        {
                            id:'1-1-2',
                            name:'税务云',
                            href:'#',
                            description:'“业财税票资档”一体化智慧税务管理',
                            supply:supply
                        },
                        {
                            id:'1-1-3',
                            name:'人力云',
                            href:'#',
                            description:'基于全球领先实践打造的人力资源管理平台',
                            supply:supply
                        },
                        {
                            id:'1-1-4',
                            name:'制造云',
                            href:'#',
                            description:'纵向集成、端到端集成、横向集成',
                            supply:supply
                        },
                        {
                            id:'1-1-5',
                            name:'供应链云',
                            href:'#',
                            description:'实现供应链可视化管理',
                            supply:supply
                        },
                        {
                            id:'1-1-6',
                            name:'星域工业互联网',
                            href:'#',
                            description:'入选国家级“双跨”平台',
                            supply:supply
                        },
                        {
                            id:'1-1-7',
                            name:'全渠道云',
                            href:'#',
                            description:'覆盖电商、零售、渠道、分销全业务场景',
                            supply:supply
                        },
                        {
                            id:'1-1-8',
                            name:'协同办公云',
                            href:'#',
                            description:'协同门户、协同审批、智能签到、知识中心等',
                            supply:supply
                        },
                        {
                            id:'1-1-9',
                            name:'发票云',
                            href:'#',
                            description:'发票管理及协同服务、影像及电子会计档案管理',
                            supply:supply
                        },
                    ],
                    moreText:'',
                    img:'',
                    img_href:'#',
                    bottomText:'' 

                },
                {
                    id:'1-2',
                    name:'企业级AI平台',
                    href:'#',
                    img_href:'#',
                    titleText:'金蝶云·苍穹 企业级AI平台 >',
                    sec_right_Data:[
                        {
                            id:'1-2-1',
                            name:'开发服务云',
                            description:'低代码平台,高敏捷,动态领域模型',
                            supply:supply
                        },
                        {
                            id:'1-2-2',
                            name:'流程服务云',
                            description:'灵活、高效、可靠的流程全生命周期管理',
                            supply:supply
                        },
                        {
                            id:'1-2-3',
                            name:'集成服务云',
                            description:'低代码开发平台和配置平台,可视化配置',
                            supply:supply
                        },
                        {
                            id:'1-2-4',
                            name:'数据服务云',
                            description:'数据分析和数据探索平台',
                            supply:supply
                        },
                        {
                            id:'1-2-5',
                            name:'区块链服务云',
                            description:'低代码模式的“一站式”企业级区块链服务',
                            supply:supply
                        },
                        {
                            id:'1-2-6',
                            name:'AI服务云',
                            description:'实现各场景智能化应用打造企业级AI服务',
                            supply:supply
                        },
                        {
                            id:'1-2-7',
                            name:'RPA服务云',
                            description:'安全、可靠、稳定的虚拟数字员工生产力',
                            supply:supply
                        },
                        {
                            id:'1-2-8',
                            name:'数据中台',
                            description:'原始数据转为数据资产，构建数据服务',
                            supply:supply
                        },
                        {
                            id:'1-2-9',
                            name:'国际化',
                            description:'支持本地化合规，提升海外用户体验',
                            supply:supply
                        },
                        {
                            id:'1-2-10',
                            name:'云基础平台',
                            description:'提供开发、运维一体化管理平台',
                            supply:supply
                        },
                    ],
                    moreText:'热点方案推荐',
                    img:plan,
                    bottomText:''
                    // img:'https://kingdeecms-1323668410.cos.ap-guangzhou.myqcloud.com/u/cms/www/202405/24184405lpmt.jpg'
                    
                },
                {
                    id:'1-3',
                    name:'大型企业',
                    href:'#',
                    img_href:'#',
                    titleText:'金蝶云·星瀚 大型企业SaaS管理云 >',
                    sec_right_Data:[
                        {
                            id:'1-3-1',
                            name:'人力云',
                            description:'激活人人，共建组织韧性',
                            supply:supply
                        },
                        {
                            id:'1-3-2',
                            name:'财务云',
                            description:'重构数字战斗力，助力大企业财务转型',
                            supply:supply
                        },
                        {
                            id:'1-3-3',
                            name:'税务云',
                            description:'“业财税票资档”一体化数字化税控体系',
                            supply:supply
                        },
                        {
                            id:'1-3-4',
                            name:'供应链云',
                            description:'共生商业、智能运营、共享中台',
                            supply:supply
                        },
                        {
                            id:'1-3-5',
                            name:'制造云',
                            description:'精益制造 智能互联 生态协同 数字运营',
                            supply:supply
                        },
                        {
                            id:'1-3-6',
                            name:'营销云',
                            description:'全域营销+数智化协同管理方案',
                            supply:supply
                        },
                        {
                            id:'1-3-7',
                            name:'采购云',
                            description:'降低采购业务成本，增强供应韧性',
                            supply:supply
                        },
                        {
                            id:'1-3-8',
                            name:'协同云',
                            description:'业务协同一体化，提升企业运转效率',
                            supply:supply
                        },
                        {
                            id:'1-3-9',
                            name:'s-HR Cloud',
                            description:'战略决策、社交协作、全员服务、人才',
                            supply:supply
                        },
                        {
                            id:'1-3-10',
                            name:'财务共享',
                            description:'财务共享数字化，提质增效降本',
                            supply:supply
                        },
                        {
                            id:'1-3-11',
                            name:'司库管理',
                            description:'全球司库管理一体化、智能化、实时化',
                            supply:supply
                        },
                        {
                            id:'1-3-12',
                            name:'税务管理',
                            description:'涉税事务自动化，风险管理全程化，服务共享化',
                            supply:supply
                        },
                        {
                            id:'1-3-13',
                            name:'采购管理',
                            description:'采购端到端业务融合，提升采购效率与采购效益',
                            supply:supply
                        },
                        {
                            id:'1-3-14',
                            name:'全面预算',
                            description:'“横向到边，纵向到底”全方位预算管控体系',
                            supply:supply
                        },
                        {
                            id:'1-3-15',
                            name:'营销管理',
                            description:'以订单处理为核心，全流程一体化管控',
                            supply:supply
                        },
                    ],
                    moreText:'新功能推荐',
                    img:staff,
                    bottomText:''
                },
                {
                    id:'1-4',
                    name:'高成长型企业',
                    href:'#',
                    img_href:'#',
                    titleText:'金蝶云·星空旗舰版 新一代成长型企业EBC >',
                    sec_right_Data:[
                        {
                            id:'1-4-1',
                            name:'财务云',
                            description:'智能核算，引领财务管理新高度',
                            supply:supply
                        },
                        {
                            id:'1-4-2',
                            name:'税务云',
                            description:'精准算税，智能报税',
                            supply:supply
                        },
                        {
                            id:'1-4-3',
                            name:'员工服务云',
                            description:'人人可用，重塑企业服务价值',
                            supply:supply
                        },
                        {
                            id:'1-4-4',
                            name:'全渠道云',
                            description:'全域营销+数智化协同管理方案',
                            supply:supply
                        },
                        {
                            id:'1-4-5',
                            name:'采购云',
                            description:'供采双方协同的数智化采购平台',
                            supply:supply
                        },
                        {
                            id:'1-4-6',
                            name:'供应链云',
                            description:'全链路智能协同供应链',
                            supply:supply
                        },
                        {
                            id:'1-4-7',
                            name:'PLM云',
                            description:'基于IPD管理理念的智能研发管理平台',
                            supply:supply
                        },
                        {
                            id:'1-4-8',
                            name:'制造云',
                            description:'智能化制造运营与协同平台',
                            supply:supply
                        },
                        {
                            id:'1-4-9',
                            name:'项目云',
                            description:'引领企业项目管理进入云端新时代',
                            supply:supply
                        },
                        {
                            id:'1-4-10',
                            name:'数据智能云',
                            description:'AI算法引擎，GPT大模型，大数据分析与智能决策平台',
                            supply:supply
                        },
                        {
                            id:'1-4-11',
                            name:'财务云',
                            description:'多组织多核算体系，阿米巴经营会计',
                            supply:supply
                        },
                        {
                            id:'1-4-12',
                            name:'供应链云',
                            description:'数据驱动，智慧运营，产业链共生平台',
                            supply:supply
                        },
                        {
                            id:'1-4-13',
                            name:'全渠道云',
                            description:'掌控通路，直达用户，新营销协同平台',
                            supply:supply
                        },
                        {
                            id:'1-4-14',
                            name:'制造云',
                            description:'数字工厂、个性定制，新智造互联平台',
                            supply:supply
                        },
                        {
                            id:'1-4-15',
                            name:'PLM云',
                            description:'敏捷创新，国内唯-PLM+ERP一体化云平台',
                            supply:supply
                        },
                        {
                            id:'1-4-16',
                            name:'餐饮云',
                            description:'餐饮企业智能化、精细化全价值链集中管控平台',
                            supply:supply
                        },
                        {
                            id:'1-4-17',
                            name:'数据服务云',
                            description:'移动取数，异构数据整合，大数据算法模型',
                            supply:supply
                        },
                    ],
                    moreText:'热点方案推荐',
                    img:goout,
                    bottomText:''
                },
                {
                    id:'1-5',
                    name:'小微型企业',
                    href:'#',
                    img_href:'#',
                    titleText:'金蝶云·星辰 小型企业SaaS管理云 >',
                    sec_right_Data:[
                        {
                            id:'1-5-1',
                            name:'进销存',
                            description:'采购、销售、库存、资金全链路管理',
                            supply:supply
                        },
                        {
                            id:'1-5-2',
                            name:'财税管理',
                            description:'凭证、报表分析、税务等全面管理',
                            supply:supply
                        },
                        {
                            id:'1-5-3',
                            name:'费用报销',
                            description:'实现报销-支付-记账全流程管理，高效便捷',
                            supply:supply
                        },
                        {
                            id:'1-5-4',
                            name:'零售管理',
                            description:'高效收银、精准营销，智能要货配货',
                            supply:supply
                        },
                        {
                            id:'1-5-5',
                            name:'生产管理',
                            description:'提升企业生产效率，实现全流程数字化管控',
                            supply:supply
                        },
                        {
                            id:'1-5-6',
                            name:'电商云',
                            description:'业财税一体化，多平台订单对接及快速处理',
                            supply:supply
                        },
                        {
                            id:'1-5-7',
                            name:'订货商城',
                            description:'将生意搬上互联网，客户自助订货',
                            supply:supply
                        },
                        {
                            id:'1-5-8',
                            name:'云会计',
                            description:'智能财税管理，多端通用',
                            supply:supply
                        },
                        {
                            id:'1-5-9',
                            name:'云进销存',
                            description:'微型智能经营AI助手',
                            supply:supply
                        },
                        {
                            id:'1-5-10',
                            name:'云报销',
                            description:'实现报销-支付-记账全流程管理',
                            supply:supply
                        },
                    ],
                    moreText:'',
                    img:'',
                    bottomText:'' 
                }
            ]
        },
        {
            id:'2',
            name:'行业解决方案',
            type:'1',
            sec_left_Data:[
                {
                    id:'2-1',
                    name:'热点方案',
                    sec_right_Data:[
                        {
                            id:'2-1-1',
                            name:'企业级AI平台解决方案',
                            href:'#',
                        },
                        {
                            id:'2-1-2',
                            name:'企业出海数字化方案',
                            href:'#',
                        },
                        {
                            id:'2-1-3',
                            name:'央国企数字化解决方案',
                            href:'#',
                        },
                        {
                            id:'2-1-4',
                            name:'专精特新企业数字化方案',
                            href:'#',
                        },
                        {
                            id:'2-1-5',
                            name:'数字化转型方法论',
                            href:'#',
                        },
                        {
                            id:'2-1-6',
                            name:'小微企业业财税一体化方案',
                            href:'#',
                        },
                        {
                            id:'2-1-7',
                            name:'EBC 下一代ERP',
                            href:'#',
                        },
                        {
                            id:'2-1-8',
                            name:'协同办公云',
                            href:'#',
                        },
                        {
                            id:'2-1-9',
                            name:'企业IPO解决方案',
                            href:'#',
                        },
                    ],
                    moreText:'热点方案推荐',
                    img:plan,
                    img_href:'#', 
                    bottomText:''
                },
                {
                    id:'2-2',
                    name:'行业方案',
                    img_href:'#',
                    sec_right_Data:[
                        {
                            id:'2-2-1',
                            name:'装备制造',
                            href:'#',
                        },
                        {
                            id:'2-2-2',
                            name:'建筑行业',
                            href:'#',
                        },
                        {
                            id:'2-2-3',
                            name:'医药流通',
                            href:'#',
                        },
                        {
                            id:'2-2-4',
                            name:'汽配行业',
                            href:'#',
                        },
                        {
                            id:'2-2-5',
                            name:'钢铁冶金',
                            href:'#',
                        },
                        {
                            id:'2-2-6',
                            name:'交通与物流',
                            href:'#',
                        },
                        {
                            id:'2-2-7',
                            name:'制药行业',
                            href:'#',
                        },
                        {
                            id:'2-2-8',
                            name:'日化日用品',
                            href:'#',
                        },
                        {
                            id:'2-2-9',
                            name:'流程制造',
                            href:'#',
                        },
                        {
                            id:'2-2-10',
                            name:'批发与零售',
                            href:'#',
                        },
                        {
                            id:'2-2-11',
                            name:'现代农牧',
                            href:'#',
                        },
                        {
                            id:'2-2-12',
                            name:'电子半导体',
                            href:'#',
                        },
                        {
                            id:'2-2-13',
                            name:'房地产行业',
                            href:'#',
                        },
                        {
                            id:'2-2-14',
                            name:'能源与资源',
                            href:'#',
                        },
                        {
                            id:'2-2-15',
                            name:'食品饮料',
                            href:'#',
                        },
                        {
                            id:'2-2-16',
                            name:'餐饮行业',
                            href:'#',
                        },
                    ],
                    moreText:'',
                    img:'',
                    bottomText:''
                },
            ]
        },
        {
            id:'3',
            name:'标杆案例',
            href:'#',
        },
        {
            id:'4',
            name:'服务支持',
            type:'2',
            sec_left_Data:[
                {
                    id:'4-1',
                    name:'关于客户成功',
                    img_href:'#',
                    sec_right_Data:[
                        {
                            id:'4-1-1',
                            name:'客户成功体系',
                            href:'#',
                        }
                    ],
                    moreText:'',
                    img:''  
                },
                {
                    id:'4-2',
                    name:'客户成功服务',
                    img_href:'#',
                    sec_right_Data:[
                        {
                            id:'4-2-1',
                            name:'服务产品与方案',
                            href:'#',
                        },
                        {
                            id:'4-2-2',
                            name:'我的服务',
                            href:'#',
                        },
                        {
                            id:'4-2-3',
                            name:'金蝶云社区',
                            href:'#',
                            relay:relay
                        }
                    ],
                    moreText:'',
                    img:''
                },
                {
                    id:'4-3',
                    name:'赋能与认证',
                    img_href:'#',
                    sec_right_Data:[
                        {
                            id:'4-3-1',
                            name:'金蝶认证',
                            href:'#',
                        },
                        {
                            id:'4-3-2',
                            name:'数字化人才赋能',
                            href:'#',
                            relay:relay
                        },
                        {
                            id:'4-3-3',
                            name:'数字化转型工作坊',
                            href:'#',
                        }
                    ],
                    moreText:'',
                    img:''  
                },
                {
                    id:'4-4',
                    name:'公告',
                    img_href:'#',
                    sec_right_Data:[
                        {
                            id:'4-4-1',
                            name:'服务公告',
                            href:'#',
                        },
                        {
                            id:'4-4-2',
                            name:'产品生命周期',
                            href:'#',
                        },
                        {
                            id:'4-4-3',
                            name:'安全通告',
                            href:'#',
                            relay:relay
                        }
                    ],
                    moreText:'',
                    img:''
                },
            ],
            moreText:'',
            img:'',
            img_href:'#', 
            bottomText:''
        },
        {
            id:'5',
            name:'应用市场',
            href:'#',
        },
        {
            id:'6',
            name:'生态伙伴与开发者',
            type:'2',
            sec_left_Data:[
                {
                    id:'6-1',
                    name:'成为合作伙伴',
                    img_href:'#',
                    sec_right_Data:[
                        {
                            id:'6-1-1',
                            name:'金蝶伙伴体系',
                            href:'#',
                        },
                        {
                            id:'6-1-2',
                            name:'营销服务伙伴',
                            href:'#',
                        },
                        {
                            id:'6-1-3',
                            name:'专业服务伙伴',
                            href:'#',
                        },
                        {
                            id:'6-1-4',
                            name:'独立软件开发',
                            href:'#',
                        },
                        {
                            id:'6-1-5',
                            name:'技术平台伙伴',
                            href:'#',
                        },
                        {
                            id:'6-1-6',
                            name:'院校联盟',
                            href:'#',
                        }
                    ],
                    moreText:'',
                    img:''  
                },
                {
                    id:'6-2',
                    name:'查询合作伙伴',
                    img_href:'#',
                    sec_right_Data:[
                        {
                            id:'6-2-1',
                            name:'伙伴资质查询',
                            href:'#',
                        }
                    ],
                    moreText:'',
                    img:''
                },
                {
                    id:'6-3',
                    name:'开发者',
                    img_href:'#',
                    sec_right_Data:[
                        {
                            id:'6-3-1',
                            name:'开发文档',
                            href:'#',
                        },
                        {
                            id:'6-3-2',
                            name:'工具与资源',
                            href:'#',
                        },
                        {
                            id:'6-3-3',
                            name:'在线课程',
                            href:'#',
                        },
                        {
                            id:'6-3-4',
                            name:'开发者社区',
                            href:'#',
                        },
                        {
                            id:'6-3-5',
                            name:'开发者大赛',
                            href:'#',
                        },
                        {
                            id:'6-3-6',
                            name:'数字化转型工作坊',
                            href:'#',
                        }
                    ],
                    moreText:'',
                    img:''  
                },
                {
                    id:'6-4',
                    name:'技术与赋能',
                    img_href:'#',
                    sec_right_Data:[
                        {
                            id:'6-4-1',
                            name:'伙伴生态圈',
                            href:'#',
                        }
                    ],
                    moreText:'',
                    img:''
                },
            ],
            moreText:'开发者大赛',
            img:plan,
            img_href:'#', 
            bottomText:'第六届金蝶云·苍穹追光者开发大赛'
        },
        {
            id:'7',
            name:'关于金蝶',
            type:'2',
            sec_left_Data:[
                {
                    id:'7-1',
                    name:'了解金蝶',
                    img_href:'#',
                    sec_right_Data:[
                        {
                            id:'7-1-1',
                            name:'集团介绍',
                            href:'#',
                        },
                        {
                            id:'7-1-2',
                            name:'董事及管理层',
                            href:'#',
                        },
                        {
                            id:'7-1-3',
                            name:'发展历程',
                            href:'#',
                        },
                        {
                            id:'7-1-4',
                            name:'公司荣誉',
                            href:'#',
                        },
                        {
                            id:'7-1-5',
                            name:'社会责任',
                            href:'#',
                        },
                        {
                            id:'7-1-6',
                            name:'信任中心',
                            href:'#',
                        }
                    ],
                    moreText:'',
                    img:''  
                },
                {
                    id:'7-2',
                    name:'新闻与活动',
                    img_href:'#',
                    sec_right_Data:[
                        {
                            id:'7-2-1',
                            name:'新闻动态',
                            href:'#',
                        },
                        {
                            id:'7-2-2',
                            name:'市场活动',
                            href:'#',
                        },
                        {
                            id:'7-2-3',
                            name:'媒体报道',
                            href:'#',
                        },
                        {
                            id:'7-2-4',
                            name:'社交媒体',
                            href:'#',
                        }
                    ],
                    moreText:'',
                    img:''  
                },
                {
                    id:'7-3',
                    name:'中国管理模式',
                    img_href:'#',
                    sec_right_Data:[
                        {
                            id:'7-3-1',
                            name:'中国管理模式杰出奖',
                            href:'#',
                        },
                        {
                            id:'7-3-2',
                            name:'十三届中国管理全球论坛',
                            href:'#',
                        },
                        {
                            id:'7-3-3',
                            name:'十二届中国管理全球论坛',
                            href:'#',
                        },
                        {
                            id:'7-3-4',
                            name:'十一届中国管理全球论坛',
                            href:'#',
                        },
                        {
                            id:'7-3-5',
                            name:'十届中国管理全球论坛',
                            href:'#',
                        }
                    ],
                    moreText:'',
                    img:''  
                },
                {
                    id:'7-4',
                    name:'创见者大会',
                    img_href:'#',
                    sec_right_Data:[
                        {
                            id:'7-4-1',
                            name:'关于创见者',
                            href:'#',
                        },
                        {
                            id:'7-4-2',
                            name:'2023全球创见者大会',
                            href:'#',
                        },
                        {
                            id:'7-4-3',
                            name:'2022全球创见者大会',
                            href:'#',
                        },
                        {
                            id:'7-4-4',
                            name:'2021全球创见者大会',
                            href:'#',
                        }
                    ],
                    moreText:'',
                    img:''  
                },
                {
                    id:'7-5',
                    name:'ESG',
                    img_href:'#',
                    sec_right_Data:[
                        {
                            id:'7-5-1',
                            name:'ESG报告',
                            href:'#',
                        }
                    ],
                    moreText:'',
                    img:''  
                },
                {
                    id:'7-6',
                    name:'投资者关系',
                    img_href:'#',
                    sec_right_Data:[
                        {
                            id:'7-6-1',
                            name:'投资者关系主页',
                            href:'#',
                            relay:relay
                        },
                        {
                            id:'7-6-2',
                            name:'公告与通函',
                            href:'#',
                            relay:relay
                        },
                        {
                            id:'7-6-3',
                            name:'财务报告',
                            href:'#',
                            relay:relay
                        },
                        {
                            id:'7-6-4',
                            name:'股票信息',
                            href:'#',
                            relay:relay
                        }
                    ],
                    moreText:'',
                    img:''  
                },
                {
                    id:'7-7',
                    name:'金蝶招聘',
                    img_href:'#',
                    sec_right_Data:[
                        {
                            id:'7-7-1',
                            name:'校园招聘',
                            href:'#',
                            relay:relay
                        },
                        {
                            id:'7-7-2',
                            name:'社会招聘',
                            href:'#',
                        },
                        {
                            id:'7-7-3',
                            name:'成长与发展',
                            href:'#',
                        },
                        {
                            id:'7-7-4',
                            name:'生活在金蝶',
                            href:'#',
                        }
                    ],
                    moreText:'',
                    img:''  
                },
                {
                    id:'7-8',
                    name:'联系我们',
                    img_href:'#',
                    sec_right_Data:[
                        {
                            id:'7-8-1',
                            name:'总部及分支',
                            href:'#',
                        },
                        {
                            id:'7-8-2',
                            name:'购买与咨询',
                            href:'#',
                        }
                    ],
                    moreText:'',
                    img:''  
                },
            ],
            moreText:'',
            img:'',
            img_href:'#', 
            bottomText:''
        }
    ];

    // 导航栏显示-------------
    // 一级导航栏的显示
    let headerNavShow = ref(false);
    const hoverNav = () => {
        headerNavShow.value = true;
        // console.log(headerNavShow.value);
    }
    const notHoverNav = () => {
        headerNavShow.value = false;
        // console.log(headerNavShow.value);
    }
    // 一级导航栏-->二级导航栏
    let navActiveIndex = ref(0);
    let hoverNavIndex;
    let navClassName;
    const navListEventAgent = (event) => {
        hoverNavIndex = event.target.dataset.index;
        navClassName = event.target.className;
        if( +hoverNavIndex != NaN && navClassName == 'nav_item_text'){
            navActiveIndex.value = +hoverNavIndex;
        }
        // console.log(event.target.dataset.index)
        // console.log(navActiveIndex.value)
    }
    // 二级导航栏-->三级导航栏
    let secActiveIndex = ref(0);
    let hoverSecIndex;
    let secClassName;
    const navSecEventAgent = (event) => {
        hoverSecIndex = event.target.dataset.index;
        secClassName = event.target.className;
        if( +hoverSecIndex != NaN && secClassName == 'left_item_text'){
            secActiveIndex.value = +hoverSecIndex;
        }
        // console.log(event.target.className)
        // console.log(secClassName)
        // console.log(+hoverSecIndex)
        // console.log(event.target.dataset.index)
        // console.log(secActiveIndex.value)
    }
    // let secShowIndex;
    // const navSecEventAgent = (event) => {
    //     const hoverSecIndex = event.target.dataset.index;
    //     secShowIndex = hoverSecIndex;
    //     console.log("🚀 ~ eventAgent ~ hoverSecIndex:", hoverSecIndex);
    //     console.log("二级title："+secShowIndex);
    // }


    

</script>


<style lang="scss" scoped>
    // 总体布局
    .content_warp, body{
        width: 100%;
        min-height: 100vh;
        // background-color: antiquewhite;
        .content{
            width: 1080px;
            min-width: 800px;
            margin: 0 auto;
            min-height: 100vh; 
            // background-color: rgb(215, 250, 219);   
        }

        // @media screen and (min-width: 600px){
        //     .content{
        //         width: 600px;
        //     }
        // }
        // @media screen and (min-width: 800px){
        //     .content{
        //         width: 900px;
        //     }
        // }
        @media screen and (min-width: 1000px){
            .content{
                width: 1200px;
            }
        }
        @media screen and (min-width: 1280px){
            .content{
                width: 1360px;
            }
        }
        @media screen and (min-width: 2200px){
            .content{
                width: 2000px;
            }
        }

        a {
            text-decoration: none; 
            outline: none;	
            color: rgb(0, 0, 0);	
        }

    }
    
    // header部分
    .header_top{
        height: 11px;
        background-color: white;
    }

    .header_content{
        position: relative;
        clear: both;;
        line-height: 100px;

        // 金蝶logo
        .header_logo{
            display: inline-block;
            height: 31.5%;
            padding-top: 27px;
            padding-left: 2.36%;
            position: absolute;
            z-index: 999;
            
        }

        // 导航栏
        .header_nav{
            display: inline-block;
            height: 100px;
            padding: -20px 0 0 0;
            margin-left: 15.6%;

            // 一级导航栏的ul
            .header_nav_list{
                position: relative;
                display: inline-block;
                margin-top: 15px;

                // 一级导航栏的li
                .header_nav_item{
                    position: relative;
                    display: inline-block;
                    font-size: 14px;

                    // 一级导航栏的a（文本部分：产品、行业解决方案……）
                    .nav_item_text{
                        color: rgb(37, 43, 58);
                        padding: 0px 10px;
                        margin: 0 0 0 0;
                        display: inline-block;
                        overflow: hidden;

                        // 一级导航鼠标悬停事件——蓝色下划线动画
                        .line{
                            position: absolute;
                            top: 86px;
                            bottom: 0;
                            width: 0%;
                            height: 2px;
                            left: 50%;
                            border-bottom: 2px rgb(19, 120, 228) solid;
                            transition: all 0.2s ease-in-out;
                        }
                        // border-bottom动画
                        &:hover .line{
                            width: 100%;
                            left: 0;
                        }
                    }    
                }
            }


            // 二级导航栏在左 + 三级导航栏在右 的布局
            .header_nav_sec_type1{
                // background-color: rgb(173, 230, 191);
                background-color: rgb(246, 247, 251);
                position: absolute;
                top: 90px;
                width: 1190px;
                left: -158px;
                height: 480px;
                border-top: 1px solid rgb(229, 232, 237);
                box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px 0px;

                // 二级导航栏的ul
                .header_nav_sec_left{
                    height: 480px;
                    // 二级导航栏的li
                    .header_sec_left_item{
                        height: 58px;
                        line-height: 20px;

                        // 二级导航栏的a(文本：业务领域……)
                        .left_item_text{
                            display: inline-block;
                            width: 237px;
                            background-color: rgb(246, 247, 251);
                            line-height: 58px;
                            padding: 0 0 0px 36px;
                            font-size: 18px;
                            color: rgb(37, 43, 58);
                           
                        }
                        .left_item_text:hover{
                            background-color: white;
                            color: rgb(0, 104, 221);
                        }
                        .left_item_more{
                            display: inline-block;
                        }

                        // 三级导航栏的ul
                        .header_nav_sec_right{
                            background-color: rgb(255, 255, 255);
                            display: inline-block;
                            height: 480px;
                            width: 916px;
                            position: absolute;
                            top: 0px;
                            overflow: scroll;

                            // 三级导航栏的li大标题
                            .header_sec_left_item_title_text{
                                color: rgb(0, 0, 0);
                                line-height: 55px;
                                font-size: 18px;
                                padding-left: 21px;
                                // background-color: pink;
                            }
                            // 三级导航栏的li
                            .header_sec_right_item_box{
                                display: inline-block;
                                width: 100%;
                                // background-color: rgb(230, 171, 20);

                                .header_sec_right_item{
                                    // border: 1px solid yellow;
                                    display: inline-block;
                                    white-space: pre-wrap;
                                    line-height: 25px;
                                    width: 50%;
                                    padding: 10px 0 38px 0;
                                    
                                    .header_sec_right_item_text{

                                        // 三级导航栏的后置icon
                                        .right_item_icon{
                                            display: inline-block;
                                            width: 50px;
                                            height: 61px;
                                            padding-left: 21px;
                                           
                                        }
                                        .right_item_text{
                                            display: inline-block;
                                            margin-left: 20px;

                                            // 三级导航栏的li标题
                                            .right_item_title_text{
                                                color: rgb(37, 43, 58);
                                                font-size: 16px;
                                            }
                                            // 三级导航栏的li描述
                                            .right_item_description_text{
                                                color: rgb(170, 170, 170);
                                                font-size: 14px;
                                            }
                                        }
                                        .right_item_title_text:hover{
                                            color: rgb(0, 104, 221);
                                        }
                                        
                                    }
                                }
                            }
                            
                            // 三级导航栏最右侧的更多推荐板块
                            .header_sec_right_more_text{
                                display: inline-block;
                                position: absolute;
                                top: 0px;
                                // 更多推荐标题
                                .right_item_more_text{
                                    color: rgb(37, 43, 58);
                                    font-size: 16px;
                                    display: block;
                                    // 更多推荐图片
                                    .right_item_more_img{
                                        display: block;
                                        height: 200px;
                                    }
                                }
                            }
                        }
                    }
                    // 查看更多产品消息
                    .left_item_more{
                        display: inline-block;
                        line-height: 30px;
                        margin: 81px 0 10px 37px;
                        .left_item_more_href{
                            color: rgb(0, 0, 0);
                            font-size: 15px;
                        }
                        .left_item_more_href:hover{
                            color: rgb(0, 104, 221);
                        }
                        .left_item_more_text{
                            padding-top: 2px;
                            color: rgb(47, 52, 63);
                            font-size: 12px;
                        }
                    }
                }
                .header_nav_sec_right{
                    background-color: rgb(208, 101, 85);
                }
                .right_item_more_text{
                    background-color: aqua;
                }
                .right_item_more_text2{
                    background-color: pink;
                }
            }

            // 二级导航栏在上 + 三级导航栏在下 的布局
            .header_nav_sec_type2{
                background-color: rgb(173, 230, 191);
                position: absolute;
                top: 60px;
                .header_nav_sec_right{
                    background-color: rgb(184, 127, 230);
                }
                .right_item_more_text{
                    background-color: aqua;
                }
                .right_item_more_text2{
                    background-color: pink;
                }
            }
            
            
        }

        // 地球语言下拉栏、登录注册、电话、申请体验按钮、搜索
        .header_right{
            position: absolute;
            right: 0;
            top: 15px;
            
            // 联系方式
            .header_phone{
                position: absolute;
                z-index:99;
                display: inline-block;
                right: 0px;
                top: -40px;
                line-height: 50px;

                // 地球语言选择下拉
                .header_language_left{
                    position: relative;
                    display: inline-block;
                    height: 50px;
                    img{
                        width: 26px;
                        height: 26px;
                        padding: 12px;
                        display: inline-block;
                        position: relative;
                        top: 16px;
                        margin: 5px 6px 0 0;
                    }
                    .region{
                        position: absolute;
                        background-color: rgb(255, 255, 255);
                        width: 96px;
                        height: 0px;
                        left: 50%;
                        margin-left: -48px;
                        top: 60px;
                        color: rgb(87, 93, 108);
                        font-family: PingFangM, Arial, sans-serif;
                        font-size: 14px;
                        box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px 0px;
                        transition: all 0.5s ease-out;
                        overflow: hidden;
                        z-index: 999;
                        a{
                            display: block;
                            text-align: center;
                            height: 50px;
                            line-height: 50px;
                        }
                       
                    }
                    .region_hover{
                        height: 150px;
                    }
                    a:hover{
                        color: white;
                        background-color: rgb(33, 131, 233);
                    }
                }

                // 登录和注册
                .header_loginAndregister_right{
                    display: inline-block;
                    padding-right: 26px;
                    .header_login_right{
                        padding: 0 5px;
                        display: inline-block;
                        color: rgb(87, 93, 108);
                        font-size: 14px;
                    }
                    span{
                        color: rgb(87, 93, 108);
                        font-size: 14px;
                    }
                }
            }

            // 金蝶购买
            .header_buy{
                display: inline-block;
                line-height: 40px;

                // 电话图标
                .icon{
                    width: 23px;
                    height: 33px;
                    transform: rotate(-14deg);
                    position: relative;
                    top: 10px; // 强行修复位置
                }

                // 电话号码
                .header_buy_call_number{
                    width: auto;
                    font-size: 14px;
                    // padding-top: 13px;
                    display: inline-block;
                    color: rgb(87, 93, 108);
                    padding: 0px 25px 0px 5px;
                    height: 40px;
                }

                // 申请体验按钮
                .header_buy_button{
                    color: rgb(0, 104, 221);
                    background-color: white;
                    border: 1px solid rgba(133, 154, 184, 0.3);
                    border-radius: 5px;
                    padding: 0px 20px;
                    text-align: center;
                    display: inline-block;
                    font-size: 14px;
                    margin: 0 3px 0 0;
                }
                .header_buy_button:hover{
                    background: repeating-linear-gradient(to right,rgb(0, 104, 221),rgb(87, 167, 213));
                    color: white;
                }
            }

            // 搜索
            .header_search{
                display: inline-block;
                line-height: 40px;
                height: 40px;
                img{
                    position: relative;
                    top: 18px;
                    width: 23px;
                    height: 23px;
                    padding: 10px 28px;
                    display: inline-block;
                }
            }
        }
       
    }
   
   
    


// 全文范围内的type='1',是指header_nav_sec_type1（二级导航栏在左+三级导航栏在右）的布局
// 全文范围内的type='2',是指header_nav_sec_type2（二级导航栏在上+三级导航栏在下）的布局

</style>








