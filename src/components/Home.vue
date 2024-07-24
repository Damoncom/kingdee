<!-- 首页--------------------------------------------------------- -->
<template>
    <div class="content_warp">
        <div class="content">

            <!-- 搜索框 -->
            <div class="search_box" v-if="isSearch == true">
                <input type="text" placeholder="请输入关键词">
                <img src="@/assets/magnifier.svg" class="search_img">
            </div>

            <!-- header部分 -->
            <div class="header_content">

                <!-- 金蝶logo -->
                <img  class="header_logo" src="@/assets/logohei.gif" alt="">

                <!-- 导航栏 -->
                <div class="header_nav" @mouseover="hoverNav">
                    <ul class="header_nav_list"
                        @mouseover="navListEventAgent"
                        @mouseleave="notHoverNav"
                        v-if="isSearch == false"
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
                                <div class="line" :class="navActiveIndex == index ? 'hover-line' : ''"></div> 
                            </a>

                            <!-- 二级导航栏 type1 -->
                            <div class="header_nav_sec_type1"
                                 v-show="item.type == 1 && navActiveIndex == index"
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
                                            :class="secActiveIndex == secLeftIndex ? 'left_item_text_hover' : ''"
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
                                                            <img :src="secRightItem.supply" class="right_item_icon" v-if="!!secRightItem.supply">
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
                                                                    <img :src="secRightItem.supply" class="right_item_icon" v-if="!!secRightItem.supply">
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
                                 v-show="item.type == 2 && navActiveIndex == index"
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
                                                    <img :src="secRightItem.relay" class="right_item_icon" v-if="!!secRightItem.relay">
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
                    <div class="header_buy" 
                        v-if="isSearch == false"
                    >
                        <img src="@/assets/phone.svg" alt="call" class="icon">
                        <p class="header_buy_call_number">4008-830-830</p>
                        <a href="#" class="header_buy_button">申请体验</a>
                    </div>
                    <!-- 搜索 -->
                    <a href="#" class="header_search">
                        <img src="@/assets/magnifier.svg" 
                            class="search_img"
                            v-if="isSearch == false"
                            @mousedown="search"
                        >
                        <img src="@/assets/delete.svg" 
                            class="search_img"
                            v-if="isSearch == true"
                            @mousedown="search"
                        >
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
                    <img class="content_image" src="@/assets/bkImage.jpg">
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
                    <div class="wrapper">
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
                            <Transition name="blink">
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
                            </Transition>
                            <Transition name="blink">
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
                            </Transition>
                            <Transition name="blink">
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
                            </Transition>
                            <Transition name="blink">
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
                            </Transition>
                        </div>
                    </div>
                </div>

                <!-- 中国的软件 -->
                <div class="content_sorft">
                    <div class="wrapper">
                        <div class="title">
                            <h2 class="title_text">中国的软件 世界的金蝶</h2>
                        </div>
                        <!-- 数据 -->
                        <div class="content_number">
                            <div class="number_cont">
                                <ul class="number_list">
                                    <li class="number_item"
                                        v-for="(number,number_index) of numberList"
                                        :key="number_index"
                                    >
                                        <div class="number_box">
                                            <p class="number_num nn">{{ number.num }}</p>
                                            <!-- <p class="number_num nn">{{ count }}</p> -->
                                            <!-- <NumberAnimation class="number_num" 
                                                            :from="0" 
                                                            :to="number.num"
                                                            duration='2000'
                                                            :key="number_index"
                                                            >{{ number.num }}
                                            </NumberAnimation> -->
                                            <p class="number_unit">{{ number.unit }}</p>
                                        </div>
                                        <div class="number_text_top">{{ number.textTop }}</div>
                                        <div class="number_text_bottom">{{ number.textBottom }}</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- 奖项 -->
                        <div class="content_prize">
                            <div class="prize_cont">
                                <ul class="prize_list">
                                    <li class="prize_item"
                                        v-for="(prize,prize_index) of prizeList"
                                        :key="prize_index"
                                    >
                                        <div class="prize_img">
                                            <img src="@/assets/index_prize.png" class="img">
                                        </div>
                                        <div class="prize_text">
                                            <h2 class="title">{{ prize.title }}</h2>
                                            <div class="discription">
                                                <p class="discription_text">{{ prize.discription }}</p>
                                                <p class="discription_name">{{ prize.name }}</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                <!-- 行业列表 -->
                <div class="content_industry">
                    <div class="wrapper">
                        <h2 class="industry_title">
                            30年深耕
                            <br>
                            与领军企业共创行业新功能
                        </h2>
                        <div @click="prevSlide" class="prevDiv">
                            <i class="iconfont icon-jiantou2"></i>
                        </div>
                        <div @click="nextSlide" class="nextDiv">
                            <i class="iconfont icon-jiantou2"></i>
                        </div>
                        <swiper-container 
                            ref="swiper"
                            class="content_cont"
                            :space-between="spaceBetween"
                            :centered-slides="true"
                            :pagination="{
                                hideOnClick: true
                            }"
                        >
                            <!-- slide1 -->
                            <swiper-slide>
                                <div class="swiper_wrapper">
                                    <div class="swiper_slide"
                                        v-for="(slide,slide_index) of slideList1"
                                        :key="slide_index"                
                                    >
                                        <a :href="slide.href" class="slide">
                                            <div class="img">
                                                <img :src="slide.bkImg" alt="">
                                            </div>
                                            <div class="title">
                                                <img :src="slide.logoImg" class="title_img">
                                                <h2 class="title_name">{{ slide.name }}</h2>
                                                <div class="title_dis">{{ slide.discription }}</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </swiper-slide>
                            <!-- slide2 -->
                            <swiper-slide>
                                <div class="swiper_wrapper">
                                    <div class="swiper_slide"
                                        v-for="(slide,slide_index) of slideList2"
                                        :key="slide_index"
                                    >
                                        <a :href="slide.href" class="slide">
                                            <div class="img">
                                                <img :src="slide.bkImg" alt="">
                                            </div>
                                            <div class="title">
                                                <img :src="slide.logoImg" class="title_img">
                                                <h2 class="title_name">{{ slide.name }}</h2>
                                                <div class="title_dis">{{ slide.discription }}</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </swiper-slide>
                        </swiper-container>
                    </div>
                </div>

                <!-- 公司列表 -->
                <div class="content_bank">
                    <div class="wrapper">
                        <h2 class="bank_title">
                            成就客户
                            <br>
                            做成功企业背后的软件公司
                        </h2>
                        <div @click="prevSlide2" class="prevDiv">
                            <i class="iconfont icon-jiantou2"></i>
                        </div>
                        <div @click="nextSlide2" class="nextDiv">
                            <i class="iconfont icon-jiantou2"></i> 
                        </div>
                        <swiper-container 
                            ref="swiper2"
                            class="content_cont"
                            :space-between="spaceBetween"
                            :centered-slides="true"
                            :pagination="{
                                hideOnClick: true
                            }"
                        >
                            <!-- slide1 -->
                            <swiper-slide>
                                <div class="swiper_wrapper">
                                    <div class="swiper_slide"
                                        v-for="(slide,slide_index) of bankSlideList1"
                                        :key="slide_index"                
                                    >
                                        <a :href="slide.href" class="slide">
                                            <div class="img">
                                                <img :src="slide.bkImg" class="cont">
                                                <!-- <video class="cont"
                                                    ref="videoRef"
                                                    :src="videoUrl"
                                                    width="100%"
                                                    height="224"
                                                    autoplay
                                                    controls
                                                    @timeupdate="handleTimeUpdate"
                                                >
                                                </video> -->
                                                <img src="@/assets/index_video.png" class="logo">
                                            </div>
                                            <div class="title">
                                                <img :src="slide.logoImg" class="title_img">
                                                <div class="title_dis">{{ slide.discription }}</div>
                                                <div class="more_box">
                                                    <a href="#" class="title_more">案例详情</a>
                                                    <img src="@/assets/arrow_right_blue.svg" class="title_arrow">
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </swiper-slide>
                            <!-- slide2 -->
                            <swiper-slide>
                                <div class="swiper_wrapper">
                                    <div class="swiper_slide"
                                        v-for="(slide,slide_index) of bankSlideList2"
                                        :key="slide_index"
                                    >
                                        <a :href="slide.href" class="slide">
                                            <div class="img">
                                                <img :src="slide.bkImg" class="cont">
                                                <img src="@/assets/index_video.png" class="logo">
                                            </div>
                                            <div class="title">
                                                <img :src="slide.logoImg" class="title_img">
                                                <div class="title_dis">{{ slide.discription }}</div>
                                                <div class="more_box">
                                                    <a href="#" class="title_more">案例详情</a>
                                                    <img src="@/assets/arrow_right_blue.svg" class="title_arrow">
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </swiper-slide>
                        </swiper-container>
                    </div>
                </div>

                <!-- 轮播图 -->
                <!-- <scrollImg /> -->
                <div class="content_srollImg">
                    <!-- <ul class="scroll_list">
                        <li class="scroll_item" 
                            v-for="(scroll,scroll_index) of scrollList"
                            :key="scroll_index"
                        >
                            <i class="iconfont icon-jiantou2"></i>
                        </li>
                    </ul> -->
                    <div class="scroll_box">
                        <div class="scroll_item1">
                            <i class="iconfont icon-shunfengsuyun"></i>
                        </div>
                        <div class="scroll_item2">
                            <i class="iconfont icon-shunfengsuyun"></i>
                        </div>
                        <div class="scroll_item3">
                            <i class="iconfont icon-shunfengsuyun"></i>
                        </div>
                        <!-- <div class="scroll_item4">
                            <i class="iconfont icon-shunfengsuyun"></i>
                        </div> -->
                        <div class="scroll_item5">
                            <i class="iconfont icon-shunfengsuyun"></i>
                        </div> 
                    </div>
                        
                </div>

                <!-- 资料下载 -->
                <div class="content_material">
                    <div class="wrapper">
                        <h2 class="material_title">
                            金蝶洞察
                        </h2>
                        <div @click="prevSlide3" class="prevDiv">
                            <i class="iconfont icon-jiantou2"></i>
                        </div>
                        <div @click="nextSlide3" class="nextDiv">
                            <i class="iconfont icon-jiantou2"></i> 
                        </div>
                        <swiper-container 
                            ref="swiper3"
                            class="content_cont"
                            :space-between="spaceBetween"
                            :centered-slides="true"
                            :pagination="{
                                hideOnClick: true
                            }"
                        >
                            <!-- slide1 -->
                            <swiper-slide>
                                <div class="swiper_wrapper">
                                    <div class="swiper_slide"
                                        v-for="(slide,slide_index) of materialSlideList1"
                                        :key="slide_index"                
                                    >
                                        <a :href="slide.href" class="slide">
                                            <div class="img">
                                                <img src="@/assets/Settings.svg" class="logo">
                                            </div>
                                            <div class="title">
                                                <h2 class="title_name">{{ slide.name }}</h2>
                                                <div class="title_dis">{{ slide.discription }}</div>
                                                <div class="more_box">
                                                    <a href="#" class="title_more">下载白皮书</a>
                                                    <img src="@/assets/arrow_right_blue.svg" class="title_arrow">
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </swiper-slide>
                            <!-- slide2 -->
                            <swiper-slide>
                                <div class="swiper_wrapper">
                                    <div class="swiper_slide"
                                        v-for="(slide,slide_index) of materialSlideList2"
                                        :key="slide_index"
                                    >
                                        <a :href="slide.href" class="slide">
                                            <div class="img">
                                                <img src="@/assets/Settings.svg" class="logo">
                                            </div>
                                            <div class="title">
                                                <h2 class="title_name">{{ slide.name }}</h2>
                                                <div class="title_dis">{{ slide.discription }}</div>
                                                <div class="more_box">
                                                    <a href="#" class="title_more">下载白皮书</a>
                                                    <img src="@/assets/arrow_right_blue.svg" class="title_arrow">
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </swiper-slide>
                        </swiper-container>
                    </div>
                </div>

                <!-- 疑问 -->
                <div class="content_yiwen">
                    <div class="wrapper">
                        <div class="info">
                            <h2 class="info_title">欢迎垂询</h2>
                            <div class="info_text">
                                请联系我们专业的销售顾问,
                                <br>
                                我们将推荐适合您需求的产品或解决方案
                            </div>
                            <div class="info_connect">
                                <div class="qr">
                                    <img src="@/assets/qr.jpg" class="qr_img">
                                </div>
                                <div class="qr_intro">
                                    扫码获取一对一服务
                                    <br>
                                    或致电 4008-830-830
                                </div>
                            </div>
                        </div>
                        <div class="img">
                            <img src="@/assets/people.jpg">
                        </div>
                    </div>
                </div>

                <!-- 评分 -->
                <div class="content_score">
                    <div class="text">该页面是否满足您的需求？</div>
                    <div class="dianzan">
                        <i class="iconfont icon-dianzan_kuai"></i>
                    </div>
                    <div class="cai">
                        <i class="iconfont icon-dianzan_kuai"></i>
                    </div>
                </div>
            </div>

            <!-- footer部分 -->
            <div class="footer_content">
                <div class="wrapper">
                    <!-- 左侧 -->
                    <div class="footer_left">
                        <div class="logo">
                            <img src="@/assets/logohei.gif">
                        </div>
                        <div class="consult">售前咨询热线</div>
                        <div class="phone">4008-830-830</div>
                        <div class="consult">售后服务热线</div>
                        <div class="phone">4008-830-830</div>
                        <div class="focus">关注金蝶</div>
                        <div class="img">
                            <i class="iconfont icon-weixin">
                                <!-- 微信qr -->
                                <div class="qr">
                                    <img src="@/assets/qr.jpg" class="qr_img">
                                </div>
                            </i>
                            <i class="iconfont icon-weibo"></i>
                            <i class="iconfont icon-shejiaotubiao-46"></i>
                        </div>
                    </div>
                    <!-- 右侧 -->
                    <div class="footer_right">
                        <ul class="title_list">
                            <li class="title_item"
                                v-for="(title,title_index) of titleList"
                                :key="title_index"
                            >
                                <p class="title">{{ title.name }}</p>
                                <ul class="detail_list">
                                    <li class="detail_item"
                                        v-for="(detail,detail_index) of title.detailList"
                                        :key="detail_index"
                                    >
                                    <a :href="detail.href" class="detail">{{ detail.name }}</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <!-- 底部 -->
                    <div class="footer_partner">
                        <span class="name">金蝶集团 旗下品牌：</span>
                        <ul class="partner_list">
                            <li class="partner_item"
                                v-for="(partner,partner_index) of partnerList"
                                :key="partner_index"
                            >
                                <p class="partner_name">{{ partner.name }}</p>
                            </li>
                        </ul>
                    </div>
                    <div class="footer_site">
                        <p>@2024金蝶软件(中国)有限公司</p>
                        <p>粤ICP备05041751号</p>
                        <p>粤公网安备 44030502002324号</p>
                        <p class="low">法律声明及隐私政策</p>
                    </div>
                </div>
            </div>

            <!-- 侧边栏 -->
            <div class="sidebar">
                <!-- 售前服务 -->
                <div class="sidebar_pre">
                    <div class="pre_img">
                        <i class="iconfont icon-liaotian"></i>
                    </div>
                    <p class="pre_text">售前服务</p>

                    <!-- 售前服务hover出现box -->
                    <div class="pre_more_box">
                        <div class="box_top">
                            <div class="top_img">
                                <i class="iconfont icon-dadianhua"></i>
                            </div>
                            <p class="top_text">官方售前咨询热线</p>
                            <p class="top_phone">4008-830-830</p>
                        </div>
                        <div class="box_bottom">
                            <div class="bottom_left">
                                <div class="left_top">
                                    <div class="img_box">
                                        <i class="iconfont icon-liaotian"></i>
                                    </div>
                                    <div class="text">与我们的售前专家在线聊天</div>
                                </div>
                                <div class="left_bottom">在线咨询</div>
                            </div>
                            <div class="bottom_right">
                                <img src="@/assets/qr.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 售后服务 -->
                <div class="sidebar_after">
                    <div class="after_img">
                        <i class="iconfont icon-jishiliaotian"></i> 
                    </div>
                    <p class="after_text">售后服务</p>
                </div>
                <!-- 个人号 -->
                <div class="sidebar_self">
                    <div class="self_img">
                        <i class="iconfont icon-geren"></i>
                    </div>
                    <p class="self_text">
                        徐少春
                        <br>
                        个人号
                    </p>
                    <div class="self_more_box">
                        <img src="@/assets/qr.jpg" alt="">
                    </div>
                </div>
            </div>

            <!-- 返回顶部按钮 -->
            <backTop />

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
import logo from '@/assets/Settings.svg'
import scrollImg from './test.vue'
import backTop from './backtop.vue'
// import NumberAnimation from "vue-number-animation";
import { Icon } from 'vant'

