const router = require('koa-router')()

function random(lower, upper) {
	return Math.floor(Math.random() * (upper - lower+1)) + lower;
}  

router.get('/rl', async (ctx, next) => {
 ctx.body = 'koa2 string';
  // ctx.response.set('Location', 'https://wwww.baidu.com')
  var links = [
	"https://creditcard.cmbc.com.cn/wsv2/?etr=kGy6TZrY1jluXxr7iO/UauOO7KAWY5ErTWaDSRxGRVHOgO29lLJfs1GMFzvBhlLsfkS7B7wnjnRdixJ9IEEVKGqm++SGUaTLO9SrjF+H+I0IaTIA7LevUVGYXIsxrmxk9AL/52nNO0kHrOvqM7WOv8Osj1tRz7OqExwBaoUhSEAa4nIAwcPgHrggHrRB3PuHCf0tmGxvw8MDmiRZXgPDchA72+5//bSfDfNPkDdWjHvpVDilYKFhBX0yMwrtj+5vq4WZXVo+YXwutEBrsKzam01iji3v5foYbUQWsxuMpE1ISdpyAJpX1xQlbhBcAuETewt1itzg9yDeO/n6kcg0m1ecSYhh0yFQ29Ekmgme6+QO7Hx3xyPQowDL37uT4q1dYkoe1SxHWT45ORRNFMdtsGG2Ni/poQ2lt/w9klQ8dHt14aaiXzg4Puvw34lTrbYmnN4O2QkHTdZSHfHE//D5FgYD+p9M621oJcaXDJniIcofWVZxS13XPJuoHQ9Q6kYN",
	"https://creditcard.cmbc.com.cn/wsv2/?etr=XPYLn7f6cdPknX0qd8mZSyhr29sg2uyk/bw8+llM2l0grFsPsXik3Gw4vM+jFVwhGfxNVwObfM3v4jD/p7QIIRla2kOM6QkTpzGSvvB3qbvtypbZh7ieN3IpCdvGNojNo4J1CSJMwwuwLJkTZNwHmKGvPpgjyewAK+SqRZq/kReIw1C7FCzZW5q0KOGdw6z9heWuncCidsxjjZeEAKK/9QRo3tnYO+I5NqnOMBe/oylR2tH4Msu4tL7s/M4VF9U8elYM9vuCqs7UrpYb8Uy+CYI9mILAzLsAqqV4dfWUhVCsuWPIry39o/LWr1ol57v1qPS1Sxi3BWI7H4+bgz1tSleqm0P8hRd7JSR1m69W9RJv/DEIxgNWi61aXng3b2Ec4D0JdY3bcfnfufxVTz71VbX7So8NRt4ovXiWuU2K1ce+zXCIT320VNQkvg5no4Pv1C49OV2SG1bIneZ30t5dP1Dga3Ek9DvZRHzI8gQgaraslJpvEAlWfqnmxGHnxlCL",
	"https://creditcard.cmbc.com.cn/wsv2/?etr=JvmZWpbFpRpQlPF7sF8m1OHfob+hOEnxLhiyGsMS8AwBqweoQJm/m9wrdj9AZVm+XejoI1PpW6trMl0AqYnkTijz7JbZKfr05/8ISD66UtyKfrS9b+FAIjfDF4xyt+avmPNSBwleBlXpyGGzTJ56UnCvqp1MoUKui1PErrMm4gJn530+YOfHHK8lnXoK6FQjXfa+Lu4b/Cr/TflrysppNULne2p6R4s3bWK8S1NTmvrLLKyYlHdn4mAoMnM0qRa+89fSzef/2zyQMCcKQ58uQSYDdLEoVWMYBygjlaGNgZr67kbG4Y4wALFwutGMbfP0NCDc1BdMkfD2cBB/qOlNMoPlKOawtNRLYVG4pdbau4Og6UUUvYd5Up0eB17W/418XBSwkXMBq3FlPVgp5ciYO2iR0oZCnE7gkRDGW8rkCwHcud6uhWcf2tFZDtapiRr4jKz+Fs3SAyJggqbGAUt5iWS91WuEjkKAdLTfq6fkHdYObRug5djBLSujAGUkKLQg&token=2oRNUnEeWGsvYqb4dkPylq0UFnyiDS1D1LjPk8B20UyAp7FT_Mb7jS72NwFBUtS40so6pNXNJPMGi02vHPZohg"
  ];
  maxLink = links.length - 1;
  num = random(0, maxLink);
  link = links[num];
  ctx.redirect(link);
})

