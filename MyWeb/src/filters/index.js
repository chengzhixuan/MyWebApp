/**
 * Created by gupo-03 on 2017/5/9.
 */
import Vue from 'vue'
import filetime from './filetime'
import sex from './sex'
Vue.filter('sex', sex)
Vue.filter('filetime', filetime)
