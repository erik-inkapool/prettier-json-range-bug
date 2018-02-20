# Prettier json format bug (?)

When formatting invalid json ranges prettier errors.

To repro: 
- clone this repo
- yarn/npm install
- yarn/npm test

Expected result: prettier doing magic and printing the formatted file

Actual result: 
```
SyntaxError: Unexpected token (1:6)
> 1 | "foo": "bar"
    |      ^
    at createError (C:\Projects\prettier-json-range-bug\node_modules\prettier\
parser-babylon.js:1:110)
    at Object.parse (C:\Projects\prettier-json-range-bug\node_modules\prettier
\parser-babylon.js:1:986)
    at Object.parse$4 [as parse] (C:\Projects\prettier-json-range-bug\node_mod
ules\prettier\index.js:24274:19)
    at formatWithCursor (C:\Projects\prettier-json-range-bug\node_modules\pret
tier\index.js:33650:27)
    at format (C:\Projects\prettier-json-range-bug\node_modules\prettier\index
.js:33695:10)
    at formatRange (C:\Projects\prettier-json-range-bug\node_modules\prettier\
index.js:33922:26)
    at formatWithCursor (C:\Projects\prettier-json-range-bug\node_modules\pret
tier\index.js:33654:30)
    at format (C:\Projects\prettier-json-range-bug\node_modules\prettier\index
.js:33695:10)
    at format (C:\Projects\prettier-json-range-bug\node_modules\prettier\index
.js:33945:12)
    at Object.<anonymous> (C:\Projects\prettier-json-range-bug\index.js:8:1)
    at Module._compile (module.js:643:30)
    at Object.Module._extensions..js (module.js:654:10)
    at Module.load (module.js:556:32)
    at tryModuleLoad (module.js:499:12)
    at Function.Module._load (module.js:491:3)
    at Function.Module.runMain (module.js:684:10)
error Command failed with exit code 1.
```