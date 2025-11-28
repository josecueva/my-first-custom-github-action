# My First Custom Github Action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `name`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `greeting`

The greeting.

## Example usage

```yaml
uses: actions/my-first-custom-github-action@v1.0
with:
  name: Meeeeeee
```
