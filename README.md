# VoucherCodeGenerator

### _Possibly the most easy to use voucher code generator_
VoucherCodeGenerator is a simple Typescript library for generating voucher codes with only needing a single string as pattern.

The library works with 3 kinds of CharSets:
- (N) numbers (0123456789)
- (L) letters (abcdefghijklmnopqrstuvwxyz)
- (A) alphanumeric (0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ)

All non-alphanumeric characters in the given pattern parameter will not change when generating a code. All other characters will be replaced by a randomized character of the same CharSet.

### Importing the generate method
```typescript
import { generate } from 'voucher-codes-generator'
```

Now all you need to do is call the method with your desired pattern, for example:
```typescript
const code: string = generate("000-AAA-000")
```
The code above generates a code in the format "NNN-LLL-NNN".

## Other examples

Below are some patterns with their possible outputs

| Use case | Pattern | Possible output |
| -------- | ------- | -------------- |
| Serial numbers | `A0AA-0A0A-A0AA-AAAA` | `N9TT-9G0A-B7FQ-RANC` |
| Giftcard/Voucher codes | `Aa0-aAa-0aA` | `Ws2-bHd-9fJ` |
| Giftcard/Voucher codes | `000-AAA-000` | `543-HRT-876` |
| Letters and digits | `0aAaA0a000` | `4gRaG6w854` |
| Only Uppercase | `AAAAAAAAA` | `WKAJSWTDF` |
| Only Lowercase | `aaaaaa` | `azazer` |
| With multiple non-alpanumeric characters | `000-0#AAA$0_AA0` | `654-3#WTE$9_WA0` |
| With multiple non-alpanumeric characters | `AA0-00A-#000` | `WQ7-32H-#954` |

### Notes
- Casing of letters is also checked.
- It does not matter what characters you use to make your pattern as the same CharSet will be used. (e.g `000-AAA-000` will be processed the same way as `512-WQA-076`)

## Limitations
- Every alphanumeric character will always use the same CharSet to randomize (outcomes like `N9TT-9G0A-B7FQ-RANC` and `QK6A-JI6S-7ETR-0A6C` are not (yet) possible with the same given pattern)

## License
MIT
