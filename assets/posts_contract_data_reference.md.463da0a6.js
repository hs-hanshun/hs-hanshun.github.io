import{_ as e,o as t,c as n,f as a}from"./app.eb0c8332.js";const _='{"title":"Solidity\u5F15\u7528\u7C7B\u578B","description":"\u5F15\u7528\u7C7B\u578B\uFF0Carray\uFF0Cstruct","frontmatter":{"date":"2023-01-10T00:00:00.000Z","title":"Solidity\u5F15\u7528\u7C7B\u578B","tags":["\u667A\u80FD\u5408\u7EA6","Solidity"],"description":"\u5F15\u7528\u7C7B\u578B\uFF0Carray\uFF0Cstruct"},"headers":[{"level":2,"title":"\u6570\u7EC4array","slug":"\u6570\u7EC4array"},{"level":3,"title":"\u521B\u5EFA\u6570\u7EC4\u7684\u89C4\u5219","slug":"\u521B\u5EFA\u6570\u7EC4\u7684\u89C4\u5219"},{"level":3,"title":"\u6570\u7EC4\u5E38\u7528\u65B9\u6CD5","slug":"\u6570\u7EC4\u5E38\u7528\u65B9\u6CD5"},{"level":2,"title":"\u7ED3\u6784\u4F53","slug":"\u7ED3\u6784\u4F53"}],"relativePath":"posts/contract/data_reference.md"}',r={},i=a(`<h1 id="solidity\u5F15\u7528\u7C7B\u578B" tabindex="-1">Solidity\u5F15\u7528\u7C7B\u578B <a class="header-anchor" href="#solidity\u5F15\u7528\u7C7B\u578B" aria-hidden="true">#</a></h1><h2 id="\u6570\u7EC4array" tabindex="-1">\u6570\u7EC4array <a class="header-anchor" href="#\u6570\u7EC4array" aria-hidden="true">#</a></h2><p>\u6570\u636E\u662FSolidity\u4E2D\u5E38\u7528\u7684\u4E00\u79CD\u53D8\u91CF\u7C7B\u578B\uFF0C\u7528\u6765\u5B58\u50A8\u4E00\u7EC4\u6570\u636E(\u6574\u6570\uFF0C\u5B57\u8282\uFF0C\u5730\u5740\u7B49\u7B49)\u3002\u6570\u636E\u5206\u4E3A\u56FA\u5B9A\u957F\u5EA6\u6570\u7EC4\u548C\u53EF\u53D8\u957F\u5EA6\u6570\u7EC4\u4E24\u79CD\uFF1A</p><ul><li>\u56FA\u5B9A\u957F\u5EA6\u6570\u7EC4\uFF1A\u5728\u58F0\u660E\u65F6\u6307\u5B9A\u6570\u7EC4\u7684\u957F\u5EA6\u3002\u7528T[k]\u7684\u683C\u5F0F\u58F0\u660E\uFF0C\u5176\u4E2DT\u662F\u5143\u7D20\u7684\u7C7B\u578B\uFF0Ck\u662F\u957F\u5EA6\uFF0C\u4F8B\u5982\uFF1A</li></ul><div class="language-"><pre><code>    // \u56FA\u5B9A\u957F\u5EA6 Array
    uint[8] array1;
    bytes1[5] array2;
    address[100] array3;
</code></pre></div><ul><li>\u53EF\u53D8\u957F\u5EA6\u6570\u7EC4(\u52A8\u6001\u6570\u7EC4)\uFF1A\u5728\u58F0\u660E\u65F6\u4E0D\u6307\u5B9A\u6570\u7EC4\u7684\u957F\u5EA6\u3002\u7528T[]\u7684\u683C\u5F0F\u58F0\u660E\uFF0C\u5176\u4E2DT\u662F\u5143\u7D20\u7C7B\u578B\uFF0C\u4F8B\u5982\uFF1A</li></ul><div class="language-"><pre><code>    // \u53EF\u53D8\u957F\u5EA6 Array
    uint[] array4;
    bytes1[] array5;
    address[] array6;
    bytes array7;
</code></pre></div><p>\u6CE8\u610F\uFF1Abytes\u6BD4\u8F83\u7279\u6B8A\uFF0C\u662F\u6570\u7EC4\uFF0C\u4F46\u662F\u4E0D\u7528\u52A0[]\u3002\u53E6\u5916\uFF0C\u4E0D\u80FD\u7528byte[]\u58F0\u660E\u5355\u6570\u7EC4\uFF0C\u53EF\u4EE5\u4F7F\u7528bytes\u6216\u8005bytes1[]\uFF0C\u5728gas\u4E0A\uFF0Cbytes\u6BD4bytes1[]\u4FBF\u5B9C\uFF0C\u56E0\u4E3Abytes1[]\u5728memory\u4E2D\u8981\u589E\u52A031\u4E2A\u5B57\u8282\u8FDB\u884C\u586B\u5145\uFF0C\u4F1A\u4EA7\u751F\u989D\u5916\u7684gas\u3002\u4F46\u662F\u5728storage\u4E2D\uFF0C\u7531\u4E8E\u5185\u5B58\u7D27\u5BC6\u6253\u5305\uFF0C\u4E0D\u5B58\u5728\u5B57\u8282\u586B\u5145\u3002</p><h3 id="\u521B\u5EFA\u6570\u7EC4\u7684\u89C4\u5219" tabindex="-1">\u521B\u5EFA\u6570\u7EC4\u7684\u89C4\u5219 <a class="header-anchor" href="#\u521B\u5EFA\u6570\u7EC4\u7684\u89C4\u5219" aria-hidden="true">#</a></h3><p>\u5728Solidity\u91CC\uFF0C\u521B\u5EFA\u6570\u7EC4\u6709\u4E00\u4E9B\u89C4\u5219\uFF1A</p><ul><li>\u5BF9\u4E8Ememory\u4FEE\u9970\u7684\u52A8\u6001\u6570\u7EC4\uFF0C\u53EF\u4EE5\u4F7F\u7528new\u64CD\u4F5C\u7B26\u6765\u521B\u5EFA\uFF0C\u4F46\u662F\u5FC5\u987B\u58F0\u660E\u957F\u5EA6\uFF0C\u5E76\u4E14\u58F0\u660E\u957F\u5EA6\u540E\u4E0D\u80FD\u6539\u53D8\uFF0C\u4F8B\u5982\uFF1A</li></ul><div class="language-"><pre><code>    // memory\u52A8\u6001\u6570\u7EC4
    uint[] memory array8 = new uint[](5);
    bytes memory array9 = new bytes(9);
</code></pre></div><ul><li>\u6570\u7EC4\u5B57\u9762\u5E38\u6570(Array Literals)\u662F\u5199\u4F5C\u8868\u8FBE\u5F0F\u5F62\u5F0F\u7684\u6570\u7EC4\uFF0C\u7528\u65B9\u62EC\u53F7\u5305\u7740\u6765\u521D\u59CB\u5316array\u7684\u4E00\u79CD\u65B9\u5F0F\uFF0C\u5E76\u4E14\u91CC\u9762\u6BCF\u4E00\u4E2A\u5143\u7D20\u7684type\u662F\u4EE5\u7B2C\u4E00\u4E2A\u5143\u7D20\u4E3A\u51C6\u7684\uFF0C\u4F8B\u5982[1,2,3]\u91CC\u9762\u6240\u6709\u7684\u5143\u7D20\u90FD\u662Fuint8\u7C7B\u578B\uFF0C\u56E0\u4E3A\u5728solidity\u4E2D\u5982\u679C\u4E00\u4E2A\u503C\u6CA1\u6709\u6307\u5B9Atype\u7684\u8BDD\uFF0C\u9ED8\u8BA4\u5C31\u662F\u6700\u5C0F\u5355\u4F4D\u7684\u8BE5type\uFF0C\u8FD9\u91CCint\u7684\u9ED8\u8BA4\u6700\u5C0F\u5355\u4F4D\u7C7B\u578B\u5C31\u662Fuint8\u3002\u800C[uint(1),2,3]\u91CC\u9762\u7684\u5143\u7D20\u90FD\u662Fuint\u7C7B\u578B\uFF0C\u56E0\u4E3A\u7B2C\u4E00\u4E2A\u5143\u7D20\u6307\u5B9A\u4E86\u662Fuint\u7C7B\u578B\u4E86\uFF0C\u6211\u4EEC\u90FD\u4EE5\u7B2C\u4E00\u4E2A\u5143\u7D20\u4E3A\u51C6\u3002 \u4E0B\u9762\u7684\u5408\u7EA6\u4E2D\uFF0C\u5BF9\u4E8Ef\u51FD\u6570\u91CC\u9762\u7684\u8C03\u7528\uFF0C\u5982\u679C\u6211\u4EEC\u6CA1\u6709\u663E\u5F0F\u5BF9\u7B2C\u4E00\u4E2A\u5143\u7D20\u8FDB\u884Cuint\u5F3A\u8F6C\u7684\u8BDD\uFF0C\u662F\u4F1A\u62A5\u9519\u7684\uFF0C\u56E0\u4E3A\u5982\u4E0A\u6240\u8FF0\u6211\u4EEC\u5176\u5B9E\u662F\u4F20\u5165\u4E86uint8\u7C7B\u578B\u7684array\uFF0C\u53EF\u662Fg\u51FD\u6570\u9700\u8981\u7684\u5374\u662Fuint\u7C7B\u578B\u7684array\uFF0C\u5C31\u4F1A\u62A5\u9519\u4E86\u3002</li></ul><div class="language-"><pre><code>// SPDX-License-Identifier: GPL-3.0
pragma solidity &gt;=0.4.16 &lt;0.9.0;

contract C {
    function f() public pure {
        g([uint(1), 2, 3]);
    }
    function g(uint[3] memory) public pure {
        // ...
    }
}
</code></pre></div><ul><li>\u5982\u679C\u521B\u5EFA\u7684\u662F\u52A8\u6001\u6570\u7EC4\uFF0C\u9700\u8981\u4E00\u4E2A\u4E00\u4E2A\u7684\u53BB\u8D4B\u503C</li></ul><div class="language-"><pre><code>    uint[] memory x = new uint[](3);
    x[0] = 1;
    x[1] = 3;
    x[2] = 4;
</code></pre></div><h3 id="\u6570\u7EC4\u5E38\u7528\u65B9\u6CD5" tabindex="-1">\u6570\u7EC4\u5E38\u7528\u65B9\u6CD5 <a class="header-anchor" href="#\u6570\u7EC4\u5E38\u7528\u65B9\u6CD5" aria-hidden="true">#</a></h3><ul><li>length: \u6570\u7EC4\u6709\u4E00\u4E2A\u5305\u542B\u5143\u7D20\u6570\u91CF\u7684length\u6210\u5458\uFF0Cmemory\u6570\u7EC4\u7684\u957F\u5EA6\u5728\u521B\u5EFA\u540E\u662F\u56FA\u5B9A\u7684\u3002</li><li>push(): \u52A8\u6001\u6570\u7EC4\u548Cbytes\u62E5\u6709push()\u6210\u5458\uFF0C\u53EF\u4EE5\u5728\u6570\u7EC4\u6700\u540E\u6DFB\u52A0\u4E00\u4E2A0\u5143\u7D20\u3002</li><li>push(x): \u52A8\u6001\u6570\u7EC4\u548Cbytes\u62E5\u6709push(x)\u6210\u5458\uFF0C\u53EF\u4EE5\u5728\u6570\u7EC4\u6700\u540E\u6DFB\u52A0\u4E00\u4E2Ax\u5143\u7D20\u3002</li><li>pop(): \u52A8\u6001\u6570\u7EC4\u548Cbytes\u62E5\u6709pop()\u6210\u5458\uFF0C\u53EF\u4EE5\u79FB\u9664\u6570\u7EC4\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u3002</li></ul><h2 id="\u7ED3\u6784\u4F53" tabindex="-1">\u7ED3\u6784\u4F53 <a class="header-anchor" href="#\u7ED3\u6784\u4F53" aria-hidden="true">#</a></h2><p>Solidity\u652F\u6301\u901A\u8FC7\u6784\u9020\u7ED3\u6784\u4F53\u7684\u5F62\u5F0F\u5B9A\u4E49\u65B0\u7684\u7C7B\u578B\u3002\u521B\u5EFA\u7ED3\u6784\u4F53\u7684\u65B9\u6CD5\uFF1A</p><div class="language-"><pre><code>    // \u7ED3\u6784\u4F53
    struct Student{
        uint256 id;
        uint256 score; 
    }

    Student student; // \u521D\u59CB\u4E00\u4E2Astudent\u7ED3\u6784\u4F53

    //  \u7ED9\u7ED3\u6784\u4F53\u8D4B\u503C
    // \u65B9\u6CD51:\u5728\u51FD\u6570\u4E2D\u521B\u5EFA\u4E00\u4E2Astorage\u7684struct\u5F15\u7528
    function initStudent1() external{
        Student storage _student = student; // assign a copy of student
        _student.id = 11;
        _student.score = 100;
    }

    // \u65B9\u6CD52:\u76F4\u63A5\u5F15\u7528\u72B6\u6001\u53D8\u91CF\u7684struct
    function initStudent2() external{
        student.id = 1;
        student.score = 80;
    }
</code></pre></div>`,21),s=[i];function d(l,u,o,c,y,p){return t(),n("div",null,s)}var g=e(r,[["render",d]]);export{_ as __pageData,g as default};