router.get('/rl1', async (ctx, next) => {
  ctx.body = 'koa2 string';
   // ctx.response.set('Location', 'https://wwww.baidu.com')
   var links = [
	"https://creditcard.cmbc.com.cn/wsv2/?cnl=5,2125898,75&cnltype=CLASS,EMPLOYEEB,ORGANIZE&etr=RSaeCyvuUUxOo/O0Oo+qnqpOEJ8i0ZE3v/f+RqB/Rv+Pp+TlkwrWrlIpf3+cQHZHyxnFJGf5I62P+TY5X9uIE/H5C8EJgNlt3+Wx3MAaQZFB2c8QBB2uJjzMRodL+FNehRG4mSBYhYgknWyjLT4W431bKEIze9q/MGhnXRCIbGJndQXFPxiQgEGzkWZ8cBIMG75LC50q5rv90usocB+kHzHQgeInFRV4b33wNs1a4/ri2OSw1zhRyUHax6HPwGz0ze5BWaWhAo0gj4T66us8K8wVPC4627fYJrGLBaVuvTSOWuLAaMrR3PSnWyD54puahodldRTG/JJ9QOCTVQwzUy9DjFQbxd9IP/HKBBZKmFwZEmGiErqE13o91r7kmKRpO8UAQgIZTpECcouZS6Ag4hLFLHGPhhFyH1zf42/mYx1b++cCL/nF9T61CYmwkDaa2HnT2f+FbcSgrV8UgY266JM5Wgcpcv9TnmdqQ+XBLNTvhz5D/yt7DVjqXm9GmOIm&token=cQImytAX96KJusr6DwcXHVYpSvncDunk5L7peRU1kTpyXNEZlqsESZbUMCrOotxD_G_3TpOEoVuzqs9OX3kRcg",
	"https://creditcard.cmbc.com.cn/wsv2/?cnl=5,1874677,75&cnltype=CLASS,EMPLOYEEB,ORGANIZE&etr=n//zmXvg2LaKJw6ErSG5TZb3YPe8OrmBxPROqWFHCkaMSFtIaZ2O1SjYq+wCrCANjbYSsxqrGwOn1VlINKBf941F19YaCZms89ld8woC057ISNHSht9n6lkDjrC0xOYlCAu0sQgRIJ/Qbg9YobzGJtswESMS8KgcHrM6BkHDBFiOJfRbqxP1lJDTKlUraVPU9828XyL2y6dYRbJNtQxchnIuORxGr3iw2QnlKAVXDk6BC+yYT9Vc0PQS5Bh51tSLgQF4c+5wqpESV+Tg+Kbh+ySqy9iDTmVrSS8ryUIBSR9vFoTOG3s7tBP4+KneRWePYdNSSG7KLHi9KlcW5Ns15GhARX+HbvKfDnX87ldIvxYuUnCTxVYsEDHApW8/xZohuQX/KokrbiRydzaJ2yoOgG04ZV8wiOzZ+1H9rvWG/Frk2PBtjT7IMGysWwOVVieBHntMuMZsTStE2E/pFeOB0RpLlHE0pBfrAKsqzt2DU+UEkIPQeVhO/supkjCia6cA",
	"https://creditcard.cmbc.com.cn/wsv2/?cnl=5,2161642,75&cnltype=CLASS,EMPLOYEEB,ORGANIZE&etr=a2SPGLL1YTShWpGWK4l75ndxnnmUcfGs1BXA25/G6Oin2DUWKBPtyCtcdNig1D7MUVgS9f8M4cdzIc60i7bWyNGSlM4e+en0r5i1XeAKoiWa6cfQfBpu7AjOkN+erO/d392tzLL/uJ/iNZIj+XG93lZiyWlVYhmsdRqwzl3UKt5IslYC7UVdOlFWpFJn/89ywY40A7kCwm8mDOZLjta2gaexqfQnRVLuPIWdse0frJkoHQU3FV8M+NH6K1DlxB3QzU8kkcX1R0XSFhkODaKNBS54Nnybip8s3O+HmONdQLIWAK29Lw2rr6SScD4C5VXmeiPztLKCto5cbZwZU9qlLXnHjOBoRoG5X7CekgdNfpg6yWbeyAImYpusG6eGG0js47E3g4TafsXzOC9LBGExYWE6MfEcjXLhWwtIOZi9BlgYcn7HOxZunkLnvQC12iB63Entx/Yy/GgRhpyAthidF0uSx25We+Rp4UjdaSG4ljOgXviSZP2LahB0nlWex8aL",
	"https://creditcard.cmbc.com.cn/wsv2/?cnl=5,2160937,75&cnltype=CLASS,EMPLOYEEB,ORGANIZE&etr=xT40xPGbR4u6rq9PQ45e0TE6u1l3vy+JkUcGKi0cxLCuRrb8Ko1w6RTHiErZo/TD9KT9EXSuA44a6PQHI/REzKc0dcpYp7S2wEqYe0JBbsA5p6qDNNtMBbT3junGujzNzIqLV1E1ddpaYS3rQAM/FtyeLxkiboBTtGh9r+B/bKAcqNjuUnyVyn06pMAEpe2WWf7ddkLQ5PAXzzBfsvnWc2/ms7JY87WR944plylBKNAhWxQsL92xaXGzoMQkHQ9yEOOnu3t65yMCK2h0PCuK4bL/IPwzv891z/r10Anq++S395tGvU+iRJ6UHHILpPIJfgKslMidHFUc9iue1zItHGNpBUlQPgMaovhIsr4Sqm7AyF/eGqmFx/H3i96I20WeRyWTOJrxSYRrRDlykh7KKdUt+KuDvaYzsxmWvD7kx7T98OlklTQJrrGEJVXldDWvTwF/kzYjvGcRaJP6QvFzqJiOqWygRi37fvGkSzUOFYiRCOeUyfVIwTA9BcySQi6n&token=bYZjrZCbAckWDlP2UuwZ332pk5tcc-jt0HshGH0Todrn5QPRVYee6IXCSL7i44EvcwZR9zsFQbgKQ--m7u9ioQ",
	"https://creditcard.cmbc.com.cn/wsv2/?cnl=5,2163150,75&cnltype=CLASS,EMPLOYEEB,ORGANIZE&etr=K0DArTPcJD/G/3GJ/bvmeZCUhsorQeeExuo0/ld3tSHCgN0NPrhS0Qh6ikn5Y51347gVEISvP42zg0lCDNpEYay4jdAA91J4P5/8FOOBGRY8kfrCuufJxAS3DIXNOIaknpiYj9DF/vPlwbp7JzcvMy7gWU5AZAsqEMxmj36zZTSiE691ND614iunB2Y0Xiy+jXg/mRkcO23x6tRnNGHBJMVnbvqQvlRiE+dFU/+4kMcOLD+9kzkU/nM8WfC++1G5on6BgoRqMf3oIBnE9CQXG1592uHtMyRTF8hrT6vKzev5WMcXKTTdVSyJDA7kwksVmCBs5sQkEfYu7A+nNcI5K4/Yanyr2kUHX1Jn1NIqH3Fr2zeisbaiewkXRNdHD7Si9COkV/t+yqhCQzoVb3giQ43EYXPxc6Wof7jwrQZJ1kcr4SF/aY/wejT7eG/3ULq8BtMTGxa2QtQxSe3mtfFiYsxR1qOg1Ay8HJezLKifCqiPClni5KuH6vktpxjPprWZ",
	"https://creditcard.cmbc.com.cn/wsv2/?cnl=5,83457,75&cnltype=CLASS,EMPLOYEEB,ORGANIZE&etr=xytFMJRaAJubsqq0TUn6KzFGypbJUkA10NgQUSp4vY5XQJTI7msEUbt7jCYI/mkIQou3i5kYbOk6eZ7hntOAXQTs7G5CoIWJrfYvXqfFhos214zVU6PkZbk1U6hDtr4yboZajJ6CLrT2HP51jdaI1vUE3h2d2K45JDYBSUYvAvQx/4dreQX1YBQ4vuN1uTwYw0ELuUZ6S+KF0FYhzxHwkDR2iix7dTiEVQvXFUXNSZRgiPvn8TqI1JIM61zzcKntapLkZ1xh1VVgwFcGoIUw8hzi5sq+EME9fMbeHQwbylvDz1XPdHgF/A5X8/BglDXMlIUfj/O1NTPs6wx6hGooaIgITFiajQp39ecTmpwdOxZeT6zufSNgdZxrq2QNsNsZ0S3CTUpNpgkZjQNKAXrxc8FcJQP153Vh9uEU4mRq+AzbLYlT0dp7zECHje8vajHt40Zd+UvqxOmdi9+v5MScEt1OTL3O1hC/1WRtfXbkTY2e0VNidTdO5sVdpV5jpwTa",
	"https://creditcard.cmbc.com.cn/wsv2/?cnl=5,1547792,75&cnltype=CLASS,EMPLOYEEB,ORGANIZE&etr=BSOu8ByyeKXgoO57gRlgSlFeeaZWT2yaFn9ol2+1qLTCYLtk2fTcCMEgLVuuUfDZHT95+q6G43uAajRYccFViBiCZMtcaf80WpmP3pg18WLwiynIXa01X/lNlVvie0p0QKsDHeiOEn+98Q6ogRia1x1voPkxPd3Zvv2vYRsQST296LgdtnLAzo9OH2z47eDInPL8KXsP9CI4bMOGnkxEXuEruTDdMUsq/hCrqansKyY9yM+d819PYK2/0/AgTR43l8J4WPCtqupjFrCDDmSaHa3C94V7K2nyjkSX8ZtS9vAvZf6jQJ2cMfWPxlVA4eDlrTUi4Thml+ehyRiV4XK0LJlV05iv+eW14lpIQxiR6S94O9iTs5DKqRmjZ1Hyn1/uDJ7yBEOsmndHHzWAEoUAGuL9czFwNqCA6asd1IP+Fr8PHTGmpZW25LbpwLRa+riEjsfrK7VLnQG8gRxcWH0MLY4rFhu3NHdagwUIn4yeNUaz3dADT6g1MkBqFX0MOIlY&token=ZIqcJB0fKz2Y6pKEUMS-bS4rWiDzPlJxGypYZp7TcFK8jlBCn04GZi0o7A9JnoyjmvSRyrIljDOLHM-u_H3_gw",
	"https://creditcard.cmbc.com.cn/wsv2/?cnl=5,24823,75&cnltype=CLASS,EMPLOYEEB,ORGANIZE&etr=nJeCdOigJomRXEnksXmMwAeqCvSxe7EEvsreF4FktQ16VYGtiIYLvoypF2wW101AMTJh8OgApNixG+/vTG1v8dK1DOkgU3Nb7hvDORT9AgQaagk2dHhMdgpYP1IBlFs0WDryBGfw2G6StAy3DdvC2JLASGh5F9Kbb9xQHVkoTulAufhiAZsrPmUVtsnlWXnfJnp1acD5TuL88+YE68gScmmzVQtRI3unmK2CkNYf5FuemKmsK34DF4X/XDU9oiod2YoZ6HF7Hxu94r7Unh/yLEM2Wb86GxefXrnhr9JHwK4fy9zi+His0hYygHG8uS3uXmXLD//Cxo9iuAwjBMmC2IYIr+U13JPV/HBfo/9jw73Ci6f/MXzACbUiwCuKd/3Ox5GaGsc33oEWL2BSRreyNisQp2uI2Q2HfD6pFO2Xgth9b4i2d/yE8R/KfiLMG1bQ965S3k2NPC9pzKMlkXStN17C852/T2KNkRwFp2TR5dSzpzx/UhJXyj2G/8qcxWrW",
	"https://creditcard.cmbc.com.cn/wsv2/?cnl=5,1365302,75&cnltype=CLASS,EMPLOYEEB,ORGANIZE&etr=BSDG+W1n14B1x/4GNMGXxcYOUfWSJ3dkwMlxJ2/Aq+ivt7xk2Ok/2PBaklddd348dh20QnqPGHxxoQ4d9PT9ltvNJ7SKGAPrdQRlhULaLkf67K12C18PygSI0HxJajy7/Yhs2xtyjKszaSM+DUVYEkVsORFwEsRC3wbAwDHXtUOq3c46tdYQ88278BWb3S3e0F9ngEqXKr56Rgaoh2/TnweDmwGB+RRtUJnKkMe207ErjIke96pp7ym8NZVNZsPInMRUtmBvjd8QWHB3mFzPtQthvhiwgArNpamM0pLC3LndAShHny/OUM03upiHSJD9GRwzivaZ1LGSteP7otUStKbMhks/MyhiQD4EeyEvUaIZYTbIB+g2DMKYF8+25e5Q0eqKCSFLTj3i+6WNbhLuElLpAMnMu6ELl8ictyZVjuUK8Mctr22HaWu1LAeO6qilw0piBc0MKJ027V1cMBNqqCQv11d8SZnrYnYA/WOhJwbrq5fMQDl+3IB5CN9Dvwrq",
	"https://creditcard.cmbc.com.cn/wsv2/?cnl=5,1547792,75&cnltype=CLASS,EMPLOYEEB,ORGANIZE&etr=BSOu8ByyeKXgoO57gRlgSlFeeaZWT2yaFn9ol2+1qLTCYLtk2fTcCMEgLVuuUfDZHT95+q6G43uAajRYccFViBiCZMtcaf80WpmP3pg18WLwiynIXa01X/lNlVvie0p0QKsDHeiOEn+98Q6ogRia1x1voPkxPd3Zvv2vYRsQST296LgdtnLAzo9OH2z47eDInPL8KXsP9CI4bMOGnkxEXuEruTDdMUsq/hCrqansKyY9yM+d819PYK2/0/AgTR43l8J4WPCtqupjFrCDDmSaHa3C94V7K2nyjkSX8ZtS9vAvZf6jQJ2cMfWPxlVA4eDlrTUi4Thml+ehyRiV4XK0LJlV05iv+eW14lpIQxiR6S94O9iTs5DKqRmjZ1Hyn1/uDJ7yBEOsmndHHzWAEoUAGuL9czFwNqCA6asd1IP+Fr8PHTGmpZW25LbpwLRa+riEjsfrK7VLnQG8gRxcWH0MLY4rFhu3NHdagwUIn4yeNUaz3dADT6g1MkBqFX0MOIlY&token=ZIqcJB0fKz2Y6pKEUMS-bS4rWiDzPlJxGypYZp7TcFK8jlBCn04GZi0o7A9JnoyjmvSRyrIljDOLHM-u_H3_gw",
	"https://creditcard.cmbc.com.cn/wsv2/?cnl=5,93886,75&cnltype=CLASS,EMPLOYEEB,ORGANIZE&etr=nklWT2MoqIiDHWg0G6+SeGwSVOVFfo0bO9skEFeHEhfRkCLc8BorTv7XYV6mWRFhE4DN0omcVrPfP3Y8a4C4Axd65iXlEs32A92XN9hCS5DMwv//jqKofQrnZHTIi4dZLtlXvEjXuRGLhiW0PnwPwNMVvuEjAIQjIkl2JXQHdKulgxkM3PXzpBVO7uYXyex9Kwyz/0sP1vw4WcBorngI4ehKyLxtb4DWjlEeSCJgWghwpauVQ8xDXSPzCw2DYF1FHSWAYgY+xxMImzOc8PzE9N0G71ecbMelP6iWw5gjOMcQDCL1Udaz9yD85cKnhc0cvy4bTJs8Si65GvzMR4Umby9LzJS5FcwHEdCj+orD/H8RplpsAJsU2532RflkoaGg6KdVFoQjI8HrOJ86Gl5RtdLOx+ozy1ZulP2Y1de+b5EfgWzBulliGB9M/uJAaaAdWC0WbMAFKRCp3IfmUs8BNk5qkGn9L8i3cMKxcc9CyVhPDnhPvxvtq3Slq6e6W3WM",
	"https://creditcard.cmbc.com.cn/wsv2/?cnl=5,1535085,75&cnltype=CLASS,EMPLOYEEB,ORGANIZE&etr=hEGhpYm96Os0DN+xXJwjm4dPGIcqH8wexVwkFZdvR4udW/Go8X7J5mn5KNDWzMtp8UjlgWNR25npprtWLH8ZRPnZZUDNLAB/SOLnYaPghdtb9AzHFNXnzgSWMHEOgGzapFwo0pJEniqYGSP+aD/hK/CN/cjGGZphUCORpa+4xSk4FI09nwzFfeQ8DNjv783/FyWq8ak2ABPXTueUWxFOk1eaFpjoo0t0Z4S3AqPiHMvR6UO+FlAq1JWGADCRi54lU2gmt3wexoHwlNxnvgpth2KPimBhR1SbhZB4t2fj6WyT/wVDPYHRyBVa/8PF3Hfx2OemUtRxOf6wv2LGTvpiz0Xg6zCbHRPt5uEmcVepS1i3/N/GDF+qN55if+ybxj0HoesaVSRig6uXlQ6LCv1BB505lTKlJKIGWmsLgjPPnRxjj2TsM0JaD7EmbbhuxBJAkxbmrYFTjREDBT5BJbKO1LWyd/pvUtY2Wo8Q/IzxSVj8+oBAOWXLGlFbM7OW6274",
	"https://creditcard.cmbc.com.cn/wsv2/?cnl=5,2125631,75&cnltype=CLASS,EMPLOYEEB,ORGANIZE&etr=ypIGd9WzJUMGexdWB5buMNxsCAdiKWeFn/1ymlil6QX/gPkac4i10ouzvgpoRk73xyAJyai2n/mWSk/WVWc3uEQhrndLQuUnzI9dHSpvPlHLoK4zNKSytHLKus3Du84FiLI/S9kAO7vVobqX1wpHfqGDZlUuLAZrkG1DjJgTE4oKxQHAbcmGEqsSF1AhyvG4JiRIPzN45PaEVoJbVnpSOUPWJO61RjwnvZkKPy0LEiFEW64nQLRkxYPWQnOtzJdWTMM89IVMg8bqu+/DxsgcdgchFGwsKFu+fE1D7u68VZ1N4VDHoqQ2uYiRV7Sv2HgEksy/RId/Tgw8/rkKAObgz7+ABOFB4R4tLdIxJ2EqcDkn0EprQxwDkt/44VA7hAJJy7VlH7jsJA6S0vhTkTGKGKySok+77mJoV3QzBeCCAKYNDThOGQJ485tx5mU2PhvbnYdZWJf8/UiKmyQiFbVr27pWopbS0P/2ytcDkQyyLL5bb1dSpDTkGHvoND2AWNAM&token=36wE-pJfuDTUYnsoHIMmrkzQvpG-3THM1lVtxh4iJ0-aZrOaDgbW5VNIHkPFlDuwfv9uUKIvDa7w_VHoA8DFFg",
	"https://creditcard.cmbc.com.cn/wsv2/?cnl=5,1959651,75&cnltype=CLASS,EMPLOYEEB,ORGANIZE&etr=JMUSFwRqrAIHV0c3CTeQyp5OFlgGocl+43JE5rhRtoGWb6zAIhWgbTXq4jcmAM4tPcgxzT1A3J1S5g/eoFLG9Xlzrp8nsSxWiA6avmecWOCKg8/vkn7PzvynqDgSBAXoscpeIjaogBQN5ybBsLZdHTDIGpeR+QbWDvYd+Tzb7V/Nwckv7S16mYrwTNAAzEXBDiotoEeBhp9nyezyVX8r4NAdPQJD4K0eeCZLTdB5mgIzcCPLW3doPXiqWkXeZfziyoqTrJ5FP93Jjf9Z7AE3YOcOLZJbpYfvHmnhyztrpUQli8KsKblNwy/bzuJ4pxiibRHAyCWvpMXv47oE/2dnLCo1o0tiIepEi1rQ/hh5TiSdSznKZjr5ffa2a70wov/Zy64Ws7Ecrd+9oYkWIiq8hQBBUCRwHmDEn2cQkCZCgvTK5g3sAeL6E8TLUkXHcSegW+AJSH+lC/Cu8H2Oc7pPNr86FIAQe7mLevvMJQbKUGaM3YXml7GQ/DX4yAkWgAwL",
	"https://creditcard.cmbc.com.cn/wsv2/?cnl=5,2145558,75&cnltype=CLASS,EMPLOYEEB,ORGANIZE&etr=IvSi5wdlp0C/0PVEJiFf3KTq/1BXGxx9iQe/TECQ01sMeNw3WX/Rts8rNUcirCqxjQ6GIRVHrqFjcxH4OO+aTo9j4IlRS//ye2tQXPRNV3J3Dp7Wgf6/K8N0PL+cApyY1r0vlYsMFaeIMeq5IXfL8BWrRWL4zYKGZ6y8cdqEDF1DQ6UqcMkNuPFiORgzz2Vld7ZlvpefHKzeOWxbv8XBSEl+016HgiAevX6z1UlkYx/DhXjF1baXLN5cDKueEak6ctJbCMUgo39H+ptXusQjLANpoz1+kXKhdLWB60XDJlLJ4tl4Lak+tiU8UoFS74mxXZGIq3pmbHBkWmiy+keicrTPufjf+Kdn+8dij0OHWCl0iELjLkWL7GfD1fUu0QneZaxhERAa04Y57my6YIKqF/vAAOGf6nOO4hLCgHwI80XiybZqqCaHem2KVui6OWNuTMReO6k0N+JDBWZG7PvPUmezoWbYIun4qmtURr8D1AvxkxaVDi9dOOJ8EOT5UOZz",
	"https://creditcard.cmbc.com.cn/wsv2/?cnl=5,84739,75&cnltype=CLASS,EMPLOYEEB,ORGANIZE&etr=hvbGqdHpJLlCupf/BBodstFGH5z3EkM9CijHvho2ES5l9P3lhzCm4hfkC8VCQIFOfT5XaVWhkcJzWaAfkOsq2mIpIn0K+49rT1whjw8HJgQMtzQnkVf+kW6/p6eGdAXa5B9HaD/auRVgUbDiT6IiXoJMxmQPfmVV8OAj7Da+oPIRJVyPa2DMiNfNSL9F40WrkLqQ9aZJnYlSqUoiwwoJUPwy6zGBKuUN/fyemAaB0UodOnArAQbazMlmaZu+6WyS/LlNsat7i9XKXDhdQutIadScPGMI8wBMSxL5Mq6MKhyua4X88WaD3e7HD6RCBP0xF7E7/dJ63sai6RoszC8gSB7s3ppfzCyEtDYEyIYltr8aFcpUuYMIaDdgjyerAo6LbD/1Xvo9NvEuzT0TQWLo+zKRRNdJ6yNvuVobUkXQnIhQRMI9VkPnLdmN/2PRZfs0G/WwJK0R3ibmmQY7j3N9EatQU0UvJU1rCBMz4SsyEG9Z+uaF6Av5wAcEEyF5MKiY",
	"https://creditcard.cmbc.com.cn/wsv2/?cnl=5,865107,75&cnltype=CLASS,EMPLOYEEB,ORGANIZE&etr=XkclXw2eJSijYwti14h0uP8SKeKwwoeKMo8kAQQ8b3IJMBfHh7K6u24qozIG0UO5S+h9Ac7Tu0zO6jMi36BNDIpiseT/pIZ1eeym1tro4Yd6ul2T/JT+eCPjMZmfG92+yxcfIRGU5TJyr1VnialnY26oplGFkHtxKe4N3g/cS8+Qt3WtaXw0fID4jTj/vFoguZz7gEWhiQ+N4b3QDPj76eTzabenOMWtjGm8AJNV/YtnRDbYv1DU+gAfyGCpNSTtRYQ7pu+TxJ1NmK4FzmQnHr2wale4pKCNkdiu36EHaQcvlcj3KzjQAjWO+6LOZVhfRwoneKl7Y8aLWKuIJTucG6qYU5Mfc0gaxJEnCxx+Hc0W5L5rEQ0F1dWeYWLoFjuo9LsWQaaKKLmYKwscFog/NIBBJ9VyDJI+tSr5X3hEsg4jHXojNHypnGvEJyKHbK7gITAQbqm/v7OltZfABq6zMmf7wdvQU6Oum8HnehZNWHnT8RzBy4QXKzk12fWu3dHX"
   ];
   maxLink = links.length - 1;
   num = random(0, maxLink);
   link = links[num];
   ctx.redirect(link);
 })