// 滚动条
import Simplebar from 'simplebar-vue'
import 'simplebar-vue/dist/simplebar.min.css'
   
// 防抖和节流
import { debounce, throttle } from 'lodash'

// 引入swiper
import { register } from 'swiper/element/bundle'

register();

    // 翻页
    const spaceBetween = 10;
    const onProgress = (e) => {
        const [swiper,progress] = e.detail;
        console.log(progress)
    };
    const onSlideChange = (e) => {
        console.log('slide changed')
    }

    // const onProgress1 = (e) => {
    //     const [swiper,progress] = e.currentTarget.parentElement.detail;
    //     console.log(progress)
    // };
    // const onSlideChange1 = (e) => {
    //     console.log('slide changed')
    // }


    let swiper = ref(null);
    const prevSlide = () => {
        swiper.value.swiper.slidePrev(100,() => {

        });
        console.log(swiper._value.swiper.slidePrev);
    }
    const nextSlide = () => {
        swiper.value.swiper.slideNext(100,() => {

        });
        console.log(swiper._value.swiper.slideNext);
    }

    let swiper2 = ref(null);
    const prevSlide2 = () => {
        swiper2.value.swiper.slidePrev(100,() => {

        });
        console.log(swiper._value.swiper.slidePrev);
    }
    const nextSlide2 = () => {
        swiper2.value.swiper.slideNext(100,() => {

        });
        console.log(swiper._value.swiper.slideNext);
    }

    let swiper3 = ref(null);
    const prevSlide3 = () => {
        swiper3.value.swiper.slidePrev(100,() => {

        });
        console.log(swiper._value.swiper.slidePrev);
    }
    const nextSlide3 = () => {
        swiper3.value.swiper.slideNext(100,() => {

        });
        console.log(swiper._value.swiper.slideNext);
    }
    
   
    // 播放视频
    //播放
    // const data = ref([
    //     {
    //         baseUrl:'https://www.bilibili.com/video/BV1ey411e7Wg/?spm_id_from=333.1007.tianma.2-2-4.click&vd_source=324c4fd6b362e7c5749bc7f823dc6fcb'
    //     }
    // ])
    // const handlePlayVideo = (data) => {
    //     videoUrl.value = data?.baseUrl;
    // };
    //下载
    // const handleDownload = (data) => {
    // window.open(data?.baseUrl, "_blank");
    // };


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
    const hoverNav = () => {
        // headerNavShow.value = true;
    }
    const notHoverNav = () => {
        navActiveIndex.value = -1;
    }
    // 一级导航栏-->二级导航栏
    let navActiveIndex = ref(-1);
    let hoverNavIndex;
    let navClassName;
 
    const navListEventAgent = debounce((event) => {
        hoverNavIndex = event.target.dataset.index;
        navClassName = event.target.className;
        if( +hoverNavIndex >=0 && navClassName == 'nav_item_text'){
            navActiveIndex.value = +hoverNavIndex;
            secActiveIndex.value = 0;
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
            num:'250个+',
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


    // 中国的软件数据
    let numberList = ref([
        {
            id:'1',
            num:0,
            targetNum:740,
            unit:'万+',
            textTop:'服务的企业、组织机构客户数量',
            textBottom:'',
            timer:null,
            step:20,
            stepTime:1,
            toFixed:0,
        },
        {
            id:'2',
            num:0.0,
            targetNum:51.2,
            unit:'%',
            textTop:'服务超过一半中国500强',
            textBottom:'已成为500强企业新选择',
            timer:null,
            step:0.9,
            stepTime:1,
            toFixed:1,
        },
        {
            id:'3',
            num:0,
            targetNum:43,
            unit:'%',
            textTop:'服务专精特新企业',
            textBottom:'助力中国新经济和智能制造',
            timer:null,
            step:1,
            stepTime:1,
            toFixed:0,
        },
    ])
    // 数字从0开始调到targetNum的动画
    onMounted(async() => {
        await nextTick();
        numberList.value.forEach((item) => {
            item.timer = setInterval(() => {
                item.num = (+item.num + item.step).toFixed(item.toFixed);
                if(item.num >= item.targetNum){
                    item.num = item.targetNum;
                    clearInterval(item.timer);
                }
            },item.stepTime)
        })
    })
    

    
    const prizeList = [
        {
            id:'1',
            title:'高生产力aPaas平台',
            discription:'中国第一、全球前十',
            name:'Gartner',
        },
        {
            id:'2',
            title:'企业应用SaaS',
            discription:'中国第一',
            name:'IDC',
        },
        {
            id:'3',
            title:'财务云',
            discription:'中国第一',
            name:'IDC',
        },
        {
            id:'4',
            title:'ERP、财务满意度',
            discription:'全球第一',
            name:'IDC',
        },
        {
            id:'5',
            title:'亚太区制造SaaS竞争力',
            discription:'中国唯一',
            name:'IDC',
        },
    ]


    // 行业列表
    const slideList1 = [
        {
            id:'1',
            href:'#',
            bkImg: hotSpot1,
            logoImg: logo,
            name:'装备制造',
            discription:'满足装备制造行业MTO、ETO、MTS等多种业务模式',
        },
        {
            id:'2',
            href:'#',
            bkImg: hotSpot1,
            logoImg: logo,
            name:'汽车及零配件',
            discription:'面向产业链上下游企业的整体数字化解决方案，构建核心竞争力',
        },
        {
            id:'3',
            href:'#',
            bkImg: hotSpot1,
            logoImg: logo,
            name:'现代农牧',
            discription:'农牧企业数字化、智能化、无人化产品服务及全产业链一体化方案',
        },
        {
            id:'4',
            href:'#',
            bkImg: hotSpot1,
            logoImg: logo,
            name:'电子半导体',
            discription:'以数智化转型打造全透明可视工厂，我提升制程良率优势与成本优势',
        },
        {
            id:'5',
            href:'#',
            bkImg: hotSpot1,
            logoImg: logo,
            name:'医药流通',
            discription:'面向医药批发采、供、销业财一体化，提升全业务链条的数字化管控',
        },
        {
            id:'6',
            href:'#',
            bkImg: hotSpot1,
            logoImg: logo,
            name:'建筑行业',
            discription:'实现项目全生命周期多层级协同管理，降低项目风险',
        },
        {
            id:'7',
            href:'#',
            bkImg: hotSpot1,
            logoImg: logo,
            name:'钢铁冶金',
            discription:'覆盖炼铁、炼钢轧钢、金属加工和钢贸业态，助力企业降本增效',
        },
        {
            id:'8',
            href:'#',
            bkImg: hotSpot1,
            logoImg: logo,
            name:'制药行业',
            discription:'实现研产销及GMP合规管控体化运营，提升企业经营管理效率',
        },
        
    ]

    const slideList2 = [
        {
            id:'1',
            href:'#',
            bkImg: hotSpot1,
            logoImg: logo,
            name:'能源与资源',
            discription:'构建企业“节能降耗、降本增效、智能制造、管理提升”的解决方案',
        },
        {
            id:'2',
            href:'#',
            bkImg: hotSpot1,
            logoImg: logo,
            name:'房地产',
            discription:'帮助房地产行业实现人财税精细化管理，重塑企业核心竞争力',
        },
        {
            id:'3',
            href:'#',
            bkImg: hotSpot1,
            logoImg: logo,
            name:'食品饮料',
            discription:'提供预业财人资税精益管理，食安追踪与溯源等数字化解决方案',
        },
        {
            id:'4',
            href:'#',
            bkImg: hotSpot1,
            logoImg: logo,
            name:'交通与物流',
            discription:'助力客户转换管理模式，赋能企业数字化转型',
        },
        {
            id:'5',
            href:'#',
            bkImg: hotSpot1,
            logoImg: logo,
            name:'日化用品',
            discription:'构建以IPD体系为核心的产品创新研发管控体系',
        },
        {
            id:'6',
            href:'#',
            bkImg: hotSpot1,
            logoImg: logo,
            name:'流程制造',
            discription:'聚焦连续性生产特性，提供集成PLM+ERP+MES+BI——体化解决方案',
        },
        {
            id:'7',
            href:'#',
            bkImg: hotSpot1,
            logoImg: logo,
            name:'住宿餐饮',
            discription:'为餐饮企业建设集团化业务与管控平台，扫提升效率降低风险',
        },
        {
            id:'8',
            href:'#',
            bkImg: hotSpot1,
            logoImg: logo,
            name:'批发与零售',
            discription:'帮助零售企业构建“人、货场”全新体系，实现全面提升',
        },
    ]

    // 公司列表
    const bankSlideList1 = [
        {
            id:'1',
            href:'#',
            bkImg: hotSpot2,
            logoImg: supply,
            discription:'温氏集团20多年前就和金蝶开展信息化合作，做到了“从农场到餐桌”的全程监管，开启产业互联网新玩法',
        },
        {
            id:'2',
            href:'#',
            bkImg: hotSpot2,
            logoImg: supply,
            discription:'金蝶s-HR通过数据驱动的能力，打造了国贸股份新EBC信息平台，以50个业务组织，1021个组织协同管理，助力国贸股份数字化战略',
        },
        {
            id:'3',
            href:'#',
            bkImg: hotSpot2,
            logoImg: supply,
            discription:'钢铁企业的生产环节是制造业当中比较复杂的，更需要数字化的赋能来解决很多人为达不到或人为能达到但效果不好的问题',
        },
    ]
    const bankSlideList2 = [
        {
            id:'1',
            href:'#',
            bkImg: hotSpot2,
            logoImg: supply,
            discription:'钢铁企业的生产环节是制造业当中比较复杂的，更需要数字化的赋能来解决很多人为达不到或人为能达到但效果不好的问题',
        },
        {
            id:'2',
            href:'#',
            bkImg: hotSpot2,
            logoImg: supply,
            discription:'金蝶s-我们对民族品牌坚定不移的支持，也希望通过与金蝶的合作，能够为国产软件在制造业管理方面建立品牌。依托金蝶云，服务全球客户',
        },
        {
            id:'3',
            href:'#',
            bkImg: hotSpot2,
            logoImg: supply,
            discription:'与金蝶长达八年的合作我们建立了深厚的友谊，金蝶陪伴百瑞源一路成长，帮助我们从一家传统农产品加工型企业，逐渐转型到数字化企业',
        },
    ]

    // 轮播图
    // const scrollList = [
    //     {
    //         id:'1',
    //     },
    //     {
    //         id:'2',
    //     },
    //     {
    //         id:'3',
    //     },
    //     {
    //         id:'4',
    //     },
    //     {
    //         id:'5',
    //     },
    //     {
    //         id:'6',
    //     },
    //     {
    //         id:'7',
    //     },
    //     {
    //         id:'8',
    //     },
    //     {
    //         id:'9',
    //     },
    //     {
    //         id:'10',
    //     },
    //     {
    //         id:'11',
    //     },
    //     {
    //         id:'12',
    //     },
    // ]

    // 资源下载
    const materialSlideList1 = [
        {
            id:'1',
            href:'#',
            name:'数字员工能为您的企业做什么',
            discription:'《财务数字员工白皮书》',
        },
        {
            id:'2',
            href:'#',
            name:'如何加快推进国资数字化转型',
            discription:'《国资国企数字转型蓝皮书》',
        },
        {
            id:'3',
            href:'#',
            name:'30分钟读懂装备制造业数字化转型',
            discription:'《装备制造业数字化转型白皮书》',
        },
    ]
    const materialSlideList2 = [
        {
            id:'1',
            href:'#',
            name:'数字化如何助力生命科学产业',
            discription:'《生命科学产业数字化转型白皮书》',
        },
        {
            id:'2',
            href:'#',
            name:'光伏行业如何从全球销售走向全球运营',
            discription:'《光伏行业数字化联合白皮书》',
        },
        {
            id:'3',
            href:'#',
            name:'数字化如何赋能地产企业应对机遇与挑战',
            discription:'《不动产产业数字化转型白皮书》',
        },
    ]
    

    // footer数据
    const titleList = [
        {
            id:'1',
            name:'为什么选择金蝶',
            detailList:[
                {
                    id:'1-1',
                    name:'了解金蝶',
                    href:'#',
                },
                {
                    id:'1-2',
                    name:'金蝶荣誉',
                    href:'#',
                },
                {
                    id:'1-3',
                    name:'投资者关系',
                    href:'#',
                },
                {
                    id:'1-4',
                    name:'客户案例',
                    href:'#',
                },
                {
                    id:'1-5',
                    name:'新闻动态',
                    href:'#',
                },
                {
                    id:'1-6',
                    name:'联系我们',
                    href:'#',
                },
            ]
        },
        {
            id:'2',
            name:'产品',
            detailList:[
                {
                    id:'2-1',
                    name:'财务云',
                    href:'#',
                },
                {
                    id:'2-2',
                    name:'税务云',
                    href:'#',
                },
                {
                    id:'2-3',
                    name:'人力云',
                    href:'#',
                },
                {
                    id:'2-4',
                    name:'企业级AI平台',
                    href:'#',
                },
                {
                    id:'2-5',
                    name:'大型企业SaaS管理',
                    href:'#',
                },
                {
                    id:'2-6',
                    name:'成长型企业EBC',
                    href:'#',
                },
                {
                    id:'2-7',
                    name:'小型企业SaaS管理',
                    href:'#',
                },
            ]
        },
        {
            id:'3',
            name:'解决方案',
            detailList:[
                {
                    id:'3-1',
                    name:'装备制造',
                    href:'#',
                },
                {
                    id:'3-2',
                    name:'建筑行业',
                    href:'#',
                },
                {
                    id:'3-3',
                    name:'汽配行业',
                    href:'#',
                },
                {
                    id:'3-4',
                    name:'电子半导体',
                    href:'#',
                },
                {
                    id:'3-5',
                    name:'医药流通',
                    href:'#',
                },
                {
                    id:'3-6',
                    name:'现代农牧',
                    href:'#',
                },
                {
                    id:'3-7',
                    name:'钢铁冶金',
                    href:'#',
                },
            ]
        },
        {
            id:'4',
            name:'服务支持',
            detailList:[
                {
                    id:'4-1',
                    name:'客户成功体系',
                    href:'#',
                },
                {
                    id:'4-2',
                    name:'服务产品与方案',
                    href:'#',
                },
                {
                    id:'4-3',
                    name:'正版验证',
                    href:'#',
                },
                {
                    id:'4-4',
                    name:'盗版举报',
                    href:'#',
                },
                {
                    id:'4-5',
                    name:'产品生命周期',
                    href:'#',
                },
                {
                    id:'4-6',
                    name:'产品安全',
                    href:'#',
                },
                {
                    id:'4-7',
                    name:'产品及服务条款',
                    href:'#',
                },
            ]
        },
        {
            id:'5',
            name:'快速连接',
            detailList:[
                {
                    id:'5-1',
                    name:'2023全球创见者大会',
                    href:'#',
                },
                {
                    id:'5-2',
                    name:'什么是ERP',
                    href:'#',
                },
                {
                    id:'5-3',
                    name:'新手课堂',
                    href:'#',
                },
                {
                    id:'5-4',
                    name:'学习与成长',
                    href:'#',
                },
                {
                    id:'5-5',
                    name:'资料下载',
                    href:'#',
                },
                {
                    id:'5-6',
                    name:'查找经销商',
                    href:'#',
                },
                {
                    id:'5-7',
                    name:'咨询专栏',
                    href:'#',
                },
            ]
        },
    ]
    
    const partnerList = [
        {
            id:'1',
            name:'小微企业云服务平台',
        },
        {
            id:'2',
            name:'金蝶发票云',
        },
        {
            id:'3',
            name:'管易云',
        },
        {
            id:'4',
            name:'车商税',
        },
        {
            id:'5',
            name:'账无忧',
        },
        {
            id:'6',
            name:'智慧记',
        },
        {
            id:'7',
            name:'我家云',
        },
        {
            id:'8',
            name:'金蝶天燕',
        },
        {
            id:'9',
            name:'精一教育',
        },
        {
            id:'10',
            name:'云镝智慧',
        },
        {
            id:'11',
            name:'金蝶征信',
        },
        {
            id:'12',
            name:'金蝶信心链',
        },
        {
            id:'13',
            name:'金蝶星域工业互联网平台',
        },
    ]


    // 搜索
    let isSearch = ref(false);
    let count = ref(0);
    const search = () => {
        count.value++
        if(count.value % 2 === 0 ){
            isSearch.value = false;
        }else{
            isSearch.value = true;
        }
        console.log(isSearch.value)
    }
    
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
        clear: both;
        line-height: 100px;
        width: 1440px;
        margin-left: -40px;
        height: 105px;
        // box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
        position: sticky;
        top: 0px;
        background-color: white;
        z-index: 888;

        // 金蝶logo
        .header_logo{
            display: inline-block;
            // height: 31.5%;
            // height: 40.3%;
            height: 47%;
            padding-top: 27px;
            // padding-left: 2.36%;
            padding-left: 5.1%;
            position: absolute;
            z-index: 999;
            vertical-align: middle;   
        }

        // 导航栏
        .header_nav{
            display: inline-block;
            height: 100px;
            padding: -20px 0 0 0;
            // margin-left: 15.6%;
            margin-left: 17.5%;

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
                        .hover-line{
                            width: 100%;
                            left:0;
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
                z-index: 999;

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
                        
                        .left_item_text_hover{
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
                                                vertical-align: top;
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
                                                    vertical-align: middle;
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
                z-index: 999;

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
                    position: absolute;
                    top: 0px;
                    right: 145px;
                    display: inline-block;
                    height: 50px;
                    // vertical-align: middle;
                    img{
                        width: 26px;
                        height: 26px;
                        padding: 12px;
                        display: inline-block;
                        position: relative;
                        top: 20px;
                        margin: 5px 6px 0 0;
                        
                    }
                    .region{
                        position: absolute;
                        background-color: rgb(255, 255, 255);
                        width: 96px;
                        height: 0px;
                        left: 50%;
                        margin-left: -48px;
                        top: 65px;
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
                    position: absolute;
                    width: 100px;
                    height: 24px;
                    top: 24px;
                    right: 19px;
                    padding-right: 26px;
                    
                    .header_login_right{
                        padding: 0 5px;
                        display: inline-block;
                        color: rgb(87, 93, 108);
                        font-size: 14px;
                    }
                    span{
                        display: inline-block;
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
                margin-right: 40px;
                .search_img{
                    position: relative;
                    top: 18px;
                    width: 23px;
                    height: 23px;
                    padding: 10px 28px;
                    display: inline-block;
                    cursor: pointer;
                }
            }
        }
       
    }
   
    // 内容部分
    .content_content{
        // margin-left: 130px;
        position: relative;

        // 大标题、介绍、方案详情按钮
        .content_introduction{
            margin-left: 130px;
            display: inline-block;
            margin-top: 55px;
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
                margin-top: 56px;
                width: 148px;
                height: 48px;
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
                        line-height: 48px;
                        transition: padding-left 0.3s ease;
                    }
                    .icon{
                        display: inline-block;
                        width: 0px;
                        margin: 0 8px 0 -3px;
                        line-height: 45px;
                        vertical-align: top;
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
            vertical-align: top;
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
                        top: 29px;
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
                    vertical-align: middle;

                    // li
                    .infoNav_list{
                        display: inline-block;
                        padding: 10px;
                        width: auto;
                        margin-right: 20px;
                        border: 1px solid rgb(136, 136, 136);
                        border-radius: 30px;
                        background-color: white;
                        vertical-align: middle;
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
            // margin: 370px 0 0 120px;
            width: 85%;
            height: 303px;
            overflow: hidden;
            // position: absolute;

            // // 第一次加载动画
            // animation-duration: 1s;
            // animation-name: slidein;

            // div
            .hotSpot{
                width: 353px;
                height: 303px;
                margin: 0 10px;
                display: inline-block;
                border-radius: 20px; 
                overflow: hidden;
                white-space: nowrap;
                // 第一次加载动画
                animation-duration: 3s;
                animation-name: slidein;
                // margin-top: 300px;

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
                .hotSpot_box:hover .hotSpot_imgBox .hotSpot_img{
                    transform: scale(1.1);
                }
                .hotSpot_box:hover .hotSpot_text_box .hotSpot_text .hotSpot_moreBox{
                    color: rgb(33, 131, 233);
                }
                .hotSpot_box:hover .hotSpot_text_box .hotSpot_text .hotSpot_moreBox .hotSpot_more_arrow .iconfont{
                    color: rgb(33, 131, 233);
                }
            }
        }
        // 第一次加载时向上滑的动画
        @keyframes slidein {
            from {
                margin-top: 300px
            }

            to {
                margin-top: 0px;
            }
        }

        // 金蝶云产品
        .content_cloudpro{
            width: 100%;
            height: 785px;
            padding: 100px 0 70px 0;

            .wrapper{
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
                
                .content_cloudpro_cont_box{
                    width: 1100px;
                    position: relative;
                    // opacity: 0.1;
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
                                    line-height: 45px;
                                    vertical-align: top;
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
                                    line-height: 45px;
                                    vertical-align: top;
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

            // content_cloudpro_cont_box每次v-show出现时一闪而过的光影效果
            .blink-enter-active,
            .blink-leave-active {
                transition: opacity 0.2s ease;
            }
            .blink-enter-from,
            .blink-leave-to {
                opacity: 0;
            }
        }

        // 中国的软件
        .content_sorft{
            // width: 100%;
            margin: 0 0 0 -40px;
            width: 1440px;
            height: 464px;
            padding: 100px 0 60px 0;
            background-color: rgb(245, 245, 245);

            .wrapper{
                // width: 80%;
                // margin: 0 170px;
                margin: 0 12.5%;

                .title{
                    .title_text{
                        font-size: 34px;
                        line-height: 51px;
                        color: rgb(37, 43, 58);
                        font-weight: 800;
                        text-align: center;
                    }
                }

                // 数据
                .content_number{
                    // width: 1100px;
                    .number_cont{
                        // ul
                        .number_list{
                            // li
                            .number_item{
                                padding: 50px 0 70px 0;
                                display: inline-block;
                                width: 33.33%;
                                // border: 1px solid rgb(227, 74, 23);
                                vertical-align: middle;

                                .number_box{
                                    text-align: center;
                                    border-right: 1px solid rgba(133, 154, 184, 0.3);

                                    .number_num{
                                        font-size: 52px;
                                        line-height: 78px;
                                        color: rgb(33, 131, 233);
                                        display: inline-block;
                                    }

                                    .number_unit{
                                        font-size: 38px;
                                        line-height: 57px;
                                        color: rgb(33, 131, 233);
                                        display: inline-block;
                                    }

                                }
                                .number_text_top{
                                    text-align: center;
                                    font-size: 18px;
                                    line-height: 22px;
                                    color: rgb(37, 43, 58);
                                }
                                .number_text_bottom{
                                    text-align: center;
                                    font-size: 18px;
                                    line-height: 22px;
                                    color: rgb(37, 43, 58);
                                }
                            }
                            .number_item:nth-of-type(3) .number_box{
                                border: none;
                            }
                        }
                    }
                }

                // 奖项
                .content_prize{
                    padding: 40px 0 20px 0; 
                    border-top: 1px solid rgba(133, 154, 184, 0.3);
                    // height: 130px;
                    margin: 0 -5%;
                    .prize_cont{
                        
                        // ul
                        .prize_list{
                            // margin: 0 -5%;
                            // li
                            .prize_item{
                                margin-right: 20px;
                                display: inline-block;
                                // position: relative;

                                .prize_img{
                                    // position: absolute;

                                    .img{
                                        width: 204px;
                                        height: 100px;
                                    }
                                }
                                .prize_text{
                                    // position: absolute;
                                    // text-align: center;
                                    margin-top: -100px;

                                    .title{
                                        text-align: center;
                                        font-size: 15px;
                                        line-height: 22.5px;
                                        color: rgb(37, 43, 58);
                                        padding: 10px 0;
                                        width: 160px;
                                        margin-left: 21.5px;
                                        margin-bottom: 10px;
                                        border-bottom: 1px solid rgba(133, 154, 184, 0.3);
                                    }
                                    .discription{
                                        text-align: center;

                                        .discription_text{
                                            font-size: 15px;
                                            line-height: 22.5px;
                                            color: rgb(37, 43, 58);
                                            font-weight: 460;
                                        }
                                        .discription_name{
                                            font-size: 15px;
                                            line-height: 22.5px;
                                            color: rgb(37, 43, 58);
                                            font-weight: 460;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        // 行业列表
        .content_industry{
            width: 100%;
            height: 812px;
            padding-top: 100px;
            .wrapper{
                margin: 0 9.55%;
                position: relative;

                .industry_title{
                    font-size: 34px;
                    line-height: 51px;
                    color: rgb(37, 43, 58);
                    font-weight: 460;
                    margin-bottom: 40px;
                }

                .content_cont{
                    margin: 0 -7%;
                    position: relative;
                    // background-color: lightblue;
                    
                    // 行业内容box
                    .swiper_wrapper{
                        // background-color: lightblue;
                        // margin: 0 5%;
                        // div
                        .swiper_slide{
                            display: inline-block;
                            height: 320px;
                            vertical-align: middle;
                            width: 18%;
                            margin: 0 20px 30px 53px;
                            // a
                            .slide{
                                display: inline-block;

                                .img{
                                    img{
                                        width: 252px;
                                        height: 320px;
                                        border-radius: 20px;
                                    }
                                    
                                }
                                .title{
                                    margin: -230px 0 0 23px;
                                    // margin: -250px 0 0 23px;
                                    text-align: center;
                                    width: 202px;
                                    // height: 170px;
                                    height: 150px;
                                    overflow: hidden;
                                    transition: all 0.3s ease-in-out;

                                    .title_img{
                                        // width: 128px;
                                        width: 98px;
                                        height: 98px;
                                    }
                                    .title_name{
                                        font-size: 24px;
                                        line-height: 36px;
                                        color: rgb(255, 255, 255);
                                        margin-top: 12px;
                                        
                                    }
                                    .title_dis{
                                        font-size: 14px;
                                        line-height: 21px;
                                        color: rgb(255, 255, 255);
                                        width: 202px;
                                    }
                                }
                            }
                            .slide:hover .title{
                                margin: -270px 0 0 23px;
                                height: 220px;
                                
                            }
                        }
                    }        
                }
                // 左按钮
                .prevDiv{
                    position: absolute;
                    z-index: 999;
                    left: -60px;
                    top: 425px;
                    margin: 0 -5%;
                    transform: rotate(0.5turn);
                    cursor: pointer;
                    
                    .icon-jiantou2{
                        font-size: 100px;
                        color: rgb(33, 131, 233);
                        overflow: visible;
                    }
                }
                // 右按钮
                .nextDiv{
                    position: absolute;
                    z-index: 999;
                    right: -60px;
                    top: 425px;
                    margin: 0 -5%;
                    cursor: pointer;
                    
                    .icon-jiantou2{
                        font-size: 100px;
                        color: rgb(33, 131, 233);
                        overflow: visible;
                    }
                }
                
            }
        }
        
        // 公司列表
        .content_bank{
            width: 100%;
            height: 812px;
            padding-top: 100px;
            .wrapper{
                margin: 0 9.55%;
                position: relative;

                .bank_title{
                    font-size: 34px;
                    line-height: 51px;
                    color: rgb(37, 43, 58);
                    font-weight: 460;
                    margin-bottom: 40px;
                }

                .content_cont{
                    margin: 0 -5%;
                    position: relative;
                    
                    // 公司内容box
                    .swiper_wrapper{

                        .swiper_slide{
                            display: inline-block;
                            height: 478px;
                            vertical-align: middle;
                            width: 27.9%;
                            // 337
                            margin: 0 0px 30px 50px;
                            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px 0px;
                            border-radius: 20px;
                            overflow: hidden;
                            position: relative;
                            // border: 1px solid yellow;

                            // a
                            .slide{
                                display: inline-block;
                                
                                .img{
                                    position: relative;
                                    .cont{
                                        width: 100%;
                                        height: 224px;
                                    }
                                    .logo{
                                        width: 43px;
                                        height: 30px;
                                        position: absolute;
                                        right: 20px;
                                        bottom: 20px;
                                    }
                                }
                                .title{
                                    padding: 10px 15px;
                                    overflow: hidden;
                                    transition: all 0.3s ease-in-out;

                                    .title_img{
                                        // width: 128px;
                                        width: 52px;
                                        height: 52px;
                                    }
                                    .title_dis{
                                        font-size: 16px;
                                        line-height: 24px;
                                        color: rgb(37, 43, 58);
                                        width: 100%;
                                        padding-top: 23px; 
                                    }
                                    .more_box{
                                        height: 40px;
                                        margin-top: 40px;

                                        .title_more{
                                            font-size: 14px;
                                            line-height: 21px;
                                            color: rgb(37, 43, 58); 
                                            position: absolute;
                                            bottom: 20px;
                                        }
                                        .title_arrow{
                                            width: 0px;
                                            height: 35px;
                                            position: absolute;
                                            bottom: 13px;
                                            left: 80px;
                                            transition: all 0.5s ease;
                                        }
                                    }
                                    .more_box:hover .title_more{
                                        color: rgb(33, 131, 233);
                                    }
                                    .more_box:hover .title_arrow{
                                        width: 35px;
                                    }
                                }
                            }
                        }
                    }
                    
                }
                // 左按钮
                .prevDiv{
                    position: absolute;
                    z-index: 999;
                    left: -60px;
                    top: 317px;
                    margin: 0 -5%;
                    transform: rotate(0.5turn);
                    cursor: pointer;
                    
                    .icon-jiantou2{
                        font-size: 100px;
                        color: rgb(33, 131, 233);
                        overflow: visible;
                    }
                }
                // 右按钮
                .nextDiv{
                    position: absolute;
                    z-index: 999;
                    right: -60px;
                    top: 317px;
                    margin: 0 -5%;
                    cursor: pointer;
                    
                    .icon-jiantou2{
                        font-size: 100px;
                        color: rgb(33, 131, 233);
                        overflow: visible;
                    }
                }
                
            }
        }

        // 轮播图
        .content_srollImg{
            height: 150px;
            overflow: hidden;
            // background-color: lightblue;
            width: 2440px;
            margin: 0 -10%;
            .scroll_box{
                // border: 1px solid yellow;
                width: 1640px;
                position: relative;
                animation: 10s linear 0s infinite reverse slidein;
                @keyframes slidein {
                    from {
                        margin-left: -10px;
                    }
                    to {
                        margin-left: 500px;
                    }
                }
                .scroll_item1{
                    width: 260px;
                    height: 140px;
                    // border: 1px solid red;
                    // margin: 0 10px;
                    left: 460px;
                    position: absolute;
                    display: inline-block;

                    .icon-shunfengsuyun{
                        font-size:130px;
                        color: rgb(170, 170, 170);
                    }
                    
                }
                .scroll_item2{
                    width: 260px;
                    height: 140px;
                    // border: 1px solid red;
                    // margin: 0 10px;
                    left: 830px;
                    display: inline-block;
                    position: absolute;
                    
                    .icon-shunfengsuyun{
                        font-size:130px;
                        color: rgb(170, 170, 170);
                    }
                    
                }
                .scroll_item3{
                    width: 260px;
                    height: 140px;
                    // border: 1px solid red;
                    left: 1200px;
                    display: inline-block;
                    position: absolute;
                   
                    .icon-shunfengsuyun{
                        font-size:130px;
                        color: rgb(170, 170, 170);
                    }
                    
                   
                }
                .scroll_item5{
                    width: 260px;
                    height: 140px;
                    // border: 1px solid red;
                    left: 100px;
                    display: inline-block;
                    position: absolute;

                    .icon-shunfengsuyun{
                        font-size:130px;
                        color: rgb(170, 170, 170);
                    }
                }
            }
            
           
        }

        // 资料下载
        .content_material{
            width: 100%;
            margin: 0 0 0 -40px;
            width: 1440px;
            height: 344px;
            padding: 100px 0;
            background-color: rgb(20, 45, 68);

            .wrapper{
                margin: 0 9.55%;
                position: relative;

                .material_title{
                    font-size: 34px;
                    line-height: 51px;
                    color: rgb(255, 255, 255);
                    font-weight: 460;
                    margin-bottom: 20px;
                }

                .content_cont{
                    margin: 0 -5%;
                    position: relative;
                    
                    // 公司内容box
                    .swiper_wrapper{

                        .swiper_slide{
                            display: inline-block;
                            height: 200px;
                            vertical-align: middle;
                            width: 25.65%;
                            padding: 28px;
                            // 337
                            margin: 0 0px 0 30px;
                            // box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px 0px;
                            // border-radius: 20px;
                            overflow: hidden;
                            position: relative;
                            background-image: radial-gradient(circle, rgb(6, 35, 165) 0px, rgba(15, 43, 90, 0.1) 100%);
                            // border: 1px solid yellow;

                            // a
                            .slide{
                                display: inline-block;
                                height: 224px;
                                
                                
                                .img{
                                    border-right: 1px solid rgba(133, 154, 184, 0.298);
                                    width: 100%;
                                    height: 224px;
                                    .logo{
                                        width: 73px;
                                        height: 60px;
                                        position: absolute;
                                        right: 50px;
                                        bottom: 50px;
                                        opacity:0.4;
                                    }
                                }
                                .title{
                                    // position: absolute;
                                    padding: 10px 15px;
                                    margin-top: -230px;
                                    overflow: hidden;
                                    transition: all 0.3s ease-in-out;

                                    
                                    .title_name{
                                        font-size: 24px;
                                        line-height: 36px;
                                        color: rgb(255, 255, 255);
                                        margin-top: 0px;
                                        
                                    }
                                    .title_dis{
                                        font-size: 16px;
                                        line-height: 24px;
                                        color: rgb(255, 255, 255);
                                        width: 100%;
                                        padding-top: 23px; 
                                    }
                                    .more_box{
                                        height: 40px;

                                        // margin-top: 40px;

                                        .title_more{
                                            font-size: 14px;
                                            line-height: 21px;
                                            color: rgb(33, 131, 233); 
                                            position: absolute;
                                            bottom: 20px;
                                        }
                                        .title_arrow{
                                            width: 35px;
                                            height: 35px;
                                            position: absolute;
                                            bottom: 13px;
                                            left: 120px;
                                            transition: all 1s ease;
                                        }
                                    }
                                }
                            }
                        }
                        .swiper_slide:nth-of-type(3n+3) .slide .img{
                            border: none;
                        }
                    }  
                }
                // 左按钮
                .prevDiv{
                    position: absolute;
                    z-index: 999;
                    left: -60px;
                    top: 140px;
                    margin: 0 -5%;
                    transform: rotate(0.5turn);
                    cursor: pointer;
                    
                    .icon-jiantou2{
                        font-size: 100px;
                        color: rgb(33, 131, 233);
                        overflow: visible;
                    }
                }
                // 右按钮
                .nextDiv{
                    position: absolute;
                    z-index: 999;
                    right: -60px;
                    top: 140px;
                    margin: 0 -5%;
                    cursor: pointer;
                    
                    .icon-jiantou2{
                        font-size: 100px;
                        color: rgb(33, 131, 233);
                        overflow: visible;
                    }
                }
                
            }
        }

        // 疑问
        .content_yiwen{
            height:391px;
            background-color: rgb(245, 252, 255);
            position: relative;
            margin: 0 0 0 -40px;
            width: 1440px;

            .wrapper{
                margin: 0 12.5%;

                .info{
                    padding: 50px 0 36px 0;
                    display: inline-block;

                    .info_title{
                        margin-bottom: 25px;
                        font-size: 34px;
                        line-height: 51px;
                        color: rgb(33,131,233);
                    }
                    .info_text{
                        margin-bottom: 20px;
                        font-size: 18px;
                        line-height: 28.8px;
                        color: rgb(37,43,58);
                    }
                    .info_connect{
                        .qr{
                            margin-right: 19px;
                            display: inline-block;
                            vertical-align: middle;
                            .qr_img{
                                width: 152px;
                                height: 152px;
                            }
                        }
                        .qr_intro{
                            font-size: 18px;
                            line-height: 28.8px;
                            color: rgb(37,43,58);
                            display: inline-block;
                            vertical-align: middle;
                        }
                    }
                }
                .img{
                    display: inline-block;
                    position: absolute;
                    bottom: -2.5px;
                    right: 60px;
                    img{
                        width: 530px;
                        height: 304px;
                    }
                }
            }
        }

        // 评分
        .content_score{
            padding: 3.55% 0;
            background-color: rgb(36, 63, 84);
            margin: 0 0 0 -40px;
            width: 1440px;
            .text{
                font-size: 32px;
                color: white;
                display: inline-block;
                margin-left: 25.6%;
            }
            .dianzan{
                display: inline-block;
                width: 98px;
                height: 38px;
                border: 1px solid white;
                border-radius: 5px;
                margin-left: 4.75%;
                cursor: pointer;

                .icon-dianzan_kuai{
                    padding: 0 38px;
                    font-size: 25px;
                    line-height: 36px;
                    color: white;
                }
            }
            .cai{
                display: inline-block;
                transform: rotate(0.5turn);
                width: 98px;
                height: 38px;
                border: 1px solid white;
                border-radius: 5px;
                margin-left: 1.1%;
                cursor: pointer;
                
                .icon-dianzan_kuai{
                    padding: 0 38px;
                    font-size: 25px;
                    line-height: 36px;
                    color: white;
                }
            }
            
        }


    }

    // footer部分
    .footer_content{
        background-color: rgb(20, 45, 68);
        height: 570px;
        margin: 0 0 0 -40px;
        width: 1440px;
        .wrapper{
            margin: 0 1% 0 5.9%;
            padding-top: 38px;
            margin-bottom: 33px;
            position: relative;
            // 左侧
            .footer_left{
                width: 24.1%;
                height: 303px;
                display: inline-block;
                vertical-align: middle;
                margin-bottom: 33px;
                // 307x303
                .logo{
                    margin-bottom: 35px;
                    img{
                        width: 49.85%;
                        height: 40px;
                        // 153x38
                    }
                }
                .consult{
                    font-size: 14px;
                    line-height: 21px;
                    color: rgba(255, 255, 255, 0.5);
                }
                .phone{
                    font-size: 20px;
                    line-height: 40px;
                    color: rgb(255, 255, 255);
                    margin-bottom: 16px;
                }
                .focus{
                    font-size: 14px;
                    line-height: 21px;
                    color: rgba(255, 255, 255, 0.5);
                }
                .img{
                    margin-top: 10px;

                    .icon-weixin{
                        font-size: 46px;
                        color: rgba(255, 255, 255, 0.5);
                        margin-right: 14px;
                        vertical-align: middle;
                        cursor: pointer;
                        // 微信qr
                        .qr{
                            position: absolute;
                            left: -45px;
                            top: 258px;
                           
                            .qr_img{
                                width: 0px;
                                height: 35px;
                            }
                        }
                    }
                    .icon-weixin:hover{
                        color: white;
                    }
                    .icon-weixin:hover .qr .qr_img{
                        width: 35px;
                    }
                    .icon-weibo{
                        font-size: 42px;
                        color: rgba(255, 255, 255, 0.5);
                        margin-right: 14px;
                        vertical-align: middle;
                        cursor: pointer;
                    }
                    .icon-weibo:hover{
                        color: white;
                    }
                    .icon-shejiaotubiao-46{
                        font-size: 47px;
                        color: rgba(255, 255, 255, 0.5);
                        margin-right: 14px;
                        vertical-align: middle;
                        cursor: pointer;
                    }
                    .icon-shejiaotubiao-46:hover{
                        color: white;
                    }
                }
            }
            // 右侧
            .footer_right{
                display: inline-block;
                width: 75%;
                position: relative;
                vertical-align: top;
                // border: 1px solid red;
                // ul
                .title_list{
                    
                    // li
                    .title_item{
                        display: inline-block;
                        margin-right: 80px;
                        // border: 1px solid yellow;
                        vertical-align: top;

                        .title{
                            margin-bottom: 10px;
                            font-size: 18px;
                            line-height: 40px;
                            color: white;
                        }
                        // ul
                        .detail_list{
                            // position: absolute;
                            vertical-align: top;
                            // margin-right: 90px;
        
                            // li
                            .detail_item{
                                .detail{
                                    font-size: 14px;
                                    line-height: 32px;
                                    color: rgba(255, 255, 255, 0.5);
                                }
                            }
                            .detail_item:hover .detail{
                                color: white;
                            }
                        }
                    }
                }
            }
            // 底部
            .footer_partner{
                padding: 18px 0;
                border-bottom: 1px solid rgba(255, 255, 255, 0.5);
                width: 94%;

                .name{
                    font-size: 14px;
                    line-height: 32px;
                    color: rgba(255, 255, 255, 0.5);
                    display: inline-block;
                }
                // ul
                .partner_list{
                    display: inline-block;
                    width: 80%;
                    vertical-align: top;

                    // li
                    .partner_item{
                        display: inline-block;
                        margin: 0 10px;
                        cursor: pointer;

                        .partner_name{
                            font-size: 14px;
                            line-height: 32px;
                            color: rgba(255, 255, 255, 0.5);
                        }
                        .partner_name:hover{
                            color: white;
                        }
                    }
                }
            }
            .footer_site{
                padding: 24px 0 34.5px 0;
                position: relative;
                p{
                    font-size: 14px;
                    line-height: 32px;
                    color: rgba(255, 255, 255, 0.5);
                    display: inline-block;
                    padding-right: 10px;
                    cursor: pointer;
                }
                p:hover{
                    color: white;
                }
                .low{
                    position: absolute;
                    right: 65px;
                }
            }
        }
    }

    // 侧边栏
    .sidebar{
        width: 80px;
        height: 329px;
        background-color: rgb(47, 128, 244);
        border-radius: 20px;
        position: fixed;
        right: 0px;
        top: 219px;
        // background-color: white;
        z-index: 999;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 2px 29px 0px;
        
        // 售前服务
        .sidebar_pre{
            height: 20%;
            width: 100%;
            padding: 22px 0;
            border-bottom: 1px solid rgba(229, 229, 229, 0.2);
            border-radius: 20px 20px 0 0;
            position: relative;
            display: inline-block;

            .pre_img{
                width: 30px;
                height: 30px;
                padding: 0 22px;

                .icon-liaotian{
                    font-size: 35px;
                    color: white;
                    line-height: 38px;
                }
            }
            .pre_text{
                font-size: 12px;
                color: white;
                line-height: 48px;
                text-align: center;
            }

            // 售前服务hover出现box
            .pre_more_box{
                position: absolute;
                right: -555px;
                top: 0px;
                z-index: 88;
                width: 377px;
                // width: 0px;
                border-radius: 20px;
                transition: all 0.5s ease-in-out;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                
                .box_top{
                    background-color: rgb(47, 128, 244);
                    width: 100%;
                    height: 227px;
                    border-radius: 20px 20px 0 0;

                    .top_img{
                        padding: 40px 168px 0 168px;
                        
                        .icon-dadianhua{
                            font-size: 37px;
                            color: white;
                            line-height: 50px;
                            text-align: center;
                        }
                    }
                    .top_text{
                        margin: 20px 0;
                        font-size: 16px;
                        line-height: 16px;
                        color: white;
                        text-align: center;
                    }
                    .top_phone{
                        font-size: 30px;
                        line-height: 30px;
                        color: white;
                        text-align: center;
                    }
                }
                .box_bottom{
                    width: 100%;
                    height: 151px;
                    background-color: rgb(245, 245, 245);
                    border-radius: 0 0 20px 20px;

                    .bottom_left{
                        display: inline-block;
                        background-color: rgb(255, 255, 255);
                        width: 55%;
                        height: 100%;
                        vertical-align: top;
                        padding-left: 30px;
                        border-radius: 0 0 20px 20px;

                        .left_top{
                            margin-top: 20px;
                            .img_box{
                                display: inline-block;
                                vertical-align: middle;

                                .icon-liaotian{
                                    font-size: 25px;
                                    color: rgb(33, 131, 233);
                                    line-height: 30px;
                                }
                            }
                            .text{
                                display: inline-block;
                                font-size: 16px;
                                color: rgb(47, 128, 244);
                                line-height: 24px;
                                width: 62%;
                                padding-left: 20px;
                                vertical-align: middle;
                            }
                        }
                        .left_bottom{
                            font-size: 16px;
                            color: rgb(255, 255, 255);
                            line-height: 24px;
                            background-color: rgb(47, 128, 244);
                            cursor: pointer;
                            border-radius: 5px;
                            margin: 20px 0 0 45px;
                            padding: 3px 0 ;
                            width: 115px;
                            text-align: center;
                            
                        }
                    }
                    .bottom_right{
                        display: inline-block;
                        padding: 13px 0px 13px 7px;
                        img{
                            width: 125px;
                            height: 125px;
                        }
                    }
                }
            }
        }
        .sidebar_pre:hover{
            background-color: rgb(17, 105, 228);
        }
        .sidebar_pre:hover .pre_more_box{
            right: 100px;
        }
        
        // 售后服务
        .sidebar_after{
            height: 19%;
            width: 100%;
            padding: 22px 0;
            border-bottom: 1px solid rgba(229, 229, 229, 0.2);

            .after_img{
                width: 30px;
                height: 30px;
                padding: 0 22px;

                .icon-jishiliaotian{
                    font-size: 35px;
                    color: white;
                    line-height: 38px;
                }
            }
            .after_text{
                font-size: 12px;
                color: white;
                line-height: 48px;
                text-align: center;
            }
        }
        .sidebar_after:hover{
            background-color: rgb(17, 105, 228);
        }

        // 个人号
        .sidebar_self{
            position: relative;
            height: 20%;
            width: 100%;
            padding: 22px 0;
            border-radius: 0 0 20px 20px;
            // border-bottom: 1px solid rgba(229, 229, 229, 0.2);

            .self_img{
                width: 30px;
                height: 30px;
                padding: 0 24px;

                .icon-geren{
                    font-size: 32px;
                    color: white;
                    line-height: 30px;
                }
            }
            .self_text{
                font-size: 12px;
                color: white;
                line-height: 18px;
                padding: 10px 0;
                text-align: center;
            }
            .self_more_box{
                position: absolute;
                right: -555px;
                top: -80px;
                z-index: 88;
                padding: 20px;
                background-color: white;
                border-radius: 5px;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                transition: all 0.5s ease-in-out;

                // vertical-align: top;
                img{
                    width: 125px;
                    height: 125px;
                }
            }
        }
        .sidebar_self:hover{
            background-color: rgb(17, 105, 228);
        }
        .sidebar_self:hover .self_more_box{
            right: 90px;
        }
    }


    // 搜索box
    .search_box{
        width: 451px;
        height: 48px;
        position: absolute;
        // position: sticky;
        position: fixed;
        top: 42px;
        // top: 100px;
        right: 108px;
        background-color: rgb(255, 255, 255);
        border: 1px solid rgba(125, 125, 125, 0.34);
        border-radius: 2px;
        // transition: opacity 0.2s ease;
        animation-name: search;
        animation-duration: 1.5s;
        z-index: 999;
        overflow: hidden;

        input{
            background:none;  
            outline:none;  
            border:none;
            color: none;
            padding: 5px 20px;
            font-size: 16px;
            line-height: 38px;
            width: 80%;
            color: black;
        }
        .search_img{
            // top: 18px;
            width: 23px;
            height: 23px;
            padding: 0 10px;
            vertical-align: middle;
            display: inline-block;
            cursor: pointer;
        }     
    }
    @keyframes search {
        from {
            width: 0px;
        }

        to {
            width: 451px;
        }
    }






// 全文范围内的type='1',是指header_nav_sec_type1（二级导航栏在左+三级导航栏在右）的布局
// 全文范围内的type='2',是指header_nav_sec_type2（二级导航栏在上+三级导航栏在下）的布局
// 全文范围内的type='3',是指header_sec_right_item_box【 图片在左 + （标题+描述）在右 】的布局
// 全文范围内的type='4',是指header_sec_right_item_box【（图片+标题）在上 + 描述在下 】的布局
// 全文范围内的type='5',是指header_sec_right_item_box 一行俩个li 的布局
// 全文范围内的type='6',是指header_sec_right_item_box 一行四个li 的布局

</style>








