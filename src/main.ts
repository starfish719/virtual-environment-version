import * as core from '@actions/core'
import * as exec from '@actions/exec'

async function run(): Promise<void> {
  try {
    const options = {
      listeners: {}
    }
    options.listeners = {
      stdout: (data: Buffer) => {
        return data.toString()
      },
      stderr: (data: Buffer) => {
        return data.toString()
      }
    }
    await exec.exec('python', ['--version'], options)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
