webpackJsonp([6],{86:function(module,exports){eval('module.exports = "<section id=main> <section id=content> <div class=\\"container c-alt\\"> <div class=block-header> <h2>Calendar <small>FullCalendar 可以处理日历记事。</small></h2> <ul class=actions> <li> <a href=\\"\\"> <i class=\\"zmdi zmdi-trending-up\\"></i> </a> </li> <li> <a href=\\"\\"> <i class=\\"zmdi zmdi-check-all\\"></i> </a> </li> <li class=dropdown> <a href=\\"\\" data-toggle=dropdown> <i class=\\"zmdi zmdi-more-vert\\"></i> </a> <ul class=\\"dropdown-menu dropdown-menu-right\\"> <li> <a href=\\"\\">Refresh</a> </li> <li> <a href=\\"\\">Manage Widgets</a> </li> <li> <a href=\\"\\">Widgets Settings</a> </li> </ul> </li> </ul> </div> <div id=calendar></div> <div class=\\"modal fade\\" id=addNew-event data-backdrop=static data-keyboard=false> <div class=modal-dialog> <div class=modal-content> <div class=modal-header> <h4 class=modal-title>Add an Event</h4> </div> <div class=modal-body> <form class=addEvent role=form> <div class=form-group> <label for=eventName>Event Name</label> <div class=fg-line> <input type=text class=\\"input-sm form-control\\" id=eventName placeholder=\\"eg: Sports day\\"> </div> </div> <div class=form-group> <label for=eventName>Tag Color</label> <div class=event-tag> <span data-tag=bgm-teal class=\\"bgm-teal selected\\"></span> <span data-tag=bgm-red class=bgm-red></span> <span data-tag=bgm-pink class=bgm-pink></span> <span data-tag=bgm-blue class=bgm-blue></span> <span data-tag=bgm-lime class=bgm-lime></span> <span data-tag=bgm-green class=bgm-green></span> <span data-tag=bgm-cyan class=bgm-cyan></span> <span data-tag=bgm-orange class=bgm-orange></span> <span data-tag=bgm-purple class=bgm-purple></span> <span data-tag=bgm-gray class=bgm-gray></span> <span data-tag=bgm-black class=bgm-black></span> </div> </div> <input type=hidden id=getStart /> <input type=hidden id=getEnd /> </form> </div> <div class=modal-footer> <button type=submit class=\\"btn btn-link\\" id=addEvent>Add Event</button> <button type=button class=\\"btn btn-link\\" data-dismiss=modal>Close</button> </div> </div> </div> </div> </div> </section> </section> ";//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZS9kZW1vL3RwbC9jYWxlbmRhci5odG1sPzE5N2UiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxzZWN0aW9uIGlkPW1haW4+IDxzZWN0aW9uIGlkPWNvbnRlbnQ+IDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBjLWFsdFxcXCI+IDxkaXYgY2xhc3M9YmxvY2staGVhZGVyPiA8aDI+Q2FsZW5kYXIgPHNtYWxsPkZ1bGxDYWxlbmRhciDlj6/ku6XlpITnkIbml6XljoborrDkuovjgII8L3NtYWxsPjwvaDI+IDx1bCBjbGFzcz1hY3Rpb25zPiA8bGk+IDxhIGhyZWY9XFxcIlxcXCI+IDxpIGNsYXNzPVxcXCJ6bWRpIHptZGktdHJlbmRpbmctdXBcXFwiPjwvaT4gPC9hPiA8L2xpPiA8bGk+IDxhIGhyZWY9XFxcIlxcXCI+IDxpIGNsYXNzPVxcXCJ6bWRpIHptZGktY2hlY2stYWxsXFxcIj48L2k+IDwvYT4gPC9saT4gPGxpIGNsYXNzPWRyb3Bkb3duPiA8YSBocmVmPVxcXCJcXFwiIGRhdGEtdG9nZ2xlPWRyb3Bkb3duPiA8aSBjbGFzcz1cXFwiem1kaSB6bWRpLW1vcmUtdmVydFxcXCI+PC9pPiA8L2E+IDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0XFxcIj4gPGxpPiA8YSBocmVmPVxcXCJcXFwiPlJlZnJlc2g8L2E+IDwvbGk+IDxsaT4gPGEgaHJlZj1cXFwiXFxcIj5NYW5hZ2UgV2lkZ2V0czwvYT4gPC9saT4gPGxpPiA8YSBocmVmPVxcXCJcXFwiPldpZGdldHMgU2V0dGluZ3M8L2E+IDwvbGk+IDwvdWw+IDwvbGk+IDwvdWw+IDwvZGl2PiA8ZGl2IGlkPWNhbGVuZGFyPjwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiBpZD1hZGROZXctZXZlbnQgZGF0YS1iYWNrZHJvcD1zdGF0aWMgZGF0YS1rZXlib2FyZD1mYWxzZT4gPGRpdiBjbGFzcz1tb2RhbC1kaWFsb2c+IDxkaXYgY2xhc3M9bW9kYWwtY29udGVudD4gPGRpdiBjbGFzcz1tb2RhbC1oZWFkZXI+IDxoNCBjbGFzcz1tb2RhbC10aXRsZT5BZGQgYW4gRXZlbnQ8L2g0PiA8L2Rpdj4gPGRpdiBjbGFzcz1tb2RhbC1ib2R5PiA8Zm9ybSBjbGFzcz1hZGRFdmVudCByb2xlPWZvcm0+IDxkaXYgY2xhc3M9Zm9ybS1ncm91cD4gPGxhYmVsIGZvcj1ldmVudE5hbWU+RXZlbnQgTmFtZTwvbGFiZWw+IDxkaXYgY2xhc3M9ZmctbGluZT4gPGlucHV0IHR5cGU9dGV4dCBjbGFzcz1cXFwiaW5wdXQtc20gZm9ybS1jb250cm9sXFxcIiBpZD1ldmVudE5hbWUgcGxhY2Vob2xkZXI9XFxcImVnOiBTcG9ydHMgZGF5XFxcIj4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPWZvcm0tZ3JvdXA+IDxsYWJlbCBmb3I9ZXZlbnROYW1lPlRhZyBDb2xvcjwvbGFiZWw+IDxkaXYgY2xhc3M9ZXZlbnQtdGFnPiA8c3BhbiBkYXRhLXRhZz1iZ20tdGVhbCBjbGFzcz1cXFwiYmdtLXRlYWwgc2VsZWN0ZWRcXFwiPjwvc3Bhbj4gPHNwYW4gZGF0YS10YWc9YmdtLXJlZCBjbGFzcz1iZ20tcmVkPjwvc3Bhbj4gPHNwYW4gZGF0YS10YWc9YmdtLXBpbmsgY2xhc3M9YmdtLXBpbms+PC9zcGFuPiA8c3BhbiBkYXRhLXRhZz1iZ20tYmx1ZSBjbGFzcz1iZ20tYmx1ZT48L3NwYW4+IDxzcGFuIGRhdGEtdGFnPWJnbS1saW1lIGNsYXNzPWJnbS1saW1lPjwvc3Bhbj4gPHNwYW4gZGF0YS10YWc9YmdtLWdyZWVuIGNsYXNzPWJnbS1ncmVlbj48L3NwYW4+IDxzcGFuIGRhdGEtdGFnPWJnbS1jeWFuIGNsYXNzPWJnbS1jeWFuPjwvc3Bhbj4gPHNwYW4gZGF0YS10YWc9YmdtLW9yYW5nZSBjbGFzcz1iZ20tb3JhbmdlPjwvc3Bhbj4gPHNwYW4gZGF0YS10YWc9YmdtLXB1cnBsZSBjbGFzcz1iZ20tcHVycGxlPjwvc3Bhbj4gPHNwYW4gZGF0YS10YWc9YmdtLWdyYXkgY2xhc3M9YmdtLWdyYXk+PC9zcGFuPiA8c3BhbiBkYXRhLXRhZz1iZ20tYmxhY2sgY2xhc3M9YmdtLWJsYWNrPjwvc3Bhbj4gPC9kaXY+IDwvZGl2PiA8aW5wdXQgdHlwZT1oaWRkZW4gaWQ9Z2V0U3RhcnQgLz4gPGlucHV0IHR5cGU9aGlkZGVuIGlkPWdldEVuZCAvPiA8L2Zvcm0+IDwvZGl2PiA8ZGl2IGNsYXNzPW1vZGFsLWZvb3Rlcj4gPGJ1dHRvbiB0eXBlPXN1Ym1pdCBjbGFzcz1cXFwiYnRuIGJ0bi1saW5rXFxcIiBpZD1hZGRFdmVudD5BZGQgRXZlbnQ8L2J1dHRvbj4gPGJ1dHRvbiB0eXBlPWJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1saW5rXFxcIiBkYXRhLWRpc21pc3M9bW9kYWw+Q2xvc2U8L2J1dHRvbj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8L3NlY3Rpb24+IDwvc2VjdGlvbj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvcGFnZS9kZW1vL3RwbC9jYWxlbmRhci5odG1sXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDYiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9')}});