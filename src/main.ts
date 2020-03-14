import * as core from '@actions/core'
import * as exec from '@actions/exec'

import {createCommand} from './createCommand'

async function run(): Promise<void> {
  try {
    const target: string = core.getInput('target')
    const execCommand: string = createCommand(target)
    await exec.exec(execCommand)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
