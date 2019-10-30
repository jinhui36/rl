const router = require('koa-router')()

function random(lower, upper) {
	return Math.floor(Math.random() * (upper - lower+1)) + lower;
}  

router.get('/rl', async (ctx, next) => {
 ctx.body = 'koa2 string';
  // ctx.response.set('Location', 'https://wwww.baidu.com')
  var links = ["https://creditcard.cmbc.com.cn/wsv2/?etr=kGy6TZrY1jluXxr7iO/UauOO7KAWY5ErTWaDSRxGRVHOgO29lLJfs1GMFzvBhlLsfkS7B7wnjnRdixJ9IEEVKGqm++SGUaTLO9SrjF+H+I0IaTIA7LevUVGYXIsxrmxk9AL/52nNO0kHrOvqM7WOv8Osj1tRz7OqExwBaoUhSEAa4nIAwcPgHrggHrRB3PuHCf0tmGxvw8MDmiRZXgPDchA72+5//bSfDfNPkDdWjHvpVDilYKFhBX0yMwrtj+5vq4WZXVo+YXwutEBrsKzam01iji3v5foYbUQWsxuMpE1ISdpyAJpX1xQlbhBcAuETewt1itzg9yDeO/n6kcg0m1ecSYhh0yFQ29Ekmgme6+QO7Hx3xyPQowDL37uT4q1dYkoe1SxHWT45ORRNFMdtsGG2Ni/poQ2lt/w9klQ8dHt14aaiXzg4Puvw34lTrbYmnN4O2QkHTdZSHfHE//D5FgYD+p9M621oJcaXDJniIcofWVZxS13XPJuoHQ9Q6kYN",
  "https://creditcard.cmbc.com.cn/wsv2/?etr=XPYLn7f6cdPknX0qd8mZSyhr29sg2uyk/bw8+llM2l0grFsPsXik3Gw4vM+jFVwhGfxNVwObfM3v4jD/p7QIIRla2kOM6QkTpzGSvvB3qbvtypbZh7ieN3IpCdvGNojNo4J1CSJMwwuwLJkTZNwHmKGvPpgjyewAK+SqRZq/kReIw1C7FCzZW5q0KOGdw6z9heWuncCidsxjjZeEAKK/9QRo3tnYO+I5NqnOMBe/oylR2tH4Msu4tL7s/M4VF9U8elYM9vuCqs7UrpYb8Uy+CYI9mILAzLsAqqV4dfWUhVCsuWPIry39o/LWr1ol57v1qPS1Sxi3BWI7H4+bgz1tSleqm0P8hRd7JSR1m69W9RJv/DEIxgNWi61aXng3b2Ec4D0JdY3bcfnfufxVTz71VbX7So8NRt4ovXiWuU2K1ce+zXCIT320VNQkvg5no4Pv1C49OV2SG1bIneZ30t5dP1Dga3Ek9DvZRHzI8gQgaraslJpvEAlWfqnmxGHnxlCL",
  "https://creditcard.cmbc.com.cn/wsv2/?etr=JvmZWpbFpRpQlPF7sF8m1OHfob+hOEnxLhiyGsMS8AwBqweoQJm/m9wrdj9AZVm+XejoI1PpW6trMl0AqYnkTijz7JbZKfr05/8ISD66UtyKfrS9b+FAIjfDF4xyt+avmPNSBwleBlXpyGGzTJ56UnCvqp1MoUKui1PErrMm4gJn530+YOfHHK8lnXoK6FQjXfa+Lu4b/Cr/TflrysppNULne2p6R4s3bWK8S1NTmvrLLKyYlHdn4mAoMnM0qRa+89fSzef/2zyQMCcKQ58uQSYDdLEoVWMYBygjlaGNgZr67kbG4Y4wALFwutGMbfP0NCDc1BdMkfD2cBB/qOlNMoPlKOawtNRLYVG4pdbau4Og6UUUvYd5Up0eB17W/418XBSwkXMBq3FlPVgp5ciYO2iR0oZCnE7gkRDGW8rkCwHcud6uhWcf2tFZDtapiRr4jKz+Fs3SAyJggqbGAUt5iWS91WuEjkKAdLTfq6fkHdYObRug5djBLSujAGUkKLQg&token=2oRNUnEeWGsvYqb4dkPylq0UFnyiDS1D1LjPk8B20UyAp7FT_Mb7jS72NwFBUtS40so6pNXNJPMGi02vHPZohg"
  ];
  num = random(0, 2);
  link = links[num];
  ctx.redirect(link);
})

module.exports = router