router.get('/rl2', async (ctx, next) => {
 ctx.body = 'koa2 string';
  // ctx.response.set('Location', 'https://wwww.baidu.com')
  var links = [
	"https://creditcard.cmbc.com.cn/wsv2/?cnl=5,1365302,75&cnltype=CLASS,EMPLOYEEB,ORGANIZE&etr=BSDG+W1n14B1x/4GNMGXxcYOUfWSJ3dkwMlxJ2/Aq+ivt7xk2Ok/2PBaklddd348dh20QnqPGHxxoQ4d9PT9ltvNJ7SKGAPrdQRlhULaLkf67K12C18PygSI0HxJajy7/Yhs2xtyjKszaSM+DUVYEkVsORFwEsRC3wbAwDHXtUOq3c46tdYQ88278BWb3S3e0F9ngEqXKr56Rgaoh2/TnweDmwGB+RRtUJnKkMe207ErjIke96pp7ym8NZVNZsPInMRUtmBvjd8QWHB3mFzPtQthvhiwgArNpamM0pLC3LndAShHny/OUM03upiHSJD9GRwzivaZ1LGSteP7otUStKbMhks/MyhiQD4EeyEvUaIZYTbIB+g2DMKYF8+25e5Q0eqKCSFLTj3i+6WNbhLuElLpAMnMu6ELl8ictyZVjuUK8Mctr22HaWu1LAeO6qilw0piBc0MKJ027V1cMBNqqCQv11d8SZnrYnYA/WOhJwbrq5fMQDl+3IB5CN9Dvwrq",
	"https://creditcard.cmbc.com.cn/wsv2/?cnl=5,1547792,75&cnltype=CLASS,EMPLOYEEB,ORGANIZE&etr=BSOu8ByyeKXgoO57gRlgSlFeeaZWT2yaFn9ol2+1qLTCYLtk2fTcCMEgLVuuUfDZHT95+q6G43uAajRYccFViBiCZMtcaf80WpmP3pg18WLwiynIXa01X/lNlVvie0p0QKsDHeiOEn+98Q6ogRia1x1voPkxPd3Zvv2vYRsQST296LgdtnLAzo9OH2z47eDInPL8KXsP9CI4bMOGnkxEXuEruTDdMUsq/hCrqansKyY9yM+d819PYK2/0/AgTR43l8J4WPCtqupjFrCDDmSaHa3C94V7K2nyjkSX8ZtS9vAvZf6jQJ2cMfWPxlVA4eDlrTUi4Thml+ehyRiV4XK0LJlV05iv+eW14lpIQxiR6S94O9iTs5DKqRmjZ1Hyn1/uDJ7yBEOsmndHHzWAEoUAGuL9czFwNqCA6asd1IP+Fr8PHTGmpZW25LbpwLRa+riEjsfrK7VLnQG8gRxcWH0MLY4rFhu3NHdagwUIn4yeNUaz3dADT6g1MkBqFX0MOIlY&token=ZIqcJB0fKz2Y6pKEUMS-bS4rWiDzPlJxGypYZp7TcFK8jlBCn04GZi0o7A9JnoyjmvSRyrIljDOLHM-u_H3_gw"
  ];
  maxLink = links.length - 1;
  num = random(0, maxLink);
  link = links[num];
  ctx.redirect(link);
})

