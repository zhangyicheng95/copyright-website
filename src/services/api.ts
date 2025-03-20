import { fetchGet } from '@/utils/fetch';
import * as _ from 'lodash-es';

// 获取所有资源数据
export async function getAllHomeData() {
    return fetchGet(`${process.env.NODE_ENV === 'development' ? '/apiv1' : ''}/jkgl/dpjk/all.do`);
    //http://8.140.245.26:8081/apiv1

};
// 获取地图每个省份的旅客数据
export async function getMapTravelData() {
    // return fetchGet('http://api.wentouzhilv.com/jkgl/dpjk/all.do');
    return new Promise((resolve, reject) => {
        resolve({
            "totalVolume": 1848912105,
            "mapData": {
                "Shanghai": [
                    {
                        "name": "景区",
                        "value": 31
                    },
                    {
                        "name": "旅行社",
                        "value": 447
                    },
                    {
                        "name": "酒店",
                        "value": 1831
                    },
                    {
                        "name": "渠道",
                        "value": 24
                    },
                    {
                        "name": "今日客流量",
                        "value": 7382
                    },
                    {
                        "name": "本月客流量",
                        "value": 45871
                    }
                ],
                "Yunnan": [
                    {
                        "name": "景区",
                        "value": 36
                    },
                    {
                        "name": "旅行社",
                        "value": 642
                    },
                    {
                        "name": "酒店",
                        "value": 1258
                    },
                    {
                        "name": "渠道",
                        "value": 23
                    },
                    {
                        "name": "今日客流量",
                        "value": 6501
                    },
                    {
                        "name": "本月客流量",
                        "value": 40418
                    }
                ],
                "Inner Mongolia": [
                    {
                        "name": "景区",
                        "value": 34
                    },
                    {
                        "name": "旅行社",
                        "value": 196
                    },
                    {
                        "name": "酒店",
                        "value": 2619
                    },
                    {
                        "name": "渠道",
                        "value": 96
                    },
                    {
                        "name": "今日客流量",
                        "value": 9192
                    },
                    {
                        "name": "本月客流量",
                        "value": 27824
                    }
                ],
                "Beijing": [
                    {
                        "name": "景区",
                        "value": 27
                    },
                    {
                        "name": "旅行社",
                        "value": 719
                    },
                    {
                        "name": "酒店",
                        "value": 2123
                    },
                    {
                        "name": "渠道",
                        "value": 156
                    },
                    {
                        "name": "今日客流量",
                        "value": 7106
                    },
                    {
                        "name": "本月客流量",
                        "value": 7265
                    }
                ],
                "Taiwan": [
                    {
                        "name": "景区",
                        "value": 49
                    },
                    {
                        "name": "旅行社",
                        "value": 546
                    },
                    {
                        "name": "酒店",
                        "value": 1850
                    },
                    {
                        "name": "渠道",
                        "value": 174
                    },
                    {
                        "name": "今日客流量",
                        "value": 3624
                    },
                    {
                        "name": "本月客流量",
                        "value": 21435
                    }
                ],
                "Jilin": [
                    {
                        "name": "景区",
                        "value": 14
                    },
                    {
                        "name": "旅行社",
                        "value": 253
                    },
                    {
                        "name": "酒店",
                        "value": 1152
                    },
                    {
                        "name": "渠道",
                        "value": 24
                    },
                    {
                        "name": "今日客流量",
                        "value": 1573
                    },
                    {
                        "name": "本月客流量",
                        "value": 41830
                    }
                ],
                "Sichuan": [
                    {
                        "name": "景区",
                        "value": 36
                    },
                    {
                        "name": "旅行社",
                        "value": 540
                    },
                    {
                        "name": "酒店",
                        "value": 849
                    },
                    {
                        "name": "渠道",
                        "value": 61
                    },
                    {
                        "name": "今日客流量",
                        "value": 6819
                    },
                    {
                        "name": "本月客流量",
                        "value": 9464
                    }
                ],
                "Tianjin": [
                    {
                        "name": "景区",
                        "value": 45
                    },
                    {
                        "name": "旅行社",
                        "value": 773
                    },
                    {
                        "name": "酒店",
                        "value": 2597
                    },
                    {
                        "name": "渠道",
                        "value": 88
                    },
                    {
                        "name": "今日客流量",
                        "value": 4070
                    },
                    {
                        "name": "本月客流量",
                        "value": 39713
                    }
                ],
                "Ningxia": [
                    {
                        "name": "景区",
                        "value": 10
                    },
                    {
                        "name": "旅行社",
                        "value": 768
                    },
                    {
                        "name": "酒店",
                        "value": 1131
                    },
                    {
                        "name": "渠道",
                        "value": 174
                    },
                    {
                        "name": "今日客流量",
                        "value": 4811
                    },
                    {
                        "name": "本月客流量",
                        "value": 10147
                    }
                ],
                "Anhui": [
                    {
                        "name": "景区",
                        "value": 47
                    },
                    {
                        "name": "旅行社",
                        "value": 537
                    },
                    {
                        "name": "酒店",
                        "value": 1194
                    },
                    {
                        "name": "渠道",
                        "value": 42
                    },
                    {
                        "name": "今日客流量",
                        "value": 9162
                    },
                    {
                        "name": "本月客流量",
                        "value": 22897
                    }
                ],
                "Shandong": [
                    {
                        "name": "景区",
                        "value": 10
                    },
                    {
                        "name": "旅行社",
                        "value": 420
                    },
                    {
                        "name": "酒店",
                        "value": 2153
                    },
                    {
                        "name": "渠道",
                        "value": 114
                    },
                    {
                        "name": "今日客流量",
                        "value": 9364
                    },
                    {
                        "name": "本月客流量",
                        "value": 29280
                    }
                ],
                "Shanxi": [
                    {
                        "name": "景区",
                        "value": 44
                    },
                    {
                        "name": "旅行社",
                        "value": 98
                    },
                    {
                        "name": "酒店",
                        "value": 987
                    },
                    {
                        "name": "渠道",
                        "value": 192
                    },
                    {
                        "name": "今日客流量",
                        "value": 331
                    },
                    {
                        "name": "本月客流量",
                        "value": 25076
                    }
                ],
                "Guangdong": [
                    {
                        "name": "景区",
                        "value": 37
                    },
                    {
                        "name": "旅行社",
                        "value": 330
                    },
                    {
                        "name": "酒店",
                        "value": 1386
                    },
                    {
                        "name": "渠道",
                        "value": 71
                    },
                    {
                        "name": "今日客流量",
                        "value": 6168
                    },
                    {
                        "name": "本月客流量",
                        "value": 9689
                    }
                ],
                "Guangxi": [
                    {
                        "name": "景区",
                        "value": 35
                    },
                    {
                        "name": "旅行社",
                        "value": 646
                    },
                    {
                        "name": "酒店",
                        "value": 1046
                    },
                    {
                        "name": "渠道",
                        "value": 146
                    },
                    {
                        "name": "今日客流量",
                        "value": 2420
                    },
                    {
                        "name": "本月客流量",
                        "value": 2955
                    }
                ],
                "Xinjiang": [
                    {
                        "name": "景区",
                        "value": 43
                    },
                    {
                        "name": "旅行社",
                        "value": 761
                    },
                    {
                        "name": "酒店",
                        "value": 2348
                    },
                    {
                        "name": "渠道",
                        "value": 50
                    },
                    {
                        "name": "今日客流量",
                        "value": 8178
                    },
                    {
                        "name": "本月客流量",
                        "value": 44384
                    }
                ],
                "Jiangsu": [
                    {
                        "name": "景区",
                        "value": 43
                    },
                    {
                        "name": "旅行社",
                        "value": 235
                    },
                    {
                        "name": "酒店",
                        "value": 2351
                    },
                    {
                        "name": "渠道",
                        "value": 179
                    },
                    {
                        "name": "今日客流量",
                        "value": 6261
                    },
                    {
                        "name": "本月客流量",
                        "value": 14268
                    }
                ],
                "Jiangxi": [
                    {
                        "name": "景区",
                        "value": 35
                    },
                    {
                        "name": "旅行社",
                        "value": 733
                    },
                    {
                        "name": "酒店",
                        "value": 1887
                    },
                    {
                        "name": "渠道",
                        "value": 199
                    },
                    {
                        "name": "今日客流量",
                        "value": 872
                    },
                    {
                        "name": "本月客流量",
                        "value": 34007
                    }
                ],
                "Hebei": [
                    {
                        "name": "景区",
                        "value": 34
                    },
                    {
                        "name": "旅行社",
                        "value": 244
                    },
                    {
                        "name": "酒店",
                        "value": 2082
                    },
                    {
                        "name": "渠道",
                        "value": 176
                    },
                    {
                        "name": "今日客流量",
                        "value": 4488
                    },
                    {
                        "name": "本月客流量",
                        "value": 6085
                    }
                ],
                "Henan": [
                    {
                        "name": "景区",
                        "value": 41
                    },
                    {
                        "name": "旅行社",
                        "value": 757
                    },
                    {
                        "name": "酒店",
                        "value": 2906
                    },
                    {
                        "name": "渠道",
                        "value": 91
                    },
                    {
                        "name": "今日客流量",
                        "value": 1114
                    },
                    {
                        "name": "本月客流量",
                        "value": 22855
                    }
                ],
                "Zhejiang": [
                    {
                        "name": "景区",
                        "value": 23
                    },
                    {
                        "name": "旅行社",
                        "value": 692
                    },
                    {
                        "name": "酒店",
                        "value": 1710
                    },
                    {
                        "name": "渠道",
                        "value": 40
                    },
                    {
                        "name": "今日客流量",
                        "value": 2085
                    },
                    {
                        "name": "本月客流量",
                        "value": 45376
                    }
                ],
                "Hainan": [
                    {
                        "name": "景区",
                        "value": 16
                    },
                    {
                        "name": "旅行社",
                        "value": 259
                    },
                    {
                        "name": "酒店",
                        "value": 2496
                    },
                    {
                        "name": "渠道",
                        "value": 74
                    },
                    {
                        "name": "今日客流量",
                        "value": 3788
                    },
                    {
                        "name": "本月客流量",
                        "value": 41900
                    }
                ],
                "Hubei": [
                    {
                        "name": "景区",
                        "value": 22
                    },
                    {
                        "name": "旅行社",
                        "value": 132
                    },
                    {
                        "name": "酒店",
                        "value": 727
                    },
                    {
                        "name": "渠道",
                        "value": 65
                    },
                    {
                        "name": "今日客流量",
                        "value": 9872
                    },
                    {
                        "name": "本月客流量",
                        "value": 1660
                    }
                ],
                "Hunan": [
                    {
                        "name": "景区",
                        "value": 33
                    },
                    {
                        "name": "旅行社",
                        "value": 633
                    },
                    {
                        "name": "酒店",
                        "value": 542
                    },
                    {
                        "name": "渠道",
                        "value": 44
                    },
                    {
                        "name": "今日客流量",
                        "value": 4070
                    },
                    {
                        "name": "本月客流量",
                        "value": 45159
                    }
                ],
                "Macao": [
                    {
                        "name": "景区",
                        "value": 28
                    },
                    {
                        "name": "旅行社",
                        "value": 359
                    },
                    {
                        "name": "酒店",
                        "value": 2202
                    },
                    {
                        "name": "渠道",
                        "value": 158
                    },
                    {
                        "name": "今日客流量",
                        "value": 2462
                    },
                    {
                        "name": "本月客流量",
                        "value": 48411
                    }
                ],
                "Gansu": [
                    {
                        "name": "景区",
                        "value": 22
                    },
                    {
                        "name": "旅行社",
                        "value": 283
                    },
                    {
                        "name": "酒店",
                        "value": 761
                    },
                    {
                        "name": "渠道",
                        "value": 50
                    },
                    {
                        "name": "今日客流量",
                        "value": 7886
                    },
                    {
                        "name": "本月客流量",
                        "value": 30169
                    }
                ],
                "Fujian": [
                    {
                        "name": "景区",
                        "value": 15
                    },
                    {
                        "name": "旅行社",
                        "value": 256
                    },
                    {
                        "name": "酒店",
                        "value": 527
                    },
                    {
                        "name": "渠道",
                        "value": 176
                    },
                    {
                        "name": "今日客流量",
                        "value": 7755
                    },
                    {
                        "name": "本月客流量",
                        "value": 46345
                    }
                ],
                "Tibet": [
                    {
                        "name": "景区",
                        "value": 21
                    },
                    {
                        "name": "旅行社",
                        "value": 708
                    },
                    {
                        "name": "酒店",
                        "value": 2328
                    },
                    {
                        "name": "渠道",
                        "value": 164
                    },
                    {
                        "name": "今日客流量",
                        "value": 1424
                    },
                    {
                        "name": "本月客流量",
                        "value": 30894
                    }
                ],
                "Guizhou": [
                    {
                        "name": "景区",
                        "value": 35
                    },
                    {
                        "name": "旅行社",
                        "value": 402
                    },
                    {
                        "name": "酒店",
                        "value": 519
                    },
                    {
                        "name": "渠道",
                        "value": 198
                    },
                    {
                        "name": "今日客流量",
                        "value": 8254
                    },
                    {
                        "name": "本月客流量",
                        "value": 29834
                    }
                ],
                "Liaoning": [
                    {
                        "name": "景区",
                        "value": 33
                    },
                    {
                        "name": "旅行社",
                        "value": 594
                    },
                    {
                        "name": "酒店",
                        "value": 645
                    },
                    {
                        "name": "渠道",
                        "value": 168
                    },
                    {
                        "name": "今日客流量",
                        "value": 1045
                    },
                    {
                        "name": "本月客流量",
                        "value": 34388
                    }
                ],
                "Chongqing": [
                    {
                        "name": "景区",
                        "value": 11
                    },
                    {
                        "name": "旅行社",
                        "value": 276
                    },
                    {
                        "name": "酒店",
                        "value": 605
                    },
                    {
                        "name": "渠道",
                        "value": 107
                    },
                    {
                        "name": "今日客流量",
                        "value": 6357
                    },
                    {
                        "name": "本月客流量",
                        "value": 9697
                    }
                ],
                "Shaanxi": [
                    {
                        "name": "景区",
                        "value": 42
                    },
                    {
                        "name": "旅行社",
                        "value": 283
                    },
                    {
                        "name": "酒店",
                        "value": 1445
                    },
                    {
                        "name": "渠道",
                        "value": 103
                    },
                    {
                        "name": "今日客流量",
                        "value": 2106
                    },
                    {
                        "name": "本月客流量",
                        "value": 22761
                    }
                ],
                "Qinhai": [
                    {
                        "name": "景区",
                        "value": 17
                    },
                    {
                        "name": "旅行社",
                        "value": 699
                    },
                    {
                        "name": "酒店",
                        "value": 1487
                    },
                    {
                        "name": "渠道",
                        "value": 127
                    },
                    {
                        "name": "今日客流量",
                        "value": 8365
                    },
                    {
                        "name": "本月客流量",
                        "value": 25591
                    }
                ],
                "Hong Kong": [
                    {
                        "name": "景区",
                        "value": 28
                    },
                    {
                        "name": "旅行社",
                        "value": 134
                    },
                    {
                        "name": "酒店",
                        "value": 1034
                    },
                    {
                        "name": "渠道",
                        "value": 24
                    },
                    {
                        "name": "今日客流量",
                        "value": 9795
                    },
                    {
                        "name": "本月客流量",
                        "value": 10548
                    }
                ],
                "Heilongjiang": [
                    {
                        "name": "景区",
                        "value": 22
                    },
                    {
                        "name": "旅行社",
                        "value": 438
                    },
                    {
                        "name": "酒店",
                        "value": 1447
                    },
                    {
                        "name": "渠道",
                        "value": 168
                    },
                    {
                        "name": "今日客流量",
                        "value": 9989
                    },
                    {
                        "name": "本月客流量",
                        "value": 29584
                    }
                ]
            }
        });
    });
};
// 获取累计交易总额
export async function getTotalData() {
    return fetchGet(`${process.env.NODE_ENV === 'development' ? '/apiv1' : ''}/jkgl/dpjk/ljjyje.do`);
    //http://8.140.245.26:8081/apiv1
};


