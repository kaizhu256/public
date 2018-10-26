// aa = fs.readFileSync("/tmp/a00.txt", "utf8");

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
