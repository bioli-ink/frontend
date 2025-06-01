import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';

import { PlatformRules, SocialLinkType } from '@/app/types/my';
import { SocialPlatform } from '@/app/types/my/social-links/platform';

export const PLATFORM_RULES: Partial<Record<SocialPlatform, PlatformRules>> = {
  [SocialPlatform.WECHAT]: {
    isTop: true,
    type: SocialLinkType.QR_CODE,
  },
  [SocialPlatform.PHONE]: {
    isTop: true,
    type: SocialLinkType.PHONE,
    validator: phoneNum => isMobilePhone(phoneNum, 'zh-CN'),
  },
  [SocialPlatform.BILI_BILI]: {
    example: 'https://space.bilibili.com/{uid}',
    source: 'https://www.bilibili.com',
    validator: url => Boolean(url.match(/^https?:\/\/space\.bilibili\.com\/.*$/)),
  },
  [SocialPlatform.DOU_YIN]: {
    example: 'https://www.douyin.com/user/{uid}',
    source: 'https://www.douyin.com',
    validator: url => Boolean(url.match(/^https?:\/\/www\.douyin\.com\/user\/.*$/)),
  },
  [SocialPlatform.GITHUB]: {
    example: 'https://www.github.com/{uid}',
    source: 'https://www.github.com',
    validator: url => Boolean(url.match(/^https?:\/\/www\.github\.com\/.*$/)),
  },
  [SocialPlatform.JUE_JIN]: {
    example: 'https://juejin.cn/user/{uid}',
    source: 'https://juejin.cn',
    validator: url => Boolean(url.match(/^https?:\/\/juejin\.cn\/user\/[0-9]+$/)),
  },
  [SocialPlatform.KUAI_SHOU]: {
    example: 'https://www.kuaishou.com/profile/{uid}',
    source: 'https://www.kuaishou.com/',
    validator: url => Boolean(url.match(/^https?:\/\/www\.kuaishou\.com\/profile\/.*$/))
  },
  [SocialPlatform.MAI_MAI]: {
    example: 'https://maimai.cn/profile/detail?dstu={uid}',
    source: 'https://maimai.cn',
    validator: url => Boolean(url.match(/^https?:\/\/maimai\.cn\/profile\/detail\?dstu=[0-9]+$/))
  },
  [SocialPlatform.WEBSITE]: {
    example: 'www.your-domain.com',
    validator: url => Boolean(url.match(/^(http:\/\/|https:\/\/)?(.*)\.(.*)\.(.*)$/))
  },
  [SocialPlatform.WEI_BO]: {
    example: 'https://weibo.com/u/{uid}',
    source: 'https://weibo.com',
    validator: url => Boolean(url.match(/^https?:\/\/weibo\.com\/u\/[0-9]+$/))
  },
  [SocialPlatform.XIAO_HONG_SHU]: {
    example: 'https://www.xiaohongshu.com/user/profile/{uid}',
    source: 'https://www.xiaohongshu.com',
    validator: url => Boolean(url.match(/^https:\/\/www\.xiaohongshu\.com\/user\/profile\/.*$/))
  },
  [SocialPlatform.ZHI_HU]: {
    example: 'https://www.zhihu.com/people/{uid}',
    source: 'https://www.zhihu.com',
    validator: url => Boolean(url.match(/^https:\/\/www\.zhihu\.com\/people\/.*$/))
  },
  [SocialPlatform.WE_COM]: {
    type: SocialLinkType.QR_CODE,
  },
  [SocialPlatform.EMAIL]: {
    type: SocialLinkType.EMAIL,
    validator: email => isEmail(email),
  },
  [SocialPlatform.QQ]: {
    type: SocialLinkType.COPY_TEXT,
    validator: qq => Boolean(qq.match(/^\d*$/)),
  }
}
