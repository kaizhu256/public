// aa = fs.readFileSync("/tmp/a00.txt", "utf8");



bb = aa.replace((/\t/g), " ").replace((/ ([0-9A-F]{8} )/g), "\n$1");
cc = bb.replace(
    (/^(\w{8} .*?$)/gm),
    "    <code>$1</code>"
)
cc = cc.replace(
    (/(?:\n[^ ].+)+/g),
    function (match0) {
        return '\n  </cheat>\n  <cheat type="cb" name="'
            + match0.trim().replace((/\s+/g), " ").replace((/[^ \w]/g), "_")
            + '" enabled="false">'
            + '\
\n    <code>00006838 000A</code>\n\
    <code>1006C992 0007</code>\
';
    }
);
print cc



bb = aa.trim().split("\n\n");
cc = bb.map(function (aa) {
    aa = aa.trim().split("\n");
    aa.forEach(function (bb, ii) {
        if (!ii) {
            aa[ii] = '\
  <cheat type="cb" name="' + bb + '" enabled="false">\n\
    <code>1000048A 0007</code>\n\
    <code>000037AE 000A</code>\
'
            return;
        }
        aa[ii] = '    <code>' + bb + '</code>';
    });
    return aa.join("\n");
}).join("\n  </cheat>\n");