router.get('/rl3', async (ctx, next) => {
 ctx.body = 'koa2 string';
  // ctx.response.set('Location', 'https://wwww.baidu.com')
  var links = [
	"https://creditcard.cmbc.com.cn/wsv2/?cnl=5,2161642,75&cnltype=CLASS,EMPLOYEEB,ORGANIZE&etr=a2SPGLL1YTShWpGWK4l75ndxnnmUcfGs1BXA25/G6Oin2DUWKBPtyCtcdNig1D7MUVgS9f8M4cdzIc60i7bWyNGSlM4e+en0r5i1XeAKoiWa6cfQfBpu7AjOkN+erO/d392tzLL/uJ/iNZIj+XG93lZiyWlVYhmsdRqwzl3UKt5IslYC7UVdOlFWpFJn/89ywY40A7kCwm8mDOZLjta2gaexqfQnRVLuPIWdse0frJkoHQU3FV8M+NH6K1DlxB3QzU8kkcX1R0XSFhkODaKNBS54Nnybip8s3O+HmONdQLIWAK29Lw2rr6SScD4C5VXmeiPztLKCto5cbZwZU9qlLXnHjOBoRoG5X7CekgdNfpg6yWbeyAImYpusG6eGG0js47E3g4TafsXzOC9LBGExYWE6MfEcjXLhWwtIOZi9BlgYcn7HOxZunkLnvQC12iB63Entx/Yy/GgRhpyAthidF0uSx25We+Rp4UjdaSG4ljOgXviSZP2LahB0nlWex8aL",
  ];
  maxLink = links.length - 1;
  num = random(0, maxLink);
  link = links[num];
  ctx.redirect(link);
})

