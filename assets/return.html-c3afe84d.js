import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<h1 id="返回格式" tabindex="-1"><a class="header-anchor" href="#返回格式" aria-hidden="true">#</a> 返回格式</h1><h2 id="_302跳转" tabindex="-1"><a class="header-anchor" href="#_302跳转" aria-hidden="true">#</a> 302跳转</h2><p>直接重定向到图片链接</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">redirect</span><span class="token punctuation">:</span> <span class="token header-value">https://i.jitsu.top/img-original/img/2018/12/21/00/11/28/72203964_p0.jpg</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>如果没有结果会返回一个404网页（不会重定向）</p></div><h2 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> JSON</h2><p>API的返回格式为一个包含了Pixiv图片信息对象的数组</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;pid&quot;</span><span class="token operator">:</span> <span class="token number">72203964</span><span class="token punctuation">,</span>
    <span class="token property">&quot;page&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token number">1055457</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;けもみみ。&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ふぇありぃあい＠&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;r18&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">1430</span><span class="token punctuation">,</span>
    <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">2029</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;オリジナル&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;獣耳&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;うちの子&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;紫陽ちゃん&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;女の子&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;オリジナル7500users入り&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;原创&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;兽耳&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;我家孩子&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;女孩子&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;原创7500收藏&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;original&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;beast ears&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;OC&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;girl&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;original 7,500+ bookmarks&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i.jitsu.top/img-original/img/2018/12/21/00/11/28/72203964_p0.jpg&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>若没有结果则返回一个空数组</p></div>`,9),o=[p];function i(u,c){return s(),a("div",null,o)}const r=n(e,[["render",i],["__file","return.html.vue"]]);export{r as default};
