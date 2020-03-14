import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'

import {createCommand} from '../src/createCommand'

describe('createCommand', () => {
  it('python', () => {
    expect(createCommand('python')).toEqual('python --version')
  })

  it('ruby', () => {
    expect(createCommand('ruby')).toEqual('ruby --version')
  })
})

test('test runs', () => {
  process.env['INPUT_TARGET'] = 'python'
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecSyncOptions = {
    env: process.env
  }
  console.log(cp.execSync(`node ${ip}`, options).toString())
})