router.get('/rl4', async (ctx, next) => {
 ctx.body = 'koa2 string';
  // ctx.response.set('Location', 'https://wwww.baidu.com')
  var links = [
	"https://creditcard.cmbc.com.cn/wsv2/step?cardId=6&encryptStr=Np6Qrx3a6LwwX%2BnHkIpJjQqbmz4jFEXrb7sTEytBxijwdkUEZUjZCb1%2F%2BbQW7AnwhN4lYs2%2Fb7RXpQUFO7AB91gQcAWzV%2FtnWpZlP0UJ%2BKMc3JT%2Bh5zPJ38ykhfDg0A1A2H0mDpO3yiBuVDU9WVqOUAbR6ZPLvWFCsl8NBBh%2F6FBAh6GSk6B12gOLr2alc130PMoRP%2Ba1u6ksG9UitO441C7Vs4ZvaF1Du9COnI46Z2BSgqFyypj%2FsGxI1bMXJgGnsnsBUElJ%2FieqW1V%2FsDd9zjShPVFumc76WzqvgatyPSNIsZy3uC9XCla0H4cVUvqwKPNSHkSM42CnD0fCSQKWlk5uEnLCe1JMN0n2xofsppIM3mvzsuHB3P%2FMiUEutTTV1Gz0ZGGIDSkFqQX5yDv5AdvxOMAIEGtgitgkoTJuhC9gszJD8pkUKuw8iA1eHCXxyObdyMLtMQEZQLVw5wEMC22tGyEr8%2Fjut%2ByFxozMa7nq21LIQO7nS%2FnVOouN36z&source=JZ-GG17#page=1",
	"https://creditcard.cmbc.com.cn/wsv2/step?cardId=6&encryptStr=sHjZGR6BNrUfXcvigdmHizeqk88Fpqzp8miLDbnVQ0ZHUZxlIj2Yf%2BFekSavw%2F7hLByrakWSjMu%2BmwBHSuhJdcevPKbj2YO5IrgyetZRcNH3WmRDNuDKLbJUYQmzScYB%2B6B4yWaMQUUt2SR9xNGz6a%2FQEdZGCCuyFaX9nyrOSCg9od4%2FAzDHJl1kLQN701TMkHGCPVSV0v%2B6et%2ByDTFAnoExLn71IdZ0RedKr2FLDxa8p0b%2FR0QydZ%2FFuU8fqJY%2F54D1Q3sZqzvJ30i4cYSzBA14oaYtyx6IKoMoDD20YX6BV6Pdyq6CnM9z%2BcsMDlnGenFe6pNHXz7Yp0KbdiO3lB2FauXJ58%2BcNSGr5ZHTP0mt%2B11MiHIIoCba31H55OXe91ASvdyGKht8penBCRAwChwMDYNGQRGGdgnFa2vxcZ%2FgiGvQOOiue5Wn4aA1kBTh8FkMpZ2apSjg2mf%2BMP8fQXNkmacXZA6%2BQCi%2BttaTcHQN86Rudf6XWU9r2qrUWPAx&source=JZ-GG17#page=1",
	"https://creditcard.cmbc.com.cn/wsv2/step?cardId=6&encryptStr=FKU99kIiGoseKYI8dD7am%2Bp2jw0YDs0%2BRmGKi%2BN01GUgMckwfQd5uuHa5Pu8Ir96Qpg3%2FCdcPL5z6pLY2XIv8JFLFIExGPKp%2B8t8a72T0tRtuKo%2BViNOiQwOB644%2FA0U9AgSIgCvB71W6OEt0qt86D5%2FxS1AcjUqbMkOonjrJVGsw9xsP91wwopZGnBPQB2GagdO6AH%2BQ4opacAQ9n0D08d52%2FyZjLjMGljBQO9%2FM8aoG51jZLdk%2Fx8O6nIxLf3i9XcJofbYRAXQViePa8EhScuVSFVj%2FaN0QwcvwfLVwjKSqY7rt32gS4bD5ruAP%2Bcim2ZP2%2F2CrEzqN%2Bc%2BNzo0VqKMhmGi2y%2BKyX3vuUsKxzKPlPw1UqvC9ar%2BpCj%2BUnGQlDTY46esBrN%2FiVHV85cWol7QmYq9y7eFbxnm%2Fr6YfOtPd24KN6wbrTK0ojnTpUK3Jg9O52eJWY672UyOILNuzSQQ4W6SYmCLdn%2BKk2z4BYRcznDUztgpMVo8r6pH8Vu%2F&source=JZ-GG17#page=1"
  ];
  maxLink = links.length - 1;
  num = random(0, maxLink);
  link = links[num];
  ctx.redirect(link);
})

