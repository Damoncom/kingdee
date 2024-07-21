<!-- 首页--------------------------------------------------------- -->
<template>
    <div class="content_warp">
        <div class="content">

            <!-- header部分 -->
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

                            <!-- 二级导航栏 type1 -->
                            <div class="header_nav_sec_type1"
                                 v-show="item.type == 1 && headerNavShow == true && navActiveIndex == index"
                                 :class="index == 1 ? 'box2' : 'header_nav_sec_type1' "
                            >
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
                                        <Simplebar class="header_nav_sec_right"  
                                            v-show="secActiveIndex == secLeftIndex"
                                            >
                                            <!-- @mouseover="hoverKeep" -->
                                            <div class="bigBox" 
                                                :class="!!secLeftItem.moreText ? 'box1' : 'bigbox' "
                                            >
                                                <div class="header_sec_left_item_title_text">{{ secLeftItem.titleText }}</div>
                                                <!-- 三级导航栏的项目 -->
                                                <!-- type3 -->
                                                <div class="header_sec_right_item_box_type3" 
                                                    v-show="secLeftItem.type == 3"
                                                    >
                                                    <li class="header_sec_right_item"
                                                        v-for="(secRightItem,secRightIndex) of secLeftItem.sec_right_Data"
                                                        :key="secRightIndex"
                                                        >
                                                        <div class="header_sec_right_item_text">
                                                            <img :src="secRightItem.supply" class="right_item_icon" v-if="!!secRightItem.supply"></img>
                                                            <div class="right_item_text">
                                                                <a  class="right_item_title_text"
                                                                    :href="secRightItem.href"
                                                                >{{ secRightItem.name }}</a>
                                                                <div class="right_item_description_text">{{ secRightItem.description }}</div>
                                                            </div>   
                                                        </div>
                                                    </li>
                                                </div>
                                                <!-- type4 -->
                                                <div class="header_sec_right_item_box_type4" v-show="secLeftItem.type == 4">
                                                    <li class="header_sec_right_item"
                                                        v-for="(secRightItem,secRightIndex) of secLeftItem.sec_right_Data"
                                                        :key="secRightIndex"
                                                        >
                                                        <div class="header_sec_right_item_text">
                                                            <div class="right_item_icontitle">
                                                                <div class="right_item_icon_box">
                                                                    <img :src="secRightItem.supply" class="right_item_icon" v-if="!!secRightItem.supply"></img>
                                                                </div>
                                                                <div class="right_item_text">
                                                                    <a  class="right_item_title_text"
                                                                        :href="secRightItem.href"
                                                                    >{{ secRightItem.name }}</a>
                                                                </div> 
                                                            </div>
                                                            <div class="right_item_description_text">{{ secRightItem.description }}</div>   
                                                        </div>
                                                    </li>
                                                </div>
                                                <!-- type5 -->
                                                <div class="header_sec_right_item_box_type5" v-show="secLeftItem.type == 5">
                                                    <li class="header_sec_right_item"
                                                        v-for="(secRightItem,secRightIndex) of secLeftItem.sec_right_Data"
                                                        :key="secRightIndex"
                                                        >
                                                        <div class="right_item_text">
                                                            <a  class="right_item_title_text"
                                                                :href="secRightItem.href"
                                                            >{{ secRightItem.name }}</a>
                                                        </div> 
                                                    </li>
                                                </div>
                                                <!-- type6 -->
                                                <div class="header_sec_right_item_box_type6" v-show="secLeftItem.type == 6">
                                                    <li class="header_sec_right_item"
                                                        v-for="(secRightItem,secRightIndex) of secLeftItem.sec_right_Data"
                                                        :key="secRightIndex"
                                                        >
                                                        <div class="right_item_text">
                                                            <a  class="right_item_title_text"
                                                                :href="secRightItem.href"
                                                            >{{ secRightItem.name }}</a>
                                                        </div> 
                                                    </li>
                                                </div>

                                            </div>
                                            
                                            
                                            <!-- 三级导航栏的更多推荐 type1-->
                                            <div class="header_sec_right_more_text">
                                                <div class="right_item_more_border" v-if="!!secLeftItem.moreText"></div>
                                                <div class="right_item_more_text" v-if="!!secLeftItem.moreText">{{ secLeftItem.moreText }} >
                                                    <a :href="secLeftItem.img_href">
                                                        <img :src="secLeftItem.img" class="right_item_more_img">
                                                    </a>
                                                    <a :href="secLeftItem.img_href" v-if="!!secLeftItem.bottomText">{{ secLeftItem.bottomText }}</a>
                                                </div>
                                            </div>        
                                        </Simplebar>
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
                                 :style="{left:(index == 5 ? '-490px' : '-310px')}"
                                 :class="index == 5 ? 'box3' : 'header_nav_sec_type2'"
                            >
                            <!-- :class="index == 6 ? 'box3' : 'header_nav_sec_type2' " -->
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
                                        <ul class="header_nav_sec_right">
                                            <!-- 三级导航栏的项目 -->
                                            <li class="header_sec_right_item"
                                                v-for="(secRightItem,secRightIndex) of secLeftItem.sec_right_Data"
                                                :key="secRightIndex"
                                                >
                                                <div class="right_item_text">
                                                    <a  class="right_item_title_text"
                                                        :href="secRightItem.href"
                                                    >{{ secRightItem.name }}</a>
                                                    <img :src="secRightItem.relay" class="right_item_icon" v-if="!!secRightItem.relay"></img>
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
                                <div class="right_item_more_text2" v-if="!!item.moreText">
                                    <p class="right_item_more_text">{{ item.moreText }}</p>
                                    <a :href="item.img_href" class="right_item_more_img_box">
                                        <img :src="item.img" class="right_item_more_img">
                                    </a>  
                                    <a :href="item.img_href" 
                                        class="right_item_more_dirText"
                                        v-if="!!item.bottomText">{{ item.bottomText }}</a>
                                </div>
                                
                            </div>
                        </li>
                    </ul>
                </div>

                <!-- 地球语言下拉选择、登录注册、购买电话、申请体验、搜索 -->
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
            
            <!-- 内容部分 -->
            <div class="content_content">

                <!-- 大标题、介绍、方案详情按钮 -->
                <div class="content_introduction">
                    <h2 class="content_title">企业级AI平台解决方案</h2>
                    <p class="content_discrition">新一代企业级AI平台，携超级智能AI管理助手Cosmic，集感知、思考、行动、智能响应于一体，简化企业管理，提高运营效率，随时在线，随时待命</p>
                    <div class="content_button">
                        <a href="#" class="content_product_link">
                            <p class="text">方案详情</p>
                            <p class="icon">></p>
                        </a>
                    </div>
                </div>
                
                <!-- 背景图片 -->
                <div class="content_image_box">
                    <img class="content_image"src="@/assets/bkImage.jpg">
                </div>

                <!-- 资讯导航 -->
                <div class="content_infoNav">
                    <div class="content_infoNav_box">
                        <div class="content_infoNav_title">
                            <div class="infoNav_title_text">更多热点推荐</div>
                            <div class="infoNav_title_arrow">
                                <img src="@/assets/arrow_right.svg" class="arrow_img">
                            </div>
                        </div>
                        <ul class="content_infoNav_list">
                            <li v-for="(infoNav,infoNav_index) of infoNavList" 
                                :key="infoNav_index"
                                class="infoNav_list"
                                >
                                <a :href="infoNav.href"
                                    class="infoNav_list_title"
                                >{{ infoNav.name }}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- 热点关注 -->
                <div class="content_hotSpot">
                    <div class="hotSpot" 
                        v-for="(hotSpot,hotSpot_index) of hotSpotList" 
                        :key="hotSpot_index"
                    >
                        <a href="#" 
                            class="hotSpot_box"
                            @mouseover="changeColor"
                            @mouseleave="notChangeColor"
                        >
                            <div class="hotSpot_imgBox">
                                <img :src="hotSpot.href" class="hotSpot_img">
                            </div>
                            <div class="hotSpot_text_box">
                                <div class="hotSpot_text">
                                    <div class="hotSpot_title">{{ hotSpot.name }}</div>
                                    <div class="hotSpot_discrition">{{ hotSpot.discrition }}</div>
                                    <div class="hotSpot_moreBox">
                                        <div class="hotSpot_more_text">{{ hotSpot.more }}</div>
                                        <div class="hotSpot_more_arrow">
                                            <i class="iconfont icon-youjiantou"></i>
                                        </div>
                                    </div>    
                                </div>
                            </div>
                            
                        </a>
                    </div>
                </div>

                <!-- 金蝶云产品 -->
                <div class="content_cloudpro">
                    <div class="wraper">
                        <!-- 标题部分 -->
                        <div class="content_cloudpro_title">
                            <h2 class="title">金蝶云产品能为您做什么</h2>
                        </div>
                        <!-- tabnav导航栏部分 -->
                        <div class="content_cloudpro_tabnav">
                            <ul class="tabnav_list"
                                @mouseover="tabnavListEventAgent"
                            >
                                <li class="tabnav_item"
                                    v-for="(tabnav,tabnav_index) of tabnavList"
                                    :key="tabnav_index"
                                >
                                    <a  class="tabnav_href"
                                        :href="tabnav.href"
                                        :data-name="tabnav.name"
                                        :data-index="tabnav_index"
                                    >{{tabnav.name}}</a>
                                </li>
                            </ul>
                        </div>
                        <!-- 内容部分 -->
                        <div class="content_cloudpro_cont">
                            <div class="content_cloudpro_cont_box" v-show="tabActiveIndex == 0">
                                <!-- 左侧内容 -->
                                <div class="cont_box_left">
                                    <div class="cont_logo">
                                        <img src="@/assets/info_img1.jpg" class="logo_img">
                                    </div>
                                    <div class="cont_title">
                                        <p class="title_text">企业级AI平台</p>
                                    </div>
                                    <div class="cont_discrition">
                                        <p class="title_discrition">基于企业级云原生架构打造的数字战斗力引擎，为企业提供多场景、多层次的数字化支撑，帮助企业快速构建强大的业务创新能力和中台架构，是EBC最佳的落地实践平台</p>
                                    </div>
                                    <div class="cont_product-link">
                                        <a href="#" class="product_link">
                                            <p class="text">方案详情</p>
                                            <p class="icon">></p>
                                        </a>
                                        <a href="#" class="product_link2">
                                            <p class="text">预约演示</p>
                                            <p class="icon">></p>
                                        </a>
                                    </div>
                                    <div class="cont_product-label">
                                        <ul class="product_list">
                                            <li class="product_item"
                                                v-for="(product,product_index) of productList1"
                                                :key="product_index"
                                            >
                                                <a :href="product.href">{{ product.name }}</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- 右侧内容 -->
                                <div class="cont_box_right">
                                    <div class="cont_imgBox">
                                        <img src="@/assets/tabnav_img1.jpg" class="img">
                                    </div>
                                    <div class="cont_content">
                                        <div class="content_text">
                                            <ul class="content_list">
                                                <li class="content_item"
                                                    v-for="(content,content_index) of contentList1"
                                                    :key="content_index"
                                                >
                                                    <p class="item_num">{{ content.num }}</p>
                                                    <p class="item_name">{{ content.name }}</p>
                                                </li>
                                            </ul>
                                            <div class="item_discrition">助力云南中烟完成ERP软件的国产化替代，实现核心业务、基坛技术、卷烟供应业务数据等的一体化集中管控，推动云南中烟高质量发展</div>
                                            <a href="#" class="content_more">案例详情  >></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="content_cloudpro_cont_box" v-show="tabActiveIndex == 1">
                                <!-- 左侧内容 -->
                                <div class="cont_box_left">
                                    <div class="cont_logo">
                                        <img src="@/assets/info_img2.jpg" class="logo_img">
                                    </div>
                                    <div class="cont_title">
                                        <p class="title_text">大型企业SaaS管理云</p>
                                    </div>
                                    <div class="cont_discrition">
                                        <p class="title_discrition">凭借千亿级高性能和世界一流企业的实践，帮助大企业实现可信的数字化系统升迁，打造韧性企业，支撑商业创新和管理重构，已成为500强企业的新选择</p>
                                    </div>
                                    <div class="cont_product-link">
                                        <a href="#" class="product_link">
                                            <p class="text">方案详情</p>
                                            <p class="icon">></p>
                                        </a>
                                        <a href="#" class="product_link2">
                                            <p class="text">预约演示</p>
                                            <p class="icon">></p>
                                        </a>
                                    </div>
                                    <div class="cont_product-label">
                                        <ul class="product_list">
                                            <li class="product_item"
                                                v-for="(product,product_index) of productList2"
                                                :key="product_index"
                                            >
                                                <a :href="product.href">{{ product.name }}</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- 右侧内容 -->
                                <div class="cont_box_right">
                                    <div class="cont_imgBox">
                                        <img src="@/assets/tabnav_img2.jpg" class="img">
                                    </div>
                                    <div class="cont_content">
                                        <div class="content_text">
                                            <ul class="content_list">
                                                <li class="content_item"
                                                    v-for="(content,content_index) of contentList2"
                                                    :key="content_index"
                                                >
                                                    <p class="item_num">{{ content.num }}</p>
                                                    <p class="item_name">{{ content.name }}</p>
                                                </li>
                                            </ul>
                                            <div class="item_discrition">等构建中央数字中心体系，整合内部上千个信息化系统，打造公共服务业务服务、数据服务三层平台架构，突实现战略与业务模式转型</div>
                                            <a href="#" class="content_more">案例详情  >></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="content_cloudpro_cont_box" v-show="tabActiveIndex == 2">
                                <!-- 左侧内容 -->
                                <div class="cont_box_left">
                                    <div class="cont_logo">
                                        <img src="@/assets/info_img3.jpg" class="logo_img">
                                    </div>
                                    <div class="cont_title">
                                        <p class="title_text">新一代成长型企业EBC</p>
                                    </div>
                                    <div class="cont_discrition">
                                        <p class="title_discrition">基于企业级云原生架构金蝶云·苍穹打造安全可靠的数字化平台，为企业提供成熟、可拓展的企业业务能力。支持多组织、多核算体系，提供全面一体化解决方案</p>
                                    </div>
                                    <div class="cont_product-link">
                                        <a href="#" class="product_link">
                                            <p class="text">方案详情</p>
                                            <p class="icon">></p>
                                        </a>
                                        <a href="#" class="product_link2">
                                            <p class="text">预约演示</p>
                                            <p class="icon">></p>
                                        </a>
                                    </div>
                                    <div class="cont_product-label">
                                        <ul class="product_list">
                                            <li class="product_item"
                                                v-for="(product,product_index) of productList3"
                                                :key="product_index"
                                            >
                                                <a :href="product.href">{{ product.name }}</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- 右侧内容 -->
                                <div class="cont_box_right">
                                    <div class="cont_imgBox">
                                        <img src="@/assets/tabnav_img3.jpg" class="img">
                                    </div>
                                    <div class="cont_content">
                                        <div class="content_text">
                                            <ul class="content_list">
                                                <li class="content_item"
                                                    v-for="(content,content_index) of contentList3"
                                                    :key="content_index"
                                                >
                                                    <p class="item_num">{{ content.num }}</p>
                                                    <p class="item_name">{{ content.name }}</p>
                                                </li>
                                            </ul>
                                            <div class="item_discrition">基于金蝶云星空平台，加快实施公司密封产业智能制造项目，进一步提升产品品质，再用两到三年实现企业智能化，支撑公司战略与模式转型</div>
                                            <a href="#" class="content_more">案例详情  >></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="content_cloudpro_cont_box" v-show="tabActiveIndex == 3">
                                <!-- 左侧内容 -->
                                <div class="cont_box_left">
                                    <div class="cont_logo">
                                        <img src="@/assets/info_img4.jpg" class="logo_img">
                                    </div>
                                    <div class="cont_title">
                                        <p class="title_text">小型企业SaaS管理云</p>
                                    </div>
                                    <div class="cont_discrition">
                                        <p class="title_discrition">聚焦小型企业在线经营和数字化管理，支持企业拓客开源、智能管理、实时决策。连接生态伙伴，为小微企业提供一站式服务，助力企业快速成长</p>
                                    </div>
                                    <div class="cont_product-link">
                                        <a href="#" class="product_link">
                                            <p class="text">方案详情</p>
                                            <p class="icon">></p>
                                        </a>
                                        <a href="#" class="product_link2">
                                            <p class="text">预约演示</p>
                                            <p class="icon">></p>
                                        </a>
                                    </div>
                                    <div class="cont_product-label">
                                        <ul class="product_list">
                                            <li class="product_item"
                                                v-for="(product,product_index) of productList4"
                                                :key="product_index"
                                            >
                                                <a :href="product.href">{{ product.name }}</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- 右侧内容 -->
                                <div class="cont_box_right">
                                    <div class="cont_imgBox">
                                        <img src="@/assets/tabnav_img4.jpg" class="img">
                                    </div>
                                    <div class="cont_content">
                                        <div class="content_text">
                                            <ul class="content_list">
                                                <li class="content_item"
                                                    v-for="(content,content_index) of contentList4"
                                                    :key="content_index"
                                                >
                                                    <p class="item_num">{{ content.num }}</p>
                                                    <p class="item_name">{{ content.name }}</p>
                                                </li>
                                            </ul>
                                            <div class="item_discrition">使用金蝶云·星辰后，商城订单和线下渠道的订单都在进销存中统一管理，库存和资金往来都比较清晰明了，对账方便</div>
                                            <a href="#" class="content_more">案例详情  >></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, onMounted ,nextTick } from 'vue'
