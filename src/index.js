// @flow
'use strict'

type Opts = {
  waitTime: number
}

class KeyLocker {
  _map: Map<string, *>
  waitTime: number

  constructor(opts: ?Opts) {
    const _opts = { waitTime: 1000, ...opts }
    this.waitTime = _opts.waitTime
    this._map = new Map()
  }

  has(key: string) {
    return this._map.has(key)
  }

  add(key: string) {
    this.delete(key)

    const timer = setTimeout(() => {
      this.delete(key)
    }, this.waitTime)

    this._map.set(key, timer)
  }

  delete(key: string) {
    if (this.has(key)) {
      clearTimeout(this._map.get(key))
      this._map.delete(key)
    }
  }
}

module.exports = KeyLocker
