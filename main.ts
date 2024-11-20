let mySprite = sprites.create(img`
    ................
    ................
    ...ffffffffffff.
    ..fffffffffffff.
    ...fddddddddddf.
    ...fdfffddfffdf.
    ..ffdffffffffff.
    ..ffffffddfffdf.
    ..fddddddddddff.
    ..fddffddffddf..
    ..ffddffffddff..
    ...fffddddfff...
    .....ffffff.....
    ....ff777fff....
    ...ff777777fff..
    ..ff777777777f..
    ..f7777777777ff.
    .ff77777777777f.
    .f777777777777f.
    .f777777777777f.
    ff777777777777ff
    ff777777777777ff
    .ff7777777777ff.
    ..ffffffffffff..
    ..f888f..f8f....
    ..f888f..f8f....
    ..f888f..f8ff...
    ..f88ff..f888f..
    .ff88f...f8888f.
    .fffff...ffffff.
    `, SpriteKind.Player)
scene.setBackgroundImage(img`
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddd22222222222222222222222222222222222222222222222222222222222222222222
    dddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddd22222222222222222222222222222222222222222222222222222222222222222222
    dddddddeee222222222222222222222222222222eeeddddddddddddddddddddddddddddddddddddddddddddddddd22222222222222222222222222222222222222222222222222222222222222222222
    dddddddeee222222222222222222222222222222eeeddddddddddddddddddddddddddddddddddddddddddddddddd22222222222222222222222222222222222222222222222222222222222222222222
    dddddddeee222222222222222222222222222222eeeddddddddddddddddddddddddddddddddddddddddddddddddd22222222222222222222222222222222222222222222222222222222222222222222
    dddddddeee222222222222222222222222222222eeeddddddddddddddddddddddddddddddddddddddddddddddddd22222222222222222222222222222222222222222222222222222222222222222222
    dddddddeee222222222222222222222222222222eeeddddddddddddddddddddddddddddddddddddddddddddddddd22222222222222222222222222222222222222222222222222222222222222222222
    dddddddeee222222222222222222222222222222eeeddddddddddddddddddddddddddddddddddddddddddddddddd22222222222222222222222222222222222222222222222222222222222222222222
    dddddddeee222222222222222222222222222222eeeddddddddddddddddddddddddddddddddddddddddddddddddd22222222222222222222222222222222222222222222222222222222222222222222
    dddddddeee222222222222222222222222222222eeeddddddddddddddddddddddddddddddddddddddddddddddddd22222222222222222222222222222222222222222222222222222222222222222222
    dddddddeee222222222222222222222222222222eeeddddddddddddddddddddddddddddddddddddddddddddddddd22222222222222222222222222222222222222222222222222222222222222222222
    dddddddeee222222222222222222222222222222eeeddddddddddddddddddddddddddddddddddddddddddddddddd11111111112222222222222222222222222222222222222222222222222222222222
    dddddddeee222222222224444d42222222222222eeeddddddddddddddddddddddddddddddddddddddddddddddddd22222222211111112222222222222222222222222222222222222222222222222222
    dddddddeee222222224444444444422222222222eeeddddddddddddddddddddddddddddddddddddddddddddddddd22222222222222221111111111111111111111222222222211111222222222222222
    dddddddeee222222244444444444442222222222eeeddddddddddddddddddddddddddddddddddddddddddddddddd11111222222222222222222222222222222221111111111122221111111111111112
    dddddddeee222222444d44d44d44442222222222eeeddddddddddddddddddddddddddddddddddddddddddddddddd22222111111111111111111111111111222222222222222222222222222222222222
    dddddddeee2222244d4444444444444222222222eeedddddddddddddddddddddddddddddddddddddddddddddddddd2222222222222222222222222222222111111111111111111122222222222222222
    dddddddeee22222444444d444444d44222222222eeedddddddddddddddddddddddddddddddddddddddddddddddddd2222222222222222222222222222222222222222222222222211111111111111111
    dddddddeee222224444444444444444222222222eeedddddddddddddddddddddddddddddddddddddddddddddddddd2222222222222222222222222222222222222222222222222222222222222222222
    dddddddeee222222eeeeeeeeeeeeee2222222222eeedddddddddddddddddddddddddddddddddddddddddddddddddd2222222222222222222222222222222222222222222222222222222222222222222
    dddddddeee222222eeeeeeeeeeeeee2222222222eeeddddddddddddddddddddddddddddddddddddddddddddddddddddddd555ddddd222222222222222222222222222222222222222222222222222222
    dddddddeee222222777777777777772222222222eeeddddddddddddddddddddddddddddddddddddddddddddddddddddddd555dddddddddddddd555dddd22222222222222222222222222222222222222
    dddddddeee222222111111111111112222222222eeeddddddddddddddddddddddddddddddddddddddddddddddddddddddd555dddddddddddddd555dddddddddddd555dddd22222222222222222222222
    dddddddeee222224444444444444444422222222eeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555dddddddddddd555dddddddddddddd555dddddddddd
    dddddddeee222224444444444444444422222222eeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555dddddddddddddd555dddddddddd
    dddddddeee222222444444444444444222222222eeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555dddddddddd
    dddddddeee222222222222222222222222222222eeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddeee222222222222222222222222222222eeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddeee222222222222222222222222222222eeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddeee222222222222222222222222222222eeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddeee222222222222222222222222222222eeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddeee222222222222222222222222222222eeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddeee222222222222222222222222222222eeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddeee222222222222222222222222222222eeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222222222222
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222222222222222222222222222222222222222222222222222
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222222222222222222222222222222222222222222222222222
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222222222222222222222222222222222222222222222222222
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222222222222222222222222222222222222222222222222222
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222222222222222222222222222222222222222222222222222
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222222222222222222222222222222222222222222222222222
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222222222222222222222222222222222222222222222222222
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffdd222222222222222222222222222222222222222222222222222222222222222222222222
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffdd222222222222222222222222222222222222222222222222222222222222222222222222
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffdd222222ffffffffffff222222ffffffffff22222ffffffffff22222222222222222222222
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffddddd222222ffffffffffff222222ffffffffff22222ffffffffff2222ffffffffff222222222
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffddddd222222ffffffffffff222222ffffffffff22222ffffffffff2222ffffffffff222222222
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffddddd2222222222fff22222222222222fff222222222222fff22222222ffffffffff222222222
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffddddd2222222222fff22222222222222fff222222222222fff222222222222fff222222222222
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffddddd2222222222fff22222222222222fff222222222222fff222222222222fff222222222222
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffddddd2222222222fff22222222222222fff222222222222fff222222222222fff222222222222
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffddddd2222222222fff22222222222222fff222222222222fff222222222222fff222222222222
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffddddd2222222222fff22222222222222fff222222222222fff222222222222fff222222222222
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffddddd2222222222fff22222222222222fff222222222222fff222222222222fff222222222222
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffddddd2222222222fff22222222222222fff222222222222fff222222222222fff222222222222
    ffffffffff1111111111ffffffffff1111111111fffffffff111111111fffffffff1111111111ffffffff111111111fffffffff111111111111ffffffffff1111111111ffffffffffff1111111111111
    ffffffffff1111111111ffffffffff1111111111fffffffff111111111fffffffff1111111111ffffffff111111111fffffffff111111111111ffffffffff1111111111ffffffffffff1111111111111
    ffffffffff1111111111ffffffffff1111111111fffffffff111111111fffffffff1111111111ffffffff111111111fffffffff111111111111ffffffffff1111111111ffffffffffff1111111111111
    ffffffffff1111111111ffffffffff1111111111fffffffff111111111fffffffff1111111111ffffffff111111111fffffffff111111111111ffffffffff1111111111ffffffffffff1111111111111
    ffffffffff1111111111ffffffffff1111111111fffffffff111111111fffffffff1111111111ffffffff111111111fffffffff111111111111ffffffffff1111111111ffffffffffff1111111111111
    ffffffffff1111111111ffffffffff1111111111fffffffff111111111fffffffff1111111111ffffffff111111111fffffffff111111111111ffffffffff1111111111ffffffffffff1111111111111
    ffffffffff1111111111ffffffffff1111111111fffffffff111111111fffffffff1111111111ffffffff111111111fffffffff111111111111ffffffffff1111111111ffffffffffff1111111111111
    ffffffffff1111111111ffffffffff1111111111fffffffff111111111fffffffff1111111111ffffffff111111111fffffffff111111111111ffffffffff1111111111ffffffffffff1111111111111
    ffffffffff1111111111ffffffffff1111111111fffffffff111111111fffffffff1111111111ffffffff111111111fffffffff111111111111ffffffffff1111111111ffffffffffff1111111111111
    ffffffffff1111111111ffffffffff1111111111fffffffff111111111fffffffff1111111111ffffffff111111111fffffffff111111111111ffffffffff1111111111ffffffffffff1111111111111
    1111111111ffffffffff1111111111ffffffffff111111111fffffffff111111111ffffffffff11111111fffffffff111111111ffffffffffff1111111111ffffffffff111111111111fffffffffffff
    1111111111ffffffffff1111111111ffffffffff111111111fffffffff111111111ffffffffff11111111fffffffff111111111ffffffffffff1111111111ffffffffff111111111111fffffffffffff
    1111111111ffffffffff1111111111ffffffffff111111111fffffffff111111111ffffffffff11111111fffffffff111111111ffffffffffff1111111111ffffffffff111111111111fffffffffffff
    1111111111ffffffffff1111111111ffffffffff111111111fffffffff111111111ffffffffff11111111fffffffff111111111ffffffffffff1111111111ffffffffff111111111111fffffffffffff
    1111111111ffffffffff1111111111ffffffffff111111111fffffffff111111111ffffffffff11111111fffffffff111111111ffffffffffff1111111111ffffffffff111111111111fffffffffffff
    1111111111ffffffffff1111111111ffffffffff111111111fffffffff111111111ffffffffff11111111fffffffff111111111ffffffffffff1111111111ffffffffff111111111111fffffffffffff
    1111111111ffffffffff1111111111ffffffffff111111111fffffffff111111111ffffffffff11111111fffffffff111111111ffffffffffff1111111111ffffffffff111111111111fffffffffffff
    1111111111ffffffffff1111111111ffffffffff111111111fffffffff111111111ffffffffff11111111fffffffff111111111ffffffffffff1111111111ffffffffff111111111111fffffffffffff
    1111111111ffffffffff1111111111ffffffffff111111111fffffffff111111111ffffffffff11111111fffffffff111111111ffffffffffff1111111111ffffffffff111111111111fffffffffffff
    1111111111ffffffffff1111111111ffffffffff111111111fffffffff111111111ffffffffff11111111fffffffff111111111ffffffffffff1111111111ffffffffff111111111111fffffffffffff
    1111111111ffffffffff1111111111ffffffffff111111111fffffffff111111111ffffffffff11111111fffffffff111111111ffffffffffff1111111111ffffffffff111111111111fffffffffffff
    ffffffffff1111111111ffffffffff1111111111fffffffff111111111fffffffff111111111fffffffff111111111fffffffff111111111111ffffffffff1111111111ffffffffffff1111111111111
    ffffffffff1111111111ffffffffff1111111111fffffffff111111111fffffffff111111111fffffffff111111111fffffffff111111111111ffffffffff1111111111ffffffffffff1111111111111
    ffffffffff1111111111ffffffffff1111111111fffffffff111111111fffffffff111111111fffffffff111111111fffffffff111111111111ffffffffff1111111111ffffffffffff1111111111111
    ffffffffff1111111111ffffffffff1111111111fffffffff111111111fffffffff111111111fffffffff111111111fffffffff111111111111ffffffffff1111111111ffffffffffff1111111111111
    ffffffffff1111111111ffffffffff1111111111fffffffff111111111fffffffff111111111fffffffff111111111fffffffff111111111111ffffffffff1111111111ffffffffffff1111111111111
    ffffffffff1111111111ffffffffff1111111111fffffffff111111111fffffffff111111111fffffffff111111111fffffffff111111111111ffffffffff1111111111ffffffffffff1111111111111
    ffffffffff1111111111ffffffffff1111111111fffffffff111111111fffffffff111111111fffffffff111111111fffffffff111111111111ffffffffff1111111111ffffffffffff1111111111111
    ffffffffff1111111111ffffffffff1111111111fffffffff111111111fffffffff111111111fffffffff111111111fffffffff111111111111ffffffffff1111111111ffffffffffff1111111111111
    ffffffffff1111111111ffffffffff1111111111fffffffff111111111fffffffff111111111fffffffff111111111fffffffff111111111111ffffffffff1111111111ffffffffffff1111111111111
    ffffffffff1111111111ffffffffff1111111111fffffffff111111111fffffffff111111111fffffffff111111111fffffffff111111111111ffffffffff1111111111ffffffffffff1111111111111
    1111111111ffffffffff1111111111ffffffffff111111111fffffffff111111111fffffffff111111111fffffffff111111111ffffffffffff1111111111ffffffffff111111111111fffffffffffff
    1111111111ffffffffff1111111111ffffffffff111111111fffffffff111111111fffffffff111111111fffffffff111111111ffffffffffff1111111111ffffffffff111111111111fffffffffffff
    1111111111ffffffffff1111111111ffffffffff111111111fffffffff111111111fffffffff111111111fffffffff111111111ffffffffffff1111111111ffffffffff111111111111fffffffffffff
    1111111111ffffffffff1111111111ffffffffff111111111fffffffff111111111fffffffff111111111fffffffff111111111ffffffffffff1111111111ffffffffff111111111111fffffffffffff
    1111111111ffffffffff1111111111ffffffffff111111111fffffffff111111111fffffffff111111111fffffffff111111111ffffffffffff1111111111ffffffffff111111111111fffffffffffff
    1111111111ffffffffff1111111111ffffffffff111111111fffffffff111111111fffffffff111111111fffffffff111111111ffffffffffff1111111111ffffffffff111111111111fffffffffffff
    1111111111ffffffffff1111111111ffffffffff111111111fffffffff111111111fffffffff111111111fffffffff111111111ffffffffffff1111111111ffffffffff111111111111fffffffffffff
    1111111111ffffffffff1111111111ffffffffff111111111fffffffff111111111fffffffff111111111fffffffff111111111ffffffffffff1111111111ffffffffff111111111111fffffffffffff
    1111111111ffffffffff1111111111ffffffffff111111111fffffffff111111111fffffffff111111111fffffffff111111111ffffffffffff1111111111ffffffffff111111111111fffffffffffff
    1111111111ffffffffff1111111111ffffffffff111111111fffffffff111111111fffffffff111111111fffffffff111111111ffffffffffff1111111111ffffffffff111111111111fffffffffffff
    1111111111ffffffffff1111111111ffffffffff111111111fffffffff111111111fffffffff111111111fffffffff111111111ffffffffffff1111111111ffffffffff111111111111fffffffffffff
    1111111111ffffffffff1111111111ffffffffff111111111fffffffff111111111fffffffff111111111fffffffff111111111ffffffffffff1111111111ffffffffff111111111111fffffffffffff
    `)
