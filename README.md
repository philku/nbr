# nbr

A small package for manipulating US phone numbers in typescript.

This uses a function factory to return different formats of the number.

## Usage

### Install

```
npm i nbr
```

```typescript
import nbr from 'nbr'
```

### 11 Digits

All values are given

```typescript
const numbers = nbr(18001231234)
console.log(numbers)
```

```json
{
  "local":                          "1231234",
  "local_dashed":                   "123-1234",
  "domestic":                       "8001231234",
  "domestic_dashed":                "800-123-1234",
  "domestic_dotted":                "800.123.1234",
  "domestic_areaParentheses":       "(800) 123-1234",
  "domestic_areaSpaced":            "800 123-1234",
  "domestic_areaSpacedParentheses": "(800) 123 1234",
  "international":                  "18001231234",
  "international_dashed":           "1-800-123-1234"
}
```

## Partial Numbers

It'll do what it can, and give null for the rest

```typescript
const moreNumbers = nbr(8001231234)
console.log(moreNumbers)
```

```json
{
  "local":                          "1231234",
  "local_dashed":                   "123-1234",
  "domestic":                       "8001231234",
  "domestic_dashed":                "800-123-1234",
  "domestic_dotted":                "800.123.1234",
  "domestic_areaParentheses":       "(800) 123-1234",
  "domestic_areaSpaced":            "800 123-1234",
  "domestic_areaSpacedParentheses": "(800) 123 1234",
  "international":                  null,
  "international_dashed":           null
}
```