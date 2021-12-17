#### Button 按钮

<InArticleAdsense
 style="display:block; text-align:center;"
    data-full-width-responsive="true"
    data-ad-format='auto'
    data-ad-client="ca-pub-7979174285252748"
    data-ad-slot="2903739942">
</InArticleAdsense>

#### 常用的操作按钮。
<ClientOnly>
<heaven-button-default></heaven-button-default>
</ClientOnly>


``` html
<template>
   <h-button>默认按钮</h-button>
   <h-button type="primary">主要按钮</h-button>
   <h-button type="success">成功按钮</h-button>
   <h-button type="warning">警告按钮</h-button>
   <h-button type="danger">危险按钮</h-button>
   <h-button type="info">信息按钮</h-button>
</template>
```


#### 禁用状态

<ClientOnly>
<heaven-button-disabled></heaven-button-disabled>
</ClientOnly>

``` html
<template>
    <h-button disabled>默认按钮</h-button>
    <h-button disabled type="primary">主要按钮</h-button>
    <h-button disabled type="success">成功按钮</h-button>
    <h-button disabled type="warning">警告按钮</h-button>
    <h-button disabled type="danger">危险按钮</h-button>
    <h-button disabled type="info">信息按钮</h-button> 
</template> 
```

#### 按钮组。
<ClientOnly>
<heaven-button-group></heaven-button-group>
</ClientOnly>

``` html
<template>
<h-button-group>
  <h-button type="primary">上一页</h-button>
  <h-button type="primary">下一页</h-button>
</h-button-group>
</template>
```


#### 加载中
<ClientOnly>
<heaven-button-loading></heaven-button-loading>
</ClientOnly>

``` html
<template>
  <h-button type="primary" loading>加载按钮</h-button> 
</template>
```


#### EleButton 
<heaven-eleButton></heaven-eleButton>

``` html
<template>
  <el-row>
    <el-button icon="el-icon-search" circle></el-button>
    <el-button type="primary" icon="el-icon-edit" circle></el-button>
    <el-button type="success" icon="el-icon-check" circle></el-button>
    <el-button type="info" icon="el-icon-message" circle></el-button>
    <el-button type="warning" icon="el-icon-star-off" circle></el-button>
    <el-button type="danger" icon="el-icon-delete" circle></el-button>
  </el-row> 
</template>
```




### 配置选项
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-|-|-|-|-|
| type | 类型 | String | default / primary / success / warning / danger / info | default |
| size | 尺寸 | String | mini / small / normal / large | normal |
| loading | 是否加载中状态 | Boolean | — | false |
| disabled | 是否禁用状态 | String | — | — |
| icon | 图标类名 | Boolean | — | false |

