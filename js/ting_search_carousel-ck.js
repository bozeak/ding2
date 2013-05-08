/**
 * @file
 * Handles the carousels loading of content and changes between tabs. There are
 * two selectors to change tabs based on breaks points (which is handle by the
 * theme).
 *
 * For large screens the normal tab list (ul -> li) is used while on small
 * screens (mobile/tables) a select dropdown is used.
 *
 */(function(e){"use strict";var t=function(){function s(){var t=e(".rs-carousel-list-tabs"),n=t.children("li").length;if(n>0){var r=t.width(),i=Math.floor(r/n),s=r-i*(n-1);t.children().css({width:i+"px"});t.children(":last-child").css({width:s+"px"})}}function o(t){i.find(".active").removeClass("active");i.find(":selected").removeAttr("selected");e(i.find("li")[t]).addClass("active");e(i.find("option")[t]).attr("selected",!0);e(".rs-carousel-title").html("");e(".rs-carousel .rs-carousel-runner").children().remove();e(".rs-carousel-inner .ajax-loader").removeClass("element-hidden");e(".rs-carousel-action-prev").hide();e(".rs-carousel-action-next").hide();r=t;a(r)}function u(){i=e(".rs-carousel-tabs");s();e(".rs-carousel-list-tabs").on("click","li",function(t){t.preventDefault();o(e(this).index());return!1});e(".rs-carousel-select-tabs").live("change",function(){o(e(this).find(":selected").index())})}function a(r){if(!(r in t)){f(r);return}var i=t[r];e(".rs-carousel-inner .ajax-loader").addClass("element-hidden");e(".rs-carousel-title").html(i.subtitle);e(".rs-carousel .rs-carousel-runner").append(i.content);e(".rs-carousel-action-prev").show();e(".rs-carousel-action-next").show();n.carousel("refresh")}function f(n){e.ajax({type:"get",url:Drupal.settings.basePath+"ting_search_carousel/results/ajax/"+n,dataType:"json",success:function(e){t[n]={subtitle:e.subtitle,content:e.content};r==e.index&&a(n)}})}function l(){n=e(".rs-carousel-items");u();n.carousel({touch:!0,noOfRows:1,orientation:"horizontal",itemsPerTransition:"auto"});o(0)}var t=[],n,r=0,i;return{name:"ting_search_carousel",init:l}}();e(document).ready(function(){t.init()})})(jQuery);