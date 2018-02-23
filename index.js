module.exports = ( a, b, step = 1 ) => {
  if ( b === undefined ) {
    [ a, b ] = [ 0, a ];
  }

  const result = [];

  for ( let i = a; ( b - i ) * step > 0; i += step ) {
    result.push( i );
  }

  return result;
};
