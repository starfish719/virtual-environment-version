import * as core from '@actions/core'
import * as exec from '@actions/exec'

async function run(): Promise<void> {
  try {
    const options = {
      listeners: {},
      cwd: './lib'
    }
    options.listeners = {
      stdout: (data: Buffer) => {
        return data.toString()
      },
      stderr: (data: Buffer) => {
        return data.toString()
      }
    }
    options.cwd = './lib'
    await exec.exec('python --version')
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
