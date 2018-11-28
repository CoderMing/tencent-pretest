export default {
  bannerImg: (() => [
    'http://static.coderming.com/pic/banner-img-1.png',
    'http://static.coderming.com/pic/banner-img-2.png'
  ][Math.floor(Math.random() * 2)])(),

  titleSectionData: {
    title: '免费午餐小善大爱',

    smallTitle: '达成目标竞猜娱乐场将为小朋友支持37500份免费午餐'
  },

  infoOne: [
    {
      name: '爱心筹集目标数量',
      num: 15000000
    },
    {
      name: '已筹集爱心数量',
      num: 1234285
    }
  ],

  progress: { val: 50, max: 100 },

  infoTwo: [
    {
      name: '累计献出的爱心',
      num: 5600
    },
    {
      name: '为项目贡献',
      num: 0.14,
      suffix: '份午餐'
    }
  ]
}
