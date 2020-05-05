<template>
  <div>
    <header id="header" class="clearfix" data-current-skin="blue">
      <ul class="header-inner">
        <li id="menu-trigger" tp-topbar-click="menuTrigger" data-trigger="#sidebar">
          <div class="line-wrap">
            <div class="line top"></div>
            <div class="line center"></div>
            <div class="line bottom"></div>
          </div>
        </li>
        <li class="logo hidden-xs" id="textlogo">
          <a href="/">Material Admin</a>
        </li>
        <li class="hidden-xs hidden" id="imagelogo">
          <a href="index.html" class="m-l-10">
            <img src="/wb-webpack-seed/./img/40cee7941fe293f57085adf9dcf0208e.png" alt=""></a>
        </li>
        <li class="pull-right">
          <ul class="top-menu">
            <li id="toggle-width">
              <div class="toggle-switch">
                <input id="tw-switch" tp-topbar-change="menuTwSwitch" type="checkbox" hidden="hidden">
                <label for="tw-switch" class="ts-helper"></label>
              </div>
            </li>
            <li id="top-search" tp-topbar-click="topSearchTarget|open">
              <a href=""><i class="tm-icon zmdi zmdi-search"></i></a>
            </li>
            <li class="dropdown">
              <a data-toggle="dropdown" href=""> <i class="tm-icon zmdi zmdi-email"></i> <i class="tmn-counts">6</i> </a> <div class="dropdown-menu dropdown-menu-lg pull-right"> <div class="listview"> <div class="lv-header"> Messages </div> <div class="lv-body"> <a class="lv-item" href=""> <div class="media"> <div class="pull-left"> <img class="lv-img-sm" src="/wb-webpack-seed/./img/ebe4e5a773731fa7ab99c28861839026.jpg" alt=""> </div> <div class="media-body"> <div class="lv-title">David Belle</div> <small class="lv-small">Cum sociis natoque penatibus et magnis dis parturient montes </small> </div> </div> </a> <a class="lv-item" href=""> <div class="media"> <div class="pull-left"> <img class="lv-img-sm" src="/wb-webpack-seed/./img/80b4103bf05359fd3ab06e247001118a.jpg" alt=""> </div> <div class="media-body"> <div class="lv-title">Jonathan Morris</div> <small class="lv-small">Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel </small> </div> </div> </a> <a class="lv-item" href=""> <div class="media"> <div class="pull-left"> <img class="lv-img-sm" src="/wb-webpack-seed/./img/28030ab56747f62a12033c032797c3d4.jpg" alt=""> </div> <div class="media-body"> <div class="lv-title">Fredric Mitchell Jr.</div> <small class="lv-small">Phasellus a ante et est ornare accumsan at vel magnauis blandit turpis at augue ultricies </small> </div> </div> </a> <a class="lv-item" href=""> <div class="media"> <div class="pull-left"> <img class="lv-img-sm" src="/wb-webpack-seed/./img/68f59bc1a9dc09dac3e3c85acf07a629.jpg" alt=""> </div> <div class="media-body"> <div class="lv-title">Glenn Jecobs</div> <small class="lv-small">Ut vitae lacus sem ellentesque maximus, nunc sit amet varius dignissim, dui est consectetur neque </small> </div> </div> </a> <a class="lv-item" href=""> <div class="media"> <div class="pull-left"> <img class="lv-img-sm" src="/wb-webpack-seed/./img/68f59bc1a9dc09dac3e3c85acf07a629.jpg" alt=""> </div> <div class="media-body"> <div class="lv-title">Bill Phillips</div> <small class="lv-small">Proin laoreet commodo eros id faucibus. Donec ligula quam, imperdiet vel ante placerat </small> </div> </div> </a> </div> <a class="lv-footer" href="">View All</a> </div> </div> </li> <li class="dropdown"> <a data-toggle="dropdown" href=""> <i class="tm-icon zmdi zmdi-notifications"></i> <i class="tmn-counts">9</i> </a> <div class="dropdown-menu dropdown-menu-lg pull-right"> <div class="listview" id="notifications"> <div class="lv-header"> Notification <ul class="actions"> <li class="dropdown"> <a href="" data-clear="notification"> <i class="zmdi zmdi-check-all"></i> </a> </li> </ul> </div> <div class="lv-body"> <a class="lv-item" href=""> <div class="media"> <div class="pull-left"> <img class="lv-img-sm" src="/wb-webpack-seed/./img/ebe4e5a773731fa7ab99c28861839026.jpg" alt=""> </div> <div class="media-body"> <div class="lv-title">David Belle</div> <small class="lv-small">Cum sociis natoque penatibus et magnis dis parturient montes </small> </div> </div> </a> <a class="lv-item" href=""> <div class="media"> <div class="pull-left"> <img class="lv-img-sm" src="/wb-webpack-seed/./img/80b4103bf05359fd3ab06e247001118a.jpg" alt=""> </div> <div class="media-body"> <div class="lv-title">Jonathan Morris</div> <small class="lv-small">Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel </small> </div> </div> </a> <a class="lv-item" href=""> <div class="media"> <div class="pull-left"> <img class="lv-img-sm" src="/wb-webpack-seed/./img/28030ab56747f62a12033c032797c3d4.jpg" alt=""> </div> <div class="media-body"> <div class="lv-title">Fredric Mitchell Jr.</div> <small class="lv-small">Phasellus a ante et est ornare accumsan at vel magnauis blandit turpis at augue ultricies </small> </div> </div> </a> <a class="lv-item" href=""> <div class="media"> <div class="pull-left"> <img class="lv-img-sm" src="/wb-webpack-seed/./img/68f59bc1a9dc09dac3e3c85acf07a629.jpg" alt=""> </div> <div class="media-body"> <div class="lv-title">Glenn Jecobs</div> <small class="lv-small">Ut vitae lacus sem ellentesque maximus, nunc sit amet varius dignissim, dui est consectetur neque </small> </div> </div> </a> <a class="lv-item" href=""> <div class="media"> <div class="pull-left"> <img class="lv-img-sm" src="/wb-webpack-seed/./img/68f59bc1a9dc09dac3e3c85acf07a629.jpg" alt=""> </div> <div class="media-body"> <div class="lv-title">Bill Phillips</div> <small class="lv-small">Proin laoreet commodo eros id faucibus. Donec ligula quam, imperdiet vel ante placerat </small> </div> </div> </a> </div> <a class="lv-footer" href="">View Previous</a> </div> </div> </li> <li class="dropdown hidden-xs"> <a data-toggle="dropdown" href=""> <i class="tm-icon zmdi zmdi-view-list-alt"></i> <i class="tmn-counts">2</i> </a> <div class="dropdown-menu pull-right dropdown-menu-lg"> <div class="listview"> <div class="lv-header"> Tasks </div> <div class="lv-body"> <div class="lv-item"> <div class="lv-title m-b-5">HTML5 Validation Report</div> <div class="progress"> <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style="width:95%"> <span class="sr-only">95% Complete (success)</span> </div> </div> </div> <div class="lv-item"> <div class="lv-title m-b-5">Google Chrome Extension</div> <div class="progress"> <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:80%"> <span class="sr-only">80% Complete (success)</span> </div> </div> </div> <div class="lv-item"> <div class="lv-title m-b-5">Social Intranet Projects</div> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width:20%"> <span class="sr-only">20% Complete</span> </div> </div> </div> <div class="lv-item"> <div class="lv-title m-b-5">Bootstrap Admin Template</div> <div class="progress"> <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width:60%"> <span class="sr-only">60% Complete (warning)</span> </div> </div> </div> <div class="lv-item"> <div class="lv-title m-b-5">Youtube Client App</div> <div class="progress"> <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:80%"> <span class="sr-only">80% Complete (danger)</span> </div> </div> </div> </div> <a class="lv-footer" href="">View All</a> </div> </div> </li> <li class="dropdown"> <a data-toggle="dropdown" href=""><i class="tm-icon zmdi zmdi-more-vert"></i></a> <ul class="dropdown-menu dm-icon pull-right"> <li class="skin-switch hidden-xs"> <span class="ss-skin bgm-lightblue" data-skin="lightblue"></span> <span class="ss-skin bgm-bluegray" data-skin="bluegray"></span> <span class="ss-skin bgm-cyan" data-skin="cyan"></span> <span class="ss-skin bgm-teal" data-skin="teal"></span> <span class="ss-skin bgm-orange" data-skin="orange"></span> <span class="ss-skin bgm-blue" data-skin="blue"></span> </li> <li class="divider hidden-xs"></li> <li class="hidden-xs"> <a data-action="fullscreen" tp-topbar-click="toFullScreen" href=""><i class="zmdi zmdi-fullscreen"></i> Toggle Fullscreen</a> </li> <li> <a data-action="clear-localstorage" tp-topbar-click="clearLoaclStorage" href=""><i class="zmdi zmdi-delete"></i> Clear Local Storage</a> </li> <li> <a href=""><i class="zmdi zmdi-face"></i> Privacy Settings</a> </li> <li> <a href=""><i class="zmdi zmdi-settings"></i> Other Settings</a> </li> </ul> </li> <li class="hidden-xs" id="chat-trigger" tp-topbar-click="menuTrigger" data-trigger="#chat"> <a href=""><i class="tm-icon zmdi zmdi-comment-alt-text"></i></a> </li> </ul> </li> </ul> <div id="top-search-wrap"> <div class="tsw-inner"> <i id="top-search-close" tp-topbar-click="topSearchTarget|close" class="zmdi zmdi-arrow-left"></i> <input type="text"> </div> </div> </header>
    <aside-menu>
      <aside id="sidebar" class="sidebar c-overflow mCustomScrollbar _mCS_1 mCS-autoHide" style="overflow: visible;">
        <div id="mCSB_1" class="mCustomScrollBox mCS-minimal-dark mCSB_vertical_horizontal mCSB_outside"
             style="max-height: none;" tabindex="0">
          <div id="mCSB_1_container" class="mCSB_container mCS_x_hidden mCS_no_scrollbar_x"
               style="position: relative; top: 0px; left: 0px; width: 100%;" dir="ltr">
            <div class="profile-menu" tp-asidebar-click="profileMenuTogger"><a href="">
              <div class="profile-pic"><img src="/wb-webpack-seed/./img/ebe4e5a773731fa7ab99c28861839026.jpg" alt=""
                                            class="mCS_img_loaded"></div>
              <div class="profile-info"> Malinda Hollaway <i class="zmdi zmdi-caret-down"></i></div>
            </a>
              <ul class="main-menu">
                <li><a href="profile-about.html"><i class="zmdi zmdi-account"></i> View Profile</a></li>
                <li><a href=""><i class="zmdi zmdi-input-antenna"></i> Privacy Settings</a></li>
                <li><a href=""><i class="zmdi zmdi-settings"></i> Settings</a></li>
                <li><a href=""><i class="zmdi zmdi-time-restore"></i> Logout</a></li>
              </ul>
            </div>
            <ul class="main-menu">
              <li class="active"><a href="#/home/account"><i class="zmdi zmdi-home"></i> 账户</a></li>
              <li class="sub-menu"><a href="" tp-asidebar-click="subMenuClick"><i class="zmdi zmdi-view-compact"></i>
                导航栏</a>
                <ul>
                  <li><a href="demo.html?#/demoPage/imagelogo">图片logo</a></li>
                  <li><a href="demo.html#/demoPage/textlogo">文本logo</a></li>
                </ul>
              </li>
              <li><a href="demo.html#/demoPage/typography"><i class="zmdi zmdi-format-underlined"></i> 页面排版</a></li>
              <li class="sub-menu"><a href="" tp-asidebar-click="subMenuClick"><i class="zmdi zmdi-widgets"></i>微件</a>
                <ul>
                  <li><a href="demo.html#/demoPage/widget-templates">模板</a></li>
                  <li><a href="demo.html#/demoPage/widgets">微件</a></li>
                </ul>
              </li>
              <li class="sub-menu"><a href="" tp-asidebar-click="subMenuClick"><i class="zmdi zmdi-view-list"></i>
                表格</a>
                <ul>
                  <li><a href="demo.html#/demoPage/tables">常规表格</a></li>
                  <li><a href="demo.html#/demoPage/datatables">动态数据表格</a></li>
                </ul>
              </li>
              <li class="sub-menu"><a href="" tp-asidebar-click="subMenuClick"><i class="zmdi zmdi-collection-text"></i>
                表单</a>
                <ul>
                  <li><a href="demo.html#/demoPage/formelements">基本表单元素</a></li>
                  <li><a href="demo.html#/demoPage/formcomponents">表单常用组件</a></li>
                  <li><a href="demo.html#/demoPage/formexamples">常用表单举例</a></li>
                  <li><a href="demo.html#/demoPage/formvalidations">表单验证结果</a></li>
                </ul>
              </li>
              <li class="sub-menu"><a href="" tp-asidebar-click="subMenuClick"><i class="zmdi zmdi-swap-alt"></i>用户界面组件</a>
                <ul>
                  <li><a href="demo.html#/demoPage/colors">颜色样例</a></li>
                  <li><a href="demo.html#/demoPage/animations">动画效果</a></li>
                  <li><a href="demo.html#/demoPage/boxshadow">阴影</a></li>
                  <li><a href="demo.html#/demoPage/buttons">按钮</a></li>
                  <li><a href="demo.html#/demoPage/icons">图标</a></li>
                  <li><a href="demo.html#/demoPage/alerts">警告框</a></li>
                  <li><a href="demo.html#/demoPage/preloaders">加载中状态</a></li>
                  <li><a href="demo.html#/demoPage/notificationdialog">通知和对话框</a></li>
                  <li><a href="demo.html#/demoPage/components">组件</a></li>
                  <li><a href="demo.html#/demoPage/othercomponents">其他组件</a></li>
                </ul>
              </li>
              <li><a href="demo.html#/demoPage/calendar"><i class="zmdi zmdi-calendar"></i> 日历控件</a></li>
              <li class="sub-menu"><a href="" tp-asidebar-click="subMenuClick"><i class="zmdi zmdi-image"></i>照片画廊</a>
                <ul>
                  <li><a href="demo.html#/demoPage/photos">默认模式</a></li>
                  <li><a href="demo.html#/demoPage/photostimeline">时间轴模式</a></li>
                </ul>
              </li>
              <li><a href="demo.html#/demoPage/generic-classes"><i class="zmdi zmdi-layers"></i>常用布局类</a></li>
              <li class="sub-menu"><a href="" tp-asidebar-click="subMenuClick"><i class="zmdi zmdi-collection-item"></i>常用页面模板</a>
                <ul>
                  <li><a href="demo.html#/demoPage/profileabout">个人信息</a></li>
                  <li><a href="demo.html#/demoPage/listview">列表视图</a></li>
                  <li><a href="demo.html#/demoPage/messages">在线IM</a></li>
                  <li><a href="demo.html#/demoPage/pricingtable">报价表</a></li>
                  <li><a href="demo.html#/demoPage/contacts">通讯录</a></li>
                  <li><a href="demo.html#/demoPage/wall">微博视图</a></li>
                  <li><a href="demo.html#/demoPage/invoice">发票发票</a></li>
                  <li><a href="login.html">登录和注册页面</a></li>
                  <li><a href="lockscreen.html">锁屏页面</a></li>
                </ul>
              </li>
              <li class="sub-menu"><a href="javascript:void(0);" tp-asidebar-click="subMenuClick"><i
                class="zmdi zmdi-menu"></i> 三层菜单</a>
                <ul>
                  <li><a href="demo.html#/demoPage/colors">二层菜单-颜色样例</a></li>
                  <li><a href="demo.html#/demoPage/icons">另外一个二层菜单-图标</a></li>
                  <li class="sub-menu" tp-asidebar-click="subMenuClick"><a href="javascript:void(0);">我有个子菜单</a>
                    <ul>
                      <li><a href="demo.html#/demoPage/animations">三级菜单</a></li>
                      <li><a href="demo.html#/demoPage/buttons">另外一个三级菜单</a></li>
                      <li><a href="demo.html#/demoPage/alerts">还有一个三级菜单</a></li>
                    </ul>
                  </li>
                  <li><a href="demo.html#/demoPage/notificationdialog">再来一个二层菜单-图标</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div id="mCSB_1_scrollbar_vertical"
             class="mCSB_scrollTools mCSB_1_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
             style="display: block;">
          <div class="mCSB_draggerContainer">
            <div id="mCSB_1_dragger_vertical" class="mCSB_dragger"
                 style="position: absolute; min-height: 50px; display: block; height: 103px; max-height: 259px; top: 0px;">
              <div class="mCSB_dragger_bar" style="line-height: 50px;"></div>
            </div>
            <div class="mCSB_draggerRail"></div>
          </div>
        </div>
        <div id="mCSB_1_scrollbar_horizontal"
             class="mCSB_scrollTools mCSB_1_scrollbar mCS-minimal-dark mCSB_scrollTools_horizontal"
             style="display: none;">
          <div class="mCSB_draggerContainer">
            <div id="mCSB_1_dragger_horizontal" class="mCSB_dragger"
                 style="position: absolute; min-width: 50px; width: 0px; left: 0px;">
              <div class="mCSB_dragger_bar"></div>
            </div>
            <div class="mCSB_draggerRail"></div>
          </div>
        </div>
      </aside>
      <aside id="chat" class="sidebar c-overflow mCustomScrollbar _mCS_2 mCS-autoHide" style="overflow: visible;">
        <div id="mCSB_2" class="mCustomScrollBox mCS-minimal-dark mCSB_vertical_horizontal mCSB_outside" tabindex="0"
             style="max-height: none;">
          <div id="mCSB_2_container" class="mCSB_container mCS_x_hidden mCS_no_scrollbar_x"
               style="position: relative; top: 0px; left: 0px; width: 100%;" dir="ltr">
            <div class="chat-search">
              <div class="fg-line"><input type="text" class="form-control" placeholder="Search People"></div>
            </div>
            <div class="listview"><a class="lv-item" href="">
              <div class="media">
                <div class="pull-left p-relative"><img class="lv-img-sm mCS_img_loaded"
                                                       src="/wb-webpack-seed/./img/80b4103bf05359fd3ab06e247001118a.jpg"
                                                       alt=""> <i class="chat-status-busy"></i></div>
                <div class="media-body">
                  <div class="lv-title">Jonathan Morris</div>
                  <small class="lv-small">Available</small>
                </div>
              </div>
            </a> <a class="lv-item" href="">
              <div class="media">
                <div class="pull-left"><img class="lv-img-sm mCS_img_loaded"
                                            src="/wb-webpack-seed/./img/ebe4e5a773731fa7ab99c28861839026.jpg" alt="">
                </div>
                <div class="media-body">
                  <div class="lv-title">David Belle</div>
                  <small class="lv-small">Last seen 3 hours ago</small>
                </div>
              </div>
            </a> <a class="lv-item" href="">
              <div class="media">
                <div class="pull-left p-relative"><img class="lv-img-sm mCS_img_loaded"
                                                       src="/wb-webpack-seed/./img/28030ab56747f62a12033c032797c3d4.jpg"
                                                       alt=""> <i class="chat-status-online"></i></div>
                <div class="media-body">
                  <div class="lv-title">Fredric Mitchell Jr.</div>
                  <small class="lv-small">Availble</small>
                </div>
              </div>
            </a> <a class="lv-item" href="">
              <div class="media">
                <div class="pull-left p-relative"><img class="lv-img-sm mCS_img_loaded"
                                                       src="/wb-webpack-seed/./img/68f59bc1a9dc09dac3e3c85acf07a629.jpg"
                                                       alt=""> <i class="chat-status-online"></i></div>
                <div class="media-body">
                  <div class="lv-title">Glenn Jecobs</div>
                  <small class="lv-small">Availble</small>
                </div>
              </div>
            </a> <a class="lv-item" href="">
              <div class="media">
                <div class="pull-left"><img class="lv-img-sm mCS_img_loaded"
                                            src="/wb-webpack-seed/./img/1cfa9d20d568f9615a3b27015502cfd8.jpg" alt="">
                </div>
                <div class="media-body">
                  <div class="lv-title">Bill Phillips</div>
                  <small class="lv-small">Last seen 3 days ago</small>
                </div>
              </div>
            </a> <a class="lv-item" href="">
              <div class="media">
                <div class="pull-left"><img class="lv-img-sm mCS_img_loaded"
                                            src="/wb-webpack-seed/./img/16b66ca0b45e6726a9ac9168af4e68f7.jpg" alt="">
                </div>
                <div class="media-body">
                  <div class="lv-title">Wendy Mitchell</div>
                  <small class="lv-small">Last seen 2 minutes ago</small>
                </div>
              </div>
            </a> <a class="lv-item" href="">
              <div class="media">
                <div class="pull-left p-relative"><img class="lv-img-sm mCS_img_loaded"
                                                       src="/wb-webpack-seed/./img/8d80626c256370266fc4c57cf8f2b00a.jpg"
                                                       alt=""> <i class="chat-status-busy"></i></div>
                <div class="media-body">
                  <div class="lv-title">Teena Bell Ann</div>
                  <small class="lv-small">Busy</small>
                </div>
              </div>
            </a></div>
          </div>
        </div>
        <div id="mCSB_2_scrollbar_vertical"
             class="mCSB_scrollTools mCSB_2_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical"
             style="display: block;">
          <div class="mCSB_draggerContainer">
            <div id="mCSB_2_dragger_vertical" class="mCSB_dragger"
                 style="position: absolute; min-height: 50px; height: 135px; top: 0px; display: block; max-height: 259px;">
              <div class="mCSB_dragger_bar" style="line-height: 50px;"></div>
            </div>
            <div class="mCSB_draggerRail"></div>
          </div>
        </div>
        <div id="mCSB_2_scrollbar_horizontal"
             class="mCSB_scrollTools mCSB_2_scrollbar mCS-minimal-dark mCSB_scrollTools_horizontal"
             style="display: none;">
          <div class="mCSB_draggerContainer">
            <div id="mCSB_2_dragger_horizontal" class="mCSB_dragger"
                 style="position: absolute; min-width: 50px; width: 0px; left: 0px;">
              <div class="mCSB_dragger_bar"></div>
            </div>
            <div class="mCSB_draggerRail"></div>
          </div>
        </div>
      </aside>
    </aside-menu>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
</script>
<style scoped>
</style>