router.get('/rl5', async (ctx, next) => {
 ctx.body = 'koa2 string';
  // ctx.response.set('Location', 'https://wwww.baidu.com')
  var links = [
	"https://creditcard.cmbc.com.cn/wsv2/step?cardId=6&encryptStr=vlhCRxAjL5Z4pdSCXJcgRqkpnEeIB0pWNGccP8dJU%2FNUGaGUDUnopewvlCAGRfurpolAq%2FcBLBmVoFXkO2ikAcztCbL9HYOW%2F28M1RCNSom3BF8BrdsHyJX6S%2BZl4%2BegQTCHNXiwkp74qybz5ptZM9bnJ7wpbqb%2FcGZy633KPGg6QR2extjPKV7bKeTqUIQYd%2BKz8HNc5Lsjx9PgLIjsL4ipeFuIvYXGjl7svhnCpR8xlrrWvVKAGrbCHuMl7ai7S2Sj7uTnlnuamm9OFmNU7y2B%2F6wnSGeVG%2F%2FwLWLWF03TJbZjSbWkriXp3PvyNuCs3gJwMMHB72zEVJ9ZTY9wzxDDZ3u6SrsUS%2Bj%2BWAFLbNkcbs8VJzb%2Bap6Ot9U5hrV5989QrPT%2BwUUcp1f%2BBnm3loiNZX7Qrds9UD0pUTCxMEIPIEFlFj%2F1bkgzE%2FYysDEfDShWx2%2FnqXiuzhDq9uPqlor5hHZ4HK6piC6%2FPZyrbv%2BaS4n7%2FZAKUEktj4TCfEMf&source=JZ-GG17",
	"https://creditcard.cmbc.com.cn/wsv2/step?cardId=6&encryptStr=r%2FX8xWsKI%2F%2F5wbJRIcgFykZcXWjV9M0oxMpmRSB3FZHKJPDMKXnnCUAjWxIG1bUEykkogB0jVumWjJLaIAl%2BtMR%2FTOUAHfXvoLC6LjNcyc5nie%2BcPPXCf4sYMGLCzV%2BzzvWTAQC7j3xMQmQfWIIx8d7JoJBoZy5IQc6fJzE7BiUO2SUNScr0%2F7VMiC2BxjN49peAikwrRte82ym%2B9eKvgvcOESofrS2XO7nwLgBubUCPQ5lWV2RV2Vbe77rajojal4oHBCCe3Lu%2FPU%2FWaPZzLADNiNaIYvJk60zAXC31QctMv0%2FiOeAI83rt%2Bgr%2B%2F654YSZ%2FugPo9qeZLDgMu7Hrt0LpurK6r7%2BizMJYYwL6mErcs4WPMmUelHZJiU4QNudo0mgLKUCDXGXco66o6CHEZCgbUSKXtvTx9%2BotLO7JpGw4KzLcSKdsUN4UNQKS4JDQ16FlYmkV0rMZMbbJVz6lRbFj3gUeqlC2XoMhPghY%2Bmg%2F6yi3jkSm%2F86%2BHBIOG9Fj&source=JZ-GG17",
	"https://creditcard.cmbc.com.cn/wsv2/step?cardId=6&encryptStr=sUnrkQBulFOYsser1jk3VATQy%2BfeBaqDqtBoRohsX9qE6ZLbUVZGFHv%2BKAUqy3tVUNM8ClMpuI07Qaq47HTBm5ON85txM9%2Fck43MLQedT%2BuIkEIG%2BiJDq%2FyblbWMVwQXXKDYSi8xDx5bDwykTyMPrLjX2QCPVUN%2B4G4Dbh0oV8OT6RGIS81YCKA3EviLT2g6OI4%2BuJ3iVD8BQNeIsmoYjsA7IVvyO%2FZr3WVGOAdJDCH9EhjSW5tjG1ihuQUXPEH8%2Bz4zCTuBAavq5%2BYmh%2B%2FYTL8FPDX1UZwOpBZnuVQDGPsaUpuJM5x%2B%2FHHTlwplLLRqXPPsnATVJ%2BUOvV6SA819TzvwametRS4Yp2I9WVELHs5ot8jFUp0sxrYa47eR0HyAWCtdxjOk9r9RPZMtITMWPBoW%2FrFfdU8Bh429tR3xF4zHp3WdgUIJ1NU%2BQ7X0y4iqpgrAFYonitdUx46fmF6i32zCE65yCbFvIunop6vzTcwv3VrPFgfsIkJgCSxS0tz%2F&source=JZ-GG17"
  ];
  maxLink = links.length - 1;
  num = random(0, maxLink);
  link = links[num];
  ctx.redirect(link);
})

