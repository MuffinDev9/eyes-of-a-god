// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "L1":
            case "level3":return tiles.createTilemap(hex`0a0008000101010101010101010101000000000001000001010001000100010000010100010001000100000101000100010001000001010001000100010000010100010000000100000101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . 2 . . 2 
2 . 2 . 2 . 2 . . 2 
2 . 2 . 2 . 2 . . 2 
2 . 2 . 2 . 2 . . 2 
2 . 2 . 2 . 2 . . 2 
2 . 2 . . . 2 . . 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.forestTiles0], TileScale.Sixteen);
            case "L1 Noclip":
            case "L2":return tiles.createTilemap(hex`0a0008000101010101010101010101000000000001000001010001000100010000010100010001000100000101000100010001000001010001000100010000010100010000000100000101010101010101010101`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.forestTiles0], TileScale.Sixteen);
            case "BlankLevel":
            case "level1":return tiles.createTilemap(hex`0a0008000000000001000000000000000001000000000000000001000000000000000000010000000000000000010000000000000000000100000000000000000001010100000000000000000000010101010101`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
