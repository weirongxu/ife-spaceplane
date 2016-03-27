import {EventEmitter2} from 'eventemitter2'
import $ from 'jquery'

export class EventEmitter extends EventEmitter2 {
  // 扩展event emitter支持数组
  on(events, ...args) {
    if (typeof(events) === 'object' && 'length' in events) {
      events.forEach((it) => {
        super.on(it, ...args)
      })
    } else {
      super.on(events, ...args)
    }
    return this
  }
}

export function random(min, max) {
  return Math.random() * (max - min) + min
}

export function log(content, msg, color=null) {
  /*eslint no-console: 0 */
  var msgLog
  if (typeof(msg) === 'object') {
    msgLog = JSON.stringify(msg)
  } else if (typeof(msg) === 'number') {
    msgLog = msg.toString(2)
  }
  var $log = $('.log')
  if ($log.find('input').prop('checked')) {
    var $list = $log.find('.list')
    $list.append(`<div style="color: ${color || 'white'};">${content}, ${msgLog}</div>`)
    $list.scrollTop($list[0].scrollHeight)
  }
  // console.log(`%c${content}, ${msgLog}`, `color: ${color || 'black'}`)
}

export function nextTick(fn) {
  setTimeout(function() {
    fn()
  }, 0)
}

export function map(obj, callback) {
  var ret = []
  for (var key in obj) {
    ret.push(callback(obj[key], key))
  }
  return ret
}
