# VirtualEnvironmentVersion

This action shows [virtual-enviornments](https://help.github.com/en/actions/reference/software-installed-on-github-hosted-runners) version.

## Inputs

### `target`

**Required** show target tool name.

## Outputs

`target` version.

## Example usage

```yml
jobs:
  build:
    steps:
    - name: Show Python version
      uses: starfish719/virtual-environment-version@v1
      with:
        target: python
```
