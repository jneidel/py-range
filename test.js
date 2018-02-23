const expect = require( "expect" );
const range = require( "./index" );

/* globals describe it */

function c( val ) {
  // Makes arrays comparable
  // Otherwise it would always be false as js compares references to different arrays, not the values itself
  return JSON.stringify( val );
}

describe( "py-range", () => {
  it( "Basic range", () => {
    expect( c( range( 5, 12 ) ) )
      .toBe( c( [ 5, 6, 7, 8, 9, 10, 11 ] ) );
  } );
  it( "Range with step", () => {
    expect( c( range( 5, 12, 3 ) ) )
      .toBe( c( [ 5, 8, 11 ] ) );
  } );
  it( "Negative step", () => {
    expect( c( range( 12, 5, -2 ) ) )
      .toBe( c( [ 12, 10, 8, 6 ] ) );
  } );
  it( "Only end", () => {
    expect( c( range( 5 ) ) )
      .toBe( c( [ 0, 1, 2, 3, 4 ] ) );
  } );
} );