router.get('/rl6', async (ctx, next) => {
 ctx.body = 'koa2 string';
  // ctx.response.set('Location', 'https://wwww.baidu.com')
  var links = [
	"https://creditcard.cmbc.com.cn/wsv2/step?cardId=6&encryptStr=SUjYUndiORF43ifGUs61NERt02Bmr72bdF5KMTC7ep%2FDzrn1oHAwOecDwZkbe2hSbe981wnLBcYA0pBWioh1qXPPVPevmeJMXeXF%2FIpOz%2FnYFnBDb2hLV5QdMvOxKHQEZQMukssssmZ9zlBp3D1fqMoh%2B2MV4TyUztjsd0xiw2U572gIletDDw4u2kFEMhA1V0UindpY1HOjNjjYKXrM9th7uiAMjHr8qn%2FNW0s2R%2F5fEGpyCMZhNz4hyTeBFFAsO3ZW1N9wSIXD%2BNVTsO1Yhh9ecM7sBIewgCorrbTSXPLLScKUrB%2FyymoYQcz1%2BDmNucwCHPx08lK7R8YgK%2Baomj0O1u0dy53QddxiUSYWjMlpsO62i%2FZfrE8Mwj1zSZGsFe6BN2jgAcU%2BWy5IKxpYRUnRCbJGs4xHagvgf9YnY2JQoYA0crxBZXYddIza6EM7H8Mm896Rc6YBjT01gQ8q6CyW3Tf8yea9VOr%2BcCqJIU7%2BZe3FTOTu15VqREJT0yyc&source=JZ-GG17",
	"https://creditcard.cmbc.com.cn/wsv2/step?cardId=6&encryptStr=gY6uu8IVHw1hDQOFVEHvImweNl3gq%2BUGSK3%2FsMjn%2FjXcfgIdr%2BMLX5AO2i8sHaz1Fn3vomUJk9Dr0HoD%2F1l1hY0NCYc9st3cwyXw8RfCsqAOqf%2BSZ2aDOlt5ZR5DhmKBRLNODza1LOnLjio0ik1LBBQiFRPfWlmP0tsaXLnO7PBuU5upO%2Bf%2FCx2yM%2B01Mz6fW2lOw%2FJFSTLYPo4tyS5WkgQb579hzMhKs6%2BxfVnVJOXO3UWUKsme1qKNfCy2utn5H2OlGaur5koSdM5pKLByVInv83q%2F1SFln%2Fdtda2K%2Bif9jfh%2B2pGMiwWhEdEn%2BoKgNDt7%2FS49QuhSNiNSbvMYjrJi72y27M6oOnbvIOXh2LzrcEAOdhw4OefQDtNTm8%2Bysx8wljxwbpdpvXmlK2%2F4Rj37EXvRT2JXq1TnABCBL3qbNbfyv4EzZFGknTAr08C9EBHubx1W1yr9OIn%2BYPv8ar4Fr2nvu1ZzxDy12lcQ%2F0qOowxEjaimru9tMTPPtYu&source=JZ-GG17"
  ];
  maxLink = links.length - 1;
  num = random(0, maxLink);
  link = links[num];
  ctx.redirect(link);
})

