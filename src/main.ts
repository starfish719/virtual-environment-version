import * as core from '@actions/core'
import * as exec from '@actions/exec'

async function run(): Promise<void> {
  try {
    let myOutput = ''
    let myError = ''

    const options = {
      listeners: {}
    }
    options.listeners = {
      stdout: (data: Buffer) => {
        myOutput += data.toString()
      },
      stderr: (data: Buffer) => {
        myError += data.toString()
      }
    }
    await exec.exec('python --version', [], options)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