import '../style.css'
// import BScroll from '@better-scroll/core'
import plan from '@/assets/myqcloud_plan.jpg'
import staff from '@/assets/myqcloud_staff.jpg'
import goout from '@/assets/myqcloud_goout.jpg'
import relay from '@/assets/relay.svg'
import supply from '@/assets/supply_chain.svg'
import game from '@/assets/myqcloud_game.jpg'
import hotSpot1 from '@/assets/hotspot1.jpg'
import hotSpot2 from '@/assets/hotspot2.jpg'
import hotSpot3 from '@/assets/hotspot3.jpg'
import { Icon } from 'vant'

// 滚动条
import Simplebar from 'simplebar-vue'
import 'simplebar-vue/dist/simplebar.min.css'
   
// 防抖和节流
import { debounce, throttle } from 'lodash'



    // 语言选择、登录、注册  
    const showRegion = ref(false);
    const mouseOverRegion = () => {
        showRegion.value = true;
    };
    const mouseLeaveRegion = () => {
        showRegion.value = false;
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
                    type:'3',
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
                    bottomText:'',
                    

                },
                {
                    id:'1-2',
                    name:'企业级AI平台',
                    href:'#',
                    img_href:'#',
                    titleText:'金蝶云·苍穹 企业级AI平台 >',
                    type:'4',
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
                    type:'4',
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
                    type:'4',
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
                    type:'4',
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
                    moreText:'热点方案推荐',
                    type:'5',
                    sec_right_Data:[
                        {
                            id:'2-1-1',
                            name:'企业级AI平台解决方案',
                            href:'#',
                            supply:''
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
                    type:'6',
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
            img:game,
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
    }
    const notHoverNav = () => {
        headerNavShow.value = false;
    }
    // 一级导航栏-->二级导航栏
    let navActiveIndex = ref(0);
    let hoverNavIndex;
    let navClassName;
    // const navListEventAgent = (event) => {
    //     hoverNavIndex = event.target.dataset.index;
    //     navClassName = event.target.className;
    //     if( +hoverNavIndex != NaN && navClassName == 'nav_item_text'){
    //         navActiveIndex.value = +hoverNavIndex;
    //     }
    // }
    const navListEventAgent = debounce((event) => {
        hoverNavIndex = event.target.dataset.index;
        navClassName = event.target.className;
        if( +hoverNavIndex != NaN && navClassName == 'nav_item_text'){
            navActiveIndex.value = +hoverNavIndex;
        }
    },100)
    // 二级导航栏-->三级导航栏
    let secActiveIndex = ref(0);
    let hoverSecIndex;
    let secClassName;
    const navSecEventAgent = throttle((event) => {
        hoverSecIndex = event.target.dataset.index;
        secClassName = event.target.className;
        if( +hoverSecIndex != NaN && secClassName == 'left_item_text'){
            secActiveIndex.value = +hoverSecIndex;
        }
        // console.log(event.target)
    },100)

    // 金蝶云产品一级导航栏获取
    let tabActiveIndex = ref(0);
    let hoverTabIndex;
    let tabClassName;
    const tabnavListEventAgent = (event) => {
        hoverTabIndex = event.target.dataset.index;
        tabClassName = event.target.className;
        if( +hoverTabIndex != NaN && tabClassName == 'tabnav_href'){
            tabActiveIndex.value = +hoverTabIndex;
        }
        // console.log(event.target.dataset.index);
        // console.log(tabActiveIndex.value);
    }

    // 资讯导航数据
    const infoNavList = [
        {
            id:'1',
            name:'数字化人力资源平台',
            href:'#'
        },
        {
            id:'2',
            name:'EBC，下一代ERP',
            href:'#'
        },
        {
            id:'3',
            name:'央国企数字化方案',
            href:'#'
        },
        {
            id:'4',
            name:'小微型企业财税一体化方案',
            href:'#'
        },
        {
            id:'5',
            name:'企业IPO解决方案',
            href:'#'
        },

    ]
    
    // 热点关注数据
    const hotSpotList = [
        {
            id:'1',
            name:'企业出海',
            discrition:'数字化解决方案',
            more:'了解更多',
            href:hotSpot1
        },
        {
            id:'2',
            name:'央国企',
            discrition:'数字化解决方案',
            more:'了解更多',
            href:hotSpot2
        },
        {
            id:'3',
            name:'专精特新企业',
            discrition:'数字化解决方案',
            more:'了解更多',
            href:hotSpot3
        },
      
    ]

    
    // 金蝶云产品数据


    const tabnavList = [
        {
            id:'1',
            name:'企业级AI平台',
            href:'#'
        },
        {
            id:'2',
            name:'面向大型企业',
            href:'#'
        },
        {
            id:'3',
            name:'面向高成长型企业',
            href:'#'
        },
        {
            id:'4',
            name:'面向小微企业',
            href:'#'
        },
    ]

    const productList1 = [
        {
            id:'1',
            name:'开发云服务',
            href:'#'
        },
        {
            id:'2',
            name:'流程云服务',
            href:'#'
        },
        {
            id:'3',
            name:'集成云服务',
            href:'#'
        },
        {
            id:'4',
            name:'数据云服务',
            href:'#'
        },
        {
            id:'5',
            name:'区块链云服务',
            href:'#'
        },
        {
            id:'6',
            name:'AI云服务',
            href:'#'
        },
        {
            id:'7',
            name:'RPA云服务',
            href:'#'
        },
        {
            id:'8',
            name:'数据中台',
            href:'#'
        },
        {
            id:'9',
            name:'国际化',
            href:'#'
        },
        {
            id:'10',
            name:'云基础平台',
            href:'#'
        },
    ]
    const productList2 = [
        {
            id:'1',
            name:'人力云',
            href:'#'
        },
        {
            id:'2',
            name:'财务云',
            href:'#'
        },
        {
            id:'3',
            name:'税务云',
            href:'#'
        },
        {
            id:'4',
            name:'供应链云',
            href:'#'
        },
        {
            id:'5',
            name:'制造云',
            href:'#'
        },
        {
            id:'6',
            name:'营销云',
            href:'#'
        },
        {
            id:'7',
            name:'采购云',
            href:'#'
        },
        {
            id:'8',
            name:'协同云',
            href:'#'
        },
       
    ]
    const productList3 = [
        {
            id:'1',
            name:'财务云',
            href:'#'
        },
        {
            id:'2',
            name:'税务云',
            href:'#'
        },
        {
            id:'3',
            name:'员工服务云',
            href:'#'
        },
        {
            id:'4',
            name:'全渠道云',
            href:'#'
        },
        {
            id:'5',
            name:'采购云',
            href:'#'
        },
        {
            id:'6',
            name:'供应链云',
            href:'#'
        },
        {
            id:'7',
            name:'PLM云',
            href:'#'
        },
        {
            id:'8',
            name:'制造云',
            href:'#'
        },
        {
            id:'9',
            name:'项目云',
            href:'#'
        },
        {
            id:'10',
            name:'数据智能云',
            href:'#'
        },
    ]
    const productList4 = [
        {
            id:'1',
            name:'进销存',
            href:'#'
        },
        {
            id:'2',
            name:'财税管理',
            href:'#'
        },
        {
            id:'3',
            name:'费用报销',
            href:'#'
        },
        {
            id:'4',
            name:'零售管理',
            href:'#'
        },
        {
            id:'5',
            name:'生产管理',
            href:'#'
        },
        {
            id:'6',
            name:'电商云',
            href:'#'
        },
        {
            id:'7',
            name:'订货商城',
            href:'#'
        },
        
    ]

    const contentList1 = [
        {
            id:'1',
            num:'50+',
            name:'集成信息化',
        },
        {
            id:'2',
            num:'300个+',
            name:'实时跟踪生产任务',
        },
        {
            id:'3',
            num:'1.1万家+',
            name:'链接供应商',
        },
    ]
    const contentList2 = [
        {
            id:'1',
            num:'12万+',
            name:'链接员工',
        },
        {
            id:'2',
            num:'20+',
            name:'链接信息化系统',
        },
        {
            id:'3',
            num:'9000+',
            name:'链接客户',
        },
    ]
    const contentList3 = [
        {
            id:'1',
            num:'20%',
            name:'清理无效流程',
        },
        {
            id:'2',
            num:'40%',
            name:'生产执行效率提升',
        },
        {
            id:'3',
            num:'20%',
            name:'成本核算精度提升',
        },
    ]
    const contentList4 = [
        {
            id:'1',
            num:'一体化',
            name:'线上线下多渠道',
        },
        {
            id:'2',
            num:'一体化',
            name:'业财税',
        },
        {
            id:'3',
            num:'自动化',
            name:'单据生成凭证',
        },
    ]

    

    
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
        @media screen and (min-width: 2500px){
            .content{
                width: 2300px;
            }
        }

        a {
            text-decoration: none; 
            outline: none;	
            color: rgb(0, 0, 0);	
        }

    }
    
    // header部分

    .header_content{
        position: relative;
        clear: both;;
        line-height: 100px;

        // 金蝶logo
        .header_logo{
            display: inline-block;
            height: 31.5%;
            // height: 40.3%;
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
            // margin-left: 19.4%;

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


            // 二级导航栏在左 + 三级导航栏在右 的布局  type1
            .header_nav_sec_type1{
                // background-color: rgb(173, 230, 191);
                background-color: rgb(246, 247, 251);
                position: absolute;
                top: 90px;
                width: 1190px;
                // left: -158px;
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
                        .left_item_text_keep{
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
                            // overflow-y: scroll;

                            .bigBox{
                                display: inline-block;
                                width: 100%;
                                // 三级导航栏的li大标题
                                .header_sec_left_item_title_text{
                                    color: rgb(0, 0, 0);
                                    line-height: 69px;
                                    font-size: 18px;
                                    padding-left: 21px;
                                    width: 550px;
                                    display: inline-block;
                                }

                                // 三级导航栏的li  type3
                                .header_sec_right_item_box_type3{
                                    display: inline-block;
                                    width: 100%;

                                    .header_sec_right_item{
                                        display: inline-block;
                                        white-space: pre-wrap;
                                        line-height: 25px;
                                        width: 50%;
                                        padding: 5px 0 45px 0;
                                        margin-top: -3px;
                                        // border: 1px solid yellow;
                                        
                                        .header_sec_right_item_text{
                                            margin-top: 12px;
                                            // 三级导航栏的前置icon
                                            .right_item_icon{
                                                display: inline-block;
                                                width: 50px;
                                                height: 50px;
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
                                                    width: 295px;
                                                }
                                            }
                                            .right_item_title_text:hover{
                                                color: rgb(0, 104, 221);
                                            }
                                            
                                        }
                                    }
                                }

                                // 三级导航栏的li  type4
                                .header_sec_right_item_box_type4{
                                    display: inline-block;
                                    width: 100%;

                                    .header_sec_right_item{
                                        display: inline-block;
                                        white-space: pre-wrap;
                                        line-height: 25px;
                                        width: 50%;
                                        padding: 5px 0 45px 0;
                                        margin-top: -3px;
                                        // border: 1px solid yellow;
                                        
                                        .header_sec_right_item_text{
                                            margin-top: 12px;

                                            .right_item_icontitle{
                                                border-bottom: 1px solid rgb(229, 232, 237);
                                                width: 80%;
                                                margin-left: 21px;
                                                
                                                // 三级导航栏的前置icon
                                                .right_item_icon_box{
                                                    display: inline-block;
                                                    .right_item_icon{
                                                        width: 28px;
                                                        height: 28px;
                                                    }
                                                }
                                                
                                                .right_item_text{
                                                    display: inline-block;
                                                    margin: 0px 0 0 10px;
                      
                                                    // 三级导航栏的li标题
                                                    .right_item_title_text{
                                                        color: rgb(37, 43, 58);
                                                        font-size: 16px;
                                                    }
                                                    .right_item_title_text:hover{
                                                        color: rgb(0, 104, 221);
                                                    }
                                                    
                                                }
                                            }

                                            // 三级导航栏的li描述
                                            .right_item_description_text{
                                                display: inline-block;
                                                color: rgb(170, 170, 170);
                                                font-size: 14px;
                                                width: 295px;
                                                padding: 5px 0 0 21px;
                                            } 
                                        }
                                    }
                                }

                                // 三级导航栏的li  type5
                                .header_sec_right_item_box_type5{
                                    display: inline-block;
                                    width: 100%;
                                    margin-top: 12px;
                                    

                                    .header_sec_right_item{
                                        display: inline-block;
                                        white-space: pre-wrap;
                                        line-height: 30px;
                                        width: 40%;
                                        margin-left: 20px;
                                        padding: 0px 0px 10px 0;
                                        // padding: 20px 5 20px 20px;
                                        // margin-top: -3px;
                                        // border: 1px solid yellow;
                                    
                                        .right_item_text{
                                            display: inline-block;
                                            margin: 0px 0 0 10px;
                
                                            // 三级导航栏的li标题
                                            .right_item_title_text{
                                                color: rgb(37, 43, 58);
                                                font-size: 14px;
                                            }
                                            .right_item_title_text:hover{
                                                color: rgb(0, 104, 221);
                                            }
                                            
                                        }
                                    }     
                                }

                                // 三级导航栏的li  type6
                                .header_sec_right_item_box_type6{
                                    display: inline-block;
                                    width: 100%;
                                    margin-top: 20px;
                                    

                                    .header_sec_right_item{
                                        display: inline-block;
                                        white-space: pre-wrap;
                                        line-height: 30px;
                                        width: 20%;
                                        margin-left: 20px;
                                        padding: 0px 0px 10px 0;
                                        // padding: 20px 5 20px 20px;
                                        // margin-top: -3px;
                                        // border: 1px solid yellow;
                                    
                                        .right_item_text{
                                            display: inline-block;
                                            margin: 0px 0 0 10px;
                
                                            // 三级导航栏的li标题
                                            .right_item_title_text{
                                                color: rgb(37, 43, 58);
                                                font-size: 14px;
                                            }
                                            .right_item_title_text:hover{
                                                color: rgb(0, 104, 221);
                                            }
                                            
                                        }
                                    }     
                                }
                            }
                            .box1{
                                width: 66.9%;
                            }
                            
                            
                            // 三级导航栏最右侧的更多推荐板块
                            .header_sec_right_more_text{
                                display: inline-block;
                                width: 303px;
                                // height: 480px;
                                height: 100%;
                                float: right;
                                overflow: visible;

                                // 更多推荐border
                                .right_item_more_border{
                                    display: inline-block;
                                    width: 1px;
                                    height: 92%;
                                    margin-top: 20px;
                                    background-color: rgb(229, 232, 237);
                                }
                                // 更多推荐标题
                                .right_item_more_text{
                                    display: inline-block;
                                    color: rgb(37, 43, 58);
                                    font-size: 16px;
                                    display: block;
                                    line-height: 50px;
                                    padding: 10px 31px 0 0;
                                    float: right;
                                    
                                    // 更多推荐图片
                                    .right_item_more_img{
                                        display: block;
                                        height: 160px;
                                        width: 255px;
                                    }
                                }
                            }
                        }
                    }
                    .header_sec_left_item:nth-child(0) .left_item_text{
                        background-color: white;
                        color: rgb(0, 104, 221);
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
            }

            .box2{
                left: -206.2px;
            }

            // 二级导航栏在上 + 三级导航栏在下 的布局 type2
            .header_nav_sec_type2{
                position: absolute;
                top: 90px;
                width: auto;
                min-width: 872px;
                left: -240px;
                height: auto;
                border-top: 1px solid rgb(229, 232, 237);
                box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px 0px;
                background-color: white;

                // 二级导航栏的ul
                .header_nav_sec_left{
                    min-height: 350px;
                    display: inline-block;

                    // 二级导航栏的li
                    .header_sec_left_item{
                        line-height: 50px;
                        margin: 0 -20px 0 50px;
                        float: left;
                        height: 250px;
                        width: 180px;

                        // 二级导航栏的a(文本：业务领域……)
                        .left_item_text{
                            font-size: 16px;
                            color: rgb(37, 43, 58);
                            font-weight: 451;
                            padding: 0px 75px 0 0px;
                            padding-bottom: 15px;
                            border-bottom: 1px solid rgb(229, 232, 237);
                        }

                        // 三级导航栏的ul
                        .header_nav_sec_right{
                            line-height: 50px;
                            position: absolute;
                            padding-top: 10px;
                            
                            // 三级导航栏的li
                            .header_sec_right_item{
                                line-height: 25px;
                                
                                // 三级导航栏的li标题
                                .right_item_text{
                                    
                                    .right_item_title_text{
                                        color: rgb(87, 93, 108);
                                        font-size: 14px;
                                        line-height: 11px;
                                        padding: 0px 0;
                                    }
                                    .right_item_title_text:hover{
                                        color: rgb(19, 120, 228);
                                    }

                                    // 三级导航栏的后置icon
                                    .right_item_icon{
                                        display: inline-block;
                                        width: 11px;
                                        height: 11px;
                                        padding-left: 5px;
                                    
                                    }   
                                }
                            }
                        }
                    }
                }

                // 三级导航栏最右侧的更多推荐板块          
                .right_item_more_text2{
                    display: inline-block;
                    float: right;
                    padding-right: 31px;

                    // 更多推荐标题 p
                    .right_item_more_text{
                        width: auto;
                        line-height: 50px;
                        color: rgb(37, 43, 58);
                        font-size: 16px;
                        font-weight: 451;
                    }
                    .right_item_more_dirText{
                        display: block;
                        line-height: 0px;
                        margin-top: 15px;
                        color: rgb(37, 43, 58);
                    }
                    .right_item_more_dirText:hover{
                        color: rgb(19, 120, 228);
                    }
                    // 更多推荐图片
                    .right_item_more_img_box{
                        display: block;
                        width: 300px;
                        height: 188px;
                        overflow: hidden;
                        .right_item_more_img{
                            width: 300px;
                            // padding-top: 1px;
                            transition: all 0.5s ease 0s;
                            overflow: hidden;
                        }
                        .right_item_more_img:hover{
                            transform: scale(1.1);
                        }
                    }
                    
                }
            }
            
            .box3{
                width: 1200px;
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
                        font-family: PingFangM, Arial, sans-serif;
                        font-size: 14px;
                        box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px 0px;
                        transition: all 0.5s ease-out;
                        overflow: hidden;
                        z-index: 999;
                        border-radius: 1px;
                        a{
                            display: block;
                            text-align: center;
                            height: 50px;
                            line-height: 50px;
                            color: rgb(87, 93, 108);
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
   
    // 内容部分
    .content_content{
        // margin-left: 130px;

        // 大标题、介绍、方案详情按钮
        .content_introduction{
            margin-left: 130px;
            display: inline-block;
            // 大标题
            .content_title{
                color: rgb(37, 43, 58);
                font-size: 40px;
                line-height: 89px;
                cursor: pointer;
            }
            // 产品介绍
            .content_discrition{
                color: rgb(37, 43, 58);
                font-size: 18px;
                line-height: 29px;
                letter-spacing: 1px;
                margin-top: 4px;
                width: 470px;
                cursor: pointer;
            }
            // 方案详情按钮
            .content_button{
                margin-top: 56.5px;
                width: 148px;
                height: 49px;
                background-color: rgb(33, 131, 233);
                border: 1px solid white;
                border-radius: 5px;

                .content_product_link{
                    color: white;
                    font-size: 16px;

                    .text{
                        display: inline-block;
                        width: 70px;
                        padding-left: 41px; 
                        line-height: 49px;
                        transition: padding-left 0.3s ease;
                    }
                    .icon{
                        display: inline-block;
                        width: 0px;
                        margin: 0 8px 0 -3px;
                        overflow: hidden;
                        transition: all 0.3s ease;
                    }
                }
            }
            .content_button:hover .text{
                padding-left: 35px; 
            }
            .content_button:hover .icon{
                width: 11px;
                margin: 0 0 0 8px;
            }
        }
        
        // 背景图片
        .content_image_box{
            position: absolute;
            display: inline-block;
            padding: 10px 50px;
            margin-top: -63px;
            z-index: -1;
            .content_image{
                width: auto;
                height: 450px;
            }
        }
        
        // 资讯导航
        .content_infoNav{
            margin-top: 146px;
            margin-left: 130px;

            .content_infoNav_box{

                .content_infoNav_title{
                    display: inline-block; 
                    position: relative;
                    width: 15%;

                    .infoNav_title_text{
                        display: inline-block;
                        color: rgb(37, 43, 58);
                        font-size: 18px;
                        line-height: 92px;
                    }
                    .infoNav_title_arrow{
                        position: absolute;
                        top: 26px;
                        display: inline-block;
                        padding: 0 20px 0 10px;

                        .arrow_img{
                            height: 36px;
                            
                        }
                    }
                }
                // 资讯导航数据
                // ul
                .content_infoNav_list{
                    display: inline-block;
                    width: 80%;
                    line-height: 1.5;
                    cursor: pointer;


                    // li
                    .infoNav_list{
                        display: inline-block;
                        padding: 10px;
                        width: auto;
                        margin-right: 20px;
                        border: 1px solid rgb(136, 136, 136);
                        border-radius: 30px;
                        background-color: white;
                        // a
                        .infoNav_list_title{
                            color: rgb(37, 43, 58);
                            font-size: 16px;
                        }
                    }
                    .infoNav_list:hover{
                        background-color: rgb(33, 131, 233);
                        border: 1px solid transparent;
                    }
                    .infoNav_list:hover .infoNav_list_title{
                        color: white;
                    }
                }
            }
        }
        
        // 热点关注
        .content_hotSpot{
            margin: 70px 0 0 120px;
            width: 85%;
            height: 303px;
            overflow: hidden;
            // div
            .hotSpot{
                width: 353px;
                height: 303px;
                margin: 0 10px;
                display: inline-block;
                border-radius: 20px; 
                overflow: hidden;
                white-space: nowrap;

                // a
                .hotSpot_box{
                    width: 353px;
                    height: 303px;
                    position: relative;
                    display: inline-block;
                    
                    // 背景图片
                    .hotSpot_imgBox{
                        position: absolute;
                        width: 353px;
                        height: 350px;
                        
                        .hotSpot_img{
                            width: 353px;
                            height: 310px;
                            transition: all 0.5s ease 0s;
                            overflow: hidden;
                        }
                        .hotSpot_img:hover{
                            transform: scale(1.1);
                        }
                    }

                    // 文字
                    .hotSpot_text_box{
                        position: absolute;
                        top: 31px;
                        left: 30px;
                        .hotSpot_text{
                            color: white;
                            font-size: 30px;
                            line-height: 45px;

                            .hotSpot_title{
                                font-size: 30px;
                            }
                            .hotSpot_discrition{
                                
                            }
                            .hotSpot_moreBox{
                                position: relative;
                                .hotSpot_more_text{
                                    position: absolute;
                                    display: inline-block;
                                    font-size: 18px;
                                    // line-height: 50px;
                                    margin-top: 113px;
                                }
                                .hotSpot_more_arrow{
                                    position:absolute;
                                    display: inline-block;
                                    top: 112px;
                                    left: 80px;
                                    .iconfont{
                                        font-size: 25px;
                                        color: white;
                                    }
                                }
                            }
                            
                        }
                    }
                    
                }
                .hotSpot_box:hover .hotSpot_text_box .hotSpot_text .hotSpot_moreBox{
                    color: rgb(33, 131, 233);
                }
                .hotSpot_box:hover .hotSpot_text_box .hotSpot_text .hotSpot_moreBox .hotSpot_more_arrow .iconfont{
                    color: rgb(33, 131, 233);
                }
            }
        }

        // 金蝶云产品
        .content_cloudpro{
            width: 100%;
            height: 785px;
            padding: 100px 0 70px 0;
            .wraper{
                margin: 0 9%;
            }

            // 标题部分
            .content_cloudpro_title{
                // background-color: aqua;
                text-align: center;
                margin-bottom: 26px;
                .title{
                    font-size: 34px;
                    line-height: 51px;
                    color: rgb(37, 43, 58);
                }
            }

            // tabnav导航栏
            .content_cloudpro_tabnav{
                width: 1100px;
                height: 66px;
                // background-color: aqua; 
                margin-bottom: 70px;

                // ul
                .tabnav_list{
                    // width: 1100px;
                    width: 80%;
                    height: 66px;
                    margin: 0 10%;

                    // li
                    .tabnav_item{
                        display: inline-block;
                        padding: 19.5px 0px 19.5px 0;
                        margin-right: 34px;
                        width: 21%;
                        border-bottom: 3px solid rgb(217, 218, 220); 
                        transition: all 0.5s ease-in-out;
                        transform: to right;
                        // line-height: 27px;

                        .tabnav_href{
                            font-size: 18px;
                            line-height: 27px;
                            color: rgb(37, 43, 58);
                            padding: 20.5px 0;
                            width: 214px;
                        }
                    }
                    .tabnav_item:hover{
                        border-bottom: 3px solid rgb(33, 131, 233); 
                        transition: all 0.5s ease-in-out;
                    }
                    .tabnav_item:hover .tabnav_href{
                        color: rgb(33, 131, 233); 
                    }
                }
            }

            // 内容部分
            .content_cloudpro_cont{
                width: 1100px;
                transition: all 1s ease-in-out;
                background: linear-gradient(to right,rgba(255,255,255,0) 0,rgba(255,255,255,.3) 50%,rgba(255,255,255,0) 100%);  
                
                .content_cloudpro_cont_box{
                    width: 1100px;
                    position: relative;
                    // 左侧内容
                    .cont_box_left{
                        width: 46.91%;
                        display: inline-block;
                        position: absolute;
                        // logo
                        .cont_logo{
                            .logo_img{
                                width: 258px;
                                height: 87px;
                            }
                        }
                        // 大标题
                        .cont_title{
                            margin: 20px 0;
                            .title_text{
                                font-size: 30px;
                                line-height: 41.25px;
                                color: rgb(37, 43, 58);
                            }
                        }
                        // 描述
                        .cont_discrition{
                            .title_discrition{
                                font-size: 18px;
                                line-height: 25.99px;
                                color: rgb(37, 43, 58);
                                letter-spacing: 1px;
                            }
                        }
                        // 按钮
                        .cont_product-link{
                            margin-top: 35px;
                            width: 100%;
                            height: 49px;
                            // background-color: rgb(33, 131, 233);
                            // border: 1px solid white;
                            // border-radius: 5px;
                            .product_link{
                                display: inline-block;
                                color: white;
                                font-size: 16px;
                                width: 150px;
                                margin-right: 18px;
                                background-color: rgb(33, 131, 233);
                                border: 1px solid white;
                                border-radius: 5px;

                                .text{
                                    display: inline-block;
                                    width: 70px;
                                    padding-left: 41px; 
                                    line-height: 49px;
                                    transition: padding-left 0.3s ease;
                                }
                                .icon{
                                    display: inline-block;
                                    width: 0px;
                                    margin: 0 8px 0 -3px;
                                    overflow: hidden;
                                    transition: all 0.3s ease;
                                }
                            }
                            .product_link2{
                                display: inline-block;
                                color: rgb(38, 43, 57);
                                font-size: 16px;
                                width: 150px;
                                margin-right: 18px;
                                background-color: rgb(255, 255, 255);
                                border: 1px solid rgb(38, 43, 57);
                                border-radius: 5px;

                                .text{
                                    display: inline-block;
                                    width: 70px;
                                    padding-left: 41px; 
                                    line-height: 49px;
                                    transition: padding-left 0.3s ease;
                                }
                                .icon{
                                    display: inline-block;
                                    width: 0px;
                                    margin: 0 8px 0 -3px;
                                    overflow: hidden;
                                    transition: all 0.3s ease;
                                }
                            }
                            .product_link:hover .text{
                                padding-left: 35px;
                            }
                            .product_link:hover .icon{
                                width: 11px;
                                margin: 0 0 0 8px;
                            }
                            .product_link2:hover .text{
                                padding-left: 35px;
                            }
                            .product_link2:hover .icon{
                                width: 11px;
                                margin: 0 0 0 8px;
                            }
                        }
                        
                        // 产品label
                        .cont_product-label{
                            margin-top: 42px;
                            padding: 30px 0;
                            border-top: 1px solid rgb(229, 229, 229);
                            // ul
                            .product_list{

                                // li
                                .product_item{
                                    width: 25%;
                                    display: inline-block;
                                    font-size: 16px;
                                    line-height: 42px;
                                    // color: black;
                                }
                                .product_item:hover a{
                                    color: rgb(33, 131, 233);
                                }
                            }
                        }
                    }
                    // 右侧部分
                    .cont_box_right{
                        width: 46.91%;
                        display: inline-block;
                        // display: none;
                        position: absolute;
                        right: 0px;
                        // 图片
                        .cont_imgBox{
                            .img{
                                width: 480px;
                                height: 300px;
                                border-radius: 20px;
                            }
                        }
                        // 数据
                        .cont_content{
                            margin-top: 20px;
                            padding: 40px 20px 40px 20px;
                            background-color: rgb(245, 245, 245);
                            border-radius: 20px;
                            width: 440px;

                            .content_text{
                                width: 480px;
                                // ul
                                .content_list{
                                    // li
                                    .content_item{
                                        margin: 0 40px 0 0px;
                                        display: inline-block;

                                        .item_num{
                                            // margin: 0 60px 0 0px;
                                            font-size: 30px;
                                            line-height: 45px;
                                            color: rgb(37, 43, 58);
                                        }
                                        .item_name{
                                            font-size: 16px;
                                            line-height: 24px;
                                            color: rgb(37, 43, 58);
                                        }
                                    }
                                }
                                .item_discrition{
                                    width: 440px;
                                    margin: 20px 0 ;
                                    font-size: 14px;
                                    line-height: 21px;
                                    color: rgb(37, 43, 58);
                                }
                                .content_more{
                                    // margin-left: 20px;
                                    font-size: 14px;
                                    line-height: 21px;
                                    color: rgb(33, 131, 233);
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    



// 全文范围内的type='1',是指header_nav_sec_type1（二级导航栏在左+三级导航栏在右）的布局
// 全文范围内的type='2',是指header_nav_sec_type2（二级导航栏在上+三级导航栏在下）的布局
// 全文范围内的type='3',是指header_sec_right_item_box【 图片在左 + （标题+描述）在右 】的布局
// 全文范围内的type='4',是指header_sec_right_item_box【（图片+标题）在上 + 描述在下 】的布局
// 全文范围内的type='5',是指header_sec_right_item_box 一行俩个li 的布局
// 全文范围内的type='6',是指header_sec_right_item_box 一行四个li 的布局

</style>