router.get('/rl7', async (ctx, next) => {
 ctx.body = 'koa2 string';
  // ctx.response.set('Location', 'https://wwww.baidu.com')
  var links = [
	"https://creditcard.cmbc.com.cn/wsv2/step?cardId=6&encryptStr=FSkC0HvZS8AaWdKw71l7kNbNw7k8YydlKtFFsup52fL7CEKIMSfWAN7BZe2TWPvSw97WicBGvtwguY0j%2FWp%2F762HFYozUEsYoWj1VITte6eOdQiRgic78OCkqBYqrePXWazdRG0NW0SEMAz3g%2FAJElcSf8%2FNO9XQTFhQCBZhiPmTwabHzvGZVfcaM7TizKbZ89LRMpNGOIXj52DXjpv79bsObU9WLVKeACG5ffppxN5gFaHdjEGzeZJmzPzeTE9d5nEZe1Gv%2B7Jh0%2FeMGNuAqHY5azu3OmaMI%2BHbBOX7PSNbPo61o4gfzoRq5bnp0ADjgRfq5fW64lBCdpfFx%2FOkkGMJizacpLFW7%2FHeibTQEWYE8T%2FtGD%2FazOUUnI09UFeagGtGYQ7KXrGIvCBP71owX5eRwxrRpqbYNrfJoscIGpjx565%2Bv3Hwl%2FtdMGXtuwnoNu%2FfTHBAjvw1RyEejJuSgd%2BmXPrYQsyX2WNYp8tseCxgtTX8RCLjRHkgA%2B0ln2l9&source=JZ-GG17&from=singlemessage&isappinstalled=0",
	"https://creditcard.cmbc.com.cn/wsv2/step?cardId=6&encryptStr=F3KOflpV9gMsoVPxgVBi95Nu1E3DQFJZdJ%2FA6i1JqFhDfZL9zcjXYH8ygavaXt%2FsrZACqmVIkKfeNQujkE7DRpR3cdJT%2F3%2Bmtd%2B0KWxt2uAwIRaFplkIfaxs0qb%2FiPJid8t%2FgYclhtBYmjjppQhUi3VHerpvvec4fAnSKZYVANJf7yf0eDPvykcBJ7LbES%2FTMlQU1RCYK%2BmxJr1rft3VGNicY90WZkzjhszM%2BLC6rev1PJ6c%2F6czQTJTzRRFpwaafz0V7r%2BFUSzYvb01Dt4UeHIWe8mGSsMiLtATEPTgDjRpbnxscqknr%2B2t3f8j3Y37eyWmNRIPOP4RnxoVLQ4btZHUEaUdgl3xTUIOK6r0wdoPnlDY3OLtx9dCFbQKY8aWRwIG60zKxvuC84sRk44CwLcj3xlJMy%2BAG1QGQ5rY%2FTxdNTCSTlCYzlbdtoYTwpBHVxZhMBmXVzQlsYQZjtTNhunes2eeD540eof1EzLsk0O99uAAAnX7mSNFBiaTyKcm&source=JZ-GG17"
  ];
  maxLink = links.length - 1;
  num = random(0, maxLink);
  link = links[num];
  ctx.redirect(link);
})

router.get('/rl8', async (ctx, next) => {
 ctx.body = 'koa2 string';
  // ctx.response.set('Location', 'https://wwww.baidu.com')
  var links = [
	"https://creditcard.cmbc.com.cn/wsv2/step?cardId=213&encryptStr=vuFxZTjPEYfnbeMwdE%2FMCMBAe42WUtbMkpjV261X81F%2FgccSofiOkT7H8yMN7jMUxRgxZf2gu%2BPH66acy8UPSpnLhEF3k71QfvAM6ABpldsiJtqKwlfI0GV8YiDWoF6ma3QbP%2Bw1i6En%2FTExShDNCzSVQuufriDsGdIafgN%2BsRJTIh%2B5jFXUqVU8%2BGOjHxTMROVqIHp%2F0GdCLvhhvLBx78tzTtQwWtj18gHGLsqv53N8SXChpaIqufVMb3oSOkr%2BtdEItzsQ6gXxPIU0WNp%2B5hWWvdBkFT%2Fo9IXBMBj6qS0rUlKKExWWE%2BaOv%2FWaoxahbG1SV3YL%2F17JN2R5CzqZqVcoo9DGDT4uRwhx3PwsdgIgxB%2BT8m0LYAZ1%2FcFEyf7ETeZacDIKywEQ9MhQMS67H53uDWUKdZYRKksw4GuFBUoC1c203f5tDa5x%2FG35rGIwv1cvFytIrljN1jNKv59UgqShENMA0DC9ZK%2BIKM%2F7cqDkKKV9F%2F3Jxk4Gz5fHduH2&source=JZ-GG17#page=1"
  ];
  maxLink = links.length - 1;
  num = random(0, maxLink);
  link = links[num];
  ctx.redirect(link);
})

module.exports = router
