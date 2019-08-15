const router = require('koa-router')()

function random(lower, upper) {
	return Math.floor(Math.random() * (upper - lower+1)) + lower;
}  

router.get('/', async (ctx, next) => {
 ctx.body = 'koa2 string';
  // ctx.response.set('Location', 'https://wwww.baidu.com')
  var links = ["https://creditcard.cmbc.com.cn/wsv2/step?cardId=137&encryptStr=QrRhtJcO%2FvW7f%2BwGr6nqPLfyg8VuN%2B1k4N2nWH5ij5ab8up6xKPys0i%2B5yYlXsdW8tyQV7CQJ016CwzrLTbedF%2Bl2YLpBLdIhMRpul4j%2BE3D4kkpKjahOJ9QNjc4mdWLnC%2Fo2wQBDBZcYjywDFARTGz7aigzBbzqgWDtUEeMcoOjN1YDzsB7vQCd2J9vKZZXCMtLsJ7zkfKp4RO05Iyg5HTGBFnsV%2BLFi1gurbnhJcmWRsYTBhDSVtF72vWT67XZ6iRtO20PPVEPsXGTugpuWEUK2d1Ad0pJRS8Xyk8W1x2jAce1QxVWEamCR1zMvEfl2AdNQrnO4j9H4kzS6ilXunN9OXYtllfsq5zjcUsaC5TsVhRXVotwhGfBooRiZLt1kK76YfEJFBsUIJBuoEWTwKq96MlZxk9MgkYYDMHFQb1zIYWl3L5PRjegba3%2FFdInVREuGe9qySxc%2BQCgDmgaZ%2FcawSUv3JHo8B0N6NrhIIQiNPUmLQa%2FPSNoHftnM6RU&source=JZ-GG17",
  "https://creditcard.cmbc.com.cn/wsv2/step?cardId=137&encryptStr=G3fxTFpAnSGTZrtTz%2BaRUT%2Bqh1ALtkSla0OyInAEpjbAJBgjrhUuxBPYIicri0eUE8qrfxDDZsO98HEHy9bBtZHzeMSUEz4udRurxwFHhs1%2Bu3zhpzw979XI1rRSAYX28ZGYhi7PzfUbprBtw2O657%2BGl2ny%2F66nAmW7VRg4Hr1Wdsex6fkjlrF4act%2BH17HcYMl18O7Gkd3ZG4SE5Nhdr1rgUQBbuaW4Ooyo8PXrqmBgSLGZpdsebe384822WJQwn2MEkGus%2B1541jFsNWDNaKRtX%2B%2Bu9ZMdecJ6l85ElTsUy%2F6cFAd8PXW4CoBFKjk%2FBTKNxd7ToSutA5B3h47fgcTc%2BfyKyIlOPBXnXfhGjrOJVSX6osPPS1uYs%2B%2Fl6raR%2Fp7Y2JjF7nGin983mIQbdX8fApzYJSPv%2F5PHjXhb5bxkc5t9T9MPVeETik%2Fs6Lh%2BUlaOs8SxQ54VPKnBNzcnhEk%2FACV6e6crjMzEfClTOLiVA2xWWiGKDY5Mrzb%2FCqc&source=JZ-GG17",
  "https://creditcard.cmbc.com.cn/wsv2/step?cardId=137&encryptStr=WgY8LD9Sqer1wsBNHnSTyyozL6u9MjsrE5tpmz9gjbQhmTABLwysF%2BMIKHTWI835Rr0kVpeVxyENt0fQEWq%2BPUW7aPLgLtINDs5Vwl51wL98vzbEEFLypRk1xyyaw1gYRrDR187XNephYLcQtWWwuqctwf9WIQsYxdpvnnLUMDmaPfPkBeTNFOsWf3%2B7tPYIMnv5ajy1pKSL%2BS%2F%2FGPyY45W5IOxp8MutPVJXh1n77xv%2FhFFDNM%2BIVmHdUL7Jxgh5FN4Cglq2QIFvnEvbj0xqARTv6B2SInY9lixUR2NZQDsJX%2ByTL1hvuScPVGM8CKDXTrfO2JkHZLTKqYpuVi2DMrIcObOIeDKEueQBYE6Q9cE0ViFPW5CeJ5ja3rdBA%2BvglSa%2Fbae1tSKcx%2FYB8K5GQszCEn8cUf0bMNS5o1xJqUURvYIrNHSuAPa4SjnAvaY2AzduoefEFF6xZzN82KjdJRSu8A2%2FYuUwd%2F2oqyxKJ2W7IoWYABjFnZArSoCBgJwo&source=JZ-GG17",
  "https://creditcard.cmbc.com.cn/wsv2/step?cardId=137&encryptStr=h%2FSGtHpNnopiCOePcOA%2BUE9b08d4ObBkxJafKGPsK04Q4J6LRZbQaAeCY4M7%2F73Izww9YPUtgP%2FCzkdFysL0rbuVrIUp45MM5BNf6fczy2l6M%2FoNxtQ8XtoGWp0JmmhdMQlPnSKsjrQotBgm0E%2BC%2BX4aZtXonrCnmAsmDZ7QF4C4kdxW%2B%2FnEAgoHnEx9rVNSufRITPuMgqntJ8Eup38NlNDdd8Ct6HSFkR%2B1aorpRTi8BzI94cVGiAJNbLhOs6%2B8SFGbY%2BwWKUFD%2Fmv83zPK6Ndllrmopm8bNFWiT3TsAcRQvRpZX0rSUuUsG2JGbs7EM1BnMOSvBeHng2uYouAK3Arv7qII90fJI2QBcTvit8UrE02mmvxlQkFB79aCg1C5y494maaJ3QrgBz4W7oglisejMfI6BO8LlLx8xNW2tLW4VCz13BZlyH%2FzZsnpCG9%2BkVy0J2BiPaQAhL0tzs7zKGXBhPMd8BUMvEMx7Omp1NEuwqOV2jVBeQ74Ta7mMiBm&source=JZ-GG17",
  "https://creditcard.cmbc.com.cn/wsv2/step?cardId=137&encryptStr=LNMt44hyk569uqRxPeGiUrVF2n54hKvdvHxcLmpajfrQ38mbrAqozu7wfeaM0k%2F0PsMswlM5BQkCXGU%2FSBIe%2Fs0EvlzcxJn3WXZVb6zKaurzd2v1p6N4nNLwL6l5hRYO4viTeHmYMwVj3XFXTvfJOPcbaR4EH1tguXJTdC5l6x%2BHvmitYzrJ0K9W7IDexODslbx5BQIH3tk5O1DQ7IQJG1Pi51BQYBXMSJyoJAy8HPPpXFxETV9nPagtyFlCI%2Bh%2BKAhSAFjRm2ibYNhT%2B6328SdVTbLG11JRkCcNFTdp%2B8J4K4UOWSQAhU9186JJ2FpJ0PnBKu3JejD0R%2BXC76dAik2nd1rnnJVp6h0oNmMun1xkYMvVCHxZ4%2FHcfI3crUa97YwKGsiD22EN2A5c1TwZKqv2O3rimKmQYQGAMPa6Yp78GZFDkdyrP7egB%2BI%2BPFvO5xY4Tk7UkJ9Za7bNN%2FHp28%2Fd0X9Z%2BUUs3zBjVtPPMe8KpCGAA95%2FUGkLePAc0899&source=JZ-GG17",
  "https://creditcard.cmbc.com.cn/wsv2/step?cardId=137&encryptStr=FD8xBcaA3Ph5yOFAqoNL%2BeHByh8sdzdvaz7zHTO3DetEQrcjzsvCNnX9Ch7IEN2A5FWu1ceUnLOzdP67EyNTrCwhmswaIsm4d8%2FbNln%2BDIleFbxXtYZcoJ2kJfcgmKpTwqvD0Wmf93DLhA3A%2FvLSX4%2FZela5jNslnUXZyia5vPp54ZjfCcMGOBE3CmAI%2BfVDmHDgIV0qUwSu%2FWjyFNSPwlCbxCn5kh1AhcD6vYEtluT0%2BuI2g93ri5XlJ3LA9MmPA7z2UUl1CfIrnWNy1o2sGNDT5Ic23%2FMRJ022ocy2GsWclfrWbF11u5Rn3X9gjDoAba20AIrdpppLIBd8kseUnMTst0GSrGu831%2FfeRV76q7bOe8KBERBBtINWGjewfml3IXnA5vgT4oyeYSzD8sjqmsIjPWXMLEXD2K7AeXzzCzn0KPzcoFt%2B3FxLlXTh9ndl1wx2YvNMFnJDz86%2FoPnKj6fNYuHK7pGceGKQgkwlZsAyNbLe1jsbg%2BYOEgNYKYo&source=JZ-GG17",
  "https://creditcard.cmbc.com.cn/wsv2/step?cardId=137&encryptStr=GFZshfgmgJEuBEziMihu6Ucji896R8ygIbIiHA%2BhD%2F0Rcu8JRnsgX%2BjfDbJllANoLy8gIjfAMrsCU8qdcSyesogKGjIbyVrAhJ3e4Pey23yRIlGfhCwv0nyVYMlHlJHlpygNgI9RQR%2F0bpicQFBkD3YuVFWyj7CTw2mpfg%2Fuc66mi914J0DJDcKsl1tg73lz3c%2BhsSW9NuigU%2BNkQu8KM6GbD96dGy%2F%2BVLxJlVGCyHLbLASsfaYAOctuajEUoi%2BJtW14De17eCedTh0XKdBmglDReHJJE6SlaJmNfGc8Pe%2BnTEAyMmGUGAlcMLaWEPKx1sMN0%2Fs%2FaZJV3%2BDQOkbjHEokQ12zyRQoYhzOabPWTJYI4AclZa5jEwO7B3PwPTFkn5BY1OjQiZLoj5tlf71iBslYVh3Q2y36Fw7BQpa7lCpv1h2dwvPLmODy159ikeYPl642w1rgj%2BiF4zFATJcMTMSkbCrCnYsLv%2BDJAakUIZEDPURg4Yr%2F2BZQVxedu%2FT6&source=JZ-GG17",
  "https://creditcard.cmbc.com.cn/wsv2/step?cardId=137&encryptStr=SE%2FSwmMnWxCl2VTpmt7symv7tUC9sx5d5ipGZ8AEF1%2F%2Fu4mIFCEMGUmbYq97DFgI7KfwOcJGJUF2jf6SIFOXJUHKDIGJkqKit0MMD%2BEG1hwdLhiBanSXH2KmlkYnylZ2IDd7IeJQQpPwu%2F8TepjIi2J%2BjCZ8gibae%2F9Mnb%2BkLzOEbBpYbwY7PgWF9fL%2BVbfWNsK5ne2k4sBtzynlle2qErD1LgtOT1EVuBaECyp2qsjTP3Y7PepqmSLxG4wqXQAyAEP6ZESYuwXG%2F167v2uslLDHglq6L9%2BycANPgC%2FYesIIDDfodZRVkKU1ftKB%2BwuE2%2FIP53J7kaaPB2txx7877I3MAMAmbqnqcuZrMPehSsplCLFIDVmWU%2FQ25dspb%2FbILuf5qUJy9KrIStZzF2Mtm5pn706fNjcrX1P5CEqnXC%2F62gRZE8Px%2BPZNOBXesmdzKNhnimLHbPhJ%2BHnIlaBLKowDvdn7eZ%2BUXVr2q%2FKBcwdYHkxiWCh%2Bia2UtCoIJtx0&source=JZ-GG17",
  "https://creditcard.cmbc.com.cn/wsv2/step?cardId=137&encryptStr=L6o6vT1UMG%2F4y%2BMISn2N2LbTow0Jfr28fhs5yuBw2GOKxVR24D8oNq0Q4bNvXGEvGL%2F1AiDf4zHVysL8ERRoEW%2BfhlwWuB7dLDi4FQNRgjyAF2tKAnyBF86DuTfoGbYt7dDq3glS7TOFlMIjFWyZEl8uTH6RGHzQCgd1VQOY3%2F3LXOW2TELLzb%2Fp2bHvpgzTZVgqOo36ukfI%2FFVWSu8AsnDV0r2kyZEqCM5vNdv6MdkWOGgn1wra3Q7kfuzYAX5FyVAXLbMSleWlw8JJy7i1nXJnQ0u96UxapHUdYLGREYp8quRLiaBT9gdgOWvqPmmnnKyXfmVqcrNeGWKiAyBOSb7O78zDav9y%2FcU5fab5IJCspLstdtXtiE7vlacHZqmYo1hfKIKhzEz5%2FjODHlJfXHNSaTF9wotqp3c1f9lYFMTItsGLaR7iUwbKZ6U%2FdCwGWPTn%2B3XQiuix8IpCj3yilMr7Y2YnXnZO0EicyfYmYb5BRUX%2FrQ20JtO9m1ZMS6zw&source=JZ-GG17",
  "https://creditcard.cmbc.com.cn/wsv2/step?cardId=137&encryptStr=eD3usSfeoWcyazGKP%2FSRzOQ2fEOnIcaG3CeJNsxyPwVN5MDV6U%2B9yuyofAz55193kq88mHagqYO9%2BbEJWBxgAgS7F2wg8D9e7CwYZhkDL%2BQqmEb3sGs5MTXHVQYfafQ37NhnOG%2F2Ochf6ZJR%2FAsTwcTloGE92sxGsqbc%2FfDuri04wEIFZ7x8wRj9jSVkGqOGx2kQ28gTpa%2FQSzrcdG6rmiWQuzyM%2FcoXcsD52ZeKpQM0odbPOHvQdKBdDzIuHS0zM8o1hxUyTvQjskxYApWUny4wAgzvKKIp0nMQXF9sqdccwJ4wy4z6KLH9DmRvEAaA%2BXLo5ZC63x9uRt54t5z7gzYZr7hOaz1OEEnPAIntr%2BqVsc4VLwtNWjYUpXhMgs0a3M46D%2FA%2BkpSEt8ppvPVeQCbpikUwDh4u7ebQVvYvHD%2FlElebMiLFW5JA7jf%2FcEJDBwvB%2B02CEMOqbHMffq%2BlMBQCZvuu%2FmU%2FrjJcs%2BfqBc0Hg%2FxUaaf%2BkaA2EhDTBRMs&source=JZ-GG17",
  "https://creditcard.cmbc.com.cn/wsv2/step?cardId=137&encryptStr=K4dW6g%2FBa8rHoWMmSxXPtCfgZl80%2Bj4Zz%2Ftl1ypdtuCCluS18sY%2By599suwylEcQwyeYd1wViMI%2FcrzeCqGEl3ufClNO5VbnsJ7dqgkQT%2BRT7mtksFYr4neHKeBN%2F6svXgb9a2HVEnzIJ7PiAVNJOCACQW0NdA%2BmfAS4t1yu1ffIA7leML7nsj3l9epQ%2FX7ntyh2Ktd%2B56CS2sRlxAKQTG1oTnieNTI6FG%2FmCx%2Fj%2Bo5dN%2FXeT5UmZfBti3FYoorFZMEHAWWHhmDRjGSpdGJ9nsH%2BTaA9PFaDQ4f3%2FmO8DIJgE9AJsoQ%2BdwqBN4PxEsXPslvCRhaX25eGU26EZvu2r0H2Cl1ZFl612zGKLmpz%2FpCvLJ9%2BbDg3Yj%2BPFJe2TGwNKBusss02XZXS97KeFXWsbWAu%2BmDCPQjBvlnkCwzRIgzolS9nRja2jXY5SAuB7nuo87OQnHKeSDnH59USkdKCmHlAFUQlSKOkRusL5X6EynzCikZlsYLQiNMHshpjwdO2&source=JZ-GG17",
  "https://creditcard.cmbc.com.cn/wsv2/step?cardId=137&encryptStr=t5lazAxfi4xdcTCgyy2tpZJ%2BXCAtsbXZbTgl%2BCvCo0a%2FcLHLLjktQKzR5zKLSYHMT0t%2BXAaKXXwERSQjdaFQB9tmObdzXaZFK%2BSoDl0vK8krgDJ85keojqtgkrivHxxpgn4uUbCEf75CXv2wzhNbmt3NnUkJgmnTgJWHoj9uoM6eAmLnjZ52D2gsTj17btjvmpHaoyck%2FJigVgeBsEjcEEMYODkITCa2%2BIjeOj88elyyY3OkUxj9Ybc6cGYqFjKLNlr4fMLsxAy7pnKGhA7dV8wL8syQcTdgJ%2FlglYx1dYi1GtfQCABr%2FXfsWCYsR1WCaDUkkrPSoOEn6cm%2Bdm5MecE%2BVcVYo2pSW3kg%2BIMTnhqHDovw9C2cB70kDBiBkuTFBLNCmTZwuKj3JfIuvEiy2jI5Mf2nuWQ3oTNpYQvls4%2BuLb37TZXs2f8wsC%2Bakza%2ByVLbf5L0Ah4Yo9DaAiKsZ2oONutgNPK2wuKqR%2BaoMfGn%2FIVJRvabyShwl25UkyRR&source=JZ-GG17",
  "https://creditcard.cmbc.com.cn/wsv2/step?cardId=137&encryptStr=ObKhl1IlCa%2FZZBhF%2Fw5KWwhmgEUadH4d16LBdl7lo017bssd9a83o9Z%2FN3lihi%2F%2Fif9zqMqqRQE6ZDF%2BYNxTBURxJCIgVh0qnABH5DD5m64G33uyoe6Q9RuGMojzGLZytmtSibw%2FwXweY6J6GpIBH68jquMsy6uexIF82aw95MVa2Ld8CYqxOdqF0vcSQKtHbpYJu8pAMYgHdk2vohnKsbODdhraxh%2Fhtf6%2Fdjboba%2FIF2YdTIUFQ3GUCwDi%2F8tlIZ5F9hxmeUDgatYGDLVgnDVb3R41zodfrG7LNxbQ%2B8p0DVIQlizy3tXz7htvzGbrGSFxNWxGJMaso9IAdCI4Xslhf7%2BbppycTcgx6Ap0%2FOQFedRC6Fb6kWsiPNnP3X9WUGBvOx0lxrQpcykFqQR3EUyrD0oqYU6TbFXSKJ1OKNnkszXXXsX5THhQhWE8Gs0HxAQ8cSPbOHhGBsQUp8ToEizREOEloWW2Ea%2F3x843fONjnfnU%2B6rCwzEACJ%2FY1lhm&source=JZ-GG17",
  "https://creditcard.cmbc.com.cn/wsv2/step?cardId=137&encryptStr=gkcxJCUkKf%2F8vKz7DSZ5hePndlmeCud8mr4JNrkzec9cE56sjRqmQVaT7xjS1ArM5DZna57GfzZOsnfIbw56H%2FJhJ%2BZmLnBssNWiLaTG8T5Z5UhmF96BzUVcx0uX%2FfYlyIl%2BzITd3gsDZMefTPfVnL8wiXLp0DQ3JdehDM5k3SnLWv2JheJCg94HKnjkV5fBE29XGsrnUeFwNYc2YvGtMB4HMBcDFsnJCQ56sC0JjPUHIPpOwLyTZ33LhJmIaT75uscd77No4s%2BfbAGPmVYUf%2FE1mBmakMCHQTzv1YWIwQVNEoI%2BVPW7PXiv%2B33RI7zeiPhlbwKZg7%2BWg%2FIR%2F%2FFvVRHOpn5KyTR%2B8msfZRwF32XkYCZIhJFXtnuTB4TW%2BON9XUNnJ1qeXXKSfTMPBd1HgCXRCgsfNTl69P5N%2FumvPC92xmNTPL0OjOAM7JSdaDSl7493gwisnNwkgDYrslzoVkL%2B0kqC7Fm2YM5dUnYR00zCKYXlkX0i5V96k6MsJ6n0&source=JZ-GG17",
  "https://creditcard.cmbc.com.cn/wsv2/step?cardId=137&encryptStr=pCmE7zhdivDU5DB5KkcYmr2SADrpjbQ1MoOMptkguTWfi0GLBKw1Yt1SU66AV5ntbkPmesOHrS8DtRb%2Fh2Tr4scjEnscbBLZ8OC4Fk7VkcMg86burgBc7QLApkmRfWPOvfBQqvFzKCp2E%2Flgyed60tItamf%2FAMYTUOKSAEJ3FLxsPrbhVq6%2Feia2Jr4GbQ%2BS9BnE1JiInLNugIdXLS3iRkLuXtDCmJegeo1JfYPOkwiJBMzHcFgF70jYiP9YetIBVVYVA5ADSFHVDUthsgpshsAeBVexl5kCIogE8HDyvSGyI1KAE4Zd%2B6bGeBp7N6flsONA49BPUOVXJHBHCyfII4l7O%2FidXHv0KNSIFkShlKzQtdUgPSgV4dhjV0kuXioLYdA6FDHRywz7QUzyX8i2f29qiLmmNcjvF2nd9mKjOzIVxPEkXh53cC4Qlto1y%2FHZIgcQqjXvaCcOHJMk0H7hXLZmrkQFCOUqjxE%2FhGs0t3cv2UafO4EX3LxTgbRGoU8A&source=JZ-GG17",
  "https://creditcard.cmbc.com.cn/wsv2/step?cardId=137&encryptStr=nrT4TgOV1PBUta%2Bv7M%2FR8%2FW20I9zU%2BZWw3dEQAL9mO6kkf9UI9TsGBV66RwjrD8OdyfmVCzdl4GXh5HgZuYxfqyQ07gBuCSixnuJZ0NrnTlSM7EtHRNZWkJHll5Jb0C2ljtcpPBFRq%2Fg07CafP3dK4WI26m6H1DPBKDCjvE6F4tf3Umb%2BWqAg4Yh7wn6glhxpuWqFy9FVqn8a45%2BrbDyJNol1kipoSHCmE%2BhZc9Z3L5%2BXzHxyGOKb5d1XuGIGnlq59KnuY6lJtUp%2BTIMWM%2F%2B6NALApJluWbHylnxG3%2BVhTIPyjKrlHwpxEADVXD4hWZiB6hTO75QzjjGBFbKY8ZhoiZxvEIIz7jw3TQnhHK6SjDKYCgKNBgOAih1htCcqlMKVMJzMLyXwQgp1a6YwTnR8t2OOU8GW2jsjXgV6m5bCXpl6RyRUSSp2z%2FKl2yLJrmuZQdfNladVi4F1N7VpKA%2F4%2F3Z4N3aotmARX1Oy9CZIqhQ1h8ZLa0txxtsSZ0TYnx3&source=JZ-GG17",
  "https://creditcard.cmbc.com.cn/wsv2/step?cardId=137&encryptStr=fECP4hZ0Wd4TSFyb4sfeLNYUuoFWoVtm1ppE6PVT74mn74KaRReLAp0mFR9m5HpLnf7xmsAmDc%2FQ4EL9P7CD%2Bhv7w%2FQuv7Bt1%2BnfHdEIBYeHSdrRMsxQ6tzYD0f2mt1NDBdrI2WzWrVwjYEzNXuycbDqprr0ps9sVEa8huVFstzDTBKeIAec2FHV6%2Fkg8UOOCLEkfVzf8T%2FHXtZgsFMcilf4zxX16RjnCux1pnenx%2B9ojFktfop6f5WVZOBvUQDD2tYdlsJwEcNrSwDySydXotJgcK7SL%2B%2FjSr72QxQpQHyRGJ%2F%2FwD2SlzOn7%2F2wOhCc7%2BxF%2B6mGjfwQt389vzhtEiudfUvBCoom%2F%2B3V818Ypk7x%2BwpPk7u9ir2XbJ895qnaN2HL6BWDdmImRyQsc3t2P75qKhm%2FzGwKkpCYP7zJOG8ve%2BB9QH7govja%2F22gGnEPNW898HgJsazN6XarDsH%2FZvn4HBYKL8A3V1%2BGuYHQCTWb5BB%2Fz5oyj%2FX4dc5AHNR3&source=JZ-GG17",
  "https://creditcard.cmbc.com.cn/wsv2/step?cardId=137&encryptStr=ujeb83kuIe4GLF7g4hLxUeMGL8zeFACH3nmpdFp6Nmf3jexeykjTR5OMx6xO2D3dqfAA3GOpcOeGb%2FIVLBFP9hhRKHMwDpyoCqC8Rfd4R1HmYN%2FNh%2F53QPxkQoLRbbR2lCBNBnpz%2FUjpjYr3Tt4NCHCZ7ukkKhxzeHfbbdhEkkESQwwRLWtt%2B9nQD91h8NiV5%2FFZfNCxRy3B%2BnQIoBfmeKbkOy2MuqSYGv9bIqDllCIeligxek8gRFG2zNsJewLFGPyXkGg77ai3%2F1SdvRg0UgY1CmfgSlHU3X9GlqNv2bax4j6tVTL8%2FAlLNUhmDPgZOYzxaQrtvTcabe1SaWXaQDVySwsJIGjzOqxGZp3JxPiZgHgnEfXhJf1gDyYIO8ivyFPiCV2iRDc01yxph%2FRjxzShui7WiJrfsi2i3by3THY8RBjJalbldx2ieWw5sdUqcKnL8JI4NzMkK5iCIta8TRhfrV%2BF9H4VOrWdSMkh9ShAUevhsS%2FwwjGrZ0NMqfYB&source=JZ-GG17",
  "https://creditcard.cmbc.com.cn/wsv2/step?cardId=137&encryptStr=VZRd8gP1LbkW2PKyeCBrdrgqdz7WexFWA7ltjv0HYguWu5b0viUzJ0gwZLW2GhLZW4DNLwoQdy%2Bhiqr5W8zotNh%2Br72hpR%2Fvv99JCSh3llqwQZkj46BKfmpmPl3no%2FwvseB1T4LNiwYoTTid55qGU5%2BagChz7ZSTyabdgWdzt4MfUfi0UizjXzLgq47cSLCMs3iWgxAhLB4exlrXk5dUIEslx6sXFoIL1wjsmcA4bK%2Fo5uD1ddCZTYGW3%2FxPKJVanjXdrH4xxyAyIxGp3HhEGmMmZhdNQLwBNfuPWFYBjk0Nsf59BpxEoEg0LOEgDfZl84jFtzsUbWntypL%2FoXQ9vXCvb1NWX9tbhUgYSU%2Bv1%2Bh%2FtLaXpApbNIxPxSSDUbHAXMteu46BUWChO1NH6Y66JtAD7mt8nRfJ%2B9dCs32PB3UW59y0wbwkh692XHkAVfRcwgtUiEjp%2Bff%2F7y1wbWH2BBBrWp34w6WuU5WpHHBUzByyY06tBIMHylPtcW5cnbC1&source=JZ-GG17",
  "https://creditcard.cmbc.com.cn/wsv2/step?cardId=137&encryptStr=ItWcE3ZTBMP0FPYK4KcrsqOQFfe3FbRNqf%2B%2Fa4nSaq841m5yAv5K9t0F1wxxmn1kqJniXOuvnAq2rUEvknd4%2BuRYwn%2Bj9qGISEguvx1Bf6IX7nADkJE%2B08dXzWs%2BzYHhAtQ5hj10LTTlZfld4378f%2FqBNed7XbEdy7S6X2oC6B0a1DN6DmljW7HJa0ji1mTWqa0nrk7OKNKmv%2BYYxWDWXCxruOXr2Y0oVvTenRKsUFt%2BzZZLwj0UconvU9WdIN1ZfuAVtgS4HUW%2BoFaTiE8z%2BCGwBgK2SLmqDR32zJQisMI%2BGwrMtghp6zOF%2FlnD0rOYELits74%2BLCR81xrl0VZ88zyhJss%2FN47JVfCxUnAuXA7YdBomnqx%2FfklAJw41Y6ykumtOfMEnmTo7I6CrZXGq1L8LV%2FOENXsTmVySNR%2F3%2B%2BsZuhUGXnLcaiv0VcH0U7tHtJsyGFOPlIft8csbvR7uaW3jTmj6CBM%2BQHKQS0icFiNxD65Wr4C4gifQhDGaYUOD&source=JZ-GG17",
  "https://creditcard.cmbc.com.cn/wsv2/step?cardId=137&encryptStr=HfydHdV4ohFuuQqZPiCQaEcqo4dYtN3ouDy5ysmL%2F5OGDgF4gGLf4RXCWGWL8W1PAkiJMV1lyZBVv2Ed1OtvvfmkP7jRpP7rGlmeJsMAAyhEX0%2Fe57xqZkAStNhHHsLriTRVud5d%2FpTF6PTjqphfAMzrQ8klrz1jiHFqEi3slXWp8T7Dtk4Ih3Jbz8Y6bHaPp5wIBgaFlmFrZPrLefo0PT1O%2FlA6C6wEfaZ7oLD7e6IoFKbkKwVrA4wAwD86uw6%2Bmvh2vt%2BP5%2FkaO608ttjprshen6MDNCeMpYcUVhMibThwi9pGgB%2BbmRe3Ar%2FUISU9R7scHJYz%2Bw1JAT%2BTjY0pEDv6PXOkqYs6zdAyDXPoMbfLmeZaM%2BmdsiyGjhO%2BNqUiUTavqDaQZWZ0MXr6krX7qaD6S7hUNIlDj%2Faa1d%2FTPnAF8LuKn6BKFMlP2MUNiUt5CrFBBpXl%2FvA8v5TNhb5FJjpAPlGZJ0ijzv7WaoHKwuEiEFehGastzKOgi%2BuoozIO&source=JZ-GG17",
  "https://creditcard.cmbc.com.cn/wsv2/step?cardId=137&encryptStr=M8uMfBp4B9W3drsyiNMZ0KDkInAdwGOvKWjA2ZutZbumhQ%2B69oT1UtQdGdTM4OV1eHlVP7Oa0nyXOMBn2gkbUQVQD2VzOF5mH1m8k9%2BBbm%2FtvAC06IhXfzktbhg1LcF5sF%2BOCgt8rZYNwBJrC3I4cE4bt3u6fBfFxKce%2By5mSSwiOEXvEd4rwvr%2B%2B092J1MbAzgv0Fnu%2FH9maSL1WTCQLpl1I50vVc6Nn0gL%2BrhL1kESwRQgGnKnqp9wwqy5J3jt9GStgixwhCssMmgQAvrzZBoV7oJ8tunf9MNFdG1dA6Hm03siQL7C07USK4%2BC3Nz%2F9y%2F2ZE39ycs3BedwBOQzC7lE5tAyyo2mhJmcG%2FDUiPhTvX2AXJN0h4fh%2FT8DydMRotY30oAcykszNo4S1inCUtVLFI%2BEZ7QDQq6JtDxwyYCGjTt0FAu8DLtidSzSwFqokKk6wbqIjNuwWcIGfJJYokovUKk%2BdhdPeUeQehXuvpgBrsDipzdGkkmR%2B2GHIx0j&source=JZ-GG17",
  ];
  num = random(0, 21);
  link = links[num];
  ctx.redirect(link);
})

module.exports = router
