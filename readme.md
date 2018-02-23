# py-range

[![](https://circleci.com/gh/jneidel/py-range/tree/master.svg?style=shield&circle-token=540177832045022353a950b34b09cbd8e1c0cea1)](https://circleci.com/gh/jneidel/py-range)

Lightweight implementation of Python's `range( a, b, [step] )`.

## Install

```
$ npm install py-range
```

[https://www.npmjs.com/package/py-range](https://www.npmjs.com/package/py-range)

## Usage

```js
const range = require( "py-range" );

range( 5 );
//=> [ 0, 1, 2, 3, 4 ]

range( 5, 12 );
//=> [ 5, 6, 7, 8, 9, 10, 11 ]

range( 5, 12, 2 );
//=> [ 5, 7, 9, 11 ]

range( 12, 5, -2 );
//=> [ 12, 10, 8, 6 ]
```


## API

### range( a, b, [step] )

Returns array with values from `a` to `b` in `steps` and requires `a < b`.

#### a

Type: `number`

Specifies start of range. Returned array will start with `a`.

```js
range( 1, 3 );
//=> [ 1, 2 ]
```

Can be omited if zero:

```js
range( 5 );
// Instead of
range( 0, 5 );
```

Omiting `a` can't be used with step.

#### b

Type: `number`

Specifies end of range. Return array will end with `b - 1`.

```js
range( 1, 3 );
//=> [ 1, 2 ]
```

#### [step]

Optional

Type: `number`

Default: `1`

Specifies step of range.

```js
range( 5, 12, 2 );
//=> [ 5, 7, 9, 11 ]
```

Can be negative, which requires `a > b`.

```js
range( 12, 5, -2 );
//=> [ 12, 10, 8, 6 ]
```

## Test

```
$ npm run test
```

## License

MIT © [Jonathan Neidel](https://github.com/jneidel)
